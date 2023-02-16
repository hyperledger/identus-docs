# PRISM node
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