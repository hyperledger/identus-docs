# PRISM Mediator

[Mediators](/docs/concepts/glossary#mediator) play a critical role in identity wallets, particularly in the context of mobile devices (edge agent), because mobile devices don’t typically have static IP addresses. They might be offline or turned off, making it difficult to establish direct connections between different parties in the ecosystem and ensure [DIDComm](/docs/concepts/glossary#didcomm) message delivery.
The Mediator works as an Email Box of the recipient. But instead of receiving an email it receives a Forward messages and stores the final encrypted message (that is inside of the forward message) until the recipient retrieves it.

In a decentralized identity infrastructure, a mediator can act as an intermediary between the [holder](/docs/concepts/glossary#holder)'s device and other entities in the ecosystem, such as [issuers](/docs/concepts/glossary#issuer) and [verifiers](/docs/concepts/glossary#verifier).
For example, when a holder requests a credential from an issuer, the mediator can mediate or [relay](/docs/concepts/glossary#relay) the requests between the holder and the issuer.
When the holder presents a credential to a verifier, the mediator can again act as an intermediary that mediates or relays the requests between the holder and the verifier.
Using a mediator, identity wallets can ensure that all transactions are securely communicated between the various parties. At the same time, holders have control over their data and identities.
Mediators and identity wallets can provide security and trust while ensuring the system is scalable and efficient.

The PRISM mediator is a critical component of the Atala PRISM suite. Without a centralized authority, it enables secure communication between different entities in the Atala PRISM ecosystem, such as holders, issuers, and verifiers.

The PRISM mediator is an Open Source project and can be found in [GitHub input-output-hk/atala-prism-mediator](https://github.com/input-output-hk/atala-prism-mediator).
The mediation is a protocol specially designed to overcome the limitation of the edge agents.
The nature of the edge agents is that they are not always online, like in the mobile paradigm. Usually, we can assume that the mediator is always online.
By acting as an intermediary, the DID Comm v2 Mediator helps facilitate secure and private communication between entities while leveraging the decentralized nature of DIDs and cryptographic techniques to ensure authenticity, integrity, and confidentiality of the messages exchanged.
The [GitHub input-output-hk/atala-prism-mediator repository](https://github.com/input-output-hk/atala-prism-mediator) contains more documentation how it works.
All protocol of the mediator was fairly tested. We plan to open the test set in the future so you can compare functionality and performance with any mediator.
