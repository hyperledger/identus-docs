# Multi-Tenancy Management

## Introduction
The general concept of the multi-tenancy and core features of the PRISM platform can be found in the [Multi-Tenancy](/docs/concepts/multi-tenancy) document.

## Wallet Management
The Agent exposes the Wallet Management REST API to manage Wallets.
The Wallet Management API gets protected by the Admin API Key authentication method.

When the wallet gets created in the system, the following actions are performed:```
- The seed is set for the wallet.
- The DID Peer is generated for the wallet.
- The DID Peer is registered in the system to accept the messages from other peers.

### Create Wallet

To create a new wallet, send a `POST` request to the `/wallets` endpoint with the following parameters:

| Parameter | Type | Description | Is Required |
| seed | string | The seed used to derive the key material for the wallet. | No |
| name | string | The name of the wallet. | Yes |

If not providing the`seed` parameter, the wallet will get created with a randomly generated seed.

Request Example:

```http
curl -X 'POST' \
  'http://agent/wallets' \
  -H 'accept: application/json' \
  -H 'x-admin-api-key: ******' \
  -H 'Content-Type: application/json' \
  -d '{
  "seed": "c9994785ce6d548134020f610b76102ca1075d3bb672a75ec8c9a27a7b8607e3b9b384e43b77bb08f8d5159651ae38b98573f7ecc79f2d7e1f1cc371ce60cf8a",
  "name": "my-wallet"
}'
```

Response Example:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "name": "my-wallet",
  "createdAt": "2023-01-01T00:00:00Z",
  "updatedAt": "2023-01-01T00:00:00Z"
}
```

### Get Wallet

Send a `GET` request to the `/wallets/{id}` endpoint with the `walletId` path parameter to get the wallet details.

Request Example:

```http
curl -X 'GET' \
  'http://localhost:8085/wallets/00000000-0000-0000-0000-000000000000' \
  -H 'accept: application/json' \
  -H 'x-admin-api-key: ******'
```

Response Example:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "name": "my-wallet",
  "createdAt": "2023-01-01T00:00:00Z",
  "updatedAt": "2023-01-01T00:00:00Z"
}
```

### Get Wallets

To get the list of wallets, send a `GET` request to the `/wallets` endpoint with the following parameters:

| Parameter | Type | Description | Is Required |
| offset | integer | The offset from the beginning of the list of wallets. | No |
| limit | integer | The maximum number of wallets to return. | No |

Request Example:

```http
curl -X 'GET' \
  'http://localhost:8085/wallets' \
  -H 'accept: application/json' \
  -H 'x-admin-api-key: ******'
```

Response Example:

```json
{
  "self": "/wallets",
  "kind": "WalletPage",
  "pageOf": "/wallets",
  "contents": [
    {
      "id": "a1cd544c-bdcb-40a5-9cff-93ed6d5f2d04",
      "name": "my-wallet",
      "createdAt": "2023-09-01T13:13:33.273604Z",
      "updatedAt": "2023-09-01T13:13:33.273604Z"
    }
  ]
}
```

## Entity Management

The Cloud Agent exposes the Entity Management REST API to manage Entities.
Entity Management API gets  protected by the Admin API Key authentication method.

### Create Entity

To create a new entity, send a `POST` request to the `/entities` endpoint with the following parameters:

| Parameter | Type | Description | Is Required |
| name | string | The name of the entity. | Yes |
| walletId | string | The ID of the wallet to associate with the entity. | No |

If not providing the walletId parameter, the entity will get created with a default wallet.
The entity is not created if the `walletId` parameter is provided and the corresponding wallet does not exist.
It's possible to set the walletId for the entity later.

Request Example:

```http
curl -X 'POST' \
  'http://localhost/prism-agent/iam/entities' \
  -H 'accept: application/json' \
  -H 'x-admin-api-key: ******' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "10000000-0000-0000-0000-000000000000",
  "name": "John",
  "walletId": "a1cd544c-bdcb-40a5-9cff-93ed6d5f2d04"
}'
```

Response Example:

```json
{
  "kind": "Entity",
  "self": "/iam/entities/10000000-0000-0000-0000-000000000000",
  "id": "10000000-0000-0000-0000-000000000000",
  "name": "John",
  "walletId": "a1cd544c-bdcb-40a5-9cff-93ed6d5f2d04",
  "createdAt": "2023-09-01T14:00:38.760045Z",
  "updatedAt": "2023-09-01T14:00:38.760047Z"
}
```

### Get Entity

Send a `GET` request to the `/entities/{id}` endpoint with the `entityId` path parameter to get the entity details.

Request Example:
```http
curl -X 'GET' \
  'http://localhost/prism-agent/iam/entities/10000000-0000-0000-0000-000000000000' \
  -H 'accept: application/json' \
  -H 'x-admin-api-key: ******'
