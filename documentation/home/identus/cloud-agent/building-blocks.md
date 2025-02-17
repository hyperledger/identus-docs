# Building Blocks

Identus is a toolset for implementing decentralized identity and consists of several core building blocks. These building blocks are modular components that can be easily combined and configured to meet various use cases and product requirements. By abstracting these fundamental components into modular building blocks, Identus allows for rapid development and deployment of new features and capabilities for its [Cloud Agents](/home/concepts/glossary#cloud-agent).

This modular architecture also provides excellent flexibility and customization options, as different building blocks can be combined in various ways to fit specific use case requirements. However, in the future, some unique use cases may arise that require designing and developing new building blocks. The Atala team continuously improves and expands the suite's capabilities to meet its users' evolving needs.

Below is a brief overview of the current building blocks of Identus:

**Building Block**|**Definition**|**Code Name**
:-----:|:-----:|:-----:
Cryptography|A set of cryptographic primitives that ensure the integrity, authenticity, and confidentiality of all data we store and process in a provable secure way.|Apollo
[Decentralized Identifiers (DID)](/home/concepts/glossary#decentralized-identifier)|A set of DID operations to create, manage, and resolve standards-based DIDs in a user-controlled manner.|Castor
[Verifiable Credentials](/home/concepts/glossary#verifiable-credential)|A set of credential operations to issue, manage, and verify standards-based [verifiable credentials](/home/concepts/glossary#verifiable-credential) in a privacy-preserving manner.|Pollux
[DIDComm](/home/concepts/glossary#didcomm) V2|A set of secure, standards-based communications protocols to establish and manage trusted, peer-to-peer connections and interactions between DIDs in a transport-agnostic and interoperable manner.|Mercury

## Apollo - Cryptography Module
Apollo is one of the building blocks of Identus. It is a suite of cryptographic primitives ensuring data security during storage and handling. Cryptographic primitives are mathematical algorithms and protocols that form the foundation for secure communication and data protection.

The primary purpose of Apollo is to provide data integrity, authenticity, and confidentiality, which are essential components of secure information systems. Apollo ensures that tampering, unauthorized access, and other security threats do not compromise the protection of user data, giving users confidence in its security.

Apollo utilizes cryptographic hash functions to create digital fingerprints of data for detecting any changes or modifications to the original data. These functions ensure that the data stored and processed remains authentic and unaltered.

For authenticity, Apollo uses digital signatures to authenticate the identity of the sender and recipient of data and ensure that the data has not been tampered with during transmission.

Finally, for confidentiality, Apollo uses encryption algorithms to protect sensitive data from unauthorized access and exposure. This feature helps ensure that sensitive information remains confidential and protected against cyber-attacks and data breaches.

Overall, the Apollo building block is an essential component of Identus, providing a secure and reliable means of protecting data stored and processed within the platform.

## Castor - DID Module

Castor is a building block of Identus that provides a set of DID operations, allowing users to create, manage, and resolve DIDs.

A [DID Document](/home/concepts/glossary#did-document) is a JSON-LD document that contains information about a DID. It includes information such as the public keys associated with the DID, the authentication mechanisms, and linked services. Castor consists of a resolver that resolves a DID to its associated DID Document. The lookup service allows users to retrieve the DID Document for a given DID.

Castor supports a variety of [DID methods](/home/concepts/glossary#did-method), including full support of the in-house `did:prism` method and other widely-used methods such as the [Peer DID method](/home/concepts/glossary#peer-did-method), enabling users to choose the DID method that best suits their needs and allows for interoperability with other systems and platforms.

Castor gives users complete control over their DIDs, including creating new DIDs, updating existing ones, and deleting or deactivating them if necessary.

## Pollux - Verifiable Credential Module

Pollux is a building block of Identus that provides a set of operations for managing and verifying verifiable credentials (VCs). This building block is a vital aspect of the [self-sovereign identity](/home/concepts/glossary#self-sovereign-identity) paradigm. With Pollux, users can issue, manage, and verify VCs in a privacy-preserving manner. Pollux ensures that users can share their credentials with others while maintaining control over their personal information and protecting it from unauthorized access and exposure.

In terms of issuing credentials, Pollux provides the necessary functions to create and issue VCs, including the ability to specify the type of credential, the attributes it represents, and the trusted party attesting to the credentials.

For managing credentials, Pollux allows users to store and manage their VCs in a secure and easily accessible manner, which includes adding, updating, or revoking credentials as needed.

Finally, for verifying credentials, Pollux provides the tools to check a given credential's validity and authenticate that a trusted party has issued it. Pollux includes the ability to check the status of the credential, such as whether it has been revoked or not, and to validate that the attributes it represents are accurate and up-to-date.

## Mercury - DIDComm Module

Mercury is a building block of Identus that provides a set of secure, standards-based communication protocols and infrastructure for establishing and managing trusted, peer-to-peer connections between decentralized identifiers. DIDs allow their owners to manage their identity and interact with others in a privacy-preserving manner.

Additionally, using standards-based protocols ensures that the communication between DIDs is interoperable, meaning that different systems and platforms can communicate seamlessly.
