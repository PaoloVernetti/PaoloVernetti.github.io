(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(t,n,e){var content=e(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(152).default)("56b15182",content,!0,{sourceMap:!1})},210:function(t,n,e){"use strict";e(195),e(34),e(12),e(25),e(17),e(74),e(90);var o={name:"Layout",data:function(){return{}},computed:{getNavRoutes:function(){return console.log(this.$nuxt.$router.options.routes.filter((function(t){return"index"===t.name||"portfolio"===t.name})).sort((function(a,b){return a.name[0]>b.name[0]}))),this.$nuxt.$router.options.routes.filter((function(t){return"index"===t.name||"portfolio"===t.name})).sort((function(a,b){return a.name[0]<b.name[0]}))}},mounted:function(){var canvas=document.getElementById("back"),t=canvas.getContext("2d");canvas.width=window.innerWidth,canvas.height=window.innerHeight;var n="1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890";n=n.split("");for(var e=canvas.width/10,o=[],i=0;i<e;i++)o[i]=1;function r(){t.fillStyle="rgba(0, 0, 0, .05)",t.fillRect(0,0,canvas.width,canvas.height);for(var i=0;i<o.length;i++){var text=n[Math.floor(Math.random()*n.length)];t.fillStyle="#0f0",t.fillText(text,10*i,10*o[i]),o[i]++,26*o[i]>canvas.height&&Math.random()>.98&&(o[i]=0)}}var l=setInterval(r,100);window.addEventListener("resize",(function(){clearInterval(l),canvas.width=window.innerWidth,canvas.height=window.innerHeight,l=setInterval(r,100)}))}},r=(e(272),e(75)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout"},[e("canvas",{attrs:{id:"back"}}),t._v(" "),e("div",{staticClass:"wraper"},[e("header",[e("nav",[e("ul",[e("nuxt-link",{staticClass:"link",attrs:{to:t.localePath("index")}},[t._v(t._s(t.$t("nav.index.title")))]),t._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:t.localePath("portfolio")}},[t._v(t._s(t.$t("nav.portfolio.title")))])],1)])]),t._v(" "),e("Nuxt")],1)])}),[],!1,null,null,null);n.a=component.exports},213:function(t,n,e){e(214),t.exports=e(215)},267:function(t,n,e){var content=e(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(152).default)("2a37d8fa",content,!0,{sourceMap:!1})},268:function(t,n,e){var o=e(150)(!1);o.push([t.i,'@font-face{font-family:"Comfortaa";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v38/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4TbMPrQ.ttf) format("truetype")}@font-face{font-family:"Roboto";font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ABc9.ttf) format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format("truetype")}@font-face{font-family:"Roboto Condensed";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-59U.ttf) format("truetype")}html,html body{padding:0;margin:0}',""]),t.exports=o},272:function(t,n,e){"use strict";e(196)},273:function(t,n,e){var o=e(150)(!1);o.push([t.i,'.layout{display:grid;width:100vw;min-height:100vh}body{background:#000}canvas{display:block;position:fixed;z-index:0}.wraper{flex-direction:column;justify-content:flex-start;align-items:flex-start;min-height:100vh;z-index:1}.wraper,header{display:flex;width:100vw}header{flex-direction:row;background:hsla(0,0%,88.2%,.7)!important;z-index:2}header,nav{height:60px}nav{width:auto}nav>ul{margin:0;padding:0;display:flex;list-style-type:none;flex-direction:row}nav>ul>.link{color:rgba(47,54,64,.8);font-family:"Roboto Condensed",sans-serif;display:flex;justify-content:center;align-items:center;width:200px;height:60px;text-transform:uppercase;text-decoration:none}',""]),t.exports=o},274:function(t,n){},59:function(t,n,e){"use strict";var o={name:"Error",props:{error:{type:Object}}},r=e(75),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);n.a=component.exports}},[[213,4,1,5]]]);