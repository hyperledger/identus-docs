# Authentication and Authorisation

Authentication is the process of verifying an entity's identity and the tenant associated with the entity.
Authorization verifies that an entity has the necessary permissions to access the requested information.
resource.

Authentication and authorization are critical to any identity management system, ensuring only authorized
users can access the system and its resources.

PRISM Cloud Agent provides the following authentication and authorization methods to ensure that the identity of the
entity is verified and authenticated during interactions with the platform:

- apikey authentication with internal IAM service
- admin-api-key authentication
- JWT token authentication and authorization with external IAM service Keycloak

## Default Entity and Wallet

The PRISM Cloud Agent uses the Default Entity and the Default Wallet for all interactions with the Agent over the REST
API and DIDComm in the single-tenant mode.
Default Entity - is an entity with id `00000000-0000-0000-0000-000000000000`, and Default Wallet - is a wallet with
id `00000000-0000-0000-0000-000000000000`.

## APIKey Authentication

### Introduction

API Key Authentication is a straightforward method used to authenticate entities by utilizing a secret key.
This method requires the inclusion of an `apikey` header in HTTP requests, with the value corresponding to the issued
secret key.
The configuration of API Key Authentication for an entity is managed by the Administrator using the Entity API methods.

### Security and Restrictions

- **API Key Length:** To maintain robust security, the length of the APIKey value must exceed 16 bytes (128 bits). This
  length requirement is essential for enhancing the security of your API Key against potential attacks. The max length
  of the API Key value is limited to 128 bytes.
  **Unique API Keys:** Each API Key is unique to a specific entity. It cannot be shared or reused by other entities. If
  an attempt to assign the same APIKey value to another entity, the APIKey is considered compromised and must be
  considered unusable.
- **Revocation:** In cases where an APIKey revocation for a tenant occurs, it becomes invalid and unusable.

### Agent Responsibilities

The Agent manages API Keys for each tenant and maintains the security of the system:

- **API Key Storage:** The Agent maintains a list of APIKeys for each tenant. However, it is important to note that the
  original value of the APIKey is not stored in the Agent, ensuring additional security.
- **Hashing and Authentication:** The Agent securely stores the hash of the APIKey in the database and uses it to
  authenticate the entity. The hashing process employs the `SHA-256` algorithm and a `salt` value to compute the hash
  value, ensuring data integrity and security during authentication. The length of the `salt` value must exceed 16
  bytes (128 bits)

Based on the configuration APIKey authentication, the Cloud Agent can support the following interaction models:

### Single Tenant without apikey authentication

Disable API key authentication and use the Default Wallet for all interactions with the Cloud Agent over the REST API and
DIDComm

| Environment Variable | Value |
|----------------------|-------|
| API_KEY_ENABLED      | false |

### Single Tenant with apikey authentication

Enable API key authentication and use the Default Wallet for all interactions with the Cloud Agent over the REST API and
DIDComm

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | true  |

### Multi-Tenant with apikey authentication

Enable API key authentication and use the Entity and the Wallet associated with the API-Key for all interactions with the
Cloud Agent.
The Administrator must register the Entity and Wallet for the tenant before the first interaction with the Cloud Agent
over the REST API.

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | false |

### Multi-Tenant with apikey authentication and auto-provisioning

Enable API key authentication and use the Wallet associated with the API key for all interactions with the Cloud Agent.
Automatically register the Entity, Wallet, and API key for the tenant during the first interaction with the Cloud Agent
over the REST API.

| Environment Variable                 | Value |
|--------------------------------------|-------|
| API_KEY_ENABLED                      | true  |
| API_KEY_AUTHENTICATE_AS_DEFAULT_USER | false |
| AUTO_PROVISIONING_ENABLED            | true  |

## Admin-Api-Key Authentication

Admin-Api-Key authentication is an authentication method that uses a secret key to authenticate the Administrator.
Adding the `x-admin-api-key` header to the http request with the value of the issued secret is required.
The value of the `x-admin-api-key` header gets configured in the Cloud Agent at the startup.

| Environment Variable | Value  |
|----------------------|--------|
| ADMIN_API_KEY        | secret |

The following REST APIs get protected by the Admin-Api-Key authentication methods:

- Wallet Management REST API
- Entity Management REST API

## JWT Token Authentication and Authorisation with the Keycloak

### Introduction

