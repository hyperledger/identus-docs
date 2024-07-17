"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[8794],{55475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(74848),i=t(28453);const r={},o="Identus TypeScript SDK",a={id:"sdk/README",title:"README",description:"@atala/prism-wallet-sdk / Exports",source:"@site/identus-edge-agent-sdk-ts/docs/sdk/README.md",sourceDirName:"sdk",slug:"/sdk/",permalink:"/identus-docs/identus-edge-agent-sdk-ts/sdk/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",next:{title:"Identus Edge SDK TS Examples",permalink:"/identus-docs/identus-edge-agent-sdk-ts/examples/"}},d={},l=[{value:"SDK Overview",id:"sdk-overview",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Use in your project",id:"use-in-your-project",level:3},{value:"Running a demo project",id:"running-a-demo-project",level:3},{value:"Building from source",id:"building-from-source",level:4},{value:"Running the sample applications",id:"running-the-sample-applications",level:3},{value:"Implementing storage for the SDK",id:"implementing-storage-for-the-sdk",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["@atala/prism-wallet-sdk / ",(0,s.jsx)(n.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/modules",children:"Exports"})]}),"\n",(0,s.jsx)(n.h1,{id:"identus-typescript-sdk",children:"Identus TypeScript SDK"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://coveralls.io/github/input-output-hk/atala-prism-wallet-sdk-ts?branch=master",children:(0,s.jsx)(n.img,{src:"https://coveralls.io/repos/github/input-output-hk/atala-prism-wallet-sdk-ts/badge.svg?branch=master",alt:"Coverage Status"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Identus is a self-sovereign identity (SSI) platform and service suite for\nverifiable data and digital identity. Built on Cardano, as a distributed ledger,\nit offers core infrastructure for issuing DIDs (Decentralized identifiers) and\nverifiable credentials, alongside tools and frameworks to help expand your ecosystem.\nThe complete platform is separated into multiple repositories:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/hyperledger/identus-cloud-agent",children:"Cloud Agent"})," - Repo that contains the Cloud Agent that provides self-sovereign identity services to build products and solutions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/atala-prism-mediator",children:"Mediator"})," - Repo for the DIDComm V2 Mediator."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts",children:"Edge Agent SDK TS"})," - Repo for the Typescript version of the SDK."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-swift",children:"Edge Agent SDK Swift"})," - Repo for the Swift version of the SDK."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-kmm",children:"Edge Agent SDK KMP"})," - Repo for the Kotlin Multi-Platform version of the SDK."]}),"\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sdk-overview",children:"SDK Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apollo: Provides a suite of necessary cryptographic operations."}),"\n",(0,s.jsx)(n.li,{children:"Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers."}),"\n",(0,s.jsxs)(n.li,{children:["Pollux: Provides a suite of operations for handling ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/atala-prism-docs/blob/master/documentation/docs/concepts/glossary.md#verifiable-credentials",children:"verifiable credentials"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Mercury: Provides a suite of operations for handling DIDComm V2 messages."}),"\n",(0,s.jsx)(n.li,{children:"Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner."}),"\n",(0,s.jsx)(n.li,{children:"Agent: A component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsxs)(n.p,{children:["This repository includes a browser and a Node.js demo application, and also a step-by-step documented process on ",(0,s.jsx)(n.a,{href:"#running-a-demo-project",children:"how to run it"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"use-in-your-project",children:"Use in your project"}),"\n",(0,s.jsx)(n.p,{children:"You can install and use this library in browsers and nodejs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i @atala/prism-wallet-sdk --save\n"})}),"\n",(0,s.jsx)(n.p,{children:"or with yarn"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @atala/prism-wallet-sdk\n"})}),"\n",(0,s.jsx)(n.h3,{id:"running-a-demo-project",children:"Running a demo project"}),"\n",(0,s.jsx)(n.h4,{id:"building-from-source",children:"Building from source"}),"\n",(0,s.jsx)(n.p,{children:"This repository contains compiles typescript code and some rust dependencies for DIDComm and AnonCreds, so in order to build the code from source you will need the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bash"}),"\n",(0,s.jsxs)(n.li,{children:["Have Rust (",(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",children:"cargo"}),") and ",(0,s.jsx)(n.a,{href:"https://rustwasm.github.io/wasm-pack/installer/",children:"wasm-pack"})," installed."]}),"\n",(0,s.jsx)(n.li,{children:"Node JS Version (20/LTS Recommended)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Clone the repository"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone git@github.com:input-output-hk/atala-prism-wallet-sdk-ts.git --recruse-submodules\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To be able to run the demos, we have to build ",(0,s.jsx)(n.code,{children:"prism-wallet-sdk"}),".\nFrom the repository root run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i\nnpm run build\n"})}),"\n",(0,s.jsx)(n.h3,{id:"running-the-sample-applications",children:"Running the sample applications"}),"\n",(0,s.jsx)(n.p,{children:"We have enabled sample implementations for browsers (React or Next.js) and Node.js.\nTo run each demo, ensure the whole SDK builds from the source, then cd into the demo."}),"\n",(0,s.jsx)(n.p,{children:"Nodejs CommonJS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd demos/node-cjs\nnpm i\nnpm run start\n"})}),"\n",(0,s.jsx)(n.p,{children:"Nodejs Module"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd demos/node-esm\nnpm i\nnpm run start\n"})}),"\n",(0,s.jsx)(n.p,{children:"Browser NextJS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd demos/next\nnpm i\nnpm run build # becuase Error: ENOENT: no such file or directory, open '/.../atala-prism-wallet-sdk-ts/demos/next/.next/BUILD_ID']\nnpm run start\n"})}),"\n",(0,s.jsx)(n.h3,{id:"implementing-storage-for-the-sdk",children:"Implementing storage for the SDK"}),"\n",(0,s.jsx)(n.p,{children:"This SDK exposes Pluto, a storage interface that should be implemented by the user, in the most appropriate way for a particular use case."}),"\n",(0,s.jsx)(n.p,{children:"We don't provide a default implementation out of the box at the moment, but we do provide a couple of demo implementations that can be used to get started with demos and testing."}),"\n",(0,s.jsxs)(n.p,{children:["Provided demo implementations are intentionally oversimplified and ",(0,s.jsx)(n.strong,{children:"should not"})," be used in production."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);