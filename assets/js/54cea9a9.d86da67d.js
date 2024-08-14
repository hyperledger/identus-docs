"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[1612],{58135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(74848),a=t(28453);const o={},s="PRISM Node",r={id:"identus/prism-node",title:"PRISM Node",description:"The PRISM Node acts as a second-layer node for the distributed ledger. It functions as a verifiable data registry, providing a secure and reliable way to store and manage data.",source:"@site/documentation/docs/identus/prism-node.md",sourceDirName:"identus",slug:"/identus/prism-node",permalink:"/identus-docs/docs/identus/prism-node",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},d={},c=[];function l(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"prism-node",children:"PRISM Node"})}),"\n",(0,i.jsxs)(n.p,{children:["The PRISM Node acts as a second-layer node for the distributed ledger. It functions as a ",(0,i.jsx)(n.a,{href:"/docs/concepts/glossary#verifiable-data-registry",children:"verifiable data registry"}),", providing a secure and reliable way to store and manage data."]}),"\n",(0,i.jsx)(n.p,{children:"PRISM Node's primary purpose is to provide a secure and trustworthy platform for storing and managing data on the distributed ledger. By leveraging the blockchain's security and decentralization, the PRISM Node stores and retrieves data in a secure and immutable manner. All operations are independently verified and authenticated using cryptographic signatures and other security measures, so all data is accurate and trustworthy."}),"\n",(0,i.jsxs)(n.p,{children:["The PRISM Node runs alongside a blockchain. It keeps the internal state synchronized with the underlying blockchain and indexed for efficient lookup operations. Furthermore, it implements ",(0,i.jsx)(n.code,{children:"did:prism"})," method in an efficient and scalable way by publishing transactions to the distributed ledger. These transactions support the PRISM Node's protocol and perform the creation, update, resolution, and deactivation of ",(0,i.jsx)(n.a,{href:"/docs/concepts/glossary#decentralized-identifiers",children:"decentralized identifiers (DIDs)"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The PRISM Node generates a transaction with information about the DID operation and verifies and validates the DID operation before publishing it to the blockchain. Once the transaction gets confirmed on the blockchain, the PRISM Node updates its internal state to reflect the changes."}),"\n",(0,i.jsx)(n.p,{children:"The second-layer PRISM Node also plays a critical role in resolving DIDs. Because the PRISM Node keeps the internal state indexed, it allows retrieving information about a particular DID quickly and efficiently without requiring access to the underlying blockchain."}),"\n",(0,i.jsx)(n.p,{children:"Overall, second-layer nodes are essential for the PRISM Node protocol, providing the necessary off-chain processing and data storage capabilities to make DIDs scalable and efficient."}),"\n",(0,i.jsxs)(n.p,{children:["At its core, PRISM depends on protocols defining how to manage decentralized identifiers and ",(0,i.jsx)(n.a,{href:"/docs/concepts/glossary#verifiable-credentials",children:"Verifiable Credentials (VCs)"}),". The PRISM Node is the main component that implements these protocols. First, we should explain how the protocol works to understand what the PRISM Node does."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Any user can run a PRISM Node to self-validate information or rely on a set of actors that run nodes on his behalf. The level of delegation of trust is a decision made by each user."}),"\n",(0,i.jsx)(n.li,{children:"Any user willing to create a DID can do so without any need to interact with any PRISM Node. Creating a DID can be optionally announced publicly by publishing a creation operation on-chain. The action of posting an operation on-chain does require interaction with a PRISM Node."}),"\n",(0,i.jsx)(n.li,{children:"Users can update the DID documents associated with their DIDs. To do this, they must publish respective update operations on-chain by interacting with a PRISM Node."}),"\n",(0,i.jsx)(n.li,{children:"Deactivating a DID can be performed along the same lines as an update by publishing a deactivation operation."}),"\n",(0,i.jsx)(n.li,{children:"PRISM Nodes read the operations published on-chain (by possibly other nodes) and internally maintain the map of DIDs to the history of changes of their associated DID documents."}),"\n",(0,i.jsx)(n.li,{children:"Clients can query any PRISM Node and obtain a DID's historical change log information."}),"\n",(0,i.jsx)(n.li,{children:"DID resolvers can take the output of PRISM Nodes and construct the current DID document associated with a DID."}),"\n",(0,i.jsx)(n.li,{children:"An additional consideration is that operations can be posted on-chain in blocks, helping on the scalability side and general reduction of fees."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, the node provides an interface to track the status of operations submitted to a PRISM Node."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);