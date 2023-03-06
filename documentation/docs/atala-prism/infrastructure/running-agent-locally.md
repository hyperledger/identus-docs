# Running Agent Locally

The PRISM Cloud Agent can be downloaded and run in a self-hosted way, allowing anyone to run an agent on their computer or server to interact with other agents in the Self-Sovereign Identity (SSI) world.

:::note

The PRISM Cloud Agent Enterprise is only available in managed, hosted instances. Please see [Hosted Instances](hosted-instances) for more details.

:::

This section describes how to get up and running with PRISM Cloud Agent.

:::caution

PRISM Cloud Agent's default configuration is unsuitable for running a production instance. The setup of a production instance is out of the scope of this section.

:::

## Quick Start

The best way to start running the PRISM Cloud Agent is to use the utility scripts in the PRISM Playground project.

These utility scripts run an instance of PRISM Cloud Agent using docker-compose and include all required components, including a database and API Gateway.

Run the following commands to start a single agent on port 80.

```
git clone https://github.com/lohanspies/prism_v2_playground & cd prism_v2_playground
./agent/run.sh -p 80
```

An agent will be up and running on and accessible on `http://localhost/`

:::info

Detailed instructions on using the `run.sh` script are available in the PRISM Playground project within the `agent/README.md` file.

:::

### Exposing PRISM Cloud Agent to the internet

Interacting with other agents requires exposing your agent over the internet. External parties must be able to connect to your instance through a publicly available address without being blocked by security defences like firewalls.

Running applications on your computer or server using docker-compose will not expose ports/services to the internet - it will only be available from the host itself and, potentially, the local area network. Additional configuration of your networking layer is required to allow external systems to send messages to your agent.

This guide does not detail the configuration needed to expose the agent to the internet via the management of the networking layer. The networking design is an advanced topic and depends upon the computing environment in which you operate your agent. 

As an alternative, for quickly getting up and running with a local PRISM Cloud Agent, we recommend using a tunnelling solution such as [ngrok](https://ngrok.com/).

ngrok is a software package you can download and install that, when executed, creates an externally accessible tunnel to your machine without the need for complex networking configuration such as firewall management or port forwarding. 

Ngrok assigns a unique domain name to each tunnel created with it, which lives for the duration that ngrok is running. This domain is the externally accessible ingress point for other agents to communicate with your agent with 

Please visit the [ngrok website](https://ngrok.com/) and sign-up for a free account. Once you have completed the sign-up process, the ngrok website will take you through an installation guide that will help you configure an ngrok agent on your machine.

:::tip

Please see the [ngrok getting started guide](https://dashboard.ngrok.com/get-started/setup) if you already have an account or did not follow the installation guide when you first signed up.

:::

:::danger

Ensuring that your systems are secure is your responsibility when you host your agent. Please see the Atala [Hosted Instances](hosted-instances) offering for users who wish to avoid managing their systems.

Running ngrok and exposing an agent will allow access to the agents' unprotected endpoints from anywhere on the internet - for example - the DIDComm endpoint will be able to receive messages from any service that knows the address of your agent.

Endpoints that are administration or configuration capabilities that do not need to be publicly available have an API key authentication mechanism applied. You must add an HTTP header with the key `apikey` to each HTTP request. The value of this key must be a valid authentication token. 

When you run the agent from the playground repository without modification, you run it using the default authentication key stored in plain text.

** Please do not run the PRISM Cloud Agent without changing the default authentication key **

If you do not change the key, external parties who know this key and your agent address [exposed through ngrok] can reconfigure your agent and potentially cause further damage or gain access to your systems.

:::

#### Changing the default authentication key

Modify the `agent/apsix/conf/apisix.yaml` file and change line 9 - replace the `RANDOM KEY` text with a randomly generated token. Atala generates 32 alphanumeric tokens for its hosted service.

```
plugins:
  - name: proxy-rewrite
  - name: key-auth

consumers:
  - username: default
    plugins:
      key-auth:
        key: "RANDOM KEY" <---Change to new token before starting the agent
```

#### Running the agent with Ngrok

The PRISM Cloud Agent `run.sh` script has a command line argument for telling it that you are using ngrok - it will attempt to configure itself to use the publicly available ngrok URL for the tunnel it creates when running it.

:::caution

The `run.sh` requires `jq` - a json manipulation tool - to be installed alongside ngrok. `jq` is available [here](https://stedolan.github.io/jq/). Please see the installation guide for your platform on the jq website and complete the installation.

Please complete the installation of ngrok and jq and create a tunnel per the ngrok getting started guide before executing the run.sh script

:::

After you have created a tunnel - run the PRISM Cloud Agent using the following command:

```
run.sh --ngrok
```

The `DIDComm Service Endpoint` in your agent will be set as the ngrok tunnel address. Interactions with other agents will result in communication flowing back into your agent.

#### Additional information

The free account tier of ngrok will provision a random domain every time you start a ngrok tunnel. A tunnel may be interrupted by network failures and restarts of your system, resulting in the domain name changing.

As the domain name changes, the location of your agent changes and other agents may send messages to the wrong place.

**Please consider subscribing to a commercial plan with ngrok for persistent domain names [or configure your networking layer manually to allow ingress] if you need the agent to always be accessible in one place.
**

:::tip

The status of an active ngrok tunnel is shown in the ngrok web interface accessible by default from within a web browser on [http://localhost:4040](http://localhost:4040)

:::

The PRISM Cloud Agent docker-compose files include running and configuring an API Gateway - APISIX. An API Gateway is required when running the PRISM Cloud Agent as it is built as a microservice architecture and comprises multiple services running on different network ports.

The API Gateway unifies these different services into a single ingress plane where a single port is exposed rather than many. Using APISIX as an API Gateway provides security and protection to prevent unauthorized access.
