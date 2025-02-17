# Mediator

## Introduction

[Mediators](/home/concepts/glossary#mediator) are indispensable in identity wallets, especially when dealing with mobile devices or edge agents. These mobile devices usually lack static IP addresses. They may only sometimes be online, posing a challenge in establishing reliable, direct connections between various parties in a decentralized ecosystem and guaranteeing delivery of [DIDComm](/home/concepts/glossary#didcomm) messages. The Mediator functions similarly to an email inbox for the recipient, storing "Forward" messages and their final encrypted content until retrieved by the intended party.

## Mediator's Role in Decentralized Identity Transactions

Within a decentralized identity framework, the Mediator bridges the [Holder's](/home/concepts/glossary#holder) device and other key players, such as [Issuers](/home/concepts/glossary#issuer) and [Verifiers](/home/concepts/glossary#verifier). For instance, if a Holder wishes to obtain a credential from an Issuer, the Mediator can [relay](/home/concepts/glossary#relay) or mediate this request, ensuring smooth interaction between both parties. Similarly, when a holder must present a credential to a verifier, the Mediator steps in again to mediate or relay the transaction. By leveraging a Mediator, identity wallets can offer secure and reliable communication between all involved entities. This approach also empowers holders to maintain control over their data and identities.

## Security, Scalability, and Efficiency

The Mediator is an integral part of Identus, facilitating secure communication without the need for a centralized authority. It seamlessly connects various entities in the Identus ecosystem, including Holders, Issuers, and Verifiers, ensuring the system remains secure, scalable, and efficient.

## Technical Specifications

The Mediator is an open-source initiative. For more details, you can refer to the [atala-prism-mediator Github repository](https://github.com/input-output-hk/atala-prism-mediator). The project aims to address the inherent limitations of edge agents, which are not always online, by assuming that the Mediator is perpetually online. Employing DIDComm v2 protocols and cryptographic methods, the Mediator guarantees all exchanged messages' authenticity, integrity, and confidentiality.

## DIDComm V2 Mediator Test Suite

### Overview
We have rigorously evaluated our Mediator protocols using the [DIDComm V2 Mediator Test Suite](https://github.com/input-output-hk/didcomm-v2-mediator-test-suite/). This test suite scrutinizes the compatibility of mediators with DIDComm V2 protocols, serving as a benchmark for quality and reliability.

### Protocols Tested
The suite tests a variety of vital protocols, including:

- [Trust Ping 2.0](https://didcomm.org/trust-ping/2.0/)
- [Mediator Coordination 2.0](https://didcomm.org/mediator-coordination/2.0/)
- [Pickup 3.0](https://didcomm.org/pickup/3.0/)

You can consult the [features folder](https://github.com/input-output-hk/didcomm-v2-mediator-test-suite/blob/main/src/test/resources/features) in the test suite repository for an exhaustive list of test scenarios and detailed descriptions.

### Future Enhancements in Testing

As part of our ongoing commitment to improving the Mediator, we plan to make our test sets publicly accessible, allowing users and developers to perform comparative assessments on functionality and performance against other mediators in the market. We aim to continually refine the Mediator's features based on real-world scenarios and demands, ensuring it remains a reliable and robust component in the Identus ecosystem.

We are working on enhancing the scope of our testing suite to address limitations and include additional protocols and scenarios. These future updates will make the Mediator even more robust and versatile.

The Mediator will continue to develop with the same rigorous testing protocols to ensure it remains at the forefront of secure, efficient, and interoperable decentralized identity management.

## Future Developments

Looking ahead, we are committed to the ongoing development of the Mediator, with plans to expand its feature set and integrate new protocols. Real-world use cases drive these updates to achieve feature completeness. Additionally, we aim to keep the Mediator at the forefront of industry developments, ensuring it remains aligned with emerging protocols and technological advancements.
