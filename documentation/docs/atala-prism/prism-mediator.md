# PRISM Mediator

Mediators play a critical role in self-sovereign identity wallets, particularly in the context of mobile devices, because mobile devices don’t typically have static IP addresses and might be offline or even turned off, which can make it difficult to establish direct connections between different parties in the ecosystem and ensure DIDComm message delivery. As a result, the mediator must relay, store, and forward messages between parties.

Definitions of mediator and relays as per [RFC 0046](https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0046-mediators-and-relays#summary) are outlined below:

A `mediator` is a participant in agent-to-agent message delivery that must be modeled by the sender. It has its own keys and will deliver messages only after decrypting an outer envelope to reveal a forward request. Many types of mediators may exist, but two important ones should be widely understood, as they commonly manifest in DID Docs:

- A service that hosts many cloud agents at a single endpoint to provide herd privacy (an "agency") is a mediator.
- A cloud-based agent that routes between/among the edges of a sovereign domain is a mediator.

A `relay` is an entity that passes along agent-to-agent messages, but that can be ignored when the sender considers encryption choices. It does not decrypt anything. Relays can be used to change the transport for a message (e.g., accept an HTTP POST, then turn around and emit an email; accept a Bluetooth transmission, then turn around and emit something in a message queue). Mix networks like TOR are an important type of relay.

In the context of self-sovereign identity infrastructure, a mediator can act as an intermediary between the user's device and other entities in the ecosystem, such as issuers and verifiers. When a user requests a credential from an issuer, for example, the mediator can mediate or relay the requests between the user and the issuer. When the user presents a credential to a verifier, the mediator can again act as an intermediary that mediate or relay the requests between the user and the verifier. By using a mediator and relays, self-sovereign identity wallets can ensure that all transactions are securely communicated between the various parties while users have full control over their own data and identities. Mediators, relays and self-sovereign identity wallets can provide a high level of security and trust, while also ensuring that the system is scalable and efficient.

Prism Mediator is a critical component of the Atala Prism self-sovereign identity solution. Without a centralized authority, it enables secure communication between different entities in the Atala Prism ecosystem, such as users, issuers, and verifiers.

For a detailed overview of `mediators` and `relays` refer to the [RFC0046: Mediators and Relays](https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0046-mediators-and-relays).