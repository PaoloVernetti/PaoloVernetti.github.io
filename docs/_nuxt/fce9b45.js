(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(t,e,n){"use strict";n(17),n(92),n(25);var o=n(1);o.a.__my_mixin__||(o.a.__my_mixin__=!0,o.a.mixin({head:function(){return{title:"Paolo Vernetti - "+this.$t("nav.".concat(this.currentRouteName,".title")),meta:[{hid:"description",name:"description",content:this.$t("nav.".concat(this.currentRouteName,".description"))},{charset:"utf-8"},{robots:"all"},{hid:"og:title",name:"og:title",property:"og:title",content:"Paolo Vernetti - "+this.$t("nav.".concat(this.currentRouteName,".title"))},{hid:"og:description",name:"og:description",content:"Paolo Vernetti - "+this.$t("nav.".concat(this.currentRouteName,".description"))},{hid:"og:url",name:"og:url",property:"og:url",content:"https://paolovernetti.github.io"+this.currentRoutePath},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:this.$t("sitename")},{hid:"og:image",name:"og:image",content:"https://paolovernetti.github.io/metaimage.png"}]}},computed:{currentRoutePath:function(){return this.$nuxt.$route.path},currentRouteName:function(){return this.$nuxt.$route.name.match(/([a-z]+)/)[0]}}}))},197:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(152).default)("56b15182",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";n(196),n(34),n(12),n(25),n(17),n(74),n(90);var o={name:"Layout",data:function(){return{}},computed:{getNavRoutes:function(){return console.log(this.$nuxt.$router.options.routes.filter((function(t){return"index"===t.name||"portfolio"===t.name})).sort((function(a,b){return a.name[0]>b.name[0]}))),this.$nuxt.$router.options.routes.filter((function(t){return"index"===t.name||"portfolio"===t.name})).sort((function(a,b){return a.name[0]<b.name[0]}))}},mounted:function(){var canvas=document.getElementById("back"),t=canvas.getContext("2d");canvas.width=window.innerWidth,canvas.height=window.innerHeight;var e="1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890";e=e.split("");for(var n=canvas.width/10,o=[],i=0;i<n;i++)o[i]=1;function r(){t.fillStyle="rgba(0, 0, 0, .05)",t.fillRect(0,0,canvas.width,canvas.height);for(var i=0;i<o.length;i++){var text=e[Math.floor(Math.random()*e.length)];t.fillStyle="#0f0",t.fillText(text,10*i,10*o[i]),o[i]++,26*o[i]>canvas.height&&Math.random()>.98&&(o[i]=0)}}var l=setInterval(r,100);window.addEventListener("resize",(function(){clearInterval(l),canvas.width=window.innerWidth,canvas.height=window.innerHeight,l=setInterval(r,100)}))}},r=(n(273),n(75)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("canvas",{attrs:{id:"back"}}),t._v(" "),n("div",{staticClass:"wraper"},[n("header",[n("nav",[n("ul",[n("nuxt-link",{staticClass:"link",attrs:{to:t.localePath("index")}},[t._v(t._s(t.$t("nav.index.title")))]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:t.localePath("portfolio")}},[t._v(t._s(t.$t("nav.portfolio.title")))])],1)])]),t._v(" "),n("Nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports},214:function(t,e,n){n(215),t.exports=n(216)},268:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(152).default)("2a37d8fa",content,!0,{sourceMap:!1})},269:function(t,e,n){var o=n(150)(!1);o.push([t.i,'@font-face{font-family:"Comfortaa";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/comfortaa/v38/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4TbMPrQ.ttf) format("truetype")}@font-face{font-family:"Roboto";font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ABc9.ttf) format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format("truetype")}@font-face{font-family:"Roboto Condensed";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-59U.ttf) format("truetype")}html,html body{padding:0;margin:0}',""]),t.exports=o},273:function(t,e,n){"use strict";n(197)},274:function(t,e,n){var o=n(150)(!1);o.push([t.i,'.layout{display:grid;width:100vw;min-height:100vh}body{background:#000}canvas{display:block;position:fixed;z-index:0}.wraper{flex-direction:column;justify-content:flex-start;align-items:flex-start;min-height:100vh;z-index:1}.wraper,header{display:flex;width:100vw}header{flex-direction:row;background:hsla(0,0%,88.2%,.7)!important;z-index:2}header,nav{height:60px}nav{width:auto}nav>ul{margin:0;padding:0;display:flex;list-style-type:none;flex-direction:row}nav>ul>.link{color:rgba(47,54,64,.8);font-family:"Roboto Condensed",sans-serif;display:flex;justify-content:center;align-items:center;width:200px;height:60px;text-transform:uppercase;text-decoration:none}',""]),t.exports=o},275:function(t,e){},59:function(t,e,n){"use strict";var o={name:"Error",props:{error:{type:Object}}},r=n(75),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports}},[[214,4,1,5]]]);