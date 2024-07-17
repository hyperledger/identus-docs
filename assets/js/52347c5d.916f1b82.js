"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[5606],{57859:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(74848),s=i(28453);const r={},l="Cross-Platform Edge SDK Verification",a={id:"examples/SDKVerification",title:"Cross-Platform Edge SDK Verification",description:"Requirements",source:"@site/identus-edge-agent-sdk-ts/docs/examples/SDKVerification.md",sourceDirName:"examples",slug:"/examples/SDKVerification",permalink:"/identus-docs/identus-edge-agent-sdk-ts/examples/SDKVerification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Identus Edge SDK TS Examples",permalink:"/identus-docs/identus-edge-agent-sdk-ts/examples/"},next:{title:"modules",permalink:"/identus-docs/identus-edge-agent-sdk-ts/sdk/modules"}},o={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Specification",id:"specification",level:2},{value:"Flow",id:"flow",level:2},{value:"Code Reference",id:"code-reference",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cross-platform-edge-sdk-verification",children:"Cross-Platform Edge SDK Verification"}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"A working Identus Mediator and an Identus Cloud Agent."}),"\n",(0,t.jsxs)(n.li,{children:["A holder who already has a JWT Credential issued by a known issuer (prism",":did",") [Holder A]"]}),"\n",(0,t.jsx)(n.li,{children:"A holder who does not have credentials but aims to start the Verification [Holder B (verifier)]"}),"\n",(0,t.jsx)(n.li,{children:"Holder A shares its peerDID with holder B."}),"\n",(0,t.jsx)(n.li,{children:"Holder B will initiate a presentation request"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"NOTE:"}),"\n",(0,t.jsxs)(n.p,{children:["Please follow the ",(0,t.jsx)(n.a,{href:"../../docs/quick-start",children:"Quick started guide"})," to complete steps 1, 2, 3"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["NOTE:\nIt follows the ",(0,t.jsx)(n.a,{href:"https://identity.foundation/presentation-exchange/spec/v2.0.0/#input-descriptor",children:"Identity Foundation Presentation-exchange V2 protocol"})]}),"\n",(0,t.jsx)(n.p,{children:"Claims can be"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export type PredicateType = string | number\nexport type InputFieldFilter = {\n  type: string,\n  pattern?: string,\n  enum?: PredicateType[],\n  const?: PredicateType[],\n  value?: PredicateType\n}\nexport type Claims = {\n [name: string]: InputFieldFilter\n}\n"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"flow",children:"Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Holder B Initiates the Presentation Request: creating a PresentationDefinitionRequest with specified requirements."}),"\n",(0,t.jsx)(n.li,{children:"Holder A, will then create a Presentation Submission which contains the requested credential together with a randomised challenge."}),"\n",(0,t.jsxs)(n.li,{children:["Holder B, will receive the Presentation Submission and verify the following","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Holder A signed the JWT presentation with the correct signatures."}),"\n",(0,t.jsx)(n.li,{children:"Holder A signed the random challenge that required him to have the correct keys."}),"\n",(0,t.jsx)(n.li,{children:"Holder A is including a credentials it owns and not somebody else's."}),"\n",(0,t.jsx)(n.li,{children:"Holder A is includes a credential with valid signatures, matching the issuer through the specified DID."}),"\n",(0,t.jsx)(n.li,{children:"(optional) Holder A has included a credential that the requested issuer has issued."}),"\n",(0,t.jsx)(n.li,{children:"(optional) Holder A has included a credential that satisfies the requested claims."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Holder B can then verify at any point in time that presentation request and show feedback in UI."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"code-reference",children:"Code Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"toDID is the peer did of holder A, which has the credential that we aim to verify"}),"\n",(0,t.jsx)(n.li,{children:"claims contain an object with all the claims we aim to validate; setting claims is internally used to help Holder A choose the proper credential and correctly verify the fields when Holder B receives the presentation."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const claims: Claims = {\n    email: {\n        type: 'string', pattern:'email@email.com'\n    }\n}\nconst options:PresentationClaims = { \n    issuer: Domain.DID.fromString(\"did:peer:12345\"),\n    claims: claims\n}\n\nagent.initiatePresentationRequest(\n    Domain.CredentialType.JWT,\n    toDID,\n    options\n);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Edge Agent Verifier (SDK) will then send the Presentation Request to the desired holder"}),"\n",(0,t.jsx)(n.li,{children:"The Edge Agent Holder will be asked to choose what credential wants to be used for that Presentation Request"}),"\n",(0,t.jsx)(n.li,{children:"The Edge Agent Verifier (SDK) will then receive and validate the Credential as follows"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"//Presentation is the message sent by the holder back to the verifier\nconst message = SDK.Presentation.fromMessage(message);\nagent.handlePresentation(message)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);