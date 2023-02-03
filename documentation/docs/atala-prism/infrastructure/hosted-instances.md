# Hosted Instances 

PRISM is designed to be a Software-as-a-Service offering and is architected in a cloud-native way in order to be efficient and easy to deliver at scale. 

Atala have implemented a widely adopted infrastructure technology stack for hosting and running Atala PRISM instances. This technology stack has been selected in order to increase portability while minimizing operational overhead. 

This section describes the tooling and architecture built and used by Atala to host development and production workloads.

## Overview

Atala managed instances of the PRISM offering are hosted in Amazon Web Services and run within a Kubernetes container execution layer. 

Each instance is single-tenant, has it's own dedicated database and runs on shared infrastructure - all in an isolated way. 

![Four single-tenant instances running isolated on shared infrastructure](/img/hosted-instances-overview-1.svg)

### Accessing a dedicated instance

Each organisation accesses it's dedicated instance through an API Gateway that enforces authentication.

![Each instance is in use by a different organisation](/img/hosted-instances-overview-2.svg)

Organisations cannot access any other instance apart from their own

![Organisation 1 cannot ](/img/hosted-instances-overview-3.svg)

Each instance has a dedicated domain name and API tokens are issued to the organisation to manage access. 

Please see [Authentication](../architecture/authentication.md) for more details on how to use an API token

All ingress points are protected with TLS using strong cipher and configuration parameters. 

Please see [Encryption](../architecture/encryption.md) for further information on how data-in-transit and data-at-rest is secured.


### What makes up a dedicated instance?

Each dedicated instance contains 
 - a PRISM Cloud Agent, 
 - a PRISM Cloud Agent Enterprise, 
 - a Verifiable Data Registry
 - and Dedicated Relational Storage

The Verifiable Data Registry speaks to Cardano through shared infrastructure

![Each dedicated instance contains a PRISM Cloud Agent Enterprise, a PRISM Cloud Agent, a Verifiable Data Registry and Dedicated Relational Storage](/img/hosted-instances-overview-4.svg)

Each instance exposes many HTTP routes which allow an organisation to consume the capabilities of the components running.

The PRISM Cloud Agent, which sits at the core of every PRISM instance, provides:
    - a DIDComm v2 endpoint for agent-to-agent communication - See (Agent Orientated Architeture)[../architecture/agent-orientated-architecture.md] and [DIDComm](../architecture/didcomm.md])
    - endpoints to control the configuration and actions of the agent - agent control
    - an endpoint which shows documentation in Open API Standard for all available endpoints

The Kubernetes environment is a managed Platform-as-a-Service (PaaS) offering called Elastic Kubernetes Service (EKS). Using a managed service reduces the cost of operating the underlying infrastructure and dramatically reduces the configuration complexity of creating a Kubernetes environment.

In addition to EKS, managed instances also leverage many other AWS offerings, forming a base infrastructure layer.

Within the Kubernetes environment, several add-ons, operators and enabling components are added - these include services to manage ingress, the creation of databases as well as storage interfaces, certificate and secret management and many more.

ArgoCD - a continuous deployment tool - is part of the middleware enabler layer and is used to orchestrate the provisioning of Atala PRISM instances in a declarative GitOps manner.

ArgoCD deploys from manifest files written in the Helm template language. Helm is a package management tool for Kubernetes and can generate multiple applications using templates and manage upgrades and rollbacks with various strategies.

Atala uses Helm packages, referred to as Helm Charts, to describe the application layer components needed to create an entire single-tenant instance of the Atala PRISM stack, including containers to be run, ingress routing and databases.

Helm charts are stored in a git repository hosted in Github. The repository contains the chart definitions and configuration overrides for running instances.

A running instance does not need configuration overrides in the helm chart repository if it is using default versions and settings.  

ArgoCD continually reads from the Helm chart repository and synchronizes the state of containers Kubernetes to match. Releases can be made by making changes to the version-controlled charts and configuration overrides. 

Adding new PRISM instances with default settings and at a specific released version can be managed through Terraform without needing to touch the Helm chart repository. Terraform is used to configure ArgoCD to manage and deploy a new application.

Atala maintains multiple Kubernetes clusters, which are isolated from one another. The isolation is per region and purpose - development workloads run in a separate Kubernetes cluster from production workloads.

All AWS infrastructure and Kubernetes configuration is managed as Infrastructure-as-Code (IaC) and deployed using Terraform.

