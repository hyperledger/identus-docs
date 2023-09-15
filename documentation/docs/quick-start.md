---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start Guide
## Introduction into Self Sovereign Identity (SSI) and PRISM

This quick introduction will get you up and running and immediately productive with PRISM and help you understand how the pieces fit together into an [SSI](documentation/docs/concepts/glossary.md/#self-sovereign-identity) interaction.

### A typical Self-Sovereign Identity interaction

![Component Diagram](/img/component-diagram.png)

### An overview of Atala PRISM
Atala PRISM consists of core components to facilitate typical SSI interactions between [issuers](documentation/docs/concepts/glossary.md/#issuer), [holders](documentation/docs/concepts/glossary.md/#holder), and [verifiers](documentation/docs/concepts/glossary.md/#verifier). 

#### A Cloud Agent
A Cloud Agent can issue, hold, and verify [verifiable credentials (VCs)](documentation/docs/concepts/glossary.md/#verifiable-credentials) for any entity and manage [decentralized identifiers (DIDs)](documentation/docs/concepts/glossary.md/#decentralized-identifier) and DID-based connections. The PRISM Cloud Agent has an easy-to-use REST API to enable easy integration into any solution and uses [DIDComm V2](documentation/docs/concepts/glossary.md/#didcomm) as a messaging protocol for agent-to-agent communication.

It is maintained as an open source component through the [Hyperledger Lab: Open Enterprise Agent](https://labs.hyperledger.org/labs/open-enterprise-agent.html) organisation.

More in depth documentation about Cloud Agent can be found [here](/docs/atala-prism/prism-cloud-agent/overview).

#### Wallet SDKs
Wallet SDKs for web and mobile (iOS, Android, Typescript) enable identity holders to safely store credentials and respond to proof requests. They are typically used in applications that allow identity holders to interact with issuers and verifiers. 

More in-depth documentation about the different Wallet SDKs can be found here ([TypeScript](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/), [Swift](https://input-output-hk.github.io/atala-prism-wallet-sdk-swift/), [KMM](https://input-output-hk.github.io/atala-prism-wallet-sdk-kmm/))

#### A Mediator
Mediators are for storing and relaying messages between Cloud Agents and Wallet SDKs. They act as a proxy that remains connected to the network and receives any message, credential, or proof-request on behalf of the Wallet SDKs (which can be offline occasionally).

More in-depth documentation about PRISM Mediator can be found [here](/docs/atala-prism/prism-mediator).

#### A Node for a Verifiable Data Registry (VDR)
To issue and verify VCs to and from DIDs, we need a [Verifiable Data Registry (VDR)](documentation/docs/concepts/glossary.md/#verifiable-data-registry) that is globally resolvable and always on. In PRISM's case, it is `prism-node`, anchoring key information required for issuance and verification on the Cardano blockchain.

### Supported Standards
Being part of a decentralized ecosystem with varying technology implementations requires standardization to ensure interoperability between different solutions. The standards currently supported by PRISM are:

1. [W3C Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-core/)
    1. [DID:Peer](https://identity.foundation/peer-did-method-spec/)
    2. [DID:PRISM](https://github.com/input-output-hk/prism-did-method-spec)
2. [W3C VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/)
    1. JWT-VC
3. [DIF DIDComm V2](https://identity.foundation/didcomm-messaging/spec/v2.0/)
4. [Hyperledger Anoncreds v1](https://www.hyperledger.org/projects/anoncreds)
5. [A selection of Hyperledger Aries RFCs](https://github.com/hyperledger/aries-rfcs)


## PRE-REQUISITES

### Agent Deployment
This guide will demonstrate a single-tenant deployment with API Key authentication disabled and an in-memory ledger for published DID storage, which is the simplest configuration to get started as a developer. More advanced configuration options can be found in [Multi-Tenancy Management](/tutorials/multitenancy/tenant-onboarding) and associated [Environment Variables](/docs/atala-prism/prism-cloud-agent/environment-variables) configuration options. 

To spin up an Cloud Agent you must:
1. Have Docker installed.
2. Clone the [Open Enterprise Agent repository](https://github.com/hyperledger-labs/open-enterprise-agent).


Once cloned, create a new environment variable configuration file to define the Issuer Agent __infrastructure/local/.env-issuer__ with the following content:  

```
API_KEY_ENABLED=false 
PRISM_AGENT_VERSION=1.12.0
PRISM_NODE_VERSION=2.2.1
PORT=8000
NETWORK=prism
VAULT_DEV_ROOT_TOKEN_ID=root
DIDCOMM_SERVICE_URL=http://localhost:8000
```

To define the Verifier Agent, create a new environment variable configuration file __infrastructure/local/.env-verifier__ with the following content:  

```
API_KEY_ENABLED=false 
PRISM_AGENT_VERSION=1.12.0
PRISM_NODE_VERSION=2.2.1
PORT=9000
NETWORK=prism
VAULT_DEV_ROOT_TOKEN_ID=root
DIDCOMM_SERVICE_URL=http://localhost:9000
```

Setting the `API_KEY_ENABLED` to `false` disables the requirement of using API Keys.

:::caution

API_KEY_ENABLED disables API Key authentication. This should NOT be used beyond Development purposes.

:::

3. Start the `issuer` and `verifier` Cloud Agents.

```bash
 ./infrastructure/local/run.sh -n issuer -b -e ./infrastructure/local/.env-issuer -p 8000
 ./infrastructure/local/run.sh -n verifier -b -e ./infrastructure/local/.env-verifier -p 9000
```

The Issuer [API endpoint](http://localhost:8000/prism-agent/) will be accessible on port 8000 `http://localhost:8000/prism-agent/` with a [Swagger Interface](http://localhost:8000/prism-agent/redoc) available at `http://localhost:8000/prism-agent/redoc`.


The Verifier [API endpoint](http://localhost:9000/prism-agent/) will be accessible on port 9000 `http://localhost:9000/prism-agent/` with a [Swagger Interface](http://localhost:9000/prism-agent/redoc) available at `http://localhost:9000/prism-agent/redoc`.

### Agent configuration

#### Creating LongForm PrismDID 
::: info
This step is optional if the Cloud Agent already has a published DID. If you want to go straight to the point where the published PRISM DID is used, refer to [this section](/docs/quick-start#create-a-credential-schema-jwt-w3c-credential)
:::

Run the following API request against your Issuer API to create a PRISM DID

```bash
curl --location \
--request POST 'http://localhost:8000/prism-agent/did-registrar/dids' \
--header 'Accept: application/json' \
--data-raw '{
    "documentTemplate": {
        "publicKeys": [
        {
          "id": "auth-1",
          "purpose": "authentication"
        },
        {
          "id": "issue-1",
              "purpose": "assertionMethod"	
        }
      ],
      "services": []
    }
}'
```

Create a PRISM DID operation and publish the DID by replacing {didRef} with the `longFormDid` output value from the previous create DID step.

```bash
curl --location \
--request POST 'http://localhost:8000/prism-agent/did-registrar/dids/{didRef}/publications' \
--header 'Accept: application/json'
```

#### Choose one published Prism DID
This API endpoint will help you choose the previously published did on the Issuer instance used throughout the guide.

```bash
curl --location \
--request GET 'http://localhost:8000/prism-agent/did-registrar/dids'
```

Copy the `did` output value for the next steps.

#### Create a credential schema (JWT W3C Credential)

To create a credential schema on the Issuer instance, run the following request:
:::info
Replace the `[[publishedPrismDID]]` in the example request with the `did` value from the previous step.
:::

```bash
curl -X 'POST' \
  'http://localhost:8000/prism-agent/schema-registry/schemas' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "driving-license",
  "version": "1.0.0",
  "description": "Driving License Schema",
  "type": "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json",
  "author": [[publishedPrismDID]],
  "tags": [
    "driving",
    "license"
  ],
  "schema": {
    "$id": "https://example.com/driving-license-1.0.0",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "Driving License",
    "type": "object",
    "properties": {
      "emailAddress": {
        "type": "string",
        "format": "email"
      },
      "givenName": {
        "type": "string"
      },
      "familyName": {
        "type": "string"
      },
      "dateOfIssuance": {
        "type": "string",
        "format": "date-time"
      },
      "drivingLicenseID": {
        "type": "string"
      },
      "drivingClass": {
        "type": "integer"
      }
    },
    "required": [
      "emailAddress",
      "familyName",
      "dateOfIssuance",
      "drivingLicenseID",
      "drivingClass"
    ],
    "additionalProperties": true
  }
}'
```

More in-depth documentation can be found here [PRISM Infrastructure](/docs/category/infrastructure)

### Starting Sample App
All wallet SDK's come bundled with a sample application, that cover all the prism flows, including establishing connections, issuance, and verification flows.

<Tabs>
<TabItem value="js" label="Typescript">

Clone the [Typescript SDK](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts) repository.

Run the following commands:
1. Build the source SDK:

```bash
npm i 
npm run build
```

2. Start the React demo:
```bash
cd demos/browser
npm i 
npm run start
```

This will start the react Wallet SDK TypeScript Demonstration at [http://localhost:3000](http://localhost:3000).

</TabItem>
<TabItem value="swift" label="Swift">

```swift
tbd
```

</TabItem>
<TabItem value="android" label="Android">

Clone the [KMM SDK](https://github.com/input-output-hk/atala-prism-wallet-sdk-kmm) repository.

1. Open the Wallet SDK project on IntelliJ or Android Studio.
2. In the `Run configuration` dropdown, select SampleApp.
3. Select the device or emulator you want to use.
3. Click run.

The SampleApp will launch on the applicable device or emulator.

</TabItem>
</Tabs>

### Deploy & Establish Mediation
Mediation is the process that ensures messages get routed and stored correctly between Issuers, Verifiers and Holders, even if they are offline. The mediator offers a service that is always running and can securely store messages and deliver them to the associated DIDs using DIDComm. This enables use-cases where connectivity to a (mobile) wallet cannot be guaranteed.

To get the mediator deployed locally for the demo, clone the [Mediator repository](https://github.com/input-output-hk/atala-prism-mediator).

With a Docker service running, open a new terminal and run:
:::info The latest mediator version can be found at [Mediator releases](https://github.com/input-output-hk/atala-prism-mediator/releases). Change the version in the example if you want to use the latest version.
:::

```bash
MEDIATOR_VERSION=0.9.2 docker-compose up
```

MEDIATOR ENDPOINT is then set to [http://localhost:8080](http://localhost:8080).

More advanced documentation and configuration options can be found [here](https://github.com/input-output-hk/atala-prism-mediator). 

When running the SampleApp, the Cloud Agent starts, and mediation begins automatically. Mediation is a process where we inform the mediator about how to reach our Edge Agent and will expose protocols for the Holder to help him fetch messages, change routing, etc.

If you are running the SampleApp, click the "Start Agent" button.


<Tabs>
<TabItem value="js" label="Typescript">

In order to complete this step you'll need to connect to the mediators Peer DID which you can fetch by making the following API request.

```bash
curl --location \
--request GET '[[MEDIATOR ENDPOINT]]/invitation' \
--header 'Content-Type: application/json' \
```

<Tabs>
<TabItem value="js" label="Typescript">



An out-of-band invitation gets generated. We need the `from` field containing the Mediators PeerDID.


```typescript
  const mediatorDID = SDK.Domain.DID.fromString(
    [[MEDIATOR DID PEER]]
  );
  const api = new SDK.ApiImpl();
  const apollo = new SDK.Apollo();
  const castor = new SDK.Castor(apollo);
  const didcomm = new SDK.DIDCommWrapper(apollo, castor, pluto);
  const mercury = new SDK.Mercury(castor, didcomm, api);
  const store = new SDK.PublicMediatorStore(pluto);
  const handler = new SDK.BasicMediatorHandler(mediatorDID, mercury, store);
  const manager = new SDK.ConnectionsManager(castor, mercury, pluto, handler);
  const seed = apollo.createRandomSeed()
  const agent = new SDK.Agent(
    apollo,
    castor,
    pluto,
    mercury,
    handler,
    manager,
    seed.seed
  );
   /**
   * This internally will attempt to load an existing mediator from the 
   * database. If it does not exist it will try to achieve mediation 
   * automatically, by creating a PeerDID and sending a MediationRequest.
   * After this step the mediator starts capturing messages for the PeerDID we specied.
   */
  await agent.start()
```
</TabItem>

<TabItem value="swift" label="Swift">

```swift
  let agent = PrismAgent(mediatorDID: did)
  try await agent.start()
  agent.startFetchingMessages()
```

</TabItem>
<TabItem value="android" label="Android">

```kotlin
val apollo = ApolloImpl()
val castor = CastorImpl(apollo)
val pluto = Pluto(DbConnection())
(pluto as PlutoImpl).start(context)
val mercury = mercury = MercuryImpl(
    castor,
    DIDCommWrapper(castor, pluto, apollo),
    ApiImpl(httpClient())
)
val pollux = PolluxImpl(castor)
val seed = apollo.createRandomSeed()
val handler = BasicMediatorHandler(
  mediatorDID = DID(<DID_STRING>),
  mercury = mercury,
  store = BasicMediatorHandler.PlutoMediatorRepositoryImpl(pluto)
)
agent = PrismAgent(
    apollo = apollo,
    castor = castor,
    pluto = pluto,
    mercury = mercury,
    pollux = pollux,
    seed = seed,
    mediatorHandler = handler
)
agent.start()
agent.startFetchingMessages()

```

</TabItem>
</Tabs>




## Establish a connection between the Holder and the Cloud Agent
To connect the Holder to both instances, you must run this in both Issuer and Verifier endpoints.

### Establish a connection - Agent side
A connection must be established between the Holder and PRISM Cloud Agents to correctly deliver the Issuance + Verification Messages to the Holder.

```bash
curl --location \
--request POST '[[API ENDPOINT]]/connections' \
--header 'Content-Type: application/json' \
--data-raw '{
    "label": "Prism Agent demo connection with holder"
}'
```

This request will return a JSON response with an invitation and its URL. The Cloud Agent (issuer or verifier) would share this URL as a QR code, and the holder would scan it with the wallet app.

Copy the `invitationUrl` and the `connectionId`.

### Establish a connection - Holder side
Now that you have the invitation, it's time for the Holder to accept it.



<Tabs>
<TabItem value="js" label="Typescript">

In the demo application:
1. Open a browser at localhost:3000.
2. Start the Edge Agent by clicking the button.
3. Paste the invitation URL generated in the previous step into the `PrismAgent` connection section and click on Create Connection.

The application will react when the connection gets established correctly and show a new connection.

```js
const parsed = await props.agent.parseOOBInvitation(new URL([[OOB URL]]));
await props.agent.acceptDIDCommInvitation(parsed);
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
  let message = try agent.parseOOBInvitation(url: oobUrl)
  try await agent.acceptDIDCommInvitation(invitation: message)
```

</TabItem>
<TabItem value="android" label="Android">

In the demo application:
1. Click the floating button at the bottom right corner of the Contacts tab.
2. On the dialog, paste the invitation URL we generated into the `PrismAgent` connection section and click Validate.
​
The application will react once the connection gets established correctly and show a message under messages.

```kotlin
agent.handleReceivedMessagesEvents().collect {}
```

</TabItem>
</Tabs>


## Issue a Credential from the Issuer to the holder

The credential issuance flow consists of multiple steps, detailed in this section. It starts with the Issuer sending a Credential Offer to the Holder, which would accept or reject this invitation and create a `credentialRequest` from it. The credential request gets sent through DIDComm to the Issuer, issuing and sending the credential back to the Holder.

### Create a Credential Offer **Issuer Agent**

To trigger the creation of a credential-offer, we call the credential-offers-endpoint, as follows:

```bash
curl --location \
--request POST '[[API ENDPOINT]]/issue-credentials/credential-offers' \
--header 'Content-Type: application/json' \
--data-raw '{
    "claims": {"pass":true},
    "connectionId": [[connectionId]]
    "issuingDID": [[publishedPrismDID]],
    "schemaId": [[schemaId]],
    "subjectId": [TBD where do we set this from],
    "validityPeriod": 181818929544448485225254,
    "automaticIssuance": true
}'
```

Attributes:

1. [ConnectionId](/docs/quick-start#establish-a-connection---agent-side)
2. The published [PRISM DID](/docs/quick-start#choose-one-published-prismdid) 
3. [SchemaId](/docs/quick-start#create-a-credential-schema-jwt-w3c-credential) 

### Create CredentialRequest from CredentialOffer **Holder**

After starting the Prism Agent, the holder needs to listen for new messages and respond to any CredentialOffer with a CredentialRequest, as follows:

<Tabs>
<TabItem value="js" label="Typescript">

```typescript
props.agent.addListener(ListenerKey.MESSAGE,async (newMessages:SDK.Domain.Message[]) => {
    //newMessages can contain any didcomm message that is received, including
    //Credential Offers, Issued credentials and Request Presentation Messages
    const credentialOffers = newMessages.filter((message) => message.piuri === "https://didcomm.org/issue-credential/2.0/offer-credential");

    if (credentialOffers.length) {
        for(const credentialOfferMessage of credentialOffers) {
        const credentialOffer = OfferCredential.fromMessage(credentialOfferMessage);
        const requestCredential = await props.agent.prepareRequestCredentialWithIssuer(credentialOffer);
        try {
            await props.agent.sendMessage(requestCredential.makeMessage())
        } catch (err) {
            console.log("continue after err", err)
        }
        }
    }
})
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
agent
  .handleMessagesEvents()
  .sink(receiveCompletion: { _ in }, receiveValue: { [weak self] in
    guard
        let message,
        message.direction == .received,
        let msgType = ProtocolTypes(rawValue: message.piuri)
      else { return }
      
      Task.detached { [weak self] in
          do {
            switch msgType {
             case .didcommOfferCredential:
                let newPrismDID = try await agent.createNewPrismDID()
                guard let requestCredential = try await agent.prepareRequestCredentialWithIssuer(
                    did: newPrismDID,
                    offer: try OfferCredential(fromMessage: message)
                ) else { throw UnknownError.somethingWentWrongError() }

                _ = try await agent.sendMessage(message: try requestCredential.makeMessage())
          }
      }
  })

```

</TabItem>
<TabItem value="android" label="Android">

```kotlin
agent.handleReceivedMessagesEvents().collect { list ->
    list.forEach { message ->
        if (message.piuri == ProtocolType.DidcommOfferCredential.value) {
            val credentials = pluto.getAllCredentials().first()
            if (credentials.isEmpty()) {
                val offer = OfferCredential.fromMessage(message)
                val subjectDID = agent.createNewPrismDID()
                val request =
                agent.prepareRequestCredentialWithIssuer(
                    subjectDID,
                    offer
                )
                mercury.sendMessage(request.makeMessage())
            }
        }
    }
}
```

</TabItem>
</Tabs>


### Store the Issued Credential [Holder]

Once the Holder receives a credential from the Cloud Agent, it needs to store the credential somewhere:

:::caution

The  sample application are using an insecure storage solution which should only be used for testing purposes and not production environments!

:::

<Tabs>
<TabItem value="js" label="Typescript">



```typescript
props.agent.addListener(ListenerKey.MESSAGE,async (newMessages:SDK.Domain.Message[]) => {
    //newMessages can contain any didcomm message that is received, including
    //Credential Offers, Issued credentials and Request Presentation Messages
    const issuedCredentials = newMessages.filter((message) => message.piuri === "https://didcomm.org/issue-credential/2.0/issue-credential");
    if (issuedCredentials.length) {
        for(const issuedCredential of issuedCredentials) {
            const issueCredential = IssueCredential.fromMessage(issuedCredential);
            await props.agent.processIssuedCredentialMessage(issueCredential);
        }
    }
})
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
agent
  .handleMessagesEvents()
  .sink(receiveCompletion: { _ in }, receiveValue: { [weak self] in
    guard
        let message = $0
        message.direction == .received,
        let msgType = ProtocolTypes(rawValue: message.piuri)
      else { return }
      
      Task.detached { [weak self] in
          do {
            switch msgType {
              case .didcommIssueCredential:
                  let issueCredential = try IssueCredential(fromMessage: message)
                  _ = try await agent.processIssuedCredentialMessage(message: issueCredential)
              
            }
          }
      }
  })
```

</TabItem>
<TabItem value="android" label="Android">


```kotlin
agent.handleReceivedMessagesEvents().collect { list ->
    list.forEach { message ->
        if (message.piuri == ProtocolType.DidcommIssueCredential.value) {
                agent.processIssuedCredentialMessage(
                    IssueCredential.fromMessage(
                    message
                )
            )
        }
    }
}
```

</TabItem>
</Tabs>


## Request a verification from the Verifier Agent to the holder (JWT W3C Credential)
Now that the Holder has received a credential, it can be used in a verification workflow between a Holder and a Verifier. This requires the following steps:

1. Verifier creates a proof-request
2. Holder receives the proof-request
3. Holder creates a proof-presentation and shares this with the verifier
4. Verifier verifies the proof-presentation

In the example, we show a verification flow that assumes a connection between Holder and Verifier. In the future, we will also support connection-less verification.

### Verifier Agent

To run this section, we will use the second connection we created between the Holder and the Verifier.

```bash
curl --location \ 
--request POST '[[API ENDPOINT]]/present-proof/presentations' \
--header 'Content-Type: application/json' \
--data-raw '{
    "connectionId": [[connectionId]],
    "proofs": [
        {
            "schemaId": [[schemaId]],
            "trustIssuers": [
                [[PUBLISHED PRISM DID FROM THE ISSUER]]
            ]
        },
    ],
    "options": {
        "challenge": "A challenge for the holder to sign",
        "domain": "domain.com"
    }
}'
```

This API request will return a `presentationRequestId,` which the verifier can use later to check the request's current status.


### Holder: Receives the Presentation proof request 

The Holder needs to have a running instance of the Cloud Agent that has the message listener active and is listening for the correct type of messages as detailed below:

<Tabs>
<TabItem value="js" label="Typescript">

```typescript
props.agent.addListener(ListenerKey.MESSAGE,async (newMessages:SDK.Domain.Message[]) => {
    //newMessages can contain any didcomm message that is received, including
    //Credential Offers, Issued credentials and Request Presentation Messages
    const requestPresentations = newMessages.filter((message) => message.piuri === "https://didcomm.atalaprism.io/present-proof/3.0/request-presentation");

    if (requestPresentations.length) {
        for(const requestPresentation of requestPresentations) {
            const lastCredentials = await props.pluto.getAllCredentials();
            const lastCredential = lastCredentials.at(-1);
            const requestPresentationMessage = RequestPresentation.fromMessage(requestPresentation);
            try {
            if (lastCredential === undefined) throw new Error("last credential not found");

            const presentation = await props.agent.createPresentationForRequestProof(requestPresentationMessage, lastCredential)
            await props.agent.sendMessage(presentation.makeMessage())
            } catch (err) {
            console.log("continue after err", err)
            }
        }
    }
})
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
agent
  .handleMessagesEvents()
  .sink(receiveCompletion: { _ in }, receiveValue: { [weak self] in
    guard
          let message,
          message.direction == .received,
          let msgType = ProtocolTypes(rawValue: message.piuri)
      else { return }
      
      Task.detached { [weak self] in
        do {
          switch msgType {
          case .didcommRequestPresentation:
              let credential = try await agent.verifiableCredentials().map { $0.first }.first().await()
              guard let credential else {
                  throw UnknownError.somethingWentWrongError()
              }
              let presentation = try await agent.createPresentationForRequestProof(
                  request: try RequestPresentation(fromMessage: message),
                  credential: credential
              )
              _ = try await agent.sendMessage(message: try presentation.makeMessage())
          }
        }
      }
  })
```

</TabItem>
<TabItem value="android" label="Android">

```kotlin
agent.handleReceivedMessagesEvents().collect { list ->
    list.forEach { message ->
        if (message.piuri == ProtocolType.DidcommRequestPresentation.value && !presentationDone) {
            viewModelScope.launch {
                presentationDone = true
                agent.getAllCredentials().collect {
                    val credential = it.first()
                    val presentation = agent.preparePresentationForRequestProof(
                        RequestPresentation.fromMessage(message),
                        credential
                    )
                    mercury.sendMessage(presentation.makeMessage())
                }
            }
        }
    }
}
```

</TabItem>
</Tabs>



### Verifier: will then check on the API if the Presentation Request has been completed or not.

```bash
curl --location \
--request GET '[[API ENDPOINT]]/present-proof/presentations/[[presentationRequestId]]' \
--header 'Accept: application/json'
```

The response body can be used then to determine if the request is completed and verified correctly.







Completed sections:
## [Document Deployment Instructions (pre-requisites)](https://input-output.atlassian.net/browse/ATL-5675)
## [Document steps to set up a credential issuer (Cloud Agent)](https://input-output.atlassian.net/browse/ATL-5676)
## [Document the steps to set up a verifier (Cloud Agent)](https://input-output.atlassian.net/browse/ATL-5681)
## [Document the steps to set up a credential holder (Edge Agent)](https://input-output.atlassian.net/browse/ATL-5679)
## [Document the steps to issue a credential (Cloud Agent to Edge Agent)](https://input-output.atlassian.net/browse/ATL-5680)
## [Document the steps to request a proof presentation (Cloud Agent to Edge Agent)](https://input-output.atlassian.net/browse/ATL-5684)


Discarded sections:
## [Document steps to set up a credential holder (Cloud Agent)](https://input-output.atlassian.net/browse/ATL-5677)
## [Document steps to issue a credential (Cloud Agent to Cloud Agent)](https://input-output.atlassian.net/browse/ATL-5678)
## [Document the steps to request a proof presentation (Cloud Agent to Cloud Agent)](https://input-output.atlassian.net/browse/ATL-5683)


## [Style Guide (delete before staging)](https://handbook.atalaprism.io/product/style-guide)
