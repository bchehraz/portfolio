(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return h});var n=a(0),o=a.n(n),i=(a(136),a(135)),l=a(143),r=(a(144),a(141)),c=i.a.div.withConfig({displayName:"lab__Container",componentId:"sc-1duyjt5-0"})(["padding:0;margin:0 auto;display:flex;flex-flow:column nowrap;align-items:flex-start;width:100vw;max-width:1000px;"]),d=i.a.div.withConfig({displayName:"lab__LinkContainer",componentId:"sc-1duyjt5-1"})(["width:100%;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),s=i.a.div.withConfig({displayName:"lab__DisqusContainer",componentId:"sc-1duyjt5-2"})(["height:400px;margin:0 auto;display:flex;justify-content:center;width:100%;border:5px dotted blue;"]),u=i.a.div.withConfig({displayName:"lab__Disqus",componentId:"sc-1duyjt5-3"})(["border:5px dotted green;margin:0 auto;"]),m=i.a.div.withConfig({displayName:"lab__Content",componentId:"sc-1duyjt5-4"})(["padding:2em 0;"]),p=i.a.span.withConfig({displayName:"lab__ButtonSpan",componentId:"sc-1duyjt5-5"})(["padding-right:5px;"]),f=i.a.div.withConfig({displayName:"lab__ImageContainer",componentId:"sc-1duyjt5-6"})([""]),g="localhost:8000";t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter,n=a.title,i=a.date,h=a.type,w=a.ghLink,y=a.demoLink,b=(a.path,t.fields.slug);return o.a.createElement(r.a,null,o.a.createElement(c,null,o.a.createElement("h3",{style:{color:"#333"}},"<"+h+">"),o.a.createElement("h1",null,n),o.a.createElement("h4",{style:{color:"#666"}},"Posted "+i),o.a.createElement(d,null,o.a.createElement("div",null,y&&o.a.createElement(p,null,o.a.createElement(l.AwesomeButton,{ripple:!0,href:y,target:"_blank"},"Demo")),w&&o.a.createElement(p,null,o.a.createElement(l.AwesomeButtonSocial,{type:"github",ripple:!0,href:w,target:"_blank"},"View Source"))),o.a.createElement("div",null,o.a.createElement(p,null,o.a.createElement(l.AwesomeButtonSocial,{type:"facebook",url:""+g+b,ripple:!0})),o.a.createElement(p,null,o.a.createElement(l.AwesomeButtonSocial,{type:"twitter",url:""+g+b,ripple:!0})),o.a.createElement(p,null,o.a.createElement(l.AwesomeButtonSocial,{type:"gplus",url:""+g+b,ripple:!0})))),o.a.createElement(f,null),o.a.createElement(m,{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement(s,null,o.a.createElement(u,null,o.a.createElement("h1",null,"DISQUS Container")))))};var h="1171785125"},136:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),o=a.n(n),i=a(4),l=a.n(i),r=a(134),c=a.n(r);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return r.withPrefix}),a.d(t,"navigate",function(){return r.navigate}),a.d(t,"push",function(){return r.push}),a.d(t,"replace",function(){return r.replace}),a.d(t,"navigateTo",function(){return r.navigateTo});var d=a(137),s=a.n(d);a.d(t,"PageRenderer",function(){return s.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var m=o.a.createContext({}),p=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},137:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},138:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),o=a.n(n),i=a(4),l=a.n(i),r=a(47),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},139:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}},logoImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnklEQVQY003PuwrCQBCF4bETjYWCRG28BDtLyyDeHsNKAhZioYVd2qRQEEVE8AJWgo1P4Lv5iyeQhW93mT3MsGZmIzj2X21JrzrG6KKpmqezhUEqm/ltZ0wRYIMYE8wU9nHDEyvV7xq0xhAL1JKue2zxxgMvnPDBUpkIBw274IoOQsxxRC/5aQFFVFCVHHboq2FJYUf3suouGsjrLfsFXTQVLS14hxMAAAAASUVORK5CYII=",aspectRatio:5.12,src:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png",srcSet:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/0552a/logo_expanded.png 75w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/fc3be/logo_expanded.png 150w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png 300w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/24f49/logo_expanded.png 450w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/5497d/logo_expanded.png 600w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/6a61b/logo_expanded.png 900w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/b2120/logo_expanded.png 1920w",sizes:"(max-width: 300px) 100vw, 300px"}}},logoImage2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAC4jAAAuIwF4pT92AAADnUlEQVQ4y6WUWSj9WxTH3TqndCmZknko/e/1YBYZQ5kpL16IRMmD4UVKpvIgY2aFEvFkikiR8Q15ce4+LnLLFOEJpb+f/Vt3rdU5P9w6bre7arWH89ufs/Ze37WsAMAKTYeu/5+u293dtWKYra3tUlZW1llhYaEhPz9fFBQUiKKiIlFcXCxwT+Tm5oqUlBSRmpoq0tPTRVpamuaZmZmG+Pj4M71ev4wsawLqIyIizoxGIwwNDcHY2BgMDw9DR0cHtLW1QU9PDxwdHcF3dnV1BQ4ODn8h61cGJicnGwYHB+nuCrokz8nJkbW1tTxvbW2Vb29v8vDwUOL5f7pycXEBjo6ORg2YmJgoKDI67O/vryJcnZiYUPFj1c/PT8Uo1ZWVFXbae39/V8mklLSWJuCxBkxKShKjo6MMXFtbg7y8PIiLi+Pr+Pj4QENDAz/Dy8sL7yGLx2+BIyMjDJycnISAgADIyMjgQ+Hh4VBdXQ1zc3O8xui0t7MIpCubgTY2NjRCdnY2R4LZhsbGRjg5OTFD/j3Cz0CdTsdAlBFH09vbC52dnQwh2GdXFMXylemNTBlmYGxsLEcxPT0NXV1dlhTDwMvLS5LNBzAhIUFMTU2Bvb299PT0BDs7O46QDEUOFRUVnBA6eHNzw359fU36Ux8fH+X5+Tk4OTl9AIODg8XT0xPc39/Lu7s7uL29hYeHBy0pFLG3tzc4OzvTQR5dXFzomqqbm5vEkgMPD48PYGBgoKA3MQlVMxQyNDc3w87ODgwMDDA4KioKhBDg7u5Oa7WlpUXu7++Dq6vrBzAoKEhgJTDQNMLi4iIsLy9DWVkZGAwGODg4YOD4+Limz9DQULW/v18uLCzQ+isQM6ZFSPPKykrtypubmxwlAY+Pj3mf3hrfVsWmIefn5y0DzRpbWlqC5+dniI6Ohq2tLdjY2IDIyEiYmZnh32NiYug5VOxUcn19Hby8vCwDzVCykJAQoHLc29uDkpISKC0t5f2amhrAVqeS1La3tyni74GmNYSFhXHZ0Rp7o1bjtOfr68tAusEXIGb5j9fXVy5VUj85Joc7C36oouh5jvpUUR487+vrIxj5++rq6tcrY7aMn5T/xaj0zHVcVVUF1DfJZmdnoby8HOrr69XT01NAPf6pAVGkR3V1ddDU1PQTW5VidvxYwc6toNZ43d3drbS3t/M+Nl1eY6Q/6Y+sra0FA7HkCOqL/jv6D/Tf/qP/MJ31w7b3y98Ovd7hnhnyMAAAAABJRU5ErkJggg==",aspectRatio:.9,src:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png",srcSet:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/0552a/logo.png 75w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/fc3be/logo.png 150w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png 300w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/24f49/logo.png 450w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/5497d/logo.png 600w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/6a61b/logo.png 900w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},140:function(e,t,a){},141:function(e,t,a){"use strict";var n=a(139),o=a(0),i=a.n(o),l=a(4),r=a.n(l),c=a(142),d=a.n(c),s=a(136),u=a(135),m=a(6),p=a.n(m),f=a(46),g=a.n(f),h=u.a.div.withConfig({displayName:"MenuButton__Burger",componentId:"jyhd57-0"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;height:40px;margin:0 auto;width:50px;cursor:pointer;z-index:6;"]),w=u.a.div.withConfig({displayName:"MenuButton__Bar",componentId:"jyhd57-1"})(["width:80%;height:8px;background-color:black;border-radius:20px;&:first-child{width:100%;}&:last-child{width:60%;}cursor:pointer;"]),y=u.a.div.withConfig({displayName:"MenuButton__Container",componentId:"jyhd57-2"})(["max-width:150px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:20px;-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;"]),b=u.a.span.withConfig({displayName:"MenuButton__MenuButtonText",componentId:"jyhd57-3"})(["padding:0;"]),x=u.a.div.withConfig({displayName:"MenuButton__MenuButtonClose",componentId:"jyhd57-4"})(["z-index:6;"]),E=i.a.createElement(h,null,i.a.createElement(w,null),i.a.createElement(w,null),i.a.createElement(w,null)),A=i.a.createElement(h,null,i.a.createElement(x,null,i.a.createElement("h1",null,"X"))),v=function(e){var t=e.isOpen,a=e.onMouseDown;return i.a.createElement(y,{onMouseDown:a},i.a.createElement(h,null,t?A:E),i.a.createElement(b,null))},C=u.a.div.withConfig({displayName:"menu__Container",componentId:"ldryeq-0"})([""]),I=u.a.div.withConfig({displayName:"menu__MenuOuterContainer",componentId:"ldryeq-1"})(["position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:",";background-color:rgba(255,255,255,1);opacity:",";-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;padding:2em 0;a{text-decoration:none;max-width:500px;padding:2em 4em;}a:hover{background:rgba(0,0,0,0);}*{-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;}"],function(e){return e.isOpen?5:-1},function(e){return e.isOpen||0}),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a.toggleMenu=a.toggleMenu.bind(g()(g()(a))),a.closeMenu=a.closeMenu.bind(g()(g()(a))),a}p()(t,e);var a=t.prototype;return a.toggleMenu=function(e){e.preventDefault();var t=this.state.isOpen;this.setState({isOpen:!t})},a.closeMenu=function(e){e.preventDefault(),this.setState({isOpen:!1})},a.render=function(){var e=this.state.isOpen;return i.a.createElement(C,null,i.a.createElement(v,{isOpen:e,onMouseDown:this.toggleMenu}),i.a.createElement(I,{isOpen:e,onMouseDown:this.closeMenu},i.a.createElement(s.Link,{to:"/"},i.a.createElement("h1",null,"About")),i.a.createElement(s.Link,{to:"/portfolio"},i.a.createElement("h1",null,"Portfolio")),i.a.createElement(s.Link,{to:"/labs"},i.a.createElement("h1",null,"Labs")),i.a.createElement(s.Link,{to:"/contact"},i.a.createElement("h1",null,"Contact Me"))))},t}(i.a.Component),D=u.a.h1.withConfig({displayName:"header__NameHeading",componentId:"sc-31ozxh-0"})(["color:black;padding:0;line-height:0;font-size:1.7em;font-family:'Merriweather',serif;"]),M=u.a.h1.withConfig({displayName:"header__SubHeading",componentId:"sc-31ozxh-1"})(["color:gray;padding:0;line-height:1.28em;font-size:1.28em;font-family:'Merriweather',serif"]),j=u.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:2em 0;"]),B=function(){return i.a.createElement("div",{style:{background:"rgba(0,0,0,0)",marginBottom:"1.45rem",borderTop:"3px solid #0099ff",width:"100%"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100%",padding:"1em 2em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},i.a.createElement(j,null,i.a.createElement(s.Link,{to:"/",style:{color:"black",textDecoration:"none"}},i.a.createElement(D,null,"Babak Chehraz")),i.a.createElement(M,null,"Software Developer")),i.a.createElement(k,null)))},_=u.a.div.withConfig({displayName:"footer__Container",componentId:"r54yyk-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:0;width:100vw;margin:0 auto;a{text-decoration:none;}"]),L=function(e){var t=e.showing;return i.a.createElement("div",{style:{textAlign:"center",padding:"2em 0",display:!1===t?"none":"block"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100vw",padding:"1em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},i.a.createElement(_,null,i.a.createElement("h4",null,"Let's Talk"),i.a.createElement("p",null,"Wanna get in touch or talk about a project?",i.a.createElement("br",null),"Feel free to contact me via email at ",i.a.createElement("a",{href:"mailto:babak.chehraz@gmail.com"},i.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"babak.chehraz@gmail.com")),i.a.createElement("br",null),"or drop a line in the form at the ",i.a.createElement(s.Link,{to:"/contact"},i.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"contact page"))))))},O=(a(140),function(e){var t=e.children,a=e.showFooter;return i.a.createElement(s.StaticQuery,{query:"728243612",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{height:"auto",width:"100vw"}},i.a.createElement(B,null),i.a.createElement("div",{style:{margin:"0 auto",padding:"0"}},t)),i.a.createElement(L,{showing:a}))},data:n})});O.propTypes={children:r.a.node.isRequired};t.a=O}}]);
//# sourceMappingURL=component---src-templates-lab-js-f8f4fc9ccc8e5943a51b.js.map