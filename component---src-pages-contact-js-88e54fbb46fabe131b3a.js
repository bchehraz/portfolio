(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{134:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(136),r=n(148),l=n(142),s=n(179),c=n.n(s),m=(n(181),n(157),n(182)),u=n.n(m),d=n(6),p=n.n(d),h=n(46),f=n.n(h),g=(n(149),n(183)),b=n.n(g),w=n(163),y=i.a.div.withConfig({displayName:"Contact__FormContainer",componentId:"sc-22n935-0"})(["background-color:#fff;padding:0;width:100%;"]),E=i.a.form.withConfig({displayName:"Contact__Form",componentId:"sc-22n935-1"})([""," "," "," -webkit-transition:all 500ms ease-in-out;-moz-transition:all 500ms ease-in-out;-ms-transition:all 500ms ease-in-out;-o-transition:all 500ms ease-in-out;transition:all 500ms ease-in-out;"],function(e){return e.formHidden?"opacity: 0;":"opacity: 1;"},function(e){return e.formHidden&&"margin-top: -25.4rem;"},function(e){return e.hideForm&&"display: none;"}),x=i.a.input.withConfig({displayName:"Contact__Input",componentId:"sc-22n935-2"})(["width:100%;background:",";padding:1em;outline:red;margin:1em 0;-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;border-color:rgba(0,0,0,0.2);border-style:solid;:focus{background-color:",";}:-webkit-autofill,:-webkit-autofill:focus{-webkit-box-shadow:0 0 0 1000px "," inset;}:autofill,:autofill:focus{background-color:",";}"],function(e){return e.valid?"#99ffcc":"#fff"},function(e){return e.valid?"#99ffcc":"#99ccff"},function(e){return e.valid?"#99ffcc":"#99ccff"},function(e){return e.valid?"#99ffcc":"#99ccff"}),v=i.a.label.withConfig({displayName:"Contact__Label",componentId:"sc-22n935-3"})(["font-size:1.1em;padding:0 1em;-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;"]),A=i.a.div.withConfig({displayName:"Contact__FormSection",componentId:"sc-22n935-4"})(["display:",";-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;"],function(e){return e.showing||"none"}),C=i.a.div.withConfig({displayName:"Contact__FormSuccess",componentId:"sc-22n935-5"})([""," -webkit-transition:all 500ms ease-in-out;-moz-transition:all 500ms ease-in-out;-ms-transition:all 500ms ease-in-out;-o-transition:all 500ms ease-in-out;transition:all 500ms ease-in-out;display:flex;justify-content:center;align-items:center;padding:2rem;h4{padding:0 1rem;margin:0;}"],function(e){return e.formHidden?"opacity: 1;":"opacity: 0;"}),k=function(e){function t(){var t;return(t=e.call(this)||this).state={email:"",name:"",message:"",emailValid:!1,resultLabel:"",formSuccess:!1,hideForm:!1},t.onNameChange=t.onNameChange.bind(f()(f()(t))),t.onEmailChange=t.onEmailChange.bind(f()(f()(t))),t.onMessageChange=t.onMessageChange.bind(f()(f()(t))),t.handleSubmit=t.handleSubmit.bind(f()(f()(t))),t.validateEmail=t.validateEmail.bind(f()(f()(t))),t.onMessageFocus=t.onMessageFocus.bind(f()(f()(t))),t.hideForm=t.hideForm.bind(f()(f()(t))),t}p()(t,e);var n=t.prototype;return n.onNameChange=function(e){this.setState({name:e.target.value})},n.onEmailChange=function(e){var t=this.validateEmail();this.setState({email:e.target.value,emailValid:t})},n.onMessageChange=function(e){this.setState({message:e.target.value})},n.validateEmail=function(){var e=this.state.email;return/\S+@\S+\.\S+/.test(e)},n.onMessageFocus=function(){var e=this.validateEmail();this.setState({emailValid:e})},n.handleSubmit=function(){var e=u()(c.a.mark(function e(){var t,n,a,o,i,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.name,a=t.email,o=t.message,i=new FormData,r=!1,!(n.length<=0)){e.next=8;break}return this.setState({resultLabel:"Error :( please enter your name"}),e.abrupt("return",!1);case 8:if(this.validateEmail()){e.next=15;break}return this.setState({resultLabel:"Error :( please enter a valid email!"}),e.next=12,!1;case 12:return e.abrupt("return",e.sent);case 15:if(!(o.length<10)){e.next=20;break}return this.setState({resultLabel:"Error :( message length is too short"}),e.next=19,!1;case 19:return e.abrupt("return",e.sent);case 20:return i.set("name",n),i.set("email",a),i.set("message",o),i.set("submit",!0),e.next=26,b()({method:"post",url:"/email/",baseURL:"https://babak-chehraz-portfolio.herokuapp.com",data:i,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(e){return r=!0,!0}).catch(function(e){return e.response?(console.log("Error.response.data => ",e.response.data),console.log("Error.response.status => ",e.response.status),console.log("Error.response.headers => ",e.response.headers)):e.request?console.log("Error.request => ",e.request):console.log("Error =>",e.message),console.log("Error.config =>",e.config),!1});case 26:if(e.sent,!r){e.next=30;break}return this.setState({resultLabel:"Message Sent Successfully :)"}),e.abrupt("return",!0);case 30:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.hideForm=function(){var e=this;this.setState({formSuccess:!0}),setTimeout(function(){e.setState({hideForm:!0})},750)},n.render=function(){var e=this,t=this.state,n=t.name,a=t.email,i=t.message,l=t.emailValid,s=t.resultLabel,m=(t.success,t.formSuccess),d=t.hideForm;return o.a.createElement(y,null,o.a.createElement(E,{onSubmit:function(e){return e.preventDefault()},method:"post",formHidden:m,hideForm:d},o.a.createElement(A,{showing:!0},o.a.createElement("input",{type:"hidden",value:"prayer"}),o.a.createElement(v,null,"Name"),o.a.createElement(x,{type:"text",name:"name",placeholder:"Fill in your name",onChange:this.onNameChange,valid:n.length>0,autoComplete:"name"})),o.a.createElement(A,{showing:""!==n},o.a.createElement(v,null,"Email Address:"),o.a.createElement(x,{type:"email",name:"email",placeholder:"now your email address",value:a,onChange:this.onEmailChange,valid:a&&l,onKeyPress:this.onEmailChange,onKeyUp:this.onEmailChange})),o.a.createElement(A,{showing:l},o.a.createElement(v,null,"Message:"),o.a.createElement(x,{autoComplete:"disable",type:"text",name:"message",placeholder:"now write your message :)",value:i,onChange:this.onMessageChange,valid:i.length>9,onFocus:this.onMessageFocus})),o.a.createElement(A,{showing:!0},o.a.createElement(r.AwesomeButtonProgress,{type:"primary",resultLabel:s,releaseDelay:3e3,style:{width:"100%"},action:function(){var t=u()(c.a.mark(function t(n,a){var o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=!1,t.next=3,e.handleSubmit().then(function(e){return o=e});case 3:setTimeout(function(){a(o)},200),setTimeout(function(){o&&e.hideForm()},2e3);case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},"Send Message"))),o.a.createElement(C,{formHidden:m},o.a.createElement(w.a,{size:50,style:{color:"#00ffcc"}}),o.a.createElement("h4",null,"Message Sent Successfully")))},t}(o.a.Component),S=i.a.div.withConfig({displayName:"contact__Container",componentId:"oor64t-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:2em;max-width:600px;margin:0 auto;"]),I=i.a.div.withConfig({displayName:"contact__ButtonContainer",componentId:"oor64t-1"})(["padding:0.5rem;white-space:nowrap;"]);t.default=function(){return o.a.createElement(l.a,{showFooter:!1},o.a.createElement(S,null,o.a.createElement("h1",null,"Get in touch"),o.a.createElement("p",null,"If you wanna get in touch, talk to me about a project collaboration or just say hi, fill out the form below or send an email to babak.chehraz@gmail.com and let's talk."),o.a.createElement(k,null),o.a.createElement("h2",null,"Let's get social"),o.a.createElement("p",null,"Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin."),o.a.createElement("div",null,o.a.createElement(I,null,o.a.createElement(r.AwesomeButtonSocial,{type:"linkedin",ripple:!0,href:"https://www.linkedin.com/in/babakchehraz",target:"_blank",size:"large"},"LINKEDIN")),o.a.createElement(I,null,o.a.createElement(r.AwesomeButtonSocial,{type:"github",ripple:!0,href:"https://www.github.com/bchehraz",target:"_blank",size:"large"},"GITHUB")),o.a.createElement(I,null,o.a.createElement(r.AwesomeButtonSocial,{type:"facebook",ripple:!0,href:"https://www.facebook.com",target:"_blank",size:"large"},"FACEBOOK")),o.a.createElement(I,null,o.a.createElement(r.AwesomeButtonSocial,{type:"instagram",ripple:!0,href:"https://www.instagram.com/babak.dev",target:"_blank",size:"large"},"INSTAGRAM")))))}},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(135),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(138),m=n.n(c);n.d(t,"PageRenderer",function(){return m.a});var u=n(28);n.d(t,"parsePath",function(){return u.a});var d=o.a.createContext({}),p=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},138:function(e,t,n){var a;e.exports=(a=n(139))&&a.default||a},139:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(47),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio Site"}},logoImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnklEQVQY003PuwrCQBCF4bETjYWCRG28BDtLyyDeHsNKAhZioYVd2qRQEEVE8AJWgo1P4Lv5iyeQhW93mT3MsGZmIzj2X21JrzrG6KKpmqezhUEqm/ltZ0wRYIMYE8wU9nHDEyvV7xq0xhAL1JKue2zxxgMvnPDBUpkIBw274IoOQsxxRC/5aQFFVFCVHHboq2FJYUf3suouGsjrLfsFXTQVLS14hxMAAAAASUVORK5CYII=",aspectRatio:5.12,src:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png",srcSet:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/0552a/logo_expanded.png 75w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/fc3be/logo_expanded.png 150w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png 300w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/24f49/logo_expanded.png 450w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/5497d/logo_expanded.png 600w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/6a61b/logo_expanded.png 900w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/b2120/logo_expanded.png 1920w",sizes:"(max-width: 300px) 100vw, 300px"}}},logoImage2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAC4jAAAuIwF4pT92AAADnUlEQVQ4y6WUWSj9WxTH3TqndCmZknko/e/1YBYZQ5kpL16IRMmD4UVKpvIgY2aFEvFkikiR8Q15ce4+LnLLFOEJpb+f/Vt3rdU5P9w6bre7arWH89ufs/Ze37WsAMAKTYeu/5+u293dtWKYra3tUlZW1llhYaEhPz9fFBQUiKKiIlFcXCxwT+Tm5oqUlBSRmpoq0tPTRVpamuaZmZmG+Pj4M71ev4wsawLqIyIizoxGIwwNDcHY2BgMDw9DR0cHtLW1QU9PDxwdHcF3dnV1BQ4ODn8h61cGJicnGwYHB+nuCrokz8nJkbW1tTxvbW2Vb29v8vDwUOL5f7pycXEBjo6ORg2YmJgoKDI67O/vryJcnZiYUPFj1c/PT8Uo1ZWVFXbae39/V8mklLSWJuCxBkxKShKjo6MMXFtbg7y8PIiLi+Pr+Pj4QENDAz/Dy8sL7yGLx2+BIyMjDJycnISAgADIyMjgQ+Hh4VBdXQ1zc3O8xui0t7MIpCubgTY2NjRCdnY2R4LZhsbGRjg5OTFD/j3Cz0CdTsdAlBFH09vbC52dnQwh2GdXFMXylemNTBlmYGxsLEcxPT0NXV1dlhTDwMvLS5LNBzAhIUFMTU2Bvb299PT0BDs7O46QDEUOFRUVnBA6eHNzw359fU36Ux8fH+X5+Tk4OTl9AIODg8XT0xPc39/Lu7s7uL29hYeHBy0pFLG3tzc4OzvTQR5dXFzomqqbm5vEkgMPD48PYGBgoKA3MQlVMxQyNDc3w87ODgwMDDA4KioKhBDg7u5Oa7WlpUXu7++Dq6vrBzAoKEhgJTDQNMLi4iIsLy9DWVkZGAwGODg4YOD4+Limz9DQULW/v18uLCzQ+isQM6ZFSPPKykrtypubmxwlAY+Pj3mf3hrfVsWmIefn5y0DzRpbWlqC5+dniI6Ohq2tLdjY2IDIyEiYmZnh32NiYug5VOxUcn19Hby8vCwDzVCykJAQoHLc29uDkpISKC0t5f2amhrAVqeS1La3tyni74GmNYSFhXHZ0Rp7o1bjtOfr68tAusEXIGb5j9fXVy5VUj85Joc7C36oouh5jvpUUR487+vrIxj5++rq6tcrY7aMn5T/xaj0zHVcVVUF1DfJZmdnoby8HOrr69XT01NAPf6pAVGkR3V1ddDU1PQTW5VidvxYwc6toNZ43d3drbS3t/M+Nl1eY6Q/6Y+sra0FA7HkCOqL/jv6D/Tf/qP/MJ31w7b3y98Ovd7hnhnyMAAAAABJRU5ErkJggg==",aspectRatio:.9,src:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png",srcSet:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/0552a/logo.png 75w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/fc3be/logo.png 150w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png 300w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/24f49/logo.png 450w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/5497d/logo.png 600w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/6a61b/logo.png 900w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},141:function(e,t,n){},142:function(e,t,n){"use strict";var a=n(140),o=n(0),i=n.n(o),r=n(4),l=n.n(r),s=n(145),c=n.n(s),m=n(137),u=n(136),d=n(6),p=n.n(d),h=n(46),f=n.n(h),g=u.a.div.withConfig({displayName:"MenuButton__Burger",componentId:"jyhd57-0"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;height:40px;margin:0 auto;width:50px;z-index:6;"]),b=u.a.div.withConfig({displayName:"MenuButton__Bar",componentId:"jyhd57-1"})(["width:80%;height:8px;background-color:black;border-radius:20px;&:first-child{width:100%;}&:last-child{width:60%;}"]),w=u.a.div.withConfig({displayName:"MenuButton__Container",componentId:"jyhd57-2"})(["max-width:150px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0.5em;-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;cursor:pointer;"]),y=u.a.span.withConfig({displayName:"MenuButton__MenuButtonText",componentId:"jyhd57-3"})(["padding:0;"]),E=u.a.div.withConfig({displayName:"MenuButton__MenuButtonClose",componentId:"jyhd57-4"})(["z-index:6;"]),x=i.a.createElement(g,null,i.a.createElement(b,null),i.a.createElement(b,null),i.a.createElement(b,null)),v=i.a.createElement(g,null,i.a.createElement(E,null,i.a.createElement("h1",null,"X"))),A=function(e){var t=e.isOpen,n=e.onMouseDown;return i.a.createElement(w,{onMouseDown:n},i.a.createElement(g,null,t?v:x),i.a.createElement(y,null))},C=u.a.div.withConfig({displayName:"menu__Container",componentId:"ldryeq-0"})([""]),k=u.a.div.withConfig({displayName:"menu__MenuOuterContainer",componentId:"ldryeq-1"})(["position:absolute;top:0;left:0;width:100%;height:100vh;z-index:",";background-color:rgba(255,255,255,1);opacity:",";-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;padding:2em 0;a{text-decoration:none;max-width:500px;padding:2em 4em;}a:hover{background:rgba(0,0,0,0);}*{-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;}"],function(e){return e.isOpen?5:-1},function(e){return e.isOpen||0}),S=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n.toggleMenu=n.toggleMenu.bind(f()(f()(n))),n.closeMenu=n.closeMenu.bind(f()(f()(n))),n}p()(t,e);var n=t.prototype;return n.toggleMenu=function(e){e.preventDefault();var t=this.state.isOpen;this.setState({isOpen:!t})},n.closeMenu=function(e){e.preventDefault(),this.setState({isOpen:!1})},n.render=function(){var e=this.state.isOpen;return i.a.createElement(C,null,i.a.createElement(A,{isOpen:e,onMouseDown:this.toggleMenu}),i.a.createElement(k,{isOpen:e,onMouseDown:this.closeMenu},i.a.createElement(m.Link,{to:"/"},i.a.createElement("h2",null,"About")),i.a.createElement(m.Link,{to:"/portfolio"},i.a.createElement("h2",null,"Portfolio")),i.a.createElement(m.Link,{to:"/labs"},i.a.createElement("h2",null,"Labs")),i.a.createElement(m.Link,{to:"/contact"},i.a.createElement("h2",null,"Contact Me"))))},t}(i.a.Component),I=u.a.h1.withConfig({displayName:"header__NameHeading",componentId:"sc-31ozxh-0"})(["color:black;padding:0;line-height:1.5em;font-size:1.7em;white-space:nowrap;margin:0;"]),M=u.a.h1.withConfig({displayName:"header__SubHeading",componentId:"sc-31ozxh-1"})(["color:rgba(0,0,0,0.4);padding:0;line-height:1em;font-size:1.30em;white-space:nowrap;margin:0;"]),z=u.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["margin:0 auto;width:100%;padding:1em 1em;display:flex;flex-direction:row;align-items:center;justify-content:space-between;@media only screen and (max-width:370px){.NameHeading{font-size:1.4em;}.SubHeading{font-size:1em;}}@media only screen and (max-width:333px){.NameHeading{font-size:1.2em;}.SubHeading{font-size:0.8em;}}@media only screen and (min-width:800px){padding:1em 2em;}@media only screen and (min-width:1000px){max-width:100%;}"]),F=u.a.div.withConfig({displayName:"header__HeadingContainer",componentId:"sc-31ozxh-3"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:0 0;"]),D=function(){return i.a.createElement(z,null,i.a.createElement(F,null,i.a.createElement(m.Link,{to:"/",style:{color:"black",textDecoration:"none"}},i.a.createElement(I,{className:"NameHeading"},"Babak Chehraz")),i.a.createElement(M,{className:"SubHeading"},"Software Developer")),i.a.createElement(S,null))},L=u.a.div.withConfig({displayName:"footer__Container",componentId:"r54yyk-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:0;width:100%;margin:0 auto;a{text-decoration:none;}"]),_=function(e){var t=e.showing;return i.a.createElement("div",{style:{textAlign:"center",padding:"2em 0",display:!1===t?"none":"block"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100%",padding:"1em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},i.a.createElement(L,null,i.a.createElement("h4",null,"Let's Talk"),i.a.createElement("p",null,"Wanna get in touch or talk about a project?",i.a.createElement("br",null),"Feel free to contact me via email at ",i.a.createElement("a",{href:"mailto:babak.chehraz@gmail.com"},i.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"babak.chehraz@gmail.com")),i.a.createElement("br",null),"or drop a line in the form at the ",i.a.createElement(m.Link,{to:"/contact"},i.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"contact page"))))))},N=(n(141),function(e){var t=e.children,n=e.showFooter;return i.a.createElement(m.StaticQuery,{query:"728243612",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{borderTop:"3px solid #0099ff"}},i.a.createElement("div",{style:{height:"auto",maxWidth:"100%",margin:"0 auto"}},i.a.createElement(D,null),i.a.createElement("div",{style:{margin:"0 auto",padding:"0"}},t),i.a.createElement(_,{showing:n}))))},data:a})});N.propTypes={children:l.a.node.isRequired};t.a=N}}]);
//# sourceMappingURL=component---src-pages-contact-js-88e54fbb46fabe131b3a.js.map