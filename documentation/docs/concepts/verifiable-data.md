# Verifiable data

Digital identity brings several flavors of authentication to the table. Verifiable credentials (VCs) are the most commonly referenced methodology, but there is a concept of verifiable data, which may leverage VCs or DIDs, but it is different.


## Verifiable Credentials

VCs are claims made about a subject. A subject is typically the holder of the credential. Credentials can be anything. A few examples are below:


| Issues and makes a claim       | That the subject                            |
| ------------------------------ | ------------------------------------------- |
| Government                     | is a citizen                                |
| Insurance company              | is insured                                  |
| Streaming service              | has an account                              |
| Programming reputation website | subject has an account                      |
|                                | and is proficient in a programming language |
| Medical board                  | can practice medicine                       |
| University                     | graduated with a specific degree            |

These claims are all verifiable by having the holder present the credentials to a verifier. Depending on the level of certainty required will determine how the credential is verified. Generally, if the issuing DID is trusted (via a governance framework and trust registry), there is assurance that the claims made by that issuer are valid. 



## Verifiable Data

Authenticating a credential is a crucial function of an ecosystem, like validating the source material for a shirt. But what about where that material went from the source? What ports did it stop at, for how long, who handled it, etc.? This functionality is possible if an ecosystem is utilizing digital identity. Third-party auditors, insurers, etc., would also be able to verify the authenticity of the data. In supply-chain ecosystems, this data would be invaluable.



> Figure 1.1 Image showing shirt being sourced and moving through ecosystem
