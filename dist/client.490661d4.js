webpackJsonp([1],{184:function(e,t,r){"use strict";var n=r(185),o=[{path:"/",component:n.a},{path:"*",redirect:"/"}];t.a=o},185:function(e,t,r){"use strict";var n=r(66),o=r(193),a=r(21),i=a(n.a,o.a,!1,null,null,null);t.a=i.exports},186:function(e,t,r){"use strict";function n(e){r(187)}var o=r(67),a=r(188),i=r(21),s=n,c=i(o.a,a.a,!1,s,"data-v-9c1f0404",null);t.a=c.exports},187:function(e,t){},188:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"instructions-container"},[e._m(0),e._v(" "),r("span",[e._v("KEYS: TOGGLE")]),e._v(" "),r("span",[e._v("ARROWS: MOVE")]),e._v(" "),r("span",[e._v("CTRL: SHOW/HIDE")]),e._v(" "),r("span",[e._v("SPACE: CLEAR")]),e._v(" "),r("br"),e._v(" "),r("span",[e._v("SHIFT: COLOR")]),e._v(" "),r("span",[e._v("CURRENT: "+e._s(e.currentName))])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"copyright"},[e._v("\n    © 2018 "),r("a",{attrs:{href:"http://pumo.mp"}},[e._v("pumo.mp")])])}],a={render:n,staticRenderFns:o};t.a=a},189:function(e,t,r){"use strict";function n(e){r(190)}var o=r(68),a=r(192),i=r(21),s=n,c=i(o.a,a.a,!1,s,"data-v-496e50d5",null);t.a=c.exports},190:function(e,t){},191:function(e,t,r){"use strict";t.a=[{code:49,key:"1"},{code:50,key:"2"},{code:51,key:"3"},{code:52,key:"4"},{code:53,key:"5"},{code:54,key:"6"},{code:55,key:"7"},{code:56,key:"8"},{code:57,key:"9"},{code:48,key:"0"},{code:81,key:"q"},{code:87,key:"w"},{code:69,key:"e"},{code:82,key:"r"},{code:84,key:"t"},{code:89,key:"y"},{code:85,key:"u"},{code:73,key:"i"},{code:79,key:"o"},{code:80,key:"p"},{code:65,key:"a"},{code:83,key:"s"},{code:68,key:"d"},{code:70,key:"f"},{code:71,key:"g"},{code:72,key:"h"},{code:74,key:"j"},{code:75,key:"k"},{code:76,key:"l"},{code:186,key:"ò"},{code:90,key:"z"},{code:88,key:"x"},{code:67,key:"c"},{code:86,key:"v"},{code:66,key:"b"},{code:78,key:"n"},{code:77,key:"m"},{code:188,key:","},{code:190,key:"."},{code:189,key:"-"}]},192:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["canvas-element",e.properties.shown?"":"hide"],attrs:{id:"base-canvas"}},[r("div",{staticClass:"grid"},[e._l(e.gridHeight,function(t){return e._l(e.size,function(n){return r("div",{key:30*(t-1)+(n-1),class:["key-piece",""+(30*(t-1)+(n-1))],style:{backgroundColor:e.grid[t-1][n-1]||"transparent"}})})})],2),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.properties.shown,expression:"properties.shown"}],staticClass:"keyboard",style:{transform:"translate3d(+"+2.2*e.keyboardLeft+"vw, +"+2.2*e.keyboardTop+"vw, 0)"}},e._l(e.keyboard,function(t){var n=t.code,o=t.key;return r("div",{key:n,class:["key-"+n]},[r("span",[e._v(e._s(o))])])}))])},o=[],a={render:n,staticRenderFns:o};t.a=a},193:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("base-canvas"),e._v(" "),r("instructions")],1)},o=[],a={render:n,staticRenderFns:o};t.a=a},194:function(e,t,r){"use strict";var n=r(22),o=r(33),a=r(195),i=r.n(a),s=r(197);n.a.use(o.a);var c=new i.a({storage:window.localStorage,reducer:function(e){return{color:e.color}}}),d=new o.a.Store({modules:{color:s.a},plugins:[c.plugin]});t.a=d},197:function(e,t,r){"use strict";var n=r(198),o=r(199),a=r(200),i=r(201);t.a={namespaced:!0,state:n.a,actions:o.a,mutations:a.a,getters:i.a}},198:function(e,t,r){"use strict";var n=r(34),o=(r.n(n),r(70));t.a={currentColor:Object.assign({},Object(n.head)(o.a))}},199:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var o=r(34),a=(r.n(o),r(70));t.a={nextColor:function(e){var t,r=e.state,i=e.commit;(t=console).log.apply(t,n(a.a));var s=Object(o.findIndex)(a.a,function(e){return e.name===r.currentColor.name}),c=s+1;i("setCurrentColor",Object.assign({},Object(o.nth)(a.a,c%a.a.length)))}}},200:function(e,t,r){"use strict";t.a={setCurrentColor:function(e,t){e.currentColor=t}}},201:function(e,t,r){"use strict";t.a={currentName:function(e){return e.currentColor.name},currentHex:function(e){return e.currentColor.hex}}},202:function(e,t,r){"use strict";function n(e){r(203)}var o=r(71),a=r(204),i=r(21),s=n,c=i(o.a,a.a,!1,s,null,null);t.a=c.exports},203:function(e,t){},204:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},o=[],a={render:n,staticRenderFns:o};t.a=a},66:function(e,t,r){"use strict";var n=r(186),o=r(189);t.a={components:{instructions:n.a,"base-canvas":o.a}}},67:function(e,t,r){"use strict";var n=r(33);t.a={computed:Object.assign({},Object(n.c)("color",["currentName"]))}},68:function(e,t,r){"use strict";var n=r(22),o=r(33),a=r(191),i=r(34);r.n(i);t.a={data:function(){return{size:30,grid:[],gridHeight:20,keyboard:a.a,keyboardWidth:10,keyboardPosition:[0,0],properties:{shown:!0}}},computed:Object.assign({},Object(o.c)("color",["currentHex"]),{keyboardLeft:function(){return this.keyboardPosition[0]},keyboardTop:function(){return this.keyboardPosition[1]}}),methods:Object.assign({},Object(o.b)("color",["nextColor"]),{initGrid:function(){for(var e=[],t=0;t<this.size;t+=1)e[t]=new Array(this.size);this.grid=e},toggleGrid:function(e){var t=this.keyboardLeft+e%this.keyboardWidth,r=this.keyboardTop+~~(e/this.keyboardWidth),o=this.grid[r];o[t]?o[t]!=this.currentHex?o[t]=this.currentHex:o[t]=!1:o[t]=this.currentHex,n.a.set(this.grid,r,o)},keyOperation:function(e){e.preventDefault();var t=~~(this.keyboard.length/this.keyboardWidth);switch(e.key){case"ArrowLeft":this.keyboardLeft>0&&n.a.set(this.keyboardPosition,0,this.keyboardLeft-this.keyboardWidth);break;case"ArrowUp":this.keyboardTop>0&&n.a.set(this.keyboardPosition,1,this.keyboardTop-t);break;case"ArrowRight":this.keyboardLeft<this.size-this.keyboardWidth&&n.a.set(this.keyboardPosition,0,this.keyboardLeft+this.keyboardWidth);break;case"ArrowDown":this.keyboardTop<this.gridHeight-t&&n.a.set(this.keyboardPosition,1,this.keyboardTop+t);break;case"Control":this.properties.shown=!this.properties.shown;break;case" ":this.initGrid();break;case"Shift":this.nextColor();break;default:var r=Object(i.findIndex)(a.a,["key",e.key]);r>-1&&this.toggleGrid(r)}}}),beforeMount:function(){this.initGrid(),window.addEventListener("keydown",this.keyOperation)},beforeDestroy:function(){window.removeEventListener("keydown",this.keyOperation)}}},70:function(e,t,r){"use strict";t.a=[{name:"white",hex:"#fff"},{name:"black",hex:"#000"},{name:"red",hex:"#f00"},{name:"blue",hex:"#00f"},{name:"green",hex:"#0f0"},{name:"cyan",hex:"#0ff"},{name:"yellow",hex:"#ff0"},{name:"fuchsia",hex:"#f0f"}]},71:function(e,t,r){"use strict";t.a={name:"KeyDraw"}},72:function(e,t,r){e.exports=r(73)},73:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(22),o=r(77),a=r(183),i=r(184),s=r(194),c=r(202);n.a.use(o.a),n.a.use(a.a);var d=new a.a({routes:i.a});new n.a({el:"#app",render:function(e){return e(c.a)},router:d,store:s.a})}},[72]);
//# sourceMappingURL=client.490661d4.js.map