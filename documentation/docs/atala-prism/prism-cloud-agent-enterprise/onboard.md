# Onboard

Onboard provides a way to request and obtain a Decentralized Identifier (DID) 
from another party. The goal of this product is to facilitate onboarding 
towards systems based on SSI. The obtained DID can then be used as input to 
various SSI-based services, such as authentication using DID.

> Note: This process occurs out-of-band, meaning no DIDComm messaging is 
> utilized. If you are seeking to use DIDComm based, agent-to-agent services, 
> please see the Connect product page.

## Getting a DID

On a high level, the process of obtaining a DID includes creating a DID request, 
encoding it and sending it to the other party. The other party then uses their 
wallet to scan/receive the DID request and send back the DID, either existing or 
a new one.

Let's go through the whole process in more detail.

The inviting party creates a so called "DID request". An example of request state:

```json
{
  "self": "https://demo.atalaprism.io/did-requests/did-request-1234",
  "kind": "DidRequestState",
  "id": "did-request-1234",
  "didRequest": {
    "type": "https://atalaprism.io/did-request",
    "onboardEndpoint": "https://demo.atalaprism.io:8085/request-id-1234",
    "from": "Application ABC"
  },
  "did": null,
  "state": "pending",
  "createdAt": "2023-02-24T10:22:23Z",
  "updatedAt": "2023-02-24T10:22:23Z"
}
```
It contains `didRequest` field and other metadata which could be used to track 
the request over time. 

> NOTE: Only `didRequest` field should be encoded and sent to the other side!

Optional `from` field could be added too. It is a human-readable label which 
represents the inviting party. Wallets could use this label later to display 
information to users about who is sending request.

Initial state is `pending`, and `did` field is `null`.

Next, the `didRequest` object is encoded, typically as a QR code or deep link,
depending on the use-case. Encoded request is then sent to the other party via an 
appropriate channel: email, chat message, or presenting it directly in a web app.

Now, the receiving party uses their wallet to decode and process the received 
DID request. Type of message is identified by `type` field. In the case of DID 
request, it is `https://atalaprism.io/did-request`. The wallet then should 
present a prompt to the user to accept or reject the request, showing optionally
`from` label. If the user accepts the request, the wallet creates a new 
relationship and sends its DID back to the `onboardEndpoint` specified in the 
DID request.

During the process, the inviting party can query the state of sent DID request 
to check if the response has been received. Terminal state is either `error` or 
`success` with received DID in `did` field. Once the DID is received, depending
on the business logic, the application can act upon it, for example, associate
it with a user ID in the main application state.

> NOTE: DID request is for a one-time use only. If the response is received,
> request is invalidated and cannot be used again.

> NOTE: Currently, no mechanism to verify if submitted DID is under control of 
> the other party is implemented. See Authenticate API if such feature is 
> required.

## Code example

Here is the code example of the process of adding a DID to an existing user 
profile:

### Server side

```js
/**
 * This is an example of a server side handler. Imagine a web application which 
 * has a "Connect with DID" button on the user profile page, which triggers this
 * flow.
 */
async function createDidRequest(context) {
  // get the existing user profile from the application database for a given userId
  let userProfile = await getUserById(context.userId);

  // to interact with Onboard API, we use an API client generated based on OpenAPI
  // specification, with a tool such as Orval.
  let didRequestState = await prismApiClient.createDidRequest({
    from: "Application ABC"
  })

  // depends on the use-case: deep link, QR code, or something else!
  let encodedDidRequest = encodeAsDeepLink(didRequestState.didRequest);
  
  // could be any communication channel, we use email here as an example
  await sendDidRequestToEmail(userProfile.email, encodedDidRequest);
  
  // track the state of DID request in the background - no events yet!
  await scheduleBackgroundTrackingJob({
    requestId: didRequestState.id, 
    userId: context.userId
  });
  await respondWithSuccessToApplicationFrontend();
  
  console.info(`DID request "${didRequestState.id}" has been created and sent to user.`);
}
```

Since no eventing mechanism is implemented at the moment, the application should
periodically check the state of the DID request. For example, this could be a way
to implement processing step in a background job:

```js
async function checkDidRequest(didRequestId, userId) {
  let didRequestState = await prismApiClient.getDidRequest(didRequestId);

  if (didRequestState.state === "error") {
    console.log(`DID request (${didRequestState.id}) for ${userId} has been either rejected or failed`);
    await cancelBackgroundTrackingJob();
    return;
  } 
  
  if (didRequestState.did) {
    console.log(`Received a DID (`${didRequestState.did}`) from ${userId} at ${didRequestState.updatedAt}`);
    await updateUserProfile(userId, {did: didRequestState.did});
    await cancelBackgroundTrackingJob();
    return;
  }
  
  // ...still no response, wait for next check iteration
}
```

### Holder side - wallet integration with TypeScript Wallet SDK

Wallets and other applications can use the TypeScript SDK to create DIDs needed
to respond to DID requests. Here is an example of how to do it:

> NOTE: See Wallet SDK documentation for more information on how to use it.

```ts
import {Apollo, Castor, Domain} from "@input-output-hk/atala-prism-wallet-sdk";

// init Apollo and Castor SDK modules. 
// Apollo = cryptography, Castor = DIDs management.
const apollo = new Apollo();
const castor = new Castor(apollo);

/**
 * Wallet will receive encoded DID request as a deep link, QR code, or in some
 * other way. This is the function which will handle decoded DID request. This 
 * is just a simple example where new Peer DID is created and sent back to the 
 * Onboard service. In a real-world application, there would be some more 
 * complex flow in which user would be asked to confirm the request, and create
 * a new contact or avatar in the wallet (or select an existing one).
 *
 * @param {type, from, onboardEndpoint} didRequest
 */
async function handleDidRequest(didRequest) {
    if (didRequest.type !== "https://atalaprism.io/did-request") {
        throw new Error("Invalid DID request");
    }

    // create new authentication and key agreement key pairs, and use them to 
    // create a new Peer DID. Onboard service accepts any DID, but if you plan
    // to use it with Authenticate, you should use Peer DIDs.
    const authKeyPair = apollo.createKeyPairFromKeyCurve({
        curve: Domain.Curve.ED25519,
    });
    const keyAgreementKeyPair = apollo.createKeyPairFromKeyCurve({
        curve: Domain.Curve.X25519,
    });
    const peerDID = await castor.createPeerDID(
        [authKeyPair, keyAgreementKeyPair],
        []
    );
    const didStr = peerDID.toString();
    
    const newContact = {
        name: didRequest.from,
        did: didStr,
        keys: [authKeyPair, keyAgreementKeyPair]
    };
    
    // store the new contact in the wallet database
    await storeContact(newContact);
    
    // POST created DID back to the Onboard service - using axios for example
    await axios.post(didRequestReceived.onboardEndpoint, {
        did: didStr,
    });
}
```

## Summary

In the previous section, we discussed the process of obtaining a DID. Typically, 
the requesting party is an application aiming to extend its feature set with SSI
capabilities, and the receiving party is a user with their own SSI wallet. The 
Onboard service serves as an auxiliary service which helps to facilitate the 
process of obtaining a DID by providing necessary abstractions and state 
management. We also provided a code example of how to use the Onboard API from
both sides of the process.
