# PRISM Mediator

> The Linchpin of Decentralized Identity Management.

## Introduction

[Mediators](/docs/concepts/glossary#mediator) serve as indispensable elements in the realm of identity wallets, especially when dealing with mobile devices, or edge agents. These mobile devices usually lack static IP addresses and may not always be online. This poses a challenge in establishing reliable, direct connections between various parties in a decentralized ecosystem, and in guaranteeing the delivery of [DIDComm](/docs/concepts/glossary#didcomm) messages. The PRISM Mediator functions similarly to an email inbox for the recipient, storing "Forward" messages and their final encrypted content until retrieved by the intended party.

## Mediator's Role in Decentralized Identity Transactions

Within a decentralized identity framework, the Mediator acts as a bridge between the [holder's](/docs/concepts/glossary#holder) device and other key players such as [issuers](/docs/concepts/glossary#issuer) and [verifiers](/docs/concepts/glossary#verifier). For instance, if a holder wishes to obtain a credential from an issuer, the Mediator can [relay](/docs/concepts/glossary#relay) or mediate this request, ensuring smooth interaction between both parties. Similarly, when a holder needs to present a credential to a verifier, the Mediator steps in once again to mediate or relay the transaction. By leveraging a Mediator, identity wallets can offer secure and reliable communication between all involved entities. This approach also empowers holders to maintain control over their own data and identities.

## Security, Scalability, and Efficiency

The Mediator is an integral part of the Atala PRISM suite, facilitating secure communication without the need for a centralized authority. It seamlessly connects various entities in the PRISM ecosystem, including holders, issuers, and verifiers, and ensures that the system remains secure, scalable, and efficient.

## Technical Specifications

The PRISM Mediator is an open-source initiative, for more details, you can refer to the [atala-prism-mediator Github repository](https://github.com/input-output-hk/atala-prism-mediator). The project aims to address the inherent limitations of edge agents, which are not always online, by assuming that the Mediator is perpetually online. Employing DIDComm v2 protocols and cryptographic methods, the Mediator guarantees the authenticity, integrity, and confidentiality of all exchanged messages.

## DIDComm V2 Mediator Test Suite

### Overview
Our Mediator protocols have been rigorously evaluated using the [DIDComm V2 Mediator Test Suite](https://github.com/input-output-hk/didcomm-v2-mediator-test-suite/). This test suite is designed to scrutinize the compatibility of mediators with DIDComm V2 protocols, serving as a benchmark for quality and reliability.

### Protocols Tested
The suite tests a variety of vital protocols, including:

- [Trust Ping 2.0](https://didcomm.org/trust-ping/2.0/)
- [Mediator Coordination 2.0](https://didcomm.org/mediator-coordination/2.0/)
- [Pickup 3.0](https://didcomm.org/pickup/3.0/)

For an exhaustive list of test scenarios, along with their detailed descriptions, you can consult the [features folder](https://github.com/input-output-hk/didcomm-v2-mediator-test-suite/blob/main/src/test/resources/features) in the test suite repository.

### Future Enhancements in Testing

As part of our ongoing commitment to improve the PRISM Mediator, we plan to make our test sets publicly accessible. This will allow users and developers to perform comparative assessments on functionality and performance against other mediators in the market. Our aim is to continually refine the PRISM Mediator's features based on real-world scenarios and demands, thereby ensuring it remains a reliable and robust component in the Atala PRISM ecosystem.

We are working on enhancing the scope of our testing suite to address limitations and include additional protocols and scenarios. These future updates will contribute to making the PRISM Mediator even more robust and versatile.

In summary, the PRISM Mediator is poised for future advancements, with rigorous testing protocols in place to ensure it remains at the forefront of secure, efficient and interoperable decentralized identity management.

## Future Developments

Looking ahead, we are committed to the ongoing development of the PRISM Mediator, with plans to expand its feature set and integrate new protocols. These updates will be driven by real-world use cases and the goal of achieving feature completeness. Additionally, we aim to keep the mediator at the forefront of industry developments, ensuring it remains aligned with emerging protocols and technological advancements.