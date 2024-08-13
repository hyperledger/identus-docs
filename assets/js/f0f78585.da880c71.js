"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[1416],{3033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(74848),a=n(28453);const o={},s="Use Keycloak and JWT tokens for Authentication and Authorisation to facilitate multitenancy in the Cloud Agent",l={id:"decisions/use-keycloak-and-jwt-tokens-for-authentication-and-authorisation-to-facilitate-multitenancy-in-cloud-agent",title:"Use Keycloak and JWT tokens for Authentication and Authorisation to facilitate multitenancy in the Cloud Agent",description:"- Status: accepted",source:"@site/documentation/adrs/decisions/20230527-use-keycloak-and-jwt-tokens-for-authentication-and-authorisation-to-facilitate-multitenancy-in-cloud-agent.md",sourceDirName:"decisions",slug:"/decisions/use-keycloak-and-jwt-tokens-for-authentication-and-authorisation-to-facilitate-multitenancy-in-cloud-agent",permalink:"/identus-docs/adrs/decisions/use-keycloak-and-jwt-tokens-for-authentication-and-authorisation-to-facilitate-multitenancy-in-cloud-agent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20230527,frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Use JWT claims for agent admin access control",permalink:"/identus-docs/adrs/decisions/use-jwt-claims-for-agent-admin-auth"},next:{title:"Use keycloak authorisation service for managing wallet permissions",permalink:"/identus-docs/adrs/decisions/use-keycloak-authorisation-service-for-managing-wallet-permissions"}},c={},d=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Keycloak as AuthN/AuthZ",id:"keycloak-as-authnauthz",level:3},{value:"Keycloak as AuthN, another system as AuthZ",id:"keycloak-as-authn-another-system-as-authz",level:3},{value:"Digital Signatures/Proof of Possession",id:"digital-signaturesproof-of-possession",level:3},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Positive Consequences",id:"positive-consequences",level:3},{value:"Negative Consequences",id:"negative-consequences",level:3},{value:"Pros and Cons of the Options",id:"pros-and-cons-of-the-options",level:2},{value:"The use of Keycloak in general",id:"the-use-of-keycloak-in-general",level:3},{value:"Keycloak with opaque tokens (without digital signatures)",id:"keycloak-with-opaque-tokens-without-digital-signatures",level:3},{value:"Keycloak with JWT tokens (without digital signatures)",id:"keycloak-with-jwt-tokens-without-digital-signatures",level:3},{value:"Keycloak with JWT tokens and Open Policy Agent (OPA) (without digital signatures)",id:"keycloak-with-jwt-tokens-and-open-policy-agent-opa-without-digital-signatures",level:3},{value:"Keycloak with any token type with DPoP",id:"keycloak-with-any-token-type-with-dpop",level:3},{value:"Keycloak with any token type with a custom scheme using DIDs",id:"keycloak-with-any-token-type-with-a-custom-scheme-using-dids",level:3},{value:"Keycloak with any token type using Mutual TLS (mTLS)",id:"keycloak-with-any-token-type-using-mutual-tls-mtls",level:3},{value:"Links",id:"links",level:2}];function r(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"use-keycloak-and-jwt-tokens-for-authentication-and-authorisation-to-facilitate-multitenancy-in-the-cloud-agent",children:"Use Keycloak and JWT tokens for Authentication and Authorisation to facilitate multitenancy in the Cloud Agent"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Status: accepted"}),"\n",(0,i.jsx)(t.li,{children:"Deciders: David Poltorak, Yurii Shynbuiev, Shailesh Patil, Ben Voiturier"}),"\n",(0,i.jsx)(t.li,{children:"Date: 2023-05-27"}),"\n",(0,i.jsx)(t.li,{children:"Tags: multitenancy, authorisation, authentication"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Technical Story: [Research Spike - 1d: find a way to authenticate and authorise the Cloud Agent instance administrator | ",(0,i.jsx)(t.a,{href:"https://input-output.atlassian.net/browse/ATL-4362",children:"https://input-output.atlassian.net/browse/ATL-4362"}),"]"]}),"\n",(0,i.jsx)(t.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,i.jsx)(t.p,{children:"Prior to this Architectural Decision Record (ADR) and the related Value Brief, authentication (AuthN) and authorisation (AuthZ) for API consumers of an agent are implemented using a pre-shared key, supplied as an API token within each request header."}),"\n",(0,i.jsx)(t.p,{children:"An agent can support a single-tenant only."}),"\n",(0,i.jsx)(t.p,{children:"Each single-tenant agent is accessed via a shared API gateway layer (APISIX) that enforces a consumer restriction list. Only assigned consumers, identified through the pre-shared key, can access specific agent instances."}),"\n",(0,i.jsx)(t.p,{children:"This authentication/authorisation mechanism poses a significant security risk. If the pre-shared key is leaked, we lack the means to detect its misuse by a nefarious actor, as there is no proof-of-possession mechanism or additional authentication factor in place."}),"\n",(0,i.jsx)(t.p,{children:"In our Multi-tenant Value Brief, we propose modifications to the agent, enabling it to host multiple tenants within a single instance. Here, a tenant is defined as a unique set of private keys and configurations shared by multiple API consumers."}),"\n",(0,i.jsx)(t.p,{children:"As we transition to multi-tenancy, several critical questions emerge:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"How should the Cloud Agent authenticate, or verify the identities of, its API consumers?"}),"\n",(0,i.jsx)(t.li,{children:"How should the Cloud Agent authorise a particular identity to use a specific instance of the agent?"}),"\n",(0,i.jsx)(t.li,{children:"As the Cloud Agent becomes capable of hosting multiple tenants whose workloads must remain isolated, how should it become tenant-aware? That is, how should it determine which tenant an API consumer belongs to, and authorise them to manage and operate within that tenant?"}),"\n",(0,i.jsx)(t.li,{children:'How can we mitigate the security risk associated with a leaked pre-shared key/token?"'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"decision-drivers",children:"Decision Drivers"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The complexity of the solution to implement, run and maintain"}),"\n",(0,i.jsx)(t.li,{children:"Ability to offer solution as SaaS offering as well as self-hosted option"}),"\n",(0,i.jsx)(t.li,{children:"Use industry standard approaches for frictionless adoption"}),"\n",(0,i.jsx)(t.li,{children:"Not having to roll our own AuthN/AuthZ implementations [Engineering principle: build differentiating value]"}),"\n",(0,i.jsx)(t.li,{children:"Ability to effectively mitigate pre-shared key security risk"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"considered-options",children:"Considered Options"}),"\n",(0,i.jsx)(t.p,{children:"All options use OIDC and the Client Credentials Grant flow which is suitable for machine-to-machine use."}),"\n",(0,i.jsx)(t.p,{children:"We have not included an option where we write our own AuthN/AuthZ implementation. All options require an additional component to be added to the stack to store identity related data [Users, roles etc] and to potentially act as a Policy Decision Point (PDP), Policy Administration Point (PAP) and a Policyf Information Point (PIP)."}),"\n",(0,i.jsx)(t.h3,{id:"keycloak-as-authnauthz",children:"Keycloak as AuthN/AuthZ"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Keycloak with opaque tokens (without digital signatures)"}),"\n",(0,i.jsx)(t.li,{children:"Keycloak with JWT tokens (without digital signatures)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"keycloak-as-authn-another-system-as-authz",children:"Keycloak as AuthN, another system as AuthZ"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Keycloak with JWT tokens and Open Policy Agent (OPA) (without digital signatures)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"digital-signaturesproof-of-possession",children:"Digital Signatures/Proof of Possession"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Keycloak with any token type with Demonstration of Proof of Possession (DPoP)"}),"\n",(0,i.jsx)(t.li,{children:"Keycloak with any token type with a custom scheme using Decentralized Identifiers (DIDs)"}),"\n",(0,i.jsx)(t.li,{children:"Keycloak with any token type using Mutual TLS (mTLS)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"decision-outcome",children:"Decision Outcome"}),"\n",(0,i.jsx)(t.p,{children:'Chosen option: "Keycloak with JWT tokens (without digital signatures)", because it provides a balance between security, complexity, and maintainability while using industry-standard approaches, and reduces the need to develop custom AuthN/AuthZ implementations. Application layer can decode JWT and use scope and claims to identify tenant of the consumer.'}),"\n",(0,i.jsx)(t.h3,{id:"positive-consequences",children:"Positive Consequences"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Industry standard OAuth2/OIDC is used for authentication, ensuring compatibility with many services."}),"\n",(0,i.jsx)(t.li,{children:"Utilizes Keycloak as an Identity Provider (IdP), providing a centralized and robust service for managing identities."}),"\n",(0,i.jsx)(t.li,{children:"JWT tokens allow claims and scopes to be directly embedded in the token, which helps in authorization."}),"\n",(0,i.jsx)(t.li,{children:"APISIX, acting as the Policy Enforcement Point (PEP), can validate JWT tokens without a round trip to Keycloak."}),"\n",(0,i.jsx)(t.li,{children:"Risk of key/token leakage is reduced as compared to pre-shared keys."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"negative-consequences",children:"Negative Consequences"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Complexity of JWT token management, including key rotation and revocation."}),"\n",(0,i.jsx)(t.li,{children:"Need for a caching and refresh strategy when verifying JWT in the APISIX and application layer."}),"\n",(0,i.jsx)(t.li,{children:"Possible increased latency due to JWT verification at both APISIX and application layers."}),"\n",(0,i.jsx)(t.li,{children:"Reupidation threat minimised by short OIDC access token lifetime but not fully mitigated as no digital signature implemented."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"pros-and-cons-of-the-options",children:"Pros and Cons of the Options"}),"\n",(0,i.jsx)(t.h3,{id:"the-use-of-keycloak-in-general",children:"The use of Keycloak in general"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Good, becasue APISIX and Keycloak are easy to integrate with well documented plugins."}),"\n",(0,i.jsx)(t.li,{children:"Bad, because of the need to run Keycloak [compute resources and management overhead]."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"keycloak-with-opaque-tokens-without-digital-signatures",children:"Keycloak with opaque tokens (without digital signatures)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Keycloak is utilized for authentication, whereas authorisation requires APISIX and the application layer to make a call to Keycloak. This is because the opaque token, which cannot be decoded outside of Keycloak, doesn't contain any permission-related information, necessitating the authorisation check."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Good, because it simplifies token management."}),"\n",(0,i.jsx)(t.li,{children:"Good, because tokens are not self-contained and therefore don't expose any information."}),"\n",(0,i.jsx)(t.li,{children:"Bad, because it requires a round trip to Keycloak to validate each token and perform authorisation checks, increasing latency."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"keycloak-with-jwt-tokens-without-digital-signatures",children:"Keycloak with JWT tokens (without digital signatures)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Keycloak is utilized for authentication, while authorisation is handled by APISIX and the application layer. Both the APISIX and application layer need to call Keycloak's JSON Web Key Set (JWKS) endpoint to retrieve public keys to decode and validate JWTs. However, the actual authorisation process is handled internally, leveraging data added to JWTs as part of scope and claims. This approach reduces latency compared to the authorisation checks required for opaque tokens."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Good, because JWT tokens can be validated by APISIX without a round trip to Keycloak."}),"\n",(0,i.jsx)(t.li,{children:"Good, because claims and scopes can be embedded directly in the token."}),"\n",(0,i.jsx)(t.li,{children:"Bad, because it introduces complexity around JWT management, including key rotation and revocation."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"keycloak-with-jwt-tokens-and-open-policy-agent-opa-without-digital-signatures",children:"Keycloak with JWT tokens and Open Policy Agent (OPA) (without digital signatures)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Keycloak is utilized for authentication, while APISIX and the application layer make a call to an OPA service for authorisation. Additionally, they need to contact Keycloak's JWKS endpoint to retrieve public keys, enabling them to decode and validate JWTs. Authorisation policies are articulated using the powerful OPA language."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Good, because it provides a powerful and flexible approach to authorisation."}),"\n",(0,i.jsx)(t.li,{children:"Good, because it works well with JWT tokens, enabling authorization checks to be performed based on JWT claims."}),"\n",(0,i.jsx)(t.li,{children:"Bad, because it introduces additional complexity and another component to maintain (in addition to Keycloak)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"keycloak-with-any-token-type-with-dpop",children:"Keycloak with any token type with DPoP"}),"\n",(0,i.jsx)(t.p,{children:"*Only works in oAuth2/OIDC flow"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Good, because DPoP provides a method for binding access tokens to a particular client."}),"\n",(0,i.jsx)(t.li,{children:"Good, because it enhances the security by reducing the threat of token theft."}),"\n",(0,i.jsx)(t.li,{children:"Bad, because it introduces additional complexity around token management."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"keycloak-with-any-token-type-with-a-custom-scheme-using-dids",children:"Keycloak with any token type with a custom scheme using DIDs"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Good, because DIDs provide a self-sovereign method of identity verification."}),"\n",(0,i.jsx)(t.li,{children:"Good, because it enhances security by ensuring that only the valid owner of a DID can authenticate."}),"\n",(0,i.jsx)(t.li,{children:"Bad, because it adds a considerable amount of complexity to token management, and DIDs are still relatively new and may not be widely adopted or fully standardized."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"keycloak-with-any-token-type-using-mutual-tls-mtls",children:"Keycloak with any token type using Mutual TLS (mTLS)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Good, because it provides a strong method of security by requiring both client and server to authenticate each other."}),"\n",(0,i.jsx)(t.li,{children:"Good, because it mitigates repudiation threats."}),"\n",(0,i.jsx)(t.li,{children:"Bad, because it introduces complexity around certificate management and may add additional overhead in terms of performance."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.keycloak.org/docs/latest/",children:"Keycloak documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://apisix.apache.org/docs/",children:"APISIX documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.openpolicyagent.org/docs/",children:"Open Policy Agent (OPA) documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://jwt.io/introduction/",children:"JWT (JSON Web Tokens) Introduction"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://oauth.net/2/",children:"OAuth 2.0 documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://tools.ietf.org/id/draft-ietf-oauth-dpop-03.html",children:"Information on OAuth 2.0 Token Binding - DPoP"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/",children:"Decentralized Identifiers (DIDs) documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://zitadel.com/blog/jwt-vs-opaque-tokens",children:"JWT vs Opaque Tokens"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);