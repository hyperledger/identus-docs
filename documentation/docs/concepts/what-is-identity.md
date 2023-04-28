# What is identity?

Identity is the essence of who we are, combining our mutable and immutable traits. Immutable traits are sex, eye color, and genealogy. Mutable characteristics also contribute to our lives, where we bank, who we are insured by, citizenship, and where we went to primary, secondary school, and university.
 
Today we do not often think of using our identity. It is ingrained so deeply in our lives as routine behavior we don't think about using it as we move through the day. We use it to do or access things like driving, online accounts, banking, public transportation, travel, etc. Typically these various aspects of our identity are represented by a physical document or credential. 

Most of these documents come from an authority authorized to issue specific documents, like driver's licenses, and our information gets stored in a centralized storage medium (i.e., databases). Depending on how we use our credentials will determine how the data is verified or trusted. In some situations, the verifier (to whom we present our credentials) accepts the information as factual, based on the security measures on the document, like watermarks, seals, and holograms.

As we move into a digital world, physical documents become difficult to use, security and privacy are major concerns, and account management is challenging. The average person has 100 or more online accounts. Centralized and federated identity models can no longer satisfy the demand for increased security and privacy and for users to control their data.

## Decentralized Identity Model

The core of the decentralized identity model shifts the control from the center to the edges. It uses [decentralized identifiers (DIDs)](/documentation/docs/concepts/glossary.md#decentralized-identifer), commonly referred to as DIDs, that are unique identifiers that represent an entity: a person, place, organization, digital or physical thing.
Using a DID, we can connect to other DIDs, where data sharing and communications are possible. In some instances, the entity we connect with can assert claims about us in the form of a [verifiable credential (VC)](/documentation/docs/concepts/glossary.md#verifiable-credential).

VCs are what entities present to attest details about themselves. Instead of presenting a physical card, we use cryptographic mechanisms to make the presentation. In place of watermarks, we use cryptographic signatures to validate data integrity. Assurance plays a role in verification, and we will cover that in the trust section.

## Roles

### Holder
A [holder](/documentation/docs/concepts/glossary.md#holder) is an entity with one or more DIDs with verifiable credentials. The holder receives VCs from issuers and presents (as a prover) VCs to verifiers. Issuers and verifiers can also be holders simultaneously. 

### Issuer
An [issuer](/documentation/docs/concepts/glossary.md#issuer) is an entity that makes claims about a subject and issues a VC to a holder.

### Verifier
The [verifier](/documentation/docs/concepts/glossary.md#verifier) requests a presentation from a holder, then verifies the [presentation](/documentation/docs/concepts/glossary.md#verifiable-presentation).