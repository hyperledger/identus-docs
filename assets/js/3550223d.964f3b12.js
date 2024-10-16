"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[5377],{89902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(74848),s=t(28453);const i={},a="Edge SDK Connectionless Credential Offer",o={id:"examples/OIDC",title:"Edge SDK Connectionless Credential Offer",description:"Flow",source:"@site/identus-edge-agent-sdk-ts/docs/examples/OIDC.md",sourceDirName:"examples",slug:"/examples/OIDC",permalink:"/identus-docs/identus-edge-agent-sdk-ts/examples/OIDC",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Backup",permalink:"/identus-docs/identus-edge-agent-sdk-ts/examples/Backup"},next:{title:"Verification",permalink:"/identus-docs/identus-edge-agent-sdk-ts/examples/SDKVerification"}},d={},l=[{value:"Flow",id:"flow",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"edge-sdk-connectionless-credential-offer",children:"Edge SDK Connectionless Credential Offer"}),"\n",(0,r.jsx)(n.h2,{id:"flow",children:"Flow"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Obtain a Connectionless Credential Offer from an Issuer."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A Credential Offer should be a URI with a single query parameter ",(0,r.jsx)(n.code,{children:"credential_offer"}),", which is an encoded JSON.\nIt should look similar to:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"openid-credential-offer://?credential_offer=%7B%22credential_issuer%22%3A%22http%3A%2F%2Flocalhost%3A8090%2Foid4vci%2Fissuers%2F59104e60-3bf1-4e38-be58-4a219acf561b%22%2C%22credential_configuration_ids%22%3A%5B%22Example%22%5D%2C%22grants%22%3A%7B%22authorization_code%22%3A%7B%22issuer_state%22%3A%22aa10127f-c27e-4130-a0ed-659e3e1ad6ae%22%7D%7D%7D\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Ensure the validity of the Offer with ",(0,r.jsx)(n.code,{children:"Agent.parseCredentialOffer"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseCredentialOffer"})," decodes and validates the encoded credential_offer returning the JSON on success."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"const offer = await Agent.parseCredentialOffer(rawOffer);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Create an AuthorizationRequest with ",(0,r.jsx)(n.code,{children:"Agent.resolveCredentialOffer"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"resolveCredentialOffer"})," takes the parsed Offer, relevant client id and the desired redirect url,\nand constructs an AuthorizationRequest. This AuthorizationRequest contains a url that goes to the Authorization Server\nwhere the user can authorize the client to gain an access token."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"const authRequest = await Agent.resolveCredentialOffer(offer, CLIENT_ID, REDIRECT_URL);\nconst urlString = authRequest.url.href;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Retrieve the Credential with ",(0,r.jsx)(n.code,{children:"Agent.resolveCredentialRequest"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After successfully authorizing, the user will be redirected to the given redirect url.\nOnce there we use the full URL plus query parameters, the Offer and the AuthorizationRequest\nto gain an access token and request the Credential (these steps are handled by ",(0,r.jsx)(n.code,{children:"resolveCredentialRequest"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"const credential = await oidcAgent.resolveCredentialRequest(offer, authRequest, { callbackUrl: url });\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);