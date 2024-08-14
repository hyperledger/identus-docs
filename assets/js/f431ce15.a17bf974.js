"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[1283],{74541:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(74848),s=n(28453);const o={},a="Quill library for SQL statement generation and validation",l={id:"decisions/2023-01-18-quill-library-for-sql-statement-generation",title:"Quill library for SQL statement generation and validation",description:"- Status: accepted",source:"@site/documentation/adrs/decisions/2023-01-18-quill-library-for-sql-statement-generation.md",sourceDirName:"decisions",slug:"/decisions/2023-01-18-quill-library-for-sql-statement-generation",permalink:"/identus-docs/adrs/decisions/2023-01-18-quill-library-for-sql-statement-generation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"adrsSidebar",previous:{title:"Store private keys of Issuers inside the Cloud Agent",permalink:"/identus-docs/adrs/decisions/2022-10-06-store-private-keys-of-issuers-inside-prism-agent"},next:{title:"DID-linked-resources",permalink:"/identus-docs/adrs/decisions/2023-04-05-did-linked-resources"}},r={},d=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Positive Consequences",id:"positive-consequences",level:3},{value:"Negative Consequences",id:"negative-consequences",level:3},{value:"Pros and Cons of the Options",id:"pros-and-cons-of-the-options",level:2},{value:"Doobie",id:"doobie",level:3},{value:"Doobie+Quill",id:"doobiequill",level:3},{value:"Quill",id:"quill",level:3},{value:"Examples",id:"examples",level:2},{value:"Doobie",id:"doobie-1",level:3},{value:"Quill",id:"quill-1",level:3},{value:"Slick",id:"slick",level:3},{value:"Two more real example of Doobie and Quill usage are in the Links section",id:"two-more-real-example-of-doobie-and-quill-usage-are-in-the-links-section",level:4},{value:"Links",id:"links",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"quill-library-for-sql-statement-generation-and-validation",children:"Quill library for SQL statement generation and validation"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Status: accepted"}),"\n",(0,t.jsx)(i.li,{children:"Deciders: Yurii Shynbuiev, Fabio Pinheiro, Benjamin Voiturier"}),"\n",(0,t.jsx)(i.li,{children:"Date: [2023-01-17]"}),"\n",(0,t.jsx)(i.li,{children:"Tags: DAL, SQL, Postrgresql, Typesafe"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,t.jsx)(i.p,{children:"PostgreSQL is essential to the Identus platform technology stack, where most entities are stored."}),"\n",(0,t.jsx)(i.p,{children:"Backend services: Identus Cloud Agent, Identus Mediator, and PRISM Node use PostgreSQL."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://tpolecat.github.io/doobie/index.html",children:"Doobie"})," library is currently used in Scala code to communicate with Postgresql. Quotes from the website"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"Doobie is a pure functional JDBC layer for Scala and Cats. It is not an ORM, nor is it a relational algebra; \nit simply provides a functional way to construct programs (and higher-level libraries) that use JDBC\ndoobie is a Typelevel project. \nThis means we embrace pure, typeful, functional programming, and provide a safe and friendly environment for teaching, learning, and contributing as described in the Scala Code of Conduct.\n"})}),"\n",(0,t.jsx)(i.p,{children:"Doobie is a good choice for DAL, and this ADR is about something other than replacing it."}),"\n",(0,t.jsx)(i.p,{children:"Writing the SQL statement and mapping the row to the case class is a boilerplate and error-prone activity that the Quill library can optimize."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Writing the code for mapping a table row to a case class and writing the low-level SQL statement is an error-prone and boilerplate thing"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsxs)(i.strong,{children:["Using the ",(0,t.jsx)(i.a,{href:"https://getquill.io/",children:"Quill"})," library on top of Doobie can optimize and improve these things."]}),"\nQuote from the website:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"Quill provides a Quoted Domain Specific Language (QDSL) to express queries in Scala and execute them in a target language. The library\u2019s core is designed to support multiple target languages, currently featuring specializations for Structured Query Language (SQL) and Cassandra Query Language (CQL).\n\n1. Boilerplate-free mapping: The database schema is mapped using simple case classes.\n2. Quoted DSL: Queries are defined inside a quote block. Quill parses each quoted block of code (quotation) at compile time and translates them to an internal Abstract Syntax Tree (AST)\n3. Compile-time query generation: The ctx.run call reads the quotation\u2019s AST and translates it to the target language at compile time, emitting the query string as a compilation message. As the query string is known at compile time, the runtime overhead is very low and similar to using the database driver directly.\n4. Compile-time query validation: If configured, the query is verified against the database at compile time, and the compilation fails if it is not valid. The query validation does not alter the database state.\n"})}),"\n",(0,t.jsxs)(i.p,{children:["There are ",(0,t.jsx)(i.a,{href:"https://scala-slick.org/",children:"Slick"})," and ",(0,t.jsx)(i.a,{href:"http://scalikejdbc.org/",children:"ScalikeJDBC"})," libraries as well."]}),"\n",(0,t.jsx)(i.p,{children:"Comparison of these libraries is not a goal of this ADR, but it's essential to know the differences."}),"\n",(0,t.jsxs)(i.p,{children:["There are good references to take a look at in the ",(0,t.jsx)(i.a,{href:"#links",children:"Links"})," section."]}),"\n",(0,t.jsx)(i.p,{children:"Overall, all libraries have differences in the following aspects:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Metamodel (how to define the schema and type mapping)"}),"\n",(0,t.jsx)(i.li,{children:"Static SQL statement (how and where does the SQL statement is written/generated)"}),"\n",(0,t.jsx)(i.li,{children:"Dynamic SQL statement (how and where does the dynamic SQL statement written/generated)"}),"\n",(0,t.jsx)(i.li,{children:"Connection Management (thread and connection pooling)"}),"\n",(0,t.jsx)(i.li,{children:"Asynchronous API (the high-level API to execute queries blocking or non-blocking)"}),"\n",(0,t.jsx)(i.li,{children:"Asynchronous IO (is IO operation blocking or asynchronous)"}),"\n",(0,t.jsx)(i.li,{children:"Effect library that is used (free-monad, Future, Task, ZIO)"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"decision-drivers",children:"Decision Drivers"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Generate and validate SQL statement based on the convention-over-configuration approach in compile time (type-safe queries)"}),"\n",(0,t.jsx)(i.li,{children:"Reduce boilerplate and error-prone code"}),"\n",(0,t.jsx)(i.li,{children:"Easy to write the dynamic queries"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"considered-options",children:"Considered Options"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Doobie (Quill for the connection pooling, SQL statement execution, and SQL statement writing)"}),"\n",(0,t.jsx)(i.li,{children:"Doobie + Quill (Quill for the connection pooling, SQL statement execution, and SQL statement writing + Quill for the SQL statement generation)"}),"\n",(0,t.jsx)(i.li,{children:"Quill (Quill for the connection pooling, SQL statement execution, and SQL statement writing and generation)"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"decision-outcome",children:"Decision Outcome"}),"\n",(0,t.jsx)(i.p,{children:'Chosen option: "Doobie + Quill" because it\'s the simplest solution that requires minimal changes to the existing code and brings the benefits of automatic SQL statement generation and validation in compile time (see below).'}),"\n",(0,t.jsx)(i.h3,{id:"positive-consequences",children:"Positive Consequences"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"convention-over-configuration approach for the generation and validation of SQL statements using macros in the compile time"}),"\n",(0,t.jsx)(i.li,{children:"easy work with dynamic queries"}),"\n",(0,t.jsx)(i.li,{children:"backward compatible solution (minimum changes are required for the current code base)"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"negative-consequences",children:"Negative Consequences"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"DTO case classes are required for each table to generate the SQL statement based on the convention"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"pros-and-cons-of-the-options",children:"Pros and Cons of the Options"}),"\n",(0,t.jsx)(i.h3,{id:"doobie",children:"Doobie"}),"\n",(0,t.jsx)(i.p,{children:"Doobies library is used as it is right now without any changes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Good, because it is a solid FP library for Postgresql"}),"\n",(0,t.jsx)(i.li,{children:"Good, because it has good documentation and a large community of developers who contribute to the library"}),"\n",(0,t.jsx)(i.li,{children:"Good, because it is built using Free Monad, which makes it composable and easy to integrate with any popular effects library"}),"\n",(0,t.jsx)(i.li,{children:"Bad, because it has a low-level API for writing the SQL statement (boilerplate and error-prone code)"}),"\n",(0,t.jsx)(i.li,{children:"Bad, because it uses blocking IO at the network level"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"doobiequill",children:"Doobie+Quill"}),"\n",(0,t.jsx)(i.p,{children:"Doobie library is used as it is right now, and Quill library is used for SQL statement generation and validation in compile time"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Good, because it ss a solid FP library for Postgresql"}),"\n",(0,t.jsx)(i.li,{children:"Good, because it has good documentation and a large community of developers who contribute to the library"}),"\n",(0,t.jsx)(i.li,{children:"Good, because it is built using Free Monad, which makes it composable and easy to integrate with any popular effects library"}),"\n",(0,t.jsx)(i.li,{children:"Good, because Quill library is used for SQL statement generation at the compile time"}),"\n",(0,t.jsx)(i.li,{children:"Good, because Quill library extends the current solution, and no changes to the code base are required"}),"\n",(0,t.jsx)(i.li,{children:"Bad, because the DTO case class must be created for each table"}),"\n",(0,t.jsx)(i.li,{children:"Bad, because it uses blocking IO at the network level"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"quill",children:"Quill"}),"\n",(0,t.jsx)(i.p,{children:"Quill is used instead of Doobie"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Good, because it is a solid FP library for Postgresql"}),"\n",(0,t.jsx)(i.li,{children:"Good, because it has good documentation and a large community of developers who contribute to the library"}),"\n",(0,t.jsx)(i.li,{children:"Good, because it is built using Free Monad, which makes it composable and easy to integrate with any widespread effects library"}),"\n",(0,t.jsx)(i.li,{children:"Good, because it is used for SQL statement generation at the compile time instead of using Doobie low-level API"}),"\n",(0,t.jsx)(i.li,{children:"Good, because it can be configured to use non-blocking IO at the network level"}),"\n",(0,t.jsxs)(i.li,{children:["Good, because it get rid of the ",(0,t.jsx)(i.code,{children:"cats"})," ecosystem that comes with ",(0,t.jsx)(i.code,{children:"doobie"})," (simplify the dependency management)"]}),"\n",(0,t.jsx)(i.li,{children:"Bad, because significant refactoring of all DAL is required"}),"\n",(0,t.jsx)(i.li,{children:"Bad, because the DTO case class must be created for each table"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.h3,{id:"doobie-1",children:"Doobie"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'import doobie._\nimport doobie.implicits._\nimport doobie.postgres._\n\ncase class Person(id: Int, name: String)\n\nval q = sql"SELECT id, name FROM person WHERE id = 1".query[Person]\n\nval result: ConnectionIO[List[Person]] = q.to[List].transact(Transactor.fromDriverManager[IO](\n  "org.postgresql.Driver", "jdbc:postgresql:world", "username", "password"\n))\n'})}),"\n",(0,t.jsx)(i.h3,{id:"quill-1",children:"Quill"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'import io.getquill._\n\nval ctx = new SqlMirrorContext(PostgresDialect, "ctx")\n\ncase class Person(id: Int, name: String)\n\nval q = quote {\n  query[Person].filter(p => p.id == 1)\n}\n\nval result: List[Person] = ctx.run(q)\n'})}),"\n",(0,t.jsx)(i.h3,{id:"slick",children:"Slick"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'import slick.jdbc.PostgresProfile.api._\n\nval db = Database.forConfig("database")\n\ncase class Person(id: Int, name: String)\n\nval q = TableQuery[Person].filter(_.id === 1)\n\nval result: Future[Seq[Person]] = db.run(q.result)\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"two-more-real-example-of-doobie-and-quill-usage-are-in-the-links-section",children:["Two more real example of Doobie and Quill usage are in the ",(0,t.jsx)(i.a,{href:"#links",children:"Links"})," section"]}),"\n",(0,t.jsx)(i.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://softwaremill.com/comparing-scala-relational-database-access-libraries/",children:"Comparing Scala relational database access libraries"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://scala-slick.org/docs/compare-alternatives",children:"Comparison with Alternatives"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.libhunt.com/compare-doobie-vs-zio-quill",children:"Doobie vs Quill"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.libhunt.com/compare-slick--slick-vs-doobie?ref=compare",children:"Slick vs Doobie"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://medium.com/@takezoe/database-access-libraries-in-scala-7aa7590aa3db",children:"Database access libraries in Scala"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://godatadriven.com/blog/typechecking-sql-queries-with-doobie/",children:"Typechecking SQL queries with doobie"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://underscore.io/blog/posts/2015/05/28/typechecking-sql.html",children:"Typechecking SQL in Slick and doobie"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/hyperledger/identus-cloud-agent/blob/pollux-v0.17.0/pollux/lib/sql-doobie/src/main/scala/io/iohk/atala/pollux/sql/repository/JdbcCredentialRepository.scala",children:"Doobie example in the Pollux library"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/hyperledger/identus-cloud-agent/blob/pollux-v0.17.0/pollux/lib/sql-doobie/src/main/scala/io/iohk/atala/pollux/sql/model/VerifiableCredentialSchema.scala",children:"Quill example in the Pollux library"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var t=n(96540);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);