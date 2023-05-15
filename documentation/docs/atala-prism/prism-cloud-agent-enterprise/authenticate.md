# Authenticate

Authenticate relies on the powers of decentralized identifiers (DIDs). By using
DIDs, users can prove their identity and authenticate themselves and their
interactions with other parties in a decentralized, secure manner. Organisations
can utilise this technology to streamline their business processes and make
authentication transparent and more secure to their users.

Authenticate provides primitives to facilitate the authentication of users and
devices through DIDs they control. These primitives include creating and
managing **authentication challenges**, which are special requests for users or
devices to prove their identity.

## Actors

- **User** or a **device** - the party that is being authenticated.
- **SSI Wallet** - any piece of software able to create and manage DIDs - in 
control of the user. 
- **Application** - the party that is requesting authentication. Has its own
  state and business logic.
- **Authenticate Service** - a service that provides authentication primitives
  (managing authentication challenges and responses).

## Authentication flow

On a high level, the authentication flow starts with the application creating a
challenge, encoding it and sending it to the other party. The other party then
uses their SSI wallet to respond to the challenge by signing the nonce and
sending it back to the submission endpoint specified in the challenge.

Let's go through the whole process in more detail.

Application creates a new **authentication challenge**. Challenge contains a nonce,
expiration time, and submission endpoint. It also contains a `type` field, which
is used as a protocol identifier for wallets to understand how to process the
message.

An example of authentication challenge state:

```json
{
  "self": "https://demo.atalaprism.io/did-authentication/challenges/challenge-id-1234",
  "kind": "AuthenticationChallengeState",
  "id": "challenge-id-1234",
  "challenge": {
    "type": "https://atalaprism.io/authentication-challenge",
    "submissionEndpoint": "https://demo.atalaprism.io:8085/did-authentication/challenge-submissions/request-id-1234",
    "nonce": "authenticate-NzIxZTZmNjQtOGY0Ni00ODQ4LWFhYjAtZGYzNDJmYzNlMjM2",
    "from": "Application ABC",
    "expireAt": "2021-10-31T09:22:23Z"
  },
  "did": null,
  "state": "pending",
  "createdAt": "2023-02-24T19:13:23Z",
  "updatedAt": "2023-02-24T19:13:23Z"
}
```

It contains `challenge` field and other metadata which could be used to track
the challenge over time.

> NOTE: Only `challenge` field should be encoded and sent to the other side!

Optional `from` field could be added too. It is a human-readable label which
represents the party requesting authentication. Wallets could use this label
later to display information to users about who is sending request.

Initial state is `pending`, and `did` field is `null`.

Next, the `challenge` object is encoded, typically as a QR code or deep link,
depending on the use-case. Encoded challenge is then presented or sent to the
other party.

Now, the receiving party uses their wallet to decode and process the received
authentication challenge. In this case, `type` field is checked for value
`https://atalaprism.io/authentication-challenge`. Wallet then should
present a prompt to the user to accept or reject the request, showing optionally
`from` label. If user accepts the request, next step is to instruct the
wallet which DID to use to respond to the challenge. Authentication key from selected DID is used to
sign the `nonce` field and to send the signature , along with used DID, to the
submission endpoint specified in the challenge.

Upon receiving the response, the Authenticate service verifies the signature and
updates the challenge state accordingly. In the case of invalid signature, the
state is set to `error`. In the case of valid signature, the state is set to
`success` and `did` field is populated with the DID used to sign the response.

During the process, application can query the state of sent authentication
challenge to check if the response has been received and if it's valid. As
mentioned, terminal state is either `error` or `success`. Once the challenge
response is received, the application can act upon it, depending on the business
logic. For example, creating a login session for the user based on JWT.

> NOTE: Authenticate service only checks if the signature is valid, based on the
> DID used to sign the response. Checking if given DID is known to the
> application is the responsibility of the application itself.

## Code example

Here's an example of how user login flow could be implemented using Authenticate
API. We will demonstrate how to add DID-based authentication to an existing 
application, which already has a user database and supports password-based login.

> NOTE: Please note that this code is not intended to be executed directly, but
> rather a code 'sketch' intended to illustrate the general flow. There are many
> possible ways to implement this flow, and this is just one example.

