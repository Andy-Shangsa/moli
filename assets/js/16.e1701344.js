(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{460:function(l,e,o){"use strict";o.r(e);var a={data:function(){return{model:"1",value:"1",group:"1",border:"1",button:"上海",modules:[{key:"basic",title:"基础用法",source:'<ml-radio v-model="model" label="1">选项一</ml-radio>\n          <ml-radio v-model="model" label="2">选项二</ml-radio>'},{key:"disabled",title:"禁用状态",desc:"单选框不可用的状态。",tips:"你可以使用 <code>disabled</code> 属性来定义按钮是否可用，它接受一个 <code>Boolean</code> 值。",source:' <ml-radio v-model="value" label="1" disabled>选项一</ml-radio>\n          <ml-radio v-model="value" label="2">选项二</ml-radio>\n          <ml-radio v-model="value" label="3" disabled>选项三</ml-radio>'},{key:"group",title:"单选框组",desc:"适用于在多个互斥的选项中选择的场景",source:'<ml-radio-group v-model="group">\n            <ml-radio label="1">选项一</ml-radio>\n            <ml-radio label="2">选项二</ml-radio>\n            <ml-radio label="3">选项三</ml-radio>\n          </ml-radio-group>'},{key:"button",title:"单选框组",desc:"按钮样式的单选组合。",source:' <ml-radio-group v-model="model">\n            <ml-radio-button label="上海"></ml-radio-button>\n            <ml-radio-button label="北京"></ml-radio-button>\n            <ml-radio-button label="广州"></ml-radio-button>\n            <ml-radio-button label="深圳"></ml-radio-button>\n          </ml-radio-group>'},{key:"border",title:"带边框",tips:"设置 <code>border</code> 属性可以渲染为带有边框的单选框。",source:'<ml-radio v-model="border" label="1" border>备选项1</ml-radio>\n          <ml-radio v-model="border" label="2" border>备选项2</ml-radio>\n          <ml-radio v-model="border" label="3" border>备选项3</ml-radio>'}]}},methods:{handleClick:function(){this.loading=!0}}},t=o(1),d=Object(t.a)(a,(function(){var l=this,e=l.$createElement,o=l._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[o("block",{attrs:{title:"Radio 单选框",desc:"在一组备选项中进行单选",modules:l.modules}},[o("template",{slot:"basic"},[o("ml-radio",{attrs:{label:"1"},model:{value:l.model,callback:function(e){l.model=e},expression:"model"}},[l._v("选项一")]),l._v(" "),o("ml-radio",{attrs:{label:"2"},model:{value:l.model,callback:function(e){l.model=e},expression:"model"}},[l._v("选项二")])],1),l._v(" "),o("template",{slot:"disabled"},[o("ml-radio",{attrs:{label:"1",disabled:""},model:{value:l.value,callback:function(e){l.value=e},expression:"value"}},[l._v("选项一")]),l._v(" "),o("ml-radio",{attrs:{label:"2"},model:{value:l.value,callback:function(e){l.value=e},expression:"value"}},[l._v("选项二")]),l._v(" "),o("ml-radio",{attrs:{label:"3",disabled:""},model:{value:l.value,callback:function(e){l.value=e},expression:"value"}},[l._v("选项三")])],1),l._v(" "),o("template",{slot:"group"},[o("ml-radio-group",{model:{value:l.group,callback:function(e){l.group=e},expression:"group"}},[o("ml-radio",{attrs:{label:"1"}},[l._v("选项一")]),l._v(" "),o("ml-radio",{attrs:{label:"2"}},[l._v("选项二")]),l._v(" "),o("ml-radio",{attrs:{label:"3"}},[l._v("选项三")])],1)],1),l._v(" "),o("template",{slot:"button"},[o("ml-radio-group",{model:{value:l.button,callback:function(e){l.button=e},expression:"button"}},[o("ml-radio-button",{attrs:{label:"上海"}}),l._v(" "),o("ml-radio-button",{attrs:{label:"北京"}}),l._v(" "),o("ml-radio-button",{attrs:{label:"广州"}}),l._v(" "),o("ml-radio-button",{attrs:{label:"深圳"}})],1)],1),l._v(" "),o("template",{slot:"border"},[o("ml-radio",{attrs:{label:"1",border:""},model:{value:l.border,callback:function(e){l.border=e},expression:"border"}},[l._v("备选项1")]),l._v(" "),o("ml-radio",{attrs:{label:"2",border:""},model:{value:l.border,callback:function(e){l.border=e},expression:"border"}},[l._v("备选项2")]),l._v(" "),o("ml-radio",{attrs:{label:"3",border:""},model:{value:l.border,callback:function(e){l.border=e},expression:"border"}},[l._v("备选项3")])],1)],2),l._v(" "),o("h3",{attrs:{id:"属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[l._v("#")]),l._v(" 属性")]),l._v(" "),o("table",[o("thead",[o("tr",[o("th",[l._v("参数")]),l._v(" "),o("th",[l._v("说明")]),l._v(" "),o("th",[l._v("类型")]),l._v(" "),o("th",[l._v("可选值")]),l._v(" "),o("th",[l._v("默认值")])])]),l._v(" "),o("tbody",[o("tr",[o("td",[l._v("value / v-model")]),l._v(" "),o("td",[l._v("绑定值")]),l._v(" "),o("td",[l._v("string / number / boolean")]),l._v(" "),o("td",[l._v("-")]),l._v(" "),o("td",[l._v("-")])]),l._v(" "),o("tr",[o("td",[l._v("label")]),l._v(" "),o("td",[l._v("Radio 的 value")]),l._v(" "),o("td",[l._v("string / number / boolean")]),l._v(" "),o("td",[l._v("-")]),l._v(" "),o("td",[l._v("-")])]),l._v(" "),o("tr",[o("td",[l._v("disabled")]),l._v(" "),o("td",[l._v("禁用状态")]),l._v(" "),o("td",[l._v("blooean")]),l._v(" "),o("td",[l._v("-")]),l._v(" "),o("td",[l._v("false")])]),l._v(" "),o("tr",[o("td",[l._v("border")]),l._v(" "),o("td",[l._v("是否显示边框")]),l._v(" "),o("td",[l._v("boolean")]),l._v(" "),o("td",[l._v("-")]),l._v(" "),o("td",[l._v("false")])]),l._v(" "),o("tr",[o("td",[l._v("size")]),l._v(" "),o("td",[l._v("Radio 的尺寸，仅在 border 为真时有效")]),l._v(" "),o("td",[l._v("string")]),l._v(" "),o("td",[l._v("medium / small / mini")]),l._v(" "),o("td",[l._v("-")])]),l._v(" "),o("tr",[o("td",[l._v("name")]),l._v(" "),o("td",[l._v("原生 name 属性")]),l._v(" "),o("td",[l._v("string")]),l._v(" "),o("td",[l._v("-")]),l._v(" "),o("td",[l._v("false")])])])])],1)}),[],!1,null,null,null);e.default=d.exports}}]);