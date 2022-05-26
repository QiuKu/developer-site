"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[2712],{10895:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(49873),o=n(59301),r=n(91902),d=n(10161),a=n(59358),s=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}];n(58354);var c=function(e){var t=e.category,n=e.dataSource,c=(0,r.Z)().siteConfig,l=function(e){return e.replace(/\[(.*)\]\(\/docs\/(.*)\)/g,(function(e,t,n){return"["+t+"]("+c.baseUrl+"docs/"+n+")"}))},p=[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return o.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return o.createElement(d.D,{children:l(e),remarkPlugins:[a.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return o.createElement(d.D,{children:l(e),remarkPlugins:[a.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?o.createElement(d.D,{children:l(e),remarkPlugins:[a.Z]}):o.createElement("div",null," - ")}}],u=("form"===t?[].concat(s,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return o.createElement(i.Z,{className:"attr-table",dataSource:u,pagination:!1,columns:p})}},84969:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(96178),o=n(59301),r=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new r,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,r=t.style,d=t.url;return d?o.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:400,width:"100%"},r),ref:function(t){e.container=t}},o.createElement("iframe",{src:d,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);d.displayName="bg-iframe"},48969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var i=n(47145),o=n(24736),r=(n(59301),n(99278)),d=n(84969),a=n(10895),s=["components"],c={title:"RadioField \u5355\u9009",order:2},l="RadioField \u5355\u9009",p={unversionedId:"components/form/radioField",id:"components/form/radioField",title:"RadioField \u5355\u9009",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/radioField.mdx",sourceDirName:"components/form",slug:"/components/form/radioField",permalink:"/developer-site/docs/components/form/radioField",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/form/radioField.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"RadioField \u5355\u9009",order:2},sidebar:"components",previous:{title:"NumberField \u6570\u5b57\u8f93\u5165\u6846",permalink:"/developer-site/docs/components/form/numberField"},next:{title:"SelectField \u4e0b\u62c9\u9009\u62e9",permalink:"/developer-site/docs/components/form/selectField"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"radiofield-\u5355\u9009"},"RadioField \u5355\u9009"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u9009\u6846\u5141\u8bb8\u7528\u6237\u4ece\u4e00\u4e2a\u6570\u636e\u96c6\u4e2d\u9009\u62e9\u5355\u4e2a\u9009\u9879\u3002\u9762\u5411\u7528\u6237\u9700\u8981\u5e76\u6392\u770b\u5230\u6240\u6709\u7684\u53ef\u9009\u9879\uff0c\u5e76\u4f7f\u7528\u5355\u9009\u6846\u8fdb\u884c\u6392\u4ed6\u64cd\u4f5c\u7684\u573a\u666f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u9009\u9879\u8fc7\u591a\u7684\u573a\u666f\uff0c\u8003\u8651\u4f7f\u7528\u4e0b\u62c9\u5217\u8868\uff0c\u76f8\u5bf9\u4e8e\u663e\u793a\u6240\u6709\u7684\u9009\u9879\u5360\u7528\u66f4\u5c11\u7684\u7a7a\u95f4\u3002")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,r.kt)(d.Z,{url:"https://www.aliwork.com/developer/radio-v2?isRenderNav=false",mdxType:"Iframe"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)(a.Z,{category:"form",dataSource:[{code:"value",type:"string",default:"'\u9009\u9879\u4e00'",desc:"\u9ed8\u8ba4\u503c"},{code:"shape",type:"'default' | 'button'",default:"'default'",desc:"\u5c55\u793a\u5f62\u72b6"},{code:"itemDirection",type:"'hoz' | 'ver'",default:"'hoz'",desc:"PC\u7aef\u9009\u9879\u6392\u5217\u65b9\u5f0f"},{code:"useDrawerInMobile",type:"boolean",default:"false",desc:"\u624b\u673a\u7aef\u6392\u5217\u65b9\u5f0f\uff0c\u4e3atrue\u5219\u76f4\u63a5\u5e73\u94fa\uff0c\u4e3afalse\u5219\u5e95\u90e8\u5f39\u5c42"},{code:"iconPosition",type:"'left' | 'right'",default:"'left'",desc:"\u624b\u673a\u7aefIcon\u4f4d\u7f6e\uff0c\u4ec5\u624b\u673a\u7aef\u751f\u6548"},{code:"dataSource",type:"[DataSource[]](/docs/components/interface#datasource)",default:'~~~json\n[\n  {\n    "text": {\n      "zh_CN": "\u9009\u9879\u4e00",\n      "en_US": "Option 1",\n      "type": "i18n"\n    },\n    "value": "1"\n  },\n  {\n    "text": {\n      "zh_CN": "\u9009\u9879\u4e8c",\n      "en_US": "Option 2",\n      "type": "i18n"\n    },\n    "value": "2"\n  },\n  {\n    "text": {\n      "zh_CN": "\u9009\u9879\u4e09",\n      "en_US": "Option 3",\n      "type": "i18n"\n    },\n    "value": "3"\n  }\n]\n      ',desc:"\u5f85\u9009\u9879"},{code:"supportInverse",type:"boolean",default:"false",desc:"\u662f\u5426\u652f\u6301\u53cd\u9009\uff0c\u518d\u6b21\u70b9\u51fb\u9009\u9879\u53ef\u53d6\u6d88\u9009\u62e9"},{code:"customRender",type:"(item: DataSource) => ReactNode",default:"-",desc:"\u5b9a\u5236\u6e32\u67d3"},{code:"onChange",type:"(value: string) => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);