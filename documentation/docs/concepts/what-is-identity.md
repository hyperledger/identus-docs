# Identity
Identity is the essence of who we are, combining our mutable and immutable traits. Immutable traits are sex, eye color, and genealogy. Mutable characteristics also contribute to our lives, such as where we bank, who we are insured by, citizenship, and where we went to primary, secondary school, and university.

Identity is everywhere and used in nearly every interaction we have daily. Nobody thinks about using their identity when they wake up, but we do when we pick up the cell phone to unlock it. We begin interacting with the device, cell phone service, email account, social account providers, and the contacts we interact with.


## Why Identity
Identity is about access. It is the key that unlocks doors we wish to enter. To stream movies, I need access to get into the virtual theater. Today, I do that by having an account with a streaming service, which brings me into the lobby. I need access to the theater to watch the movie, which requires a service plan. Which I select will determine whether I can watch in standard, high definition, or 4k. 

This example is repeatable across all interactions: banking, insurance, online services, shopping, investing, education, traveling, driving, etc. Identity may be the most essential thing we undervalue in our lives. We use it to physically and digitally access goods and services locally and globally.

Verifying Identity / Data
Verifying identity is crucial for the relying party authenticating identity information and data. Relying parties need high assurance or trust when authenticating identities or data. In the digital sphere with the current identity models, there needs to be more clarity in verifying who a person is with confidence.

This theory is easily verifiable by simply looking at the identity protection industry. Identity theft is rampant in the digital world. It occurs to individuals through social engineering and servicers like credit reporting services through breaches of databases. In [2022](https://www.factmr.com/report/2455/identity-theft-protection-services-market#:~:text=Global%20Identity%20Theft%20Protection%20Services,9.4%25%20during%202022%2D2032.), the industry was valued at around $10 billion, proving how much of a problem identity and data theft is.


## Identity models
There are two primary identity models in use today: Centralized and Federated. These models should be familiar and will lay a foundational understanding of how an emerging new model, self-sovereign identity, is different.


### Centralized model
One of the most common models includes government IDs, passports, social media handles, cell phone or internet providers, etc. These accounts or identities are granted or issued by a centralized authority, such as a government or service provider. Users must get an identity from the central administration.

![Centralized model](/src/img/centralized_model.png)


The operating model is straightforward. An identity is created by registering for a new account. Typically, this new account requires a username or email address and a password. This combination is the credential that authenticates us as identity holders in the ecosystem. The central service stores all of our information, and users have limited access to control our accounts and data.

### Federated model
The industry developed an improvement for the centralized model, named the federated model. It did not solve the root issues but alleviated some account management challenges. This revision introduced identity providers (IDPs). Some common examples of IDPs people encounter online are Google, Facebook, Apple, etc.

![Federated model](/src/img/federated_model.png)

The idea is to insert an IDP between the user and the service or organization. The user has an account with an IDP, and with those credentials, they can access other services. The credentials are called a single-sign-on (SSO). Sites that use the same IDP are called a federation, hence the federated model name.

### Self-Sovereign Identity (SSI)
SSI introduces new concepts that flip the existing models. The control shifts from the central authorities to the edges, with individuals. There are quite a lot of new ideas and components involved. Here, we will only cover these concepts at a high level. We cover these concepts in-depth in our blog.

![Self-Sovereign Identity model](/src/img/ssi_model.png)


#### Decentralized Identifiers
A decentralized identifier (DID) is at the core of SSI. A DID is not magical. It is a string of random characters randomly generated through cryptography. A DID is like a fingerprint; it is unique to the individual, and we can have more than one, just like we have multiple fingerprints. 

The DID resolves to a DID Document containing metadata about the entity. The information can be as limiting or extensive as an entity enters. Publishing personal identifying information (PII) is not recommended for privacy reasons. In some instances, where a DID will belong to an entity that issues verifiable credentials, it may be required to have identifying information about the entity for transparency and establish trust.

DIDs use public and private key cryptography. The controller, commonly the entity that creates the DID, controls public and private keys. Cryptographic digital signatures sign verifiable presentations that are a means of authenticating the DID and the controller of the DID. It would be nearly impossible to fake one of these signatures.

Verifiable Credentials (VCs)
VCs are claims about a subject, similar to physical documents in our wallets today, like driver's licenses, insurance, bank/credit accounts, etc. VCs are slightly different because they are purely digital, requiring an issuer to digitally sign the credential, proving the issuer issued it to a holder. This feature can cut down on fraudulent activity in a significant way. 

To push this idea further, the holder, when presenting a VC to a verifier, also has to sign it, proving they were the holder that received the VC originally, and verifying the issuer is possible through a diverse means of anchoring.

VCs can claim nearly anything about a holder. The sky is quite limitless to the possibilities, but here's a few to get ideas flowing:
* Academic records
* Certificates for websites
* Business access (facilities/systems)
* Finance (banking/online payments/investing/crypto/micro-lending)
* Certifications/CLE/apprenticeships/internships


## Roles
### Holder
Holders have/control DIDs that have VCs issued to them. When interacting with a relying party (verifier), holders will create a verifiable presentation to the verifier.

### Issuer
Issuers have/control at least one DID. The DID that issues credentials must have a published DID on the verifiable data registry (VDR). Publishing is critical because relying parties depend on this information to verify who the issuers are.

### Verifier
Verifiers verify data through verifiable presentations from a holder. They are the relying party in the trust triangle. They depend on the information a holder presents them and the issuer's published information on the VDR.

:::info 

An important thing to note is that a single entity could have all three roles: holder, issuer, and verifier.

:::


## Digital Wallets
A digital wallet is another crucial concept in a decentralized identity or SSI implementation. A digital wallet is a smart replacement for the canvas and leather versions we carry today. They store the credentials issued to a holder and handle some complex work in the background. Often, the software within a digital wallet is called an agent. This software handles incoming and outgoing connections and composes the verifiable presentations we mentioned earlier. 

What is going on under the hood is quite complex. The agent generates, stores, manages, and protects cryptographic keys, secrets, and other sensitive private data as verifiable credentials. Digital wallets are a crucial piece of the decentralized identity world. They will ensure that users can interact seamlessly with other entities.
