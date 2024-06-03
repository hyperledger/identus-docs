# Overview

The [Cloud Agent](/docs/concepts/glossary#cloud-agent) is a scaleable, easy-to-use, robust, and W3C standards-based agent that provides [self-sovereign identity (SSI)](/docs/concepts/glossary#self-sovereign-identity) services to build products and solutions based on it. The Cloud Agent exposes REST API for integration with any programming language.

The Cloud Agent provides all the required capabilities to leverage the power of decentralized identity through the support of W3C standards, [DIDComm](/docs/concepts/glossary#didcomm), and the Hyperledger Aries protocols, solutions based on the Cloud Agent are interoperable with the SSI ecosystem. The Cloud Agent includes the following high-level features:

- Use the Cloud Agent API to develop [controllers](/docs/concepts/glossary#controller) that implement specific business logic according to use case requirements.
- Develop controllers in any programming language and remove the requirement for developers to interact or learn the nuts and bolts of the various standards.
- The Cloud Agent is written in Scala, supports the `did:prism` method, interacts with the PRISM Node over gRPC protocol, and uses it as the [Verifiable Data Registry](/docs/concepts/glossary#verifiable-data-registry). 
- The PRISM Node interacts with a distributed ledger, providing high security, scalability, and availability.
- The Cloud Agent is a cloud agent accessible from anywhere.
- Highly scalable and flexible, making it well-suited for a wide range of use cases and applications.


## Cloud Agent Features

This document provides an overview of the Cloud Agent feature set. This document is manually updated; as such, it may not be up to date with the most recent release of Cloud Agent.

**Last Update**: 2023-03-06, Release 0.48.3

## Platform Support

| Platform | Supported | Notes             |
| -------- | :-------: |  ------- |
| Server   | :white_check_mark: |    |
| Kubernetes | :white_check_mark: |  |
| Docker   | :white_check_mark: | IOG will publish docker images on Docker Hub in future. A link to the IOG Docker Hub for Cloud Agent will be provided once published. |
| Desktop  | :warning:         | Could be run as a local service on the computer |
| iOS      | :x:        |    |
| Android  | :x:        |    |
| Browser  | :x:        |    |

## Agent Types

| Role     | Supported | Notes      |
| -------- | :-------: |  --------- |
| Issuer   | :white_check_mark:        |            |
| Holder   | :white_check_mark:        |            |
| Verifier | :white_check_mark:        |            |
| Mediator Service | :white_check_mark:|            |

## Credential Types

| Credential Type | Supported | Notes |
| --- | :--: | -- |
| [W3C Standard Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) | :white_check_mark: | Supports JSON and JSON-LD Credentials encoded as JWT using the `JsonWebSignature2020` with `ESK256K` signature suite.<br /><br />Supports the [DIF Presentation Exchange](https://identity.foundation/presentation-exchange/) data format for presentation requests and presentation submissions. |

## DID Methods

| Method | Supported | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --- | :--: |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `did:PRISM` | :white_check_mark: | W3C [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-core/) compliant [PRISM DID Method](https://github.com/input-output-hk/PRISM-did-method-spec/blob/main/w3c-spec/PRISM-method.md) specification. A distributed ledger is the default [Verifiable Data Registry (VDR)](/docs/concepts/glossary#verifiable-data-registry) to anchor DIDs. PRISM DID Method is used for [Verifiable Credentials](/docs/concepts/glossary#verifiable-credential) and [Verifiable Presentations](/docs/concepts/glossary#verifiable-presentation). |
| `did:peer` | :white_check_mark:| Used for P2P connections                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Universal Resolver | :construction: |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## DIDComm

| Version | Supported | Notes |
| --- | :--: | -- |
| [`V1`](https://github.com/hyperledger/aries-rfcs/blob/main/concepts/0005-didcomm/README.md) | :x: |  |
| [`V2`](https://identity.foundation/didcomm-messaging/spec/) | :white_check_mark: |  |

## DIDComm Protocol Support

| Protocol | Supported | Notes |
| --- | :--: | -- |
| [Mediator Coordinator](https://didcomm.org/mediator-coordination/2.0/) | :white_check_mark: | -- |
| [DIDComm V2 Messaging](https://identity.foundation/didcomm-messaging/spec) | :white_check_mark: | -- |
| [DIDComm V2 Issue Credential](https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential) | :white_check_mark: | -- |
| [DIDComm V2 Present Proof](https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md) | :white_check_mark: | -- |
| [DIDComm V2 Report Problem](https://identity.foundation/didcomm-messaging/spec/#problem-reports) | :white_check_mark: | -- |
| [DIDComm V2 Routing Protocol](https://identity.foundation/didcomm-messaging/spec/#routing-protocol-20) | :white_check_mark: | -- |

## Supported Aries RFCs

| RFC | Supported | Notes |
 --- | :--: | -- |
| [0023-did-exchange](https://github.com/hyperledger/aries-rfcs/tree/main/features/0023-did-exchange)      | :white_check_mark:        | |
| [0434-out-of-band-protocol](https://github.com/hyperledger/aries-rfcs/blob/main/features/0434-outofband/README.md)      | :white_check_mark:        | |
| [0453-issue-credential-protocol](https://github.com/hyperledger/aries-rfcs/tree/main/features/0453-issue-credential-v2)      | :white_check_mark:        | |
| [0453-present-proof-protocol](https://github.com/hyperledger/aries-rfcs/tree/main/features/0454-present-proof-v2)      | :white_check_mark:        | |
