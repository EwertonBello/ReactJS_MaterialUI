(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a(248)},111:function(e,t,a){},112:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},243:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),l=a.n(i),o=(a(111),a(21)),c=a(22),s=a(24),m=a(23),u=a(25),p=a(92),h=a.n(p),E=a(26),f=a(90),b=a.n(f),d=(a(112),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Pressione o bot\xe3o para Entrar"),r.a.createElement(E.b,{className:"App-link",to:"/home"},r.a.createElement(h.a,{className:"btnClass",size:"large",variant:"contained",color:"primary"},"INICIAR"))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(50),v=a.n(g),w=a(51),j=a.n(w),O=a(28),k=a.n(O),y=a(52),N=a.n(y),_=a(99),C=a.n(_),D=a(100),x=a.n(D),A=a(36),I=a.n(A),S=a(49),L=a(46),M=a.n(L),B=a(47),J=a.n(B),T=a(97),z=a.n(T),H=a(48),P=a.n(H),R=a(98),V=a.n(R),W=(a(190),a(95)),F=a.n(W),U=a(96),$=a.n(U),q=a(94),G=a.n(q),K=a(27),Q=(a(191),"https://www.desktopbackground.org/p/2014/03/24/736572_star-wars-logo-wallpapers-wallpapers-cave_1600x900_h.png"),X=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={films:[],isLoading:!1,error:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://swapi.dev/api/films/").then(function(e){if(e.ok)return e.json();throw new Error("Alguma coisa n\xe3o deu certo...")}).then(function(t){return e.setState({films:t.results,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"_openDetails",value:function(e){this.props.history.push("/details",{film:e,img:Q})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("p",null,this.state.error.message):this.state.isLoading?r.a.createElement(G.a,{size:90,className:"progress"}):r.a.createElement(M.a,null,this.state.films.map(function(t){return r.a.createElement(J.a,{button:!0,key:t.episode_id,onClick:function(){return e._openDetails(t)}},r.a.createElement(F.a,null,r.a.createElement($.a,{alt:t.title,src:Q})),r.a.createElement(P.a,{primary:t.title}))}))}}]),t}(n.Component),Y=Object(K.e)(X),Z=Object(S.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:"#000"}}}),ee=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this)))._abrirDrawer=function(t){return function(){e.setState({open:t})}},e.state={open:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",null,r.a.createElement(M.a,null,r.a.createElement(E.b,{className:"Home-link",to:"/"},r.a.createElement(J.a,{button:!0},r.a.createElement(z.a,null,r.a.createElement(V.a,null)),r.a.createElement(P.a,{primary:"Tela Inicial"})))));return r.a.createElement(I.a,{theme:Z},r.a.createElement(v.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(N.a,{onClick:this._abrirDrawer(!0),color:"inherit","aria-label":"Menu"},r.a.createElement(C.a,null)),r.a.createElement(k.a,{variant:"h6",color:"inherit"},"Home"))),r.a.createElement(x.a,{open:this.state.open,onClose:this._abrirDrawer(!1)},e),r.a.createElement(Y,null))}}]),t}(n.Component),te=a(105),ae=a.n(te),ne=a(101),re=a.n(ne),ie=a(102),le=a.n(ie),oe=a(104),ce=a.n(oe),se=a(103),me=a.n(se),ue=(a(243),Object(S.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:"#000"}}})),pe=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={film:[],img:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement(re.a,{className:"card"},r.a.createElement(le.a,null,r.a.createElement(me.a,{className:"mediaDetails",image:this.state.img,title:this.state.film.title}),r.a.createElement(ce.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.state.film.title),r.a.createElement(k.a,{component:"p"},this.state.film.opening_crawl))));return r.a.createElement(I.a,{theme:ue},r.a.createElement(v.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(N.a,{onClick:function(){return e.props.history.goBack()},color:"inherit","aria-label":"back"},r.a.createElement(ae.a,null)),r.a.createElement(k.a,{variant:"h6",color:"inherit"},"Details"))),t)}}],[{key:"getDerivedStateFromProps",value:function(e){return{film:e.location.state.film,img:e.location.state.img}}}]),t}(n.Component);l.a.render(r.a.createElement(E.a,{basename:"/ReactJS_MaterialUI"},r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/",exact:!0,component:d}),r.a.createElement(K.a,{path:"/home",component:ee}),r.a.createElement(K.a,{path:"/details",component:pe}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[106,1,2]]]);
//# sourceMappingURL=main.7c2b5489.chunk.js.map
