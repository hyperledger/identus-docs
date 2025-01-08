"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[6838],{21615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(74848),i=t(28453);const s={},a="Webhook Notifications",r={id:"webhooks/webhook",title:"Webhook Notifications",description:"Introduction",source:"@site/identus-cloud-agent/docs/docusaurus/webhooks/webhook.md",sourceDirName:"webhooks",slug:"/webhooks/webhook",permalink:"/identus-docs/tutorials/webhooks/webhook",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Creating the Cloud Agent wallet seed",permalink:"/identus-docs/tutorials/secrets/seed-generation"},next:{title:"Tenant Onboarding",permalink:"/identus-docs/tutorials/multitenancy/tenant-onboarding"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Webhook Notifications",id:"understanding-webhook-notifications",level:2},{value:"What are Webhooks?",id:"what-are-webhooks",level:3},{value:"Purpose of Webhook Notifications in the Cloud Agent",id:"purpose-of-webhook-notifications-in-the-cloud-agent",level:3},{value:"Configuring the Webhook Feature",id:"configuring-the-webhook-feature",level:2},{value:"Enabling the Webhook Feature",id:"enabling-the-webhook-feature",level:3},{value:"Enable global webhook using environment variables",id:"enable-global-webhook-using-environment-variables",level:4},{value:"Enable wallet webhook for default wallet using environment variables",id:"enable-wallet-webhook-for-default-wallet-using-environment-variables",level:4},{value:"Enable wallet hook using REST API",id:"enable-wallet-hook-using-rest-api",level:4},{value:"Securing the Webhook Endpoint",id:"securing-the-webhook-endpoint",level:3},{value:"Event Format and Types",id:"event-format-and-types",level:2},{value:"Event Format",id:"event-format",level:3},{value:"Common Event Types",id:"common-event-types",level:3},{value:"Processing Webhook Notifications",id:"processing-webhook-notifications",level:2},{value:"Handling Incoming Webhook Requests",id:"handling-incoming-webhook-requests",level:3},{value:"Error Handling and Retry Mechanisms",id:"error-handling-and-retry-mechanisms",level:3},{value:"A basic Webhook implementation for logging requests",id:"a-basic-webhook-implementation-for-logging-requests",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"webhook-notifications",children:"Webhook Notifications"}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Welcome to the tutorial on webhook notifications in the Cloud Agent. In this tutorial, we will explore how webhook\nnotifications can enhance your experience with the Cloud Agent by providing real-time updates on events. By leveraging\nwebhook notifications, you can stay informed about important changes happening within the agent."}),"\n",(0,o.jsx)(n.h2,{id:"understanding-webhook-notifications",children:"Understanding Webhook Notifications"}),"\n",(0,o.jsx)(n.h3,{id:"what-are-webhooks",children:"What are Webhooks?"}),"\n",(0,o.jsx)(n.p,{children:"Webhooks enable real-time communication between applications by sending HTTP requests containing event data to specified\nendpoints (webhook URLs) when events occur. They establish a direct communication channel, allowing applications to\nreceive instant updates and respond in a timely manner, promoting efficient integration between event-driven\nsystems."}),"\n",(0,o.jsx)(n.h3,{id:"purpose-of-webhook-notifications-in-the-cloud-agent",children:"Purpose of Webhook Notifications in the Cloud Agent"}),"\n",(0,o.jsxs)(n.p,{children:["Webhook notifications in the CLoud Agent serve as a vital feature, enabling you to receive timely updates on various events\noccurring within the agent. Webhooks allow you to receive HTTP requests containing event details at a specified\nendpoint (webhook URL). These events are specifically related to the execution of\nthe ",(0,o.jsx)(n.a,{href:"/tutorials/connections/connection",children:"Connect"}),", ",(0,o.jsx)(n.a,{href:"/tutorials/credentials/didcomm/issue",children:"Issue"}),",\nand ",(0,o.jsx)(n.a,{href:"/tutorials/credentials/didcomm/present-proof",children:"Presentation"})," flows. Webhook notifications will be sent each time there is a\nstate\nchange during the execution of these protocols."]}),"\n",(0,o.jsx)(n.p,{children:"By leveraging webhooks, you can integrate the Cloud Agent seamlessly into your applications and systems. You can track and\nmonitor the progress of the main flows, receiving timely updates about changes and events."}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-webhook-feature",children:"Configuring the Webhook Feature"}),"\n",(0,o.jsx)(n.h3,{id:"enabling-the-webhook-feature",children:"Enabling the Webhook Feature"}),"\n",(0,o.jsx)(n.p,{children:"There are two kinds of webhook notifications: global webhooks and wallet webhooks.\nGlobal webhooks capture all events that happen on the Cloud Agent across all wallets,\nwhereas wallet webhooks only capture events that are specific to assets within a particular wallet."}),"\n",(0,o.jsx)(n.h4,{id:"enable-global-webhook-using-environment-variables",children:"Enable global webhook using environment variables"}),"\n",(0,o.jsx)(n.p,{children:"The Cloud Agent uses the following environment variables to manage global webhook notifications:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"GLOBAL_WEBHOOK_URL"})}),(0,o.jsx)(n.td,{children:"The webhook endpoint URL where the notifications will be sent"}),(0,o.jsx)(n.td,{children:"null"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"GLOBAL_WEBHOOK_API_KEY"})}),(0,o.jsxs)(n.td,{children:["The optional API key (bearer token) to use as the ",(0,o.jsx)(n.code,{children:"Authorization"})," header"]}),(0,o.jsx)(n.td,{children:"null"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"enable-wallet-webhook-for-default-wallet-using-environment-variables",children:"Enable wallet webhook for default wallet using environment variables"}),"\n",(0,o.jsx)(n.p,{children:"In a multi-tenant scenario, the Cloud Agent can optionally create a default wallet to simplify the development and deployment process.\nThe webhook configuration for this default wallet can be defined using environment variables.\nAfter the default wallet is created, its webhook settings are stored in the system and are no longer influenced by these environment variables."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"DEFAULT_WALLET_ENABLED"})}),(0,o.jsx)(n.td,{children:"Automatically create default on the Cloud Agent startup"}),(0,o.jsx)(n.td,{children:"true"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"DEFAULT_WALLET_WEBHOOK_URL"})}),(0,o.jsx)(n.td,{children:"The webhook endpoint URL where the notifications will be sent"}),(0,o.jsx)(n.td,{children:"null"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"DEFAULT_WALLET_WEBHOOK_API_KEY"})}),(0,o.jsxs)(n.td,{children:["The optional API key (bearer token) to use as the ",(0,o.jsx)(n.code,{children:"Authorization"})," header"]}),(0,o.jsx)(n.td,{children:"null"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"enable-wallet-hook-using-rest-api",children:"Enable wallet hook using REST API"}),"\n",(0,o.jsxs)(n.p,{children:["In a multi-tenant scenario, there is an option to configure wallet webhook parameters using a REST API, which offers more flexibility.\nFor each individual wallet, users can create a new webhook by making a POST request to ",(0,o.jsx)(n.code,{children:"/events/webhooks"}),",\nwhich in turn creates a new webhook resource specific to their wallet."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location --request POST 'http://localhost:8080/cloud-agent/events/webhooks' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --header \"apiKey: $API_KEY\" \\\n  --data-raw '{\n    \"url\": \"http://localhost:9095\"\n  }'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Response Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id": "e9569dd0-bffa-4be4-94fe-f5025a79029a",\n    "url": "http://localhost:9095",\n    "customHeaders": {},\n    "createdAt": "2023-09-12T08:39:03.871339Z"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"securing-the-webhook-endpoint",children:"Securing the Webhook Endpoint"}),"\n",(0,o.jsx)(n.p,{children:"It is essential to secure the webhook endpoint to protect the integrity and confidentiality of the event data. Consider\nthe following best practices when securing your webhook endpoint:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use HTTPS to encrypt communication between the Cloud Agent and the webhook endpoint."}),"\n",(0,o.jsx)(n.li,{children:"Implement authentication mechanisms (e.g., API keys, tokens) to verify the authenticity of incoming requests."}),"\n",(0,o.jsx)(n.li,{children:"Validate and sanitize incoming webhook requests to mitigate potential security risks."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["One of the authorization mechanism for the Cloud Agent's webhook notifications is the bearer token. If\nconfigured, the token will be included in the ",(0,o.jsx)(n.code,{children:"Authorization"})," header of the HTTP request sent by the agent to the\nwebhook endpoint. You can configure this bearer token by setting the value of the\n",(0,o.jsx)(n.code,{children:"GLOBAL_WEBHOOK_API_KEY"})," or ",(0,o.jsx)(n.code,{children:"DEFAULT_WALLET_WEBHOOK_API_KEY"})," environment variable."]}),"\n",(0,o.jsxs)(n.p,{children:["An alternative approach is to make use of the ",(0,o.jsx)(n.code,{children:"customHeaders"})," property within the REST API for configuring webhooks.\nThis option offers increased flexibility when custom or multiple headers are needed."]}),"\n",(0,o.jsx)(n.h2,{id:"event-format-and-types",children:"Event Format and Types"}),"\n",(0,o.jsx)(n.h3,{id:"event-format",children:"Event Format"}),"\n",(0,o.jsx)(n.p,{children:"Webhook notifications from the Cloud Agent are sent as JSON payloads in the HTTP requests."}),"\n",(0,o.jsx)(n.p,{children:"The event format is consistent across all events. Each event follows a common structure, while the 'data' field\nwithin the event payload contains information specific to the type of event. Here is an example of the JSON payload\nformat:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "id": "cb8d4e96-30f0-4892-863f-44d49d634211",\n  "ts": "2023-07-06T12:01:19.769427Z",\n  "type": "xxxx",\n  "data": {\n    // Event-specific data goes here \n  },\n  "walletId": "00000000-0000-0000-0000-000000000000"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This event format ensures consistency and allows you to handle webhook notifications uniformly while easily extracting\nthe relevant data specific to each event type from the ",(0,o.jsx)(n.code,{children:"data"})," field."]}),"\n",(0,o.jsx)(n.p,{children:"Here is a complete example of a webhook notification event related to a connection flow state change (invitation\ngenerated):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "id": "cb8d4e96-30f0-4892-863f-44d49d634211",\n  "ts": "2023-07-06T12:01:19.769427Z",\n  "type": "ConnectionUpdated",\n  "data": {\n    "connectionId": "c10787cf-99bb-47f4-99bb-1fdcca32b673",\n    "label": "Connect with Alice",\n    "role": "Inviter",\n    "state": "InvitationGenerated",\n    "invitation": {\n      "id": "c10787cf-99bb-47f4-99bb-1fdcca32b673",\n      "type": "https://didcomm.org/out-of-band/2.0/invitation",\n      "from": "did:peer:2.Ez6LS...jIiXX0",\n      "invitationUrl": "https://my.domain.com/path?_oob=eyJpZCI6...bXX19"\n    },\n    "createdAt": "2023-07-06T12:01:19.760126Z",\n    "self": "c10787cf-99bb-47f4-99bb-1fdcca32b673",\n    "kind": "Connection"\n  },\n  "walletId": "00000000-0000-0000-0000-000000000000"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"common-event-types",children:"Common Event Types"}),"\n",(0,o.jsxs)(n.p,{children:["The Cloud Agent sends webhook notifications for events related to protocol state changes in\nthe ",(0,o.jsx)(n.a,{href:"/tutorials/connections/connection",children:"Connect"}),", ",(0,o.jsx)(n.a,{href:"/tutorials/credentials/didcomm/issue",children:"Issue"}),",\n",(0,o.jsx)(n.a,{href:"/tutorials/credentials/didcomm/present-proof",children:"Presentation"})," flows, and also ",(0,o.jsx)(n.a,{href:"/tutorials/dids/publish",children:"DID publication"}),"\nstate changes. These events allow you to track the progress and updates within these flows in real-time."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"id"})," field of the common event structure is the unique identifier (UUID) of the event and is randomly generated at\nevent creation time."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ts"})," field contains the timestamp (date + time) at which the event was created."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"walletId"})," field contains information about the wallet from which the event originates."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"type"})," field indicates to which flow/process the received event is related, and hence the type of JSON payload that\ncan be expected in the inner ",(0,o.jsx)(n.code,{children:"data"})," field. Possible values are:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Value"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ConnectionUpdated"})}),(0,o.jsx)(n.td,{children:"An update in the connection flow state"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"IssueCredentialRecordUpdated"})}),(0,o.jsx)(n.td,{children:"An update in the VC issuance flow state"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PresentationUpdated"})}),(0,o.jsx)(n.td,{children:"An update in the VC presentation flow state"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"DIDStatusUpdated"})}),(0,o.jsx)(n.td,{children:"An update in the DID publication state"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"State change notifications that you can expect to receive through webhook notifications include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Connection State Change: Notifies about state changes in the connection flow, such as ",(0,o.jsx)(n.code,{children:"InvitationGenerated"}),",\n",(0,o.jsx)(n.code,{children:"ConnectionRequestSent"}),", ",(0,o.jsx)(n.code,{children:"ConnectionResponseReceived"}),", etc. Please refer to the ",(0,o.jsx)(n.code,{children:"state"})," field of\nthe ",(0,o.jsx)(n.a,{href:"/agent-api/#tag/Connections-Management/operation/getConnection",children:"connection resource"}),"\nfor an exhaustive list of states."]}),"\n",(0,o.jsxs)(n.li,{children:["Credential State Change: Indicates changes in the credential issuance flow, such as ",(0,o.jsx)(n.code,{children:"OfferSent"}),", ",(0,o.jsx)(n.code,{children:"RequestReceived"}),",\n",(0,o.jsx)(n.code,{children:"CredentialSent"}),", etc. Please refer to the ",(0,o.jsx)(n.code,{children:"protocolState"})," field of\nthe ",(0,o.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/getCredentialRecord",children:"credential resource"}),"\nfor an exhaustive list of states."]}),"\n",(0,o.jsxs)(n.li,{children:["Presentation State Change: Notifies about changes in the presentation flow, such as ",(0,o.jsx)(n.code,{children:"RequestReceived"}),",\n",(0,o.jsx)(n.code,{children:"PresentationGenerated"}),", ",(0,o.jsx)(n.code,{children:"PresentationVerified"}),", etc. Please refer to the ",(0,o.jsx)(n.code,{children:"status"})," field of\nthe ",(0,o.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/getPresentation",children:"presentation resource"})," for an\nexhaustive list of states."]}),"\n",(0,o.jsxs)(n.li,{children:["DID State Change: Notifies about DID-related state changes. Currently, only the ",(0,o.jsx)(n.code,{children:"Published"})," DID publication state\nevent will be notified."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"processing-webhook-notifications",children:"Processing Webhook Notifications"}),"\n",(0,o.jsx)(n.h3,{id:"handling-incoming-webhook-requests",children:"Handling Incoming Webhook Requests"}),"\n",(0,o.jsx)(n.p,{children:"To handle incoming webhook notifications from the Cloud Agent in your application, follow these general steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Receive the HTTP request at your specified webhook endpoint."}),"\n",(0,o.jsx)(n.li,{children:"Parse the JSON payload of the request to extract the event details."}),"\n",(0,o.jsx)(n.li,{children:"Process the event data according to your application's requirements."}),"\n",(0,o.jsxs)(n.li,{children:["Send a response back to acknowledge the successful receipt of the webhook notification. For a successful reception,\nthe response status code should be ",(0,o.jsx)(n.code,{children:">= 200"})," and ",(0,o.jsx)(n.code,{children:"< 300"}),". Any other response status code will lead to a new attempt\nfrom the Cloud Agent."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"error-handling-and-retry-mechanisms",children:"Error Handling and Retry Mechanisms"}),"\n",(0,o.jsx)(n.p,{children:"When working with webhook notifications in the Cloud Agent, it is important to consider error handling and retry mechanisms.\nIn case of failed webhook notifications or errors, the Cloud Agent employs an automatic retry mechanism to ensure delivery.\nThe agent will attempt to send the webhook notification up to three times, with a five-second interval between each\nattempt. Please note that the number of retries and the interval duration are currently not configurable in the Cloud Agent."}),"\n",(0,o.jsx)(n.p,{children:"By default, this retry mechanism provides a reasonable level of reliability for delivering webhook notifications,\nallowing for temporary network issues or intermittent failures."}),"\n",(0,o.jsx)(n.h3,{id:"a-basic-webhook-implementation-for-logging-requests",children:"A basic Webhook implementation for logging requests"}),"\n",(0,o.jsx)(n.p,{children:"In the following example, we will demonstrate a simple Python code snippet that sets up a webhook endpoint and logs\nincoming HTTP requests to the console. This basic implementation can serve as a starting point for building more\nadvanced webhook systems."}),"\n",(0,o.jsx)(n.p,{children:"In the provided Python code snippet, the port on which the webhook listener will listen for incoming requests should be\npassed as a command-line parameter. This allows flexibility in starting multiple webhooks in parallel, which is useful\nwhen testing multiple locally running agents, e.g. for a holder, an issuer, and/or a verifier."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'#!/usr/bin/env python3\n"""\nVery simple HTTP server in python for logging requests\nUsage::\n    ./server.py [<port>]\n"""\nimport logging\nimport json\nfrom http.server import BaseHTTPRequestHandler, HTTPServer\n\ngrey = "\\x1b[38;20m"\nyellow = "\\x1b[33;20m"\ngreen = "\\x1b[32;20m"\nred = "\\x1b[31;20m"\nbold_red = "\\x1b[31;1m"\nreset = "\\x1b[0m"\n\nconsoleHandler = logging.StreamHandler()\nformatter = logging.Formatter(f"""%(asctime)s - %(levelname)s - %(name)s\n--------------------------------------- request ---------------------------------------\n{green}%(method)s %(path)s{reset}\n%(headers)s\n{yellow}%(data)s{reset}\n-----------------------------------\n"""\n                              )\nconsoleHandler.setFormatter(formatter)\nconsoleHandler.setLevel(logging.INFO)\n\nlogger = logging.getLogger(\'http-request\')\nlogger.setLevel(logging.INFO)\nlogger.addHandler(consoleHandler)\n\nclass S(BaseHTTPRequestHandler):\n\n    def _set_response(self):\n        self.send_response(200)\n        self.send_header(\'Content-type\', \'text/html\')\n        self.end_headers()\n\n    def do_GET(self):\n        logging.info("GET request,\\nPath: %s\\nHeaders:\\n%s\\n", str(self.path), str(self.headers))\n        self._set_response()\n        self.wfile.write("GET request for {}".format(self.path).encode(\'utf-8\'))\n\n    def do_POST(self):\n        content_length = int(self.headers[\'Content-Length\'])  # <--- Gets the size of data\n        post_data = self.rfile.read(content_length)  # <--- Gets the data itself\n        json_obj = json.loads(post_data.decode(\'utf-8\'))\n        json_data = json.dumps(json_obj, indent=2)\n        logger.info(msg="Request content", extra={\n            \'method\': "POST",\n            \'path\': str(self.path),\n            \'headers\': str(self.headers),\n            \'data\': json_data\n        })\n        self._set_response()\n        self.wfile.write("POST request for {}".format(self.path).encode(\'utf-8\'))\n\n    def log_message(self, format, *args):\n        pass\n\n\ndef run(server_class=HTTPServer, handler_class=S, port=80):\n    server_address = (\'\', port)\n    httpd = server_class(server_address, handler_class)\n    try:\n        httpd.serve_forever()\n    except KeyboardInterrupt:\n        pass\n    httpd.server_close()\n\n\nif __name__ == \'__main__\':\n    from sys import argv\n\n    if len(argv) == 2:\n        run(port=int(argv[1]))\n    else:\n        run()\n'})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Congratulations! You've learned about webhook notifications in the Cloud Agent. By leveraging this feature, you can receive\nreal-time updates on events happening within the agent, enabling you to integrate the Cloud Agent seamlessly into your\napplications. Remember to secure your webhook endpoint and handle webhook notifications effectively to maximize the\nbenefits of this feature."}),"\n",(0,o.jsx)(n.p,{children:"Start integrating webhook notifications into your Cloud Agent workflow and unlock the power of real-time event updates!"}),"\n",(0,o.jsx)(n.p,{children:"If you have any further questions or need assistance, don't hesitate to reach out to the Identus support team or\nrefer to the official documentation for more details."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);