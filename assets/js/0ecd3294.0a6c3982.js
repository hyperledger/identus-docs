"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[795],{28683:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(74848),r=i(28453);const t={},a="Credential Schema Introduction",c={id:"schemas/credential-schema",title:"Credential Schema Introduction",description:"Abstract",source:"@site/identus-cloud-agent/docs/docusaurus/schemas/credential-schema.md",sourceDirName:"schemas",slug:"/schemas/credential-schema",permalink:"/identus-docs/tutorials/schemas/credential-schema",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Schemas",permalink:"/identus-docs/tutorials/category/schemas"},next:{title:"Create the credential schema",permalink:"/identus-docs/tutorials/schemas/create"}},d={},l=[{value:"Abstract",id:"abstract",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Terminology",id:"2-terminology",level:2},{value:"Credential Schema",id:"credential-schema",level:3},{value:"Schema Registry",id:"schema-registry",level:3},{value:"Issuer, Holder, Verifier",id:"issuer-holder-verifier",level:3},{value:"2. Credential Schema Attributes",id:"2-credential-schema-attributes",level:2},{value:"guid (UUID)",id:"guid-uuid",level:3},{value:"id (UUID)",id:"id-uuid",level:3},{value:"longId (String)",id:"longid-string",level:3},{value:"type (String)",id:"type-string",level:3},{value:"name (String)",id:"name-string",level:3},{value:"description (String)",id:"description-string",level:3},{value:"version (String)",id:"version-string",level:3},{value:"author (DID)",id:"author-did",level:3},{value:"authored (DateTime)",id:"authored-datetime",level:3},{value:"schema (JSON Schema)",id:"schema-json-schema",level:3},{value:"schema (AnonCred Schema)",id:"schema-anoncred-schema",level:3},{value:"tags (String[])",id:"tags-string",level:3},{value:"proof (object)",id:"proof-object",level:3},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"credential-schema-introduction",children:"Credential Schema Introduction"})}),"\n",(0,s.jsx)(n.h2,{id:"abstract",children:"Abstract"}),"\n",(0,s.jsx)(n.p,{children:"This document describes the purpose, supported formats, and technical details of the Credential Schema implementation in\nthe Identus Platform."}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#credential-schema",children:"Credential Schema"})," is a data template for ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#verifiable-credential",children:"Verifiable Credentials"}),".\nIt contains ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#claims",children:"claims"})," (attributes) of the Verifiable Credentials, credential schema author, type, name, version, and proof\nof authorship.\nBy putting schema definitions on a public blockchain, they are available for all verifiers to examine to determine the\nsemantic interoperability of the Credential."]}),"\n",(0,s.jsx)(n.p,{children:"The Identus Platform supports the following specifications of the credential schemas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://w3c-ccg.github.io/vc-json-schemas/",children:"Verifiable Credentials JSON Schema 2022"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://hyperledger.github.io/anoncreds-spec/#term:schemas",children:"AnonCreds Schema"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The signed credential schema allows doing following verifications:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"semantic verification of the verifiable credentials"}),"\n",(0,s.jsx)(n.li,{children:"authorship verification"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The author can use credential schema to issue the following types of verifiable credentials:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"JSON Verifiable Credential"}),"\n",(0,s.jsx)(n.li,{children:"JSON-LD Verifiable Credential"}),"\n",(0,s.jsx)(n.li,{children:"Anoncred Verifiable Credential"}),"\n",(0,s.jsx)(n.li,{children:"all types above but encoded as JWT"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Limitations and constraints of the Identus Platform:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Issuer does not sign the Credential Schema"}),"\n",(0,s.jsx)(n.li,{children:"The Issuer does not publish the Credential Schema to the VDR (the Cardano blockchain)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-terminology",children:"2. Terminology"}),"\n",(0,s.jsx)(n.h3,{id:"credential-schema",children:"Credential Schema"}),"\n",(0,s.jsxs)(n.p,{children:["The Credential Schema is a template that defines a set of attributes the ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#issuer",children:"Issuer"})," uses to issue the Verifiable Credential."]}),"\n",(0,s.jsx)(n.h3,{id:"schema-registry",children:"Schema Registry"}),"\n",(0,s.jsx)(n.p,{children:"The registry is where the Credential Schema is published and available for parties."}),"\n",(0,s.jsx)(n.h3,{id:"issuer-holder-verifier",children:"Issuer, Holder, Verifier"}),"\n",(0,s.jsxs)(n.p,{children:["These are well-known roles in the ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#self-sovereign-identity",children:"SSI"})," domain."]}),"\n",(0,s.jsx)(n.h2,{id:"2-credential-schema-attributes",children:"2. Credential Schema Attributes"}),"\n",(0,s.jsx)(n.h3,{id:"guid-uuid",children:"guid (UUID)"}),"\n",(0,s.jsxs)(n.p,{children:["It is the globally unique identifier of the credential schema.\nIt is bound to the ",(0,s.jsx)(n.code,{children:"author"}),", ",(0,s.jsx)(n.code,{children:"version"}),", and ",(0,s.jsx)(n.code,{children:"id"})," fields as it is composed of the bytes of the ",(0,s.jsx)(n.code,{children:"longId"})," string."]}),"\n",(0,s.jsx)(n.h3,{id:"id-uuid",children:"id (UUID)"}),"\n",(0,s.jsx)(n.p,{children:"The locally unique identifier of the schema."}),"\n",(0,s.jsx)(n.h3,{id:"longid-string",children:"longId (String)"}),"\n",(0,s.jsxs)(n.p,{children:["Resource identifier of the given credential schema composed from the author's [DID]((/docs/concepts/glossary#decentralized-identifier) reference, id, and version fields.\n",(0,s.jsx)(n.strong,{children:"Example:"})," ",(0,s.jsx)(n.code,{children:"{author}/{id}?version={version}"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," According to the ",(0,s.jsx)(n.a,{href:"https://w3c-ccg.github.io/vc-json-schemas/#id",children:"W3C specification"}),", this field is locally unique and combines the Issuer ",(0,s.jsx)(n.code,{children:"DID"}),", ",(0,s.jsx)(n.code,{children:"uuid"}),", and ",(0,s.jsx)(n.code,{children:"version"}),".\n**For ",(0,s.jsx)(n.strong,{children:"example:"})," ",(0,s.jsx)(n.code,{children:"did:example:MDP8AsFhHzhwUvGNuYkX7T/06e126d1-fa44-4882-a243-1e326fbe21db?version=1.0"})]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"type-string",children:"type (String)"}),"\n",(0,s.jsx)(n.p,{children:"It is a type of the supported JSON Schema of the credential schema.\nIt describes the JSON Schema of the Credential Schema described in this document."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"JWT Credential Schema Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"AnonCred Credential Schema Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type" : "AnoncredSchemaV1"\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"name-string",children:"name (String)"}),"\n",(0,s.jsxs)(n.p,{children:["It is a human-readable name for the schema.\n",(0,s.jsx)(n.strong,{children:"Example:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": [\n    "DrivingLicence"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"description-string",children:"description (String)"}),"\n",(0,s.jsx)(n.p,{children:"It is a human-readable description of the schema."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This field may get removed later as it's not a part of W3C specification but rather the internal field of the JSON schema."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"version-string",children:"version (String)"}),"\n",(0,s.jsxs)(n.p,{children:["It is a version of the schema that contains the revision of the credential schema in ",(0,s.jsx)(n.a,{href:"https://semver.org/",children:"SemVer"}),"\nformat.\n",(0,s.jsx)(n.strong,{children:"Example:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "1.0.0"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The version field must be the schema evolution and describe the impact of the changes.\nFor the breaking changes, the ",(0,s.jsx)(n.code,{children:"major"})," version must get increased.\nIn the current implementation, the Identus Platform doesn't validate whether the new version is backward compatible.\nThis logic may get implemented later, so the Issuer is responsible for correctly setting the credential schema's next\nversion."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"author-did",children:"author (DID)"}),"\n",(0,s.jsxs)(n.p,{children:["DID of the identity which authored the credential schema.\n",(0,s.jsx)(n.strong,{children:"Example:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "author": "did:prism:4a5b5cf0a513e83b598bbea25cd6196746747f361a73ef77068268bc9bd732ff"\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"authored-datetime",children:"authored (DateTime)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc3339",children:"RFC3339"})," date of when the credential schema creation. A piece of Metadata.\n",(0,s.jsx)(n.strong,{children:"Example:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "authored": "2022-03-10T12:00:00Z"\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"schema-json-schema",children:"schema (JSON Schema)"}),"\n",(0,s.jsxs)(n.p,{children:["A valid ",(0,s.jsx)(n.a,{href:"https://json-schema.org/",children:"JSON-SCHEMA"})," where the credential schema semantic gets defined.\nJSON Schema must be composed according to the ",(0,s.jsx)(n.a,{href:"https://json-schema.org/draft/2020-12/schema",children:"Metaschema"})," schema.\n",(0,s.jsx)(n.strong,{children:"Example:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "$id": "https://example.com/driving-license-1.0",\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "description": "Driving License",\n  "type": "object",\n  "properties": {\n    "emailAddress": {\n      "type": "string",\n      "format": "email"\n    },\n    "givenName": {\n      "type": "string"\n    },\n    "familyName": {\n      "type": "string"\n    },\n    "dateOfIssuance": {\n      "type": "string",\n      "format": "date-time"\n    },\n    "drivingLicenseID": {\n      "type": "string"\n    },\n    "drivingClass": {\n      "type": "integer"\n    }\n  },\n  "required": [\n    "emailAddress",\n    "familyName",\n    "dateOfIssuance",\n    "drivingLicenseID",\n    "drivingClass"\n  ],\n  "additionalProperties": true\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"schema-anoncred-schema",children:"schema (AnonCred Schema)"}),"\n",(0,s.jsxs)(n.p,{children:["A valid ",(0,s.jsx)(n.a,{href:"https://hyperledger.github.io/anoncreds-spec/#term:schemas",children:"ANONCRED-SCHEMA"})," where the credential schema semantic gets defined.\n",(0,s.jsx)(n.strong,{children:"Example:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Birth Certificate Schema",\n  "version": "1.0",\n  "attrNames": [\n    "location",\n    "birthday"\n  ],\n  "issuerId": "did:prism:4a5b5cf0a513e83b598bbea25cd6196746747f361a73ef77068268bc9bd732ff"\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tags-string",children:"tags (String[])"}),"\n",(0,s.jsxs)(n.p,{children:["It is a set of tokens that allow one to look up and filter the credential schema records.\nThis field is not a part of the W3C specification. Its usage by the Identus Platform for filtering the records.\n",(0,s.jsx)(n.strong,{children:"Example:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "tags": [\n    "id",\n    "driving"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"proof-object",children:"proof (object)"}),"\n",(0,s.jsx)(n.p,{children:"The proof field is a JOSE object containing the credential schema's signature, including the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"type"}),"\n",(0,s.jsx)(n.li,{children:"created"}),"\n",(0,s.jsx)(n.li,{children:"verificationMethod"}),"\n",(0,s.jsx)(n.li,{children:"proofPurpose"}),"\n",(0,s.jsx)(n.li,{children:"proofValue"}),"\n",(0,s.jsx)(n.li,{children:"domain"}),"\n",(0,s.jsx)(n.li,{children:"jws"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "proof": {\n    "type": "Ed25519Signature2018",\n    "created": "2022-03-10T12:00:00Z",\n    "verificationMethod": "did:prism:4a5b5cf0a513e83b598bbea25cd6196746747f361a73ef77068268bc9bd732ff#key-1",\n    "proofPurpose": "assertionMethod",\n    "proofValue": "FiPfjknHikKmZ...",\n    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImt0eSI6Ik...",\n    "domain": "prims.atala.com"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://w3c-ccg.github.io/vc-json-schemas/",children:"Verifiable Credentials JSON Schema 2022"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/vc-data-integrity/",children:"Verifiable Credential Data Integrity 1.0"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);