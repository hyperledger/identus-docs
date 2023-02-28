# Running Agent Locally

PRISM Cloud Agent is available to be run in a self-hosted way - anyone can run this on their own computer or server and interact in the world of Self Soverign Identity (SSI). 

:::note

The PRISM Cloud Agent Enterprise is only available in managed hosted instance. Please see [Hosted Instances](hosted-instances) for more details.

:::

This section describes how to get up and running with PRISM Cloud Agent yourself - and - details considerations that must be made should you want to run it in a production like setting in a secure and scalable way.

:::caution

The default local running configuration of PRISM Cloud Agent is not suitable for production use cases. 

Additional configuration of infrastructure and networking services must be undertaken in order to ensure the security of the application.

This guide will highlight where these additional protections are required but the implementation of these controls is out of scope.

:::

## Quick Start

The best way to start with running the PRISM Cloud Agent locally is to use the utility scripts in the PRISM Playground.

These utility scripts run a full instance of PRISM Cloud Agent using docker compose and include all requirement components including a database and API Gateway.

:::info

The PRISM Cloud Agent docker image is hosted in an Atala managed docker registry located at `registry.atalaprism.io`. This registry does not require authentication.

:::

TL;DR

```
git clone prism-playground.git & cd prism-playground
./agent/run.sh -p 80
```

### Exposing PRISM Cloud Agent to the internet

In order to interact with other agents or mediators, external systems must be able to communicate with the agent that you run. Running a docker container on your own computer or server does not neccessary expose the PRISM Cloud Agent to the outside world - additional network configuration may be required in order to enable and allow external traffic to arrive into your instance.

:::note

This guide is written for those with very basic networking and security knowledge. Please apply your own judgement - if you are comfortable with other ways of allowing ingress and ensuring security of your systems then you may know more suitable approaches for how your to secure your own instance and can deviate from this guide

:::

:::danger

Ensuring that your agent and systems are secure is your responsbility when you host your own agent. For those users who would like to defer this, please see the Atala Hosted Instance offering.

:::

The PRISM Cloud Agent docker compose files include the running and configuration of an API Gateway - APISIX. This is included as the PRISM Cloud Agent has a microservice architecture and therefore it is composed of multiple components which all run on differnt networking ports.

The API Gateway unifies these different services into a single ingress plane where a single port needs to be exposed [and many routes are configured to proxy traffic upstream into the various services]

Two approaches for enabling connectivity between external systems and your PRISM Cloud Agent (Ingress) are:

- Manual Network Configuration (Port Forwarding or other)
- Application Tunnel such as Ngrok 

For Manual Network Configuration, given how many ways there are to configure this and the fact that it depends greatly on your own network configuration - is out of the scope of this guide.

The second option is an easier way to set up ingress and makes use of  tunneling service such as [ngrok](https://ngrok.com/) to create an externally accessible and known service endpoint without having to configure your local network to expose the agent.

Please visit the ngrok site, sign-up and follow the guides for configuring an ngrok agent on your machine.

You will need to download the ngrok binary, install it and connect your account - this is all documented clearly on the ngrok [Getting Started Guide](https://dashboard.ngrok.com/get-started/setup)

The free tier of ngrok will provision a random domain every time you start the an ngrok tunnel. 

You can view the status of an active ngrok tunnel by browsing to the `Web Interface` address which is shown in the console. By default, this is [http://localhost:4040](http://localhost:4040)

Included in the PRISM Playground `running locally` script is an option to specify that you are using ngrok and when enabling this option - it will attempt to discover an active ngrok tunnel running on `localhost` and set the value as the service endpoint.

It does this by making a request to the locally running web interface administration console and using a JSON parsing tool call `jq` 

> Please ensure that you install both [ngrok](https://ngrok.com/) and [jq](https://stedolan.github.io/jq/)

> Important Note: Running ngrok and exposing an agent will allow access to the agents DIDComm endpoint from anywhere on the internet. It will also allow - with the default configuration of the API Gateway - connection to any endpoint without authentication. This includes configuration endpoints. Please be ware that the security of running locally is not configured to production standards and consideration should be given to running an agent in this manner. Before running using ngrok, it is advised that the API Gateway, APISIX - is cofigured with consumer authentication and enforcement of an `apikey` within the header of any request made [apart from the DIDComm endpoint]

## Components

### Database - Postgres

### APISIX - API Gateway

### PRISM Agent