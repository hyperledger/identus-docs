# Authentication

Authentication is the process of verifying the identity of an entity and the tenant that is associated with the entity. 
Authentication is a critical aspect of any identity management system, as it ensures that only authorized users can access the system and its resources.

PRISM Agent provides the following authentication methods to ensure that the identity of the entity is verified and authenticated during interactions with the platform:
- api-key authentication
- admin-api-key authentication

Other authentication methods can be implemented based on the needs.

## Default Entity and Wallet

The PRISM Agent uses the Default Entity and the Default Wallet for all interactions with the Agent over the REST API and DIDComm in the single-tenant mode.
Default Entity - is an entity with id `00000000-0000-0000-0000-000000000000` and Default Wallet - is a wallet with id `00000000-0000-0000-0000-000000000000`.

## API-Key Authentication

API-Key authentication is a simple authentication method that uses a secret key to authenticate the entity.
The header `api-key` must be added to the http request with the value of the issued secret.
The Platform Administrator can configure the API-Key authentication for the entity using the Admin API Key authentication method.

The Agent maintains a list of API-Keys for each tenant, but the value of the API-Key is not stored in the Agent.
The Agent stores the hash of the API-Key in the database and uses it to authenticate the entity.
To compute the hash value, the Agent uses the `SHA-256` algorithm and the `salt` value.

|Environment Variable | Value |
|---------------------|-------|
| API_KEY_SALT        | salt  |

Based on the configuration API-Key authentication, the PRISM Agent can support the following interaction models:

### Single Tenant without api-key authentication
Disable API-Key authentication and use the Default Wallet for all interactions with the Agent over the REST API and DIDComm

| Environment Variable | Value  |
|----------------------|--------|
| API_KEY_ENABLED      | false  |

### Single Tenant with api-key authentication
Enable API-Key authentication and use the Default Wallet for all interactions with the Agent over the  REST API and DIDComm

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | false |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | true  |

### Multi-Tenant with api-key authentication

Enable API-Key authentication and use the Entity and the Wallet associated with the API-Key for all interactions with the Agent
In this more the Administrator must register the Entity and the Wallet for the tenant before the first interaction with the Agent over the REST API.

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | false |

### Multi-Tenant with api-key authentication and auto-provisioning

Enable API-Key authentication and use the Wallet associated with the API-Key for all interactions with the Agent. 
Automatically register the Entity, Wallet and API-Key for the tenant during the first interaction with the Agent over the REST API.

| Environment Variable                  | Value |
|---------------------------------------|-------|
| API_KEY_ENABLED                       | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER  | false |
| AUTO_PROVISIONING_ENABLED             | true  |

## Admin-Api-Key Authentication

Admin-Api-Key authentication is an authentication method that uses a secret key to authenticate the Administrator.
The `x-admin-api-key` header must be added to the http request with the value of the issued secret.
The value of the `x-admin-api-key` header is configured in the Agent at the startup.

| Environment Variable | Value    |
|----------------------|----------|
| ADMIN_API_KEY        | secret   |

The following REST APIs are protected by the Admin-Api-Key authentication method:
- Wallet Management REST API
- Entity Management REST API