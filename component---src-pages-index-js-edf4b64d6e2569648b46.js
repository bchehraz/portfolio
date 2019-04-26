(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{133:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),o=n(46),r=n.n(o),l=n(0),s=n.n(l),c=n(137),d=n(136),m=n(196),p=n(142),u=d.a.div.withConfig({displayName:"FloatingIcon__Container",componentId:"sc-13p6mlp-0"})(["animation:animationFrames ease-in-out 1s;animation-iteration-count:infinite;transform-origin:50% 50%;-webkit-animation:animationFrames ease-in-out 1s;-webkit-animation-iteration-count:infinite;-webkit-transform-origin:50% 50%;-moz-animation:animationFrames ease-in-out 1s;-moz-animation-iteration-count:infinite;-moz-transform-origin:50% 50%;-o-animation:animationFrames ease-in-out 1s;-o-animation-iteration-count:infinite;-o-transform-origin:50% 50%;-ms-animation:animationFrames ease-in-out 1s;-ms-animation-iteration-count:infinite;-ms-transform-origin:50% 50%;padding:2em;@keyframes animationFrames{0%{transform:translate(0px,-26px);}50%{transform:translate(0px,-11px);}100%{transform:translate(0px,-26px);}}@-moz-keyframes animationFrames{0%{-moz-transform:translate(0px,-26px);}50%{-moz-transform:translate(0px,-11px);}100%{-moz-transform:translate(0px,-26px);}}@-webkit-keyframes animationFrames{0%{-webkit-transform:translate(0px,-26px);}50%{-webkit-transform:translate(0px,-11px);}100%{-webkit-transform:translate(0px,-26px);}}@-o-keyframes animationFrames{0%{-o-transform:translate(0px,-26px);}50%{-o-transform:translate(0px,-11px);}100%{-o-transform:translate(0px,-26px);}}@-ms-keyframes animationFrames{0%{-ms-transform:translate(0px,-26px);}50%{-ms-transform:translate(0px,-11px);}100%{-ms-transform:translate(0px,-26px);}}"]),f=function(e){var t=e.children;return s.a.createElement(u,null,t)},g=n(151),h=n(152);n.d(t,"query",function(){return C});var b=d.a.div.withConfig({displayName:"pages__HeadingContainer",componentId:"sc-6kvjaa-0"})(["display:flex;height:500px;flex-flow:column nowrap;justify-content:flex-start;align-items:center;align-content:flex-start;padding:2em;margin:0 auto;h1{font-size:1.4em;}h2{font-size:1em;}@media only screen and (min-width:1200px){padding:2em;h1{font-size:2em;}h2{font-size:1.7em;}}@media only screen and (min-width:800px){padding:2em;justify-content:center;height:calc(100vh - 6em);h1{font-size:1.7em;}h2,p{font-size:1.3em;}}"]),x=d.a.span.withConfig({displayName:"pages__EmailText",componentId:"sc-6kvjaa-1"})(["color:#0099ff;text-decoration:underline;"]),w=d.a.div.withConfig({displayName:"pages__ProjectsContainer",componentId:"sc-6kvjaa-2"})(["display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-area:main;grid-row-gap:10px;justify-content:start;justify-items:stretch;align-content:stretch;justify-content:space-evenly;align-items:stretch;grid-auto-flow:row;padding:10px;margin:0 auto;a{text-decoration:none;}@media only screen and (min-width:800px){grid-template-columns:repeat(2,1fr);grid-gap:10px;}@media only screen and (min-width:1300px){grid-template-columns:repeat(3,1fr);}"]),y=d.a.div.withConfig({displayName:"pages__ProjectsHeaderContainer",componentId:"sc-6kvjaa-3"})(["padding:1.5em;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;"]),v=d.a.div.withConfig({displayName:"pages__LabsContainer",componentId:"sc-6kvjaa-4"})(["display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-area:main;grid-gap:10px;justify-content:start;justify-items:stretch;align-content:stretch;grid-auto-flow:row;padding:10px;margin:0;a{text-decoration:none;}@media only screen and (min-width:800px){grid-template-columns:repeat(2,1fr);}@media only screen and (min-width:1300px){grid-template-columns:repeat(3,1fr);}"]),E=d.a.div.withConfig({displayName:"pages__LabsHeaderContainer",componentId:"sc-6kvjaa-5"})(["padding:1.5em;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;"]),k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={projectCount:0,labCount:0},n.projectsRef=s.a.createRef(),n.scroll=n.scroll.bind(r()(r()(n))),n.getProjectCount=n.getProjectCount.bind(r()(r()(n))),n}i()(t,e);var n=t.prototype;return n.scroll=function(e){e.current.scrollIntoView({behavior:"smooth"})},n.getProjectCount=function(){return this.setState(function(e){return{projectCount:e.projectCount+1}}),0},n.getLabCount=function(){var e=this.state.labCount;return this.setState({labCount:e+1}),e},n.render=function(){var e=this,t=this.props.data,n="/portfolio/"===t.allMarkdownRemark.group[0].fieldValue?t.allMarkdownRemark.group[0].edges:t.allMarkdownRemark.group[1].edges,a="/labs/"===t.allMarkdownRemark.group[0].fieldValue?t.allMarkdownRemark.group[0].edges:t.allMarkdownRemark.group[1].edges;return s.a.createElement(p.a,null,s.a.createElement(b,null,s.a.createElement("div",null,s.a.createElement("h1",null,"Hi, I'm a Software Developer from Fresno, California."),s.a.createElement("h1",null,"I can help you build your next website."),s.a.createElement("p",null,"I design and build responsive full-stack web applications"),s.a.createElement("p",null,"Have a project you'd like to discuss? ","Let's chat! ",s.a.createElement("a",{href:"mailto:babak.chehraz@gmail.com"},s.a.createElement(x,null,"babak.chehraz@gmail.com")))),s.a.createElement("div",{onClick:function(){return e.scroll(e.projectsRef)},onKeyPress:function(){return e.scroll(e.projectsRef)},role:"button",tabIndex:-1,style:{outline:"none"}},s.a.createElement(f,null,s.a.createElement(m.a,{size:50})))),s.a.createElement("div",null,s.a.createElement(y,{ref:this.projectsRef},s.a.createElement("h2",null,s.a.createElement("span",{id:"projects"},"Portfolio")),s.a.createElement("h3",null,s.a.createElement(c.Link,{to:"/portfolio"},"See All"))),s.a.createElement(w,null,n.map(function(e,t){var n=e.node;return t<8&&s.a.createElement(c.Link,{to:n.fields.slug,key:n.id},s.a.createElement(g.a,{title:n.frontmatter.title,description:n.frontmatter.description,startDate:n.frontmatter.startDate,duration:n.frontmatter.duration,type:n.frontmatter.type,index:t}))}),s.a.createElement(g.a,{title:"GoalTrackr: The Alternative to Long Titles",description:"React JS, Gatsby, GraphQL",startDate:"November 2018",duration:"3 months",type:"webApp",index:1}),s.a.createElement(g.a,{title:"GoalTrackr",description:"React JS, Gatsby, GraphQL",startDate:"November 2018",duration:"3 months",type:"webApp",index:2}),s.a.createElement(g.a,{title:"Authentication",description:"React Native, GraphQL",startDate:"November 2018",duration:"3 months",type:"mobileApp",index:3}),s.a.createElement(g.a,{title:"GoalTrackr",description:"React JS, Gatsby, GraphQL",startDate:"November 2018",duration:"3 months",type:"webApp",index:4}),s.a.createElement(g.a,{title:"Authentication",description:"React Native, GraphQL",demoLink:"/Authentication",blogLink:"/Authentication/blog",startDate:"November 2018",duration:"3 months",type:"mobileApp",index:5}),s.a.createElement(g.a,{title:"GoalTrackr",description:"React JS, Gatsby, GraphQL",demoLink:"/GoalTrackr",blogLink:"/GoalTrackr/blog",startDate:"November 2018",duration:"3 months",type:"webApp",index:6}),s.a.createElement(g.a,{title:"GoalTrackr",description:"React JS, Gatsby, GraphQL",demoLink:"/GoalTrackr",blogLink:"/GoalTrackr/blog",startDate:"November 2018",duration:"3 months",type:"webApp",index:7}))),s.a.createElement("div",null,s.a.createElement(E,null,s.a.createElement("h2",null,"Code Labs"),s.a.createElement("h3",null,s.a.createElement(c.Link,{to:"/labs"},"See All"))),s.a.createElement(v,null,a.map(function(e,t){var n=e.node;return t<8&&s.a.createElement(c.Link,{to:n.fields.slug,key:n.id},s.a.createElement(h.a,{title:n.frontmatter.title,date:n.frontmatter.date,type:n.frontmatter.type,index:t}))}))))},t}(s.a.Component),C=(t.default=k,"3307193478")},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return u});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(135),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(138),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var m=n(28);n.d(t,"parsePath",function(){return m.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},138:function(e,t,n){var a;e.exports=(a=n(139))&&a.default||a},139:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(47),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio Site"}},logoImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnklEQVQY003PuwrCQBCF4bETjYWCRG28BDtLyyDeHsNKAhZioYVd2qRQEEVE8AJWgo1P4Lv5iyeQhW93mT3MsGZmIzj2X21JrzrG6KKpmqezhUEqm/ltZ0wRYIMYE8wU9nHDEyvV7xq0xhAL1JKue2zxxgMvnPDBUpkIBw274IoOQsxxRC/5aQFFVFCVHHboq2FJYUf3suouGsjrLfsFXTQVLS14hxMAAAAASUVORK5CYII=",aspectRatio:5.12,src:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png",srcSet:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/0552a/logo_expanded.png 75w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/fc3be/logo_expanded.png 150w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png 300w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/24f49/logo_expanded.png 450w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/5497d/logo_expanded.png 600w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/6a61b/logo_expanded.png 900w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/b2120/logo_expanded.png 1920w",sizes:"(max-width: 300px) 100vw, 300px"}}},logoImage2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAC4jAAAuIwF4pT92AAADnUlEQVQ4y6WUWSj9WxTH3TqndCmZknko/e/1YBYZQ5kpL16IRMmD4UVKpvIgY2aFEvFkikiR8Q15ce4+LnLLFOEJpb+f/Vt3rdU5P9w6bre7arWH89ufs/Ze37WsAMAKTYeu/5+u293dtWKYra3tUlZW1llhYaEhPz9fFBQUiKKiIlFcXCxwT+Tm5oqUlBSRmpoq0tPTRVpamuaZmZmG+Pj4M71ev4wsawLqIyIizoxGIwwNDcHY2BgMDw9DR0cHtLW1QU9PDxwdHcF3dnV1BQ4ODn8h61cGJicnGwYHB+nuCrokz8nJkbW1tTxvbW2Vb29v8vDwUOL5f7pycXEBjo6ORg2YmJgoKDI67O/vryJcnZiYUPFj1c/PT8Uo1ZWVFXbae39/V8mklLSWJuCxBkxKShKjo6MMXFtbg7y8PIiLi+Pr+Pj4QENDAz/Dy8sL7yGLx2+BIyMjDJycnISAgADIyMjgQ+Hh4VBdXQ1zc3O8xui0t7MIpCubgTY2NjRCdnY2R4LZhsbGRjg5OTFD/j3Cz0CdTsdAlBFH09vbC52dnQwh2GdXFMXylemNTBlmYGxsLEcxPT0NXV1dlhTDwMvLS5LNBzAhIUFMTU2Bvb299PT0BDs7O46QDEUOFRUVnBA6eHNzw359fU36Ux8fH+X5+Tk4OTl9AIODg8XT0xPc39/Lu7s7uL29hYeHBy0pFLG3tzc4OzvTQR5dXFzomqqbm5vEkgMPD48PYGBgoKA3MQlVMxQyNDc3w87ODgwMDDA4KioKhBDg7u5Oa7WlpUXu7++Dq6vrBzAoKEhgJTDQNMLi4iIsLy9DWVkZGAwGODg4YOD4+Limz9DQULW/v18uLCzQ+isQM6ZFSPPKykrtypubmxwlAY+Pj3mf3hrfVsWmIefn5y0DzRpbWlqC5+dniI6Ohq2tLdjY2IDIyEiYmZnh32NiYug5VOxUcn19Hby8vCwDzVCykJAQoHLc29uDkpISKC0t5f2amhrAVqeS1La3tyni74GmNYSFhXHZ0Rp7o1bjtOfr68tAusEXIGb5j9fXVy5VUj85Joc7C36oouh5jvpUUR487+vrIxj5++rq6tcrY7aMn5T/xaj0zHVcVVUF1DfJZmdnoby8HOrr69XT01NAPf6pAVGkR3V1ddDU1PQTW5VidvxYwc6toNZ43d3drbS3t/M+Nl1eY6Q/6Y+sra0FA7HkCOqL/jv6D/Tf/qP/MJ31w7b3y98Ovd7hnhnyMAAAAABJRU5ErkJggg==",aspectRatio:.9,src:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png",srcSet:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/0552a/logo.png 75w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/fc3be/logo.png 150w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png 300w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/24f49/logo.png 450w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/5497d/logo.png 600w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/6a61b/logo.png 900w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},141:function(e,t,n){},142:function(e,t,n){"use strict";var a=n(140),i=n(0),o=n.n(i),r=n(4),l=n.n(r),s=n(145),c=n.n(s),d=n(137),m=n(136),p=n(6),u=n.n(p),f=n(46),g=n.n(f),h=m.a.div.withConfig({displayName:"MenuButton__Burger",componentId:"jyhd57-0"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;height:40px;margin:0 auto;width:50px;z-index:6;"]),b=m.a.div.withConfig({displayName:"MenuButton__Bar",componentId:"jyhd57-1"})(["width:80%;height:8px;background-color:black;border-radius:20px;&:first-child{width:100%;}&:last-child{width:60%;}"]),x=m.a.div.withConfig({displayName:"MenuButton__Container",componentId:"jyhd57-2"})(["max-width:150px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0.5em;-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;cursor:pointer;"]),w=m.a.span.withConfig({displayName:"MenuButton__MenuButtonText",componentId:"jyhd57-3"})(["padding:0;"]),y=m.a.div.withConfig({displayName:"MenuButton__MenuButtonClose",componentId:"jyhd57-4"})(["z-index:6;"]),v=o.a.createElement(h,null,o.a.createElement(b,null),o.a.createElement(b,null),o.a.createElement(b,null)),E=o.a.createElement(h,null,o.a.createElement(y,null,o.a.createElement("h1",null,"X"))),k=function(e){var t=e.isOpen,n=e.onMouseDown;return o.a.createElement(x,{onMouseDown:n},o.a.createElement(h,null,t?E:v),o.a.createElement(w,null))},C=m.a.div.withConfig({displayName:"menu__Container",componentId:"ldryeq-0"})([""]),A=m.a.div.withConfig({displayName:"menu__MenuOuterContainer",componentId:"ldryeq-1"})(["position:absolute;top:0;left:0;width:100%;height:100vh;z-index:",";background-color:rgba(255,255,255,1);opacity:",";-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;padding:2em 0;a{text-decoration:none;max-width:500px;padding:2em 4em;}a:hover{background:rgba(0,0,0,0);}*{-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;}"],function(e){return e.isOpen?5:-1},function(e){return e.isOpen||0}),L=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n.toggleMenu=n.toggleMenu.bind(g()(g()(n))),n.closeMenu=n.closeMenu.bind(g()(g()(n))),n}u()(t,e);var n=t.prototype;return n.toggleMenu=function(e){e.preventDefault();var t=this.state.isOpen;this.setState({isOpen:!t})},n.closeMenu=function(e){e.preventDefault(),this.setState({isOpen:!1})},n.render=function(){var e=this.state.isOpen;return o.a.createElement(C,null,o.a.createElement(k,{isOpen:e,onMouseDown:this.toggleMenu}),o.a.createElement(A,{isOpen:e,onMouseDown:this.closeMenu},o.a.createElement(d.Link,{to:"/"},o.a.createElement("h2",null,"About")),o.a.createElement(d.Link,{to:"/portfolio"},o.a.createElement("h2",null,"Portfolio")),o.a.createElement(d.Link,{to:"/labs"},o.a.createElement("h2",null,"Labs")),o.a.createElement(d.Link,{to:"/contact"},o.a.createElement("h2",null,"Contact Me"))))},t}(o.a.Component),j=m.a.h1.withConfig({displayName:"header__NameHeading",componentId:"sc-31ozxh-0"})(["color:black;padding:0;line-height:1.5em;font-size:1.7em;white-space:nowrap;margin:0;"]),I=m.a.h1.withConfig({displayName:"header__SubHeading",componentId:"sc-31ozxh-1"})(["color:rgba(0,0,0,0.4);padding:0;line-height:1em;font-size:1.30em;white-space:nowrap;margin:0;"]),z=m.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["margin:0 auto;width:100%;padding:1em 2em;display:flex;flex-direction:row;align-items:center;justify-content:space-between;@media only screen and (max-width:370px){.NameHeading{font-size:1.4em;}.SubHeading{font-size:1em;}}@media only screen and (max-width:333px){.NameHeading{font-size:1.2em;}.SubHeading{font-size:0.8em;}}"]),M=m.a.div.withConfig({displayName:"header__HeadingContainer",componentId:"sc-31ozxh-3"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:0 0;"]),_=function(){return o.a.createElement(z,null,o.a.createElement(M,null,o.a.createElement(d.Link,{to:"/",style:{color:"black",textDecoration:"none"}},o.a.createElement(j,{className:"NameHeading"},"Babak Chehraz")),o.a.createElement(I,{className:"SubHeading"},"Software Developer")),o.a.createElement(L,null))},D=m.a.div.withConfig({displayName:"footer__Container",componentId:"r54yyk-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:0;width:100%;margin:0 auto;a{text-decoration:none;}"]),N=function(e){var t=e.showing;return o.a.createElement("div",{style:{textAlign:"center",padding:"2em 0",display:!1===t?"none":"block"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100%",padding:"1em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},o.a.createElement(D,null,o.a.createElement("h4",null,"Let's Talk"),o.a.createElement("p",null,"Wanna get in touch or talk about a project?",o.a.createElement("br",null),"Feel free to contact me via email at ",o.a.createElement("a",{href:"mailto:babak.chehraz@gmail.com"},o.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"babak.chehraz@gmail.com")),o.a.createElement("br",null),"or drop a line in the form at the ",o.a.createElement(d.Link,{to:"/contact"},o.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"contact page"))))))},R=(n(141),function(e){var t=e.children,n=e.showFooter;return o.a.createElement(d.StaticQuery,{query:"728243612",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{style:{borderTop:"3px solid #0099ff"}},o.a.createElement("div",{style:{height:"auto",maxWidth:"1250px",margin:"0 auto"}},o.a.createElement(_,null),o.a.createElement("div",{style:{margin:"0 auto",padding:"0"}},t),o.a.createElement(N,{showing:n}))))},data:a})});R.propTypes={children:l.a.node.isRequired};t.a=R},151:function(e,t,n){"use strict";n(146);var a=n(6),i=n.n(a),o=n(0),r=n.n(o),l=n(136),s=(n(137),l.a.div.withConfig({displayName:"ProjectListing__Container",componentId:"sc-1a0zg9g-0"})(["display:flex;flex-direction:column-reverse;justify-content:space-between;align-items:baseline;@media only screen and (min-width:600px){flex-direction:row;}"])),c=l.a.div.withConfig({displayName:"ProjectListing__HeaderContainer",componentId:"sc-1a0zg9g-1"})([""]),d=l.a.div.withConfig({displayName:"ProjectListing__DateContainer",componentId:"sc-1a0zg9g-2"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;align-content:flex-end;"]),m=l.a.div.withConfig({displayName:"ProjectListing__LinksContainer",componentId:"sc-1a0zg9g-3"})(["display:flex;flex-direction:column;text-align:left;white-space:nowrap;"]),p=l.a.div.withConfig({displayName:"ProjectListing__ListingContainer",componentId:"sc-1a0zg9g-4"})(["display:flex;flex-direction:column;justify-content:space-between;padding:2em 1em;border:3px solid white;border-radius:25px;background-color:rgba(3,3,3,0.3);background-color:",";max-width:100vw;min-height:300px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;&:hover{background-color:white;border:3px solid ",";border-bottom-width:1em;padding-bottom:1.5em;}h1{font-size:2em;}"],function(e){return e.randomColor},function(e){return e.randomColor}),u=l.a.p.withConfig({displayName:"ProjectListing__Subheading",componentId:"sc-1a0zg9g-5"})(["margin:0;padding:0;"]),f=function(e){function t(t){var n;n=e.call(this,t)||this;var a=0,i=t.index%8;return a=Math.floor(t.index/8)%2==0?Math.floor(16*Math.random())+128+16*i:Math.floor(16*Math.random())+128+16*(7-i),n.state={randomColor:"#00"+a.toString(16)+"ff"},n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.duration,a=e.startDate,i=e.description,o=e.type,l=this.state.randomColor;return r.a.createElement(p,{randomColor:l},r.a.createElement(s,null,r.a.createElement(c,null,r.a.createElement("h1",null,t),r.a.createElement("p",null,i)),r.a.createElement(m,null,r.a.createElement(u,null,"mobileApp"===o?"Mobile App":"Web App"))),r.a.createElement(d,null,r.a.createElement(u,null,a),r.a.createElement(u,null,n)))},t}(r.a.Component);t.a=f},152:function(e,t,n){"use strict";n(146);var a=n(6),i=n.n(a),o=n(0),r=n.n(o),l=n(136),s=(n(137),l.a.div.withConfig({displayName:"LabListing__ListingContainer",componentId:"sc-1gqgsi-0"})(["display:flex;flex-direction:column;justify-content:space-between;padding:2em 1em;border:2px solid white;border-radius:25px;background-color:rgba(3,3,3,0.3);background-color:",";max-width:100vw;min-height:300px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;&:hover{background-color:white;border:3px solid ",";border-bottom-width:1em;padding-bottom:1.5em;}h1{font-size:2em;}"],function(e){return e.randomColor},function(e){return e.randomColor})),c=l.a.div.withConfig({displayName:"LabListing__Container",componentId:"sc-1gqgsi-1"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;align-content:flex-end;"]),d=(l.a.div.withConfig({displayName:"LabListing__DateContainer",componentId:"sc-1gqgsi-2"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;align-content:flex-end;"]),l.a.p.withConfig({displayName:"LabListing__Subheading",componentId:"sc-1gqgsi-3"})(["margin:0;padding:0;"])),m=function(e){function t(t){var n;n=e.call(this,t)||this;var a=0,i=t.index%8;return a=Math.floor(t.index/8)%2==0?Math.floor(16*Math.random())+128+16*(7-i):Math.floor(16*Math.random())+128+16*i,n.state={randomColor:"#00ff"+a.toString(16)},n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,a=e.type,i=this.state.randomColor;return r.a.createElement(s,{randomColor:i},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("h2",null,t)),r.a.createElement(c,null,r.a.createElement(d,null,"Article"===a?a:"Code Lab"),r.a.createElement(d,null,""+n)))},t}(r.a.Component);t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-edf4b64d6e2569648b46.js.map