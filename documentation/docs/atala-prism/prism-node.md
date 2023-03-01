# PRISM node
PRISM Node acts as a second-layer node for the Cardano blockchain. It is designed to function as a verifiable data registry, providing a secure and reliable way to store and manage data.

The primary purpose of PRISM Node is to provide a secure and trustworthy platform for storing and managing data on the Cardano blockchain. By leveraging the blockchain's security and decentralization, PRISM Node stores and retrieves data in a secure and tamper-proof manner. All operations are independently verified and authenticated using cryptographic signatures and other security measures, so all data is accurate and trustworthy.

PRISM Node runs alongside a blockchain. The Cardano Node keeps the internal state synchronized with the underlying blockchain and indexed for efficient lookup operations. Furthermore, it implements did:PRISM method in an efficient and scalable way by publishing the transactions to the Cardano blockchain to support the PRISM Node protocol and perform the creation, update, resolution, and deactivation of DIDs.

PRISM Node generates a PRISM transaction with information about DID operation and proof of work. Then, the transaction publishes to the blockchain network for verification and validation. Once the transaction gets confirmed on the blockchain, the PRISM Node updates its internal state to reflect the changes.

The second-layer node also plays a critical role in resolving DIDs. PRISM Node keeps the internal state indexed, which allows retrieving information about a particular DID quickly and efficiently without requiring access to the underlying blockchain.

Overall, second-layer nodes are essential for the PRISM Node protocol, providing the necessary off-chain processing and data storage capabilities to make DIDs scalable and efficient.

At its core, PRISM depends on protocols defining how to manage Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs).
The PRISM node is the main component that implements these protocols. First, we should explain how the protocol works to understand what the node does.

- Any user can run a PRISM node to self-validate information or rely on a set of actors that run nodes on his behalf. The level of delegation of trust is a decision made by each user.
- Any user willing to create a DID can do so without any need to interact with any PRISM node. Creating a DID can be optionally announced publicly by publishing a creation operation on-chain. The action of posting an operation on-chain does require interaction with a PRISM node.
- Users can update the DID documents associated with their DIDs. To do this, they must publish respective update operations on-chain by interacting with a PRISM node.
- Deactivating a DID can be performed along the same lines as an update but publishing a deactivation operation.
- PRISM nodes read the operations published on-chain (by possibly other nodes) and internally maintain the map of DIDs to the history of changes of their associated DID documents.
- Clients can query any PRISM node and obtain a DID's historical change log information.
- DID resolvers can take the output of PRISM nodes and construct the current DID document associated with a DID.
- An additional consideration is that operations can be posted on-chain in blocks, helping on the scalability side and general reduction of fees.
- 
In short, users can create, update and deactivate DIDs by posting respective actions on-chain. The operation of creating a DID can optionally not be published on-chain. Based on the operations posted on-chain, nodes can construct the DID Documents associated with a given DID.

Additionally, the node provides an interface to track the status of operations submitted to the node.
