# Authentication

Authentication is the process of verifying an entity's identity and the tenant associated with the entity.
Authentication is critical to any identity management system, as it ensures that only authorized users can access the system and its resources.

PRISM Cloud Agent provides the following authentication methods to ensure that the identity of the entity is verified and authenticated during interactions with the platform:
- api-key authentication
- admin-api-key authentication

Authentication is critical to any identity management system, as it ensures that only authorized users can access the system and its resources.

## Default Entity and Wallet

The PRISM Cloud Agent uses the Default Entity and the Default Wallet for all interactions with the Agent over the REST API and DIDComm in the single-tenant mode.
Default Entity - is an entity with id `00000000-0000-0000-0000-000000000000` and Default Wallet - is a wallet with id `00000000-0000-0000-0000-000000000000`.

## API-Key Authentication

API-Key authentication is a simple method that uses a secret key to authenticate the entity.
The header `apikey` must be added to the http request with the value of the issued secret.
The Platform Administrator can configure the API-Key authentication for the entity using the Admin API Key authentication method.

The Agent maintains a list of API-Keys for each tenant, but the value of the API-Key does not get stored in the Agent.
The Cloud Agent stores the hash of the API-Key in the database and uses it to authenticate the entity.
The Cloud Agent uses the `SHA-256` algorithm and the `salt` value to compute the hash value.

|Environment Variable | Value |
|---------------------|-------|
| API_KEY_SALT        | salt  |

Based on the configuration API-Key authentication, the PRISM Cloud Agent can support the following interaction models:

### Single Tenant without api-key authentication
Disable API-Key authentication and use the Default Wallet for all interactions with the Cloud Agent over the REST API and DIDComm

| Environment Variable | Value  |
|----------------------|--------|
| API_KEY_ENABLED      | false  |

### Single Tenant with api-key authentication
Enable APIKey authentication and use the Default Wallet for all interactions with the Cloud Agent over the  REST API and DIDComm

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | true  |

### Multi-Tenant with api-key authentication

Enable API-Key authentication and use the Entity and the Wallet associated with the API-Key for all interactions with the Cloud Agent.
The Administrator must register the Entity and Wallet for the tenant before the first interaction with the Cloud Agent over the REST API.
		

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | false |

### Multi-Tenant with api-key authentication and auto-provisioning

Enable API-Key authentication and use the Wallet associated with the API-Key for all interactions with the Cloud Agent. 
Automatically register the Entity, Wallet, and API-Key for the tenant during the first interaction with the Cloud Agent over the REST API.

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