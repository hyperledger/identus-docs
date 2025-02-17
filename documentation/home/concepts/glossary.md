# Glossary

## A
### Access control
Access control mechanisms define how tenants/entities can access and interact with their data and resources and control who can access them. 
It helps enforce security and privacy policies in a multi-tenant environment.

### Anchoring
The act of anchoring is tying to something that is trusted by assumption. Usually some sort of an entity with authority.

### Administrator
An administrator is a role who oversees the agent and releated resources, including tenant, Edge Agent management, or external services. Admistrator typically does not participate in day-to-day SSI interactions.


## C
### Claim {#claim}
An assertion made about a [subject](#did-subject).

### Claims {#claims}
Synonym of [claim](#claim) in the plural form. 

### Cloud Agent {#cloud-agent}
The Cloud Agent is a scaleable, easy-to-use, robust, and W3C standards-based agent that provides self-sovereign identity (SSI) services to build products and solutions based on it. The Cloud Agent exposes REST API for integration with any programming language.

### Controller
See [DID Controller](#did-controller).

### Connection Protocol
The protocol provides endpoints for creating and managing connections, as well as for accepting invitations.

### connection invitation
An invitation from one entity to another to establish a connection.

### Connection request
A request to establish a connection.

### Credential Definition {#credential-definition}
The term [refers](https://hyperledger.github.io/anoncreds-spec/#term:credential-definition) to the AnonCreds v1 implementation. 
Credential Definition contains public and private part. 
The public part is published and available for anyone to use to verify the credential. The private part is used to issue credentials.

### Credential schema
A data template for verifiable credentials (VCs). It contains claims of the VCs, credential schema author, type, name, version, and proof of authorship.

### Credential offer
An Issuer sends a request to the Holder to accept a verifiable credential.

### Credential request
When the Holder accepts or rejects a credential offer, a credential request is created from it.



## D
### Decentralized Identifier {#decentralized-identifier}
A globally unique persistent identifier that does not require a centralized registration authority and is often cryptographically generated. All DIDs use distributed ledger technology (DLT) or some other decentralized network.

### DID {#did}
See [decentralized identifier](#decentralized-identifier)

### DIDs {#dids}
See [decentralized identifiers](#decentralized-identifier)

### DIDComm {#didcomm}
A set of secure, standards-based communications protocols to establish and manage trusted, peer-to-peer connections and interactions between DIDs in a transport-agnostic and interoperable manner.

### DID controller
The entity that has control of the DID

### DID document {#did-document}
A set of data that describes the DID subject, including mechanisms such as cryptographic public keys. The entire W3C DID specification is [here](https://www.w3.org/TR/did-spec-registries/).

### DID method
The DID method defines how to implement a specific DID method schema. The specification defines the DID method, including precise operations to create DIDs and [DID documents](#did-document) and how to resolve, update, and deactivate them.

### DID resolution
The process for retrieving a [DID document](#did-document).

### DID subject {#did-subject}
The entity is identified by a [DID](#decentralized-identifier) and described by a [DID documents](#did-document). Anything can be a DID subject: person, group, organization, physical thing, digital thing, etc.

### DID Url
A DID itself is a type of a URL, while `did` is a registered schema type, like `http` and `https`. With Identus, we refer DID URLs to a DID that includes path and query parameters and can resolve a resource via one of the service endpoints in the DID document. For example: 
```
did:prism:9f847f8bbb66c112f71d08ab39930d468ccbfe1e0e1d002be53d46c431212c26?resourceService=agent-base-url&resourcePath=schema-registry/schemas/did-url&resourceHash=4074bb1a8e0ea45437ad86763cd7e12de3fe8349ef19113df773b0d65c8a9c46
```

### Distributed Ledger Technology (DLT)
A distributed database or ledger establishes confidence for the participants to rely on the data recorded. Typically these databases use nodes and a consensus protocol to confirm the order of cryptographically signed transactions. Linking the transactions over time creates a historical ledger that is effectively immutable.



## E
### Endpoints
A network address at which services operate on behalf of a [DID subject](#did-subject).

### Entity
An `entity,` in the context of the Identus platform, is an identity representing a user or system. 
Each entity possesses an Edge Agent and is associated with an authentication method. 
Entities are crucial for secure and verifiable transactions within the SSI ecosystem.

### Edge Agent SDK {#edge-agent-sdk}
For use with web and mobile (iOS, Android, TypeScript) enable identity holders to store credentials and respond to proof requests.

### Edge Agent
A Edge Agent can perform DID operations, like create, update, and deactivate. It also enables management of verifiable credentials, and communications.

## G
### Governance framework
See [Trust Framework](#trust-framework)



## H
### Holder {#holder}
An entity will take on this role by possessing one or more [verifiable credentials](#verifiable-credential) and generating [verifiable presentations](#verifiable-presentation). Also takes the role of a prover when presenting verifiable credentials for verification.



## I
### IAM
IAM (Identity and Access Management), is a framework that controls and manages user access to computing resources. It ensures secure authentication, appropriate authorization, and effective auditing to protect against unauthorized access in a computing environment.

### Identus
A suite of products that provides infrastructure for decentralized identity.

### IDP {#idp}
An Identity Provider (IDP) is a centralized service that manages and authenticates user identities, allowing individuals to access multiple applications and services with a single set of credentials. IDPs play a crucial role in Single Sign-On (SSO) systems, simplifying user access management across various platforms and services.

### Invitation
Sent by the [inviter](#inviter) to the [invitee](#invitee) to request and establish a connection.

### Invitee
A subject that receives a connection invitation and accepts it by sending a connection request.

### Inviter
A subject that initiates a connection request by sending a connection invitation.

### Issuer {#issuer}
An entity that asserts claim(s) about one or more [subjects](#did-subject) then creates a [verifiable credential](#verifiable-credential) from these claims and transmits the VC to a holder.

### Issue Credential Protocol
Allows you to create, retrieve, and manage issued [verifiable credentials (VCs)](#verifiable-credential) between a VC issuer and a VC holder.

## K
### Keycloak Service
Keycloak is an open-source [IAM](#iam) solution that provides authentication, authorization, and single sign-on capabilities for applications and services. It allows organizations to secure their applications by managing user identities, enforcing security policies, and facilitating seamless and secure user authentication.


## M
### Mediator {#mediator}
A mediator participates in agent-to-agent message delivery that the sender must model. It has its keys and will deliver messages only after decrypting an outer envelope to reveal a forward request. Many types of mediators may exist, but two important ones should be widely understood, as they commonly manifest in DID Docs:
- A service that hosts many cloud agents at a single endpoint to provide herd privacy (an "agency") is a mediator.
- A cloud-based agent that routes between/among the edges of a sovereign domain is a mediator.
For a detailed overview of mediators refer to the [RFC0046: Mediators and Relays](https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0046-mediators-and-relays).

### Mutli-tenancy
Multi-tenancy is a core capability of the Identus platform, allowing it to serve numerous users/identities while logically isolating their Edge Agent assets. 
This segregation maintains data privacy and security, enhancing scalability and resource sharing within the SSI ecosystem.


## O
### OIDC
OIDC (OpenID Connect), is an authentication protocol built on top of OAuth 2.0. It enables secure user authentication and allows applications to obtain information about users, facilitating single sign-on (SSO) and identity verification in web and mobile applications.

### OID4VCI
[OID4VCI](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html) (OpenID for Verifiable Credential Issuance)
defines an authorization mechanism for issuing credentials using the OAuth2 protocol. It grants the holder access to credentials protected by the issuer's authorization server.

## P
### Peer DID
They are specialized DIDs for peer-to-peer relationships.

### Peer DID Method
A rich DID method that has no blockchain dependencies. The verifiable data registry is a synchronization protocol between peers. See the [Peer DID Method specification](https://github.com/decentralized-identity/peer-did-method-spec).

### Present Proof Protocol
The protocol provides endpoints for a Verifier to request new proof presentations from Holder/Provers and for a Holder/Prover to respond to the presentation request using a specific verifiable credential they own.

### Proof
A cryptographic mechanism that proves the information in a [verifiable credential](#verifiable-credential) or [verifiable presentation](#verifiable-presentation) has not been tampered with. Many types of cryptographic proofs include but are not limited to digital signatures, zero-knowledge proofs, Proofs of Work, and Proofs of Stake.

### Proof presentation
See [verifiable presentation](#verifiable-presentation). Also see [Present Proof Protocol](#present-proof-protocol).

### Protection API
The Protection API in User-Managed Access ([UMA](#uma)) is a set of endpoints that enables resource servers to enforce access policies and protect resources. It provides a mechanism for resource servers to interact with the authorization server to obtain necessary information and permissions, ensuring that access to user-managed resources aligns with the user's specified policies.

### Protection API
The Protection API in User-Managed Access ([UMA](#uma)) is a set of endpoints that enables resource servers to enforce access policies and protect resources. It provides a mechanism for resource servers to interact with the authorization server to obtain necessary information and permissions, ensuring that access to user-managed resources aligns with the user's specified policies.

### Protocol buffer
Also known as protobuf.

### Prism envelope
A response type for endpoints that implement prism anoncred method
```json
{"resource": <encoded resource as string>, url: <did url at which this resource can be resolved>}
```



## R
### Relay
A relay is an entity that passes along agent-to-agent messages depending on the sender's encryption choices. It does not decrypt anything. Relays can change the transport for a message (e.g., accept an HTTP POST, then turn around and emit an email, or accept a Bluetooth transmission, then turn around and transmit something in a message queue). Mix networks like TOR are a type of relay.
For a detailed overview of relays refer to the [RFC0046: Mediators and Relays](https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0046-mediators-and-relays).

### Relying party
A party that depends on the authenticity of digital signatures.

### RPT
Requesting Party Token (RPT) is a concept within the [UMA](#uma) framework. It represents a token obtained by a client application from an authorization server, allowing the client to access protected resources on behalf of the requesting party (user), based on the user's policies and consent.


## S
### Secrets storage {#secrets-storage}
This component securely stores sensitive information, such as private keys associated with an individual's digital identity, Edge Agent seed, etc.
Secrets storage plays a crucial role in SSI implementations because it ensures that sensitive information is securely stored and protected against unauthorized access or disclosure

### Subject {#subject}
See [DID Subject](#did-subject)

### SSI {#ssi}
See [Self-Sovereign Identity](#self-sovereign-identity)

### Self-Sovereign Identity (SSI) {#self-sovereign-identity}
An identity model that shifts control to the edges, focused on security, privacy using public/private key encryption.



## T
### Tenant
A tenant is an individual user, organization, or entity that utilizes the SSI platform. 
Each tenant has its isolated area within the system, maintaining the separation of assets.

### Tenant Isolation
Tenant isolation is a core capability of the Identus platform, allowing it to serve numerous users/identities while logically isolating their Edge Agent assets.

### Tenant Management
Tenant management encompasses the processes and tools used to onboard, provision, and manage tenants within the SSI platform, including user registration, role assignment, authentication method configuring, and access permissions.

### Trust Framework
A governing body that establishes rules, requirements, establishes operating procedures, and a [trust registry](#trust-registry) for specific ecosystems.

### Trust Registry
A document that lists authorized issuers and verifiers established by the [Trust framework](#trust-framework).


## U
### UMA
User-Managed Access (UMA) is an authorization framework that allows users to control and manage access to their online resources. UMA enables individuals to share their digital assets with others while maintaining control over who can access the information and for what purposes.


## V
### Vault Service {#vault-service}
HashiCorp Vault is a widely used open-source and enterprise-grade solution designed for securely storing, accessing, and managing secrets and sensitive data in modern computing environments.
It offers a centralized platform for managing cryptographic keys, passwords, API keys, tokens, and other secrets.

### Verifiable Credential (VC) {#verifiable-credential}
A verifiable credential is a tamper-evident credential that contains one or more claims made by an issuer whose authorship can be cryptographically verified. It is possible to use VCs to create a [verifiable presentation](#verifiable-presentation). Also, the claims in a VC can be about different subjects.

### Verifiable Credentials (VCs) {#verifiable-credentials}
Synonym of the [Verifiable Credential (VC)](#verifiable-credential).

### Verifiable Data Registry {#verifiable-data-registry}
A system that mediates the creation and verification of identifiers, keys, and other relevant data.

### Verifiable Presentation {#verifiable-presentation}
Data is derived from one or more [verifiable credentials](#verifiable-credential), issued by issuers, and shared (presented) to a specific verifier. The verifiable presentation is tamper-evident and encoded in a way to trust the authorship of the data after a cryptographic verification. 

### Verifier
An entity that receives one or more [verifiable credentials](#verifiable-credential) optionally, inside a [verifiable presentation](#verifiable-presentation). Also known as a relying party.



## W
### Wallet SDK {#wallet-sdk}
A software development kit (SDK) that enables developers to build applications that interact with the Identus platform. 
The Wallet SDK provides a set of tools, libraries, and APIs that simplify the integration of SSI features, such as DID operations, verifiable credentials, and secure communications, into web and mobile applications.
Wallet SDK is much wider term than [Edge Agent SDK](#edge-agent-sdk), as it includes all the features of Edge Agent SDK and more.