(this["webpackJsonpfrontend-ahorcado"]=this["webpackJsonpfrontend-ahorcado"]||[]).push([[0],{34:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t(0),r=t.n(n),i=t(12),s=t.n(i),l=(t(44),t(15)),o=t(16),d=t(18),j=t(17),b=(t(45),t(13)),u=t(20),h=t(14),O=t.n(h),p="http://ahorcadorest.eu-west-3.elasticbeanstalk.com/",v="partida/";function x(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){O.a.get("".concat(p)).then((function(e){console.log(e),r(e.data)}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Lista de Palabras"}),Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Id"}),Object(c.jsx)("th",{children:"Nombre"})]})}),Object(c.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsx)("td",{children:e.nombre})]},e.id)}))}),Object(c.jsxs)("tr",{children:[Object(c.jsx)(u.a,{href:"/AhorcadoApp",variant:"primary",size:"lg",block:!0,children:"Volver"})," "]})]})})]})}var m=t(71);t(34);function f(){var e=Object(n.useRef)(null),a=Object(n.useState)(!1),t=Object(b.a)(a,2),r=t[0],i=t[1],s=Object(n.useState)(0),l=Object(b.a)(s,2),o=l[0],d=l[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)(u.a,{href:"/AhorcadoApp/palabras",variant:"primary",size:"lg",block:!0,children:"Nueva Partida"}),Object(c.jsx)(u.a,{href:"/AhorcadoApp/palabras",variant:"primary",size:"lg",block:!0,children:"Ver Lista de Palabras"}),Object(c.jsx)(u.a,{variant:"primary",size:"lg",block:!0,onClick:function(){return i(!0)},children:"A\xf1adir Palabras"})]})}),Object(c.jsxs)(m.a,{show:r,onHide:function(){return i(!1)},children:[Object(c.jsx)(m.a.Header,{closeButton:!0,children:Object(c.jsx)(m.a.Title,{children:"A\xf1adir Palabra"})}),Object(c.jsxs)(m.a.Body,{children:[Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Escribe la palabra a registrar(maximo 10 letras)","aria-label":"Escribe la palabra a registrar(maximo 10 letras)","aria-describedby":"basic-addon2",width:"20%",ref:e}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var a;(a=e.current.value,O.a.put("".concat(p)+"palabra/"+"".concat(a))).then((function(e){d(e.status)})).catch((function(e){e.response&&d(e.response.status)}))},children:"A\xf1adir"})})]}),200===o&&Object(c.jsx)("div",{className:"status ok",children:"Se ha insertado correctamente"}),400===o&&Object(c.jsx)("div",{className:"status bad",children:"La palabra ya existe"})]})]})]})}var N=t.p+"static/media/Ahorcado1.59c51b6d.PNG",g=t.p+"static/media/Ahorcado2.c590cc01.PNG",A=t.p+"static/media/Ahorcado3.2847d0a3.PNG",y=t.p+"static/media/Ahorcado4.56828353.PNG",P=t.p+"static/media/Ahorcado5.c3fb6c32.PNG",k=t.p+"static/media/Ahorcado6.040d8ea5.PNG",E=t.p+"static/media/Ahorcado7.39de69cf.PNG";function F(){var e=Object(n.useRef)(null),a=Object(n.useState)(""),t=Object(b.a)(a,2),r=t[0],i=t[1],s=Object(n.useState)(null),l=Object(b.a)(s,2),o=l[0],d=l[1],j=Object(n.useMemo)((function(){return o?(e=o.numeroDeFallos,[N,g,A,y,P,k,E][e]):null;var e}),[o]),h=Object(n.useMemo)((function(){if(o){var e;if(!(null===(e=o.palabraRellenada)||void 0===e?void 0:e.includes("-")))return!0;o.numeroDeFallos<=0&&(a=o.id,O.a.get("".concat(p)+v+"".concat(a))).then((function(e){return d(e.data),console.log(e.data),!0}))}var a;return!1}),[o]);Object(n.useEffect)((function(){x()}),[]);var x=function(){O.a.get("".concat(p)+"nuevaPartida").then((function(e){d(e.data)}))};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"input-letter",children:Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Escribe una letra","aria-label":"Escribe una letra","aria-describedby":"basic-addon2",width:"20%",disabled:h,ref:e}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var a,t;(function(){var a,t,c;return 0===(null===(a=e.current.value)||void 0===a?void 0:a.length)?(i("El valor no puede estar vacio"),!1):(null===(t=e.current.value)||void 0===t?void 0:t.length)>1?(i("El valor no puede ser m\xe1s de una letra"),!1):1===(c=e.current.value.toLowerCase()).length&&c.match(/[a-z]/i)?o.letrasUsadas.includes(e.current.value)?(i("El valor esta repetido"),!1):(i(""),!0):(i("El valor no es una letra"),!1)})()&&((a=o.id,t=e.current.value,O.a.put("".concat(p)+v+"".concat(a)+"/"+"".concat(t))).then((function(e){d(e.data)})),e.current.value="")},disabled:h,children:"Enviar"})}),r&&""!==r&&Object(c.jsx)("h3",{className:"error",children:r})]})}),o&&Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:null===o||void 0===o?void 0:o.palabraRellenada})})]}),Object(c.jsxs)("div",{className:"row",children:[o&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["Fallos Restantes: ",null===o||void 0===o?void 0:o.numeroDeFallos]}),Object(c.jsx)("h3",{children:"Letras Usadas:"}),Object(c.jsx)("h3",{children:null===o||void 0===o?void 0:o.letrasUsadas})]}),j&&Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:j,alt:""})})]}),o&&(null===o||void 0===o?void 0:o.numeroDeFallos)<=0&&Object(c.jsx)("div",{children:Object(c.jsx)("h3",{className:"resultado derrota",children:"DERROTA"})}),o&&!(null===o||void 0===o?void 0:o.palabraRellenada.includes("-"))&&o.numeroDeFallos>0&&Object(c.jsx)("div",{children:Object(c.jsx)("h3",{className:"resultado victoria",children:"VICTORIA"})}),Object(c.jsx)("div",{className:"btn-group-vertical",children:Object(c.jsxs)("div",{className:"buttonGroupPartida",children:[Object(c.jsx)(u.a,{href:"/AhorcadoApp",variant:"info",block:!0,children:"Volver"}),Object(c.jsx)(u.a,{variant:"info",onClick:x,block:!0,children:"Nueva Partida"})]})})]})}var C=t(37),w=t(5),R=function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(c.jsx)(C.a,{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h1",{children:"Ahorcado"})}),Object(c.jsxs)(w.c,{children:[Object(c.jsx)(w.a,{path:"/AhorcadoApp/",exact:!0,component:f}),Object(c.jsx)(w.a,{path:"/AhorcadoApp/palabras",exact:!0,component:x}),Object(c.jsx)(w.a,{path:"/AhorcadoApp/partida",component:F})]})]})})}}]),t}(n.Component),G=function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(R,{})})}}]),t}(n.Component),S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,72)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),c(e),n(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.43412758.chunk.js.map