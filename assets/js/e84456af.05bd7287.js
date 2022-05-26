"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[4552],{10895:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(49873),r=n(59301),o=n(91902),s=n(10161),c=n(59358),a=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}];n(58354);var d=function(e){var t=e.category,n=e.dataSource,d=(0,o.Z)().siteConfig,l=function(e){return e.replace(/\[(.*)\]\(\/docs\/(.*)\)/g,(function(e,t,n){return"["+t+"]("+d.baseUrl+"docs/"+n+")"}))},p=[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return r.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return r.createElement(s.D,{children:l(e),remarkPlugins:[c.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return r.createElement(s.D,{children:l(e),remarkPlugins:[c.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?r.createElement(s.D,{children:l(e),remarkPlugins:[c.Z]}):r.createElement("div",null," - ")}}],u=("form"===t?[].concat(a,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return r.createElement(i.Z,{className:"attr-table",dataSource:u,pagination:!1,columns:p})}},84969:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(96178),r=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,s=t.url;return s?r.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:s,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);s.displayName="bg-iframe"},23062:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return f}});var i=n(47145),r=n(24736),o=(n(59301),n(99278)),s=n(84969),c=n(10895),a=["components"],d={title:"LinkBlock \u94fe\u63a5\u5757",order:6},l="LinkBlock \u94fe\u63a5\u5757",p={unversionedId:"components/basic/linkBlock",id:"components/basic/linkBlock",title:"LinkBlock \u94fe\u63a5\u5757",description:"\u94fe\u63a5\u5757\u5bb9\u5668\uff0c\u529f\u80fd\u540c\u94fe\u63a5\u7ec4\u4ef6\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u5d4c\u5165\u5176\u4ed6\u5185\u5bb9\uff0c\u4f8b\u5982\u56fe\u7247\u7b49\u3002",source:"@site/docs/components/basic/linkBlock.mdx",sourceDirName:"components/basic",slug:"/components/basic/linkBlock",permalink:"/developer-site/docs/components/basic/linkBlock",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/basic/linkBlock.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"LinkBlock \u94fe\u63a5\u5757",order:6},sidebar:"components",previous:{title:"Link \u94fe\u63a5",permalink:"/developer-site/docs/components/basic/link"},next:{title:"Dialog \u5bf9\u8bdd\u6846",permalink:"/developer-site/docs/components/basic/dialog"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linkblock-\u94fe\u63a5\u5757"},"LinkBlock \u94fe\u63a5\u5757"),(0,o.kt)("p",null,"\u94fe\u63a5\u5757\u5bb9\u5668\uff0c\u529f\u80fd\u540c\u94fe\u63a5\u7ec4\u4ef6\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u5d4c\u5165\u5176\u4ed6\u5185\u5bb9\uff0c\u4f8b\u5982\u56fe\u7247\u7b49\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5207\u6362\u8bbf\u95ee\u5f53\u524d\u5e94\u7528\u7684\u5176\u4ed6\u9875\u9762\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u8df3\u8f6c\u5230\u5916\u90e8\u9875\u9762\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(s.Z,{url:"https://www.aliwork.com/developer/link-block-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(c.Z,{dataSource:[{code:"type",type:"'page' | 'url'",default:"'page'",desc:"\u94fe\u63a5\u7c7b\u578b\uff0cpage\uff1a\u5185\u90e8\u9875\u9762\u3001url\uff1a\u5916\u90e8\u94fe\u63a5"},{code:"url",type:"string",default:"-",desc:"\u94fe\u63a5\u5730\u5740\uff0c\u70b9\u51fb\u94fe\u63a5\u5373\u53ef\u8df3\u8f6c\u5bf9\u5e94\u9875\u9762\uff0c\u5f53 **type** \u5c5e\u6027\u4e3aurl\u65f6\u751f\u6548"},{code:"isBlank",type:"boolean",default:"false",desc:"\u662f\u5426\u65b0\u5f00\u9875\u9762"},{code:"disabled",type:"boolean",default:"false",desc:"\u662f\u5426\u7981\u7528\uff0c\u7981\u7528\u540e\u70b9\u51fb\u94fe\u63a5\u5757\u4e0d\u4f1a\u8fdb\u884c\u9875\u9762\u8df3\u8f6c"},{code:"params",type:"Record<string, string>",default:"-",desc:"url \u67e5\u8be2\u53c2\u6570\uff0c\u591a\u7528\u4e8e\u9875\u9762\u8df3\u8f6c\u4f20\u53c2"},{code:"page",type:"string",default:"-",desc:"\u5185\u90e8\u9875\u9762Uuid\uff0c\u5f53 **type** \u5c5e\u6027\u4e3apage\u65f6\u751f\u6548"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);