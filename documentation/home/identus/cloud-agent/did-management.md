# DID management

## Managed PRISM DID

The [Cloud Agent](/home/concepts/glossary#cloud-agent) simplifies identity management by effectively handling PRISM [DIDs](/home/concepts/glossary#decentralized-identifier) for users. Relying on a Cloud Agent-managed DID, users entrust the Cloud Agent with tasks such as creating, updating, storing, and using the PRISM DID.

The Cloud Agent employs hierarchical deterministic key derivation to manage the keys of the PRISM DID. The Cloud Agent calculates and stores the derivation path whenever an activity involves new key information, such as creating a new DID or adding a new key. It internally tracks the DID counter and key counter to increment the derivation path accordingly. Details about the Cloud Agent constructs key material from the seed are on the HD-key derivation decision record.

## Managed Peer DID

The Cloud Agent also manages [Peer DIDs](/home/concepts/glossary#peer-did) for [DIDComm](/home/concepts/glossary#didcomm) activities. The Key materials for Peer DIDs are randomly generated and stored securely in [secret storage](/home/concepts/glossary#secrets-storage), allowing control of the Peer DID.

## Storing key material

### PRISM DID

PRISM DID management involves deriving key materials from a seed and derivation path. A corresponding derivation path is generated and stored in the database when creating a new DID or updating a new key. Only the derivation path, not the key material itself, is stored. The Cloud Agent can reconstruct and use key materials for PRISM DIDs by combining the stored derivation path with the provided seed at runtime.

The Cloud Agent itself does not store the wallet seed. However, the infrastructure hosting the Cloud Agent may choose to keep it based on operation requirements and security considerations.

### Peer DID
The Cloud Agent securely stores the key materials of peer DIDs using secret storage.
