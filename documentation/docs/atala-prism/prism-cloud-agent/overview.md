# Overview

> Prism Agent: A scaleable, easy-to-use, robust, and W3C/Aries standards-based agent that provides self-sovereign identity services to build products and solutions based on it.
Prism Agent exposes REST API for integration with any programming language.

Prism Agent provides all the required capabilities to leverage the power of self-sovereign identity and verifiable credentials. Furthermore, through the support of W3C standards, DIDComm, and the Aries protocols, solutions based on the Prism Agent are interoperable with the SSI ecosystem.
Prism Agent includes the following high-level features:

Instead of learning the nuts and bolts of the various self-sovereign identity and verifiable credential standards, developers can use the Prism Agent API and SDK to focus on specific business logic and requirements.

The Prism Agent is written in Scala, supports DID Prism method, interacts with the Prism Node over gRPC protocol, and uses it as the Verifiable Data Registry. In addition, the Prism Node interacts with the Cardano blockchain, providing high security, scalability, and availability.

The Prism Agent is a cloud agent that can be deployed in the cloud and accessed from anywhere. The design of the agent is highly scalable, which makes it well-suited for a wide range of use cases and applications.

With its focus on security, scalability, and flexibility, the Prism Agent has the potential to become a key player in the emerging field of decentralized identity.

## Prism Agent Features

This document provides an of the Prism Agent feature set. This document is manually updated and as such, may not be up to date with the most recent release of Prism Agent.

**Last Update**: 2023-02-16, Release x.y.z

## Platform Support

| Platform | Supported | Notes             |
| -------- | :-------: |  ------- |
| Server   | :white_check_mark: |    |
| Kubernetes | :white_check_mark: |  |
| Docker   | :white_check_mark: | IOG publishes docker images on [Docker Hub](https://hub.docker.com/r/iohk....) |
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
> TODO - fix signature types

| Credential Type | Supported | Notes |
| --- | :--: | -- |
| [W3C Standard Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) | :white_check_mark: | Supports JSON, and JSON-LD Credentials encoded as JWWT using the `Ed25519Signature2018`, `BbsBlsSignature2020` and `BbsBlsSignatureProof2020` signature suites.<br/>Supports the [DIF Presentation Exchange](https://identity.foundation/presentation-exchange/) data format for presentation request and presentation submission. |

## DID Methods

| Method | Supported | Notes |
| --- | :--: | -- |
| `did:prism` | :white_check_mark: | W3C [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-core/) Compliant. Cardano is the default Verifiable Data Registry (VDR) to anchor DIDs. Used for Verifiable Credentials and Verifiable Presentations |
| `did:peer` | :warning:| Used for P2P connections |
| Universal Resolver | :construction: |  |

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

## Secure Storage Types
> TODO - fix and  provide details regarding our secure storage for the wallets.

| Secure Storage Types | Supported | Notes |
--- | :--: | -- |
| [Aries Askar](https://github.com/hyperledger/aries-askar) | :white_check_mark: | Recommended - Aries Askar provides equivalent/evolved secure storage and cryptography support to the "indy-wallet" part of the Indy SDK. When using Askar (via the `--wallet-type askar` startup parameter), other Indy SDK functionality is handled by [Indy Shared RS](https://github.com/hyperledger/indy-shared-rs) (AnonCreds) and [Indy VDR](https://github.com/hyperledger/indy-vdr) (Indy ledger interactions). |

## Supported Aries RFCs

| RFC | Supported | Notes |
--- | :--: | -- |
| [0023-did-exchange](https://github.com/hyperledger/aries-rfcs/tree/main/features/0023-did-exchange)      | :white_check_mark:        | |
| [0434-out-of-band-protocol](https://github.com/hyperledger/aries-rfcs/blob/main/features/0434-outofband/README.md)      | :white_check_mark:        | |
| [0453-issue-credential-protocol](https://github.com/hyperledger/aries-rfcs/tree/main/features/0453-issue-credential-v2)      | :white_check_mark:        | |
| [0453-present-proof-protocol](https://github.com/hyperledger/aries-rfcs/tree/main/features/0454-present-proof-v2)      | :white_check_mark:        | |
