"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[1022],{38618:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var t=i(74848),r=i(28453);const n={},o="Storage for SSI related resources",a={id:"decisions/2024-05-20-use-did-urls-to-reference-resources",title:"Storage for SSI related resources",description:"- Status: accepted",source:"@site/documentation/adrs/decisions/2024-05-20-use-did-urls-to-reference-resources.md",sourceDirName:"decisions",slug:"/decisions/2024-05-20-use-did-urls-to-reference-resources",permalink:"/identus-docs/adrs/decisions/2024-05-20-use-did-urls-to-reference-resources",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"adrsSidebar",previous:{title:"Handle errors in background jobs by storing on state records and sending via webhooks",permalink:"/identus-docs/adrs/decisions/2024-03-07-handle-errors-in-bg-jobs-by-storing-on-state-records-and-sending-via-webhooks"}},c={},d=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Positive Consequences",id:"positive-consequences",level:3},{value:"Negative Consequences",id:"negative-consequences",level:3},{value:"Links",id:"links",level:2}];function l(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"storage-for-ssi-related-resources",children:"Storage for SSI related resources"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Status: accepted"}),"\n",(0,t.jsx)(s.li,{children:"Deciders: Javi, Ben, Yurii"}),"\n",(0,t.jsx)(s.li,{children:"Date: 2024-05-20"}),"\n",(0,t.jsx)(s.li,{children:"Tags: Verifiable Data Registry (VDR), decentralized storage"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,t.jsx)(s.p,{children:"The main question to answer is: What is the most practical way to store resources related to VC verification and revocation?"}),"\n",(0,t.jsx)(s.p,{children:"In the context of SSI, there are resources such as credential definitions, schemas, revocation lists, etc., that are referenced inside VCs. These resources need to be accessible to different parties in order to verifiy the credentials. In this ADR, we discuss the trade-offs of different storage alternatives."}),"\n",(0,t.jsx)(s.h2,{id:"decision-drivers",children:"Decision Drivers"}),"\n",(0,t.jsx)(s.p,{children:"A desired solution should balance"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Methods for data integrity and authenticity validation: For instance, if we are referring to a credential definition, the user retrieving the resource should be able to validate that the resource hasn't been altered since its creation. In the case of more dynamic resources, such as revocation lists, which are actually updated throughout time, the recipient party would need to validate that the resource was created by the issuer."}),"\n",(0,t.jsx)(s.li,{children:"Data availability: It is important for resources to be highly available. If a resource is missing, it can lead to an inability to validate a VC."}),"\n",(0,t.jsx)(s.li,{children:"Decentralization: There must be a consideration to avoid innecesary central points of failure"}),"\n",(0,t.jsx)(s.li,{children:"Historical data requests: Some use cases may require support for querying historical data. For example, retreive a revocation list at certain point in the past."}),"\n",(0,t.jsx)(s.li,{children:"Write access control: Most generally issuers (as they create most of the resources), require to have control of the data they store in order to be able to update it when needed, and also to avoid third parties to make un-authorized changes."}),"\n",(0,t.jsx)(s.li,{children:"Latency, throughput, deployment costs: Any solution should provide a reasonable balance of non functional requirements, such as achieving enough throughput, or having low enough latency for the system to be practical."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"considered-options",children:"Considered Options"}),"\n",(0,t.jsx)(s.p,{children:"We considered the following alternatives, which contemplate the approaches currently discussed by the broad SSI ecosystem at the time of this writing."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"URLs and traditional HTTP servers: with no surprises, in this approach, each resource is identified with a URL and stored in traditional servers. The URLs will encode hashes as query parameters to enforce integrity for static resources. Dynamic resources will be signed by the resource creator's key."}),"\n",(0,t.jsx)(s.li,{children:"DID URLs and traditional HTTP servers: in this variation, resources are still stored in servers. Resources are identified by DID URLs that dereference services of the associated DID document. The services will contain the final URL to retrieve the corresponding resources. Once again, hashes will be associated to static resources as DID URL query parameters, while dynamic resources will be signed adequately."}),"\n",(0,t.jsx)(s.li,{children:"IPFS: An IPFS approach would be useful for storing static resources using IPFS identifiers for them. Dynamic resources however become more challenges. Even though we recognize the existence of constructions like IPNS or other layers to manage dynamic resources, we find them less secure in terms of availability and consistency guarantees."}),"\n",(0,t.jsx)(s.li,{children:"Ledger based storage (Cardano in particular): In this approach, resources would be stored in transactions' metadata posted on-chain. The data availability and integrity can be inherited from the underlying ledger."}),"\n",(0,t.jsx)(s.li,{children:"A combination of previous methods and the use of a ledger: Similar as above, data references are posted on-chain, but the actual resources are stores in servers. The servers could be traditional HTTP servers or IPFS nodes."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"decision-outcome",children:"Decision Outcome"}),"\n",(0,t.jsx)(s.p,{children:"After a careful analysis we concluded the following points:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'There is an architectural need to develop a "proxy" component, a.k.a. VDR proxy, that would work as a first phase for resource resolution. Behind the VDR proxy, different storage implementations could be added as extensions'}),"\n",(0,t.jsxs)(s.li,{children:["With respect to specific implementations","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"ledger based storage at this stage introduces latency, throughput bottlenecks, costs and other issues not suitable for most use cases."}),"\n",(0,t.jsx)(s.li,{children:"Hybrid solutions that make use of a ledger share similar drawbacks."}),"\n",(0,t.jsx)(s.li,{children:"Decentralized Hash Tables (such as IPFS) do not provide efficient handling for dynamic resources (such as revocation lists)."}),"\n",(0,t.jsx)(s.li,{children:"We concluded that a reasonable first iteration could be delivered using DID URLs to identify resources while they would be, a priori, stored in traditional HTTP servers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"positive-consequences",children:"Positive Consequences"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The implementation of a VDR proxy enables a transparent abstraction that allows to extend the possible methods to retrieve resources."}),"\n",(0,t.jsx)(s.li,{children:"DID URLs allow for a fair decentralization level at issuer's disposal to control the location of resources"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"negative-consequences",children:"Negative Consequences"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"There is a level of under-specification at W3C specifications with respect to DID URL dereferencing. This forces us to define the under-specificied behaviour or simply creata-our-own solution."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,t.jsx)(s.p,{children:"We leave a list of useful links for context"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://hyperledger.github.io/anoncreds-methods-registry/",children:"AnonCreds Methods Registry"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://hyperledger.github.io/anoncreds-spec/",children:"AnonCreds Specification"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://w3c-ccg.github.io/did-resolution/",children:"W3C DID resolution algorithm"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var t=i(96540);const r={},n=t.createContext(r);function o(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);