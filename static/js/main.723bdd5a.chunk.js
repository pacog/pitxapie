(this.webpackJsonppitxapie=this.webpackJsonppitxapie||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,n,a){e.exports=a.p+"static/media/pig.ddde7cb0.svg"},,,,,,,,function(e,n,a){e.exports=a.p+"static/media/crocodile.0d5b5d73.svg"},function(e,n,a){e.exports=a.p+"static/media/dog.5745b4ba.svg"},function(e,n,a){e.exports=a.p+"static/media/elephant.6bf760fa.svg"},function(e,n,a){e.exports=a.p+"static/media/fox.9e588f4c.svg"},function(e,n,a){e.exports=a.p+"static/media/giraffe.5fe657a0.svg"},function(e,n,a){e.exports=a.p+"static/media/lion.99420a8e.svg"},function(e,n,a){e.exports=a.p+"static/media/chick.4c04d0d8.svg"},function(e,n,a){e.exports=a.p+"static/media/crab.47e7a89f.svg"},function(e,n,a){e.exports=a.p+"static/media/chicken.ac86d0fc.svg"},function(e,n,a){e.exports=a.p+"static/media/boar.812db292.svg"},function(e,n,a){e.exports=a.p+"static/media/cow.118894da.svg"},function(e,n,a){e.exports=a.p+"static/media/frog.5947c8f5.svg"},function(e,n,a){e.exports=a.p+"static/media/goat.a45cfdd0.svg"},function(e,n,a){e.exports=a.p+"static/media/rooster.c5bf81f2.svg"},function(e,n,a){e.exports=a.p+"static/media/sheep.da86707b.svg"},,,function(e,n,a){e.exports=a.p+"static/media/aafke.872d3ad3.png"},function(e,n,a){e.exports=a.p+"static/media/bisa.b12d1e2f.png"},function(e,n,a){e.exports=a.p+"static/media/inaki_aafke.4b718271.png"},function(e,n,a){e.exports=a.p+"static/media/mama_1.81a92d0b.png"},function(e,n,a){e.exports=a.p+"static/media/massimo_2.d4197eed.png"},function(e,n,a){e.exports=a.p+"static/media/abuela_carmen.0511d4f8.png"},function(e,n,a){e.exports=a.p+"static/media/carla.0059e07b.png"},function(e,n,a){e.exports=a.p+"static/media/kakitrien.8b8433fc.png"},function(e,n,a){e.exports=a.p+"static/media/mama_2.ffd3aedf.png"},function(e,n,a){e.exports=a.p+"static/media/massimo_alex.7f214a44.png"},function(e,n,a){e.exports=a.p+"static/media/abuelo_jose.214f1515.png"},function(e,n,a){e.exports=a.p+"static/media/carmen.7cc8bb07.png"},function(e,n,a){e.exports=a.p+"static/media/lola.1694cf64.png"},function(e,n,a){e.exports=a.p+"static/media/manuel.9d2aebde.png"},function(e,n,a){e.exports=a.p+"static/media/rum.30643369.png"},function(e,n,a){e.exports=a.p+"static/media/abuelomiguel.f0ace14f.png"},function(e,n,a){e.exports=a.p+"static/media/carmen_aritz.020ddd26.png"},function(e,n,a){e.exports=a.p+"static/media/lucas.125cd58f.png"},function(e,n,a){e.exports=a.p+"static/media/manuel_agustin.a13dbfe2.png"},function(e,n,a){e.exports=a.p+"static/media/rum_niki.1b2c9bb1.png"},function(e,n,a){e.exports=a.p+"static/media/andreu_1.ec1a80a1.png"},function(e,n,a){e.exports=a.p+"static/media/catrien_ana.cd900d62.png"},function(e,n,a){e.exports=a.p+"static/media/maka.b60cd436.png"},function(e,n,a){e.exports=a.p+"static/media/mark.1665a7e5.png"},function(e,n,a){e.exports=a.p+"static/media/tres_locos.3624f2e9.png"},function(e,n,a){e.exports=a.p+"static/media/andreu_2.7095f029.png"},function(e,n,a){e.exports=a.p+"static/media/giovane.0c13cce9.png"},function(e,n,a){e.exports=a.p+"static/media/mama.a2258c66.png"},function(e,n,a){e.exports=a.p+"static/media/massimo.a4d0fca5.png"},function(e,n,a){e.exports=a.p+"static/media/xabi.e7dfeb0f.png"},,,function(e,n,a){e.exports=a(92)},,,,,function(e,n,a){},function(e,n,a){},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),i=a(20),c=a.n(i),s=a(21),r=a.n(s),u=(a(79),a(14)),m=a(1),f=a(7);a(80);var p=function(e){var n=e.onPress,a=Object(t.useRef)(0);return o.a.createElement(f.a.div,{className:"long-press-button",onTapStart:function(){a.current=performance.now()},onTap:function(){(performance.now()-a.current)/1e3>=1&&n()},initial:{scale:1,opacity:.1,backgroundColor:"#f48c06"},whileTap:{scale:3,opacity:.8,backgroundColor:"#fff",transition:{duration:1}}})},l=a(22);function d(e){return e[Math.floor(Math.random()*e.length)]}var g=function(e){var n=e.routes,a=Object(m.g)(),t=Object(m.f)();return o.a.createElement(p,{onPress:function(){var e=d(n.filter((function(e){return e.pathname!==a.pathname})));t.replace(e)}})},b=a(72),h=a(6),v=a(96),x="ontouchstart"in document.documentElement;var E=function(e){var n=e.onAnyInput,a=e.children,i=Object(t.useRef)(null),c=Object(v.a)(n,{wait:500,trailing:!1}),s=c.run,r=c.cancel;return Object(t.useEffect)((function(){null!==i.current&&i.current.focus()}),[i]),Object(t.useEffect)((function(){return r}),[r]),o.a.createElement("div",{ref:i,onMouseUp:function(){x||s()},onKeyUp:s,onTouchStart:s,tabIndex:0},a)},S=a(25),N=a.n(S),j=a(26),w=a.n(j),y=a(27),O=a.n(y),k=a(28),_=a.n(k),M=a(29),I=a.n(M),A=a(30),T=a.n(A),L=a(31),P=a.n(L),C=a(17),U=a.n(C),R=a(32),W=a.n(R),z=a(33),B=a.n(z),H=a(34),J=a.n(H),V=a(35),F=a.n(V),K=a(36),$=a.n(K),q=a(37),D=a.n(q),G=a(38),Q=a.n(G),X=a(39),Y=a.n(X),Z=[{src:N.a,name:"crocodile",sounds:["/sounds/crocodile1.mp3","/sounds/crocodile2.mp3"]},{src:w.a,name:"dog",sounds:["/sounds/dog1.mp3","/sounds/dog2.mp3","/sounds/dog3.mp3"]},{src:O.a,name:"elephant",sounds:["/sounds/elephant1.mp3","/sounds/elephant2.mp3"]},{src:_.a,name:"fox",sounds:["/sounds/fox1.mp3"]},{src:I.a,name:"giraffe",sounds:["/sounds/giraffe1.mp3","/sounds/giraffe2.mp3"]},{src:T.a,name:"lion",sounds:["/sounds/lion1.mp3","/sounds/lion2.mp3"]},{src:P.a,name:"chick",sounds:["/sounds/chick1.mp3"]},{src:U.a,name:"pig",sounds:["/sounds/pig1.mp3","/sounds/pig2.mp3"]},{src:W.a,name:"crab",sounds:["/sounds/crab1.mp3"]},{src:B.a,name:"chicken",sounds:["/sounds/chicken1.mp3","/sounds/chicken2.mp3"]},{src:J.a,name:"boar",sounds:["/sounds/pig1.mp3","/sounds/pig2.mp3"]},{src:F.a,name:"cow",sounds:["/sounds/cow1.mp3","/sounds/cow2.mp3"]},{src:$.a,name:"frog",sounds:["/sounds/frog1.mp3","/sounds/frog2.mp3"]},{src:D.a,name:"goat",sounds:["/sounds/goat1.mp3","/sounds/goat2.mp3"]},{src:U.a,name:"pig",sounds:["/sounds/pig1.mp3","/sounds/pig2.mp3"]},{src:Q.a,name:"rooster",sounds:["/sounds/rooster1.mp3","/sounds/rooster2.mp3"]},{src:Y.a,name:"sheep",sounds:["/sounds/sheep1.mp3","/sounds/sheep2.mp3"]}],ee=a(40);a(85);function ne(){return-25+Math.floor(50*Math.random())}var ae=function(e){var n=e.onAnimationEnd,a=Object(t.useState)(ne()),i=Object(h.a)(a,1)[0],c=Object(t.useState)(ne()),s=Object(h.a)(c,1)[0],r=Object(t.useState)(d(Z)),u=Object(h.a)(r,1)[0];return Object(t.useEffect)((function(){var e,n=d(u.sounds);e="/pitxapie"+n,new Promise((function(n){var a=new ee.Howl({src:e});a.on("end",(function(){n()})),a.play()}))}),[u]),o.a.createElement(f.a.div,{className:"animal",animate:{scale:[0,1,1,1,0]},initial:{x:"".concat(i,"vw"),y:"".concat(s,"vh"),scale:.1},onAnimationComplete:n},o.a.createElement("img",{src:u.src,alt:u.name}))},te=a(95),oe=a(41),ie=a.n(oe);a(86);var ce=function(e){var n=e.text;return o.a.createElement(f.a.div,{className:"color-change-bg__title",initial:{opacity:.6},animate:{opacity:0},transition:{delay:1,duration:1,ease:"easeIn"}},n)};a(87);var se=function(e){var n=e.className,a=void 0===n?"":n,t=e.colorList,i=void 0===t?["#5e548e","#9f86c0","#be95c4"]:t,c=e.children,s=e.title;return o.a.createElement(f.a.div,{animate:{backgroundColor:i},transition:{yoyo:1/0,duration:10,ease:"linear"},className:ie()("color-change-bg",a)},s&&o.a.createElement(ce,{text:s}),c)};a(88);var re=function(){var e=Object(t.useState)([]),n=Object(h.a)(e,2),a=n[0],i=n[1];return o.a.createElement(E,{onAnyInput:function(){i([].concat(Object(b.a)(a),[Object(te.a)()]))}},o.a.createElement(se,{className:"animals",title:"animales"},a.map((function(e){return o.a.createElement(ae,{key:e,onAnimationEnd:function(){i(a.filter((function(n){return n!==e})))}})}))))},ue=a(42),me=a.n(ue),fe=a(43),pe=a.n(fe),le=a(44),de=a.n(le),ge=a(45),be=a.n(ge),he=a(46),ve=a.n(he),xe=a(47),Ee=a.n(xe),Se=a(48),Ne=a.n(Se),je=a(49),we=a.n(je),ye=a(50),Oe=a.n(ye),ke=a(51),_e=a.n(ke),Me=a(52),Ie=a.n(Me),Ae=a(53),Te=a.n(Ae),Le=a(54),Pe=a.n(Le),Ce=a(55),Ue=a.n(Ce),Re=a(56),We=a.n(Re),ze=a(57),Be=a.n(ze),He=a(58),Je=a.n(He),Ve=a(59),Fe=a.n(Ve),Ke=a(60),$e=a.n(Ke),qe=a(61),De=a.n(qe),Ge=a(62),Qe=a.n(Ge),Xe=a(63),Ye=a.n(Xe),Ze=a(64),en=a.n(Ze),nn=a(65),an=a.n(nn),tn=a(66),on=a.n(tn),cn=a(67),sn=a.n(cn),rn=a(68),un=a.n(rn),mn=a(69),fn=a.n(mn),pn=a(70),ln=a.n(pn),dn=a(71),gn=a.n(dn),bn=[{fileName:me.a,name:"aafke",language:"en-US"},{fileName:pe.a,name:"bisabuela",language:"es-ES"},{fileName:de.a,name:"i\xf1aki y aafke",language:"es-ES"},{fileName:be.a,name:"Mam\xe1",language:"es-ES"},{fileName:ve.a,name:"massimo",language:"it-IT"},{fileName:Ee.a,name:"abuela carmen",language:"es-ES"},{fileName:Ne.a,name:"carla",language:"es-ES"},{fileName:we.a,name:"kaki catrien",language:"es-ES"},{fileName:Oe.a,name:"mam\xe1",language:"es-ES"},{fileName:_e.a,name:"massimo alex",language:"it-IT"},{fileName:Ie.a,name:"abuelo jose",language:"es-ES"},{fileName:Te.a,name:"carmen",language:"es-ES"},{fileName:Pe.a,name:"lola",language:"es-ES"},{fileName:Ue.a,name:"manuel",language:"es-ES"},{fileName:We.a,name:"rum",language:"es-ES"},{fileName:Be.a,name:"abuelo miguel",language:"es-ES"},{fileName:Je.a,name:"carmen y aritz",language:"es-ES"},{fileName:Fe.a,name:"lucas",language:"es-ES"},{fileName:$e.a,name:"manuel y agustin",language:"es-ES"},{fileName:De.a,name:"rum y niki",language:"es-ES"},{fileName:Qe.a,name:"andreu",language:"es-ES"},{fileName:Ye.a,name:"catrien en ana",language:"nl-NL"},{fileName:en.a,name:"maka",language:"es-ES"},{fileName:an.a,name:"mark",language:"en-US"},{fileName:on.a,name:"tres locos",language:"es-ES"},{fileName:sn.a,name:"andreu",language:"es-ES"},{fileName:un.a,name:"giovane",language:"pt-BR"},{fileName:fn.a,name:"mam\xe1",language:"es-ES"},{fileName:ln.a,name:"massimo",language:"it-IT"},{fileName:gn.a,name:"xabi",language:"es-ES"}],hn=(a(89),[{weight:.1,value:"top"},{weight:.1,value:"left"},{weight:.1,value:"right"},{weight:.7,value:"bottom"}]);var vn=function(e){var n=e.onAnimationEnd,a=Object(t.useMemo)((function(){return d(bn)}),[]),i=Object(t.useMemo)((function(){return function(e){var n,a=e.reduce((function(e,n){return e+n.weight}),0),t=Math.random()*a,o=0,i=Object(l.a)(e);try{for(i.s();!(n=i.n()).done;){var c=n.value;if(t<=(o+=c.weight))return c.value}}catch(s){i.e(s)}finally{i.f()}throw new Error("getRandomFromArrayWithWeights, out of bounds")}(hn)}),[]),c=Object(t.useMemo)((function(){switch(i){case"top":return{y:["-100%","0%","0%","-100%"]};case"bottom":return{y:["100%","0%","0%","100%"]};case"left":return{x:["-100%","0%","0%","-100%"]};case"right":return{x:["100%","0%","0%","100%"]}}}),[i]),s=Object(t.useMemo)((function(){switch(i){case"top":return{y:"-100%",rotate:"-180deg"};case"bottom":return{y:"100%"};case"left":return{x:"-100%",rotate:"90deg"};case"right":return{x:"100%",rotate:"-90deg"}}}),[i]),r=Object(t.useState)(!1),u=Object(h.a)(r,2),m=u[0],p=u[1];return Object(t.useEffect)((function(){var e=setTimeout((function(){return p(!0)}),500);return function(){clearTimeout(e)}}),[]),function(e){var n=Object(t.useState)(speechSynthesis.getVoices()),a=Object(h.a)(n,2),o=a[0],i=a[1];Object(t.useEffect)((function(){var e=function e(){o.length||(i(speechSynthesis.getVoices()),speechSynthesis.removeEventListener("voiceschanged",e))};return speechSynthesis.addEventListener("voiceschanged",e),function(){speechSynthesis.removeEventListener("voiceschanged",e)}}));var c=Object(t.useMemo)((function(){if(!e||!o)return null;var n=o.filter((function(n){return n.lang===e.language}));return n.length?d(n):null}),[o,e]);Object(t.useEffect)((function(){if(c&&e){var n=new SpeechSynthesisUtterance(e.name);n.voice=c,n.pitch=.5+Math.random(),n.rate=.5+Math.random(),speechSynthesis.speak(n)}}),[e,c])}(a),o.a.createElement(f.a.div,{className:"face face-".concat(i),animate:!!m&&c,transition:{duration:2,ease:"easeInOut"},initial:s,onAnimationComplete:n},o.a.createElement("img",{src:a.fileName,alt:"",onLoad:function(){return p(!0)}}))};a(90);var xn=[{pathname:"/faces",component:function(){var e=Object(t.useState)(!1),n=Object(h.a)(e,2),a=n[0],i=n[1];return Object(t.useEffect)((function(){bn.forEach((function(e){return n=e.fileName,new Promise((function(e,a){var t=new Image;t.onload=e,t.onerror=a,t.src=n}));var n}))}),[]),o.a.createElement(E,{onAnyInput:function(){i(!0)}},o.a.createElement(se,{className:"faces",colorList:["#40916c","#52b788","#74c69d"],title:"caras"},a&&o.a.createElement(vn,{onAnimationEnd:function(){return i(!1)}})))}},{pathname:"/",component:re}];a(91);var En=function(){return Object(t.useEffect)((function(){console.log("Pitxapie ".concat("3.3.0"))}),[]),o.a.createElement(u.a,null,o.a.createElement(m.c,null,xn.map((function(e){return o.a.createElement(m.a,{key:e.pathname,path:e.pathname},o.a.createElement(e.component,null))}))),o.a.createElement(g,{routes:xn}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){var e=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};window.addEventListener("resize",r()(e,200)),e()}(),c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(En,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[74,1,2]]]);
//# sourceMappingURL=main.723bdd5a.chunk.js.map