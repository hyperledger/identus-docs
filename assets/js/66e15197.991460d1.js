"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[7319],{94638:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=i(74848),a=i(28453);const o={},r="Using tapir library as a DSL for OpenAPI specification",s={id:"decisions/using-tapir-library-as-a-dsl-for-openapi-specification",title:"Using tapir library as a DSL for OpenAPI specification",description:"- Status: accepted",source:"@site/documentation/adrs/decisions/20221005-using-tapir-library-as-a-dsl-for-openapi-specification.md",sourceDirName:"decisions",slug:"/decisions/using-tapir-library-as-a-dsl-for-openapi-specification",permalink:"/identus-docs/adrs/decisions/using-tapir-library-as-a-dsl-for-openapi-specification",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20221005,frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Use ZIO Failures and Defects Effectively",permalink:"/identus-docs/adrs/decisions/use-zio-failures-and-defects-effectively"}},l={},d=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"OpenAPI code generator constraints for Akka server",id:"openapi-code-generator-constraints-for-akka-server",level:3},{value:"@Pat",id:"pat",level:4},{value:"@Shota",id:"shota",level:4},{value:"Decision Drivers ",id:"decision-drivers-",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Positive Consequences ",id:"positive-consequences-",level:3},{value:"Negative Consequences ",id:"negative-consequences-",level:3},{value:"Option 1 &amp; 2: Feature Implementation Workflow",id:"option-1--2-feature-implementation-workflow",level:3},{value:"Option 3: Feature Implementation Workflow",id:"option-3-feature-implementation-workflow",level:3},{value:"Pros and Cons of the Options ",id:"pros-and-cons-of-the-options-",level:2},{value:"Option 1: use OpenAPI tools and mustache templates for Akka server",id:"option-1-use-openapi-tools-and-mustache-templates-for-akka-server",level:3},{value:"Option 2: use OpenAPI tools and mustache templates for alternative Scala server libraries (Finch, Lagom, Play )",id:"option-2-use-openapi-tools-and-mustache-templates-for-alternative-scala-server-libraries-finch-lagom-play-",level:3},{value:"Optoin 3: use Tapir as DSL for OpenAPI specification",id:"optoin-3-use-tapir-as-dsl-for-openapi-specification",level:3},{value:"How to migrate from the current state to Tapir?",id:"how-to-migrate-from-the-current-state-to-tapir",level:2},{value:"Current state: OpenAPI Tools + mustache templates for Akka server",id:"current-state-openapi-tools--mustache-templates-for-akka-server",level:3},{value:"Desired state: Endpoint Definitions in Tapir + ZIO-HTTP",id:"desired-state-endpoint-definitions-in-tapir--zio-http",level:3},{value:"Links ",id:"links-",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-tapir-library-as-a-dsl-for-openapi-specification",children:"Using tapir library as a DSL for OpenAPI specification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Status: accepted"}),"\n",(0,t.jsx)(n.li,{children:"Deciders: Yurii Shynbuiev, David Poltorak, Benjamin Voiturier, Ilya Peresadin, Bart Suichies"}),"\n",(0,t.jsx)(n.li,{children:"Date: [2022-10-05]"}),"\n",(0,t.jsx)(n.li,{children:"Tags: OpenAPI, DSL, Tapir, code-generation, RESTAPI"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Related ADR/AIP: ",(0,t.jsx)(n.a,{href:"https://input-output.atlassian.net/wiki/spaces/AV2/pages/3454500948/AIP+-+001",children:"Introduce REST HTTP for existing Node services"})]}),"\n",(0,t.jsx)(n.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,t.jsx)(n.p,{children:'Identus Platform will contain the REST API. The decision was made by team consensus during the first AOH meeting to follow "OpenAPI specification first" approach and generate stubs, server side and client side code based on OAS.\nFollowing this strategy we currently have 4-5 OAS files (Castor, Pollux, Mercury, Configuration).'}),"\n",(0,t.jsxs)(n.p,{children:["The following tool was selected for code generation: ",(0,t.jsx)(n.a,{href:"https://github.com/OpenAPITools/openapi-generator",children:"OpenAPI Tools"})]}),"\n",(0,t.jsxs)(n.p,{children:["Instead of using the yaml file as OpenAPI specification and openapi-generator for server and client stub generation - this ADR proposes to use ",(0,t.jsx)(n.a,{href:"https://tapir.softwaremill.com/en/latest/index.html",children:"Tapir"})," Scala library as DSL for OpenAPI specification, ",(0,t.jsx)(n.code,{children:"interpret"})," the endpoint defitions as Scala server and client stub, generate the yaml file, and use openapi-generator for client stubs."]}),"\n",(0,t.jsx)(n.p,{children:"Technology stack that is going to be used in the Identus platform backend: Scala 3 + ZIO ecosystem"}),"\n",(0,t.jsxs)(n.p,{children:["Akka framework after version 2.6.x cannot be used because ",(0,t.jsx)(n.a,{href:"https://www.lightbend.com/blog/why-we-are-changing-the-license-for-akka",children:"Lightbend changed the license type to BSL 1.1"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Looks like Akka 2.6.x still can be used according to ",(0,t.jsx)(n.a,{href:"https://www.lightbend.com/akka/license-faq",children:"License FQA"})]}),"\n",(0,t.jsx)(n.p,{children:"Currently, we have a code generation for Akka that is wrapped up into ZIO. Code generation mustache templates for ZIO-http are not available in OpenAPI tools."}),"\n",(0,t.jsxs)(n.p,{children:["Mustache templates and code generation doesn't work out of the box, so the original templates where copied to the project and fixed by @Shota and @Pat.\nCurrent templates and generator contains constraints that were reported by ",(0,t.jsx)(n.a,{href:"https://docs.google.com/document/d/1WhUtflM_o-5uSx9LW76lycz2kbk071cVZiv6EtVwhAQ/edit#heading=h.ywcvgffenpz",children:"@Pat"})," and ",(0,t.jsx)(n.a,{href:"https://input-output-rnd.slack.com/archives/G018JE9NHAM/p1664563129397819",children:"@Shota"}),", this requires engineering time to adopt the OAS for a code generation. @Ben says that we can live with these constraints"]}),"\n",(0,t.jsx)(n.p,{children:"Generally, OAS files are written by the engineers with different experience and different view on formatting, schemas, normalization, datatype. For instance, in current templates don't have"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a consistent way for paginating the entities"}),"\n",(0,t.jsx)(n.li,{children:"standard Responses for 4xx and 5xx errors"}),"\n",(0,t.jsxs)(n.li,{children:["normalized data types (we use ",(0,t.jsx)(n.code,{children:"anyOf"}),", ",(0,t.jsx)(n.code,{children:"allOf"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"query parameters convention for filtering the entities"}),"\n",(0,t.jsx)(n.li,{children:"some data types are duplicated in both Castor and Pollux OAS"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As OAS specification evolves it's getting harder to manage it because of the size of the file.\nTo mitigate this issue @Pat proposed to use well-known tools:\n\"Knowing that there are tools like ",(0,t.jsx)(n.a,{href:"https://dhall-lang.org/#",children:"dhall"})," or ",(0,t.jsx)(n.a,{href:"https://cuelang.org/docs/integrations/openapi/",children:"CUE"})," that allow us to write large configuration in yaml (or json) in a typesafe / reuseable way, I'm not hesitant to go contract-first.\"(c)"]}),"\n",(0,t.jsx)(n.p,{children:"Quality and formatting of autogenerated code depend on the template (not all templates are good enough). Making the good code from existing templates require additional time of engineers."}),"\n",(0,t.jsx)(n.h3,{id:"openapi-code-generator-constraints-for-akka-server",children:"OpenAPI code generator constraints for Akka server"}),"\n",(0,t.jsx)(n.h4,{id:"pat",children:"@Pat"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"oneOf is not supported. It combines everything from the list if it\u2019s an object, discard if it\u2019s a primitive"}),"\n",(0,t.jsx)(n.li,{children:"allOf is not supported as stated in the documentation, but testing locally it worked"}),"\n",(0,t.jsx)(n.li,{children:"Have to handwrite the serialization layer"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"shota",children:"@Shota"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Undefined type ",(0,t.jsx)(n.code,{children:"AnyType"}),". You can have additionalProperties (",(0,t.jsx)(n.code,{children:"components/schemas/<schema name>/properties/additionalProperties"}),") in the schema, when you add it, it will generate a type for <schema name> that has another type called ",(0,t.jsx)(n.code,{children:"AnyType"})," inside, this type is not defined, it just does not exist in generated code so the compilation will fail, if you get a compilation error in your sources with some ",(0,t.jsx)(n.code,{children:"AnyType"})," that is not defined, look for additionalProperties in your schema"]}),"\n",(0,t.jsxs)(n.li,{children:["Values of type object without properties don\u2019t serialize with spray json. You can have ",(0,t.jsx)(n.code,{children:"componets/schemas/<schema name>/properties/<property name>"})," and every property has a type, like string, int, etc.., you can have type as object, but if you do so, you must provide object properties as well like in example below, if you don\u2019t add it, it will generate this object type with Any in scala, and then the Akka marshaller will fail, because we use SprayJson there, and it does not support Reader and Writer for type Any (basically it can\u2019t serialize type Any into json), you could probably define Writer and Reader for type Any to be an empty object, but I personally don\u2019t see a reason to have value of type object and not define what properties it is going to have anyway."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"requestBody"})," in every path must be explicitly ",(0,t.jsx)(n.code,{children:"required:true"}),". It is ",(0,t.jsx)(n.code,{children:"false"})," by default, if not marked as ",(0,t.jsx)(n.code,{children:"true"})," it will generate a service functions that accepts ",(0,t.jsx)(n.code,{children:"Option[Type]"})," instead of ",(0,t.jsx)(n.code,{children:"Type"})," but endpoints are always expecting ",(0,t.jsx)(n.code,{children:"Type"})," even if required is ",(0,t.jsx)(n.code,{children:"false"}),", not ",(0,t.jsx)(n.code,{children:"Option[Type]"}),", then when you try to generate sources you will get compilation error ",(0,t.jsx)(n.code,{children:"expecting Type got Option[Type]"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"decision-drivers-",children:"Decision Drivers "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"enforce type-safety to endpoint definitions using Scala compiler and Tapir DSL, add CI for endpoints definitions"}),"\n",(0,t.jsx)(n.li,{children:"make endpoint definitions convenient for engineers by reusing common abstractions and definitions"}),"\n",(0,t.jsx)(n.li,{children:"introduce a standard types, schemas and approaches for all endpoint definitions: query, pagination, responses, etc"}),"\n",(0,t.jsx)(n.li,{children:"reuse endpoint definitions for creating server and client stubs in Scala"}),"\n",(0,t.jsx)(n.li,{children:"align the server side of REST API with the current technology stack (ZIO + ecosystem)"}),"\n",(0,t.jsx)(n.li,{children:"have a control over the codebase and data types"}),"\n",(0,t.jsx)(n.li,{children:"reduce time-of-maintenance of the code (either OAS should be adapted for generator or mustache templates should be fixed)"}),"\n",(0,t.jsx)(n.li,{children:"functional way of implementation of non-functional requirement (metrics, tracing, logging)"}),"\n",(0,t.jsx)(n.li,{children:"straight forward generation of Swagger UI, Redoc documentation and Async API documentation based on endpoint definitions"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"considered-options",children:"Considered Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"use OpenAPI tools (edit OAS manually, generate server stub for Akka and client stubs for any other languages)"}),"\n",(0,t.jsx)(n.li,{children:"use OpenAPI tools, but generate code for other server-side library (Play, Finch, Lagom)"}),"\n",(0,t.jsx)(n.li,{children:"use Tapir library (edit endpoint definitions as Scala code, reuse endpoint definitions for server stubs, generate OAS based on endpoint definitions, generate client stubs for any other language)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"decision-outcome",children:"Decision Outcome"}),"\n",(0,t.jsx)(n.p,{children:'Chosen option:"use Tapir library" till the end of the year, evaluate this solution in 2023'}),"\n",(0,t.jsx)(n.p,{children:"All endpoint definition are written in Tapir DSL."}),"\n",(0,t.jsx)(n.p,{children:"OpenAPI specification generated based on endpoint definition and is published as an artefact. (must be a part of CI)"}),"\n",(0,t.jsx)(n.p,{children:"The server side is interpreted using a ZIO-HTTP interpreter to be aligned with the given technology stack."}),"\n",(0,t.jsx)(n.p,{children:"Client side stubs are generated using OpenAPI tools and OpenAPI specification file. (must be a part of CI)"}),"\n",(0,t.jsx)(n.p,{children:"For server-side code the flow is following:"}),"\n",(0,t.jsx)("pre",{class:"mermaid",children:(0,t.jsx)(n.p,{children:"graph TD\nED(Endpoint Definition) --\x3e |Generate| OAS(OpenAPI Specification)\nED --\x3e |Generate| AAUI(AsyncAPI Specification)\nED --\x3e |Interpret| SSS(Scala Server Stub)\nED --\x3e |Interpret| SCS(Scala Client Stub)\nED --\x3e |Produce| SUI(Swagger UI)\nED --\x3e |Produce| RUI(Redoc UI)\nOAS --\x3e |Input| OAT(OpenAPI Tools)\nOAT --\x3e |Generate| SS(Server Stub)\nOAT --\x3e |Generate| CS(Client Stub)"})}),"\n",(0,t.jsx)(n.h3,{id:"positive-consequences-",children:"Positive Consequences "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Type-safety and OAS configuration as a code will speed up development"}),"\n",(0,t.jsx)(n.li,{children:"Generated OpenAPI specification is unified according to the single standard (Tapir generator)"}),"\n",(0,t.jsx)(n.li,{children:"Errors in the types and endpoint definitions will be found in compile-time"}),"\n",(0,t.jsx)(n.li,{children:"Code generations will be replaced with interpretation with higher guarantees of stability"}),"\n",(0,t.jsx)(n.li,{children:"Engineers will save time for feature implementation instead of investigating the issues with AOS files or templates"}),"\n",(0,t.jsx)(n.li,{children:"Better management of OAS spec and control over the documentation (Swagger UI, Redoc, Async API for WebSockets)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"negative-consequences-",children:"Negative Consequences "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Not all engineers will be able to edit the endpoint definitions in Tapir DLS, so either only engineer with Scala knowledge will do this, or knowledge sharing and workshops "How to use Tapir" are required.'}),"\n",(0,t.jsx)(n.li,{children:"OAS is going to be generated from the model defined by DLS, so the granular/manual control over the spec will be replaced by Tapir generator"}),"\n",(0,t.jsx)(n.li,{children:"There is a risk that Tapir might have some hidden surprises and constraints"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"option-1--2-feature-implementation-workflow",children:"Option 1 & 2: Feature Implementation Workflow"}),"\n",(0,t.jsx)("pre",{class:"mermaid",children:(0,t.jsx)(n.p,{children:"graph TD\nU[Start Feature] --\x3e |Edit OAS| A\nA[OAS File] --\x3e |Input| E\nU --\x3e |Edit Template| E\nE[Generator & Templates]--\x3e|Generate Server Code| B(Server Code)\nE --\x3e|Generate Client Code| C(Client Code)\nC --\x3e|Compile| OC(Other Compiler)\nOC --\x3e|Compilation Error| I\nOC --\x3e|Success| T\nE --\x3e|Host file as Swagger UI| D(Swagger)\nB --\x3e |Compile| S(Scala Compiler)\nS --\x3e |Compilation Error| I(Investigate)\nI --\x3e |Try again| U\nS --\x3e |Success| T(Complete Feature)"})}),"\n",(0,t.jsx)(n.h3,{id:"option-3-feature-implementation-workflow",children:"Option 3: Feature Implementation Workflow"}),"\n",(0,t.jsx)("pre",{class:"mermaid",children:(0,t.jsx)(n.p,{children:"graph TD\nU[Start Feature] --\x3e |Edit Endpoint Specification| ED(Endpoint Definition)\nU --\x3e |Edit Input/Output Types| DM(Domain Model)\nED --\x3e |Input| TE(Tapir Library)\nDM --\x3e |Input| TE\nTE --\x3e |Generate| A\nTE --\x3e |Interpret| SC(Server Code)\nTE --\x3e |Interpret| CC(Client Code)\nTE --\x3e |Produce| SW(Swagger UI)\nTE --\x3e |Produce| RD(Redoc UI)\nTE --\x3e |Compilation Error| U\nA[OAS File] --\x3e |Input| E\nU --\x3e |Edit Template| E\nE[Generator & Templates]--\x3e|Generate Server Code| B(Server Code)\nE --\x3e|Generate Client Code| C(Client Code)\nC --\x3e|Compile| OC(Other Compiler)\nOC --\x3e|Compilation Error| I\nOC --\x3e|Success| T\nE --\x3e|Host file as Swagger UI| D(Swagger)\nB --\x3e |Compile| S(Scala Compiler)\nS --\x3e |Compilation Error| I(Investigate)\nI --\x3e |Try again| U\nS --\x3e |Success| T(Complete Feature)"})}),"\n",(0,t.jsx)(n.h2,{id:"pros-and-cons-of-the-options-",children:"Pros and Cons of the Options "}),"\n",(0,t.jsx)(n.h3,{id:"option-1-use-openapi-tools-and-mustache-templates-for-akka-server",children:"Option 1: use OpenAPI tools and mustache templates for Akka server"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Good, because @Pat and @Shota already stabilized the templates, and we have a working solution"}),"\n",(0,t.jsx)(n.li,{children:"Good, because any engineer from CoreDID and Product Foundry team is able to contribute to the documentation"}),"\n",(0,t.jsx)(n.li,{children:"Good, because the same source of truth (OAS file) is used to generate Server and Client stub (less integration problems for client stubs)"}),"\n",(0,t.jsx)(n.li,{children:"Bad, because there are known constraints in the mustache templates that can slow down engineering"}),"\n",(0,t.jsx)(n.li,{children:"Bad, because Akka changed the licence and version 2.6.x will not be supported in 1 year."}),"\n",(0,t.jsx)(n.li,{children:"Bad, because it's hard to keep the same standard for OAS that are written by different engineers"}),"\n",(0,t.jsx)(n.li,{children:"Bad, because all OAS files are merged together at infrastructure level which is slightly complex solution for this task."}),"\n",(0,t.jsx)(n.li,{children:"Bad, because Akka Framework is not in ZIO ecosystem (it's not a good practice to use both frameworks)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"option-2-use-openapi-tools-and-mustache-templates-for-alternative-scala-server-libraries-finch-lagom-play-",children:"Option 2: use OpenAPI tools and mustache templates for alternative Scala server libraries (Finch, Lagom, Play )"}),"\n",(0,t.jsx)(n.p,{children:"[example | description | pointer to more information | \u2026] "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["All ",(0,t.jsx)(n.code,{children:"good"})," and ",(0,t.jsx)(n.code,{children:"bad"})," are the same as in Option 1"]}),"\n",(0,t.jsx)(n.li,{children:"Bad, because we don't know if the mustache templates are good enough for Scala 3"}),"\n",(0,t.jsx)(n.li,{children:"Bad, because we need to evaluate if engineering team have the experience in Finch, Lagom or Play"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"optoin-3-use-tapir-as-dsl-for-openapi-specification",children:"Optoin 3: use Tapir as DSL for OpenAPI specification"}),"\n",(0,t.jsx)(n.p,{children:"[example | description | pointer to more information | \u2026] "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Good, because type-safety and DLS will save the engineering time by providing a quick feedback loop in compile time"}),"\n",(0,t.jsx)(n.li,{children:"Good, because generated OAS will be aligned with the common standards"}),"\n",(0,t.jsx)(n.li,{children:"Good, because engineers can define and reuse the abstractions in FP way"}),"\n",(0,t.jsx)(n.li,{children:"Good, because entities (inputs/outputs) will be reused by Scala backend library"}),"\n",(0,t.jsx)(n.li,{children:"Good, because the endpoint definition will be reused in Scala Server or Client stub"}),"\n",(0,t.jsx)(n.li,{children:"Good, because there is no need to generate the code, stubs are interpreted by the library"}),"\n",(0,t.jsx)(n.li,{children:"Good, because ZIO-HTTP will be used, which is aligned with the current stack"}),"\n",(0,t.jsx)(n.li,{children:"Good, because Open API, Swagger, Redoc, Async API document/site generations are supported"}),"\n",(0,t.jsx)(n.li,{children:"Bad, because only Scala engineers will be able to edit the documentation"}),"\n",(0,t.jsx)(n.li,{children:"Bad, because the granular control over OAS YAML file will be lost (OAS file is generated automatically)"}),"\n",(0,t.jsx)(n.li,{children:"Bad, because we need to spend 3-5 day to transform OAS files into Tapir DSL"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-migrate-from-the-current-state-to-tapir",children:"How to migrate from the current state to Tapir?"}),"\n",(0,t.jsx)(n.h3,{id:"current-state-openapi-tools--mustache-templates-for-akka-server",children:"Current state: OpenAPI Tools + mustache templates for Akka server"}),"\n",(0,t.jsx)(n.h3,{id:"desired-state-endpoint-definitions-in-tapir--zio-http",children:"Desired state: Endpoint Definitions in Tapir + ZIO-HTTP"}),"\n",(0,t.jsx)(n.p,{children:"Estimated migration time is 4-6 days which we don't really want to waste."}),"\n",(0,t.jsx)(n.p,{children:"So, engineering team can proceed with keeping the existing endpoints in the current state and even work on the new endpoints using generated server stubs for Akka."}),"\n",(0,t.jsxs)(n.p,{children:["At the same time OAS file can be translated to Tapir step-by-step and the endpoint definitions can be ",(0,t.jsx)(n.a,{href:"https://tapir.softwaremill.com/en/latest/server/akkahttp.html",children:"interpreted by Tapir library as Akka routes"}),", and attached to the server endpoint in the same way as generated endpoints."]}),"\n",(0,t.jsx)(n.p,{children:"This transitions period might take 2-3 weeks till engineering team get enough knowledge of using Tapir."}),"\n",(0,t.jsxs)(n.p,{children:["Then all the endpoints are translated to Tapir, it will be possible to switch the interpreter from Akka to ",(0,t.jsx)(n.a,{href:"https://tapir.softwaremill.com/en/latest/server/ziohttp.html",children:"ZIO-HTTP library"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"links-",children:"Links "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAPITools/openapi-generator",children:"OpenAPI Tools"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://tapir.softwaremill.com/en/latest/goals.html",children:"Goals of Tapir library"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://tapir.softwaremill.com/en/latest/index.html",children:"Tapir"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(96540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);