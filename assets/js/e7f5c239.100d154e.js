"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[5075],{16334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=t(74848),i=t(28453);const r={},s="DID management",d={id:"identus/cloud-agent/did-management",title:"DID management",description:"Managed PRISM DID",source:"@site/documentation/docs/identus/cloud-agent/did-management.md",sourceDirName:"identus/cloud-agent",slug:"/identus/cloud-agent/did-management",permalink:"/identus-docs/docs/identus/cloud-agent/did-management",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Authentication and Authorisation",permalink:"/identus-docs/docs/identus/cloud-agent/authentication"},next:{title:"Secrets Storage",permalink:"/identus-docs/docs/identus/cloud-agent/secrets-storage"}},o={},c=[{value:"Managed PRISM DID",id:"managed-prism-did",level:2},{value:"Managed Peer DID",id:"managed-peer-did",level:2},{value:"Storing key material",id:"storing-key-material",level:2},{value:"PRISM DID",id:"prism-did",level:3},{value:"Peer DID",id:"peer-did",level:3}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"did-management",children:"DID management"}),"\n",(0,a.jsx)(n.h2,{id:"managed-prism-did",children:"Managed PRISM DID"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/docs/concepts/glossary#cloud-agent",children:"Cloud Agent"})," simplifies identity management by effectively handling PRISM ",(0,a.jsx)(n.a,{href:"/docs/concepts/glossary#decentralized-identifier",children:"DIDs"})," for users. Relying on a Cloud Agent-managed DID, users entrust the Cloud Agent with tasks such as creating, updating, storing, and using the PRISM DID."]}),"\n",(0,a.jsx)(n.p,{children:"The Cloud Agent employs hierarchical deterministic key derivation to manage the keys of the PRISM DID. The Cloud Agent calculates and stores the derivation path whenever an activity involves new key information, such as creating a new DID or adding a new key. It internally tracks the DID counter and key counter to increment the derivation path accordingly. Details about the Cloud Agent constructs key material from the seed are on the HD-key derivation decision record."}),"\n",(0,a.jsx)(n.h2,{id:"managed-peer-did",children:"Managed Peer DID"}),"\n",(0,a.jsxs)(n.p,{children:["The Cloud Agent also manages ",(0,a.jsx)(n.a,{href:"/docs/concepts/glossary#peer-did",children:"Peer DIDs"})," for ",(0,a.jsx)(n.a,{href:"/docs/concepts/glossary#didcomm",children:"DIDComm"})," activities. The Key materials for Peer DIDs are randomly generated and stored securely in ",(0,a.jsx)(n.a,{href:"/docs/concepts/glossary#secrets-storage",children:"secret storage"}),", allowing control of the Peer DID."]}),"\n",(0,a.jsx)(n.h2,{id:"storing-key-material",children:"Storing key material"}),"\n",(0,a.jsx)(n.h3,{id:"prism-did",children:"PRISM DID"}),"\n",(0,a.jsx)(n.p,{children:"PRISM DID management involves deriving key materials from a seed and derivation path. A corresponding derivation path is generated and stored in the database when creating a new DID or updating a new key. Only the derivation path, not the key material itself, is stored. The Cloud Agent can reconstruct and use key materials for PRISM DIDs by combining the stored derivation path with the provided seed at runtime."}),"\n",(0,a.jsx)(n.p,{children:"The Cloud Agent itself does not store the wallet seed. However, the infrastructure hosting the Cloud Agent may choose to keep it based on operation requirements and security considerations."}),"\n",(0,a.jsx)(n.h3,{id:"peer-did",children:"Peer DID"}),"\n",(0,a.jsx)(n.p,{children:"The Cloud Agent securely stores the key materials of peer DIDs using secret storage."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);