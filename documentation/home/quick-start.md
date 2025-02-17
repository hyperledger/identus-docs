---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start Guide
## Introduction into Self Sovereign Identity (SSI)
[Self-sovereign identity (SSI)](/home/concepts/glossary/#self-sovereign-identity) is complex. This Quick Start Guide explains the fundamental concepts to get up and running with Hyperledger Identus. This guide will familiarize you with the general concepts and how to create [decentralized identifiers (DIDs)](/home/concepts/glossary/#decentralized-identifier), issue credentials, make connections, and verify credentials with [verifiable presentations](/home/concepts/glossary/#verifiable-presentation). Refer to the Concepts and Components sections for a more in-depth explanation.

The trust triangle is the most basic process for conveying trust in the digital world. There are three roles in an SSI ecosystem: [Holders](/home/concepts/glossary/#holder), [Issuers](/home/concepts/glossary/#issuer), and [Verifiers](/home/concepts/glossary/#verifier).

![Component Diagram](/img/trust-triangle.png)

Holders can be any entity, such as individuals, organizations, and digital or physical things. They will hold [verifiable credentials (VCs)](/home/concepts/glossary/#verifiable-credential) and use a verifiable presentation to share their VCs.

Issuers can also be any entity that makes [claims](/home/concepts/glossary/#claim) about an [entity](/home/concepts/glossary/#entity). These claims are attestations, or evidence of something, about the Holder. As an example, an insurance company would provide proof of valid insurance.

Verifiers are the [relying party](/home/concepts/glossary/#relying-party) in the triangle. They will request information from the Holder, such as proof of insurance, and the Holder will use a verifiable presentation to share the appropriate VCs with the Verifier. The Holder's digital signature, the issuer DID get verified, and the contents therein to ensure nothing has been tampered with.



## Hyperledger Identus flow
The diagram details how the concepts fit alongside the Identus components in a typical SSI interaction.

![Component Diagram](/img/component-diagram.png)



## An overview of Hyperledger Identus components
Identus consists of core libraries that facilitate typical SSI interactions between [Issuers](/home/concepts/glossary/#issuer), [Holders](/home/concepts/glossary/#holder), and [Verifiers](/home/concepts/glossary/#verifier).


### A Cloud Agent
A Cloud Agent can issue, hold, and verify [verifiable credentials (VCs)](/home/concepts/glossary/#verifiable-credential) for any entity and manage [decentralized identifiers (DIDs)](/home/concepts/glossary/#decentralized-identifier) and DID-based connections. The Cloud Agent has an easy-to-use REST API to enable easy integration into any solution and uses [DIDComm V2](/home/concepts/glossary/#didcomm) as a messaging protocol for Cloud Agent-to-Cloud Agent communication.

It is maintained as an open source through the [Hyperledger Identus](https://www.hyperledger.org/projects/identus).

More in depth documentation about [Cloud Agent](/home/concepts/glossary/#cloud-agent) can be found [here](/home/identus/cloud-agent/overview).



### Wallet SDKs
[Wallet SDKs](/home/concepts/glossary/#wallet-sdk) for web and mobile (iOS, Android, TypeScript) enable identity holders to store credentials and respond to proof requests. They are typically used in applications that allow identity holders to interact with issuers and verifiers.

More in-depth documentation about the different Wallet SDKs can be found here ([TypeScript](https://hyperledger.github.io/identus-docs/identus-sdk-ts/sdk), [Swift](https://hyperledger.github.io/identus-edge-agent-sdk-swift/documentation/edgeagentsdk/), [KMP](https://hyperledger.github.io/identus-edge-agent-sdk-kmp/))



### Mediator
[Mediators](/home/concepts/glossary/#mediator) are for storing and relaying messages between Cloud Agents and Wallet SDKs. They act as a proxy that remains connected to the network and receives any message, credential, or proof request on behalf of the Wallet SDKs (which can be offline occasionally).

More in-depth documentation about Mediator can be found [here](/home/identus/mediator).

#### Node for a Verifiable Data Registry (VDR)
To issue and verify VCs to and from DIDs, we need a [Verifiable Data Registry (VDR)](/home/concepts/glossary/#verifiable-data-registry) that is globally resolvable and always on. In Identus's case, it is `prism-node`, [anchoring](/home/concepts/glossary/#anchoring) key information required for issuance and verification on the Distributed Ledger.



## Pre-Requisites


### Agent Deployment
This guide will demonstrate a single-tenant deployment with API Key authentication disabled and an in-memory ledger for published DID storage, which is the simplest configuration to get started as a developer. More advanced configuration options can be found in [Multi-Tenancy Management](/tutorials/multitenancy/tenant-onboarding) and associated [Environment Variables](/home/identus/cloud-agent/environment-variables) configuration options.

We develop on modern machines equipped with either Intel based x64 processors or Apple ARM processors with a minimum of four cores, 16 GB of memory and 128GB+ of SSD-type storage.

1. To spin up an Cloud Agent you must:
  * Have Git installed.
  * Have Docker installed.
  * Clone the [Identus Cloud Agent repository](https://github.com/hyperledger/identus-cloud-agent).

```bash
git clone https://github.com/hyperledger/identus-cloud-agent
```


2. Once cloned, create a new file named  __./identus-cloud-agent/infrastructure/local/.env-issuer__ to define the Issuer Agent environment variable configuration with the following content:


```
API_KEY_ENABLED=false
AGENT_VERSION=1.36.1
PRISM_NODE_VERSION=2.4.1
PORT=8000
NETWORK=identus
VAULT_DEV_ROOT_TOKEN_ID=root
PG_PORT=5432
```

3. Create a new file named  __./identus-cloud-agent/infrastructure/local/.env-verifier__ to define the Verifier Agent environment variable configuration with the following content:



```
API_KEY_ENABLED=false
AGENT_VERSION=1.36.1
PRISM_NODE_VERSION=2.4.1
PORT=9000
NETWORK=identus
VAULT_DEV_ROOT_TOKEN_ID=root
PG_PORT=5433
```

4. Setting the `API_KEY_ENABLED` to `false` disables the requirement of using API Keys.

:::caution

API_KEY_ENABLED disables API Key authentication. This should **not** be used beyond Development purposes.

:::

5. Start the `issuer` and `verifier` Cloud Agents by running the below commands in the terminal.



  * Issuer Cloud Agent: 
    
  Mac OSX  terminal shell
```bash
 ./infrastructure/local/run.sh -n issuer -b -e ./infrastructure/local/.env-issuer -p 8000 -d "$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}'))"
```
 Linux terminal shell
```bash
 ./infrastructure/local/run.sh -n issuer -b -e ./infrastructure/local/.env-issuer -p 8000 -d "$(ip addr show $(ip route show default | awk '/default/ {print $5}') | grep 'inet ' | awk '{print $2}' | cut -d/ -f1)"
```

  * The Issuer [API endpoint](http://localhost:8000/cloud-agent/) will be accessible on port 8000 `http://localhost:8000/cloud-agent/` with a [Swagger Interface](http://localhost:8000/cloud-agent/redoc) available at `http://localhost:8000/cloud-agent/redoc`.


  * Verifier Cloud Agent:

 For Mac OSX  terminal shell
```bash
 ./infrastructure/local/run.sh -n verifier -b -e ./infrastructure/local/.env-verifier -p 9000 -d "$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}'))"
```
 For Linux terminal shell
```bash
 ./infrastructure/local/run.sh -n verifier -b -e ./infrastructure/local/.env-verifier -p 9000 -d "$(ip addr show $(ip route show default | awk '/default/ {print $5}') | grep 'inet ' | awk '{print $2}' | cut -d/ -f1)"
```


  * The Verifier [API endpoint](http://localhost:9000/cloud-agent/) will be accessible on port 9000 `http://localhost:9000/cloud-agent/` with a [Swagger Interface](http://localhost:9000/cloud-agent/redoc) available at `http://localhost:9000/cloud-agent/redoc`.



### Agent configuration

#### Creating LongForm PrismDID
1. Run the following API request against your Issuer API to create a PRISM DID:

:::note

📌 **Note:** [To create DIDs with various supported curves](/tutorials/dids/create#2-create-the-cloud-agent-managed-did-using-did-registrar-endpoint).

:::

```bash
curl --location \
--request POST 'http://localhost:8000/cloud-agent/did-registrar/dids' \
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

2. Publish the DID by replacing `{didRef}` with the `longFormDid` output value from the previous step.

```bash
curl --location \
--request POST 'http://localhost:8000/cloud-agent/did-registrar/dids/{didRef}/publications' \
--header 'Accept: application/json'
```

3. The short version of the DID is the publishedPrismDID.

:::info

📖Learn more about PRISM DIDs and why it is necessary to publish specific DIDs [here](https://staging-docs.atalaprism.io/tutorials/dids/publish).

:::


#### Create a credential schema (JWT W3C Credential)

1. To create a [credential schema](/home/concepts/glossary/#credential-schema) on the Issuer API instance, run the following request:

:::info

Replace the `[[publishedPrismDID]]` in the example request with the `did` value from the previous step.

:::

2. We need to capture the schema's guid as its used in further steps.

```bash
curl -X 'POST' \
  'http://localhost:8000/cloud-agent/schema-registry/schemas' \
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


### Starting Sample App
All wallet SDK's come bundled with a sample application, that cover all the Identus flows, including establishing connections, issuance, and verification flows.

<Tabs>
<TabItem value="js" label="Typescript Sample APP">

1. Clone the [TypeScript SDK](https://github.com/hyperledger-identus/sdk-ts) repository.

```bash
git clone https://github.com/hyperledger-identus/sdk-ts
```

2. Ensure you have all applications installed for building the SDK and their dependencies

[rust](https://www.rust-lang.org/tools/install) and [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) are leveraged to build and use the AnonCreds and DIDComm Rust libraries within TypeScript. To build the SDK locally or run demonstration applications, you must have these applications installed.

The following should work Linux and MacOS. If you experience any issues, refer to the latest installation instructions for your platform.

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

3. Run the following:
  * Build the source SDK:

```bash
cd sdk-ts
git submodule update --init --recursive
npm i
npm run build
```

  * Start the React demo:
```bash
cd demos/next
npm i
npm run build
npm run start
```

  * This will start the React Wallet SDK TypeScript Demonstration at [http://localhost:3000](http://localhost:3000).

</TabItem>
<TabItem value="swift" label="Swift Sample APP">

1. Clone the [Swift SDK](https://github.com/hyperledger/identus-edge-agent-sdk-swift) repository.

```bash
git clone https://github.com/hyperledger/identus-edge-agent-sdk-swift
```

2. Open the XCode project on __./Sample/AtalaPrismWalletDemo/AtalaPrismWalletDemo.xcodeproj__
3. On the top left of the XCode window you will see a Play/Run button, click it.
4. The app will start.
5. Click Wallet Demo 2.0
  * You will be able to run the rest of the guide here.

</TabItem>
<TabItem value="android" label="Android Sample APP">

1. Clone the [KMM SDK](https://github.com/hyperledger/identus-edge-agent-sdk-kmm) repository.

```bash
git clone https://github.com/hyperledger/identus-edge-agent-sdk-kmm
```

2. Open the Wallet SDK project on IntelliJ or Android Studio.
3. In the `Run configuration` dropdown, select SampleApp.
4. Select the device or emulator you want to use.
5. Click "Run".
  * The SampleApp will launch on the applicable device or emulator.

</TabItem>
</Tabs>

### Deploy & Establish Mediation
Mediation is the process that ensures messages get routed and stored correctly between Issuers, Verifiers and Holders, even if they are offline. The mediator offers a service that is always running and can securely store messages and deliver them to the associated DIDs using DIDComm. This enables use-cases where connectivity to a (mobile) wallet cannot be guaranteed.

#### Preparation
1. To get the mediator deployed locally for the demo, clone the [Mediator repository](https://github.com/hyperledger/identus-mediator).

```bash
git clone https://github.com/hyperledger/identus-mediator
```

2. With a Docker service running, open a new terminal and run:

:::info

The latest mediator version can be found at [Mediator releases](https://github.com/hyperledger/identus-mediator/releases). Change the version in the example if you want to use the latest version.

:::

  Mac OSX  terminal shell
```bash
MEDIATOR_VERSION=0.15.0 SERVICE_ENDPOINTS="http://$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}')):8080;ws://$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}')):8080/ws" docker compose up
```
 Linux terminal shell
```bash
MEDIATOR_VERSION=0.15.0 SERVICE_ENDPOINTS="http://$(ip addr show $(ip route show default | awk '/default/ {print $5}') | grep 'inet ' | awk '{print $2}' | cut -d/ -f1):8080;ws://$(ip addr show $(ip route show default | awk '/default/ {print $5}') | grep 'inet ' | awk '{print $2}' | cut -d/ -f1):8080/ws" docker compose up
```

`MEDIATOR_ENDPOINTS` is then set to your local IP address:8080.

3. More advanced documentation and configuration options can be found [here](https://github.com/hyperledger/identus-mediator).



4. Now you need to capture the Mediator's [Peer DID](/home/concepts/glossary/#peer-did) in order to start DIDCOMM V2 Mediation protocol, you can do so by opening you browser at the mediators [endpoint](/home/concepts/glossary/#endpoints).

#### Demo application

:::info

In order to complete this step you'll need to connect to the mediators Peer DID which you can fetch by making the following API request.

```bash
curl --location \
--request GET 'localhost:8080/invitation' \
--header 'Content-Type: application/json'
```

:::

Follow the steps in your desired platform as stated below:

<Tabs>
<TabItem value="js" label="Typescript Sample APP">

1. Open http://localhost:3000/debug in your browser, 
1. paste the mediator peer DID (obtained from the `from` attribute after fetching from the mediator's invitation endpoint),
1. click **Edge Agent** tab in the bottom left,
1. click **Connect** button,
1. click **Start** button.

</TabItem>

<TabItem value="swift" label="Swift Sample APP">

1. In the app, go to Wallet Demo, and on the Mediator tab, insert the mediator DID.

</TabItem>
<TabItem value="android" label="Android  Sample APP">

1. Go back to the Sample app. In the main screen, you can provide the mediator DID of your choice or use what is there already. Proceed and click **Start** after.

</TabItem>
</Tabs>



2. If you are running the SampleApp, click the **Start Agent** button.

The below code examples show how to establish mediation when building your own application.

<summary>Code examples</summary>
3. The following code examples represent establishing mediation and instantiating the Cloud Agent.

<Tabs>
<TabItem value="js" label="Typescript">


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
  let agent = CloudAgent(mediatorDID: did)
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
agent = CloudAgent(
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

## Establish Holder connections
To connect the Holder to both Cloud Agent instances, you must run this in both Issuer and Verifier endpoints.

### Establish a connection - Agent side
A connection must be established between the Holder and Cloud Agents to correctly deliver the Issuance + Verification Messages to the Holder.

#### Establish connection on the Issuer Cloud Agent
```bash
curl --location \
--request POST 'http://localhost:8000/cloud-agent/connections' \
--header 'Content-Type: application/json' \
--data-raw '{
    "label": "Cloud Agent demo connection with holder"
}'
```

1. This request will return a JSON response with an invitation and its URL. The Issuer Cloud Agent would share this URL as a QR code, and the holder would scan it with the wallet app.

  * Copy the `invitationUrl` and the `connectionId`.

#### Establish connection on the Verifier Cloud Agent
```bash
curl --location \
--request POST 'http://localhost:9000/cloud-agent/connections' \
--header 'Content-Type: application/json' \
--data-raw '{
    "label": "Cloud Agent demo connection with holder"
}'
```

2. This request will return a JSON response with an invitation and its URL. The Verifier Cloud Agent would share this URL as a QR code, and the holder would scan it with the wallet app.

  * Copy the `invitationUrl` and the `connectionId`.

### Establish a connection - Holder side
3. Now that you have the invitation, it's time for the Holder to accept it.

#### Demo application
<Tabs>
<TabItem value="js" label="Typescript Sample APP">

4. Open a browser at localhost:3000.
5. Start the Edge Agent by clicking the button.
6. Paste the invitation URL generated in the previous step into the `CloudAgent` connection section and click on Create Connection.
  * The application will react when the connection gets established correctly and show a new connection.


</TabItem>
<TabItem value="swift" label="Swift Sample APP">

4. On the Out of Bounds (OOB) dialog, paste the invitation URL we generated into the `CloudAgent` connection section and click **Validate**.
  * The application will respond once the connection gets established correctly and show a message under messages.

</TabItem>
<TabItem value="android" label="Android Sample APP">

4. Go back to the Application:
5. Click the floating button at the bottom right corner of the Contacts tab.
6. On the dialog, paste the invitation URL we generated into the `CloudAgent` connection section and click **Validate**.
  * The application will react once the connection gets established correctly and show a message under messages.


</TabItem>
</Tabs>

<summary>Code examples</summary>
<Tabs>
<TabItem value="js" label="Typescript">

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

```kotlin
val invitation = agent.parseInvitation(oobUrl)
agent.acceptOutOfBandInvitation(invitation)
```

</TabItem>
</Tabs>

## Issue a Credential from the Issuer to the holder

The credential issuance flow consists of multiple steps, detailed in this section. It starts with the Issuer sending a [Credential Offer](/home/concepts/glossary/#credential-offer) to the Holder, which would accept or reject this invitation and create a `credentialRequest` from it. The [credential request](/home/concepts/glossary/#credential-request) gets sent through DIDComm to the Issuer, issuing and sending the credential back to the Holder.

The Issuer can create a credential offer in two ways:
1. As a direct credential offer DIDComm message for a holder with an existing connection
2. As an credential offer as attachment in an OOB invitation message for connectionless issuance

<Tabs>
<TabItem value="existing" label="With Existing Connection">
### Create a Credential Offer with an existing connection **Issuer Agent**

1. To trigger the creation of a credential-offer, we call the credential-offers-endpoint, as follows:

:::info

Please replace the following variables in the example request before sending:

- `connectionId`: The ID of the connection previously established between agent and holder. This is part of the response of the POST message from the agent when calling the `cloud-agent/connections` endpoint. It is returned in the `connectionId` attribute. There is a unique connection ID for the relationship between issuer and holder and verifier and holder. In this example, please use the `connectionId` returned when creating the connection between issuer and holder
- `publishedPrismDID`: The short form of the PRISM DID created when setting up the Issuer agent

The `connectionId` is just the ID of the connection we previously established with the issuer.

The Issuing DID is the published PRISM DID in its short version which was also used to create and publish the credential schema.

- ``

:::

```bash
curl --location --request POST 'http://localhost:8000/cloud-agent/issue-credentials/credential-offers' \
--header 'Content-Type: application/json' \
--data-raw '{
    "claims": {"emailAddress":"sampleEmail", "familyName":"", "dateOfIssuance":"2023-01-01T02:02:02Z", "drivingLicenseID":"", "drivingClass":1},
    "connectionId": [[connectionId]],
    "issuingDID": [[publishedPrismDID]],
    "automaticIssuance": true
}'
```
</TabItem>
<TabItem value="connectionless" label="Connectionless Issuance">
### Create a Credential Offer as Invitation for connectionless issuance **Issuer Agent**

1. To trigger the creation of a credential-offer, we call the credential-offers-invitation-endpoint, as follows:

:::info

Please replace the following variables in the example request before sending:

- `goalCode`: OPTIONAL A self-attested code the receiver may want to display to the user or use in automatically deciding what to do with the out-of-band message,
- `goal`: OPTIONAL. A self-attested string that the receiver may want to display to the user about the context-specific goal of the out-of-band message.
- `publishedPrismDID`: The short form of the PRISM DID created when setting up the Issuer agent

The Issuing DID is the published PRISM DID in its short version which was also used to create and publish the credential schema.

- ``

:::

```bash
curl --location --request POST 'http://localhost:8000/cloud-agent/issue-credentials/credential-offers/invitation' \
--header 'Content-Type: application/json' \
--data-raw '{
    "claims": {"emailAddress":"sampleEmail", "familyName":"", "dateOfIssuance":"2023-01-01T02:02:02Z", "drivingLicenseID":"", "drivingClass":1},
    "goalCode": [[goalCode]],
    "goal": [[goal]],
    "credentialFormat": "JWT",
    "issuingDID": [[publishedPrismDID]],
    "automaticIssuance": true
}'
```


### Accept Credential Offer Invitation for connectionless issuance **Holder**

For connectionless issuance, the Holder needs to accept the invitation containing the credential offer. This step is necessary before creating the Credential Request.
#### Demo application
<Tabs>
<TabItem value="js" label="Typescript Sample APP">

1. In the browser at localhost:3000, navigate to the "Credential Offer" section.
2. Paste the invitation URL received from the Issuer into the provided input field.
3. Click on "Accept Invitation" to process the credential offer.

</TabItem>
<TabItem value="swift" label="Swift Sample APP">

1. In the Swift mobile app, go to the "Credential Offer" section.
2. Enter the invitation URL received from the Issuer.
3. Tap on "Accept Invitation" to process the credential offer.

</TabItem>
<TabItem value="android" label="Android Sample APP">

1. In the Android mobile app, navigate to the "Credential Offer" section.
2. Input the invitation URL provided by the Issuer.
3. Tap "Accept Invitation" to process the credential offer.

</TabItem>
</Tabs>

<summary>Code examples</summary>
<Tabs>
<TabItem value="js" label="Typescript">

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

```kotlin
val invitation = agent.parseInvitation(oobUrl)
agent.acceptOutOfBandInvitation(invitation)
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>
### Create CredentialRequest from CredentialOffer **Holder**

2. Because this credential Offer was created with the `automaticIssuance` true, as soon as the `CloudAgent` receives this `credentialRequest` it will respond with the `IssuedCredential` message and send this back to the holder.

:::info

automaticIssuance is optional. It can also be manually triggered and confirmed by the Holder.```

:::


#### Demo application
3. The holder will at some point receive a `CredentialOffer`, which the holder must accept, and then, a `CredentialRequest` is created and sent back to the Issuer through DIDComm V2 protocols.

<Tabs>
<TabItem value="js" label="Typescript Sample APP">
4. The <code>CredentialOffer</code> message will be automatically accepted as soon as it reaches the browser. In exchange, a <code>CredentialRequest</code> message will get sent back to the `CloudAgent.`

</TabItem>
<TabItem value="swift" label="Swift Sample APP">
4. As soon as the <code>CredentialOffer</code> message reaches the Swift mobile app, it will display to the user to accept or reject, and in exchange, a <code>CredentialRequest</code> message will get sent back to the <code>CloudAgent</code>.

</TabItem>
<TabItem value="android" label="Android Sample APP">
4. As soon as the <code>CredentialOffer</code> message reaches the Android mobile app, it will be automatically accepted, and in exchange, a <code>CredentialRequest</code> message will get sent back to the <code>CloudAgent</code>.

</TabItem>
</Tabs>


<summary>Code examples</summary>

5. The exchange between CredentialOffer and CredentialRequest is demonstrated through more advanced code samples below, showcasing how different platforms handle it.

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
          } catch {}
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
:::caution

The sample application are using an insecure storage solution which should only be used for testing purposes and not production environments!

:::

<summary>Code examples</summary>
6. Once the Holder receives a credential from the Cloud Agent, it needs to store the credential somewhere:

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
          } catch {}
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

## Request a verification from the Verifier Cloud Agent to the Holder (JWT W3C Credential)
Now that the Holder has received a credential, it can be used in a verification workflow between a Holder and a Verifier. This requires the following steps:

1. Verifier creates a proof request
2. Holder receives the proof request
3. Holder creates a proof presentation and shares this with the verifier
4. Verifier verifies the proof presentation

:::info

In the example, we demonstrate two verification flows:

1. Verification with an established connection between the Holder and the Verifier.
2. Connectionless verification in which the Holder and Verifier do not have a pre-established connection.
:::


### Verifier Agent
<Tabs>
<TabItem value="existing" label="With Existing Connection">

5. To run this section, we will use [the connection](/home/quick-start#establish-connection-on-the-verifier-cloud-agent) we created between the Holder and the Verifier.

```bash
curl --location \
--request POST 'http://localhost:9000/cloud-agent/present-proof/presentations' \
--header 'Content-Type: application/json' \
--data-raw '{
    "connectionId": [[connectionId]],
    "proofs": [
        {
            "schemaId": [[schemaId]],
            "trustIssuers": [
                [[PUBLISHED PRISM DID FROM THE ISSUER]]
            ]
        }
    ],
    "options": {
        "challenge": "A challenge for the holder to sign",
        "domain": "domain.com"
    }
}'
```

  * This API request will return a `presentationRequestId,` which the verifier can use later to check the current status  of the request.

</TabItem>
<TabItem value="connectionless" label="Connectionless Request Presentation"> 

5. To run this section, we'll use the presentation invitation endpoint to create a request presentation invitation, which the holder can scan to receive the invitation or the verifier can share directly.

```bash
curl --location \
--request POST 'http://localhost:9000/cloud-agent/present-proof/presentations/invitation' \
--header 'Content-Type: application/json' \
--data-raw '{
    "goalCode": [[goalCode]],
    "goal": [[goal]],
    "credentialFormat": "JWT",
    "proofs": [
        {
            "schemaId": [[schemaId]],
            "trustIssuers": [
                [[PUBLISHED PRISM DID FROM THE ISSUER]]
            ]
        }
    ],
    "options": {
        "challenge": "A challenge for the holder to sign",
        "domain": "domain.com"
    }
}'
```

  * This API request will return an `invitationId` along with an Out-Of-Band (OOB) message. The OOB message includes a Request Presentation in JSON format as an attachment and is encoded as a base64 URL-encoded string, which can be shared with the holder.

### Accept Request Presentation invitation for connectionless verification **Holder**

For connectionless verification, the Holder needs to accept the invitation containing the Request Presentation.
#### Demo application
<Tabs>
<TabItem value="js" label="Typescript Sample APP">

1. In the browser at localhost:3000, navigate to the "Request Presentation" section.
2. Paste the invitation URL received from the Issuer into the provided input field.
3. Click on "Accept Invitation" to process the request presentation.

</TabItem>
<TabItem value="swift" label="Swift Sample APP">

1. In the Swift mobile app, go to the "Request Presentation" section.
2. Enter the invitation URL received from the Issuer.
3. Tap on "Accept Invitation" to process the request presentation.

</TabItem>
<TabItem value="android" label="Android Sample APP">

1. In the Android mobile app, navigate to the "Request Presentation" section.
2. Input the invitation URL provided by the Issuer.
3. Tap "Accept Invitation" to process the request presentation.

</TabItem>
</Tabs>

<summary>Code examples</summary>
<Tabs>
<TabItem value="js" label="Typescript">

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

```kotlin
val invitation = agent.parseInvitation(oobUrl)
agent.acceptOutOfBandInvitation(invitation)
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>



### Holder: Receives the Presentation proof request

6. The Holder needs an Edge Agent running with the message listener active. It will receive the presentation proof request from the Verifier Cloud Agent for the correct type of messages as detailed below:

<summary>Code examples</summary>

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
        } catch {}
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

### Verifier: Will then check on the API if the Presentation Request has been completed or not.

```bash
curl --location \
--request GET 'http://localhost:9000/cloud-agent/present-proof/presentations/[[presentationRequestId]]' \
--header 'Accept: application/json'
```

7. The response body establishes the completion of the request and can be verified for correctness.
