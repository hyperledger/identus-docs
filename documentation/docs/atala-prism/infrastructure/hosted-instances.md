# Hosted Instances 

PRISM's design is a cloud-native technology stack. This section introduces the basics of hosted instances, some details on their architecture, and links to instructions for interacting with them.

## Overview

Instances of PRISM are hosted in Amazon Web Services and run within a Kubernetes container execution layer.

Each instance is single-tenant, has dedicated storage, and runs on shared infrastructure - all isolated.

![Four single-tenant instances running isolated on shared infrastructure](/img/hosted-instances-overview-1.svg)

### Ingress into a dedicated instance

Each organization accesses its dedicated instance through an API Gateway that enforces authentication.

![Each instance is in use by a different organization](/img/hosted-instances-overview-2.svg)

Organizations cannot access any other instance apart from their own.

![Organisation 1 cannot ](/img/hosted-instances-overview-3.svg)

Each instance has a dedicated domain name, and API tokens are issued to the organization to manage access. 

All ingress points are protected with TLS using strong ciphers and configuration parameters. 

### Accessing your dedicated instance

The name of each PRISM instance is a unique, randomly generated, 12-digit alphanumeric code. 

A domain name is created for each instance using this instance-id. 

:::info

Please note that these instance-ids have been shortened to the first five digits in the diagrams on this page for brevity.

:::

You can access your instance by prepending your instance-id to `atalaprism.io`

For example, for an environment given the instance-id of `ei30m6d5368w`, its APIs will be available at `ei30m6d5368w.atalaprism.io`

:::note 

Atala also prepends a `purpose` flag to instances. This flag indicates if they are development (d), test (t), staging (s), or production (p) instances. The purpose flag is not part of the domain.

:::

Atala will provide you with your instance-id and API tokens during onboarding.

:::tip Getting more tokens

Atala recommends that you request the creation of additional tokens for each integration/service or human user that you have. Please see [Getting Help](../getting-help) for instructions on how to get in touch with us to request additional API tokens.

:::

Adding an API token to every API call to non-public endpoints is required. The API token must be attached using a header in the HTTP requests under the key of `apikey`

![Example Insomnia window showing `apikey` header being specified](/img/hosted-instances-apikey-header.png)

:::info Public Endpoints

Some endpoints must be unprotected in that they do not require authentication. These endpoints must be accessible by everyone for the agent to interact with the broader identity ecosystem, which requires interoperability with common standards. An excellent example of a public endpoint is the DIDComm endpoint - which - must be able to receive messages from client devices with no fixed address and whose agents do not know the PRISM authentication requirement.

:::

### What makes up a dedicated instance?

Each dedicated instance contains 
 - a PRISM Cloud Agent
 - a PRISM Cloud Agent Enterprise
 - a Verifiable Data Registry - PRISM Node
 - and Dedicated Relational Storage

PRISM Node speaks to Cardano through shared infrastructure

![Each dedicated instance contains a PRISM Cloud Agent Enterprise, a PRISM Cloud Agent, a Verifiable Data Registry and Dedicated Relational Storage](/img/hosted-instances-overview-4.svg)

Each instance exposes many HTTP routes, allowing an organization to consume the components' capabilities.

 **PRISM Cloud Agent**, which sits at the core of every PRISM instance, provides:
  - a DIDComm v2 endpoint for Cloud Agent-to-Cloud Agent communication
  - endpoints to control the configuration and actions of the Cloud Agent
  - an endpoint that shows documentation in Open API Standard for all available endpoints

**PRISM Node** does not provide endpoints that an organization can interact with - it gives internal only gRPC endpoints to the PRISM Cloud Agent for reading and writing to the distributed ledger - Cardano. Please see [PRISM Node](../prism-node) for further details on what this component does and how it works.

Each instance has **Dedicated Relational Storage**, a dedicated instance of a Postgres database. This database is not shared and is accessible from within your tenant only. The database uses authentication with secrets your tenant generates during creation time.


### What else do I need to know about my instance?

Each hosted dedicated instance within a Kubernetes cluster spans a single AWS region. This underlying shared infrastructure is highly resilient and self-healing.

Atala operates a single AWS region based in the US East (N. Virginia).

Each region's Kubernetes cluster runs on EC2 instances spread amongst availability zones. The cluster runs an auto-scaler, which creates additional nodes if a failure in one zone should occur.

Your instance is observable around the clock; Atala collects metrics and logs from all running services and has pre-defined alerts for notifying operational support staff of issues.
