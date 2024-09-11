"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[1018],{20750:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=o(74848),r=o(28453);const t={},s="Troubleshooting & Considerations",l={id:"identus/troubleshooting&considerations",title:"Troubleshooting & Considerations",description:"Docker Logging Management Considerations",source:"@site/documentation/docs/identus/troubleshooting&considerations.md",sourceDirName:"identus",slug:"/identus/troubleshooting&considerations",permalink:"/identus-docs/docs/identus/troubleshooting&considerations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Mediator",permalink:"/identus-docs/docs/identus/mediator"},next:{title:"Getting Help",permalink:"/identus-docs/docs/identus/getting-help"}},a={},c=[{value:"Docker Logging Management Considerations",id:"docker-logging-management-considerations",level:2},{value:"Configuring Docker Compose for Effective Log Management",id:"configuring-docker-compose-for-effective-log-management",level:3},{value:"Log Rotation Example",id:"log-rotation-example",level:3},{value:"Configuring Docker Daemon for Effective Log Management",id:"configuring-docker-daemon-for-effective-log-management",level:3},{value:"Docker logging drivers",id:"docker-logging-drivers",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"troubleshooting--considerations",children:"Troubleshooting & Considerations"})}),"\n",(0,i.jsx)(n.h2,{id:"docker-logging-management-considerations",children:"Docker Logging Management Considerations"}),"\n",(0,i.jsx)(n.p,{children:"When setting up a long-running environment using Docker Compose, it\u2019s important to consider several factors to avoid issues such as excessive log file sizes leading to out-of-memory errors."}),"\n",(0,i.jsx)(n.h3,{id:"configuring-docker-compose-for-effective-log-management",children:"Configuring Docker Compose for Effective Log Management"}),"\n",(0,i.jsx)(n.p,{children:"To ensure your Docker containers run smoothly and avoid problems related to excessive log file growth, configure log rotation in your docker-compose.yml file. This will help manage log file sizes and prevent out-of-memory errors caused by uncontrolled log growth."}),"\n",(0,i.jsx)(n.h3,{id:"log-rotation-example",children:"Log Rotation Example"}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s a example in the mediator how to set up log rotation in your Docker Compose configuration:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your docker-compose.yml file."}),"\n",(0,i.jsx)(n.li,{children:"Add or update the logging configuration under your service definition. For example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'version: \'3.8\'\n\nservices:\n  identus-mediator:\n    image: ghcr.io/input-output-hk/atala-prism-mediator:0.14.2\n    logging:\n      driver: json-file\n      options:\n        max-size: "10m"\n        max-file: "3"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"driver"}),": Specifies the logging driver to use. The json-file driver is the default and supports log rotation options."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max-size"}),": Sets the maximum size of the log file before it gets rotated. In the example above, the log file will be rotated when it reaches 10 MB."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max-file"}),": Determines the number of rotated log files to keep. In this example, up to 3 log files will be kept before old files are deleted."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Save the changes to your ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file and ",(0,i.jsx)(n.strong,{children:"Restart"})," your Docker containers to apply the new logging configuration."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configuring-docker-daemon-for-effective-log-management",children:"Configuring Docker Daemon for Effective Log Management"}),"\n",(0,i.jsxs)(n.p,{children:["We should consider configuring the logging Options in the ",(0,i.jsx)(n.strong,{children:"Docker Daemon"}),". For a global logging configuration applicable to all Docker containers. We can modify the Docker daemon settings. This approach ensures consistent log management across all containers."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Edit the Docker daemon configuration file (usually located at /etc/docker/daemon.json). If the file doesn\u2019t exist, you can create it."}),"\n",(0,i.jsxs)(n.li,{children:["Add or update the logging options in the ",(0,i.jsx)(n.code,{children:"daemon.json"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "10m",\n    "max-file": "3"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Restart the Docker daemon to apply the new settings:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo systemctl restart docker\n"})}),"\n",(0,i.jsx)(n.h4,{id:"docker-logging-drivers",children:"Docker logging drivers"}),"\n",(0,i.jsxs)(n.p,{children:["For more information see ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/logging/configure/#supported-logging-drivers",children:"https://docs.docker.com/engine/logging/configure/#supported-logging-drivers"})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var i=o(96540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);