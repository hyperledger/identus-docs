# Environment Variables


The following enviroment variables can be used to configure Prism Agent:


* `DEV_MODE` 
    - Type: `Boolean`
    - Default: `false`
    - Description: Used to indicate if the agent is running in production or dev enviroment.
* `IRIS_HOST`:
    - Type: `String`
    - Default: `localhost`
    - Description: Hostname of the Iris server an agent will us to connect to.
* `IRIS_PORT`:
    - Type: `Int`
    - Default: `8081`
    - Description: Port of the Iris host an agent will use to connect to.
* `CASTOR_DB_HOST`
    - Type: `String`
    - Default: `localhost`
    - Description: Hostname of the server where castor database is running on.
* `CASTOR_DB_PORT`
    - Type: `Int`
    - Default: `5432`
    - Description: Port of the castor database
* `CASTOR_DB_NAME`
    - Type: `String`
    - Default: `castor`
    - Description: Database name where castor db will store data
* `CASTOR_DB_USER`
    - Type: `String`
    - Default: `postgres`
    - Description: Castor databse username for login
* `CASTOR_DB_PASSWORD`
    - Type: `String`
    - Default: `postgres`
    - Description: Castor databse password for login
* `POLLUX_DB_HOST`
    - Type: `String`
    - Default: `localhost`
    - Description: Hostname of the server where pollux database is running on.
* `POLLUX_DB_PORT`
    - Type: `Int`
    - Default: `5432`
    - Description: Port of the pollux database
* `POLLUX_DB_NAME`
    - Type: `String`
    - Default: `pollux`
    - Description: Database name where pollux db will store data
* `POLLUX_DB_USER`
    - Type: `String`
    - Default: `postgres`
    - Description: Pollux databse username for login
* `POLLUX_DB_PASSWORD`
    - Type: `String`
    - Default: `postgres`
    - Description: Pollux databse password for login
* `ISSUE_BG_JOB_RECORDS_LIMIT`
    - Type: `Int`
    - Default: `25`
    - Description: Maximum number of records issue credentials job will try to process at the same time
* `ISSUE_BG_JOB_RECURRENCE_DELAY`
    - Type: `String`
    - Default `2 seconds`
    - Description: Interval at which issue credentials job will try to process records
* `ISSUE_BG_JOB_PROCESSING_PARALLELISM`
    - Type: `Int`
    - Default: `5`
    - Description: Maximum amount of parallel issue credential job processings
* `PRESENTATION_BG_JOB_RECORDS_LIMIT`
    - Type: `Int`
    - Default: `25`
    - Description: Maximum number of records present proof job will try to process at the same time
* `PRESENTATION_BG_JOB_RECURRENCE_DELAY`
    - Type: `String`
    - Default `2 seconds`
    - Description: Interval at which present proof job will try to process records
* `PRESENTATION_BG_JOB_PROCESSING_PARALLELISM`
    - Type: `Int`
    - Default: `5`
    - Description: Maximum amount of parallel present proof job processings
* `CONNECT_DB_HOST`
    - Type: `String`
    - Default: `localhost`
    - Description: Hostname of the server where connection flow database is running on
* `CONNECT_DB_PORT`
    - Type: `String`
    - Default: `5432`
    - Description: Port of the connection flow database
* `CONNECT_DB_NAME`
    - Type: `String`
    - Default: `connect`
    - Description: Database name where connection flow db will store data
* `CONNECT_DB_USER`
    - Type: `String`
    - Default: `postgres`
    - Description: Connection flow databse username for login
* `CONNECT_DB_PASSWORD`
    - Type: `String`
    - Default: `postgres`
    - Description: Connection flow databse password for login
* `CONNECT_BG_JOB_RECORDS_LIMIT`
    - Type: `Int`
    - Default: `25`
    - Description: Maximum number of records connect job will try to process at the same time
* `CONNECT_BG_JOB_RECURRENCE_DELAY`
    - Type: `String`
    - Default `2 seconds`
    - Description: Interval at which connect job will try to process records
* `CONNECT_BG_JOB_PROCESSING_PARALLELISM`
    - Type: `Int`
    - Default: `5`
    - Description: Maximum amount of parallel connect job processings
* `AGENT_HTTP_PORT`
    - Type: `Int`
    - Default: `8085`
    - Description: Port on which prism agent runs
* `DIDCOMM_SERVICE_URL`
    - Type: `String`
    - Default: `http://localhost:8090`
    - Description: Url of the DIDcomm server that also runs for this agent. DIDcomm messages can be sent to this agent using this URL
* `AGENT_DB_HOST`
    - Type: `String`
    - Default: `localhost`
    - Description: Hostname of the server where prism agent database is running on.
* `AGENT_DB_PORT`
    - Type: `Int`
    - Default: `5432`
    - Description: Port of the prism agent database
* `AGENT_DB_NAME`
    - Type: `String`
    - Default: `agent`
    - Description: Database name where agent db will store data
* `AGENT_DB_USER`
    - Type: `String`
    - Default: `postgres`
    - Description: Agent databse username for login
* `AGENT_DB_PASSWORD`
    - Type: `String`
    - Default: `postgres`
    - Description: Agent databse password for login
* `CREDENTIAL_VERIFY_SIGNATURE`
    - Type: `Boolean`
    - Default: `true`
    - Description: Whether or not to verify a credential signature
* `CREDENTIAL_VERIFY_DATES`
    - Type: `Boolean`
    - Default: `false`
    - Description: Whether or not to verify a credential dates (expiration)
* `CREDENTIAL_LEEWAY`
    - Type: `String`
    - Default: `0 seconds`
    - Description: time leeway when verifying credential dates, if time difference is less then a leeway, it will still verify
* `PRESENTATION_VERIFY_SIGNATURE`
    - Type: `Boolean`
    - Default: `true`
    - Description: Whether or not to verify a signed challenge used during credential presentation
* `PRESENTATION_VERIFY_DATES`
    - Type: `Boolean`
    - Default: `false`
    - Description: Whether or not to verify a challenge dates during presentation
* `PRESENTATION_VERIFY_HOLDER_BINDING`
    - Type: `Boolean`
    - Default: `false`
    - Description: 
* `PRESENTATION_LEEWAY`
    - Type: `String`
    - Default: `0 seconds`
    - Description: Time leeway when verifying challenge dates.
* `SECRET_STORAGE_BACKEND`
    - Type: `Enum(vault, postgres)`
    - Default: `vault`
    - Description: Secret storage for keys and credentials, if vault is used, vault server must be running, otherwise databse can be used for development purposes only
* `VAULT_ADDR`
    - Type: `String`
    - Default: `http://localhost:8200`
    - Description: Url of the vault service for prism agent to use for secret management
* `VAULT_TOKEN`
    - Type: `String`
    - Default: `root`
    - Description: `Vault service auth token`
* `WEBHOOK_URL`
    - Type: `String`
    - Default: `Null`
    - Description: The webhook endpoint URL where the notifications will be sent.
* `WEBHOOK_API_KEY`
    - Type: `String`
    - Default: `Null`
    - Description: The optional API key (bearer token) to use as the Authorization header.
* `WEBHOOK_PARALLELISM`
    - Type: `Int`
    - Default: `Null`
    - Description: Maximum number of events that will be retrieved in a single iteration, from the event queue by the webhook publisher.





