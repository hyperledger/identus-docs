# Building Blocks

Atala Prism is a system for implementing Self-Sovereign Identity (SSI) technology and is comprised of several essential building blocks. These building blocks serve as modular components that can be easily combined and configured to meet various use cases and product requirements. By abstracting these fundamental components into modular building blocks, Atala Prism allows for rapid development and deployment of new features and capabilities for its agents.

This modular architecture also provides a great deal of flexibility and customization options, as different building blocks can be combined in various ways to fit specific use case requirements. However, it's possible that in the future, some unique use cases may arise that require the design and development of new building blocks. The Atala team is dedicated to continuously improving and expanding the capabilities of the platform to meet the evolving needs of its users.

A brief overview of the current building blocks of Atala Prism are outlined below.

**Building Block**|**Definition**|**Code Name**
:-----:|:-----:|:-----:
Cryptography|A suite of cryptographic primitives to ensure properties of integrity, authenticity and confidentiality of any data we store and process in a provably secure manner.|Apollo
Dcentralised Identifiers (DID)|A suite of decentralised identifier (DID) operations to create, manage and resolve standards based decentralised identifiers in a user-controlled manner.|Castor
Verifiable Credentials|A suite of credential operations to issue, manage and verify standards based verifiable credentials in a privacy preserving manner.|Pollux
DIDComm V2|A set of secure, standards based communications protocols to establish and manage trusted, peer-to-peer connections and interactions between DIDs in a transport agnostic and interoperable manner.|Mercury

## Apollo - Cryptography Module
Apollo is one of the building blocks of Atala Prism, and it is a suite of cryptographic primitives that ensure the security of data stored and processed within the platform. Cryptographic primitives are mathematical algorithms and protocols that form the foundation for secure communication and data protection.

The primary purpose of Apollo is to provide data integrity, authenticity, and confidentiality, which are essential components of secure information systems. With Apollo, users can be confident that their data is protected against tampering, unauthorized access, and other security threats.

In terms of data integrity, Apollo uses cryptographic hash functions to create digital fingerprints of data, which can be used to detect any changes or modifications to the original data. This ensures that the data stored and processed in Atala Prism remains authentic and has not been altered in any way.

For authenticity, Apollo uses digital signatures to verify the identity of the sender and recipient of data, as well as to ensure that the data has not been tampered with during transmission. This provides a secure and verifiable means of transmitting data between parties.

Finally, for confidentiality, Apollo uses encryption algorithms to protect sensitive data from unauthorized access and exposure. This helps to ensure that sensitive information remains confidential and protected against cyber attacks and data breaches.

Overall, the Apollo building block is an essential component of Atala Prism, providing a secure and reliable means of protecting data stored and processed within the platform.

## Castor - DID Module

Castor is a building block of Atala Prism that provides a suite of decentralised identifier (DID) operations. DIDs are unique digital identities that are self-sovereign, meaning they are owned and controlled by the individual or entity they represent.

Castor provides users with the ability to create, manage, and resolve DIDs in a user-controlled manner. This means that users have complete control over their digital identity, including the ability to create new DIDs, update existing ones, and delete them if necessary.

Castor is designed to support a variety of DID methods, including full support of the in-house Prism DID method, as well as other widely-used methods such as the Peer DID method. This enables users to choose the DID method that best suits their needs and allows for interoperability with other systems and platforms.

By providing a suite of user-controlled DID operations, Castor empowers individuals and organisations to take control of their digital identity and to manage their online reputation in a secure and transparent manner. This is a key aspect of the self-sovereign identity paradigm, as it enables users to control their personal information and digital footprint without relying on centralised authorities.

## Pollux - Verifiable Credential Module

Pollux is a building block of Atala Prism that provides a suite of operations for managing and verifying verifiable credentials. Verifiable credentials are digital representations of claims about an individual or organization that are attested to by a trusted party. They are used to provide evidence of an individual's qualifications, skills, achievements, and other attributes.

With Pollux, users can issue, manage, and verify verifiable credentials in a privacy-preserving manner. This means that users can share their credentials with others while maintaining control over their personal information and ensuring that it is protected from unauthorized access and exposure.

In terms of issuing credentials, Pollux provides the necessary infrastructure to create and issue digital credentials, including the ability to specify the type of credential, the attributes it represents, and the trusted party that is attesting to the credentials.

For managing credentials, Pollux allows users to store and manage their digital credentials in a secure and easily accessible manner. This includes the ability to add, update, or revoke credentials as needed.

Finally, for verifying credentials, Pollux provides the necessary tools to check the validity of a given credential and to verify that it has been issued by a trusted party. This includes the ability to check the status of the credential, such as whether it has been revoked or not, and to validate that the attributes it represents are accurate and up-to-date.

Overall, the Pollux building block provides a secure and efficient means of managing and verifying verifiable credentials in a privacy-preserving manner. This is a key aspect of the self-sovereign identity paradigm, as it enables individuals and organizations to take control of their personal information and to share it with others in a secure and transparent manner.

## Mercury - DIDComm Module

Mercury is a building block of Atala Prism that provides a set of secure, standards-based communication protocols for establishing and managing trusted, peer-to-peer connections between decentralized identifiers (DIDs). DIDs are unique digital identities that are under the control of their owners, allowing them to establish their identity and interact with others online in a privacy-preserving manner.

The Mercury building block provides the necessary infrastructure for establishing and managing secure, trusted connections between DIDs. This includes the ability to securely communicate and exchange information between DIDs, as well as to establish trust between two parties.

One of the key features of Mercury is its use of secure and standards-based communication protocols. This ensures that the communication between DIDs is secure, protecting personal information and data from unauthorized access and exposure. Additionally, the use of standards-based protocols ensures that the communication between DIDs is interoperable, meaning that different systems and platforms can communicate with one another seamlessly.

In terms of managing connections between DIDs, Mercury provides the necessary tools for establishing and maintaining secure and trusted relationships between DIDs. This includes the ability to initiate communication, manage the flow of information, and to establish trust between parties.

Overall, the Mercury building block provides a secure and efficient means of establishing and managing trusted, peer-to-peer connections between DIDs. This is a critical component of the self-sovereign identity paradigm, as it enables individuals and organizations to take control of their online identities and to interact with others in a secure and transparent manner.