```

Response Example:

```json
{
  "kind": "Entity",
  "self": "/iam/entities/10000000-0000-0000-0000-000000000000",
  "id": "10000000-0000-0000-0000-000000000000",
  "name": "John",
  "walletId": "a1cd544c-bdcb-40a5-9cff-93ed6d5f2d04",
  "createdAt": "2023-09-01T14:00:38.760045Z",
  "updatedAt": "2023-09-01T14:00:38.760047Z"
}
```

### Update Name

To update the entity's name, send a `PUT` request to the `/entities/{id}/name` endpoint with the `entityId` path parameter and the `name` parameter.

Request Example:

```http
curl -X 'PUT' \
  'http://localhost/prism-agent/iam/entities/10000000-0000-0000-0000-000000000000/name' \
  -H 'accept: application/json' \
  -H 'x-admin-api-key: ******' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "John Doe"
}'
```

Response Example:

```json
{
  "kind": "Entity",
  "self": "/iam/entities/10000000-0000-0000-0000-000000000000/name",
  "id": "10000000-0000-0000-0000-000000000000",
  "name": "John Doe",
  "walletId": "a1cd544c-bdcb-40a5-9cff-93ed6d5f2d04",
  "createdAt": "2023-09-01T14:00:38.760045Z",
  "updatedAt": "2023-09-01T14:05:50.056389Z"
}
```

### Update Wallet

To update the entity's wallet, send a `PUT` request to the `/entities/{id}/wallet` endpoint with the `entityId` path parameter and the `walletId` parameter.

|Parameter | Type | Description | Is Required |
| id | string | The ID of the entity. | Yes |
| walletId | string | The ID of the wallet to associate with the entity. | Yes |

Request Example:
    
```http
curl -X 'PUT' \
  'http://localhost/prism-agent/iam/entities/10000000-0000-0000-0000-000000000000/walletId' \
  -H 'accept: application/json' \
  -H 'x-admin-api-key: ******' \
  -H 'Content-Type: application/json' \
  -d '{
  "walletId": "c4abb8d4-a923-4317-a100-6b20125289d6"
}'
```

Response Example:

```json
{
  "kind": "Entity",
  "self": "/iam/entities/10000000-0000-0000-0000-000000000000/walletId",
  "id": "10000000-0000-0000-0000-000000000000",
  "name": "John Doe",
  "walletId": "c4abb8d4-a923-4317-a100-6b20125289d6",
  "createdAt": "2023-09-01T14:00:38.760045Z",
  "updatedAt": "2023-09-01T14:10:52.166241Z"
}
```

### Delete Entity

To delete the entity, send a `DELETE` request to the `/entities/{id}` endpoint with the `entityId` path parameter.

Request Example:

```http
curl -X 'DELETE' \
  'http://localhost/prism-agent/iam/entities/10000000-0000-0000-0000-000000000000' \
  -H 'accept: */*' \
  -H 'x-admin-api-key: ******'
```

HTTP code 200 returns in the case of the successful request execution without the body.

### Register `apikey` Authentication Method

To register the `apikey` authentication method for the entity, send a `POST` request to the `/entities/apikey-authentication` endpoint with the `entityId` and the `apikey` parameters in the body.

|Parameter | Type | Description | Is Required |
| entityId | string | The ID of the entity. | Yes |
| apiKey | string | The API Key to register. | Yes |

Example Request:

```http
curl -X 'POST' \
  'http://localhost/prism-agent/iam/apikey-authentication' \
  -H 'accept: */*' \
  -H 'x-admin-api-key: ******' \
  -H 'Content-Type: application/json' \
  -d '{
  "entityId": "10000000-0000-0000-0000-000000000000",
  "apiKey": "dkflks3DflkFmkllnDfde"
}'
```

HTTP code 201 returns in the case of the successful request execution.

### Unregister `apikey` Authentication Method

To unregister the `apikey` authentication method for the entity, send a `DELETE` request to the `/entities/apikey-authentication` endpoint with the `entityId` and the `apikey` parameters in the body.

|Parameter | Type | Description | Is Required |
| entityId | string | The ID of the entity. | Yes |
| apiKey | string | The API Key to unregister. | Yes |

Example Request:

```http
curl -X 'DELETE' \
  'http://localhost/prism-agent/iam/apikey-authentication' \
  -H 'accept: */*' \
  -H 'x-admin-api-key: ******' \
  -H 'Content-Type: application/json' \
  -d '{
  "entityId": "10000000-0000-0000-0000-000000000000",
  "apiKey": "dkflks3DflkFmkllnDfde"
}'
```

HTTP code 200 returns in the case of the successful request execution without the body.

### Get Entities

To get the list of entities, send a `GET` request to the `/entities` endpoint with the following parameters:

| Parameter | Type | Description | Is Required |
| offset | integer | The offset from the beginning of the list of entities. | No |
| limit | integer | The maximum number of entities to return. | No |

Request Example:

```http
curl -X 'GET' \
  'http://localhost/prism-agent/iam/entities?limit=100' \
  -H 'accept: application/json' \
  -H 'x-admin-api-key: ******'
```  

Response Example:

```json
{
  "contents": [
    {
      "kind": "Entity",
      "self": "/iam/entities/10000000-0000-0000-0000-000000000000",
      "id": "10000000-0000-0000-0000-000000000000",
      "name": "John Doe",
      "walletId": "c4abb8d4-a923-4317-a100-6b20125289d6",
      "createdAt": "2023-09-01T14:00:38.760045Z",
      "updatedAt": "2023-09-01T14:10:52.166241Z"
    }
  ],
  "kind": "EntityResponsePage",
  "self": "/iam/entities?limit=100",
  "pageOf": "/iam/entities"
}
```
