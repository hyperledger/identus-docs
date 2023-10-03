# Authentication

Authentication is the process of verifying an entity's identity and the tenant associated with the entity.
Authentication is critical to any identity management system, as it ensures that only authorized users can access the system and its resources.

PRISM Cloud Agent provides the following authentication methods to ensure that the identity of the entity is verified and authenticated during interactions with the platform:
- apikey authentication
- admin-api-key authentication

Authentication is critical to any identity management system, as it ensures that only authorized users can access the system and its resources.

## Default Entity and Wallet

The PRISM Cloud Agent uses the Default Entity and the Default Wallet for all interactions with the Agent over the REST API and DIDComm in the single-tenant mode.
Default Entity - is an entity with id `00000000-0000-0000-0000-000000000000` and Default Wallet - is a wallet with id `00000000-0000-0000-0000-000000000000`.

## APIKey Authentication

### Introduction

API Key Authentication is a straightforward method used to authenticate entities by utilizing a secret key. 
This method requires the inclusion of an `apikey` header in HTTP requests, with the value corresponding to the issued secret key. 
The configuration of API Key Authentication for an entity is managed by the Administrator using the Entity API methods.

### Security and Restrictions
- **API Key Length:** To maintain robust security, the length of the APIKey value must exceed 16 bytes (128 bits). This length requirement is essential for enhancing the security of your API Key against potential attacks. The max length of the API Key value is limited to 128 bytes.
**Unique API Keys:** Each API Key is unique to a specific entity. It cannot be shared or reused by other entities. If an attempt to assign the same APIKey value to another entity, the APIKey is considered compromised and must be considered unusable.
- **Revocation:** In cases where an APIKey is revoked for a tenant, it becomes invalid and cannot be used for authentication.

### Agent Responsibilities

The Agent manages API Keys for each tenant and maintains the security of the system:
- **API Key Storage:** The Agent maintains a list of APIKeys for each tenant. However, it is important to note that the original value of the APIKey is not stored in the Agent, ensuring additional security.
- **Hashing and Authentication:** The Agent securely stores the hash of the APIKey in the database and uses it to authenticate the entity. The hashing process employs the `SHA-256` algorithm and a `salt` value to compute the hash value, ensuring data integrity and security during authentication. The length of the `salt` value must exceed 16 bytes (128 bits)

Based on the configuration APIKey authentication, the Cloud Agent can support the following interaction models:

### Single Tenant without apikey authentication
Disable APIKey authentication and use the Default Wallet for all interactions with the Cloud Agent over the REST API and DIDComm

| Environment Variable | Value  |
|----------------------|--------|
| API_KEY_ENABLED      | false  |

### Single Tenant with apikey authentication
Enable APIKey authentication and use the Default Wallet for all interactions with the Cloud Agent over the  REST API and DIDComm

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | true  |

### Multi-Tenant with apikey authentication

Enable APIKey authentication and use the Entity and the Wallet associated with the API-Key for all interactions with the Cloud Agent.
The Administrator must register the Entity and Wallet for the tenant before the first interaction with the Cloud Agent over the REST API.
		

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | false |

### Multi-Tenant with apikey authentication and auto-provisioning

Enable APIKey authentication and use the Wallet associated with the APIKey for all interactions with the Cloud Agent. 
Automatically register the Entity, Wallet, and APIKey for the tenant during the first interaction with the Cloud Agent over the REST API.

| Environment Variable                  | Value |
|---------------------------------------|-------|
| API_KEY_ENABLED                       | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER  | false |
| AUTO_PROVISIONING_ENABLED             | true  |

## Admin-Api-Key Authentication

Admin-Api-Key authentication is an authentication method that uses a secret key to authenticate the Administrator.
Adding the `x-admin-api-key` header  to the http request with the value of the issued secret is required.
The value of the `x-admin-api-key` header gets configured in the Cloud Agent at the startup.

| Environment Variable | Value    |
|----------------------|----------|
| ADMIN_API_KEY        | secret   |

The following REST APIs get protected by the Admin-Api-Key authentication methods:
- Wallet Management REST API
- Entity Management REST API