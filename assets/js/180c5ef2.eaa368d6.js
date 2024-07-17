"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[8033],{40017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=n(74848),s=n(28453);const o={},c="Access Control",l={id:"multitenancy/access-control",title:"Access Control",description:"Status: draft",source:"@site/identus-cloud-agent/docs/docusaurus/multitenancy/access-control.md",sourceDirName:"multitenancy",slug:"/multitenancy/access-control",permalink:"/identus-docs/tutorials/multitenancy/access-control",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},r={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Accounts",id:"accounts",level:2},{value:"SUDO Account",id:"sudo-account",level:3},{value:"Management Account",id:"management-account",level:3},{value:"Agent Account",id:"agent-account",level:3},{value:"Wallet Account",id:"wallet-account",level:3},{value:"Technical Overview",id:"technical-overview",level:2},{value:"Principle of Least Privilege",id:"principle-of-least-privilege",level:3},{value:"Token Issuing, Renewal, Expiration and Revocation",id:"token-issuing-renewal-expiration-and-revocation",level:3},{value:"Links",id:"links",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"access-control",children:"Access Control"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Status"}),": draft"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Date"}),": 2021-06-02"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": this document is a draft and is not implemented yet. Statement in this document might be changed in the future."]}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Current document describes the levels of access control in the Identus Platform configured in the Vault service\nThe Vault service uses policies to control the access to the secrets, configuration, and other resources.\nThe policies are applied to the entities and groups of entities."}),"\n",(0,i.jsx)(t.p,{children:"According to the Principle of Least Privilege (PoLP), the access to the resources must be granted to the entities with the minimal set of permissions required to perform the operation."}),"\n",(0,i.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,i.jsx)(t.h3,{id:"sudo-account",children:"SUDO Account"}),"\n",(0,i.jsxs)(t.p,{children:["The account with ",(0,i.jsx)(t.code,{children:"sudo"})," privileges that allows to configure the Vault service.\nThe root token is used for this purpose.\nThe root token must be kept in the most safe place and not used for regular cases."]}),"\n",(0,i.jsx)(t.p,{children:"SUDO Account is used for the following purposes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"configure the Vault service"}),"\n",(0,i.jsx)(t.li,{children:"configure authentication methods"}),"\n",(0,i.jsx)(t.li,{children:"configure Management Accounts"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Managed by DevOps and SRE teams."}),"\n",(0,i.jsx)(t.h3,{id:"management-account",children:"Management Account"}),"\n",(0,i.jsx)(t.p,{children:"Management Account is special account that allows to manage the Cloud Agent."}),"\n",(0,i.jsx)(t.p,{children:"The account with the limited access to configure the Vault service with the following permissions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"manage the Wallet accounts"}),"\n",(0,i.jsx)(t.li,{children:"manage the Agent accounts"}),"\n",(0,i.jsx)(t.li,{children:"enforces the policies to the Wallet account"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Management Account can be used in the configuration scripts or by the SRE team."}),"\n",(0,i.jsx)(t.h3,{id:"agent-account",children:"Agent Account"}),"\n",(0,i.jsx)(t.p,{children:"Agent Account is created for the Cloud Agent to authenticate itself to the Vault service.\nAppRole authentication method is used for this account."}),"\n",(0,i.jsx)(t.p,{children:"The account with the limited access to configure the Vault service with the following permissions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"create the Wallet accounts"}),"\n",(0,i.jsx)(t.li,{children:"issue the token to the Wallet account"}),"\n",(0,i.jsx)(t.li,{children:"do other operations required to configure the Wallet account"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"wallet-account",children:"Wallet Account"}),"\n",(0,i.jsx)(t.p,{children:"The Wallet Account is created for and used by the Wallet.\nThe Wallet Account is has access to the secrets of the Wallet and the Cloud Agent must guarantee the data isolation at the Wallet level.\nThis account has the following permissions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"list, read, write, delete the secrets associated with the Wallet"}),"\n",(0,i.jsx)(t.li,{children:"use the REST API associated with the Wallet"}),"\n",(0,i.jsx)(t.li,{children:"manage the data associated with the Wallet"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"technical-overview",children:"Technical Overview"}),"\n",(0,i.jsx)(t.h3,{id:"principle-of-least-privilege",children:"Principle of Least Privilege"}),"\n",(0,i.jsx)(t.p,{children:"The Principle of Least Privilege (PoLP) is a security concept that requires that a user is granted no more privilege than necessary to perform a task.\nThe following practices are applied to implement the PoLP:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"audit: all the credentials are audited and must be under control of the SRE team"}),"\n",(0,i.jsx)(t.li,{children:"administrator and business accounts are separated"}),"\n",(0,i.jsx)(t.li,{children:"activity monitoring: activity of the administrator accounts is monitored"}),"\n",(0,i.jsx)(t.li,{children:"just-in-time access: the access to the resources is granted only for the time required to perform the operation"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": there are other PoLP practices that are not covered in this document. These practices will be ignored for local development and testing purposes."]}),"\n",(0,i.jsx)(t.p,{children:"In order to implement the PoLP, the following access control rules are defined:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"the Cloud Agent account has access to the Wallet account that belong to the Agent only"}),"\n",(0,i.jsx)(t.li,{children:"the Cloud Agent account transparently issues the token to the Wallet account based on configured authentication method"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"token-issuing-renewal-expiration-and-revocation",children:"Token Issuing, Renewal, Expiration and Revocation"}),"\n",(0,i.jsx)(t.p,{children:"These policies are applied to all tokens except the SUDO account (root token)."}),"\n",(0,i.jsx)(t.p,{children:"All tokens issued by the Identus Platform have the following properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"expiration time"}),"\n",(0,i.jsx)(t.li,{children:"maximum time to live (TTL)"}),"\n",(0,i.jsx)(t.li,{children:"renewable flag"}),"\n",(0,i.jsx)(t.li,{children:"orphan flag"}),"\n",(0,i.jsx)(t.li,{children:"policies"}),"\n",(0,i.jsx)(t.li,{children:"operation limitations (number of the requests that can be performed by the token)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Management account token policies:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"authentication methods: GitHub, GoogleAuth, user/password"}),"\n",(0,i.jsx)(t.li,{children:"expiration time: 1 hour"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Agent Account token policies:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"authentication method: AppRole"}),"\n",(0,i.jsx)(t.li,{children:"token expiration time: 24 hour"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Wallet Account token policies:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"authentication methods: JWT, token issued by the Agent account, user/password"}),"\n",(0,i.jsx)(t.li,{children:"token expiration time: 1 hour"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": user/password method is used for the development and testing purposes only."]}),"\n",(0,i.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/concepts/policies",children:"Vault Policies"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/concepts/tokens",children:"Vault Tokens"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth",children:"Vault Authentication Methods"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth/approle",children:"Vault AppRole Authentication Method"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth/jwt",children:"Vault JWT Authentication Method"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth/github",children:"Vault GitHub Authentication Method"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth/google",children:"Vault GoogleAuth Authentication Method"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth/userpass",children:"Vault Userpass Authentication Method"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/concepts/tokens",children:"Vault Tokens"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);