(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de88f092"],{"2c0e":function(e,t,a){"use strict";a("b6d5")},b6d5:function(e,t,a){},ca90:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"6px"}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],staticStyle:{"margin-bottom":"5px"}},[a("el-form",{ref:"queryForm",staticStyle:{"margin-bottom":"-20px"},attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"名称",prop:"templateName"}},[a("el-input",{attrs:{placeholder:"请输入物模型名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.templateName,callback:function(t){e.$set(e.queryParams,"templateName",t)},expression:"queryParams.templateName"}})],1),a("el-form-item",{attrs:{label:"类别",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择模型类别",clearable:"",size:"small"},model:{value:e.queryParams.type,callback:function(t){e.$set(e.queryParams,"type",t)},expression:"queryParams.type"}},e._l(e.dict.type.iot_things_type,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:template:add"],expression:"['iot:template:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),a("el-card",{staticStyle:{"padding-bottom":"100px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.templateList,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"名称",align:"center",prop:"templateName"}}),a("el-table-column",{attrs:{label:"标识符",align:"center",prop:"identifier"}}),a("el-table-column",{attrs:{label:"首页显示",align:"center",prop:"isTop",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.isTop}})]}}])}),a("el-table-column",{attrs:{label:"监测值",align:"center",prop:"isMonitor",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.isMonitor}})]}}])}),a("el-table-column",{attrs:{label:"系统定义",align:"center",prop:"isSys",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.isSys}})]}}])}),a("el-table-column",{attrs:{label:"物模型类别",align:"center",prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_things_type,value:t.row.type}})]}}])}),a("el-table-column",{attrs:{label:"数据类型",align:"center",prop:"datatype"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_data_type,value:t.row.datatype}})]}}])}),a("el-table-column",{attrs:{label:"数据定义",align:"left","header-align":"center",prop:"specs","min-width":"150","class-name":"specsColor"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(e.formatSpecsDisplay(t.row.specs))}})]}}])}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"!=t.row.isSys&&e.isTenant?e._e():a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:template:edit"],expression:"['iot:template:edit']"}],staticStyle:{padding:"5px"},attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),"0"!=t.row.isSys&&e.isTenant?e._e():a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:template:remove"],expression:"['iot:template:remove']"}],staticStyle:{padding:"5px"},attrs:{size:"small",type:"danger",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")]),"1"==t.row.isSys&&e.isTenant?a("span",{staticStyle:{"font-size":"10px",color:"#999"}},[e._v("系统定义，不能修改")]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"模型名称",prop:"templateName"}},[a("el-input",{staticStyle:{width:"385px"},attrs:{placeholder:"请输入物模型名称，例如：温度"},model:{value:e.form.templateName,callback:function(t){e.$set(e.form,"templateName",t)},expression:"form.templateName"}})],1),a("el-form-item",{attrs:{label:"标识符",prop:"identifier"}},[a("el-input",{staticStyle:{width:"385px"},attrs:{placeholder:"请输入标识符，例如：temperature"},model:{value:e.form.identifier,callback:function(t){e.$set(e.form,"identifier",t)},expression:"form.identifier"}})],1),a("el-form-item",{attrs:{label:"模型类别",prop:"type"}},[a("el-radio-group",{on:{change:function(t){return e.typeChange(e.form.type)}},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v("属性")]),a("el-radio-button",{attrs:{label:"2"}},[e._v("功能")]),a("el-radio-button",{attrs:{label:"3"}},[e._v("事件")])],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:3!=e.form.type,expression:"form.type != 3"}],attrs:{label:"首页显示",prop:"isTop"}},[a("el-switch",{attrs:{"active-text":"","inactive-text":"","active-value":1,"inactive-value":0,"active-color":"#13ce66"},model:{value:e.form.isTop,callback:function(t){e.$set(e.form,"isTop",t)},expression:"form.isTop"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.type,expression:"form.type == 1"}],attrs:{label:"实时监测",prop:"isMonitor"}},[a("el-switch",{attrs:{"active-text":"","inactive-text":"","active-value":1,"inactive-value":0,"active-color":"#13ce66"},on:{change:function(t){return e.changeMonitor(e.form.isMonitor)}},model:{value:e.form.isMonitor,callback:function(t){e.$set(e.form,"isMonitor",t)},expression:"form.isMonitor"}})],1),a("el-divider"),a("el-form-item",{attrs:{label:"数据类型",prop:"datatype"}},[a("el-select",{staticStyle:{width:"175px"},attrs:{placeholder:"请选择数据类型"},on:{change:e.dataTypeChange},model:{value:e.form.datatype,callback:function(t){e.$set(e.form,"datatype",t)},expression:"form.datatype"}},[a("el-option",{key:"integer",attrs:{label:"整数",value:"integer"}}),a("el-option",{key:"decimal",attrs:{label:"小数",value:"decimal"}}),a("el-option",{key:"bool",attrs:{label:"布尔",value:"bool",disabled:1==e.form.isMonitor}}),a("el-option",{key:"enum",attrs:{label:"枚举",value:"enum",disabled:1==e.form.isMonitor}}),a("el-option",{key:"string",attrs:{label:"字符串",value:"string",disabled:1==e.form.isMonitor}}),a("el-option",{key:"array",attrs:{label:"数组",value:"array",disabled:1==e.form.isMonitor}})],1)],1),"integer"==e.form.datatype||"decimal"==e.form.datatype?a("div",[a("el-form-item",{attrs:{label:"取值范围"}},[a("el-row",[a("el-col",{attrs:{span:9}},[a("el-input",{attrs:{placeholder:"最小值",type:"number"},model:{value:e.form.specs.min,callback:function(t){e.$set(e.form.specs,"min",t)},expression:"form.specs.min"}})],1),a("el-col",{attrs:{span:2,align:"center"}},[e._v("到")]),a("el-col",{attrs:{span:9}},[a("el-input",{attrs:{placeholder:"最大值",type:"number"},model:{value:e.form.specs.max,callback:function(t){e.$set(e.form.specs,"max",t)},expression:"form.specs.max"}})],1)],1)],1),a("el-form-item",{attrs:{label:"单位"}},[a("el-input",{staticStyle:{width:"385px"},attrs:{placeholder:"请输入单位，例如：℃"},model:{value:e.form.specs.unit,callback:function(t){e.$set(e.form.specs,"unit",t)},expression:"form.specs.unit"}})],1),a("el-form-item",{attrs:{label:"步长"}},[a("el-input",{staticStyle:{width:"385px"},attrs:{placeholder:"请输入步长，例如：1",type:"number"},model:{value:e.form.specs.step,callback:function(t){e.$set(e.form.specs,"step",t)},expression:"form.specs.step"}})],1)],1):e._e(),"bool"==e.form.datatype?a("div",[a("el-form-item",{attrs:{label:"布尔值",prop:""}},[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-col",{attrs:{span:9}},[a("el-input",{attrs:{placeholder:"例如：关闭"},model:{value:e.form.specs.falseText,callback:function(t){e.$set(e.form.specs,"falseText",t)},expression:"form.specs.falseText"}})],1),a("el-col",{attrs:{span:10,offset:1}},[e._v(" （0 值对应文本）")])],1),a("el-row",[a("el-col",{attrs:{span:9}},[a("el-input",{attrs:{placeholder:"例如：打开"},model:{value:e.form.specs.trueText,callback:function(t){e.$set(e.form.specs,"trueText",t)},expression:"form.specs.trueText"}})],1),a("el-col",{attrs:{span:10,offset:1}},[e._v(" （1 值对应文本）")])],1)],1)],1):e._e(),"enum"==e.form.datatype?a("div",[a("el-form-item",{attrs:{label:"枚举项",prop:""}},[e._l(e.form.specs.enumList,(function(t,r){return a("el-row",{key:"enum"+r,staticStyle:{"margin-bottom":"10px"}},[a("el-col",{attrs:{span:9}},[a("el-input",{attrs:{placeholder:"参数值，例如：0",type:"number"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{attrs:{placeholder:"参数描述，例如：中速档位"},model:{value:t.text,callback:function(a){e.$set(t,"text",a)},expression:"item.text"}})],1),0!=r?a("el-col",{attrs:{span:2,offset:1}},[a("a",{staticStyle:{color:"#F56C6C"},on:{click:function(t){return e.removeEnumItem(r)}}},[e._v("删除")])]):e._e()],1)})),a("div",[e._v("+ "),a("a",{staticStyle:{color:"#409EFF"},on:{click:function(t){return e.addEnumItem()}}},[e._v("添加枚举项")])])],2)],1):e._e(),"string"==e.form.datatype?a("div",[a("el-form-item",{attrs:{label:"最大长度",prop:""}},[a("el-row",[a("el-col",{attrs:{span:9}},[a("el-input",{attrs:{placeholder:"例如：1024",type:"number"},model:{value:e.form.specs.maxLength,callback:function(t){e.$set(e.form.specs,"maxLength",t)},expression:"form.specs.maxLength"}})],1),a("el-col",{attrs:{span:14,offset:1}},[e._v("（字符串的最大长度）")])],1)],1)],1):e._e(),"array"==e.form.datatype?a("div",[a("el-form-item",{attrs:{label:"数组类型",prop:""}},[a("el-radio-group",{model:{value:e.form.specs.arrayType,callback:function(t){e.$set(e.form.specs,"arrayType",t)},expression:"form.specs.arrayType"}},[a("el-radio",{attrs:{label:"int"}},[e._v("int（整数）")]),a("el-radio",{attrs:{label:"double"}},[e._v("double（小数）")]),a("el-radio",{attrs:{label:"string"}},[e._v("string（字符串）")])],1)],1)],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)],1)},s=[],l=a("5530"),o=(a("d81d"),a("b64b"),a("b0c0"),a("a9e3"),a("e9c4"),a("a434"),a("cec4")),i={name:"Template",dicts:["iot_things_type","iot_data_type","iot_yes_no"],data:function(){return{isTenant:!1,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,templateList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,templateName:null,type:null},form:{},rules:{templateName:[{required:!0,message:"物模型名称不能为空",trigger:"blur"}],identifier:[{required:!0,message:"标识符，产品下唯一不能为空",trigger:"blur"}],type:[{required:!0,message:"模型类别不能为空",trigger:"change"}],datatype:[{required:!0,message:"数据类型不能为空",trigger:"change"}],specs:[{required:!0,message:"数据定义不能为空",trigger:"blur"}]}}},created:function(){this.getList(),this.init()},methods:{init:function(){-1!==this.$store.state.user.roles.indexOf("tenant")&&(this.isTenant=!0)},getList:function(){var e=this;this.loading=!0,Object(o["d"])(this.queryParams).then((function(t){e.templateList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={templateId:null,templateName:null,userId:null,userName:null,tenantId:null,tenantName:null,identifier:null,type:1,datatype:"integer",isSys:null,isTop:null,isMonitor:null,delFlag:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null,specs:{enumList:[{value:"",text:""}],arrayType:"int"}},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.templateId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加通用物模型"},handleUpdate:function(e){var t=this;this.reset();var a=e.templateId||this.ids;Object(o["c"])(a).then((function(e){var a=e.data;t.open=!0,t.title="修改通用物模型",a.specs=JSON.parse(a.specs),a.specs.enumList||(a.specs.enumList=[{value:"",text:""}]),a.specs.arrayType||(a.specs.arrayType="int"),t.form=a}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.templateId?(e.form.specs=e.formatThingsSpecs(),2==e.form.type?e.form.isMonitor=0:3==e.form.type&&(e.form.isMonitor=0,e.form.isTop=0),e.form.updateBy=e.$store.state.user.name,Object(o["e"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()}))):(e.form.specs=e.formatThingsSpecs(),2==e.form.type?e.form.isMonitor=0:3==e.form.type&&(e.form.isMonitor=0,e.form.isTop=0),e.form.createBy=e.$store.state.user.name,Object(o["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()}))))}))},handleDelete:function(e){var t=this,a=e.templateId||this.ids;this.$modal.confirm('是否确认删除通用物模型编号为"'+a+'"的数据项？').then((function(){return Object(o["b"])(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/template/export",Object(l["a"])({},this.queryParams),"template_".concat((new Date).getTime(),".xlsx"))},typeChange:function(e){2!=e&&3!=e||(this.form.isMonitor=0)},changeMonitor:function(e){1==e&&"integer"!=this.form.datatype&&"decimal"!=this.form.datatype&&(this.form.datatype="integer")},formatThingsSpecs:function(){var e={};return e.type=this.form.datatype,"integer"==this.form.datatype||"decimal"==this.form.datatype?(e.min=Number(this.form.specs.min),e.max=Number(this.form.specs.max),e.unit=this.form.specs.unit,e.step=Number(this.form.specs.step)):"string"==this.form.datatype?e.maxLength=Number(this.form.specs.maxLength):"bool"==this.form.datatype?(e.falseText=this.form.specs.falseText,e.trueText=this.form.specs.trueText):"array"==this.form.datatype?e.arrayType=this.form.specs.arrayType:"enum"==this.form.datatype&&(e.enumList=this.form.specs.enumList),JSON.stringify(e)},dataTypeChange:function(e){},addEnumItem:function(){this.form.specs.enumList.push({value:"",text:""})},removeEnumItem:function(e){this.form.specs.enumList.splice(e,1)},formatSpecsDisplay:function(e){var t=JSON.parse(e);if("integer"===t.type||"decimal"===t.type)return"<span style='width:50%;display:inline-block;'>最大值：<span style=\"color:#F56C6C\">"+t.max+'</span></span>最小值：<span style="color:#F56C6C">'+t.min+"</span><br /><span style='width:50%;display:inline-block;'>步长：<span style=\"color:#F56C6C\">"+t.step+'</span></span>单位：<span style="color:#F56C6C">'+t.unit;if("string"===t.type)return'最大长度：<span style="color:#F56C6C">'+t.maxLength+"</span>";if("array"===t.type)return'数组类型：<span style="color:#F56C6C">'+t.arrayType+"</span>";if("enum"===t.type){for(var a="",r=0;r<t.enumList.length;r++)a=a+"<span style='width:50%;display:inline-block;'>"+t.enumList[r].value+"：<span style='color:#F56C6C'>"+t.enumList[r].text+"</span></span>",r>0&&r%2!=0&&(a+="<br />");return a}return"bool"===t.type?"<span style='width:50%;display:inline-block;'>0：<span style=\"color:#F56C6C\">"+t.falseText+'</span></span>1：<span style="color:#F56C6C">'+t.trueText:void 0}}},n=i,p=(a("2c0e"),a("2877")),c=Object(p["a"])(n,r,s,!1,null,null,null);t["default"]=c.exports},cec4:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return n}));var r=a("b775");function s(e){return Object(r["a"])({url:"/iot/template/list",method:"get",params:e})}function l(e){return Object(r["a"])({url:"/iot/template/"+e,method:"get"})}function o(e){return Object(r["a"])({url:"/iot/template",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/iot/template",method:"put",data:e})}function n(e){return Object(r["a"])({url:"/iot/template/"+e,method:"delete"})}}}]);