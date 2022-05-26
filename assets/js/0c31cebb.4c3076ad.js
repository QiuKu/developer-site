"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[1898],{10895:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(49873),r=o(59301),d=o(91902),a=o(10161),i=o(59358),s=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}];o(58354);var c=function(e){var t=e.category,o=e.dataSource,c=(0,d.Z)().siteConfig,l=function(e){return e.replace(/\[(.*)\]\(\/docs\/(.*)\)/g,(function(e,t,o){return"["+t+"]("+c.baseUrl+"docs/"+o+")"}))},p=[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return r.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return r.createElement(a.D,{children:l(e),remarkPlugins:[i.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return r.createElement(a.D,{children:l(e),remarkPlugins:[i.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?r.createElement(a.D,{children:l(e),remarkPlugins:[i.Z]}):r.createElement("div",null," - ")}}],u=("form"===t?[].concat(s,o||[]):[].concat(o||[])).sort((function(e,t){return e.code<t.code?-1:1}));return r.createElement(n.Z,{className:"attr-table",dataSource:u,pagination:!1,columns:p})}},84969:function(e,t,o){o.d(t,{Z:function(){return a}});var n=o(96178),r=o(59301),d=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var o=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(o,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var o;return(o=e.call(this,t)||this).createRecevier=function(){o.destroyRecevier(),o.recevier=new d,o.recevier.on("updateHeight",(function(e,t,n){o.iframe&&n===o.iframe.contentWindow&&(o.container.style.height=(e.msg||0)+"px",o.props.onUpdateHeight&&o.props.onUpdateHeight(e.msg||"#"))}))},o.destroyRecevier=function(){o.recevier&&(o.recevier.destroy(),o.recevier=null)},o.container=null,o.iframe=null,o}(0,n.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},o.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},o.componentWillUnmount=function(){this.destroyRecevier()},o.render=function(){var e=this,t=this.props,o=t.className,n=t.id,d=t.style,a=t.url;return a?r.createElement("div",{className:"bg-iframe "+o,id:n,style:Object.assign({height:400,width:"100%"},d),ref:function(t){e.container=t}},r.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);a.displayName="bg-iframe"},50866:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var n=o(47145),r=o(24736),d=(o(59301),o(99278)),a=o(84969),i=o(10895),s=["components"],c={title:"EmployeeField \u4eba\u5458\u641c\u7d22\u6846",order:12},l="EmployeeField \u4eba\u5458\u641c\u7d22\u6846",p={unversionedId:"components/form/employeeField",id:"components/form/employeeField",title:"EmployeeField \u4eba\u5458\u641c\u7d22\u6846",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/employeeField.mdx",sourceDirName:"components/form",slug:"/components/form/employeeField",permalink:"/developer-site/docs/components/form/employeeField",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/form/employeeField.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"EmployeeField \u4eba\u5458\u641c\u7d22\u6846",order:12},sidebar:"components",previous:{title:"TextareaField \u591a\u884c\u8f93\u5165\u6846",permalink:"/developer-site/docs/components/form/textareaField"},next:{title:"RateField \u8bc4\u5206",permalink:"/developer-site/docs/components/form/rateField"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function y(e){var t=e.components,o=(0,r.Z)(e,s);return(0,d.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"employeefield-\u4eba\u5458\u641c\u7d22\u6846"},"EmployeeField \u4eba\u5458\u641c\u7d22\u6846"),(0,d.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u9700\u8981\u5728\u9875\u9762\u4e2d\u6307\u5b9a\u5904\u7406\u4eba\u7684\u65f6\u5019\uff1b"),(0,d.kt)("li",{parentName:"ul"},"\u5f53\u7528\u6237\u9700\u8981\u767b\u8bb0\u4e2a\u4eba\u4fe1\u606f\u7684\u65f6\u5019\uff1b")),(0,d.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,d.kt)(a.Z,{url:"https://www.aliwork.com/developer/employee-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,d.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,d.kt)(i.Z,{category:"form",dataSource:[{code:"closeOnSelect",type:"boolean",default:"false",desc:"\u662f\u5426\u5728\u9009\u4e2d\u540e\u5173\u95ed"},{code:"beforeSearchTeam",type:"(params: Record<string, string>) => Record<string, string>",default:"-",desc:"\u641c\u7d22\u7ec4\u7ec7\uff0c\u53d1\u9001\u8bf7\u6c42\u524d\uff0c\u53ef\u4ee5\u901a\u8fc7\u6b64\u51fd\u6570\u5904\u7406\u53c2\u6570\uff0c\u5f53**dataType**\u5c5e\u6027\u4e3a url\u65f6\u751f\u6548"},{code:"subUrl",type:"string",default:"-",desc:"\u4e0b\u5c5e\u5f02\u6b65\u63a5\u53e3\uff0c\u81ea\u5b9a\u4e49\u641c\u7d22\u5168\u5458\u548c\u4e0b\u5c5e\u65f6\u7684\u670d\u52a1 URL\uff0c\u9ed8\u8ba4\u7528 \u63a5\u53e3\u5730\u5740"},{code:"fit",type:"(response: any) => any",default:"-",desc:"\u5f02\u6b65\u6570\u636e\u7ed3\u679c\u5904\u7406\uff0c\u5f53**dataType**\u5c5e\u6027\u4e3a url\u65f6\u751f\u6548"},{code:"beforeSearch",type:"(params: Record<string, string>) => Record<string, string>",default:"-",desc:"\u641c\u7d22\u4eba\u5458\uff0c\u53d1\u9001\u8bf7\u6c42\u524d\uff0c\u53ef\u4ee5\u901a\u8fc7\u6b64\u51fd\u6570\u5904\u7406\u53c2\u6570\uff0c\u5f53**dataType**\u5c5e\u6027\u4e3a url\u65f6\u751f\u6548"},{code:"url",type:"string",default:"-",desc:"\u4eba\u5458\u4fe1\u606f\u5f02\u6b65\u63a5\u53e3\u5730\u5740\uff0c\u5f53**dataType**\u5c5e\u6027\u4e3a url\u65f6\u751f\u6548"},{code:"dataType",type:"'url' | 'dataSource'",default:"'url'",desc:"\u6570\u636e\u7c7b\u578b\uff0curl\uff1a\u63a5\u53e3\u8bf7\u6c42\u3001DataSource\uff1a\u6570\u636e\u6e90"},{code:"hasClear",type:"boolean",default:"true",desc:"\u663e\u793a\u6e05\u9664\u6309\u94ae"},{code:"placeholder",type:"string",default:"'\u8bf7\u9009\u62e9'",desc:"\u4eba\u5458\u641c\u7d22\u6846\u5360\u4f4d\u63d0\u793a"},{code:"value",type:"any[]",default:"-",desc:"\u5f53\u524d\u7ec4\u4ef6\u9ed8\u8ba4\u503c"},{code:"emplIdInLabel",type:"boolean",default:"true",desc:"\u662f\u5426\u5c06\u5de5\u53f7\u663e\u793a\u5728\u9009\u4e2d\u7ed3\u679c\u4e2d"},{code:"fetchDataOnMount",type:"boolean",default:"true",desc:"\u662f\u5426\u5728\u9875\u9762\u52a0\u8f7d\u540e\u81ea\u52a8\u8bf7\u6c42\u63a5\u53e3"},{code:"hiddenSelected",type:"boolean",default:"",desc:""},{code:"multiple",type:"boolean",default:"false",desc:"\u5f00\u542f\u591a\u9009\u6a21\u5f0f"},{code:"orderNum",type:"string",default:"",desc:'"\u4e3a 0 \u65f6\u4e3a\u9009\u4eba\u6a21\u5f0f\uff08\u4ec5\u5c55\u793a\u4e3b\u5c97\u4fe1\u606f\uff09\uff0c\u975e 0 \u4e3a\u9009\u5c97\u6a21\u5f0f\uff08\u900f\u51fa\u591a\u4e2a\u517c\u5c97\u4fe1\u606f\uff09"'},{code:"renderOption",type:"(option: any) => string",default:"-",desc:"\u81ea\u5b9a\u4e49\u9009\u9879\u6e32\u67d3\u5b57\u6bb5"},{code:"renderSelection",type:"(option: any) => string",default:"-",desc:"\u81ea\u5b9a\u4e49\u9009\u4e2d\u540e\u7684\u6e32\u67d3\u5b57\u6bb5"},{code:"searchDelay",type:"number",default:"100",desc:"\u641c\u7d22\u5ef6\u65f6\uff0c\u5355\u4f4dms"},{code:"showSub",type:"boolean",default:"false",desc:"\u663e\u793a\u4e0b\u5c5e"},{code:"showAvater",type:"boolean",default:"true",desc:"\u662f\u5426\u5728\u9009\u62e9\u6d6e\u7a97\u4e2d\u663e\u793a\u5934\u50cf"},{code:"showDeptDesc",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u90e8\u95e8\u63cf\u8ff0"},{code:"showEmplId",type:"boolean",default:"false",desc:"\u4eba\u5458\u641c\u7d22\u6846\u663e\u793a\u5de5\u53f7"},{code:"showJobDesc",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u804c\u4f4d\u63cf\u8ff0"},{code:"hasOrderNum",type:"boolean",default:"",desc:"\u663e\u793a\u4e3b\u517c\u804c"},{code:"showAllSub",type:"boolean",default:"",desc:"\u663e\u793a\u5168\u5458"},{code:"dataSource",type:"any[]",default:"-",desc:"\u4eba\u5458\u6570\u636e\uff0c\u5f53**dataType** \u4e3a dataSource \u65f6\u751f\u6548"}],mdxType:"AttrTable"}))}y.isMDXComponent=!0}}]);