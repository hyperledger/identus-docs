# PRISM Node
The PRISM Node acts as a second-layer node for the distributed ledger. It functions as a [verifiable data registry](/home/concepts/glossary#verifiable-data-registry), providing a secure and reliable way to store and manage data.

PRISM Node's primary purpose is to provide a secure and trustworthy platform for storing and managing data on the distributed ledger. By leveraging the blockchain's security and decentralization, the PRISM Node stores and retrieves data in a secure and immutable manner. All operations are independently verified and authenticated using cryptographic signatures and other security measures, so all data is accurate and trustworthy.

The PRISM Node runs alongside a blockchain. It keeps the internal state synchronized with the underlying blockchain and indexed for efficient lookup operations. Furthermore, it implements `did:prism` method in an efficient and scalable way by publishing transactions to the distributed ledger. These transactions support the PRISM Node's protocol and perform the creation, update, resolution, and deactivation of [decentralized identifiers (DIDs)](/home/concepts/glossary#decentralized-identifier).

The PRISM Node generates a transaction with information about the DID operation and verifies and validates the DID operation before publishing it to the blockchain. Once the transaction gets confirmed on the blockchain, the PRISM Node updates its internal state to reflect the changes.

The second-layer PRISM Node also plays a critical role in resolving DIDs. Because the PRISM Node keeps the internal state indexed, it allows retrieving information about a particular DID quickly and efficiently without requiring access to the underlying blockchain.

Overall, second-layer nodes are essential for the PRISM Node protocol, providing the necessary off-chain processing and data storage capabilities to make DIDs scalable and efficient.

At its core, PRISM depends on protocols defining how to manage decentralized identifiers and [Verifiable Credentials (VCs)](/home/concepts/glossary#verifiable-credential). The PRISM Node is the main component that implements these protocols. First, we should explain how the protocol works to understand what the PRISM Node does.

- Any user can run a PRISM Node to self-validate information or rely on a set of actors that run nodes on his behalf. The level of delegation of trust is a decision made by each user.
- Any user willing to create a DID can do so without any need to interact with any PRISM Node. Creating a DID can be optionally announced publicly by publishing a creation operation on-chain. The action of posting an operation on-chain does require interaction with a PRISM Node.
- Users can update the DID documents associated with their DIDs. To do this, they must publish respective update operations on-chain by interacting with a PRISM Node.
- Deactivating a DID can be performed along the same lines as an update by publishing a deactivation operation.
- PRISM Nodes read the operations published on-chain (by possibly other nodes) and internally maintain the map of DIDs to the history of changes of their associated DID documents.
- Clients can query any PRISM Node and obtain a DID's historical change log information.
- DID resolvers can take the output of PRISM Nodes and construct the current DID document associated with a DID.
- An additional consideration is that operations can be posted on-chain in blocks, helping on the scalability side and general reduction of fees.


Additionally, the node provides an interface to track the status of operations submitted to a PRISM Node.
