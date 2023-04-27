# Trust

Trust is hard in the physical world. It becomes infinitely more complex when we introduce the internet to the mix. Strangers and non-living entities (i.e., bots) coexist in a vast space. Today we have no certainty of an entity. How do we know that @alice123456789 on Twitter is a doctor? Is Alice wearing scrubs in their profile picture? Was that AI-generated? In many of these online spaces, we cannot verify that the entity is who they claim.

If we were in a doctor's office, we could begin establishing trust because they may be wearing scrubs or a white coat. There may be a degree and medical license on the wall. These things make us feel comfortable because these things are familiar to us about doctors. But have you ever verified your doctor's medical license–probably not. The standard when we move online is dramatically different.

If a doctor used a decentralized identity, we could easily verify the medical license on a wall with a QR code or Bluetooth device. This authentication on demand applies to all credentials, whether a doctor, lawyer, police officer, supplier, etc. It seems simple, but how does it work?

## Trust Framework

Before we get started, the terms trust or governance framework are probably familiar, depending on your background or what ecosystem you may be coming from. These terms are interchangeable, but we stick to the [trust framework](/documentation/docs/concepts/glossary.md#trust-framework) usage.

This clarification leads to the first topic: trust frameworks are not the government (necessarily). The purpose of a trust framework is governance over a specific ecosystem. For example, medical licenses get issued by state or provincial medical boards. The board acts like a governance body, determining who can practice medicine, the rules and eligibility requirements, etc.

The [issuer](/documentation/docs/concepts/glossary.md#issuer), in our case, the medical board, issues licenses to [holders](/documentation/docs/concepts/glossary.md#holders) and governs themselves with a trust framework. In the previous sections, we discussed trust but have yet to determine how it fits in. The trust framework is where we can establish verifiable trust using a [trust registry](/documentation/docs/concepts/glossary.md#trust-registry).

## Trust Registry

Trust registries serve a specific and narrowly focused role by establishing who the issuers and verifiers are. The registry allows a verifier to check the medical license issuer registry and validate that an authorized authority issued the medical license credential. You may be asking yourself, isn't decentralized identity self-sovereign? It is, but if Bob down the street can issue medical licenses with no authority, we quickly run into problems.

Many of us may limit our thinking to our local area or region, but remember, the internet is everywhere (including space). When we take the doctor and possibly send them on a mission to another country, how does that country validate the doctor is authentic? The other country needs to know what trust registry exists for doctors from different places, and should they trust it? If the medical license is from a trusted source, like a medical board in Canada, instead of Bob down the road, I would be more open to trusting it.

The last piece to touch on here is that trust frameworks and registries aim for transparency. These documents that govern the framework and the registry should be public, where applicable. A repository, for example, would provide built-in versioning for what changed, such as rules or issuers. It could also have the added benefit of keeping costs down. If some transactions can be off-chain, it means no transaction fee. 

The Trust Over Internet Protocol (TOIP) foundation has created a template for Trust Frameworks located [here](https://trustoverip.org/news/2022/02/01/the-toip-foundation-releases-its-first-official-governance-specifications/). In the spirit of setting an example, the Atala PRISM Pioneer Program has an established trust framework available [here](https://github.com/AtalaPRISMTribe/PPPGF).

![Trust Diamond](/static/img/trust-diamond.png "Trust Diamond")
> Fig. 1 Trust Diamond with Trust Framwork and Registry
