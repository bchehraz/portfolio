(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{129:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(142);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),o=n.n(a),i=n(4),l=n.n(i),r=n(135),c=n.n(r);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return r.withPrefix}),n.d(t,"navigate",function(){return r.navigate}),n.d(t,"push",function(){return r.push}),n.d(t,"replace",function(){return r.replace}),n.d(t,"navigateTo",function(){return r.navigateTo});var s=n(138),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var u=n(28);n.d(t,"parsePath",function(){return u.a});var m=o.a.createContext({}),p=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},138:function(e,t,n){var a;e.exports=(a=n(139))&&a.default||a},139:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),o=n.n(a),i=n(4),l=n.n(i),r=n(47),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}},logoImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnklEQVQY003PuwrCQBCF4bETjYWCRG28BDtLyyDeHsNKAhZioYVd2qRQEEVE8AJWgo1P4Lv5iyeQhW93mT3MsGZmIzj2X21JrzrG6KKpmqezhUEqm/ltZ0wRYIMYE8wU9nHDEyvV7xq0xhAL1JKue2zxxgMvnPDBUpkIBw274IoOQsxxRC/5aQFFVFCVHHboq2FJYUf3suouGsjrLfsFXTQVLS14hxMAAAAASUVORK5CYII=",aspectRatio:5.12,src:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png",srcSet:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/0552a/logo_expanded.png 75w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/fc3be/logo_expanded.png 150w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png 300w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/24f49/logo_expanded.png 450w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/5497d/logo_expanded.png 600w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/6a61b/logo_expanded.png 900w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/b2120/logo_expanded.png 1920w",sizes:"(max-width: 300px) 100vw, 300px"}}},logoImage2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAC4jAAAuIwF4pT92AAADnUlEQVQ4y6WUWSj9WxTH3TqndCmZknko/e/1YBYZQ5kpL16IRMmD4UVKpvIgY2aFEvFkikiR8Q15ce4+LnLLFOEJpb+f/Vt3rdU5P9w6bre7arWH89ufs/Ze37WsAMAKTYeu/5+u293dtWKYra3tUlZW1llhYaEhPz9fFBQUiKKiIlFcXCxwT+Tm5oqUlBSRmpoq0tPTRVpamuaZmZmG+Pj4M71ev4wsawLqIyIizoxGIwwNDcHY2BgMDw9DR0cHtLW1QU9PDxwdHcF3dnV1BQ4ODn8h61cGJicnGwYHB+nuCrokz8nJkbW1tTxvbW2Vb29v8vDwUOL5f7pycXEBjo6ORg2YmJgoKDI67O/vryJcnZiYUPFj1c/PT8Uo1ZWVFXbae39/V8mklLSWJuCxBkxKShKjo6MMXFtbg7y8PIiLi+Pr+Pj4QENDAz/Dy8sL7yGLx2+BIyMjDJycnISAgADIyMjgQ+Hh4VBdXQ1zc3O8xui0t7MIpCubgTY2NjRCdnY2R4LZhsbGRjg5OTFD/j3Cz0CdTsdAlBFH09vbC52dnQwh2GdXFMXylemNTBlmYGxsLEcxPT0NXV1dlhTDwMvLS5LNBzAhIUFMTU2Bvb299PT0BDs7O46QDEUOFRUVnBA6eHNzw359fU36Ux8fH+X5+Tk4OTl9AIODg8XT0xPc39/Lu7s7uL29hYeHBy0pFLG3tzc4OzvTQR5dXFzomqqbm5vEkgMPD48PYGBgoKA3MQlVMxQyNDc3w87ODgwMDDA4KioKhBDg7u5Oa7WlpUXu7++Dq6vrBzAoKEhgJTDQNMLi4iIsLy9DWVkZGAwGODg4YOD4+Limz9DQULW/v18uLCzQ+isQM6ZFSPPKykrtypubmxwlAY+Pj3mf3hrfVsWmIefn5y0DzRpbWlqC5+dniI6Ohq2tLdjY2IDIyEiYmZnh32NiYug5VOxUcn19Hby8vCwDzVCykJAQoHLc29uDkpISKC0t5f2amhrAVqeS1La3tyni74GmNYSFhXHZ0Rp7o1bjtOfr68tAusEXIGb5j9fXVy5VUj85Joc7C36oouh5jvpUUR487+vrIxj5++rq6tcrY7aMn5T/xaj0zHVcVVUF1DfJZmdnoby8HOrr69XT01NAPf6pAVGkR3V1ddDU1PQTW5VidvxYwc6toNZ43d3drbS3t/M+Nl1eY6Q/6Y+sra0FA7HkCOqL/jv6D/Tf/qP/MJ31w7b3y98Ovd7hnhnyMAAAAABJRU5ErkJggg==",aspectRatio:.9,src:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png",srcSet:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/0552a/logo.png 75w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/fc3be/logo.png 150w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png 300w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/24f49/logo.png 450w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/5497d/logo.png 600w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/6a61b/logo.png 900w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},141:function(e,t,n){},142:function(e,t,n){"use strict";var a=n(140),o=n(0),i=n.n(o),l=n(4),r=n.n(l),c=n(143),s=n.n(c),d=n(137),u=n(136),m=n(6),p=n.n(m),g=n(46),f=n.n(g),h=u.a.div.withConfig({displayName:"MenuButton__Burger",componentId:"jyhd57-0"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;height:40px;margin:0 auto;width:50px;cursor:pointer;z-index:6;"]),b=u.a.div.withConfig({displayName:"MenuButton__Bar",componentId:"jyhd57-1"})(["width:80%;height:8px;background-color:black;border-radius:20px;&:first-child{width:100%;}&:last-child{width:60%;}cursor:pointer;"]),w=u.a.div.withConfig({displayName:"MenuButton__Container",componentId:"jyhd57-2"})(["max-width:150px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:20px;-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;"]),y=u.a.span.withConfig({displayName:"MenuButton__MenuButtonText",componentId:"jyhd57-3"})(["padding:0;"]),x=u.a.div.withConfig({displayName:"MenuButton__MenuButtonClose",componentId:"jyhd57-4"})(["z-index:6;"]),A=i.a.createElement(h,null,i.a.createElement(b,null),i.a.createElement(b,null),i.a.createElement(b,null)),E=i.a.createElement(h,null,i.a.createElement(x,null,i.a.createElement("h1",null,"X"))),v=function(e){var t=e.isOpen,n=e.onMouseDown;return i.a.createElement(w,{onMouseDown:n},i.a.createElement(h,null,t?E:A),i.a.createElement(y,null))},C=u.a.div.withConfig({displayName:"menu__Container",componentId:"ldryeq-0"})([""]),D=u.a.div.withConfig({displayName:"menu__MenuOuterContainer",componentId:"ldryeq-1"})(["position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:",";background-color:rgba(255,255,255,1);opacity:",";-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;padding:2em 0;a{text-decoration:none;max-width:500px;padding:2em 4em;}a:hover{background:rgba(0,0,0,0);}*{-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;}"],function(e){return e.isOpen?5:-1},function(e){return e.isOpen||0}),M=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n.toggleMenu=n.toggleMenu.bind(f()(f()(n))),n.closeMenu=n.closeMenu.bind(f()(f()(n))),n}p()(t,e);var n=t.prototype;return n.toggleMenu=function(e){e.preventDefault();var t=this.state.isOpen;this.setState({isOpen:!t})},n.closeMenu=function(e){e.preventDefault(),this.setState({isOpen:!1})},n.render=function(){var e=this.state.isOpen;return i.a.createElement(C,null,i.a.createElement(v,{isOpen:e,onMouseDown:this.toggleMenu}),i.a.createElement(D,{isOpen:e,onMouseDown:this.closeMenu},i.a.createElement(d.Link,{to:"/"},i.a.createElement("h1",null,"About")),i.a.createElement(d.Link,{to:"/portfolio"},i.a.createElement("h1",null,"Portfolio")),i.a.createElement(d.Link,{to:"/labs"},i.a.createElement("h1",null,"Labs")),i.a.createElement(d.Link,{to:"/contact"},i.a.createElement("h1",null,"Contact Me"))))},t}(i.a.Component),k=u.a.h1.withConfig({displayName:"header__NameHeading",componentId:"sc-31ozxh-0"})(["color:black;padding:0;line-height:0;font-size:1.7em;"]),I=u.a.h1.withConfig({displayName:"header__SubHeading",componentId:"sc-31ozxh-1"})(["color:gray;padding:0;line-height:1em;font-size:1.28em;"]),j=u.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:1em 0;"]),B=function(){return i.a.createElement("div",{style:{background:"rgba(0,0,0,0)",marginBottom:"1.45rem",borderTop:"3px solid #0099ff",width:"100%"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100%",padding:"1em 2em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},i.a.createElement(j,null,i.a.createElement(d.Link,{to:"/",style:{color:"black",textDecoration:"none"}},i.a.createElement(k,null,"Babak Chehraz")),i.a.createElement(I,null,"Software Developer")),i.a.createElement(M,null)))},L=u.a.div.withConfig({displayName:"footer__Container",componentId:"r54yyk-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:0;width:100vw;margin:0 auto;a{text-decoration:none;}"]),O=function(e){var t=e.showing;return i.a.createElement("div",{style:{textAlign:"center",padding:"2em 0",display:!1===t?"none":"block"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100vw",padding:"1em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},i.a.createElement(L,null,i.a.createElement("h4",null,"Let's Talk"),i.a.createElement("p",null,"Wanna get in touch or talk about a project?",i.a.createElement("br",null),"Feel free to contact me via email at ",i.a.createElement("a",{href:"mailto:babak.chehraz@gmail.com"},i.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"babak.chehraz@gmail.com")),i.a.createElement("br",null),"or drop a line in the form at the ",i.a.createElement(d.Link,{to:"/contact"},i.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"contact page"))))))},T=(n(141),function(e){var t=e.children,n=e.showFooter;return i.a.createElement(d.StaticQuery,{query:"728243612",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{height:"auto",width:"100vw"}},i.a.createElement(B,null),i.a.createElement("div",{style:{margin:"0 auto",padding:"0"}},t)),i.a.createElement(O,{showing:n}))},data:a})});T.propTypes={children:r.a.node.isRequired};t.a=T}}]);
//# sourceMappingURL=component---src-pages-404-js-efd5a91d982f051983ee.js.map