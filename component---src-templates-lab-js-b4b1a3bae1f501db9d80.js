(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return w});var n=a(0),i=a.n(n),o=(a(137),a(162)),r=a.n(o),l=a(136),s=a(148),d=(a(149),a(142)),c=l.a.div.withConfig({displayName:"lab__Container",componentId:"sc-1duyjt5-0"})(["padding:1em 1em;margin:0 auto;display:flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;width:100vw;max-width:1000px;@media only screen and (min-width:800px){padding:1em 2em;}"]),u=l.a.div.withConfig({displayName:"lab__LinkContainer",componentId:"sc-1duyjt5-1"})(["width:100%;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:baseline;"]),p=(l.a.div.withConfig({displayName:"lab__DisqusContainer",componentId:"sc-1duyjt5-2"})(["height:400px;margin:0 auto;display:flex;justify-content:center;width:100%;border:5px dotted blue;"]),l.a.div.withConfig({displayName:"lab__Disqus",componentId:"sc-1duyjt5-3"})(["border:5px dotted green;margin:0 auto;"]),l.a.div.withConfig({displayName:"lab__Content",componentId:"sc-1duyjt5-4"})(["padding:0 0;text-align:justify;"])),f=l.a.div.withConfig({displayName:"lab__ButtonSpan",componentId:"sc-1duyjt5-5"})(["padding:5px;padding-right:5px;"]),m=l.a.div.withConfig({displayName:"lab__AuthorContainer",componentId:"sc-1duyjt5-6"})(["border-top:2px solid black;padding:1em;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:100%;"]),h=l.a.div.withConfig({displayName:"lab__AuthorImage",componentId:"sc-1duyjt5-7"})(["min-width:2.9rem;height:2.9rem;margin:0 auto;margin-top:-1.5rem;"]),g=l.a.div.withConfig({displayName:"lab__Author",componentId:"sc-1duyjt5-8"})(["padding:1em;margin:0 auto;min-width:200px;"]),y=l.a.div.withConfig({displayName:"lab__ImageContainer",componentId:"sc-1duyjt5-9"})(["padding:1em;margin:0 auto;"]),b="localhost:8000";t.default=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,o=n.title,l=n.date,w=n.type,E=(n.ghLink,n.demoLink,a.fields.slug);return i.a.createElement(d.a,null,i.a.createElement(c,null,i.a.createElement("h3",{style:{color:"#333"}},"<"+w+">"),i.a.createElement("h1",null,o),i.a.createElement("h4",{style:{color:"#666"}},"Posted "+l),i.a.createElement(u,null,i.a.createElement(f,null,i.a.createElement(s.AwesomeButtonSocial,{type:"facebook",url:""+b+E,ripple:!0})),i.a.createElement(f,null,i.a.createElement(s.AwesomeButtonSocial,{type:"twitter",url:""+b+E,ripple:!0})),i.a.createElement(f,null,i.a.createElement(s.AwesomeButtonSocial,{type:"gplus",url:""+b+E,ripple:!0}))),i.a.createElement(y,null),i.a.createElement(p,{dangerouslySetInnerHTML:{__html:a.html}}),i.a.createElement(m,null,i.a.createElement(h,null,i.a.createElement(r.a,{fluid:t.authorPicture.childImageSharp.fluid,alt:"Babak's profile pic",style:{borderRadius:"100%",width:"100%",height:"100%"}})),i.a.createElement(g,null,i.a.createElement("p",null,i.a.createElement("b",null,"Babak Chehraz "),"is a Software Developer based in Fresno, California. You should follow him on ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/babakthedev"},"Instagram"))))))};var w="1907095220"},137:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=a(135),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(138),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var p=i.a.createContext({}),f=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},138:function(e,t,a){var n;e.exports=(n=a(139))&&n.default||n},139:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=a(47),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio Site"}},logoImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAnklEQVQY003PuwrCQBCF4bETjYWCRG28BDtLyyDeHsNKAhZioYVd2qRQEEVE8AJWgo1P4Lv5iyeQhW93mT3MsGZmIzj2X21JrzrG6KKpmqezhUEqm/ltZ0wRYIMYE8wU9nHDEyvV7xq0xhAL1JKue2zxxgMvnPDBUpkIBw274IoOQsxxRC/5aQFFVFCVHHboq2FJYUf3suouGsjrLfsFXTQVLS14hxMAAAAASUVORK5CYII=",aspectRatio:5.12,src:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png",srcSet:"/portfolio/static/6139393ed9132ed6276c90107063c7a1/0552a/logo_expanded.png 75w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/fc3be/logo_expanded.png 150w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/045aa/logo_expanded.png 300w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/24f49/logo_expanded.png 450w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/5497d/logo_expanded.png 600w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/6a61b/logo_expanded.png 900w,\n/portfolio/static/6139393ed9132ed6276c90107063c7a1/b2120/logo_expanded.png 1920w",sizes:"(max-width: 300px) 100vw, 300px"}}},logoImage2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAC4jAAAuIwF4pT92AAADnUlEQVQ4y6WUWSj9WxTH3TqndCmZknko/e/1YBYZQ5kpL16IRMmD4UVKpvIgY2aFEvFkikiR8Q15ce4+LnLLFOEJpb+f/Vt3rdU5P9w6bre7arWH89ufs/Ze37WsAMAKTYeu/5+u293dtWKYra3tUlZW1llhYaEhPz9fFBQUiKKiIlFcXCxwT+Tm5oqUlBSRmpoq0tPTRVpamuaZmZmG+Pj4M71ev4wsawLqIyIizoxGIwwNDcHY2BgMDw9DR0cHtLW1QU9PDxwdHcF3dnV1BQ4ODn8h61cGJicnGwYHB+nuCrokz8nJkbW1tTxvbW2Vb29v8vDwUOL5f7pycXEBjo6ORg2YmJgoKDI67O/vryJcnZiYUPFj1c/PT8Uo1ZWVFXbae39/V8mklLSWJuCxBkxKShKjo6MMXFtbg7y8PIiLi+Pr+Pj4QENDAz/Dy8sL7yGLx2+BIyMjDJycnISAgADIyMjgQ+Hh4VBdXQ1zc3O8xui0t7MIpCubgTY2NjRCdnY2R4LZhsbGRjg5OTFD/j3Cz0CdTsdAlBFH09vbC52dnQwh2GdXFMXylemNTBlmYGxsLEcxPT0NXV1dlhTDwMvLS5LNBzAhIUFMTU2Bvb299PT0BDs7O46QDEUOFRUVnBA6eHNzw359fU36Ux8fH+X5+Tk4OTl9AIODg8XT0xPc39/Lu7s7uL29hYeHBy0pFLG3tzc4OzvTQR5dXFzomqqbm5vEkgMPD48PYGBgoKA3MQlVMxQyNDc3w87ODgwMDDA4KioKhBDg7u5Oa7WlpUXu7++Dq6vrBzAoKEhgJTDQNMLi4iIsLy9DWVkZGAwGODg4YOD4+Limz9DQULW/v18uLCzQ+isQM6ZFSPPKykrtypubmxwlAY+Pj3mf3hrfVsWmIefn5y0DzRpbWlqC5+dniI6Ohq2tLdjY2IDIyEiYmZnh32NiYug5VOxUcn19Hby8vCwDzVCykJAQoHLc29uDkpISKC0t5f2amhrAVqeS1La3tyni74GmNYSFhXHZ0Rp7o1bjtOfr68tAusEXIGb5j9fXVy5VUj85Joc7C36oouh5jvpUUR487+vrIxj5++rq6tcrY7aMn5T/xaj0zHVcVVUF1DfJZmdnoby8HOrr69XT01NAPf6pAVGkR3V1ddDU1PQTW5VidvxYwc6toNZ43d3drbS3t/M+Nl1eY6Q/6Y+sra0FA7HkCOqL/jv6D/Tf/qP/MJ31w7b3y98Ovd7hnhnyMAAAAABJRU5ErkJggg==",aspectRatio:.9,src:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png",srcSet:"/portfolio/static/bb694bab9550ed4ad01834418116a6af/0552a/logo.png 75w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/fc3be/logo.png 150w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/045aa/logo.png 300w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/24f49/logo.png 450w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/5497d/logo.png 600w,\n/portfolio/static/bb694bab9550ed4ad01834418116a6af/6a61b/logo.png 900w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},141:function(e,t,a){},142:function(e,t,a){"use strict";var n=a(140),i=a(0),o=a.n(i),r=a(4),l=a.n(r),s=a(145),d=a.n(s),c=a(137),u=a(136),p=a(6),f=a.n(p),m=a(46),h=a.n(m),g=u.a.div.withConfig({displayName:"MenuButton__Burger",componentId:"jyhd57-0"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;height:40px;margin:0 auto;width:50px;z-index:6;"]),y=u.a.div.withConfig({displayName:"MenuButton__Bar",componentId:"jyhd57-1"})(["width:80%;height:8px;background-color:black;border-radius:20px;&:first-child{width:100%;}&:last-child{width:60%;}"]),b=u.a.div.withConfig({displayName:"MenuButton__Container",componentId:"jyhd57-2"})(["max-width:150px;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0.5em;-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;cursor:pointer;"]),w=u.a.span.withConfig({displayName:"MenuButton__MenuButtonText",componentId:"jyhd57-3"})(["padding:0;"]),E=u.a.div.withConfig({displayName:"MenuButton__MenuButtonClose",componentId:"jyhd57-4"})(["z-index:6;"]),x=o.a.createElement(g,null,o.a.createElement(y,null),o.a.createElement(y,null),o.a.createElement(y,null)),v=o.a.createElement(g,null,o.a.createElement(E,null,o.a.createElement("h1",null,"X"))),A=function(e){var t=e.isOpen,a=e.onMouseDown;return o.a.createElement(b,{onMouseDown:a},o.a.createElement(g,null,t?v:x),o.a.createElement(w,null))},I=u.a.div.withConfig({displayName:"menu__Container",componentId:"ldryeq-0"})([""]),S=u.a.div.withConfig({displayName:"menu__MenuOuterContainer",componentId:"ldryeq-1"})(["position:absolute;top:0;left:0;width:100%;height:100vh;z-index:",";background-color:rgba(255,255,255,1);opacity:",";-webkit-transition:all 300ms ease-in-out;-moz-transition:all 300ms ease-in-out;-ms-transition:all 300ms ease-in-out;-o-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;color:black;padding:2em 0;a{text-decoration:none;max-width:500px;padding:2em 4em;}a:hover{background:rgba(0,0,0,0);}*{-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;}"],function(e){return e.isOpen?5:-1},function(e){return e.isOpen||0}),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a.toggleMenu=a.toggleMenu.bind(h()(h()(a))),a.closeMenu=a.closeMenu.bind(h()(h()(a))),a}f()(t,e);var a=t.prototype;return a.toggleMenu=function(e){e.preventDefault();var t=this.state.isOpen;this.setState({isOpen:!t})},a.closeMenu=function(e){e.preventDefault(),this.setState({isOpen:!1})},a.render=function(){var e=this.state.isOpen;return o.a.createElement(I,null,o.a.createElement(A,{isOpen:e,onMouseDown:this.toggleMenu}),o.a.createElement(S,{isOpen:e,onMouseDown:this.closeMenu},o.a.createElement(c.Link,{to:"/"},o.a.createElement("h2",null,"About")),o.a.createElement(c.Link,{to:"/portfolio"},o.a.createElement("h2",null,"Portfolio")),o.a.createElement(c.Link,{to:"/labs"},o.a.createElement("h2",null,"Labs")),o.a.createElement(c.Link,{to:"/contact"},o.a.createElement("h2",null,"Contact Me"))))},t}(o.a.Component),L=u.a.h1.withConfig({displayName:"header__NameHeading",componentId:"sc-31ozxh-0"})(["color:black;padding:0;line-height:1.5em;font-size:1.7em;white-space:nowrap;margin:0;"]),k=u.a.h1.withConfig({displayName:"header__SubHeading",componentId:"sc-31ozxh-1"})(["color:rgba(0,0,0,0.4);padding:0;line-height:1em;font-size:1.30em;white-space:nowrap;margin:0;"]),j=u.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["margin:0 auto;width:100%;padding:1em 1em;display:flex;flex-direction:row;align-items:center;justify-content:space-between;@media only screen and (max-width:370px){.NameHeading{font-size:1.4em;}.SubHeading{font-size:1em;}}@media only screen and (max-width:333px){.NameHeading{font-size:1.2em;}.SubHeading{font-size:0.8em;}}@media only screen and (min-width:800px){padding:1em 2em;}"]),_=u.a.div.withConfig({displayName:"header__HeadingContainer",componentId:"sc-31ozxh-3"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:0 0;"]),D=function(){return o.a.createElement(j,null,o.a.createElement(_,null,o.a.createElement(c.Link,{to:"/",style:{color:"black",textDecoration:"none"}},o.a.createElement(L,{className:"NameHeading"},"Babak Chehraz")),o.a.createElement(k,{className:"SubHeading"},"Software2Developer")),o.a.createElement(C,null))},z=u.a.div.withConfig({displayName:"footer__Container",componentId:"r54yyk-0"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;padding:0;width:100%;margin:0 auto;a{text-decoration:none;}"]),M=function(e){var t=e.showing;return o.a.createElement("div",{style:{textAlign:"center",padding:"2em 0",display:!1===t?"none":"block"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100%",padding:"1em",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}},o.a.createElement(z,null,o.a.createElement("h4",null,"Let's Talk"),o.a.createElement("p",null,"Wanna get in touch or talk about a project?",o.a.createElement("br",null),"Feel free to contact me via email at ",o.a.createElement("a",{href:"mailto:babak.chehraz@gmail.com"},o.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"babak.chehraz@gmail.com")),o.a.createElement("br",null),"or drop a line in the form at the ",o.a.createElement(c.Link,{to:"/contact"},o.a.createElement("span",{style:{color:"#0099ff",fontWeight:"bold"}},"contact page"))))))},N=(a(141),function(e){var t=e.children,a=e.showFooter;return o.a.createElement(c.StaticQuery,{query:"728243612",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{style:{borderTop:"3px solid #0099ff"}},o.a.createElement("div",{style:{height:"auto",maxWidth:"1250px",margin:"0 auto"}},o.a.createElement(D,null),o.a.createElement("div",{style:{margin:"0 auto",padding:"0"}},t),o.a.createElement(M,{showing:a}))))},data:n})});N.propTypes={children:l.a.node.isRequired};t.a=N},162:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var i,o=n(a(6)),r=n(a(46)),l=n(a(153)),s=n(a(154)),d=n(a(0)),c=n(a(4)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!p[a]||(p[a]=!0,!1)},m=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",o=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+l+s+t+r+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,i=e.onError,o=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,s.default)({},o,{onLoad:n,onError:i,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!0,o=!1,l=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!1,o=!0),"undefined"==typeof window&&(n=!1,i=!1),t.critical&&(n=!0,i=!1,o=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:i,IOSupported:o,fadeIn:l,hasNoScript:c,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,o=void 0===i?{}:i,r=e.imgStyle,l=void 0===r?{}:r,c=e.placeholderStyle,p=void 0===c?{}:c,f=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,w=e.Tag,E="boolean"==typeof b?"lightgray":b,x=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,p),v=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),A={title:t,alt:this.state.isVisible?"":a,style:x,className:f};if(m){var I=m;return d.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(y,(0,s.default)({src:I.base64},A)),I.tracedSVG&&d.default.createElement(y,(0,s.default)({src:I.tracedSVG},A)),E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,src:I.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:a,title:t},I))}}))}if(h){var S=h,C=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},o);return"inherit"===o.display&&delete C.display,d.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&d.default.createElement(y,(0,s.default)({src:S.base64},A)),S.tracedSVG&&d.default.createElement(y,(0,s.default)({src:S.tracedSVG},A)),E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(y,{alt:a,title:t,width:S.width,height:S.height,src:S.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:a,title:t,width:S.width,height:S.height},S))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:E,fixed:w,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var x=b;t.default=x}}]);
//# sourceMappingURL=component---src-templates-lab-js-b4b1a3bae1f501db9d80.js.map