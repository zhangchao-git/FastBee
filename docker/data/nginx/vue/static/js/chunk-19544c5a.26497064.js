(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19544c5a","chunk-32d7db98","chunk-745202ed","chunk-7616592f","chunk-2df543a6","chunk-48ad1fcc","chunk-25c3f40d"],{2611:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pageflag?i("div",{staticStyle:{overflow:"hidden",width:"100%",height:"250px","font-size":"12px","line-height":"24px"}},[i("vue-seamless-scroll",{attrs:{data:t.deviceLogList,"class-option":t.defaultOption}},t._l(t.deviceLogList,(function(e,s){return i("div",{key:s,staticStyle:{display:"flex","margin-bottom":"10px","border-bottom":"2px dashed #23cdd8",color:"#bbb"}},[i("span",{staticStyle:{width:"50px",color:"#23cdd8","font-size":"16px","line-height":"48px","font-weight":"bolder"}},[t._v(t._s(s+1))]),i("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[i("div",{staticStyle:{width:"200px"}},[i("span",[t._v("设备编号：")]),i("span",{staticStyle:{color:"#23cdd8"}},[t._v(t._s(e.serialNumber))])]),i("div",{staticStyle:{width:"150px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[i("span",[t._v("标识符：")]),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(e.identify))])]),i("div",{staticStyle:{width:"60px","align-items":"flex-end","text-align":"right"}},[i("span",{staticStyle:{color:"#ffdb5c"}},[t._v("编码："+t._s(e.resultCode))])]),i("div",{staticStyle:{width:"200px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[i("span",[t._v("上报时间：")]),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(e.createTime))])]),i("div",{staticStyle:{"margin-bottom":"10px",width:"210px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[i("span",[t._v("上报值：")]),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(e.funValue))])])])])})),0)],1):i("Reacquire",{staticStyle:{"line-height":"200px",color:"#23cdd8","margin-left":"210px"},on:{onclick:t.getData}},[t._v(" 重新获取 ")])},n=[],o=i("a939"),a=i.n(o),r=i("dc9c"),c={components:{vueSeamlessScroll:a.a},data:function(){return{deviceLogList:[],pageflag:!0,defaultOption:{step:2,limitMoveNum:4,hoverStop:!0,singleHeight:280,openWatch:!0,waitTime:3e3},queryParams:{pageNum:1,pageSize:5}}},created:function(){this.getData()},beforeDestroy:function(){this.clearData()},methods:{getData:function(){var t=this;Object(r["b"])(this.queryParams).then((function(e){t.deviceLogList=e.rows,t.switper()}))},clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},switper:function(){var t=this;if(!this.timer){var e=function(e){t.getData()};this.timer=setInterval(e,6e4)}}}},l=c,u=i("2877"),h=Object(u["a"])(l,s,n,!1,null,null,null);e["default"]=h.exports},"44ce":function(t,e,i){},5785:function(t,e,i){"use strict";i("44ce")},6647:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","margin-top":"60px"}},[i("div",{staticStyle:{"margin-left":"10px",color:"#32c5e9"}},[i("dv-decoration-9",{staticStyle:{width:"90px",height:"90px","font-weight":"600"},attrs:{dur:10,color:["#32c5e9","#238aa4"]}},[t._v(t._s(t.deviceStatistic.deviceCount))]),i("div",{staticStyle:{"text-align":"center","margin-top":"25px"}},[t._v("设备总数")])],1),i("div",{staticStyle:{margin:"0 30px",color:"#9fe6b8"}},[i("dv-decoration-9",{staticStyle:{width:"90px",height:"90px","font-weight":"600"},attrs:{dur:10,color:["#9fe6b8","#70a181"]}},[t._v(t._s(t.deviceStatistic.deviceOnlineCount))]),i("div",{staticStyle:{"text-align":"center","margin-top":"25px","font-weight":"400"}},[t._v("在线设备")])],1),i("div",{staticStyle:{"margin-right":"30px",color:"#ffdb5c"}},[i("dv-decoration-9",{staticStyle:{width:"90px",height:"90px","font-weight":"600"},attrs:{dur:10,color:["#ffdb5c","#b39a41"]}},[t._v(t._s(t.deviceStatistic.deviceCount-t.deviceStatistic.deviceOnlineCount))]),i("div",{staticStyle:{"text-align":"center","margin-top":"25px","font-weight":"400"}},[t._v("离线设备")])],1),i("div",{staticStyle:{color:"#fb7293"}},[i("dv-decoration-9",{staticStyle:{width:"90px",height:"90px","font-weight":"600"},attrs:{dur:10,color:["#fb7293","#ad4f65"]}},[t._v(t._s(t.deviceStatistic.alertCount))]),i("div",{staticStyle:{"text-align":"center","margin-top":"25px","font-weight":"400"}},[t._v("告警数量")])],1)])},n=[],o=i("584f"),a={data:function(){return{deviceStatistic:{deviceCount:100,productCount:100,eventCount:100,alertCount:100,deviceOnlineCount:100},timer:null}},created:function(){this.getDeviceStatic()},beforeDestroy:function(){this.clearData()},methods:{clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},getDeviceStatic:function(){var t=this;Object(o["h"])().then((function(e){200==e.code&&(t.deviceStatistic=e.data,t.switper())}))},switper:function(){var t=this;if(!this.timer){var e=function(e){t.getDeviceStatic()};this.timer=setInterval(e,6e4)}}}},r=a,c=i("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=l.exports},"6b20":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pageflag?i("div",{staticStyle:{overflow:"hidden",width:"100%",height:"250px","font-size":"12px","line-height":"24px"}},[i("vue-seamless-scroll",{attrs:{data:t.deviceLogList,"class-option":t.defaultOption}},t._l(t.deviceLogList,(function(e,s){return i("div",{key:s,staticStyle:{display:"flex","margin-bottom":"10px","border-bottom":"2px dashed #23cdd8",color:"#bbb"}},[i("span",{staticStyle:{width:"50px",color:"#23cdd8","font-size":"16px","line-height":"48px","font-weight":"bolder"}},[t._v(t._s(s+1))]),i("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[i("div",{staticStyle:{width:"200px"}},[i("span",[t._v("设备编号：")]),i("span",{staticStyle:{color:"#23cdd8"}},[t._v(t._s(e.serialNumber))])]),i("div",{staticStyle:{width:"150px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[i("span",[t._v("标识符：")]),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(e.identity))])]),i("div",{staticStyle:{width:"60px","align-items":"flex-end","text-align":"right"}},[1==e.logType?i("span",{staticStyle:{color:"#ffdb5c"}},[t._v("属性上报")]):2==e.logType?i("span",{staticStyle:{color:"#ffdb5c"}},[t._v("功能调用")]):3==e.logType?i("span",{staticStyle:{color:"#fb7293"}},[t._v("事件上报")]):4==e.logType?i("span",{staticStyle:{color:"#ffdb5c"}},[t._v("设备升级")]):5==e.logType?i("span",{staticStyle:{color:"#9fe6b8"}},[t._v("设备上线")]):6==e.logType?i("span",{staticStyle:{color:"#ff9f7f"}},[t._v("设备离线")]):t._e()]),i("div",{staticStyle:{width:"200px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[i("span",[t._v("上报时间：")]),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(e.createTime))])]),i("div",{staticStyle:{"margin-bottom":"10px",width:"210px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[i("span",[t._v("上报值：")]),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(e.logValue))])])])])})),0)],1):i("Reacquire",{staticStyle:{"line-height":"200px",color:"#23cdd8","margin-left":"210px"},on:{onclick:t.getData}},[t._v(" 重新获取 ")])},n=[],o=i("a939"),a=i.n(o),r=i("a035"),c={components:{vueSeamlessScroll:a.a},data:function(){return{deviceLogList:[],pageflag:!0,defaultOption:{step:2,limitMoveNum:4,hoverStop:!0,singleHeight:280,openWatch:!0,waitTime:3e3},queryParams:{pageNum:1,pageSize:20}}},created:function(){this.getData()},beforeDestroy:function(){this.clearData()},methods:{getData:function(){var t=this;Object(r["a"])(this.queryParams).then((function(e){t.deviceLogList=e.rows,t.switper()}))},clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},switper:function(){var t=this;if(!this.timer){var e=function(e){t.getData()};this.timer=setInterval(e,6e4)}}}},l=c,u=i("2877"),h=Object(u["a"])(l,s,n,!1,null,null,null);e["default"]=h.exports},"7fbd":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center_bottom"},[i("div",[i("dv-scroll-board",{staticStyle:{width:"360px",height:"175px"},attrs:{config:t.config}})],1),i("div",{staticStyle:{display:"flex",height:"115px","margin-top":"30px"}},[i("div",[i("dv-water-level-pond",{staticStyle:{width:"115px",height:"100%"},attrs:{config:t.configCpu}}),i("div",{staticStyle:{"text-align":"center","margin-top":"10px",color:"#23cdd8","font-weight":"600"}},[t._v("CPU")])],1),i("div",{staticStyle:{margin:"0 20px"}},[i("dv-water-level-pond",{staticStyle:{width:"115px",height:"100%"},attrs:{config:t.configMemery}}),i("div",{staticStyle:{"text-align":"center","margin-top":"10px",color:"#23cdd8","font-weight":"600"}},[t._v("内存")])],1),i("div",{},[i("dv-water-level-pond",{staticStyle:{width:"115px",height:"100%"},attrs:{config:t.configDisk}}),i("div",{staticStyle:{"text-align":"center","margin-top":"10px",color:"#23cdd8","font-weight":"600"}},[t._v("系统盘")])],1)])])},n=[],o=(i("b0c0"),i("a9e3"),i("b680"),i("ac1f"),i("5319"),i("cc0b")),a={data:function(){return{timer:null,config:{},data:[["服务器名称",""],["服务器IP",""],["操作系统",""],["系统架构",""],["CPU核心数",""],["服务器内存",""],["Java名称",""],["Java版本",""],["Java启动时间",""],["Java运行时长",""],["Java占用内存",""],["Java总内存",""]],server:{jvm:{name:"",version:"",startTime:"",runTime:"",used:"",total:100},sys:{computerName:"",osName:"",computerIp:"",osArch:""},cpu:{cpuNum:1},mem:{total:2}},configCpu:{data:[50],shape:"roundRect",formatter:"{value}%",waveHeight:10},configMemery:{data:[50],shape:"roundRect",formatter:"{value}%",waveHeight:10},configDisk:{data:[50],shape:"roundRect",formatter:"{value}%",waveHeight:10}}},props:{},mounted:function(){this.getServer()},beforeDestroy:function(){this.clearData()},methods:{getServer:function(){var t=this;Object(o["a"])().then((function(e){t.server=e.data,t.config={rowNum:6,oddRowBGC:"",evenRowBGC:"",columnWidth:[105,230],data:[["服务器名：",t.server.sys.computerName],["服务器IP：",t.server.sys.computerIp],["操作系统：",t.server.sys.osName],["系统架构：",t.server.sys.osArch],["CPU核心：",t.server.cpu.cpuNum],["系统内存：",t.server.mem.total],["Java名称：",t.server.jvm.name],["Java版本：",t.server.jvm.version],["启动时间：",t.server.jvm.startTime],["运行时长：",t.server.jvm.runTime],["运行内存：",t.server.jvm.used],["JVM总内存：",t.server.jvm.total]]};var i=(t.server.cpu.used+t.server.cpu.sys)/(t.server.cpu.used+t.server.cpu.sys+t.server.cpu.free)*100;t.configCpu={data:[i.toFixed(1),i.toFixed(1)-10],shape:"roundRect",formatter:"{value}%",waveHeight:10};var s=t.server.mem.used/(t.server.mem.used+t.server.mem.free)*100;t.configMemery={data:[s.toFixed(1),s.toFixed(1)-10],shape:"roundRect",formatter:"{value}%",waveHeight:10};var n=Number(t.server.sysFiles[0].used.replace("GB",""))/(Number(t.server.sysFiles[0].used.replace("GB",""))+Number(t.server.sysFiles[0].free.replace("GB","")))*100;t.configDisk={data:[n.toFixed(1),n.toFixed(1)-10],shape:"roundRect",formatter:"{value}%",waveHeight:10},t.switper()}))},clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},switper:function(){var t=this;if(!this.timer){var e=function(e){t.getServer()};this.timer=setInterval(e,6e4)}}}},r=a,c=(i("5785"),i("2877")),l=Object(c["a"])(r,s,n,!1,null,"0c97b1ca",null);e["default"]=l.exports},"9a05":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex"}},[i("dv-active-ring-chart",{staticStyle:{width:"250px",height:"250px"},attrs:{config:t.config}}),i("div",{staticStyle:{"font-size":"14px","margin-top":"80px","line-height":"10px","margin-left":"-20px"}},[t.mqtt?i("div",{staticStyle:{"margin-bottom":"20px",color:"#23cdd8"}},[i("div",{staticStyle:{"margin-bottom":"20px",color:"#23cdd8"}},[t._v(" 发送消息总数： "),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(t.formatter(this.static["send_total"])))]),i("dv-decoration-3",{staticStyle:{width:"200px",height:"20px","margin-top":"5px"}})],1)]):i("div",{staticStyle:{"margin-bottom":"20px",color:"#23cdd8"}},[t._v(" 发送字节： "),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(t.formatter(this.static["bytes.sent"])))]),i("dv-decoration-3",{staticStyle:{width:"200px",height:"20px","margin-top":"5px"}})],1),t.mqtt?i("div",{staticStyle:{"margin-bottom":"20px",color:"#23cdd8"}},[t._v(" 接收消息总数： "),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(t.formatter(this.static["receive_total"])))]),i("dv-decoration-3",{staticStyle:{width:"200px",height:"20px","margin-top":"5px"}})],1):i("div",{staticStyle:{"margin-bottom":"20px",color:"#23cdd8"}},[t._v(" 接收字节： "),i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(t.formatter(this.static["bytes.received"])))]),i("dv-decoration-3",{staticStyle:{width:"200px",height:"20px","margin-top":"5px"}})],1)])],1)},n=[],o=(i("a15b"),i("14d9"),i("a434"),i("d3b7"),i("25f0"),i("f5de")),a={data:function(){return{static:{},config:{},timer:null,mqtt:this.$store.state.user.mqtt}},created:function(){this.statisticMqtt()},computed:{},beforeDestroy:function(){this.clearData()},methods:{statisticMqtt:function(){var t=this;this.mqtt?Object(o["d"])().then((function(e){t.static=e.data,t.config={data:[{name:"发送",value:t.static["send_total"]},{name:"接收",value:t.static["receive_total"]}],color:["#ffdb5c","#67e0e3"]},t.switper()})):(this.config={data:[{name:"发送",value:32761563},{name:"接收",value:31910071}],color:["#ffdb5c","#67e0e3"]},this.switper())},formatter:function(t){if(t){var e=t.toString().split("").reverse(),i=[];while(e.length)i.push(e.splice(0,3).join(""));return i.join(",").split("").reverse().join("")}return 1024},clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},switper:function(){var t=this;if(!this.timer){var e=function(e){t.statisticMqtt()};this.timer=setInterval(e,6e4)}}}},r=a,c=i("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=l.exports},a035:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));var s=i("b775");function n(t){return Object(s["a"])({url:"/iot/deviceLog/list",method:"get",params:t})}function o(t){return Object(s["a"])({url:"/iot/deviceLog/history",method:"get",params:t})}},a939:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,(function(){return function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(4)();var s=i(5),n=i(6);e.default={name:"vue-seamless-scroll",data:function(){return{xPos:0,yPos:0,delay:0,copyHtml:"",height:0,width:0,realBoxWidth:0}},props:{data:{type:Array,default:function(){return[]}},classOption:{type:Object,default:function(){return{}}}},computed:{leftSwitchState:function(){return this.xPos<0},rightSwitchState:function(){return Math.abs(this.xPos)<this.realBoxWidth-this.width},leftSwitchClass:function(){return this.leftSwitchState?"":this.options.switchDisabledClass},rightSwitchClass:function(){return this.rightSwitchState?"":this.options.switchDisabledClass},leftSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 -"+this.options.switchOffset+"px",transform:"translate(-100%,-50%)"}},rightSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 "+(this.width+this.options.switchOffset)+"px",transform:"translateY(-50%)"}},float:function(){return this.isHorizontal?{float:"left",overflow:"hidden"}:{overflow:"hidden"}},pos:function(){return{transform:"translate("+this.xPos+"px,"+this.yPos+"px)",transition:"all "+this.ease+" "+this.delay+"ms",overflow:"hidden"}},defaultOption:function(){return{step:1,limitMoveNum:5,hoverStop:!0,direction:1,openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1}},options:function(){return n({},this.defaultOption,this.classOption)},navigation:function(){return this.options.navigation},autoPlay:function(){return!this.navigation&&this.options.autoPlay},scrollSwitch:function(){return this.data.length>=this.options.limitMoveNum},hoverStopSwitch:function(){return this.options.hoverStop&&this.autoPlay&&this.scrollSwitch},canTouchScroll:function(){return this.options.openTouch},isHorizontal:function(){return this.options.direction>1},baseFontSize:function(){return this.options.isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1},realSingleStopWidth:function(){return this.options.singleWidth*this.baseFontSize},realSingleStopHeight:function(){return this.options.singleHeight*this.baseFontSize},step:function(){var t=this.options.step;return this.isHorizontal?this.realSingleStopWidth:this.realSingleStopHeight,t}},methods:{reset:function(){this._cancle(),this._initMove()},leftSwitchClick:function(){if(this.leftSwitchState)return Math.abs(this.xPos)<this.options.switchSingleStep?void(this.xPos=0):void(this.xPos+=this.options.switchSingleStep)},rightSwitchClick:function(){if(this.rightSwitchState)return this.realBoxWidth-this.width+this.xPos<this.options.switchSingleStep?void(this.xPos=this.width-this.realBoxWidth):void(this.xPos-=this.options.switchSingleStep)},_cancle:function(){cancelAnimationFrame(this.reqFrame||"")},touchStart:function(t){var e=this;if(this.canTouchScroll){var i=void 0,s=t.targetTouches[0],n=this.options,o=n.waitTime,a=n.singleHeight,r=n.singleWidth;this.startPos={x:s.pageX,y:s.pageY},this.startPosY=this.yPos,this.startPosX=this.xPos,a&&r?(i&&clearTimeout(i),i=setTimeout((function(){e._cancle()}),o+20)):this._cancle()}},touchMove:function(t){if(!(!this.canTouchScroll||t.targetTouches.length>1||t.scale&&1!==t.scale)){var e=t.targetTouches[0],i=this.options.direction;this.endPos={x:e.pageX-this.startPos.x,y:e.pageY-this.startPos.y},event.preventDefault();var s=Math.abs(this.endPos.x)<Math.abs(this.endPos.y)?1:0;1===s&&i<2?this.yPos=this.startPosY+this.endPos.y:0===s&&i>1&&(this.xPos=this.startPosX+this.endPos.x)}},touchEnd:function(){var t=this;if(this.canTouchScroll){var e=void 0,i=this.options.direction;if(this.delay=50,1===i)this.yPos>0&&(this.yPos=0);else if(0===i){var s=this.realBoxHeight/2*-1;this.yPos<s&&(this.yPos=s)}else if(2===i)this.xPos>0&&(this.xPos=0);else if(3===i){var n=-1*this.realBoxWidth;this.xPos<n&&(this.xPos=n)}e&&clearTimeout(e),e=setTimeout((function(){t.delay=0,t._move()}),this.delay)}},enter:function(){this.hoverStopSwitch&&this._stopMove()},leave:function(){this.hoverStopSwitch&&this._startMove()},_move:function(){this.isHover||(this._cancle(),this.reqFrame=requestAnimationFrame(function(){var t=this,e=this.realBoxHeight/2,i=this.realBoxWidth/2,s=this.options,n=s.direction,o=s.waitTime,a=this.step;1===n?(Math.abs(this.yPos)>=e&&(this.$emit("ScrollEnd"),this.yPos=0),this.yPos-=a):0===n?(this.yPos>=0&&(this.$emit("ScrollEnd"),this.yPos=-1*e),this.yPos+=a):2===n?(Math.abs(this.xPos)>=i&&(this.$emit("ScrollEnd"),this.xPos=0),this.xPos-=a):3===n&&(this.xPos>=0&&(this.$emit("ScrollEnd"),this.xPos=-1*i),this.xPos+=a),this.singleWaitTime&&clearTimeout(this.singleWaitTime),this.realSingleStopHeight?Math.abs(this.yPos)%this.realSingleStopHeight<a?this.singleWaitTime=setTimeout((function(){t._move()}),o):this._move():this.realSingleStopWidth&&Math.abs(this.xPos)%this.realSingleStopWidth<a?this.singleWaitTime=setTimeout((function(){t._move()}),o):this._move()}.bind(this)))},_initMove:function(){var t=this;this.$nextTick((function(){var e=t.options.switchDelay,i=t.autoPlay,s=t.isHorizontal;if(t._dataWarm(t.data),t.copyHtml="",s){t.height=t.$refs.wrap.offsetHeight,t.width=t.$refs.wrap.offsetWidth;var n=t.$refs.slotList.offsetWidth;i&&(n=2*n+1),t.$refs.realBox.style.width=n+"px",t.realBoxWidth=n}if(!i)return t.ease="linear",void(t.delay=e);t.ease="ease-in",t.delay=0,t.scrollSwitch?(t.copyHtml=t.$refs.slotList.innerHTML,setTimeout((function(){t.realBoxHeight=t.$refs.realBox.offsetHeight,t._move()}),0)):(t._cancle(),t.yPos=t.xPos=0)}))},_dataWarm:function(t){t.length},_startMove:function(){this.isHover=!1,this._move()},_stopMove:function(){this.isHover=!0,this.singleWaitTime&&clearTimeout(this.singleWaitTime),this._cancle()}},mounted:function(){this._initMove()},watch:{data:function(t,e){this._dataWarm(t),s(t,e)||this.reset()},autoPlay:function(t){t?this.reset():this._stopMove()}},beforeCreate:function(){this.reqFrame=null,this.singleWaitTime=null,this.isHover=!1,this.ease="ease-in"},beforeDestroy:function(){this._cancle(),clearTimeout(this.singleWaitTime)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),n=function(t){return t&&t.__esModule?t:{default:t}}(s);n.default.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.componentName||n.default.name,n.default)},"undefined"!=typeof window&&window.Vue&&Vue.component(n.default.name,n.default),e.default=n.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);var a=i(7),r=i(3),c=r(n.a,a.a,!1,null,null,null);e.default=c.exports},function(t,e){t.exports=function(t,e,i,s,n,o){var a,r=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,r=t.default);var l,u="function"==typeof r?r.options:r;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),n&&(u._scopeId=n),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):s&&(l=s),l){var h=u.functional,f=h?u.render:u.beforeCreate;h?(u._injectStyles=l,u.render=function(t,e){return l.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:r,options:u}}},function(t,e){var i=function(){window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}()};t.exports=i},function(t,e){var i=function(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(var i=0;i<t.length;++i)if(t[i]!==e[i])return!1;return!0};t.exports=i},function(t,e){function i(){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var t=void 0,e=void 0,n=void 0,o=void 0,a=void 0,r=void 0,c=1,l=arguments[0]||{},u=!1,h=arguments.length;if("boolean"==typeof l&&(u=l,l=arguments[1]||{},c++),"object"!==(void 0===l?"undefined":s(l))&&"function"!=typeof l&&(l={}),c===h)return l;for(;c<h;c++)if(null!=(e=arguments[c]))for(t in e)n=l[t],o=e[t],a=Array.isArray(o),u&&o&&("object"===(void 0===o?"undefined":s(o))||a)?(a?(a=!1,r=n&&Array.isArray(n)?n:[]):r=n&&"object"===(void 0===n?"undefined":s(n))?n:{},l[t]=i(u,r,o)):void 0!==o&&(l[t]=o);return l}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=i},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrap"},[t.navigation?i("div",{class:t.leftSwitchClass,style:t.leftSwitch,on:{click:t.leftSwitchClick}},[t._t("left-switch")],2):t._e(),t._v(" "),t.navigation?i("div",{class:t.rightSwitchClass,style:t.rightSwitch,on:{click:t.rightSwitchClick}},[t._t("right-switch")],2):t._e(),t._v(" "),i("div",{ref:"realBox",style:t.pos,on:{mouseenter:t.enter,mouseleave:t.leave,touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[i("div",{ref:"slotList",style:t.float},[t._t("default")],2),t._v(" "),i("div",{style:t.float,domProps:{innerHTML:t._s(t.copyHtml)}})])])},n=[],o={render:s,staticRenderFns:n};e.a=o}]).default}))},b8f7:function(t,e,i){"use strict";i("eb80")},bbfc:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contents"},[i("div",{staticClass:"contetn_left"},[i("div",{staticClass:"pagetab"},[i("dv-decoration-12",{staticStyle:{width:"30px",height:"30px"}}),i("div",{staticClass:"item"},[t._v("实时监测数据")])],1),i("ItemWrap",{staticClass:"contetn_left-top contetn_lr-item",attrs:{title:"设备总览"}},[i("LeftTop")],1),i("ItemWrap",{staticClass:"contetn_left-center contetn_lr-item",attrs:{title:"Mqtt统计"}},[i("LeftCenter")],1),i("ItemWrap",{staticClass:"contetn_left-bottom contetn_lr-item",staticStyle:{padding:"0 10px 16px 10px"},attrs:{title:"监测数据"}},[i("LeftBottom")],1)],1),i("div",{staticClass:"contetn_center"},[i("CenterMap",{staticClass:"contetn_center_top"}),i("ItemWrap",{staticClass:"contetn_center-bottom",attrs:{title:"服务器信息"}},[i("CenterBottom")],1)],1),i("div",{staticClass:"contetn_right"},[i("ItemWrap",{staticClass:"contetn_left-bottom contetn_lr-item",attrs:{title:"Mqtt状态"}},[i("RightTop")],1),i("ItemWrap",{staticClass:"contetn_left-bottom contetn_lr-item",staticStyle:{padding:"0 10px 16px 10px"},attrs:{title:"Mqtt消息"}},[i("RightCenter")],1),i("ItemWrap",{staticClass:"contetn_left-bottom contetn_lr-item",attrs:{title:"设备提醒 "}},[i("RightBottom")],1)],1)])},n=[],o=i("6647"),a=i("e569"),r=i("6b20"),c=i("731b"),l=i("7fbd"),u=i("f1ef"),h=i("9a05"),f=i("2611"),d={components:{LeftTop:o["default"],LeftCenter:a["default"],LeftBottom:r["default"],CenterMap:c["default"],RightTop:u["default"],RightCenter:h["default"],RightBottom:f["default"],CenterBottom:l["default"]},data:function(){return{}},filters:{numsFilter:function(t){return t||0}},created:function(){},mounted:function(){},methods:{}},p=d,v=(i("b8f7"),i("2877")),m=Object(v["a"])(p,s,n,!1,null,"735693f3",null);e["default"]=m.exports},cc0b:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i("b775");function n(){return Object(s["a"])({url:"/monitor/server",method:"get"})}},dc9c:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return o}));var s=i("b775");function n(t){return Object(s["a"])({url:"/iot/log/list",method:"get",params:t})}function o(t){return Object(s["a"])({url:"/iot/log/"+t,method:"delete"})}},e569:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"statsChart",staticStyle:{height:"240px",margin:"20px 0 40px 0"}})])},n=[],o=i("f5de"),a={data:function(){return{timer:null,stats:{},mqtt:this.$store.state.user.mqtt}},created:function(){this.getMqttStats()},beforeDestroy:function(){this.clearData()},methods:{getMqttStats:function(){var t=this;this.mqtt?Object(o["b"])().then((function(e){t.stats=e.data,t.drawStats(),t.switper()})):this.$nextTick((function(){t.stats={"connections.count":800,"connections.max":8e3,"sessions.count":700,"sessions.max":7e3,"topics.count":600,"topics.max":6e3,"subscribers.count":500,"subscribers.max":5e3,"routes.count":400,"routes.max":4e3,"retained.count":300,"retained.max":3e3},t.drawStats(),t.switper()}))},drawStats:function(){var t,e=this.$echarts.init(this.$refs.statsChart);t={animationDuration:3e3,tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"rgba(58,73,116,0.7)",textStyle:{color:"rgba(65,235,246,1)"}},legend:{textStyle:{color:"rgba(65,235,246,1)"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],axisLabel:{fontSize:12,color:"#fff"},splitLine:{lineStyle:{type:"dashed",color:"rgba(65,235,246,1)",width:.5}}},yAxis:{type:"category",axisLabel:{fontSize:12,color:"#fff"},data:this.mqtt?["连接数量","会话数量","订阅数量","路由数量","保留消息"]:["连接数量","会话数量","主题数量","订阅数量","路由数量","保留消息"]},series:[{name:"当前数量",type:"bar",data:this.mqtt?[this.stats["connection_count"],this.stats["session_count"],this.stats["subscription_count"],this.stats["retain_count"],this.stats["retain_count"]]:[this.stats["connections.count"],this.stats["sessions.count"],this.stats["topics.count"],this.stats["subscribers.count"],this.stats["routes.count"],this.stats["retained.count"]],itemStyle:{color:"#67e0e3"}},{name:this.mqtt?"累计总数":"历史最大数",type:"bar",data:this.mqtt?[this.stats["connection_total"],this.stats["session_total"],this.stats["subscription_total"],this.stats["retain_total"],this.stats["retain_total"]]:[this.stats["connections.max"],this.stats["sessions.max"],this.stats["topics.max"],this.stats["subscribers.max"],this.stats["routes.max"],this.stats["retained.max"]],itemStyle:{color:"#ffdb5c"}}]},t&&e.setOption(t)},clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},switper:function(){var t=this;if(!this.timer){var e=function(e){t.getMqttStats()};this.timer=setInterval(e,6e4)}}}},r=a,c=i("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=l.exports},eb80:function(t,e,i){},f1ef:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"padding-top":"10px"}},[i("dv-capsule-chart",{staticStyle:{width:"430px",height:"230px"},attrs:{config:t.config}})],1)},n=[],o=i("f5de"),a={data:function(){return{static:{},config:{},timer:null,mqtt:this.$store.state.user.mqtt}},created:function(){this.statisticMqtt()},mounted:function(){},beforeDestroy:function(){this.clearData()},methods:{statisticMqtt:function(){var t=this;this.mqtt?Object(o["d"])().then((function(e){t.static=e.data,t.config={data:[{name:"今日接收",value:t.static["today_received"]},{name:"今日发送",value:t.static["today_send"]},{name:"订阅总数",value:t.static["subscribe_total"]},{name:"发布消息",value:t.static["send_total"]},{name:"接收消息",value:t.static["receive_total"]},{name:"认证次数",value:t.static["auth_total"]},{name:"认证成功",value:t.static["auth_total"]}],unit:"次数",showValue:!0},t.switper()})):(this.config={data:[{name:"今日接收",value:6e3},{name:"今日发送",value:5e3},{name:"订阅总数",value:4e3},{name:"发布消息",value:3e3},{name:"接收消息",value:2e3},{name:"认证次数",value:1e3},{name:"认证成功",value:1e3}],unit:"次数",showValue:!0},this.switper())},clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},switper:function(){var t=this;if(!this.timer){var e=function(e){t.statisticMqtt()};this.timer=setInterval(e,6e4)}}}},r=a,c=i("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=l.exports},f5de:function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return a})),i.d(e,"d",(function(){return r}));var s=i("b775");function n(t){return Object(s["a"])({url:"/iot/mqtt/clients",method:"get",params:t})}function o(t){return Object(s["a"])({url:"/iot/mqtt/client/out",method:"get",params:t})}function a(){return Object(s["a"])({url:"/bashBoard/stats",method:"get"})}function r(t){return Object(s["a"])({url:"/bashBoard/metrics",method:"get",params:t})}}}]);