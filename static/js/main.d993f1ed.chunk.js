(this["webpackJsonpfrontend-ahorcado"]=this["webpackJsonpfrontend-ahorcado"]||[]).push([[0],{34:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),i=a(12),s=a.n(i),l=(a(44),a(15)),d=a(16),o=a(18),j=a(17),b=(a(45),a(13)),u=a(20),h=a(14),O=a.n(h),v="http://ahorcadorest.eu-west-3.elasticbeanstalk.com/",x="partida/";function p(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){O.a.get("".concat(v)).then((function(e){console.log(e),r(e.data)}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Lista de Palabras"}),Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Id"}),Object(c.jsx)("th",{children:"Nombre"})]})}),Object(c.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsx)("td",{children:e.nombre})]},e.id)}))}),Object(c.jsxs)("tr",{children:[Object(c.jsx)(u.a,{href:"/#",variant:"primary",size:"lg",block:!0,children:"Volver"})," "]})]})})]})}var m=a(71);a(34);function f(){var e=Object(n.useRef)(null),t=Object(n.useState)(!1),a=Object(b.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(0),l=Object(b.a)(s,2),d=l[0],o=l[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)(u.a,{href:"/#/palabras",variant:"primary",size:"lg",block:!0,children:"Nueva Partida"}),Object(c.jsx)(u.a,{href:"/#/palabras",variant:"primary",size:"lg",block:!0,children:"Ver Lista de Palabras"}),Object(c.jsx)(u.a,{variant:"primary",size:"lg",block:!0,onClick:function(){return i(!0)},children:"A\xf1adir Palabras"})]})}),Object(c.jsxs)(m.a,{show:r,onHide:function(){return i(!1)},children:[Object(c.jsx)(m.a.Header,{closeButton:!0,children:Object(c.jsx)(m.a.Title,{children:"A\xf1adir Palabra"})}),Object(c.jsxs)(m.a.Body,{children:[Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Escribe la palabra a registrar(maximo 10 letras)","aria-label":"Escribe la palabra a registrar(maximo 10 letras)","aria-describedby":"basic-addon2",width:"20%",ref:e}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var t;(t=e.current.value,O.a.put("".concat(v)+"palabra/"+"".concat(t))).then((function(e){o(e.status)})).catch((function(e){e.response&&o(e.response.status)}))},children:"A\xf1adir"})})]}),200===d&&Object(c.jsx)("div",{className:"status ok",children:"Se ha insertado correctamente"}),400===d&&Object(c.jsx)("div",{className:"status bad",children:"La palabra ya existe"})]})]})]})}var N=a.p+"static/media/Ahorcado1.59c51b6d.PNG",g=a.p+"static/media/Ahorcado2.c590cc01.PNG",y=a.p+"static/media/Ahorcado3.2847d0a3.PNG",P=a.p+"static/media/Ahorcado4.56828353.PNG",k=a.p+"static/media/Ahorcado5.c3fb6c32.PNG",A=a.p+"static/media/Ahorcado6.040d8ea5.PNG",E=a.p+"static/media/Ahorcado7.39de69cf.PNG";function F(){var e=Object(n.useRef)(null),t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(null),l=Object(b.a)(s,2),d=l[0],o=l[1],j=Object(n.useMemo)((function(){return d?(e=d.numeroDeFallos,[N,g,y,P,k,A,E][e]):null;var e}),[d]),h=Object(n.useMemo)((function(){if(d){var e;if(!(null===(e=d.palabraRellenada)||void 0===e?void 0:e.includes("-")))return!0;d.numeroDeFallos<=0&&(t=d.id,O.a.get("".concat(v)+x+"".concat(t))).then((function(e){return o(e.data),console.log(e.data),!0}))}var t;return!1}),[d]);Object(n.useEffect)((function(){p()}),[]);var p=function(){O.a.get("".concat(v)+"nuevaPartida").then((function(e){o(e.data)}))};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"input-letter",children:Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Escribe una letra","aria-label":"Escribe una letra","aria-describedby":"basic-addon2",width:"20%",disabled:h,ref:e}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var t,a;(function(){var t,a,c;return 0===(null===(t=e.current.value)||void 0===t?void 0:t.length)?(i("El valor no puede estar vacio"),!1):(null===(a=e.current.value)||void 0===a?void 0:a.length)>1?(i("El valor no puede ser m\xe1s de una letra"),!1):1===(c=e.current.value.toLowerCase()).length&&c.match(/[a-z]/i)?d.letrasUsadas.includes(e.current.value)?(i("El valor esta repetido"),!1):(i(""),!0):(i("El valor no es una letra"),!1)})()&&((t=d.id,a=e.current.value,O.a.put("".concat(v)+x+"".concat(t)+"/"+"".concat(a))).then((function(e){o(e.data)})),e.current.value="")},disabled:h,children:"Enviar"})}),r&&""!==r&&Object(c.jsx)("h3",{className:"error",children:r})]})}),d&&Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:null===d||void 0===d?void 0:d.palabraRellenada})})]}),Object(c.jsxs)("div",{className:"row",children:[d&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["Fallos Restantes: ",null===d||void 0===d?void 0:d.numeroDeFallos]}),Object(c.jsx)("h3",{children:"Letras Usadas:"}),Object(c.jsx)("h3",{children:null===d||void 0===d?void 0:d.letrasUsadas})]}),j&&Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:j,alt:""})})]}),d&&(null===d||void 0===d?void 0:d.numeroDeFallos)<=0&&Object(c.jsx)("div",{children:Object(c.jsx)("h3",{className:"resultado derrota",children:"DERROTA"})}),d&&!(null===d||void 0===d?void 0:d.palabraRellenada.includes("-"))&&d.numeroDeFallos>0&&Object(c.jsx)("div",{children:Object(c.jsx)("h3",{className:"resultado victoria",children:"VICTORIA"})}),Object(c.jsx)("div",{className:"btn-group-vertical",children:Object(c.jsxs)("div",{className:"buttonGroupPartida",children:[Object(c.jsx)(u.a,{href:"/#",variant:"info",block:!0,children:"Volver"}),Object(c.jsx)(u.a,{variant:"info",onClick:p,block:!0,children:"Nueva Partida"})]})})]})}var C=a(37),w=a(5),R=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsx)(C.a,{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h1",{children:"Ahorcado"})}),Object(c.jsxs)(w.c,{children:[Object(c.jsx)(w.a,{path:"/",exact:!0,component:f}),Object(c.jsx)(w.a,{path:"/palabras",exact:!0,component:p}),Object(c.jsx)(w.a,{path:"/partida",component:F})]})]})})}}]),a}(n.Component),G=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(R,{})})}}]),a}(n.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.d993f1ed.chunk.js.map