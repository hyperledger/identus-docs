# Glossary

## A
### access control
Access control mechanisms define how tenants/entities can access and interact with their data and resources and control who can access them. 
It helps enforce security and privacy policies in a multi-tenant environment.

### anchoring


## C
### claim
An assertion made about a [subject](/docs/concepts/glossary#did-subject).

### Cloud Agent (aka PRISM Cloud Agent)
The PRISM Cloud Agent is a scaleable, easy-to-use, robust, and W3C standards-based agent that provides self-sovereign identity (SSI) services to build products and solutions based on it. The PRISM Cloud Agent exposes REST API for integration with any programming language.

### controller
See [DID Controller](/docs/concepts/glossary#did-controller).

### Connection Protocol
The protocol provides endpoints for creating and managing connections, as well as for accepting invitations.

### connection invitation
An invitation from one entity to another to establish a connection.

### connection request
A request to establish a connection.

### credential schema
A data template for verifiable credentials (VCs). It contains claims of the VCs, credential schema author, type, name, version, and proof of authorship.

### credential offer

### credential request


## D
### decentralized identifier
A globally unique persistent identifier that does not require a centralized registration authority and is often cryptographically generated. All DIDs use distributed ledger technology (DLT) or some other decentralized network.

### DID
See [decentralized identifier](/docs/concepts/glossary#decentralized-identifer)

### DIDComm
A set of secure, standards-based communications protocols to establish and manage trusted, peer-to-peer connections and interactions between DIDs in a transport-agnostic and interoperable manner.

### DID controller
The entity that has control of the DID

### DID document
A set of data that describes the DID subject, including mechanisms such as cryptographic public keys. The entire W3C DID specification is [here](https://www.w3.org/TR/did-spec-registries/).

### DID method
The DID method defines how to implement a specific DID method schema. The specification defines the DID method, including precise operations to create DIDs and [DID documents](/docs/concepts/glossary#did-document) and how to resolve, update, and deactivate them.

### DID resolution
The process for retrieving a [DID document](/docs/concepts/glossary#did-document).

### DID subject
The entity is identified by a [DID](/docs/concepts/glossary#decentralized-identifer) and described by a [DID documents](/docs/concepts/glossary#did-document). Anything can be a DID subject: person, group, organization, physical thing, digital thing, etc.

### distributed ledger technology (DLT)
A distributed database or ledger establishes confidence for the participants to rely on the data recorded. Typically these databases use nodes and a consensus protocol to confirm the order of cryptographically signed transactions. Linking the transactions over time creates a historical ledger that is effectively immutable.


## E
### endpoints
A network address at which services operate on behalf of a [DID subject](/docs/concepts/glossary#did-subject).

### entity
An `entity,` in the context of the PRISM platform, is an identity representing a user or system. 
Each entity possesses a Wallet and is associated with an authentication method. 
Entities are crucial for secure and verifiable transactions within the SSI ecosystem.


## G
### governance framework
See [Trust Framework](/docs/concepts/glossary#trust-framework)


## H
### holder 
An entity will take on this role by possessing one or more [verifiable credentials](/docs/concepts/glossary#verifiable-credentials) and generating [verifiable presentations](/docs/concepts/glossary#verifiable-presentations). Also takes the role of a prover when presenting verifiable credentials for verification.


## I
### invitation
Sent by the [inviter](/docs/concepts/glossary#inviter) to the [invitee](/docs/concepts/glossary#invitee) to request and establish a connection.

### invitee
A subject that receives a connection invitation and accepts it by sending a connection request.

### inviter
A subject that initiates a connection request by sending a connection invitation.

### issuer
An entity that asserts claim(s) about one or more [subjects](/docs/concepts/glossary#did-subject) then creates a [verifiable credentials](/docs/concepts/glossary#verifiable-credentials) from these claims and transmits the VC to a holder.

### Issue Credential Protocol
Allows you to create, retrieve, and manage issued [verifiable credentials (VCs)](/docs/concepts/glossary#verifiable-credentials) between a VC issuer and a VC holder.


## M
### mediator
A mediator participates in agent-to-agent message delivery that the sender must model. It has its keys and will deliver messages only after decrypting an outer envelope to reveal a forward request. Many types of mediators may exist, but two important ones should be widely understood, as they commonly manifest in DID Docs:
- A service that hosts many cloud agents at a single endpoint to provide herd privacy (an "agency") is a mediator.
- A cloud-based agent that routes between/among the edges of a sovereign domain is a mediator.
For a detailed overview of mediators refer to the [RFC0046: Mediators and Relays](https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0046-mediators-and-relays).

### mutli-tenancy
Multi-tenancy is a core capability of the PRISM platform, allowing it to serve numerous users/identities while logically isolating their Wallet assets. 
This segregation maintains data privacy and security, enhancing scalability and resource sharing within the SSI ecosystem.

## P

### Peer DID

### Peer DID Method
A rich DID method that has no blockchain dependencies. The verifiable data registry is a synchronization protocol between peers. See the [Peer DID Method specification](https://github.com/decentralized-identity/peer-did-method-spec).

### PRISM
A suite of products that provides infrastructure for decentralized identity.

### PRISM Agent
Responsible for handling the connection to other agents in the network using a provided Mediator Service Endpoint and seed data.

### Present Proof Protocol
The protocol provides endpoints for a Verifier to request new proof presentations from Holder/Provers and for a Holder/Prover to respond to the presentation request using a specific verifiable credential they own.

### proof
A cryptographic mechanism that proves the information in a [verifiable credential](/docs/concepts/glossary#verifiable-credentials) or [verifiable presentation](/docs/concepts/glossary#verifiable-presentation) has not been tampered with. Many types of cryptographic proofs include but are not limited to digital signatures, zero-knowledge proofs, Proofs of Work, and Proofs of Stake.

### proof presentation
See [Present Proof Protocol](/docs/concepts/glossary#present-proof-protocol)

### protocol buffer
Also known as protobuf.

### proof request


## R
### relay
A relay is an entity that passes along agent-to-agent messages depending on the sender's encryption choices. It does not decrypt anything. Relays can change the transport for a message (e.g., accept an HTTP POST, then turn around and emit an email, or accept a Bluetooth transmission, then turn around and transmit something in a message queue). Mix networks like TOR are a type of relay.
For a detailed overview of relays refer to the [RFC0046: Mediators and Relays](https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0046-mediators-and-relays).

### relying party
A party that depends on the authenticity of digital signatures.

## S
### secrets storage
This component securely stores sensitive information, such as private keys associated with an individual's digital identity, wallet seed, etc.
Secrets storage plays a crucial role in SSI implementations because it ensures that sensitive information is securely stored and protected against unauthorized access or disclosure

### SSI
See [Self-Sovereign Identity](/docs/concepts/glossary#self-sovereign-identity)

### Self-Sovereign Identity
An identity model that shifts control to the edges, focused on security, privacy using public/private key encryption.

## T
### Tenant
A tenant is an individual user, organization, or entity that utilizes the SSI platform. 
Each tenant has its isolated area within the system, maintaining the separation of assets.

### Tenant Isolation
Tenant isolation is a core capability of the PRISM platform, allowing it to serve numerous users/identities while logically isolating their Wallet assets.

### Tenant Management
Tenant management encompasses the processes and tools used to onboard, provision, and manage tenants within the SSI platform, including user registration, role assignment, authentication method configuring, and access permissions.

### Trust Framework
A governing body that establishes rules, requirements, establishes operating procedures, and a [trust registry](/docs/concepts/glossary#trust-registry) for specific ecosystems.

### Trust Registry
A document that lists authorized issuers and verifiers established by the [Trust framework](/docs/concepts/glossary#trust-framework).

## V
### Vault Service
HashiCorp Vault is a widely used open-source and enterprise-grade solution designed for securely storing, accessing, and managing secrets and sensitive data in modern computing environments.
It offers a centralized platform for managing cryptographic keys, passwords, API keys, tokens, and other secrets.

### verifiable credential (VC)
A verifiable credential is a tamper-evident credential that contains one or more claims made by an issuer whose authorship can be cryptographically verified. It is possible to use VCs to create a [verifiable presentation](/docs/concepts/glossary#verifiable-presentation). Also, the claims in a VC can be about different subjects.

### verifiable data registry
A system that mediates the creation and verification of identifiers, keys, and other relevant data.

### verifiable presentation
Data is derived from one or more [verifiable credentials](/docs/concepts/glossary#verifiable-credential), issued by issuers, and shared (presented) to a specific verifier. The verifiable presentation is tamper-evident and encoded in a way to trust the authorship of the data after a cryptographic verification. 

### verifier
An entity that receives one or more [verifiable credentials](/docs/concepts/glossary#verifiable-credential) optionally, inside a [verifiable presentation](/docs/concepts/glossary#verifiable-presentation). Also known as a relying party.


## W
### Wallet SDK

### wallet
A wallet can perform DID operations, like create, update, and deactivate. It also enables management of verifiable credentials, and communications.