## Cloud Service Components

### EC2 Instances

 Compute resources provided as AWS virtual machines with varied CPU and Memory

 Provides the underlying resources to run the Elastic Kubernetes Service

| Component Name                | Description                                                                   | Use                                                                                                                                                                                                                                                                |
| :---------------------------- | :---------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EC2 Instances                 | Compute resources provided as AWS virtual machines with varied CPU and Memory | Provides the underlying resources to run the Elastic Kubernetes Service on                                                                                                                                                                                         |
| Elastic Block Storage (EBS)   | Platform-as-a-Service block storage                                           | Volumes for containers are mounted and backed by EBS volumes. EBS provides all storage within the Kubernetes environment                                                                                                                                           |
| Virtual Private Network (VPC) | AWS Software Defined Networking                                               | Provides interconnectivity between EC2 nodes                                                                                                                                                                                                                       |
| Network Gateway               | Internet Access Gateway                                                       | Provides Egress and access to the internet for devices on the VPC                                                                                                                                                                                                  |
| Network Load Balancer         | A layer4 load balancer                                                        | Placed in front of APISIX Service, provides a highly available entrypoint                                                                                                                                                                                          |
| Application Load Balancer     | A layer7 load balancer                                                        | Placed in front of Teleport Service, provides a highly available entrypoint                                                                                                                                                                                        |
| Secrets Manager               | Secure storage of private keys and secrets                                    | Kubernetes uses an add-on called External Secrets which reads from AWS Secrets manager and creates Kubernetes Secrets in a secure way to be used by running services. All secrets for shared infrastructure are created in AWS Secrets Manager prior to deployment |
| Route53 DNS                   | Domain Name Zone and Entry Management                                         | Manages domain names for the hosted zone where environments are deployed to. Middleware enabler external-dns automatically creates entries for domain names configured in terraform                                                                                |

## Middleware Components

| Component Name                                                           | Description                                                                                                                                                                                                | Use                                                                                                                                                                                                                                                                                                                                               |
| :----------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "External DNS                                                            |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://github.com/kubernetes-sigs/external-dns"                         | Configures external DNS providers based upon annotations specified on Kubernetes objects.                                                                                                                  | Creates new entry points into the regional cluster based upon annotations added to the APISIX Service. New domains are added by creating a map entry in terraform which in turn updates the annotations on APISIX service which results in external DNS registering a CNAME pointer to the network load balancer which proxies traffic to APISIX. |
| "Cert Manager                                                            |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://cert-manager.io/"                                                | Adds certificates and certificate issuers as resource types in Kubernetes and allows the declarative management of SSL/TLS certificates. Integrates into several certificate sources including LetsEncrypt | Configured with LetsEncrypt, creates a cluster wide certificate issuer such that publicly valid certificates can be provisioned for each domain name which points to the network load balancer for APISIX ingress.                                                                                                                                |
| "ArgoCD                                                                  |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://argo-cd.readthedocs.io/en/stable/"                               | Continuous Delivery tool managing Kubernetes resources declaratively in GitOps style                                                                                                                       | Manages the deployments of Atala PRISM Instances on a shared infrastructure layer. Reads from a git repository containing specification of how to execute a single instance.                                                                                                                                                                      |
| "External Secrets                                                        |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://external-secrets.io/v0.7.0/"                                     | Kuberenetes operator that integrates external secret management systems                                                                                                                                    | External Secrets is configured to read from AWS Secrets Manager and creates Kubernetes Secrets for applications to use based upon the content in AWS Secrets Manager                                                                                                                                                                              |
| "Postgres Operator                                                       |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://github.com/zalando/postgres-operator"                            | Kubernetes operator to easily run a highly-available PostgreSQL cluster on Kubernetes, powered by Patroni                                                                                                  | Runs on the Kubernetes cluster and provides custom resource definitions that can be used in Helm charts to declare a postgres instance per Atala PRISM instance                                                                                                                                                                                   |
| "Cluster Autoscaler                                                      |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler" | Automatically adjust the size of Kubernetes cluster when insufficient resources are detected or low load has been detected                                                                                 | Adds additional EC2 compute resources when scheduling pods whose requirements cannot be met with existing resources                                                                                                                                                                                                                               |
| "APISIX                                                                  |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://apisix.apache.org/"                                              | Open Source API Gateway                                                                                                                                                                                    | Manages all ingress for end-users to PRISM instances including security and routing                                                                                                                                                                                                                                                               |
| "APISIX Ingress Controller                                               |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://github.com/apache/apisix-ingress-controller"                     | Kubernetes Control Plane for APISIX.                                                                                                                                                                       | Use APISIX for Kubernetes Ingress [over default ingress controllers] and configure APISIX based upon Kuberrenetes custom resource definitions contained within Helm charts.                                                                                                                                                                       |
| "Etcd                                                                    |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://etcd.io/"                                                        | Strongly consistent, distributed key-value store                                                                                                                                                           | Used by APISIX and APISIX Ingress controller to manage state between instances                                                                                                                                                                                                                                                                    |
| "Teleport                                                                |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://goteleport.com/"                                                 | Zero trust access plane                                                                                                                                                                                    | Manages all ingress for operators to middleware components such as Grafana and ArgoCD. Provides a single point of entry and proxies requests to web based applications                                                                                                                                                                            |
| "CoreDNS                                                                 |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://coredns.io/"                                                     | DNS Server written in Go                                                                                                                                                                                   | Performs Kubernetes service discovery and exposes services on domain names based on app name and Kubernetes namespace                                                                                                                                                                                                                             |
| "Grafana                                                                 |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://grafana.com/grafana/"                                            | Metric visualization and time series query                                                                                                                                                                 | Provides dashboards for visualization of health and performance of infrastructure, middleware and application layer. Allows querying and analytics of both metrics and logs                                                                                                                                                                       |
| "Prometheus                                                              |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://prometheus.io/"                                                  | Monitoring system, metric collection and time series database                                                                                                                                              | Scrapes metrics from various components, provides time-series storage and query language for analyzing data. Integrated to Grafana as a datasource                                                                                                                                                                                                |
| "Loki                                                                    |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://grafana.com/oss/loki/"                                           | Horizontally scalable, highly available Log aggregation and query system                                                                                                                                   | Logs aggregated and stored in loki from applications and kubernetes components. Provides query language and alerting. Integrated to Grafana as a datasource                                                                                                                                                                                       |
| "Promtail                                                                |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   |
| https://grafana.com/docs/loki/latest/clients/promtail/"                  | Log shipping                                                                                                                                                                                               | Agent installed on EC2 instances running EKS to ship system logs into Loki                                                                                                                                                                                                                                                                        |

