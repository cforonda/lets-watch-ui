(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{114:function(e,t){},120:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),i=(n(83),n(84),n(18)),l=n(47),u=n.n(l),m=n(69),s=n(71),d=n(70),p=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){if(window.YT)e.loadVideo();else{var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",window.onYouTubeIframeAPIReady=e.loadVideo;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}},e.loadVideo=function(){var t=e.props.id;e.player=new window.YT.Player("youtube-player-".concat(t),{videoId:t,events:{onReady:e.onPlayerReady}})},e.onPlayerReady=function(e){e.target.playVideo()},e.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"youtube-player-".concat(e.props.id)}))},e}return n}(o.a.PureComponent),f=n(165),b=n(164),v=n(159);var h=function(e){var t=e.callback,n=void 0===t?function(e){return e}:t,c=Object(a.useState)(""),r=Object(i.a)(c,2),l=r[0],u=r[1],m=Object(v.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}))();return o.a.createElement("div",{className:"form-container"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(l.repeat(1)),u("")},className:m.root,noValidate:!0,autoComplete:"off"},o.a.createElement(b.a,{id:"outlined-basic",label:"Youtube Link",variant:"outlined",value:l,onChange:function(e){return t=e.target.value,u(t);var t},required:!0}),o.a.createElement(f.a,{variant:"contained",style:{padding:"auto",width:"100px",margin:"10px",height:"50px"},color:"primary",type:"submit"},o.a.createElement("b",null,"Submit"))))},E=n(163),g=(n(120),n(166)),y=Object({NODE_ENV:"production",PUBLIC_URL:"/lets-watch-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_ENDPOINT||"https://lets-watch-backend.herokuapp.com/",k=Object(a.createContext)();function w(e){var t=e.children,n=Object(a.useState)(u()(y)),c=Object(i.a)(n,2),r=c[0],l=c[1],m=Object(a.useState)("community"),s=Object(i.a)(m,2),d=s[0],p=s[1],f=Object(a.useState)(Object(g.a)()),b=Object(i.a)(f,2),v=b[0],h=b[1];Object(a.useEffect)((function(){r.emit("update-nickname",v),r.emit("join-room",d)}));return console.log("Socket Connection: ".concat(y)),o.a.createElement(k.Provider,{value:{socket:r,updateSocket:function(e){return l(e)},socketRoom:d,updateSocketRoom:function(e){p(e),r.emit("join-room",e)},socketNickname:v,updateSocketNickname:function(e){h(e),r.emit("update-nickname",e)}}},t)}n(121).config();var O=function(e){e.routerProps;var t=Object(a.useState)(),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),m=u[0],s=u[1],d=Object(a.useContext)(k),b=d.socket,v=d.socketRoom,g=(d.updateSocketRoom,d.socketNickname),y=(d.updateSocketNickname,{padding:"auto",margin:"10px",height:"50px"});return Object(a.useEffect)((function(){setInterval((function(){b.emit("getNumClients")}),500),b.on("updateClients",(function(e){e.message&&console.log(e.message),r(e.numClients)})),b.on("user-joined-room",(function(e){console.log(e.message)})),b.on("user-joined-room-failed",(function(e){console.log(e.message)}))}),[]),o.a.createElement("div",{className:"screen"},c?o.a.createElement(E.a,{variant:"h6"},c," users are currently watching"):o.a.createElement(E.a,{variant:"h6"},"1 user is currently watching"),o.a.createElement("br",null),o.a.createElement(h,{callback:function(e){""!=e&&s(e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/)[7])}}),o.a.createElement("br",null),o.a.createElement(f.a,{variant:"contained",value:"Get Nickname",color:"primary",style:y,onClick:function(){console.log("Hello ".concat(g,"!"))}},o.a.createElement("b",null,"Get Nickname")),o.a.createElement(f.a,{variant:"contained",value:"Get Room Name",color:"primary",style:y,onClick:function(){console.log("Hello ".concat(g,", you are currently in room: ").concat(v))}},o.a.createElement("b",null,"Get Room Name")),o.a.createElement("br",null),o.a.createElement("br",null),m?o.a.createElement(p,{id:m}):null)},j=n(10);var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(O,{routerProps:e})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(48);n(125);var C=function(){return o.a.createElement("header",null,"Let's Watch Something Together!")};n(126);var P=function(){return o.a.createElement("footer",null,"Let's Watch \xa9 ",(new Date).getFullYear()," - Created by Stephen White & Champ Foronda")};r.a.render(o.a.createElement(w,null,o.a.createElement(N.a,{basename:"/lets-watch-frontend"},o.a.createElement(C,null),o.a.createElement(S,null),o.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,n){e.exports=n(127)},83:function(e,t,n){},84:function(e,t,n){}},[[78,1,2]]]);
//# sourceMappingURL=main.309561f4.chunk.js.map