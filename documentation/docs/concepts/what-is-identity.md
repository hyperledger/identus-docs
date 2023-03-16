# What is identity?

Identity is the essence of who we are. Identity consists of mutable and immutable traits. Immutable traits are height, eye color, and genealogy. Mutable characteristics also contribute to our lives, such sex, where we bank, who we are insured by, where we are citizens, and where we went to primary, secondary school, and university. 

Today, most mutable traits have a physical representation via a document issued by an appropriate authority that stores that information in a centralized storage medium (i.e., databases).

Identity is so ingrained in our daily lives we rarely think about how frequently we use our identity. When we get a driver's license, it is issued to us by a governing authority, i.e., Dept. of Motor Vehicles, Driver License Vehicle Agency. We may present that license to an entity that verifies the information on the document. The verifier trusts the document because it usually contains a watermark, seals, and other security measures unique to the issuer.


## What is Digital Identity?

Digital identity is a digital representation of an entity. An entity is a person, place, organization, digital or physical thing. Authenticatable digital documents replace physical documents. An entity would present its digital documents to prove various claims made about itself.


## Principles of SSI

Digital identity at the surface level works similarly to the world today, with additional security, privacy, interoperability, portability, transparency, and agency layers. A few key differences are that digital identity requires no central authority to provide an identity, nor is there any centralized registry, and there is no requirement to phone home to verify a credential.



The entire SSI and decentralized identity communities have agreed upon principles that make up an ecosystem. The Sovrin Foundation has compiled those into a diagram [here](https://sovrin.org/principles-of-ssi/), also provided below:

**Agency**

Representation

Delegation

Equity and Inclusion

Usability, Accessibility & Consistency

**Autonomy**

Participation

Decentralization

Interoperability

Portability

**Integrity**

Security

Verifiability & Authenticity

Privacy & Minimal Disclosure

Transparency

## Roles
### Holder

A holder is an entity that has a DID, and holds verifiable credentials. The holder will receive VCs from Issuers and present VCs to Verifiers. Issuers and Verifiers can also be Holders simultaneously. 

### Issuer

An issuer is an entity that issues VCs to holders. 


### Verifier

The verifier verifies a presentation from a Holder. There is an assurance question regarding the data presented and what would be acceptable to each verifier. For example, a verifier may accept verifying the issuing DID as a proper authority for a specific type of credential, and another may require an additional check or knowledge of the information on the VC itself.
<img width="497" alt="gov-framework" src="https://user-images.githubusercontent.com/95773776/225685492-49c96eb5-7617-4c64-99d3-228810e45019.png">

