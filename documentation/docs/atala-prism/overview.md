# Overview

The Atala PRISM suite contains the following core components:

- PRISM Cloud Agent, a fully featured cloud agent used for interacting with other identity agents in a standards-based and interoperable way
- PRISM Node, a [Verifiable Data Registry](/docs/concepts/glossary#verifiable-data-registry) (VDR) which provides on-chain persistence using the Cardano blockchain.
- PRISM Mediator allows mobile applications to route messages to and from PRISM Agents
- PRISM Cloud Agent Enterprise, built on top of the fully featured PRISM Cloud Agent as its foundation, provides additional capabilities and enterprise-ready business controller logic

Atala offers a hosted service for PRISM, which provides a dedicated, single-tenant instance powered by the above components.

Atala builds its services using a set of functionally decomposed building blocks which are re-usable libraries with strong domain context bounds.

For more information regarding each component, please see the following links:
  - [PRISM Cloud Agent](prism-cloud-agent/overview)
  - [Building Blocks](prism-cloud-agent/building-blocks)
  - [PRISM Node](prism-node)
  - [Hosted Instances](infrastructure/hosted-instances)
  
Atala PRISM also provides feature-rich SDKs with documentation:
  - For building Apple SSI Applications, please see [Swift SDK](https://input-output-hk.github.io/atala-prism-wallet-sdk-swift/)
  - For building Web SSI Applications, please see [Typescript SDK](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/)
  - For building JVM-based SSI Applications, please see [Kotlin Multiplatform SDK](https://input-output-hk.github.io/atala-prism-wallet-sdk-kmm/)
