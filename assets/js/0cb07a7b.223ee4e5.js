"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[4537],{86851:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(74848),s=i(28453);const o={},t="Handle errors in background jobs by storing on state records and sending via webhooks",a={id:"decisions/2024-03-07-handle-errors-in-bg-jobs-by-storing-on-state-records-and-sending-via-webhooks",title:"Handle errors in background jobs by storing on state records and sending via webhooks",description:"- Status: accepted",source:"@site/documentation/adrs/decisions/2024-03-07-handle-errors-in-bg-jobs-by-storing-on-state-records-and-sending-via-webhooks.md",sourceDirName:"decisions",slug:"/decisions/2024-03-07-handle-errors-in-bg-jobs-by-storing-on-state-records-and-sending-via-webhooks",permalink:"/identus-docs/adrs/decisions/2024-03-07-handle-errors-in-bg-jobs-by-storing-on-state-records-and-sending-via-webhooks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"adrsSidebar",previous:{title:"Use ZIO Failures and Defects Effectively",permalink:"/identus-docs/adrs/decisions/2024-01-16-use-zio-failures-and-defects-effectively"},next:{title:"Storage for SSI related resources",permalink:"/identus-docs/adrs/decisions/2024-05-20-use-did-urls-to-reference-resources"}},l={},d=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Implementation Strategy",id:"implementation-strategy",level:3},{value:"Positive Consequences",id:"positive-consequences",level:3},{value:"Negative Consequences",id:"negative-consequences",level:3},{value:"Storing error information in database records",id:"storing-error-information-in-database-records",level:3},{value:"Creating a central registry of errors",id:"creating-a-central-registry-of-errors",level:3},{value:"Using existing webhook system to send errors to clients",id:"using-existing-webhook-system-to-send-errors-to-clients",level:3},{value:"Implementing event-driven error notifications",id:"implementing-event-driven-error-notifications",level:3},{value:"Links",id:"links",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"handle-errors-in-background-jobs-by-storing-on-state-records-and-sending-via-webhooks",children:"Handle errors in background jobs by storing on state records and sending via webhooks"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Status: accepted"}),"\n",(0,r.jsx)(n.li,{children:"Deciders: David Poltorak, Yurii Shynbuiev, Benjamin Voiturier, Fabio Pinheiro"}),"\n",(0,r.jsx)(n.li,{children:"Date: 2024-03-07"}),"\n",(0,r.jsx)(n.li,{children:"Tags: error handling, background jobs, DIDComm, messaging"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,r.jsx)(n.p,{children:"In our system, background jobs play a crucial role in handling tasks such as processing DIDComm messages for establishing connections between agents. Currently, if an error occurs in a background job, the original caller is not notified of this error, leading to potential issues in tracking and managing the state of operations. If a ZIO Failure is encountered, a serialised version of the error (string) is stored in the database along the background job record, however, this attribute is not available on the API when checking the status of an operation."}),"\n",(0,r.jsx)(n.p,{children:"While the DIDComm Error Reporting protocol effectively handles errors in peer-to-peer communications between agents, our system lacks a robust mechanism for notifying clients of errors occurring in background jobs. This gap in error handling affects transparency and the ability to respond to issues promptly. How can we ensure clients are effectively notified of errors in background jobs, especially when such errors cannot be communicated via DIDComm Error Reporting?"}),"\n",(0,r.jsx)(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Transparency and traceability of errors"}),"\n",(0,r.jsx)(n.li,{children:"System reliability and robust error handling, reliability of background job processing"}),"\n",(0,r.jsx)(n.li,{children:"Minimising the impact of errors on user experience"}),"\n",(0,r.jsx)(n.li,{children:"Complementing the DIDComm Error Reporting protocol"}),"\n",(0,r.jsx)(n.li,{children:"Future scalability is not hampered by the solution we put in place"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"considered-options",children:"Considered Options"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Storing error information in database records"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Storing in RFC 9457 Problem Details for HTTP APIs format"}),"\n",(0,r.jsx)(n.li,{children:"Storing in proprietary format"}),"\n",(0,r.jsx)(n.li,{children:"Storing as ZIO.Failure string (as is)"}),"\n",(0,r.jsx)(n.li,{children:"Enhancing the API to return this attribute of the record when checking the status of an operation"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Creating a central registry of errors"}),"\n",(0,r.jsx)(n.li,{children:"Using existing webhook system to send errors to clients"}),"\n",(0,r.jsx)(n.li,{children:"Implementing event-driven error notifications"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"decision-outcome",children:"Decision Outcome"}),"\n",(0,r.jsx)(n.p,{children:"Chosen Option: Combined 1 and 3"}),"\n",(0,r.jsx)(n.p,{children:"We have opted for enhanced error handling by storing error details on background job records in the RFC 9457 Problem Details for HTTP APIs format and leveraging webhooks for error notifications. This approach is selected because it aligns with our objectives of enhancing system reliability and error handling for background jobs. It provides a transparent mechanism for users to be informed about errors and leverages the existing webhook system, thereby avoiding the introduction of unnecessary complexity through event-driven architecture or a central registry."}),"\n",(0,r.jsx)(n.h3,{id:"implementation-strategy",children:"Implementation Strategy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Storing Error Information on Job Records: We will serialise error details into a JSON object that adheres to the RFC 9457 structure and store this information in a dedicated field within the background job records. This method is intended to enhance the visibility of errors and assist in the debugging process."}),"\n",(0,r.jsx)(n.li,{children:"Include error attribute in API responses: We will ensure that the error object is returned on any object which represents the state of a background job (Connection, Issuance or Present Proof)"}),"\n",(0,r.jsx)(n.li,{children:"Webhook Notifications: Our strategy includes making use of the existing webhook system to notify clients of errors in real-time. This utilisation ensures that clients are promptly informed of any issues, enhancing the overall user experience and system responsiveness to error conditions."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"positive-consequences",children:"Positive Consequences"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clients receive immediate, standardised notifications of errors, improving transparency."}),"\n",(0,r.jsx)(n.li,{children:"Error details are systematically logged, enhancing system monitoring and debugging capabilities."}),"\n",(0,r.jsx)(n.li,{children:"The approach scales well with system growth and can adapt to future requirements for error handling."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Error messages logged on records will be secured by the active WalletContext"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"negative-consequences",children:"Negative Consequences"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No central place to access error instances as per RFC 9457 specification."}),"\n",(0,r.jsx)(n.li,{children:"Clients will need to manage potential unknown failures of webhook calls to their system (from agent to client) as webhook events are not persisted."}),"\n",(0,r.jsx)(n.li,{children:"Error information will need to be made available when retrieving background job processing records through the operation API that generated them."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"storing-error-information-in-database-records",children:"Storing error information in database records"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Good, because it provides a persistent record of errors."}),"\n",(0,r.jsx)(n.li,{children:"Good, RFC 9457 Problem Details for HTTP APIs format, as it provides a standardised way to represent errors."}),"\n",(0,r.jsx)(n.li,{children:"Bad, proprietary format, as it requires converting to RFC 9457 to be sent to the user."}),"\n",(0,r.jsx)(n.li,{children:"Bad, because it requires manual checking and doesn't proactively notify interested parties."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-central-registry-of-errors",children:"Creating a central registry of errors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Good, because it centralises error management."}),"\n",(0,r.jsx)(n.li,{children:"Bad, because it can become a bottleneck and still lacks proactive notification."}),"\n",(0,r.jsx)(n.li,{children:"Bad, because it carries a lot of complexity that may not get used as data can be made available on other RESTFul APIs in a more cohesive way (such as retrieving a connection record can include the errors about creating that connection)."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"using-existing-webhook-system-to-send-errors-to-clients",children:"Using existing webhook system to send errors to clients"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Good, because it leverages existing implementation and communication channels to send events."}),"\n",(0,r.jsx)(n.li,{children:"Bad, because it is limited by the existing system (events not persisted)."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"implementing-event-driven-error-notifications",children:"Implementing event-driven error notifications"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Good, because it provides real-time, scalable notifications."}),"\n",(0,r.jsx)(n.li,{children:"Bad, because it requires the setup and management of an event-driven system."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://identity.foundation/didcomm-messaging/spec/",children:"DIDComm Messaging Specification"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var r=i(96540);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);