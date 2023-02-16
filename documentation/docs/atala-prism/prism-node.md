# PRISM node
Prism Node acts as a layer 2 node for the Cardano blockchain. It is designed to function as a verifiable data registry, providing a secure and reliable way to store and manage data.

The main purpose of Prism Node is to provide a secure and trustworthy platform for storing and managing data on the Cardano blockchain. It does this by leveraging the security and decentralization of the blockchain. This means that data stored by Prism Node is secure and tamper-proof, and that it can be independently verified and authenticated. This is achieved through the use of cryptographic signatures and other security measures, which ensure that the data stored or queried via Prism Node is accurate and trustworthy.

The Prism Node protocol is designed to create decentralized identifiers (DIDs) on a blockchain, but it also needs to provide an efficient and scalable way to access and update those DIDs. This is where layer 2 nodes come in.

A layer 2 node is a service that runs alongside a blockchain node and provides additional functionality and services to support the Prism Node protocol. Specifically, layer 2 nodes are responsible for handling off-chain transactions that relate to the creation, updating, and resolution of DIDs.

When a DID is created or updated, the layer 2 Prism Node generates a Prism transaction that includes the necessary information and proof of work. The transaction is then broadcast to the blockchain network for verification and validation. Once the transaction is confirmed on the blockchain, the layer 2 node updates its own internal records to reflect the changes.

Layer 2 nodes also play a critical role in the resolution of DIDs. When a client requests the information associated with a particular DID, the layer 2 node uses its internal records to quickly retrieve and return the appropriate data. This allows for fast and efficient resolution of DIDs without requiring access to the underlying blockchain, which can be slow and resource-intensive.

Overall, layer 2 nodes are an important component of the Prism Node protocol, providing the necessary off-chain processing and data storage capabilities to make DIDs scalable and efficient.

At its core, PRISM depends on a set of protocols that define how to manage Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs). 
The PRISM node is the main component that implements these protocols. In order to understand what the node does, we should explain how the protocol work.

At a high level, the protocol that defines the prism DID method works as follows:
- Any user can run a PRISM node, to self validate information; or can rely on a set of actors that run nodes on his behalf. The level of delegation of trust is a decision made by each user.
- Any user willing to create a DID can do so without any need to interact with any PRISM node. The creation of a DID can be optionally announced publicly by publishing a creation operation on-chain. The action of posting an operation on-chain does require the interaction with a PRISM node.
- Users can update the DID documents associated to their DIDs. To do this, they need to publish respective update operations on-chain. This again requires interaction with a PRISM node.
- Deactivation of a DID can be performed in the same lines of updates, but publishing a deactivation operation.
- PRISM nodes read the operations published on-chain (by possibly other nodes), and maintain internally the map of DIDs to the history of changes of their associated DID documents.
- Any client can query any PRISM node and obtain the historical information of changes for a DID.
- DID resolvers, can take the output of PRISM nodes and construct the current DID document associated to a DID.
- An additional consideration is that operations can be posted on-chain in blocks, helping on the scalability side and general reduction of fees.

In short, users can create, update and deactivate DIDs by posting respective actions on-chain. The action of creating a DID can optionally not be posted on-chain. Based on the operations posted on-chain, nodes can construct the DID Documents associated to a given DID.

Additionally, the node provides an interface to track the status of operations submitted to the node.
