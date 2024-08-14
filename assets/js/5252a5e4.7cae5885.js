"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[170],{57481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),a=t(28453);const s={},o="Authenticate",l={id:"identus/identus-cloud-agent/authenticate",title:"Authenticate",description:"Authenticate relies on the powers of decentralized identifiers (DIDs). By using",source:"@site/documentation/docs/identus/identus-cloud-agent/authenticate.md",sourceDirName:"identus/identus-cloud-agent",slug:"/identus/identus-cloud-agent/authenticate",permalink:"/identus-docs/docs/identus/identus-cloud-agent/authenticate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},r={},c=[{value:"Actors",id:"actors",level:2},{value:"Authentication flow",id:"authentication-flow",level:2},{value:"Code example",id:"code-example",level:2},{value:"How wallets should respond to authentication challenge?",id:"how-wallets-should-respond-to-authentication-challenge",level:2},{value:"Code example - wallet integration with TypeScript Wallet SDK",id:"code-example---wallet-integration-with-typescript-wallet-sdk",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"authenticate",children:"Authenticate"})}),"\n",(0,i.jsx)(n.p,{children:"Authenticate relies on the powers of decentralized identifiers (DIDs). By using\nDIDs, users can prove their identity and authenticate themselves and their\ninteractions with other parties in a decentralized, secure manner. Organizations\ncan utilize this technology to streamline their business processes and make\nauthentication more transparent and more secure to their users."}),"\n",(0,i.jsxs)(n.p,{children:["Authenticate provides primitives to facilitate the authentication of users and\ndevices through DIDs they control. These primitives include creating and\nmanaging ",(0,i.jsx)(n.strong,{children:"authentication challenges"}),", which are special requests for users or\ndevices to prove their identity."]}),"\n",(0,i.jsx)(n.h2,{id:"actors",children:"Actors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"User"})," or a ",(0,i.jsx)(n.strong,{children:"device"})," - the party being authenticated."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SSI Wallet"})," - any piece of software able to create and manage DIDs - in\ncontrol of the user."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application"})," - the party that is requesting authentication, which has its own\nstate and business logic."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Authenticate Service"})," - a service that provides authentication primitives\n(managing authentication challenges and responses)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"authentication-flow",children:"Authentication flow"}),"\n",(0,i.jsx)(n.p,{children:"On a high level, the authentication flow starts with the application creating a\nchallenge, encoding it, and sending it to the other party. The other party then\nuses their SSI wallet to respond to the challenge by signing the nonce and\nsending it back to the submission endpoint specified in the challenge."}),"\n",(0,i.jsx)(n.p,{children:"Let's go through the whole process in more detail."}),"\n",(0,i.jsxs)(n.p,{children:["Application creates a new ",(0,i.jsx)(n.strong,{children:"authentication challenge"}),". The challenge contains a nonce,\nexpiration time, and submission endpoint. It also includes a ",(0,i.jsx)(n.code,{children:"type"})," field used as a protocol identifier for wallets to understand how to process the\nmessage."]}),"\n",(0,i.jsx)(n.p,{children:"An example of an authentication challenge state:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "self": "https://demo.atalaprism.io/did-authentication/challenges/challenge-id-1234",\n  "kind": "AuthenticationChallengeState",\n  "id": "challenge-id-1234",\n  "challenge": {\n    "type": "https://atalaprism.io/authentication-challenge",\n    "submissionEndpoint": "https://demo.atalaprism.io:8085/did-authentication/challenge-submissions/request-id-1234",\n    "nonce": "authenticate-NzIxZTZmNjQtOGY0Ni00ODQ4LWFhYjAtZGYzNDJmYzNlMjM2",\n    "from": "Application ABC",\n    "expireAt": "2021-10-31T09:22:23Z"\n  },\n  "did": null,\n  "state": "pending",\n  "createdAt": "2023-02-24T19:13:23Z",\n  "updatedAt": "2023-02-24T19:13:23Z"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["It contains a ",(0,i.jsx)(n.code,{children:"challenge"})," field and other metadata which makes it possible to track\nthe challenge over time."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note"}),": Only the ",(0,i.jsx)(n.code,{children:"challenge"})," field should be encoded and sent to the other side!"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to add the optional ",(0,i.jsx)(n.code,{children:"from"})," field too. It is a human-readable label that\nrepresents the party requesting authentication. Wallets could use this label\nlater to display information to users about who is sending requests."]}),"\n",(0,i.jsxs)(n.p,{children:["The initial state is ",(0,i.jsx)(n.code,{children:"pending"}),", and ",(0,i.jsx)(n.code,{children:"did"})," field is ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Next, the ",(0,i.jsx)(n.code,{children:"challenge"})," object is encoded, typically as a QR code or deep link,\ndepending on the use case. The encoded challenge is then presented or sent to the\nother party."]}),"\n",(0,i.jsxs)(n.p,{children:["Now, the receiving party uses their wallet to decode and process the received\nauthentication challenge. In this case, the ",(0,i.jsx)(n.code,{children:"type"})," field gets checked for value\n",(0,i.jsx)(n.code,{children:"https://atalaprism.io/authentication-challenge"}),". The wallet then should\npresent a prompt to the user to accept or reject the request, showing the optional\n",(0,i.jsx)(n.code,{children:"from"})," label. If the user accepts the request, the next step is to instruct the\nwallet which DID to use to respond to the challenge. The authentication key from the selected DID signs the nonce field and sends the signature, and the used DID to the submission endpoint specified in the challenge."]}),"\n",(0,i.jsxs)(n.p,{children:["Upon receiving the response, the Authenticate service verifies the signature and\nupdates the challenge state accordingly. In the case of an invalid signature, the\nstate changes to ",(0,i.jsx)(n.code,{children:"error"}),". In the case of a valid signature, the state is set to\n",(0,i.jsx)(n.code,{children:"success"})," and the ",(0,i.jsx)(n.code,{children:"did"})," field gets populated with the DID used to sign the response."]}),"\n",(0,i.jsxs)(n.p,{children:["During the process, an application can query the state of the sent authentication challenge to check the response status and if it's valid. As mentioned, the terminal state is either ",(0,i.jsx)(n.code,{children:"error"})," or ",(0,i.jsx)(n.code,{children:"success"}),". Once the challenge response is received, the application can act upon it, depending on the business logic. For example, creating a login session for the user based on JWT."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note"}),": Authenticate service only checks if the signature is valid, based on the\nDID used to sign the response. Checking if the given DID is known to the\napplication is the application's responsibility."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example of implementing user login flow using Authenticate API. We will demonstrate how to add DID-based authentication to an existing\napplication, which already has a user database and supports password-based login."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note"}),": This aims to 'sketch' or illustrate the general flow. This example is just one of many possible ways to implement this flow. The intent of the code herein is for demonstration purposes only, not for execution."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The example code is in JavaScript/TypeScript, but it should be easy to\ntranslate it to any other language. API could be consumed directly or via a generated client library. For example,\n",(0,i.jsx)(n.a,{href:"https://orval.dev/",children:"Orval tool"})," can generate a TypeScript API client\nfrom OpenAPI spec."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npx orval --input ./enterprise-services-spec.yml --output ./prism-api-client.ts\n"})}),"\n",(0,i.jsx)(n.p,{children:"Let's use this hypothetical user model as an example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface User {\n  id: string;\n  email: string;\n  password: string;\n  did?: string;\n  name: string;\n  company?: string;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is the implementation of the endpoint called by the application front-end to\nstart the DID-based login flow. A new authentication challenge is created and encoded as a QR code."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"async function handleDidAuthRequest() {\n  // we are using generated API client here to interact with Authenticate service.\n  const authChallengeState = await prismApiClient.createAuthenticationChallenge({\n    from: 'Application ABC',\n  });\n\n  // depends on the use-case: QR code, deep link or something else!\n  const encodedAuthChallenge = encodeAsQrCode(authChallengeState.challenge);\n\n  await respondWithSuccessToApplicationFrontend(authChallengeState.id, encodedAuthChallenge);\n  console.info(`Challenge \"${authChallengeState.id}\" has been created and sent to the front-end.`);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once the QR code gets presented to the user for scanning with their mobile wallet,\nthe front-end app could call an endpoint to track the challenge state and wait for\nthe response."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'async function trackAuthChallengeState(challengeId) {\n  while (true) {\n    const authChallengeState = await prismApiClient.getAuthenticationChallenge(challengeId);\n\n    // expiration time default is 2 minutes\n    if (isExpired(authChallengeState.challenge.expireAt)) {\n      console.info(`Challenge "${authChallengeState.id}" has been expired`);\n      return respondWithErrorToApplicationFrontend("CHALLENGE_EXPIRED");\n    }\n\n    if (authChallengeState.state === "error") {\n      // invalid response has been received - either invalid signature or invalid body format\n      console.info(`Invalid response to challenge "${authChallengeState.id}" has been received`);\n      return respondWithErrorToApplicationFrontend("INVALID_CHALLENGE_RESPONSE");\n    }\n\n    if (authChallengeState.state === "success") {\n      console.info(`Valid response to challenge "${authChallengeState.id}" has been received`);\n      console.info(`Challenge signed with DID: "${authChallengeState.did}"`);\n\n      // user has to use DID which is already registered in the application!\n      const userData = await getUserByDid(authChallengeState.did);\n\n      if (!userData) {\n        return respondWithErrorToApplicationFrontend("UNKNOWN_DID");\n      }\n\n      // create JWT access token, in the same way as it\'s done for password-based login\n      const accessToken = jwt.sign({ userId: userData.id }, process.env.JWT_SECRET, {\n        expiresIn: "1h",\n      });\n\n      return respondWithSuccessToApplicationFrontend({\n        accessToken, \n        userData: {\n          id: userData.id,\n          did: userData.did, \n          email: userData.email, \n        }\n      });\n    }\n\n    // challenge is still pending - wait for a while and check again\n    await wait(5000);\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note"}),": Please be aware that the Authenticate service currently does not provide an eventing mechanism. Therefore, the application is responsible for periodically checking the challenge state. However, when eventing gets implemented, this portion will be easier to cover reliably."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-wallets-should-respond-to-authentication-challenge",children:"How wallets should respond to authentication challenge?"}),"\n",(0,i.jsxs)(n.p,{children:["Upon receiving a challenge, wallets should extract the ",(0,i.jsx)(n.code,{children:"nonce"})," field, pick a DID to sign the response, and sign the ",(0,i.jsx)(n.code,{children:"nonce"})," field. The signature should\nbe submitted to the ",(0,i.jsx)(n.code,{children:"submissionEndpoint"}),", with the DID used to sign."]}),"\n",(0,i.jsx)(n.p,{children:"Current restrictions and expectations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{ signature, did }"})," shape of object should be submitted as a JSON body to the\n",(0,i.jsx)(n.code,{children:"submissionEndpoint"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Only ",(0,i.jsx)(n.code,{children:"did:peer"})," DIDs are supported - ",(0,i.jsx)(n.code,{children:"numalgo"})," 0 and 2 variants."]}),"\n",(0,i.jsx)(n.li,{children:"Ed25519 authentication key is expected to be used for signing."}),"\n",(0,i.jsxs)(n.li,{children:["Signature should be encoded as a ",(0,i.jsx)(n.code,{children:"base64Url"})," string."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"code-example---wallet-integration-with-typescript-wallet-sdk",children:"Code example - wallet integration with TypeScript Wallet SDK"}),"\n",(0,i.jsx)(n.p,{children:"Wallets and other applications can use the TypeScript SDK to create required\nkey pairs and DIDs. Also, to resolve DIDs, sign data and verify signatures. Here\nis an example of how to do it:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note"}),": We assume the wallet already has a DID created and stored.\nSee the Onboard service docs for more details about that step."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import {Apollo, Castor, Domain} from "@input-output-hk/atala-prism-wallet-sdk";\nimport * as jose from "jose";\n\n// init Apollo and Castor SDK modules. \n// Apollo = cryptography, Castor = DIDs management.\nconst apollo = new Apollo();\nconst castor = new Castor(apollo);\n\n/**\n * Wallet will receive encoded authentication challenge as a deep link, QR code,\n * or in some other way. This is the function which will handle decoded challenge. \n * We assume that user has already selected a DID to use for signing the challenge.\n * DID is usually a part of wallet specific abstraction - contact/account/avatar.\n *\n * @param {type, from, nonce, expireAt, submissionEndpoint} authChallenge\n * @param {string} did\n */\nasync function handleDidRequest(authChallenge, did) {\n    if (authChallenge.type !== "https://atalaprism.io/authentication-challenge") {\n        throw new Error("Invalid Authentication Challenge");\n    }\n\n    // application specific logic to retrieve private keys for DID from wallet storage\n    const keys = await getKeysForDidFromStorage(did);\n    \n    // we need to sign with ED25519 key\n    const authKeyPair = keys.find(key => key.curve === Domain.Curve.ED25519);\n    const signature = apollo.signStringMessage(authKeyPair.privateKey, authChallenge.nonce);\n    \n    // POST signature & did back to the Authenticate service - using axios for example\n    await axios.post(authChallenge.submissionEndpoint, {\n        did,\n        signature: jose.base64url.encode(signature.value),\n    });\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);