[Keycloak](https://www.keycloak.org/) is an open-source identity and access management solution that provides robust
authentication, authorization, and user management capabilities.
It allows organizations to secure their applications and services by centralizing user authentication and authorization
processes.
Keycloak supports various identity protocols, including OAuth 2.0 and OpenID Connect, making it a versatile solution for
securing modern web applications.

The PRISM Cloud Agent utilizes the following Keycloak features:

- Authentication with JWT Token with a configured flow according to
  the [ADR](https://staging-docs.atalaprism.io/adrs/adr/20230527-use-keycloak-and-jwt-tokens-for-authentication-and-authorisation-to-facilitate-multitenancy-in-cloud-agent/)
- Authentication with JWT Token
  using [token exchange](https://www.keycloak.org/docs/latest/securing_apps/index.html#_token-exchange)
- Authorization with JWT Token and RPT according
  to [authorization services](https://www.keycloak.org/docs/latest/authorization_services/index.html#authorization-services)
  based
  on [UMA 2.0 specification](https://docs.kantarainitiative.org/uma/wg/rec-oauth-uma-grant-2.0.html#:~:text=This%20specification%20defines%20a%20means,a%20resource%20owner%20authorizes%20access.)
  and [ADR](https://staging-docs.atalaprism.io/adrs/adr/20230926-use-keycloak-authorisation-service-for-managing-wallet-permissions/)

When the JWT Token authentication is enabled, it includes protection for all multi-tenant endpoints of the Cloud Agent.

### Sequence Diagrams

The following sequence diagrams illustrate the Cloud Agent and Keycloak interaction during the authentication and authorization processes.

#### User onboarding and configuration

```mermaid
sequenceDiagram
  participant Admin
  participant Keycloak
  participant CloudAgent

  Admin->>Keycloak: 1. Creates User
  Keycloak-->>Admin: 2. User Created

  Admin->>Keycloak: 3. Configures Authentication Flow
  Keycloak-->>Admin: 4. Authentication Flow Configured

  Admin->>CloudAgent: 5. Creates Wallet in Agent
  CloudAgent-->>Admin: 6. Sends Wallet ID

  Admin->>Keycloak: 7. Registers Wallet Resource
  Keycloak-->>Admin: 8. Resource Registered

  Admin->>CloudAgent: 9. Configures UMA Policy
  CloudAgent-->>Admin: 10. UMA Policy Configured
```

#### User Authentication

```mermaid
sequenceDiagram
  participant User
  participant Keycloak
  participant Agent

  User->>Keycloak: 1. Initiates Authentication
  Keycloak->>Keycloak: 2. Authenticates User
  Keycloak-->>User: 3. Sends JWT Token
  User->>Agent: 4. Requests API with JWT Token
  Agent->>Agent: 5. Validates JWT Token
  Agent->>Keycloak: 6. Requests RPT
  Keycloak->>Keycloak: 7. Validates JWT Token
  Keycloak-->>Agent: 8. Sends RPT
  Agent->>Agent: 9. Validates RPT
  Agent->>Agent: 10. Performs Operation
  Agent-->>User: 11. Returns Result
```

### UMA permission configuration

The current authorization logic is built on the UMA specification, configuring permissions as user A controls resource W. In this model, user A is a registered user in Keycloak, and wallet W is a resource registered in Keycloak.

These configurations are managed manually in Keycloak. However, for a better experience, the Agent can execute these actions through the REST API endpoint. For each wallet, a corresponding resource gets created with the name wallet-{wallet_id} in Keycloak. Similarly, a corresponding policy is created for each user and resource with the name user {userId} on wallet {wallet_resource_name} permission.

The REST API endpoint to configure permissions in Keycloak is:

```
POST /wallets/{walletId}/uma-permissions
```

with a body containing subject as UUID.

Authenticated users (admin or the user owning the wallet) can configure permissions in Keycloak for the wallet.

### Migration from `apikey` authentication

The `apikey` authentication can work in parallel with the JWT authentication to call the REST API endpoints together with the JWT token.

The migration from apikey authentication to jwt authentication is possible and can be performed as follows:

- Create a user in Keycloak.
- Configure the authentication flow in Keycloak.
- Call the REST API endpoint to configure permissions in Keycloak with a valid apikey token.
- Authenticate with Keycloak and obtain the JWT token.
- Call the REST API endpoints with a valid JWT token.

## Self-Service Wallet Registration

The Cloud Agent supports self-service wallet registration for the users.
When the user is registered in the Keycloak and has the valid JWT token, the user can register the wallet in the Cloud
Agent.
The regular wallet management REST API endpoints are used for the wallet registration:

```
POST /wallets 
{
    "seed": "secured-seed-value",
    "name": "wallet-name"
}
```

The user can register the wallet only for himself, so the `x-api-key` header is not required and the `seed` value is not
shared.
The corresponding wallet resource is created in Keycloak, and the user is granted access to this resource.