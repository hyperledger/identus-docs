"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[6628],{49304:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=d(74848),n=d(28453);const s={},i="Environment Variables",l={id:"identus/cloud-agent/environment-variables",title:"Environment Variables",description:"The following enviroment variables can be used to configure Cloud Agent:",source:"@site/documentation/docs/identus/cloud-agent/environment-variables.md",sourceDirName:"identus/cloud-agent",slug:"/identus/cloud-agent/environment-variables",permalink:"/identus-docs/docs/identus/cloud-agent/environment-variables",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Secrets Storage",permalink:"/identus-docs/docs/identus/cloud-agent/secrets-storage"},next:{title:"Prism Node",permalink:"/identus-docs/docs/category/prism-node"}},c={},h=[];function o(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"environment-variables",children:"Environment Variables"})}),"\n",(0,r.jsx)(t.p,{children:"The following enviroment variables can be used to configure Cloud Agent:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POLLUX_DB_HOST"}),(0,r.jsx)(t.td,{children:"Hostname of the server where Pollux database is running on."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"localhost"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POLLUX_DB_PORT"}),(0,r.jsx)(t.td,{children:"Port of the Pollux database."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"5432"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POLLUX_DB_NAME"}),(0,r.jsx)(t.td,{children:"Database name where Pollux db will store data."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"pollux"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POLLUX_DB_USER"}),(0,r.jsx)(t.td,{children:"Pollux database username for login."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"postgres"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POLLUX_DB_PASSWORD"}),(0,r.jsx)(t.td,{children:"Pollux database password for login."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"postgres"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ISSUE_BG_JOB_RECORDS_LIMIT"}),(0,r.jsx)(t.td,{children:"Maximum number of records issue credentials job will try to process at the same time."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"25"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ISSUE_BG_JOB_RECURRENCE_DELAY"}),(0,r.jsx)(t.td,{children:"Interval at which issue credentials job will try to process records."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"2 seconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ISSUE_BG_JOB_PROCESSING_PARALLELISM"}),(0,r.jsx)(t.td,{children:"Maximum amount of parallel issue credential job processings."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PRESENTATION_BG_JOB_RECORDS_LIMIT"}),(0,r.jsx)(t.td,{children:"Maximum number of records present proof job will try to process at the same time."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"25"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PRESENTATION_BG_JOB_RECURRENCE_DELAY"}),(0,r.jsx)(t.td,{children:"Interval at which present proof job will try to process records."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"2 seconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PRESENTATION_BG_JOB_PROCESSING_PARALLELISM"}),(0,r.jsx)(t.td,{children:"Maximum amount of parallel present proof job processings."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_DB_HOST"}),(0,r.jsx)(t.td,{children:"Hostname of the server where connection flow database is running on."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"localhost"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_DB_PORT"}),(0,r.jsx)(t.td,{children:"Port of the connection flow database."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"5432"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_DB_NAME"}),(0,r.jsx)(t.td,{children:"Database name where connection flow db will store data."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"connect"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_DB_USER"}),(0,r.jsx)(t.td,{children:"Connection flow database username for login."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"postgres"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_DB_PASSWORD"}),(0,r.jsx)(t.td,{children:"Connection flow database password for login."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"postgres"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_BG_JOB_RECORDS_LIMIT"}),(0,r.jsx)(t.td,{children:"Maximum number of records connect job will try to process at the same time."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"25"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_BG_JOB_RECURRENCE_DELAY"}),(0,r.jsx)(t.td,{children:"Interval at which connect job will try to process records."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"2 seconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_BG_JOB_PROCESSING_PARALLELISM"}),(0,r.jsx)(t.td,{children:"Maximum amount of parallel connect job processings."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CONNECT_INVITATION_EXPIRY"}),(0,r.jsx)(t.td,{children:"Time leeway when accepting the connection invitation, the inviter should only accept responses if they are received within the specified time limit before expiry."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"300 seconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AGENT_HTTP_PORT"}),(0,r.jsx)(t.td,{children:"Port on which Cloud Agent runs."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"8085"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DIDCOMM_SERVICE_URL"}),(0,r.jsx)(t.td,{children:"URL of the DIDcomm server that also runs for this agent."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"http://localhost:8090",children:"http://localhost:8090"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AGENT_DB_HOST"}),(0,r.jsx)(t.td,{children:"Hostname of the server where Cloud Agent database is running on."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"localhost"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AGENT_DB_PORT"}),(0,r.jsx)(t.td,{children:"Port of the Cloud Agent database."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"5432"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AGENT_DB_NAME"}),(0,r.jsx)(t.td,{children:"Database name where agent db will store data."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"agent"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AGENT_DB_USER"}),(0,r.jsx)(t.td,{children:"Agent database username for login."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"postgres"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AGENT_DB_PASSWORD"}),(0,r.jsx)(t.td,{children:"Agent database password for login."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"postgres"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CREDENTIAL_VERIFY_SIGNATURE"}),(0,r.jsx)(t.td,{children:"Whether or not to verify a credential signature."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CREDENTIAL_VERIFY_DATES"}),(0,r.jsx)(t.td,{children:"Whether or not to verify credential dates (expiration)."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CREDENTIAL_LEEWAY"}),(0,r.jsx)(t.td,{children:"Time leeway when verifying credential dates, if time difference is less than a leeway, it will still verify."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"0 seconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PRESENTATION_VERIFY_SIGNATURE"}),(0,r.jsx)(t.td,{children:"Whether or not to verify a signed challenge used during credential presentation."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PRESENTATION_VERIFY_DATES"}),(0,r.jsx)(t.td,{children:"Whether or not to verify challenge dates during presentation."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PRESENTATION_VERIFY_HOLDER_BINDING"}),(0,r.jsx)(t.td,{children:"Description missing (please provide)."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PRESENTATION_LEEWAY"}),(0,r.jsx)(t.td,{children:"Time leeway when verifying challenge dates."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"0 seconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SECRET_STORAGE_BACKEND"}),(0,r.jsx)(t.td,{children:"Secret storage for keys and credentials. If vault is used, the vault server must be running, otherwise a database can be used for development purposes only."}),(0,r.jsx)(t.td,{children:"Enum(vault, postgres)"}),(0,r.jsx)(t.td,{children:"vault"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VAULT_ADDR"}),(0,r.jsx)(t.td,{children:"URL of the vault service for Cloud Agent to use for secret management."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"http://localhost:8200",children:"http://localhost:8200"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VAULT_TOKEN"}),(0,r.jsx)(t.td,{children:"Vault service auth token."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"root"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VAULT_APPROLE_ROLE_ID"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.code,{children:"role_id"})," for HashiCorp Vault authentication with AppRole"]}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Null"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VAULT_APPROLE_SECRET_ID"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.code,{children:"secret_id"})," for HashiCorp Vault authentication with AppRole"]}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Null"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VAULT_USE_SEMANTIC_PATH"}),(0,r.jsx)(t.td,{children:"Enable full path convention for vault secret path"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ADMIN_TOKEN"}),(0,r.jsx)(t.td,{children:"Admin token for the admin API key authentication method."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"admin"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"API_KEY_SALT"}),(0,r.jsx)(t.td,{children:"Salt used to hash the API key."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"JLXTS4J2qkMOgfO8"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"API_KEY_ENABLED"}),(0,r.jsx)(t.td,{children:"Whether or not to enable API key authentication."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"API_KEY_AUTHENTICATE_AS_DEFAULT_USER"}),(0,r.jsx)(t.td,{children:"Whether or not to authenticate all API keys as the default user."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"API_KEY_AUTO_PROVISIONING"}),(0,r.jsx)(t.td,{children:"Whether or not to enable auto-provisioning for API keys and register the owner of the api-key automatically."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WEBHOOK_PARALLELISM"}),(0,r.jsx)(t.td,{children:"Maximum number of events that will be retrieved in a single iteration, from the event queue by the webhook publisher."}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Null"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GLOBAL_WEBHOOK_URL"}),(0,r.jsx)(t.td,{children:"The global webhook endpoint URL where the notifications will be sent."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Null"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GLOBAL_WEBHOOK_API_KEY"}),(0,r.jsx)(t.td,{children:"The optional API key (bearer token) to use as the Authorization header for global wallet webhook."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Null"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DEFAULT_WALLET_ENABLED"}),(0,r.jsx)(t.td,{children:"Whether or not to initialize the default wallet."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DEFAULT_WALLET_SEED"}),(0,r.jsx)(t.td,{children:"The BIP32 wallet seed to be used for default wallet represented by a hexadecimal string."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Null"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DEFAULT_WALLET_WEBHOOK_URL"}),(0,r.jsx)(t.td,{children:"The default wallet webhook endpoint URL where the notifications will be sent."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Null"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DEFAULT_WALLET_WEBHOOK_API_KEY"}),(0,r.jsx)(t.td,{children:"The optional API key (bearer token) to use as the Authorization header for default wallet webhook."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Null"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DEFAULT_WALLET_AUTH_API_KEY"}),(0,r.jsx)(t.td,{children:"The authentication API key to be used for default entity that uses default wallet."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"default"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KEYCLOAK_ENABLED"}),(0,r.jsx)(t.td,{children:"Whether or not to enable Keycloak authentication and authorisation."}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KEYCLOAK_URL"}),(0,r.jsx)(t.td,{children:"The Keycloak server URL."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"http://localhost:9980",children:"http://localhost:9980"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KEYCLOAK_REALM"}),(0,r.jsx)(t.td,{children:"The Keycloak realm name."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"atala-demo"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KEYCLOAK_CLIENT_ID"}),(0,r.jsx)(t.td,{children:"The Keycloak client ID."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"prism-agent"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KEYCLOAK_CLIENT_SECRET"}),(0,r.jsx)(t.td,{children:"The Keycloak client secret."}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"prism-agent-demo-secret"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KEYCLOAK_UMA_AUTO_UPGRADE_RPT"}),(0,r.jsxs)(t.td,{children:["Whether or not to enable automatic upgrade of RPT tokens. If disabled, ",(0,r.jsx)(t.code,{children:"accessToken"})," must be RPT and include the permission claims."]}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KEYKLOAK_ROLES_CLAIM_PATH"}),(0,r.jsxs)(t.td,{children:["The json path to the ",(0,r.jsx)(t.code,{children:"roles"})," claim in the JWT payload . Used for role-based authorization (e.g. admin or tenant)."]}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"resource_access.<KEYCLOAK_CLIENT_ID>.roles"})})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>i,x:()=>l});var r=d(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);