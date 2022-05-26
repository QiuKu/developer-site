"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[1155],{10895:function(e,t,o){o.d(t,{Z:function(){return s}});var n=o(49873),d=o(59301),i=o(91902),a=o(10161),r=o(59358),c=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}];o(58354);var s=function(e){var t=e.category,o=e.dataSource,s=(0,i.Z)().siteConfig,l=function(e){return e.replace(/\[(.*)\]\(\/docs\/(.*)\)/g,(function(e,t,o){return"["+t+"]("+s.baseUrl+"docs/"+o+")"}))},p=[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return d.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return d.createElement(a.D,{children:l(e),remarkPlugins:[r.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return d.createElement(a.D,{children:l(e),remarkPlugins:[r.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?d.createElement(a.D,{children:l(e),remarkPlugins:[r.Z]}):d.createElement("div",null," - ")}}],u=("form"===t?[].concat(c,o||[]):[].concat(o||[])).sort((function(e,t){return e.code<t.code?-1:1}));return d.createElement(n.Z,{className:"attr-table",dataSource:u,pagination:!1,columns:p})}},84969:function(e,t,o){o.d(t,{Z:function(){return a}});var n=o(96178),d=o(59301),i=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var o=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(o,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var o;return(o=e.call(this,t)||this).createRecevier=function(){o.destroyRecevier(),o.recevier=new i,o.recevier.on("updateHeight",(function(e,t,n){o.iframe&&n===o.iframe.contentWindow&&(o.container.style.height=(e.msg||0)+"px",o.props.onUpdateHeight&&o.props.onUpdateHeight(e.msg||"#"))}))},o.destroyRecevier=function(){o.recevier&&(o.recevier.destroy(),o.recevier=null)},o.container=null,o.iframe=null,o}(0,n.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},o.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},o.componentWillUnmount=function(){this.destroyRecevier()},o.render=function(){var e=this,t=this.props,o=t.className,n=t.id,i=t.style,a=t.url;return a?d.createElement("div",{className:"bg-iframe "+o,id:n,style:Object.assign({height:400,width:"100%"},i),ref:function(t){e.container=t}},d.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):d.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(d.PureComponent);a.displayName="bg-iframe"},69202:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var n=o(47145),d=o(24736),i=(o(59301),o(99278)),a=o(84969),r=o(10895),c=["components"],s={title:"ImageField \u4e0a\u4f20\u56fe\u7247",order:8},l="ImageField \u4e0a\u4f20\u56fe\u7247",p={unversionedId:"components/form/imageField",id:"components/form/imageField",title:"ImageField \u4e0a\u4f20\u56fe\u7247",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/imageField.mdx",sourceDirName:"components/form",slug:"/components/form/imageField",permalink:"/developer-site/docs/components/form/imageField",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/form/imageField.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"ImageField \u4e0a\u4f20\u56fe\u7247",order:8},sidebar:"components",previous:{title:"CascadeDateField \u65e5\u671f\u533a\u95f4",permalink:"/developer-site/docs/components/form/cascadeDateField"},next:{title:"AttachmentField \u4e0a\u4f20\u9644\u4ef6",permalink:"/developer-site/docs/components/form/attachmentField"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function y(e){var t=e.components,o=(0,d.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"imagefield-\u4e0a\u4f20\u56fe\u7247"},"ImageField \u4e0a\u4f20\u56fe\u7247"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8fdb\u884c\u56fe\u7247\u7d20\u6750\u4e0a\u4f20\u5e76\u63d0\u4ea4\u573a\u666f\uff1b")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(a.Z,{url:"https://www.aliwork.com/developer/image-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(r.Z,{category:"form",dataSource:[{code:"value",type:"array",default:"-",desc:"\u9ed8\u8ba4\u503c"},{code:"type",type:"'normal' | 'drag' | 'card'",default:"'normal'",desc:"\u8bbe\u7f6e\u4e0a\u4f20\u7c7b\u578b\uff0c\u4ec5 PC \u7aef\u6709\u6548"},{code:"normalListType",type:"'text' | 'image'",default:"'image'",desc:"\u8bbe\u7f6e\u5217\u8868\u6837\u5f0f"},{code:"buttonText",type:"string",default:"'\u4e0a\u4f20\u6587\u4ef6'",desc:"\u8bbe\u7f6e\u6309\u94ae\u5185\u5bb9\uff0c\u4ec5 PC \u7aef\u6709\u6548"},{code:"customUploadPane",type:"() => ReactNode",default:"-",desc:"\u5b9a\u5236\u9762\u677f"},{code:"buttonSize",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"\u4e0a\u4f20\u6309\u94ae\u5c3a\u5bf8"},{code:"buttonType",type:"'primary' | 'secondary' | 'normal'",default:"'primary'",desc:"\u4e0a\u4f20\u6309\u94ae\u7c7b\u578b"},{code:"onlyCameraUpload",type:"boolean",default:"false",desc:"\u4ec5\u5141\u8bb8\u62cd\u7167\u4e0a\u4f20\uff0c\u8be5\u529f\u80fd\u76ee\u524d\u4ec5\u652f\u6301\u9489\u9489\u624b\u673a\u7aef\uff0c\u5f00\u542f\u540e\u300c\u975e\u9489\u9489\u624b\u673a\u7aef\u300d\u4f1a\u81ea\u52a8\u7981\u7528\u4e0a\u4f20\u529f\u80fd\u3002"},{code:"multiple",type:"boolean",default:"true",desc:"\u662f\u5426\u652f\u6301\u4e0a\u4f20\u591a\u4e2a\u56fe\u7247"},{code:"timeout",type:"number",default:"0",desc:"\u8bbe\u7f6e\u4e0a\u4f20\u8d85\u65f6\uff0c\u5355\u4f4d ms"},{code:"name",type:"string",default:"-",desc:"\u4e0a\u4f20\u65f6\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u7684 name"},{code:"data",type:"object",default:"{}",desc:"\u8bbe\u7f6e\u4e0a\u4f20\u53ef\u9644\u5e26\u7684\u989d\u5916\u53c2\u6570"},{code:"beforeUpload",type:"(file: object, options: object) => void",default:"-",desc:"\u4e0a\u4f20\u524d\u5904\u7406\u4e8b\u4ef6"},{code:"formatter",type:"(response: any) => any",default:"-",desc:"\u6570\u636e\u5904\u7406\u4e8b\u4ef6"},{code:"limit",type:"number",default:"9",desc:"\u8bbe\u7f6e\u6700\u5927\u4e0a\u4f20\u6587\u4ef6\u4e2a\u6570"},{code:"maxFileSize",type:"number",default:"50",desc:"\u8bbe\u7f6e\u5355\u6587\u4ef6\u6700\u5927\u4e0a\u4f20\u5927\u5c0f(MB)"},{code:"withCredentials",type:"boolean",default:"false",desc:"\u8bbe\u7f6e\u662f\u5426\u5141\u8bb8\u8bf7\u6c42\u643a\u5e26 cookie"},{code:"autoUpload",type:"boolean",default:"true",desc:"\u662f\u5426\u81ea\u52a8\u4e0a\u4f20\uff0c\u5173\u95ed\u540e\uff0c\u9700\u8981\u624b\u52a8\u8c03\u7528 this.$('fieldId').startUpload() \u5f00\u59cb\u4e0a\u4f20"},{code:"accept",type:"string",default:"'image/*'",desc:"\u8bbe\u7f6e\u4e0a\u4f20\u56fe\u7247\u7c7b\u578b(\u591a\u4e2a\u4ee5\u82f1\u6587\u9017\u53f7,\u5206\u9694)"},{code:"onChange",type:"({ value: object }) => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6"},{code:"onProgress",type:"() => void",default:"-",desc:"\u7ec4\u4ef6\u4e0a\u4f20\u4e2d\u4e8b\u4ef6"},{code:"onSuccess",type:"(file: object, value: array) => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u4e0a\u4f20\u6210\u529f\u4e8b\u4ef6"},{code:"onError",type:"(file: object, value: array) => void",default:"",desc:"\u7ec4\u4ef6\u503c\u4e0a\u4f20\u5931\u8d25\u4e8b\u4ef6"},{code:"onSelect",type:"(file: object) => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u9009\u62e9\u7684\u4e8b\u4ef6"},{code:"onRemove",type:"(file: object) => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u70b9\u51fb\u79fb\u9664\u7684\u4e8b\u4ef6"},{code:"onCancel",type:"() => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u70b9\u51fb\u53d6\u6d88\u4e0a\u4f20\u7684\u4e8b\u4ef6"},{code:"onDragOver",type:"() => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u62d6\u62fd\u7ecf\u8fc7\u7684\u4e8b\u4ef6"},{code:"onDragLeave",type:"() => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u62d6\u62fd\u79bb\u5f00\u7684\u4e8b\u4ef6"},{code:"onDrop",type:"() => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u62d6\u62fd\u5b8c\u6210\u7684\u4e8b\u4ef6"}],mdxType:"AttrTable"}))}y.isMDXComponent=!0}}]);