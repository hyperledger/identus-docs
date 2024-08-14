"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[8133],{42287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(74848),s=n(28453);const i={},r="Secret Storage Flows",o={id:"secrets/sequence-diagrams",title:"Secret Storage Flows",description:"Status: draft",source:"@site/identus-cloud-agent/docs/docusaurus/secrets/sequence-diagrams.md",sourceDirName:"secrets",slug:"/secrets/sequence-diagrams",permalink:"/identus-docs/tutorials/secrets/sequence-diagrams",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Phase #1: Basic Flow for Secret Management",id:"phase-1-basic-flow-for-secret-management",level:3},{value:"Phase #2: Single Tenant Flow for Secret Management",id:"phase-2-single-tenant-flow-for-secret-management",level:3},{value:"Phase #3: Single Tenant Flow for Secret Management with Wallet",id:"phase-3-single-tenant-flow-for-secret-management-with-wallet",level:3},{value:"Phase #4: Multi Tenant Flow for Secret Management",id:"phase-4-multi-tenant-flow-for-secret-management",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"secret-storage-flows",children:"Secret Storage Flows"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Status"}),": draft"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Date"}),": 2021-06-02"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"NOTE"}),": this document is a draft and is not implemented yet. Statement in this document might be changed in the future."]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"The current document describes the sequence diagrams of the Identus Platform components: APISIX, Cloud Agent, Wallet, Vault, Tenant.\nThe diagrams are stated from the simplest scenarios to the more complex ones to enforce the security and privacy of the data."}),"\n",(0,a.jsx)(t.h2,{id:"sequence-diagrams",children:"Sequence Diagrams"}),"\n",(0,a.jsx)(t.h3,{id:"phase-1-basic-flow-for-secret-management",children:"Phase #1: Basic Flow for Secret Management"}),"\n",(0,a.jsx)(t.p,{children:"This diagram describes the basic flow for the secret management."}),"\n",(0,a.jsxs)(t.p,{children:["Goal : the Agent stores the secrets using the ",(0,a.jsx)(t.code,{children:"root"})," token to access the Vault service"]}),"\n",(0,a.jsx)(t.p,{children:"Context:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Tenant uses the access token to access the REST API via APISIX."}),"\n",(0,a.jsx)(t.li,{children:"The Agent uses root Vault token to communicate with the Vault."}),"\n",(0,a.jsx)(t.li,{children:"Tenant represented by any REST API client, Web or Mobile application."}),"\n"]}),"\n",(0,a.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor User\n    User ->> Application: run\n    Application->>+APISIX: Agent REST API request + API token\n    loop\n        APISIX->>APISIX: validate API token\n    end\n    APISIX->>+Agent: Agent REST API request\n    activate Agent\n    loop Manage Secrets\n        Agent->>+Vault: Vault REST API request\n        Vault->>+Agent: Vault REST API response\n    end\n    Agent->>+Agent: Execute Business Logic\n    Agent->>+APISIX: Agent REST API response\n    deactivate Agent\n    APISIX->>+Application: Agent REST API response\n    Application->>+ User: react"}),"\n",(0,a.jsx)(t.h3,{id:"phase-2-single-tenant-flow-for-secret-management",children:"Phase #2: Single Tenant Flow for Secret Management"}),"\n",(0,a.jsx)(t.p,{children:"This diagram describes the flow for the secret management for the single tenant."}),"\n",(0,a.jsx)(t.p,{children:"Goal: AppRole authentication method is used to authenticate the Agent to the Vault service."}),"\n",(0,a.jsx)(t.p,{children:"Context:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The Agent is authenticated to the Vault using the AppRole authentication method."}),"\n",(0,a.jsx)(t.li,{children:"Tenant uses the access token to access the REST API via APISIX."}),"\n",(0,a.jsx)(t.li,{children:"Tenant represented by any REST API client, Web or Mobile application."}),"\n"]}),"\n",(0,a.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor User\n    User ->> Application: run\n    Application->>+APISIX: Agent REST API request + API token\n    loop\n        APISIX->>APISIX: validate API token\n    end\n    APISIX->>+Agent: Agent REST API request\n    activate Agent\n    loop Authentication\n        Agent->>+Vault: Get auth token\n        Vault->>+Agent: Return auth token\n    end\n    loop Manage Secrets\n        Agent->>+Vault: Vault REST API request\n        Vault->>+Agent: Vault REST API response\n    end\n    Agent->>+Agent: Execute Business Logic\n    Agent->>+APISIX: Agent REST API response\n    deactivate Agent\n    APISIX->>+Application: Agent REST API response\n    Application->>+ User: react"}),"\n",(0,a.jsx)(t.h3,{id:"phase-3-single-tenant-flow-for-secret-management-with-wallet",children:"Phase #3: Single Tenant Flow for Secret Management with Wallet"}),"\n",(0,a.jsx)(t.p,{children:"This diagram describes the flow for the secret management for the single tenant with the Wallet."}),"\n",(0,a.jsx)(t.p,{children:"Goal: Tenant uses JWT token to authenticate to the Identus Platform."}),"\n",(0,a.jsx)(t.p,{children:"Context:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The Agent is authenticated to the Vault using the AppRole authentication method."}),"\n",(0,a.jsxs)(t.li,{children:["Tenant uses the access token to access the REST API via APISIX (probably this might be removed, we need to decide what to do with the ",(0,a.jsx)(t.code,{children:"api-token"}),")"]}),"\n",(0,a.jsx)(t.li,{children:"Tenant represented by any REST API client, Web or Mobile application authenticated to the Identus Platform using JWT token."}),"\n",(0,a.jsx)(t.li,{children:"Tenant uses the Wallet to communicate with the Vault"}),"\n"]}),"\n",(0,a.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant User\n    participant Application\n    participant APISIX\n    participant Agent\n    participant Wallet\n    participant Agent\n    participant Wallet\n    participant Vault\n    actor User\n\n    User->>+Application: run\n    loop Authentication\n        Application ->> APISIX: get jwt-token\n        APISIX ->> Vault: get jwt-token\n        Vault ->> APISIX: jwt-token\n        APISIX ->> Application: jwt-token\n    end\n    Application->>+APISIX: REST API + api-token + jwt-token\n    loop\n        APISIX->>APISIX: validate api-token\n    end\n    APISIX->>+Agent: Agent REST API request + jwt-token\n    Agent ->>+ Wallet: handle request\n    loop Manage Secrets\n        Wallet->>+Vault: Vault REST API request\n        Vault->>+Wallet: Vault REST API response\n        Wallet->>+Wallet: Execute Business Logic\n    end\n    Wallet ->>+ Agent: response\n    Agent ->>+ APISIX: Agent REST API response\n    APISIX ->>+ Application: Agent REST API response\n    Application ->>+ User: react"}),"\n",(0,a.jsx)(t.h3,{id:"phase-4-multi-tenant-flow-for-secret-management",children:"Phase #4: Multi Tenant Flow for Secret Management"}),"\n",(0,a.jsx)(t.p,{children:"This diagram describes the flow for the secret management for the multi tenant."}),"\n",(0,a.jsx)(t.p,{children:"//TBD"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);