## Persistence / Storage

Containers which are stateful and require persistent storage have persistent volume claims that are backed off to Amazon Elastic Block Storage (AWS EBS) through the AWS EBS container storage interface (CNI) driver. 

Replication of Data?
Availability Zones?
Location of Data? 

## Relational Storage (Application Layer)

Containers which require relational storage use Postgres which is provisioned by configuring a custom resource definition for the Postgres Operator. Each ATALA Prism agent instance defines its own postgres instance with multiple user accounts and databases. The passwords for the accounts are not known outside of the instance and are generated and stored within the kubernetes secrets layer.

The prism-agent service imports and uses different building blocks which provide data access layers for specific domains. 

There are therefore many databases within a single prism-agent instance. As well as the persistence layers required for the libraries that are imported, the prism-agent also manages its own database state for such items as its generated DID. 

While Prism-agent is responsible for the execution or running of queries and statements, the implementation of the queries and statements are provided by the underlying libraries / building blocks. 

This includes the migration of data between versions of the building blocks. Migrations are written as part of application development and implemented using the Flyway Migrations project https://flywaydb.org/documentation/concepts/migrations.html

As of v2.0 - only forward migrations are possible, no rollback migrations are implemented.

It is expected that as the stack increases in complexity and in order to meet scalability requirements, prism-agent will become less monolithic and additional runnables will be created to manage the different databases. 

| Database Name       | Database User                                       | Purpose                                                                                              |
| :------------------ | :-------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| pollux              | pollux-application-user, pollux-admin               | Store data related to verifiable credentials (pollux building block)                                 |
| castor              | castor-application-user,castor-admin                | Store data related to decentralized identifiers (castor building block)                              |
| connect             | connect-application_user,connect-admin              | Store data related to connections between agents (connect building block)                            |
| agent               | agent-application-user,agent-admin                  | Store data related to the configuration and instance of this particular agent (The DID of the agent) |
| prism               | prism-application-user,prism-admin                  | Store data related to the use of the verifiable data registry                                        |
| enterprise-services | enterprise-services-user, enterprise-services-admin | Store data related to the use of and configuration of the enterprise services                        |