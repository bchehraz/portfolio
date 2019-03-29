(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(135),l=a(143),r=(a(144),a(141)),s=(a(165),a(6)),c=a.n(s),d=a(46),u=a.n(d),m=i.a.div.withConfig({displayName:"Contact__FormContainer",componentId:"sc-22n935-0"})(["background-color:#fff;padding:0;width:100%;"]),p=i.a.form.withConfig({displayName:"Contact__Form",componentId:"sc-22n935-1"})([""]),g=i.a.input.withConfig({displayName:"Contact__Input",componentId:"sc-22n935-2"})(["width:100%;background:",";padding:1em;outline:red;margin:1em 0;-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;border-color:rgba(0,0,0,0.2);border-style:solid;:focus{background-color:",";}:-webkit-autofill,:-webkit-autofill:focus{-webkit-box-shadow:0 0 0 1000px "," inset;}:autofill,:autofill:focus{background-color:",";}"],function(e){return e.valid?"#99ffcc":"#fff"},function(e){return e.valid?"#99ffcc":"#99ccff"},function(e){return e.valid?"#99ffcc":"#99ccff"},function(e){return e.valid?"#99ffcc":"#99ccff"}),f=i.a.label.withConfig({displayName:"Contact__Label",componentId:"sc-22n935-3"})(["font-size:1.1em;padding:0 1em;"]),h=i.a.div.withConfig({displayName:"Contact__FormSection",componentId:"sc-22n935-4"})(["display:",";"],function(e){return e.showing||"none"}),b=function(e){function t(){var t;return(t=e.call(this)||this).state={email:"",name:"",message:"",emailValid:!1},t.onNameChange=t.onNameChange.bind(u()(u()(t))),t.onEmailChange=t.onEmailChange.bind(u()(u()(t))),t.onMessageChange=t.onMessageChange.bind(u()(u()(t))),t.handleSubmit=t.handleSubmit.bind(u()(u()(t))),t.validate=t.validate.bind(u()(u()(t))),t.validateEmail=t.validateEmail.bind(u()(u()(t))),t.onMessageFocus=t.onMessageFocus.bind(u()(u()(t))),t}c()(t,e);var a=t.prototype;return a.onNameChange=function(e){this.setState({name:e.target.value})},a.onEmailChange=function(e){var t=this.validateEmail();this.setState({email:e.target.value,emailValid:t})},a.onMessageChange=function(e){this.setState({message:e.target.value})},a.handleSubmit=function(e){this.validate()||e.preventDefault()},a.validateEmail=function(){var e=this.state.email;return/\S+@\S+\.\S+/.test(e)},a.validate=function(){return!1},a.onMessageFocus=function(){var e=this.validateEmail();this.setState({emailValid:e})},a.render=function(){var e=this.state,t=e.name,a=e.email,n=e.message,i=e.emailValid;return o.a.createElement(m,null,o.a.createElement(p,{onSubmit:this.handleSubmit},o.a.createElement(h,{showing:!0},o.a.createElement("input",{type:"hidden",value:"prayer"}),o.a.createElement(f,null,"Name"),o.a.createElement(g,{type:"text",name:"name",placeholder:"Fill in your name",onChange:this.onNameChange,valid:t.length>0,autoComplete:"name"})),o.a.createElement(h,{showing:t},o.a.createElement(f,null,"Email Address:"),o.a.createElement(g,{autoComplete:"disable",type:"email",name:"email",placeholder:"now your email address",value:a,onChange:this.onEmailChange,valid:a&&i,onKeyPress:this.onEmailChange})),o.a.createElement(h,{showing:a},o.a.createElement(f,null,"Message:"),o.a.createElement(g,{autoComplete:"disable",type:"text",name:"message",placeholder:"now write your message :)",value:n,onChange:this.onMessageChange,valid:n.length>9,onFocus:this.onMessageFocus})),o.a.createElement(h,{showing:!0},o.a.createElement("button",{type:"submit"},"Send Message"))),o.a.createElement("h2",null,"Output (testing reasons):"),o.a.createElement("h4",{style:{borderTop:"2px solid black"}},"Name: "+t),o.a.createElement("h4",null,"Email: "+a),o.a.createElement("h4",null,"Message: "+n))},t}(o.a.Component),w=i.a.div.withConfig({displayName:"contact__Container",componentId:"oor64t-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:2em;max-width:600px;margin:0 auto;"]),y=i.a.div.withConfig({displayName:"contact__ButtonContainer",componentId:"oor64t-1"})(["padding:4px;white-space:nowrap;"]);t.default=function(){return o.a.createElement(r.a,{showFooter:!1},o.a.createElement(w,null,o.a.createElement("h1",null,"Get in touch"),o.a.createElement("p",null,"If you wanna get in touch, talk to me about a project collaboration or just say hi, fill out the form below or send an email to babak.dev@gmail.com and let's talk."),o.a.createElement(b,null),o.a.createElement("h2",null,"Let's get social"),o.a.createElement("p",null,"Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin."),o.a.createElement("div",null,o.a.createElement(y,null,o.a.createElement(l.AwesomeButtonSocial,{type:"linkedin",ripple:!0,href:"https://www.linkedin.com/in/babakchehraz",target:"_blank",size:"large"},"LINKEDIN")),o.a.createElement(y,null,o.a.createElement(l.AwesomeButtonSocial,{type:"github",ripple:!0,href:"https://www.github.com/bchehraz",target:"_blank",size:"large"},"GITHUB")),o.a.createElement(y,null,o.a.createElement(l.AwesomeButtonSocial,{type:"facebook",ripple:!0,href:"https://www.facebook.com",target:"_blank",size:"large"},"FACEBOOK")),o.a.createElement(y,null,o.a.createElement(l.AwesomeButtonSocial,{type:"instagram",ripple:!0,href:"https://www.instagram.com/babakthedev",target:"_blank",size:"large"},"INSTAGRAM")))))}},136:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),o=a.n(n),i=a(4),l=a.n(i),r=a(134),s=a.n(r);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return r.withPrefix}),a.d(t,"navigate",function(){return r.navigate}),a.d(t,"push",function(){return r.push}),a.d(t,"replace",function(){return r.replace}),a.d(t,"navigateTo",function(){return r.navigateTo});var c=a(137),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var m=o.a.createContext({}),p=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},137:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},138:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),o=a.n(n),i=a(4),l=a.n(i),r=a(47),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},139:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}},logoImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnklEQVQY003PuwrCQBCF4bETjYWCRG28BDtLyyDeHsNKAhZioYVd2qRQEEVE8AJWgo1P4Lv5iyeQhW93mT3MsGZmIzj2X21JrzrG6KKpmqezhUEqm/ltZ0wRYIMYE8wU9nHDEyvV7xq0xhAL1JKue2zxxgMvnPDBUpkIBw274IoOQsxxRC/5aQFFVFCVHHboq2FJYUf3suouGsjrLfsFXTQVLS14hxMAAAAASUVORK5CYII=",aspectRatio:5.12,src:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png",srcSet:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/0552a/logo_expanded.png 75w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/fc3be/logo_expanded.png 150w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png 300w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/24f49/logo_expanded.png 450w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/5497d/logo_expanded.png 600w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/6a61b/logo_expanded.png 900w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/b2120/logo_expanded.png 1920w",sizes:"(max-width: 300px) 100vw, 300px"}}},logoImage2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAC4jAAAuIwF4pT92AAADnUlEQVQ4y6WUWSj9WxTH3TqndCmZknko/e/1YBYZQ5kpL16IRMmD4UVKpvIgY2aFEvFkikiR8Q15ce4+LnLLFOEJpb+f/Vt3rdU5P9w6bre7arWH89ufs/Ze37WsAMAKTYeu/5+u293dtWKYra3tUlZW1llhYaEhPz9fFBQUiKKiIlFcXCxwT+Tm5oqUlBSRmpoq0tPTRVpamuaZmZmG+Pj4M71ev4wsawLqIyIizoxGIwwNDcHY2BgMDw9DR0cHtLW1QU9PDxwdHcF3dnV1BQ4ODn8h61cGJicnGwYHB+nuCrokz8nJkbW1tTxvbW2Vb29v8vDwUOL5f7pycXEBjo6ORg2YmJgoKDI67O/vryJcnZiYUPFj1c/PT8Uo1ZWVFXbae39/V8mklLSWJuCxBkxKShKjo6MMXFtbg7y8PIiLi+Pr+Pj4QENDAz/Dy8sL7yGLx2+BIyMjDJycnISAgADIyMjgQ+Hh4VBdXQ1zc3O8xui0t7MIpCubgTY2NjRCdnY2R4LZhsbGRjg5OTFD/j3Cz0CdTsdAlBFH09vbC52dnQwh2GdXFMXylemNTBlmYGxsLEcxPT0NXV1dlhTDwMvLS5LNBzAhIUFMTU2Bvb299PT0BDs7O46QDEUOFRUVnBA6eHNzw359fU36Ux8fH+X5+Tk4OTl9AIODg8XT0xPc39/Lu7s7uL29hYeHBy0pFLG3tzc4OzvTQR5dXFzomqqbm5vEkgMPD48PYGBgoKA3MQlVMxQyNDc3w87ODgwMDDA4KioKhBDg7u5Oa7WlpUXu7++Dq6vrBzAoKEhgJTDQNMLi4iIsLy9DWVkZGAwGODg4YOD4+Limz9DQULW/v18uLCzQ+isQM6ZFSPPKykrtypubmxwlAY+Pj3mf3hrfVsWmIefn5y0DzRpbWlqC5+dniI6Ohq2tLdjY2IDIyEiYmZnh32NiYug5VOxUcn19Hby8vCwDzVCykJAQoHLc29uDkpISKC0t5f2amhrAVqeS1La3tyni74GmNYSFhXHZ0Rp7o1bjtOfr68tAusEXIGb5j9fXVy5VUj85Joc7C36oouh5jvpUUR487+vrIxj5++rq6tcrY7aMn5T/xaj0zHVcVVUF1DfJZmdnoby8HOrr69XT01NAPf6pAVGkR3V1ddDU1PQTW5VidvxYwc6toNZ43d3drbS3t/M+Nl1eY6Q/6Y+sra0FA7HkCOqL/jv6D/Tf/qP/MJ31w7b3y98Ovd7hnhnyMAAAAABJRU5ErkJggg==",aspectRatio:.9,src:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png",srcSet:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/0552a/logo.png 75w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/fc3be/logo.png 150w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png 300w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/24f49/logo.png 450w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/5497d/logo.png 600w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/6a61b/logo.png 900w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},140:function(e,t,a){},141:function(e,t,a){"use strict";var n=a(139),o=a(0),i=a.n(o),l=a(4),r=a.n(l),s=a(142),c=a.n(s),d=a(136),u=a(135),m=a(6),p=a.n(m),g=a(46),f=a.n(g),h=u.a.div.withConfig({displayName:"MenuButton__Burger",componentId:"jyhd57-0"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;height:40px;margin:0 auto;width:50px;cursor:pointer;z-index:6;"]),b=u.a.div.withConfig({displayName:"MenuButton__Bar",componentId:"jyhd57-1"})(["width:80%;height:8px;background-color:black;border-radius:20px;&:first-child{width:100%;}&:last-child{width:60%;}cursor:pointer;"]),w=u.a.div.withConfig({displayName:"MenuButton__Container",componentId:"jyhd57-2"})(["max-width:150px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:20px;-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;"]),y=u.a.span.withConfig({displayName:"MenuButton__MenuButtonText",componentId:"jyhd57-3"})(["padding:0;"]),E=u.a.div.withConfig({displayName:"MenuButton__MenuButtonClose",componentId:"jyhd57-4"})(["z-index:6;"]),v=i.a.createElement(h,null,i.a.createElement(b,null),i.a.createElement(b,null),i.a.createElement(b,null)),x=i.a.createElement(h,null,i.a.createElement(E,null,i.a.createElement("h1",null,"X"))),A=function(e){var t=e.isOpen,a=e.onMouseDown;return i.a.createElement(w,{onMouseDown:a},i.a.createElement(h,null,t?x:v),i.a.createElement(y,null))},C=u.a.div.withConfig({displayName:"menu__Container",componentId:"ldryeq-0"})([""]),k=u.a.div.withConfig({displayName:"menu__MenuOuterContainer",componentId:"ldryeq-1"})(["position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:",";background-color:rgba(255,255,255,1);opacity:",";-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;padding:2em 0;a{text-decoration:none;max-width:500px;padding:2em 4em;}a:hover{background:rgba(0,0,0,0);}*{-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;}"],function(e){return e.isOpen?5:-1},function(e){return e.isOpen||0}),M=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a.toggleMenu=a.toggleMenu.bind(f()(f()(a))),a.closeMenu=a.closeMenu.bind(f()(f()(a))),a}p()(t,e);var a=t.prototype;return a.toggleMenu=function(e){e.preventDefault();var t=this.state.isOpen;this.setState({isOpen:!t})},a.closeMenu=function(e){e.preventDefault(),this.setState({isOpen:!1})},a.render=function(){var e=this.state.isOpen;return i.a.createElement(C,null,i.a.createElement(A,{isOpen:e,onMouseDown:this.toggleMenu}),i.a.createElement(k,{isOpen:e,onMouseDown:this.closeMenu},i.a.createElement(d.Link,{to:"/"},i.a.createElement("h1",null,"About")),i.a.createElement(d.Link,{to:"/portfolio"},i.a.createElement("h1",null,"Portfolio")),i.a.createElement(d.Link,{to:"/labs"},i.a.createElement("h1",null,"Labs")),i.a.createElement(d.Link,{to:"/contact"},i.a.createElement("h1",null,"Contact Me"))))},t}(i.a.Component),I=u.a.h1.withConfig({displayName:"header__NameHeading",componentId:"sc-31ozxh-0"})(["color:black;padding:0;line-height:0;font-size:1.7em;font-family:'Merriweather',serif;"]),D=u.a.h1.withConfig({displayName:"header__SubHeading",componentId:"sc-31ozxh-1"})(["color:gray;padding:0;line-height:1em;font-size:1.28em;font-family:'Merriweather',serif"]),B=u.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:1em 0;"]),S=function(){return i.a.createElement("div",{style:{background:"rgba(0,0,0,0)",marginBottom:"1.45rem",borderTop:"3px solid #0099ff",width:"100%"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100%",padding:"1em 2em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},i.a.createElement(B,null,i.a.createElement(d.Link,{to:"/",style:{color:"black",textDecoration:"none"}},i.a.createElement(I,null,"Babak Chehraz")),i.a.createElement(D,null,"Software Developer")),i.a.createElement(M,null)))},_=u.a.div.withConfig({displayName:"footer__Container",componentId:"r54yyk-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:0;width:100vw;margin:0 auto;a{text-decoration:none;}"]),F=function(e){var t=e.showing;return i.a.createElement("div",{style:{textAlign:"center",padding:"2em 0",display:!1===t?"none":"block"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100vw",padding:"1em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},i.a.createElement(_,null,i.a.createElement("h4",null,"Let's Talk"),i.a.createElement("p",null,"Wanna get in touch or talk about a project?",i.a.createElement("br",null),"Feel free to contact me via email at ",i.a.createElement("a",{href:"mailto:babak.chehraz@gmail.com"},i.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"babak.chehraz@gmail.com")),i.a.createElement("br",null),"or drop a line in the form at the ",i.a.createElement(d.Link,{to:"/contact"},i.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"contact page"))))))},L=(a(140),function(e){var t=e.children,a=e.showFooter;return i.a.createElement(d.StaticQuery,{query:"728243612",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{height:"auto",width:"100vw"}},i.a.createElement(S,null),i.a.createElement("div",{style:{margin:"0 auto",padding:"0"}},t)),i.a.createElement(F,{showing:a}))},data:n})});L.propTypes={children:r.a.node.isRequired};t.a=L},165:function(e,t,a){var n=a(21).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||a(14)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contact-js-acfddb6ada3aa6896586.js.map