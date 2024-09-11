"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[3399],{34482:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(74848),s=i(28453);const o={},r="Mediator",a={id:"identus/mediator",title:"Mediator",description:"Introduction",source:"@site/documentation/docs/identus/mediator.md",sourceDirName:"identus",slug:"/identus/mediator",permalink:"/identus-docs/docs/identus/mediator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Running Node",permalink:"/identus-docs/docs/identus/prism-node/running-node"},next:{title:"Troubleshooting & Considerations",permalink:"/identus-docs/docs/identus/troubleshooting&considerations"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Mediator&#39;s Role in Decentralized Identity Transactions",id:"mediators-role-in-decentralized-identity-transactions",level:2},{value:"Security, Scalability, and Efficiency",id:"security-scalability-and-efficiency",level:2},{value:"Technical Specifications",id:"technical-specifications",level:2},{value:"DIDComm V2 Mediator Test Suite",id:"didcomm-v2-mediator-test-suite",level:2},{value:"Overview",id:"overview",level:3},{value:"Protocols Tested",id:"protocols-tested",level:3},{value:"Future Enhancements in Testing",id:"future-enhancements-in-testing",level:3},{value:"Future Developments",id:"future-developments",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"mediator",children:"Mediator"})}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/concepts/glossary#mediator",children:"Mediators"})," are indispensable in identity wallets, especially when dealing with mobile devices or edge agents. These mobile devices usually lack static IP addresses. They may only sometimes be online, posing a challenge in establishing reliable, direct connections between various parties in a decentralized ecosystem and guaranteeing delivery of ",(0,n.jsx)(t.a,{href:"/docs/concepts/glossary#didcomm",children:"DIDComm"}),' messages. The Mediator functions similarly to an email inbox for the recipient, storing "Forward" messages and their final encrypted content until retrieved by the intended party.']}),"\n",(0,n.jsx)(t.h2,{id:"mediators-role-in-decentralized-identity-transactions",children:"Mediator's Role in Decentralized Identity Transactions"}),"\n",(0,n.jsxs)(t.p,{children:["Within a decentralized identity framework, the Mediator bridges the ",(0,n.jsx)(t.a,{href:"/docs/concepts/glossary#holder",children:"Holder's"})," device and other key players, such as ",(0,n.jsx)(t.a,{href:"/docs/concepts/glossary#issuer",children:"Issuers"})," and ",(0,n.jsx)(t.a,{href:"/docs/concepts/glossary#verifier",children:"Verifiers"}),". For instance, if a Holder wishes to obtain a credential from an Issuer, the Mediator can ",(0,n.jsx)(t.a,{href:"/docs/concepts/glossary#relay",children:"relay"})," or mediate this request, ensuring smooth interaction between both parties. Similarly, when a holder must present a credential to a verifier, the Mediator steps in again to mediate or relay the transaction. By leveraging a Mediator, identity wallets can offer secure and reliable communication between all involved entities. This approach also empowers holders to maintain control over their data and identities."]}),"\n",(0,n.jsx)(t.h2,{id:"security-scalability-and-efficiency",children:"Security, Scalability, and Efficiency"}),"\n",(0,n.jsx)(t.p,{children:"The Mediator is an integral part of Identus, facilitating secure communication without the need for a centralized authority. It seamlessly connects various entities in the Identus ecosystem, including Holders, Issuers, and Verifiers, ensuring the system remains secure, scalable, and efficient."}),"\n",(0,n.jsx)(t.h2,{id:"technical-specifications",children:"Technical Specifications"}),"\n",(0,n.jsxs)(t.p,{children:["The Mediator is an open-source initiative. For more details, you can refer to the ",(0,n.jsx)(t.a,{href:"https://github.com/input-output-hk/atala-prism-mediator",children:"atala-prism-mediator Github repository"}),". The project aims to address the inherent limitations of edge agents, which are not always online, by assuming that the Mediator is perpetually online. Employing DIDComm v2 protocols and cryptographic methods, the Mediator guarantees all exchanged messages' authenticity, integrity, and confidentiality."]}),"\n",(0,n.jsx)(t.h2,{id:"didcomm-v2-mediator-test-suite",children:"DIDComm V2 Mediator Test Suite"}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["We have rigorously evaluated our Mediator protocols using the ",(0,n.jsx)(t.a,{href:"https://github.com/input-output-hk/didcomm-v2-mediator-test-suite/",children:"DIDComm V2 Mediator Test Suite"}),". This test suite scrutinizes the compatibility of mediators with DIDComm V2 protocols, serving as a benchmark for quality and reliability."]}),"\n",(0,n.jsx)(t.h3,{id:"protocols-tested",children:"Protocols Tested"}),"\n",(0,n.jsx)(t.p,{children:"The suite tests a variety of vital protocols, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://didcomm.org/trust-ping/2.0/",children:"Trust Ping 2.0"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://didcomm.org/mediator-coordination/2.0/",children:"Mediator Coordination 2.0"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://didcomm.org/pickup/3.0/",children:"Pickup 3.0"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can consult the ",(0,n.jsx)(t.a,{href:"https://github.com/input-output-hk/didcomm-v2-mediator-test-suite/blob/main/src/test/resources/features",children:"features folder"})," in the test suite repository for an exhaustive list of test scenarios and detailed descriptions."]}),"\n",(0,n.jsx)(t.h3,{id:"future-enhancements-in-testing",children:"Future Enhancements in Testing"}),"\n",(0,n.jsx)(t.p,{children:"As part of our ongoing commitment to improving the Mediator, we plan to make our test sets publicly accessible, allowing users and developers to perform comparative assessments on functionality and performance against other mediators in the market. We aim to continually refine the Mediator's features based on real-world scenarios and demands, ensuring it remains a reliable and robust component in the Identus ecosystem."}),"\n",(0,n.jsx)(t.p,{children:"We are working on enhancing the scope of our testing suite to address limitations and include additional protocols and scenarios. These future updates will make the Mediator even more robust and versatile."}),"\n",(0,n.jsx)(t.p,{children:"The Mediator will continue to develop with the same rigorous testing protocols to ensure it remains at the forefront of secure, efficient, and interoperable decentralized identity management."}),"\n",(0,n.jsx)(t.h2,{id:"future-developments",children:"Future Developments"}),"\n",(0,n.jsx)(t.p,{children:"Looking ahead, we are committed to the ongoing development of the Mediator, with plans to expand its feature set and integrate new protocols. Real-world use cases drive these updates to achieve feature completeness. Additionally, we aim to keep the Mediator at the forefront of industry developments, ensuring it remains aligned with emerging protocols and technological advancements."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);