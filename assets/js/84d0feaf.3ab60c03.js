"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[49],{94127:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var t=i(74848),o=i(28453);const s={},l="Edge SDK Connectionless Presentation",d={id:"examples/ConnectionlessPresentation",title:"Edge SDK Connectionless Presentation",description:"Requirements",source:"@site/edge-agent-sdk-ts/docs/examples/ConnectionlessPresentation.md",sourceDirName:"examples",slug:"/examples/ConnectionlessPresentation",permalink:"/docs/edge-agent-sdk-ts/examples/ConnectionlessPresentation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Credential Offer",permalink:"/docs/edge-agent-sdk-ts/examples/ConnectionlessOffer"},next:{title:"modules",permalink:"/docs/edge-agent-sdk-ts/sdk/modules"}},a={},r=[{value:"Requirements",id:"requirements",level:2},{value:"Flow",id:"flow",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"edge-sdk-connectionless-presentation",children:"Edge SDK Connectionless Presentation"}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"A working Identus Mediator and an Identus Cloud Agent."}),"\n",(0,t.jsxs)(n.li,{children:["A holder who already has a JWT Credential issued by a known issuer (prism",":did",") [Holder A]"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"NOTE:"}),"\n",(0,t.jsxs)(n.p,{children:["Please follow the ",(0,t.jsx)(n.a,{href:"/home/quick-start",children:"Quick started guide"})," to complete steps 1, 2"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"flow",children:"Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The verifier will need to generate an invitation url as follows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl --location \'http:///cloud-agent/present-proof/presentations/invitation\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n "goalCode" : "present-vp",\n "goal" : "Request proof of vaccination information",\n  "proofs": [],\n "options": {\n    "challenge": "11c91493-01b3-4c4d-ac36-b336bab5bddf",\n    "domain": "https://prism-verifier.com"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The response will look as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "presentationId": "715bc063-cd61-4049-834c-465b3eb19042",\n    "thid": "71a16da3-97ff-460a-b5f9-25a61fe864f4",\n    "role": "Verifier",\n    "status": "InvitationGenerated",\n    "proofs": [],\n    "data": [],\n    "goalCode": "present-vp",\n    "goal": "Request proof of vaccination information",\n    "myDid": "did:peer:2.Ez6LSt2C1xviB7nFEUHJAyWqvDF2xyJtQHWafQMxmy1SySoH6.Vz6MkgMChqZVQ47G88EBY6QZoPbBsCqByhtyfA3TQpyBKn7Ej.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",\n    "invitation": {\n        "id": "71a16da3-97ff-460a-b5f9-25a61fe864f4",\n        "type": "https://didcomm.org/out-of-band/2.0/invitation",\n        "from": "did:peer:2.Ez6LSt2C1xviB7nFEUHJAyWqvDF2xyJtQHWafQMxmy1SySoH6.Vz6MkgMChqZVQ47G88EBY6QZoPbBsCqByhtyfA3TQpyBKn7Ej.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",\n        "invitationUrl": "https://my.domain.com/path?_oob=eyJpZCI6IjcxYTE2ZGEzLTk3ZmYtNDYwYS1iNWY5LTI1YTYxZmU4NjRmNCIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFN0MkMxeHZpQjduRkVVSEpBeVdxdkRGMnh5SnRRSFdhZlFNeG15MVN5U29INi5WejZNa2dNQ2hxWlZRNDdHODhFQlk2UVpvUGJCc0NxQnlodHlmQTNUUXB5QktuN0VqLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQTZMeTh4T1RJdU1UWTRMakV1TkRRNk9EQXdNQzlrYVdSamIyMXRJaXdpY2lJNlcxMHNJbUVpT2xzaVpHbGtZMjl0YlM5Mk1pSmRmWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6InByZXNlbnQtdnAiLCJnb2FsIjoiUmVxdWVzdCBwcm9vZiBvZiB2YWNjaW5hdGlvbiBpbmZvcm1hdGlvbiIsImFjY2VwdCI6W119LCJhdHRhY2htZW50cyI6W3siaWQiOiJjOGMxY2E3Zi05YjJjLTQwOGQtODZkMi0zNWJiYmU2ZTMwNjgiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJpZCI6Ijc4ZTc5NTFhLWZhOTYtNDg2Mi1hYmVkLWFmYTBhZWQyMzgzNCIsInR5cGUiOiJodHRwczovL2RpZGNvbW0uYXRhbGFwcmlzbS5pby9wcmVzZW50LXByb29mLzMuMC9yZXF1ZXN0LXByZXNlbnRhdGlvbiIsImJvZHkiOnsiZ29hbF9jb2RlIjoiUmVxdWVzdCBQcm9vZiBQcmVzZW50YXRpb24iLCJ3aWxsX2NvbmZpcm0iOmZhbHNlLCJwcm9vZl90eXBlcyI6W119LCJhdHRhY2htZW50cyI6W3siaWQiOiJiNWIzZjBjMC05NWQ2LTRkOTItOWQ0Ni1hNDVmYTdlMzVjYWEiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJvcHRpb25zIjp7ImNoYWxsZW5nZSI6IjExYzkxNDkzLTAxYjMtNGM0ZC1hYzM2LWIzMzZiYWI1YmRkZiIsImRvbWFpbiI6Imh0dHBzOi8vcHJpc20tdmVyaWZpZXIuY29tIn0sInByZXNlbnRhdGlvbl9kZWZpbml0aW9uIjp7ImlkIjoiZjNmNmQwYTAtYzdhNS00NjAzLWJkZjUtMjU1ZWJkZGU5ODdiIiwiaW5wdXRfZGVzY3JpcHRvcnMiOltdfX19LCJmb3JtYXQiOiJwcmlzbS9qd3QifV0sInRoaWQiOiI3MWExNmRhMy05N2ZmLTQ2MGEtYjVmOS0yNWE2MWZlODY0ZjQiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU3QyQzF4dmlCN25GRVVISkF5V3F2REYyeHlKdFFIV2FmUU14bXkxU3lTb0g2LlZ6Nk1rZ01DaHFaVlE0N0c4OEVCWTZRWm9QYkJzQ3FCeWh0eWZBM1RRcHlCS243RWouU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbWgwZEhBNkx5OHhPVEl1TVRZNExqRXVORFE2T0RBd01DOWthV1JqYjIxdElpd2ljaUk2VzEwc0ltRWlPbHNpWkdsa1kyOXRiUzkyTWlKZGZYMCJ9fX1dLCJjcmVhdGVkX3RpbWUiOjE3MjQ0MjY1NjgsImV4cGlyZXNfdGltZSI6MTcyNDQyNjg2OH0="\n    },\n    "metaRetries": 5\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The Verifier will make this available to the holder in shape of QA code, link, etc."}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:'The holder then opens its the Edge Agent Wallet SDK, "Connections tab" and will pase the invitation link in the field.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once the invitation is parsed, the user will then be able to see a new Verification request, choose one of the available credentials and send the proof as the verifier requested."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(96540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);