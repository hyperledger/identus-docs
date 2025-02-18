# Overview

Identus is a toolset designed for Decentralized Identity enablement. These tools work together to establish a framework for implementing Decentralized Identity Solutions. Here's an overview of the key components:

* [Cloud Agent](cloud-agent/overview): It is a W3C/Aries standards-based agent that provides decentralized identity services. It exposes a REST API for integration, enabling the development of solutions based on SSI technology.

* [PRISM Node](prism-node/overview.md): Serves as a [verifiable data registry](/home/concepts/glossary#verifiable-data-registry) (VDR). The PRISM Node stores and retrieves data securely, is tamper-proof, and is responsible for publishing Identus's protocol transactions to the Distributed Ledger blockchain. It also plays a critical role in resolving [DIDs](/home/concepts/glossary#did) efficiently without requiring access to the underlying blockchain​​​​​​.

* [Mediator](mediator): The Mediator acts as a bridge between the [holder's](/home/concepts/glossary#holder) device and other actors, such as [issuers](/home/concepts/glossary#issuer) and [verifiers](/home/concepts/glossary#verifier), ensuring secure and reliable communication without centralized management​​​​.

* Edge Agent SDKs: allow the development of edge agents - Decentralized Identity mobile apps and browser extensions. The SDKs are available in [Swift](https://hyperledger-identus.github.io/sdk-swift/documentation/edgeagentsdk/) (iOS and other Apple OS), [TS](https://hyperledger-identus.github.io/docs/sdk-ts/sdk) (Browser and Node.js), and [Kotlin Multiplatform](https://hyperledger-identus.github.io/sdk-kmp/) (JVM and Android)
