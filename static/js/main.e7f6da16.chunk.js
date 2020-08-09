(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{124:function(e,t){},142:function(e,t,n){},143:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(93),n(94),n(12)),i=n(75),u=n.n(i),s=Object({NODE_ENV:"production",PUBLIC_URL:"/lets-watch-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_ENDPOINT||"https://lets-watch-backend.herokuapp.com/",m=Object(a.createContext)();function d(e){var t=e.children,n=Object(a.useState)(),o=Object(l.a)(n,2),c=o[0],i=o[1];Object(a.useEffect)((function(){i(u()(s))}),[]);return console.log("Socket Connection: ".concat(s)),r.a.createElement(m.Provider,{value:{socket:c,updateSocket:function(e){return i(e)}}},t)}var b=function(){return Object(a.useContext)(m)},f=Object(a.createContext)();function E(e){var t=e.children,n=Object(a.useState)(),o=Object(l.a)(n,2),c=o[0],i=o[1],u=Object(a.useState)(),s=Object(l.a)(u,2),m=s[0],d=s[1];return r.a.createElement(f.Provider,{value:{clientUsername:c,updateClientUsername:function(e){return i(e)},clientRoom:m,updateClientRoom:function(e){return d(e)}}},t)}var v=function(){return Object(a.useContext)(f)},g=n(181),p=n(174),h=Object(p.a)((function(e){return{root:{"& > *":{padding:e.spacing(1),margin:e.spacing(1)}}}}));var O=function(e){var t=e.username,n=e.setUsername,a=h();return r.a.createElement(g.a,{className:a.root,id:"standard-basic",value:t,label:"enter username...",onChange:function(e){n(e.target.value)}.bind(this)})},j=Object(p.a)((function(e){return{root:{"& > *":{padding:e.spacing(1),margin:e.spacing(1)}}}}));var C=function(e){var t=e.room,n=e.setRoom,a=j();return r.a.createElement(g.a,{className:a.root,id:"standard-basic",label:"enter room...",value:t,onChange:function(e){n(e.target.value)}.bind(this)})},w=n(182),S=n(10),P=Object(p.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(20),width:"25ch"}},button:{"& > *":{}}}}));var k=function(){var e=Object(S.e)(),t=P(),n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],i=o[1],u=Object(a.useState)("community"),s=Object(l.a)(u,2),m=s[0],d=s[1],f=b().socket,E=v(),g=E.updateClientUsername,p=E.updateClientRoom;return r.a.createElement("form",null,r.a.createElement("div",{className:t.root},r.a.createElement(O,{username:c,setUsername:i}),r.a.createElement(C,{room:m,setRoom:d}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(w.a,{className:t.button,variant:"contained",color:"primary",type:"submit",onClick:function(t){t.preventDefault(),f.emit("update-user",{user:c,room:m}),p(m),g(c),i(""),d(""),e.push("/room")}.bind(this),disabled:!(c&&m)},"Enter Room"))},y=n(76);var N=function(e){e.videoId;var t=e.socket,n=Object(a.useState)(),o=Object(l.a)(n,2),c=o[0],i=o[1],u={height:"390",width:"640",playerVars:{autoplay:1}};t.on("start-video",(function(e){i(r.a.createElement(y.a,{videoId:e.videoId,opts:u,onReady:m,onPlay:d,onPause:b,onEnd:f}))}));var s=function(e){return e.target.getCurrentTime()},m=function(e){e.target.playVideo()},d=function(e){console.log("PLAY",e.target),console.log(s(e)),t.emit("play")},b=function(e){console.log("PAUSE"),console.log("Current Time:",s(e))},f=function(e){console.log("END")};return r.a.createElement("div",null,c)};var R=function(e){var t=e.callback,n=void 0===t?function(e){return e}:t,o=Object(a.useState)(""),c=Object(l.a)(o,2),i=c[0],u=c[1],s=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}))();return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(i.repeat(1)),u("")},className:s.root,noValidate:!0,autoComplete:"off"},r.a.createElement(g.a,{id:"outlined-basic",label:"Youtube Link",variant:"outlined",value:i,onChange:function(e){return t=e.target.value,u(t);var t},required:!0}),r.a.createElement(w.a,{variant:"contained",style:{padding:"auto",width:"100px",margin:"10px",height:"50px"},color:"primary",type:"submit"},r.a.createElement("b",null,"Submit"))))},T=n(178);n(142);var x=function(e){e.routerProps;var t=Object(a.useState)(),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)([]),f=Object(l.a)(d,2),E=(f[0],f[1],b().socket);return Object(a.useEffect)((function(){E&&(E.on("update-clients",(function(e){e.message&&console.log(e.message),c(e.numClients)})),E.on("welcome-new-user-to-room",(function(e){console.log(e.message)})),E.on("user-joined-room",(function(e){console.log(e.message)})),E.on("user-left-room",(function(e){console.log(e.message)})),E.on("user-joined-room-failed",(function(e){console.log(e.message)})),E.on("update-client-video",(function(e){m(e.videoId)})))})),r.a.createElement("div",{className:"screen"},s?r.a.createElement(N,{videoId:s,socket:E}):null,r.a.createElement(T.a,{variant:"h6"},"Paste a video"),r.a.createElement(R,{callback:function(e){if(e)try{!function(e){E.emit("add-video-to-server-queue",e)}(e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/)[7])}catch(t){console.log("IMPROPER VIDEO FORMAT")}}}),r.a.createElement("br",null),o>1?r.a.createElement(T.a,{variant:"subtitle1"},r.a.createElement("b",null,o," users")," are currently watching"):r.a.createElement(T.a,{variant:"subtitle1"},r.a.createElement("b",null,"1 user")," is currently watching"),r.a.createElement("br",null),r.a.createElement("br",null))};var I=function(){var e=v(),t=e.clientUsername,n=e.clientRoom;return r.a.createElement("div",{className:"App"},r.a.createElement(S.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(k,{routerProps:e})}}),t&&n?r.a.createElement(S.a,{exact:!0,path:"/room",render:function(e){return r.a.createElement(x,{routerProps:e})}}):r.a.createElement(S.a,{exact:!0,path:"/room",render:function(e){return r.a.createElement(k,{routerProps:e})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(38),_=(n(143),n(179)),D=n(180),A=n(79),W=n.n(A);function L(){var e=v().clientUsername;return r.a.createElement(w.a,{color:"inherit"},r.a.createElement("b",null,e))}function F(){var e=v().clientRoom;return r.a.createElement(w.a,{color:"inherit"},r.a.createElement("b",null,e))}var V=function(){var e=v(),t=e.clientUsername,n=e.clientRoom;return t&&n?r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(F,null)):r.a.createElement(r.a.Fragment,null)};var B=function(){var e=Object(p.a)((function(e){return{root:{background:"radial-gradient(circle, rgba(0,151,255,1) 0%, rgba(32,163,254,1) 100%)"},icon:{marginRight:e.spacing(5)},title:{flexGrow:1},button:{padding:"auto",margin:10,height:50}}}))();return r.a.createElement("div",{className:e.root},r.a.createElement(_.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(W.a,{edge:"start",className:e.icon,color:"inherit","aria-label":"icon"}),r.a.createElement(T.a,{variant:"h5",className:e.title},r.a.createElement("b",null,"Let's Watch Together")),r.a.createElement(V,null))))};n(146);var K=function(){var e=Object(p.a)((function(e){return{root:{background:"radial-gradient(circle, rgba(0,151,255,1) 0%, rgba(32,163,254,1) 100%)"},appbar:{alignItems:"center"}}}))();return r.a.createElement("div",{className:e.root},r.a.createElement("footer",null,r.a.createElement(_.a,{position:"static",className:e.appbar},r.a.createElement(D.a,null,r.a.createElement(T.a,null,"Let's Watch \xa9 ",(new Date).getFullYear()," - Created by Stephen White & Champ Foronda")))))};c.a.render(r.a.createElement(E,null,r.a.createElement(d,null,r.a.createElement(U.a,{basename:"/lets-watch-frontend"},r.a.createElement(B,null),r.a.createElement(I,null),r.a.createElement(K,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,n){e.exports=n(147)},93:function(e,t,n){},94:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.e7f6da16.chunk.js.map