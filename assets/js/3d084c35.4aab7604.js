"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[6741],{12906:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var t=r(74848),i=r(28453),o=r(11470),s=r(19365);const a={},c="Present proof",l={id:"credentials/present-proof",title:"Present proof",description:"The Present Proof Protocol allows:",source:"@site/identus-cloud-agent/docs/docusaurus/credentials/present-proof.md",sourceDirName:"credentials",slug:"/credentials/present-proof",permalink:"/identus-docs/tutorials/credentials/present-proof",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Issue credentials (OID4VCI)",permalink:"/identus-docs/tutorials/credentials/oid4vci"},next:{title:"Credential revocation",permalink:"/identus-docs/tutorials/credentials/revocation"}},d={},h=[{value:"Roles",id:"roles",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Verifier interactions",id:"verifier-interactions",level:2},{value:"Creating and sending a Presentation Request",id:"creating-and-sending-a-presentation-request",level:3},{value:"Accept presentation proof received from the Holder/prover",id:"accept-presentation-proof-received-from-the-holderprover",level:3},{value:"Holder/Prover",id:"holderprover",level:2},{value:"Reviewing and accepting a received presentation request",id:"reviewing-and-accepting-a-received-presentation-request",level:3},{value:"Sequence diagram",id:"sequence-diagram",level:2},{value:"JWT Present Proof Flow Diagram",id:"jwt-present-proof-flow-diagram",level:3},{value:"Anoncreds Present Proof Flow Diagram",id:"anoncreds-present-proof-flow-diagram",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"present-proof",children:"Present proof"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/concepts/glossary#present-proof-protocol",children:"Present Proof Protocol"})," allows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.a,{href:"/docs/concepts/glossary#verifier",children:"Verifier"})," to request a verifiable credential presentation from a Holder/Prover"]}),"\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.a,{href:"/docs/concepts/glossary#holder",children:"Holder/Prover"})," responds by presenting a cryptographic proof to the Verifier"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The protocol provides endpoints for a Verifier to request new proof presentations from Holder/Provers and for a Holder/Prover to respond to the presentation request using a specific verifiable credential they own."}),"\n",(0,t.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,t.jsx)(n.p,{children:"The present proof protocol has two roles:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Verifier: A subject requesting a proof presentation by sending a request presentation message, then verifying the presentation."}),"\n",(0,t.jsxs)(n.li,{children:["Holder/Prover: A ",(0,t.jsx)(n.a,{href:"/docs/concepts/glossary#subject",children:"subject"})," that receives a ",(0,t.jsx)(n.a,{href:"/docs/concepts/glossary#proof-presentation",children:"proof presentation"})," request, prepares a proof, and sends it to the verifier by sending a proof presentation message."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before using the Proof Presentation protocol, the following conditions must be present:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Holder/Prover and Verifier Cloud Agents must be up and running"}),"\n",(0,t.jsxs)(n.li,{children:["A connection must be established between the Holder/Prover and Verifier Cloud Agents (see ",(0,t.jsx)(n.a,{href:"/identus-docs/tutorials/connections/connection",children:"Connections"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["The Holder/Prover should hold a ",(0,t.jsx)(n.a,{href:"/docs/concepts/glossary#verifiable-credential",children:"verifiable credential (VC)"})," received from an ",(0,t.jsx)(n.a,{href:"/docs/concepts/glossary#issuer",children:"Issuer"})," see ",(0,t.jsx)(n.a,{href:"/identus-docs/tutorials/credentials/issue",children:"Issue"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This protocol supports the presentation of verifiable claims between two Cloud Agents, the Holder/Prover and the Verifier."}),"\n",(0,t.jsx)(n.p,{children:"The protocol consists of the following main parts:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The Verifier creates a new proof presentation request using the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/requestPresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations"})})," endpoint. It includes the identifier of an existing ",(0,t.jsx)(n.code,{children:"connection"})," between both parties, ",(0,t.jsx)(n.code,{children:"domain"}),", and a ",(0,t.jsx)(n.code,{children:"challenge"})," to protect from potential replay attacks."]}),"\n",(0,t.jsxs)(n.li,{children:["The Holder/Prover receives the presentation request from the Verifier and can retrieve the list of existing requests using the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/getAllPresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations"})})," endpoint."]}),"\n",(0,t.jsxs)(n.li,{children:["The Holder/Prover can then review and accept a specific request using the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/updatePresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations/{presentationId}"})})," endpoint, providing the identifier of the ",(0,t.jsx)(n.code,{children:"credential"})," record to use in the proof presentation."]}),"\n",(0,t.jsxs)(n.li,{children:["The Verifier receives the proof presentation from the Holder/Prover and can accept it using the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/updatePresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations/{presentationId}"})})," endpoint, specifying ",(0,t.jsx)(n.code,{children:"presentation-accept"})," as the action type."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Role"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/requestPresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations"})})}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"Creates and sends a new proof presentation request."}),(0,t.jsx)(n.td,{children:"Verifier"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/getAllPresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations"})})}),(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:"Retrieves the collection of all the existing presentation proof records - sent or received."}),(0,t.jsx)(n.td,{children:"Verifier, Holder/Prover"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/getPresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations/{id}"})})}),(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsxs)(n.td,{children:["Retrieves a specific presentation proof record by ",(0,t.jsx)(n.code,{children:"id"}),"."]}),(0,t.jsx)(n.td,{children:"Verifier, Holder/Prover"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/updatePresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations/{id}"})})}),(0,t.jsx)(n.td,{children:"PATCH"}),(0,t.jsx)(n.td,{children:"Updates an existing presentation proof record to, e.g., accept the request on the Holder/Prover side or accept the presentation on the Verifier side."}),(0,t.jsx)(n.td,{children:"Verifier, Holder/Prover"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For more detailed information, please, check the full ",(0,t.jsx)(n.a,{href:"/agent-api",children:"Cloud Agent API"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"verifier-interactions",children:"Verifier interactions"}),"\n",(0,t.jsx)(n.p,{children:"This section describes the interactions available to the Verifier with the Cloud Agent."}),"\n",(0,t.jsx)(n.h3,{id:"creating-and-sending-a-presentation-request",children:"Creating and sending a Presentation Request"}),"\n",(0,t.jsxs)(n.p,{children:["The Verifier needs to create a proof presentation request to start the process.\nTo do this, he makes a ",(0,t.jsx)(n.code,{children:"POST"})," request to the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/requestPresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations"})})," endpoint with a JSON payload that includes the following information:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connectionId"}),": This field represents the unique identifier of an existing connection between the verifier and the Holder/prover. It is for exchanging messages related to the protocol flow execution."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"challenge"})," and ",(0,t.jsx)(n.code,{children:"domain"}),": The Verifier provides the random seed challenge and operational domain, and the Holder/Prover must sign the generated proof to protect from replay attacks."]}),"\n"]}),"\n",(0,t.jsxs)(o.A,{groupId:"vc-formats",children:[(0,t.jsx)(s.A,{value:"jwt",label:"JWT",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \'http://localhost:8070/cloud-agent/present-proof/presentations\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n -H "apikey: $API_KEY" \\\n  -d \'{\n        "connectionId": "872ddfa9-4115-46c2-8a1b-22c24c7431d7",\n        "proofs":[],\n        "options": {\n          "challenge": "11c91493-01b3-4c4d-ac36-b336bab5bddf",\n          "domain": "https://prism-verifier.com"\n        }\n      }\'\n'})})}),(0,t.jsx)(s.A,{value:"anoncreds",label:"AnonCreds",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \'http://localhost:8070/cloud-agent/present-proof/presentations\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n -H "apikey: $API_KEY" \\\n  -d \'{\n        "connectionId": "872ddfa9-4115-46c2-8a1b-22c24c7431d7",\n        "anoncredPresentationRequest": {\n          "requested_attributes": {\n            "attribute1": {\n              "name": "Attribute 1",\n              "restrictions": [\n                {\n                  "cred_def_id": "credential_definition_id_of_attribute1"\n                }\n              ],\n              "non_revoked": {\n                 "from": 1635734400,\n                 "to": 1735734400\n               }\n            }\n          },\n          "requested_predicates": {\n            "predicate1": {\n              "name": "age",\n              "p_type": ">=",\n              "p_value": 18,\n              "restrictions": [\n                {\n                  "schema_id": "schema_id_of_predicate1"\n                }\n              ],\n              "non_revoked": {\n                "from": 1635734400\n               }\n            }\n          },\n          "name": "Example Presentation Request",\n          "nonce": "1234567890",\n          "version": "1.0"\n        },\n        "credentialFormat": "AnonCreds" \n      }\'\n'})})}),(0,t.jsxs)(s.A,{value:"sdjwt",label:"SDJWT",children:[(0,t.jsxs)(n.p,{children:["a. ",(0,t.jsx)(n.code,{children:"SD-JWT"})," The absence of the ",(0,t.jsx)(n.code,{children:"cnf"})," key claim in the SD-JWT Verifiable Credential (VC) means that the Holder/Prover is unable to create a presentation and sign the ",(0,t.jsx)(n.code,{children:"challenge"})," and ",(0,t.jsx)(n.code,{children:"domain"})," supplied by the verifier"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \'http://localhost:8070/cloud-agent/present-proof/presentations\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n -H "apikey: $API_KEY" \\\n  -d \'{\n        "connectionId": "872ddfa9-4115-46c2-8a1b-22c24c7431d7",\n        "proofs":[],\n        "credentialFormat": "SDJWT",\n         "claims": {\n            "emailAddress": {},\n            "givenName": {},\n    `       "region": {},\n            "country": {}`\n         }\n      }\'\n'})}),(0,t.jsxs)(n.p,{children:["b. ",(0,t.jsx)(n.code,{children:"SD-JWT"})," The presence of the ",(0,t.jsx)(n.code,{children:"cnf"})," key as a disclosable claim in the SD-JWT Verifiable Credential (VC) allows the Holder/Prover to create a presentation and sign the ",(0,t.jsx)(n.code,{children:"challenge"})," and ",(0,t.jsx)(n.code,{children:"domain"})," given by the verifier."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'POST\' \'http://localhost:8070/cloud-agent/present-proof/presentations\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n -H "apikey: $API_KEY" \\\n  -d \'{\n        "connectionId": "872ddfa9-4115-46c2-8a1b-22c24c7431d7",\n        "proofs":[],\n        "options": {\n          "challenge": "11c91493-01b3-4c4d-ac36-b336bab5bddf",\n          "domain": "https://prism-verifier.com"\n        },\n        "credentialFormat": "SDJWT",\n         "claims": {\n            "emailAddress": {},\n            "givenName": {},\n            "region": {},\n            "country": {}\n         }\n      }\'\n'})}),(0,t.jsx)(n.p,{children:"SDJWT Specific attributes"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"credentialFormat"}),": SDJWT."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"claims"}),": The claims to be disclosed  by Holder/Prover."]}),"\n"]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Upon execution, a new presentation request record gets created with an initial state of ",(0,t.jsx)(n.code,{children:"RequestPending"}),". The Verifier Cloud Agent will send the presentation request message to the Cloud Agent of the Holder/Prover through the specified DIDComm connection. The record state then is updated to ",(0,t.jsx)(n.code,{children:"RequestSent"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The Verifier can retrieve the list of presentation records by making a ",(0,t.jsx)(n.code,{children:"GET"})," request to the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/getAllPresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations"})})," endpoint:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' 'http://localhost:8070/cloud-agent/present-proof/presentations' \\\n  -H 'accept: application/json' \\\n -H \"apikey: $API_KEY\"\n"})}),"\n",(0,t.jsx)(n.h3,{id:"accept-presentation-proof-received-from-the-holderprover",children:"Accept presentation proof received from the Holder/prover"}),"\n",(0,t.jsxs)(n.p,{children:["Once the Holder/Prover has received a proof presentation request, he can accept it using an appropriate verifiable credential. The Cloud Agent of the Verifier will receive that proof and verify it. Upon successful verification, the presentation record state gets updated to ",(0,t.jsx)(n.code,{children:"PresentationVerified"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The Verifier can then explicitly accept the specific verified proof presentation to change the record state to ",(0,t.jsx)(n.code,{children:"PresentationAccepted"})," by making a ",(0,t.jsx)(n.code,{children:"PATCH"})," request to the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/updatePresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations/{id}"})})," endpoint:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X 'PATCH' 'http://localhost:8070/cloud-agent/present-proof/presentations/{PRESENTATION_ID}' \\\n  -H 'Content-Type: application/json' \\\n  -H \"apikey: $API_KEY\" \\\n  -d '{\n        \"action\": \"presentation-accept\"\n      }'\n"})}),"\n",(0,t.jsx)(n.mermaid,{value:"---\ntitle: Verifier Flow\n---\nstateDiagram-v2\n  [*] --\x3e RequestPending: new presentation request created by the Verifier\n  RequestPending --\x3e RequestSent: presentation request sent to the Holder/Prover PRISM Agent\n  RequestSent --\x3e PresentationReceived: presentation proof received from the Holder/Prover\n  PresentationReceived --\x3e PresentationVerified: presentation proof verified by the Verifier PRISM Agent\n  PresentationVerified --\x3e PresentationAccepted: verified presentation proof explicitly accepted by the Verifier"}),"\n",(0,t.jsx)(n.h2,{id:"holderprover",children:"Holder/Prover"}),"\n",(0,t.jsx)(n.p,{children:"This section describes the interactions available to the Holder/Prover with his Cloud Agent."}),"\n",(0,t.jsx)(n.h3,{id:"reviewing-and-accepting-a-received-presentation-request",children:"Reviewing and accepting a received presentation request"}),"\n",(0,t.jsxs)(n.p,{children:["The Holder/Prover can retrieve the list of presentation requests received by its Cloud Agent from different Verifiers making a ",(0,t.jsx)(n.code,{children:"GET"})," request to the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/getAllPresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations"})})," endpoint:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' 'http://localhost:8090/cloud-agent/present-proof/presentations' \\\n  -H 'accept: application/json' \\\n  -H \"apikey: $API_KEY\"\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The Holder/Prover can then accept a specific request, generate the proof, and send it to the Verifier Cloud Agent by making a ",(0,t.jsx)(n.code,{children:"PATCH"})," request to the ",(0,t.jsx)(n.a,{href:"/agent-api/#tag/Present-Proof/operation/updatePresentation",children:(0,t.jsx)(n.code,{children:"/present-proof/presentations/{id}"})})," endpoint:"]}),"\n",(0,t.jsxs)(o.A,{groupId:"vc-formats",children:[(0,t.jsxs)(s.A,{value:"jwt",label:"JWT",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'PATCH\' \'http://localhost:8090/cloud-agent/present-proof/presentations/{PRESENTATION_ID}\' \\\n  -H \'Content-Type: application/json\' \\\n  -H "apikey: $API_KEY" \\\n  -d \'{\n        "action": "request-accept",\n        "proofId": ["{CRED_RECORD_ID}"]\n      }\'\n'})}),(0,t.jsx)(n.p,{children:"The Holder/Prover will have to provide the following information:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"presentationId"}),": The unique identifier of the presentation record to accept."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"proofId"}),": The unique identifier of the verifiable credential record to use as proof."]}),"\n"]})]}),(0,t.jsx)(s.A,{value:"anoncreds",label:"AnonCreds",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'PATCH\' \'http://localhost:8090/cloud-agent/present-proof/presentations/{PRESENTATION_ID}\' \\\n  -H \'Content-Type: application/json\' \\\n  -H "apikey: $API_KEY" \\\n  -d \'{\n        "action": "request-accept",\n        "anoncredPresentationRequest":{\n          "credentialProofs":[\n             {\n                "credential":"3e849b98-f0fd-4cb4-ae96-9ea527a76267",\n                "requestedAttribute":[\n                   "age"\n                ],\n                "requestedPredicate":[\n                   "age"\n                ]\n              }\n          ]\n        }\n      }\'\n'})})}),(0,t.jsxs)(s.A,{value:"sdjwt",label:"SDJWT",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'PATCH\' \'http://localhost:8090/cloud-agent/present-proof/presentations/{PRESENTATION_ID}\' \\\n  -H \'Content-Type: application/json\' \\\n  -H "apikey: $API_KEY" \\\n  -d \'{\n        "action": "request-accept",\n        "proofId": ["{CRED_RECORD_ID}"]\n        "claims": {\n          "emailAddress": {},\n          "givenName": {},\n          "address": {\n            "region": {},\n            "country": {}\n          }\n        },\n        "credentialFormat": "SDJWT"\n      }\'\n'})}),(0,t.jsx)(n.p,{children:"The Holder/Prover will have to provide the following information:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"presentationId"}),": The unique identifier of the presentation record to accept."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"proofId"}),": The unique identifier of the verifiable credential record to use as proof."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"credentialFormat"}),": SDJWT."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"claims"}),": The Verifier requests specific claims to disclose. The path of these claims must match exactly with those in the SD-JWT Verifiable Credential (VC)."]}),"\n"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\ud83d\udccc ",(0,t.jsx)(n.strong,{children:"Note:"}),"  When a SD-JWT Verifiable Credential (VC) has nested claims such as region and country within an address object, as shown in the example above, it falls under the Holder's responsibility to supply the correct nested JSON structure for the claims attribute(s) that is being disclosed."]}),"\n",(0,t.jsxs)(n.li,{children:["\ud83d\udccc ",(0,t.jsx)(n.strong,{children:"Note:"})," The holder or prover of the claims is only required to disclose the attribute names and the correct JSON path. The actual values are not necessary. A special JSON placeholder ",(0,t.jsx)(n.code,{children:"{}"}),", can be used instead."]}),"\n"]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The Holder/Prover will have to provide the following information:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"presentationId"}),": The unique identifier of the presentation record to accept."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"anoncredPresentationRequest"}),": A list of credential unique identifier with the attribute and predicate the credential is answering for."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The record state is updated to ",(0,t.jsx)(n.code,{children:"PresentationPending"})," and processed by the Holder/Prover Cloud Agent. The agent will automatically generate the proof presentation, change the state to ",(0,t.jsx)(n.code,{children:"PresentationGenerated"}),", and will eventually send it to the Verifier Agent, and change the state to ",(0,t.jsx)(n.code,{children:"PresentationSent"}),"."]}),"\n",(0,t.jsx)(n.mermaid,{value:"---\ntitle: Holder/Prover Flow\n---\nstateDiagram-v2\n  [*] --\x3e RequestReceived: presentation request received by the PRISM Agent\n  RequestReceived --\x3e PresentationPending: request accepted by the Holder/Prover\n  PresentationPending --\x3e PresentationGenerated: presentation proof generated by the PRISM Agent\n  PresentationGenerated --\x3e PresentationSent: generated proof sent to the Verifier PRISM Agent"}),"\n",(0,t.jsx)(n.h2,{id:"sequence-diagram",children:"Sequence diagram"}),"\n",(0,t.jsx)(n.p,{children:"The following diagram shows the end-to-end flow for a verifier to request and verify a proof presentation from a Holder/prover."}),"\n",(0,t.jsx)(n.h3,{id:"jwt-present-proof-flow-diagram",children:"JWT Present Proof Flow Diagram"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(92152).A+"",width:"1151",height:"1713"})}),"\n",(0,t.jsx)(n.h3,{id:"anoncreds-present-proof-flow-diagram",children:"Anoncreds Present Proof Flow Diagram"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(6162).A+"",width:"1873",height:"2304"})}),"\n",(0,t.jsxs)(o.A,{groupId:"vc-formats",children:[(0,t.jsx)(s.A,{value:"jwt",label:"JWT",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(92152).A+"",width:"1151",height:"1713"})})}),(0,t.jsx)(s.A,{value:"anoncreds",label:"AnonCreds",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(6162).A+"",width:"1873",height:"2304"})})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const i={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>T});var t=r(96540),i=r(34164),o=r(23104),s=r(56347),a=r(205),c=r(57485),l=r(31682),d=r(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const i=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,o=p(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[l,h]=f({queryString:r,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,d.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:i}),g=(()=>{const e=l??x;return u({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,o]),tabValues:o}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function m(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),i=a[r].value;i!==t&&(l(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,i.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function P(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,v.jsx)(m,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function T(e){const n=(0,j.A)();return(0,v.jsx)(P,{...e,children:h(e.children)},String(n))}},6162:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/anoncreds-present-proof-flow-a8216c1bd6cf29d8eff35a4fd22a8212.png"},92152:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/present-proof-flow-9e65dc8e22f237ab37a5394146e75c15.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);