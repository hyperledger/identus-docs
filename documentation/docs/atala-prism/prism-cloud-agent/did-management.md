# DID management

## Managed PRISM DID

PRISM agent simplifies identity management by effectively handling PRISM DIDs for users.
By relying on a PRISM agent-managed DID, users entrust the agent with tasks such as
creating, updating, storing, and using the PRISM DID.

The PRISM agent employs hierarchical deterministic key derivation to manage the key material of the PRISM DID.
The PRISM agent calculates and stores the key derivation path whenever an activity involves a
new key material, such as creating a new DID or adding a new key.
It internally tracks the DID counter and key counter to increment the derivation path accordingly.
Details about the structure used by the PRISM agent to construct
the key material from the seed can be found on the HD-key derivation decision record.

## Managed Peer DID

The PRISM agent also manages Peer DIDs for DIDComm activities.
It automatically generates a Peer DID upon system startup by default.
The Key materials for Peer DIDs are randomly generated and stored securely in the
[secret storage](/docs/concepts/glossary#secrets-storage) allowing control of the Peer DID.

## Storing key material

### PRISM DID

PRISM DID management involves deriving key materials from a seed and derivation path.
When creating a new DID or updating a new key, a corresponding derivation path
is generated and stored in the database.
Only the derivation path, not the key material itself, is stored.
By combining the stored derivation path with the provided seed at runtime,
the PRISM agent can reconstruct and use key materials for PRISM DIDs.

The PRISM agent itself does not store the wallet seed. However, the infrastructure
hosting the PRISM agent may choose to store it based on operation requirements
and security considerations.

### Peer DID

The PRISM agent securely stores the key materials of peer DIDs using a
[secret storage](/docs/concepts/glossary#secrets-storage).
