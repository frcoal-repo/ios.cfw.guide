import{_ as D,i as x,C as L,g as w,r as S,o as a,c as l,a as r,t as u,F as d,k as m,l as h,d as k,w as v,E as g,D as b,b as f}from"./app.67485abd.js";String.prototype.fdn=function(){return this.replace(/ /g,"-").replace(/\//g,"%2F").replace(/ü/g,"u").replace(/²/g,"2").replace(/³/g,"3")};String.prototype.format=function(s){let n=this;for(let c in s)n=n.replace("${"+c+"}",s[c]);return n};const F={data(){return{iPhoneNote:'Note that all "Plus", "Max" and "mini" models of iPhones are functionally identical to the regular models.',fm:x(),isDarkMode:L(),themeLocaleData:w().value.chart.deviceChart.deviceSelection}},computed:{localePathPrefix(){const s=this.fm.lang;return s=="en_US"?"":`/${s}`},deviceArr(){return this.fm.group},released(){let s={};for(const n of this.deviceArr){let c=n.released;c.join()!=""&&(s[n.name]=c.map(p=>{const t=p.split("-"),o=[this.themeLocaleData.dateStyles.yearOnly,this.themeLocaleData.dateStyles.yearAndMonth,this.themeLocaleData.dateStyles.yearMonthAndDay];return new Intl.DateTimeFormat(this.fm.lang.replace(/_/g,"-"),o[t.length-1]).format(new Date(p))}))}return s},infoObj(){let s={soc:this.themeLocaleData.info.soc,arch:this.themeLocaleData.info.arch,latestJailbreakFirmware:this.themeLocaleData.info.latestJailbreakFirmware,latestFw:this.themeLocaleData.info.latestFw},n={};for(const c of this.deviceArr){let p=["soc","arch","latestJailbreakFirmware","latestFw"].map(t=>({type:t,value:c[t]}));n[c.name]=[];for(const t of p)if(t.value&&t.value!=""){let o=s[t.type].format({[t.type]:t.value.slice(0,3).join(", ")});t.value.length>3&&(o+=", ..."),n[c.name].push(o)}}return n}}},P={key:0,class:"custom-container tip"},I={class:"flexWrapper"},M={class:"devHead"},A=["src"],j=["src"],C={class:"flexWrapper flexColumn devInfo"},J={key:0,class:"devInfo infoList",style:{position:"absolute"}},N=["href"],O={key:1,class:"devInfo infoList",style:{position:"absolute"}},T=["href"],V={key:0},B=["href"],G=r("span",{class:"variablePadding"},null,-1),R=r("hr",null,null,-1);function W(s,n,c,p,t,o){const y=S("router-link");return a(),l(d,null,[r("h2",null,u(t.themeLocaleData.requiredReading.title),1),(a(!0),l(d,null,m(t.themeLocaleData.requiredReading.content,e=>(a(),l("p",{key:e},u(e.format({deviceType:t.fm.group[0].type,osStr:t.fm.group[0].latestOsStr})),1))),128)),t.fm.type=="iPhone"?(a(),l("div",P,[r("p",null,u(t.themeLocaleData.iPhoneNotice),1)])):h("",!0),(a(!0),l(d,null,m(o.deviceArr,e=>(a(),l(d,{key:e},[e.hasJailbreaks?(a(!0),l(d,{key:0},m([`${o.localePathPrefix}/get-started/${e.name.fdn()}.html`],_=>(a(),l(d,{key:_},[r("div",I,[r("div",M,[k(y,{to:e.hasJailbreaks?_:"",style:b({color:"inherit",cursor:e.hasJailbreaks?"pointer":"default"})},{default:v(()=>[r("h3",null,u(e.name),1),r("div",{class:g(["flexWrapper","flexImg",e.expanded?"expanded":"small"]),style:{"user-select":"none"}},[r("div",null,[e.img.count>0?(a(!0),l(d,{key:0},m(Math.min(e.img.count,3),i=>(a(),l("img",{key:i,class:g(["devImage",`devImage${i}`,e.expanded?"expanded":"small"]),src:`https://img.appledb.dev/device@preview/${e.img.key}/${i-1}${t.isDarkMode&&e.img.dark?"_dark":""}.webp`},null,10,A))),128)):(a(),l("img",{key:1,class:g(["devImage","devImage0",e.expanded?"expanded":"small"]),src:`/assets/images/logo${t.isDarkMode?"_dark":""}.webp`},null,10,j))])],2)]),_:2},1032,["to","style"])]),r("div",C,[e.expanded?(a(),l("ul",J,[(a(!0),l(d,null,m(o.infoObj[e.name].slice(0,3),i=>(a(),l("li",{key:i},[f(u(i.replace("...",""))+" ",1),i.includes("...")?(a(),l("a",{key:0,href:`https://appledb.dev/device/${e.name.fdn()}`,target:"_blank"},"...",8,N)):h("",!0)]))),128)),r("li",null,[k(y,{to:_},{default:v(()=>[f(u(t.themeLocaleData.info.showMore),1)]),_:2},1032,["to"])])])):(a(),l("ul",O,[(a(!0),l(d,null,m(o.infoObj[e.name].slice(0,1),i=>(a(),l("li",{key:i},[f(u(i.replace("...",""))+" ",1),i.includes("...")?(a(),l("a",{key:0,href:`https://appledb.dev/device/${e.name.fdn()}`,target:"_blank"},"...",8,T)):h("",!0)]))),128)),r("li",null,u(t.themeLocaleData.info.noJailbreaks),1)])),r("ul",{class:"devReleased infoList",style:b({position:"relative",top:e.expanded?"9em":"5.5em"})},[o.released[e.name]?(a(),l("li",V,[f(u(t.themeLocaleData.info.released.format({released:o.released[e.name].slice(0,1).join(", ")})),1),e.released.length>1?(a(),l(d,{key:0},[f(", "),r("a",{href:`https://appledb.dev/device/${e.name.fdn()}`,target:"_blank"},"...",8,B)],64)):h("",!0)])):h("",!0)],4)])]),G,R],64))),128)):h("",!0)],64))),128))],64)}var z=D(F,[["render",W],["__file","deviceGroup.vue"]]);export{z as default};
