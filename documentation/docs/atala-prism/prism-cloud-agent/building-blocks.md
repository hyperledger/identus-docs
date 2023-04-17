# Building Blocks

Atala PRISM is a suite for implementing decentralized identity technology, made up of several essential building blocks. These building blocks are modular components that can be easily combined and configured to meet various use cases and product requirements. By abstracting these fundamental components into modular building blocks, Atala PRISM allows for rapid development and deployment of new features and capabilities for its agents.

This modular architecture also provides excellent flexibility and customization options, as different building blocks can be combined in various ways to fit specific use case requirements. However, in the future, some unique use cases may arise that require designing and developing new building blocks. The Atala team continuously improves and expands the suite's capabilities to meet its users' evolving needs.

Below is a brief overview of the current building blocks of Atala PRISM:

**Building Block**|**Definition**|**Code Name**
:-----:|:-----:|:-----:
Cryptography|A suite of cryptographic primitives to ensure properties of integrity, authenticity, and confidentiality of any data we store and process in a provably secure manner.|Apollo
[Decentralized Identifiers (DID)](/documentation/docs/concepts/glossary.md#decentralized-identifer)|A suite of decentralized identifier (DID) operations to create, manage and resolve standards-based decentralized identifiers in a user-controlled manner.|Castor
[Verifiable Credentials](/documentation/docs/concepts/glossary.md#verifiable-credentials)|A suite of credential operations to issue, manage, and verify standards-based verifiable credentials in a privacy-preserving manner.|Pollux
[DIDComm](/documentation/docs/concepts/glossary.md#didcomm) V2|A set of secure, standards-based communications protocols to establish and manage trusted, peer-to-peer connections and interactions between DIDs in a transport-agnostic and interoperable manner.|Mercury

## Apollo - Cryptography Module
Apollo is one of the building blocks of Atala PRISM. It is a suite of cryptographic primitives ensuring data security during storage and handling. Cryptographic primitives are mathematical algorithms and protocols that form the foundation for secure communication and data protection.

The primary purpose of Apollo is to provide data integrity, authenticity, and confidentiality, which are essential components of secure information systems. Apollo ensures that tampering, unauthorized access, and other security threats do not compromise the protection of user data, giving users confidence in its security.

Apollo utilizes cryptographic hash functions to create digital fingerprints of data for detecting any changes or modifications to the original data, ensuring data integrity. These functions ensure that the data stored and processed remains authentic and unaltered.

For authenticity, Apollo uses digital signatures to verify the identity of the sender and recipient of data and ensure that the data has not been tampered with during transmission. Digital signatures provide a secure and verifiable means of transmitting data between parties.

Finally, for confidentiality, Apollo uses encryption algorithms to protect sensitive data from unauthorized access and exposure. This feature helps ensure that sensitive information remains confidential and protected against cyber-attacks and data breaches.

Overall, the Apollo building block is an essential component of Atala PRISM, providing a secure and reliable means of protecting data stored and processed within the platform.

## Castor - DID Module

Castor is a building block of Atala PRISM that provides a suite of Decentralized Identifier (DID) operations, allowing users to create, manage, and resolve DIDs. 

A [DID Document](/documentation/docs/concepts/glossary.md#did-document) is a JSON-LD document that contains information about a DID. It includes information such as the public keys associated with the DID, the authentication mechanisms, and associated services. Castor consists of a resolver that resolves a DID to its associated DID Document. It is a lookup service that allows users to retrieve the DID Document for a given DID.

Castor supports a variety of DID methods, including full support of the in-house ``did:prism`` method and other widely-used methods such as the Peer DID method, enabling users to choose the DID method that best suits their needs and allows for interoperability with other systems and platforms.

Castor gives users complete control over their DID, including creating new DIDs, updating existing ones, and deleting or deactivating them if necessary.

## Pollux - Verifiable Credential Module

Pollux is a building block of Atala PRISM that provides a suite of operations for managing and verifying verifiable credentials.

With Pollux, users can issue, manage, and verify verifiable credentials in a privacy-preserving manner. Pollux ensures that users can share their credentials with others while maintaining control over their personal information and protecting it from unauthorized access and exposure.

In terms of issuing credentials, Pollux provides the necessary infrastructure to create and issue digital credentials, including the ability to specify the type of credential, the attributes it represents, and the trusted party attesting to the credentials.

For managing credentials, Pollux allows users to store and manage their digital credentials in a secure and easily accessible manner, which includes adding, updating, or revoking credentials as needed.

Finally, for verifying credentials, Pollux provides the necessary tools to check a given credential's validity and verify that a trusted party has issued it. Pollux includes the ability to check the status of the credential, such as whether it has been revoked or not, and to validate that the attributes it represents are accurate and up-to-date.

Overall, the Pollux building block provides a secure and efficient means of managing and verifying verifiable credentials in a privacy-preserving manner. This building block is a vital aspect of the [self-sovereign identity](/documentation/docs/concepts/glossary.md#self-sovereign-identity) paradigm. It enables individuals and organizations to take control of their personal information and share it with others securely and transparently.

## Mercury - DIDComm Module

Mercury is a building block of Atala PRISM that provides a set of secure, standards-based communication protocols and infrastructure for establishing and managing trusted, peer-to-peer connections between decentralized identifiers (DIDs). DIDs are unique digital identities under the control of their owners, allowing them to manage their identity and interact with others online in a privacy-preserving manner.

One of the essential features of Mercury is its use of secure and standards-based communication protocols, which ensures that the communication between DIDs is secure, protecting personal information and data from unauthorized access and exposure. Additionally, using standards-based protocols ensures that the communication between DIDs is interoperable, meaning that different systems and platforms can communicate seamlessly.

In terms of managing connections between DIDs, Mercury provides the necessary tools for establishing and maintaining secure and trusted relationships between DIDs, including initiating communication, managing the flow of information, and establishing trust between parties.

Overall, the Mercury building block provides a secure and efficient means of establishing and managing trusted, peer-to-peer connections between DIDs. This building block is a critical component of the self-sovereign identity paradigm, as it enables individuals and organizations to take control of their online identities and interact with others securely and transparently.