Example code is written in JavaScript/TypeScript, but it should be easy to
translate it to any other language. API could be consumed directly or via a generated client library. For example,
[Orval tool](https://orval.dev/) could be used to generate TypeScript API client
from OpenAPI spec.

```shell
npx orval --input ./enterprise-services-spec.yml --output ./prism-api-client.ts
```

Let's use this hypothetical user model as an example:

```ts
interface User {
  id: string;
  email: string;
  password: string;
  did?: string;
  name: string;
  company?: string;
}
```

Here is the implementation of endpoint called by the application front-end to 
start the DID-based login flow. New authentication challenge is created and encoded as a QR code.

```js
async function handleDidAuthRequest() {
  // we are using generated API client here to interact with Authenticate service.
  const authChallengeState = await prismApiClient.createAuthenticationChallenge({
    from: 'Application ABC',
  });

  // depends on the use-case: QR code, deep link or something else!
  const encodedAuthChallenge = encodeAsQrCode(authChallengeState.challenge);

  await respondWithSuccessToApplicationFrontend(authChallengeState.id, encodedAuthChallenge);
  console.info(`Challenge "${authChallengeState.id}" has been created and sent to the front-end.`);
}
```
Once the QR code is presented to the user for scanning with their mobile wallet,
front-end app could call an endpoint to track the challenge state and wait for
the response.

```js
async function trackAuthChallengeState(challengeId) {
  while (true) {
    const authChallengeState = await prismApiClient.getAuthenticationChallenge(challengeId);

    // expiration time default is 2 minutes
    if (isExpired(authChallengeState.challenge.expireAt)) {
      console.info(`Challenge "${authChallengeState.id}" has been expired`);
      return respondWithErrorToApplicationFrontend("CHALLENGE_EXPIRED");
    }

    if (authChallengeState.state === "error") {
      // invalid response has been received - either invalid signature or invalid body format
      console.info(`Invalid response to challenge "${authChallengeState.id}" has been received`);
      return respondWithErrorToApplicationFrontend("INVALID_CHALLENGE_RESPONSE");
    }

    if (authChallengeState.state === "success") {
      console.info(`Valid response to challenge "${authChallengeState.id}" has been received`);
      console.info(`Challenge signed with DID: "${authChallengeState.did}"`);

      // user has to use DID which is already registered in the application!
      const userData = await getUserByDid(authChallengeState.did);

      if (!userData) {
        return respondWithErrorToApplicationFrontend("UNKNOWN_DID");
      }

      // create JWT access token, in the same way as it's done for password-based login
      const accessToken = jwt.sign({ userId: userData.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return respondWithSuccessToApplicationFrontend({
        accessToken, 
        userData: {
          id: userData.id,
          did: userData.did, 
          email: userData.email, 
        }
      });
    }

    // challenge is still pending - wait for a while and check again
    await wait(5000);
  }
}
```

> NOTE: Please be aware that the Authenticate service currently does not provide
> an eventing mechanism. Therefore, the application is responsible for 
> periodically checking the challenge state. However, when eventing is eventually
> implemented, this aspect of the flow will be easier to cover in a reliable way.

## How wallets should respond to authentication challenge?

Upon receiving a challenge, wallets should extract the `nonce` field, pick a DID
to use for signing the response and sign the `nonce` field. The signature should
be submitted to the `submissionEndpoint`, along with the DID used to sign.

Current restrictions and expectations:
* `{ signature, did }` shape of object should be submitted as a JSON body to the 
`submissionEndpoint`.
* Only `did:peer` DIDs are supported - `numalgo` 0 and 2 variants.
* Ed25519 authentication key is expected to be used for signing.
* Signature should be encoded as a `base64Url` string.

### Code example - wallet integration with TypeScript Wallet SDK

Wallets and other applications can use the TypeScript SDK to create required 
key pairs and DIDs. Also, to resolve DIDs, sign data and verify signatures. Here
is an example of how to do it:

> NOTE: We assume that wallet already has a DID created and stored in the wallet,
> see Onboard service docs for more details about that step.

```ts
import {Apollo, Castor, Domain} from "@input-output-hk/atala-prism-wallet-sdk";
import * as jose from "jose";

// init Apollo and Castor SDK modules. 
// Apollo = cryptography, Castor = DIDs management.
const apollo = new Apollo();
const castor = new Castor(apollo);

/**
 * Wallet will receive encoded authentication challenge as a deep link, QR code,
 * or in some other way. This is the function which will handle decoded challenge. 
 * We assume that user has already selected a DID to use for signing the challenge.
 * DID is usually a part of wallet specific abstraction - contact/account/avatar.
 *
 * @param {type, from, nonce, expireAt, submissionEndpoint} authChallenge
 * @param {string} did
 */
async function handleDidRequest(authChallenge, did) {
    if (authChallenge.type !== "https://atalaprism.io/authentication-challenge") {
        throw new Error("Invalid Authentication Challenge");
    }

    // application specific logic to retrieve private keys for DID from wallet storage
    const keys = await getKeysForDidFromStorage(did);
    
    // we need to sign with ED25519 key
    const authKeyPair = keys.find(key => key.curve === Domain.Curve.ED25519);
    const signature = apollo.signStringMessage(authKeyPair.privateKey, authChallenge.nonce);
    
    // POST signature & did back to the Authenticate service - using axios for example
    await axios.post(authChallenge.submissionEndpoint, {
        did,
        signature: jose.base64url.encode(signature.value),
    });
}
```
