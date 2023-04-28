# Verifiable data

Verifiable data is crucial in a world that is accelerating toward digitization. What can be trusted? Is this person who they say they are? Are they even real? Is that news article reliable? Is that photo or video genuine or a deep fake? We asked ourselves these questions for years before AI, in many forms, took the world by storm.

Verifiable data goes beyond the popular topics thrust into the forefront. Car battery manufacturers must keep track of materials and products in and out of their facilities. Ports must keep track of cargo in and out of their waters and runways. Supply chains are layers upon layers of data that need to be trusted. 

Customers want to know the source of their products and materials, conscious eaters want to validate organic foods, and companies and governments need to know origins and transportation routes due to 
embargoes and sanctions around the globe. 

## How can this be achieved?

A cryptographic signature like PGP to sign an email is a simple example. In public/private key cryptography, the private key allows the controller to sign - nobody else can unless they control the private key. For example, when I receive an email from Alice with her PGP signature, I have confidence that Alice genuinely sent the message.

If we take the concept of public/private cryptography out of our example and drop it into decentralized identity, we can authenticate DIDs. As someone with a [DID](/documentation/docs/concepts/glossary.md#decentralized-identifer), I could log in to a service, sign a document, etc. With cryptography, a signatory is reliable and authentic because manipulation can be proven.

This concept of signing applies when we introduce [verifiable credentials (VCs)](/documentation/docs/concepts/glossary.md#verifiable-credentials). An issuer signs the VC when it is issued, then a holder/prover will sign the presentation to a verifier. This process authenticates that the issuer issued a VC and that the holder didn't manipulate the data.

A potato originating from a small farm could have documents or credentials that could trace back through the retailer, distributor, shipping, harvest date, field, and possible organic/other certifications. This instant and unrestricted authentication on demand opens a world of opportunities. 

If potatoes aren't your thing, any widget, service, access, etc., apply. The same example applies to any industry using this infrastructure. Verifiable data is customizable; not everything has to be shared. Auditors for a supply chain may need to see more data than a customer who purchases it. Each industry and use case will have different business requirements.
