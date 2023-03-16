# What is identity?

Identity is the essence of who we are. Identity consists of mutable and immutable traits. Immutable traits are height, eye color, and genealogy. Mutable characteristics also contribute to our lives, such sex, where we bank, who we are insured by, where we are citizens, and where we went to primary, secondary school, and university. 

Today, most mutable traits have a physical representation via a document issued by an appropriate authority that stores that information in a centralized storage medium (i.e., databases).

Identity is so ingrained in our daily lives we rarely think about how frequently we use our identity. When we get a driver's license, it is issued to us by a governing authority. Then, we may present that license to an entity that verifies the information on the document. The verifier trusts the issuer because, typically, physical copies have watermarks, seals, etc. 

## What is Digital Identity?

Digital identity is a digital representation of an entity via a decentralized identifier (DID). An entity is a person, place, organization, digital or physical thing. Instead of physical documents, digital representations, called verifiable credentials, represent mutable characteristics.

## Principles of SSI

The roles we discussed in the driver's license example still exist in digital identity. It works similarly but with additional security, privacy, interoperability, portability, transparency, and agency layers. A few key differences are that digital identity requires no central authority to provide an identity, nor is there any centralized registry, and there is no requirement to phone home to verify a credential. 

> Figure x.x 12 Principles of SSI

## Using digital identity

### Holder

The term holder is an entity with a DID. Typically the DID is stored or held in a digital wallet. Every player in a digital identity ecosystem will have one or more DIDs.

> Figure x.x Holder, Wallet, DID

### Issuer

An issuer is an entity that issues verifiable credentials (VCs) to holders.

> Figure x.x Issuer, holder, VC

### DID pair

A connection between two agents is always unique for that relationship. A DID pair represents each side of this relationship, one going to each entity. It is essential because neither party knows the other entity's DID, only the DID pair. This key point is a privacy feature ensuring that your doctor won't know where you buy books, the bookstore won't know where you buy groceries, etc.

> Figure x.x DID pair

### Verifier

The verifier verifies a VC presentation. There is an assurance question regarding the data presented and what would be acceptable to each verifier. For example, one verifier may accept verifying the issuing DID as being a proper authority for a specific type of credential, and another may require an additional check or knowledge of the information on the VC itself.

> Figure x.x Verifier, holder, issuer, trust framework, trust registry
