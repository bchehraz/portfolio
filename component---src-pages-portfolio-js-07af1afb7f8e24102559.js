(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var a=n(0),i=n.n(a),o=n(137),r=n(136),l=n(142),c=n(151),s=r.a.div.withConfig({displayName:"portfolio__Container",componentId:"sc-2toh3-0"})(["padding:0;margin:0 auto;display:flex;flex-flow:column nowrap;align-items:flex-start;width:100vw;max-width:1000px;padding:2em;"]),d=r.a.div.withConfig({displayName:"portfolio__ProjectsContainer",componentId:"sc-2toh3-1"})(["display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-area:main;grid-gap:10px;justify-content:start;justify-items:stretch;align-content:stretch;grid-auto-flow:row;padding:1em;margin:0;a{text-decoration:none;}@media only screen and (min-width:800px){grid-template-columns:repeat(2,1fr);}@media only screen and (min-width:1300px){grid-template-columns:repeat(3,1fr);}"]);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement(s,null,i.a.createElement("h1",null,"Web Developer Portfolio"),i.a.createElement("h2",null,"Check out my latest web software development portfolio projects")),i.a.createElement(d,null,t.map(function(e,t){var n=e.node;return i.a.createElement(o.Link,{to:n.fields.slug,key:n.id},i.a.createElement(c.a,{title:n.frontmatter.title,description:n.frontmatter.description,startDate:n.frontmatter.startDate,duration:n.frontmatter.duration,type:n.frontmatter.type,index:t}))})))};var u="2079691399"},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(135),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(138),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var u=n(28);n.d(t,"parsePath",function(){return u.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},138:function(e,t,n){var a;e.exports=(a=n(139))&&a.default||a},139:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(47),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio Site"}},logoImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnklEQVQY003PuwrCQBCF4bETjYWCRG28BDtLyyDeHsNKAhZioYVd2qRQEEVE8AJWgo1P4Lv5iyeQhW93mT3MsGZmIzj2X21JrzrG6KKpmqezhUEqm/ltZ0wRYIMYE8wU9nHDEyvV7xq0xhAL1JKue2zxxgMvnPDBUpkIBw274IoOQsxxRC/5aQFFVFCVHHboq2FJYUf3suouGsjrLfsFXTQVLS14hxMAAAAASUVORK5CYII=",aspectRatio:5.12,src:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png",srcSet:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/0552a/logo_expanded.png 75w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/fc3be/logo_expanded.png 150w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png 300w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/24f49/logo_expanded.png 450w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/5497d/logo_expanded.png 600w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/6a61b/logo_expanded.png 900w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/b2120/logo_expanded.png 1920w",sizes:"(max-width: 300px) 100vw, 300px"}}},logoImage2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAC4jAAAuIwF4pT92AAADnUlEQVQ4y6WUWSj9WxTH3TqndCmZknko/e/1YBYZQ5kpL16IRMmD4UVKpvIgY2aFEvFkikiR8Q15ce4+LnLLFOEJpb+f/Vt3rdU5P9w6bre7arWH89ufs/Ze37WsAMAKTYeu/5+u293dtWKYra3tUlZW1llhYaEhPz9fFBQUiKKiIlFcXCxwT+Tm5oqUlBSRmpoq0tPTRVpamuaZmZmG+Pj4M71ev4wsawLqIyIizoxGIwwNDcHY2BgMDw9DR0cHtLW1QU9PDxwdHcF3dnV1BQ4ODn8h61cGJicnGwYHB+nuCrokz8nJkbW1tTxvbW2Vb29v8vDwUOL5f7pycXEBjo6ORg2YmJgoKDI67O/vryJcnZiYUPFj1c/PT8Uo1ZWVFXbae39/V8mklLSWJuCxBkxKShKjo6MMXFtbg7y8PIiLi+Pr+Pj4QENDAz/Dy8sL7yGLx2+BIyMjDJycnISAgADIyMjgQ+Hh4VBdXQ1zc3O8xui0t7MIpCubgTY2NjRCdnY2R4LZhsbGRjg5OTFD/j3Cz0CdTsdAlBFH09vbC52dnQwh2GdXFMXylemNTBlmYGxsLEcxPT0NXV1dlhTDwMvLS5LNBzAhIUFMTU2Bvb299PT0BDs7O46QDEUOFRUVnBA6eHNzw359fU36Ux8fH+X5+Tk4OTl9AIODg8XT0xPc39/Lu7s7uL29hYeHBy0pFLG3tzc4OzvTQR5dXFzomqqbm5vEkgMPD48PYGBgoKA3MQlVMxQyNDc3w87ODgwMDDA4KioKhBDg7u5Oa7WlpUXu7++Dq6vrBzAoKEhgJTDQNMLi4iIsLy9DWVkZGAwGODg4YOD4+Limz9DQULW/v18uLCzQ+isQM6ZFSPPKykrtypubmxwlAY+Pj3mf3hrfVsWmIefn5y0DzRpbWlqC5+dniI6Ohq2tLdjY2IDIyEiYmZnh32NiYug5VOxUcn19Hby8vCwDzVCykJAQoHLc29uDkpISKC0t5f2amhrAVqeS1La3tyni74GmNYSFhXHZ0Rp7o1bjtOfr68tAusEXIGb5j9fXVy5VUj85Joc7C36oouh5jvpUUR487+vrIxj5++rq6tcrY7aMn5T/xaj0zHVcVVUF1DfJZmdnoby8HOrr69XT01NAPf6pAVGkR3V1ddDU1PQTW5VidvxYwc6toNZ43d3drbS3t/M+Nl1eY6Q/6Y+sra0FA7HkCOqL/jv6D/Tf/qP/MJ31w7b3y98Ovd7hnhnyMAAAAABJRU5ErkJggg==",aspectRatio:.9,src:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png",srcSet:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/0552a/logo.png 75w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/fc3be/logo.png 150w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png 300w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/24f49/logo.png 450w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/5497d/logo.png 600w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/6a61b/logo.png 900w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},141:function(e,t,n){},142:function(e,t,n){"use strict";var a=n(140),i=n(0),o=n.n(i),r=n(4),l=n.n(r),c=n(145),s=n.n(c),d=n(137),u=n(136),m=n(6),p=n.n(m),g=n(46),f=n.n(g),h=u.a.div.withConfig({displayName:"MenuButton__Burger",componentId:"jyhd57-0"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;height:40px;margin:0 auto;width:50px;z-index:6;"]),w=u.a.div.withConfig({displayName:"MenuButton__Bar",componentId:"jyhd57-1"})(["width:80%;height:8px;background-color:black;border-radius:20px;&:first-child{width:100%;}&:last-child{width:60%;}"]),b=u.a.div.withConfig({displayName:"MenuButton__Container",componentId:"jyhd57-2"})(["max-width:150px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0.5em;-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;cursor:pointer;"]),y=u.a.span.withConfig({displayName:"MenuButton__MenuButtonText",componentId:"jyhd57-3"})(["padding:0;"]),x=u.a.div.withConfig({displayName:"MenuButton__MenuButtonClose",componentId:"jyhd57-4"})(["z-index:6;"]),E=o.a.createElement(h,null,o.a.createElement(w,null),o.a.createElement(w,null),o.a.createElement(w,null)),A=o.a.createElement(h,null,o.a.createElement(x,null,o.a.createElement("h1",null,"X"))),v=function(e){var t=e.isOpen,n=e.onMouseDown;return o.a.createElement(b,{onMouseDown:n},o.a.createElement(h,null,t?A:E),o.a.createElement(y,null))},C=u.a.div.withConfig({displayName:"menu__Container",componentId:"ldryeq-0"})([""]),k=u.a.div.withConfig({displayName:"menu__MenuOuterContainer",componentId:"ldryeq-1"})(["position:absolute;top:0;left:0;width:100%;height:100vh;z-index:",";background-color:rgba(255,255,255,1);opacity:",";-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;padding:2em 0;a{text-decoration:none;max-width:500px;padding:2em 4em;}a:hover{background:rgba(0,0,0,0);}*{-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;}"],function(e){return e.isOpen?5:-1},function(e){return e.isOpen||0}),I=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n.toggleMenu=n.toggleMenu.bind(f()(f()(n))),n.closeMenu=n.closeMenu.bind(f()(f()(n))),n}p()(t,e);var n=t.prototype;return n.toggleMenu=function(e){e.preventDefault();var t=this.state.isOpen;this.setState({isOpen:!t})},n.closeMenu=function(e){e.preventDefault(),this.setState({isOpen:!1})},n.render=function(){var e=this.state.isOpen;return o.a.createElement(C,null,o.a.createElement(v,{isOpen:e,onMouseDown:this.toggleMenu}),o.a.createElement(k,{isOpen:e,onMouseDown:this.closeMenu},o.a.createElement(d.Link,{to:"/"},o.a.createElement("h2",null,"About")),o.a.createElement(d.Link,{to:"/portfolio"},o.a.createElement("h2",null,"Portfolio")),o.a.createElement(d.Link,{to:"/labs"},o.a.createElement("h2",null,"Labs")),o.a.createElement(d.Link,{to:"/contact"},o.a.createElement("h2",null,"Contact Me"))))},t}(o.a.Component),M=u.a.h1.withConfig({displayName:"header__NameHeading",componentId:"sc-31ozxh-0"})(["color:black;padding:0;line-height:1.5em;font-size:1.7em;white-space:nowrap;margin:0;"]),D=u.a.h1.withConfig({displayName:"header__SubHeading",componentId:"sc-31ozxh-1"})(["color:rgba(0,0,0,0.4);padding:0;line-height:1em;font-size:1.30em;white-space:nowrap;margin:0;"]),j=u.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["margin:0 auto;width:100%;padding:1em 1em;display:flex;flex-direction:row;align-items:center;justify-content:space-between;@media only screen and (max-width:370px){.NameHeading{font-size:1.4em;}.SubHeading{font-size:1em;}}@media only screen and (max-width:333px){.NameHeading{font-size:1.2em;}.SubHeading{font-size:0.8em;}}@media only screen and (min-width:800px){padding:1em 2em;}@media only screen and (min-width:1000px){max-width:100%;}"]),L=u.a.div.withConfig({displayName:"header__HeadingContainer",componentId:"sc-31ozxh-3"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:0 0;"]),z=function(){return o.a.createElement(j,null,o.a.createElement(L,null,o.a.createElement(d.Link,{to:"/",style:{color:"black",textDecoration:"none"}},o.a.createElement(M,{className:"NameHeading"},"Babak Chehraz")),o.a.createElement(D,{className:"SubHeading"},"Software Developer")),o.a.createElement(I,null))},_=u.a.div.withConfig({displayName:"footer__Container",componentId:"r54yyk-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:0;width:100%;margin:0 auto;a{text-decoration:none;}"]),B=function(e){var t=e.showing;return o.a.createElement("div",{style:{textAlign:"center",padding:"2em 0",display:!1===t?"none":"block"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100%",padding:"1em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},o.a.createElement(_,null,o.a.createElement("h4",null,"Let's Talk"),o.a.createElement("p",null,"Wanna get in touch or talk about a project?",o.a.createElement("br",null),"Feel free to contact me via email at ",o.a.createElement("a",{href:"mailto:babak.chehraz@gmail.com"},o.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"babak.chehraz@gmail.com")),o.a.createElement("br",null),"or drop a line in the form at the ",o.a.createElement(d.Link,{to:"/contact"},o.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"contact page"))))))},N=(n(141),function(e){var t=e.children,n=e.showFooter;return o.a.createElement(d.StaticQuery,{query:"728243612",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{style:{borderTop:"3px solid #0099ff"}},o.a.createElement("div",{style:{height:"auto",maxWidth:"100%",margin:"0 auto"}},o.a.createElement(z,null),o.a.createElement("div",{style:{margin:"0 auto",padding:"0"}},t),o.a.createElement(B,{showing:n}))))},data:a})});N.propTypes={children:l.a.node.isRequired};t.a=N},144:function(e,t,n){"use strict";var a=n(10);e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},146:function(e,t,n){"use strict";n(147);var a=n(10),i=n(144),o=n(14),r=/./.toString,l=function(e){n(15)(RegExp.prototype,"toString",e,!0)};n(22)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?l(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?i.call(e):void 0)}):"toString"!=r.name&&l(function(){return r.call(this)})},147:function(e,t,n){n(14)&&"g"!=/./g.flags&&n(21).f(RegExp.prototype,"flags",{configurable:!0,get:n(144)})},151:function(e,t,n){"use strict";n(146);var a=n(6),i=n.n(a),o=n(0),r=n.n(o),l=n(136),c=(n(137),l.a.div.withConfig({displayName:"ProjectListing__Container",componentId:"sc-1a0zg9g-0"})(["display:flex;flex-direction:column-reverse;justify-content:space-between;align-items:baseline;@media only screen and (min-width:600px){flex-direction:row;}"])),s=l.a.div.withConfig({displayName:"ProjectListing__HeaderContainer",componentId:"sc-1a0zg9g-1"})([""]),d=l.a.div.withConfig({displayName:"ProjectListing__DateContainer",componentId:"sc-1a0zg9g-2"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;align-content:flex-end;"]),u=l.a.div.withConfig({displayName:"ProjectListing__LinksContainer",componentId:"sc-1a0zg9g-3"})(["display:flex;flex-direction:column;text-align:left;white-space:nowrap;"]),m=l.a.div.withConfig({displayName:"ProjectListing__ListingContainer",componentId:"sc-1a0zg9g-4"})(["display:flex;flex-direction:column;justify-content:space-between;padding:2em 1em;border:3px solid white;border-radius:25px;background-color:rgba(3,3,3,0.3);background-color:",";max-width:100vw;min-height:300px;-webkit-transition:all 250ms ease-in-out;-moz-transition:all 250ms ease-in-out;-ms-transition:all 250ms ease-in-out;-o-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;&:hover{background-color:white;border:3px solid ",";border-bottom-width:1em;padding-bottom:1.5em;}h1{font-size:2em;}"],function(e){return e.colors[1]},function(e){return e.colors[0]}),p=l.a.p.withConfig({displayName:"ProjectListing__Subheading",componentId:"sc-1a0zg9g-5"})(["margin:0;padding:0;"]),g=function(e){function t(t){var n;n=e.call(this,t)||this;var a=0,i=t.index%8;return a=Math.floor(t.index/8)%2==0?Math.floor(16*Math.random())+128+16*i:Math.floor(16*Math.random())+128+16*(7-i),n.state={colorHEX:"#00"+a.toString(16)+"ff",colorRGBA:"rgba(0, "+a+", 255, 0.75)"},n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.duration,a=e.startDate,i=e.description,o=e.type,l=this.state,g=l.colorHEX,f=l.colorRGBA;return r.a.createElement(m,{colors:[g,f]},r.a.createElement(c,null,r.a.createElement(s,null,r.a.createElement("h1",null,t),r.a.createElement("p",null,i)),r.a.createElement(u,null,r.a.createElement(p,null,"mobileApp"===o?"Mobile App":"Web App"))),r.a.createElement(d,null,r.a.createElement(p,null,a),r.a.createElement(p,null,n)))},t}(r.a.Component);t.a=g}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-07af1afb7f8e24102559.js.map