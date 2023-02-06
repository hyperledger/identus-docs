# Overview

The Atala PRISM offering comprises the following core components:

- PRISM Cloud Agent, a fully featured cloud agent used for interacting with other agents in the realm of Self-Sovereign-Identity (SSI) in a standards-based and interoperable way
- PRISM Node, a *Verifiable Data Registry* (VDR) which provides on-chain persistence using the Cardano blockchain.
- PRISM Mediator, **[NEED DEFINITION + DO WE NEED THIS IN HERE?]**
- PRISM Cloud Agent Enterprise - built on top of the fully featured PRISM Cloud Agent as its foundation, providing additional capabilities and enterprise-ready business controller logic

Atala offers a hosted service for PRISM, which provides a dedicated - single-tenant instance - powered by the above components.

Atala builds its services using a set of functionally decomposed building blocks which are re-usable libraries with strong domain context bounds.  

For more information regarding each component, please see the following links:
  - For the fully featured PRISM Cloud Agent, please see [PRISM Cloud Agent](prism-cloud-agent/overview)
  - For details on the building-blocks, please see [Building Blocks](prism-cloud-agent/building-blocks)
  - For the Verifiable Data Registry based upon Cardano, please see [PRISM Node](prism-node)
  - For the Enterprise version of our cloud agent, please see [PRISM Cloud Agent Enterprise](prism-cloud-agent-enterprise/overview)
  - For how Atala host it's dedicated instances, please see [Hosted Instances](infrastructure/hosted-instances)
