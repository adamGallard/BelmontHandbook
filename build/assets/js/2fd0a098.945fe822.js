(self.webpackChunkbelmont_handbook=self.webpackChunkbelmont_handbook||[]).push([[8791],{64693:(s,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>b,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>g,toc:()=>v});var n=t(74848),a=t(28453),r=t(96540),l=t(47300),i=t(42512),o=t(95093),j=t.n(o),c=t(42503);const d=s=>{let{event:e}=s;return(0,n.jsxs)("div",{children:[e.title,(0,n.jsx)(c.m_,{anchorSelect:`#${e.title}`,place:"top",content:e.description})]})},m=(0,i.ye)(j());function p(){const[s,e]=(0,r.useState)([]);(0,r.useEffect)((()=>{fetch("https://events.terrain.scouts.com.au/calendar-feeds/daeccdb1-3466-33cd-b6c0-a03a34644a90/47af5873-2823-43b1-a1f7-b058aba47a41").then((s=>s.text())).then((s=>{const t=l.A.parse(s),n=new l.A.Component(t).getAllSubcomponents("vevent");e(n.map((s=>{const e=s.getFirstPropertyValue("summary"),t=s.getFirstPropertyValue("description"),n=s.getFirstPropertyValue("dtstart").toJSDate(),a=s.getFirstPropertyValue("dtend").toJSDate();let r="";t.includes("Event owner: Belmont Joeys")?r="joeys":t.includes("Event owner: Belmont Cubs")?r="cubs":t.includes("Event owner: Belmont Scouts")?r="scouts":t.includes("Event owner: Belmont Venturers")&&(r="venturers");let l="";switch(r){case"joeys":l="#b65518";break;case"cubs":l="#ffc82e";break;case"scouts":l="#00ae42";break;case"venturers":l="#9e1b32";break;default:l="#00664a"}return{title:`${e} (${j()(n).format("h:mm A")} - ${j()(a).format("h:mm A")})`,start:n,end:a,allDay:!1,color:l,textColor:"cubs"===r?"black":"white",description:t}})))}))}),[]);return(0,n.jsx)("div",{children:(0,n.jsx)(i.Vv,{localizer:m,events:s,startAccessor:"start",endAccessor:"end",style:{height:600},eventPropGetter:s=>({style:{backgroundColor:s.color,borderRadius:"5px",opacity:.8,color:s.textColor,border:"0px",display:"block",padding:"5px"}}),components:{event:d}})})}const u={id:"calendar",title:"Calendar",sidebar_position:5},h="Belmont Scouts Calendar",g={id:"events-planning/calendar",title:"Calendar",description:"Stay up to date with all upcoming events, meetings, camps, and activities. Below is our live calendar feed from Terrain.",source:"@site/docs/events-planning/calendar.md",sourceDirName:"events-planning",slug:"/events-planning/calendar",permalink:"/BelmontHandbook/docs/events-planning/calendar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/events-planning/calendar.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"calendar",title:"Calendar",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Events & Planning",permalink:"/BelmontHandbook/docs/category/events--planning"},next:{title:"Special Events & Camps",permalink:"/BelmontHandbook/docs/events-planning/special-events-camps"}},b={},v=[];function x(s){const e={h1:"h1",header:"header",p:"p",...(0,a.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"belmont-scouts-calendar",children:"Belmont Scouts Calendar"})}),"\n",(0,n.jsx)(e.p,{children:"Stay up to date with all upcoming events, meetings, camps, and activities. Below is our live calendar feed from Terrain."}),"\n",(0,n.jsx)(p,{}),"\n",(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:"20px"},children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"15px"},children:[(0,n.jsx)("div",{style:{width:"20px",height:"20px",backgroundColor:"#b65518",marginRight:"5px"}}),(0,n.jsx)("span",{children:"Belmont Joeys"})]}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"15px"},children:[(0,n.jsx)("div",{style:{width:"20px",height:"20px",backgroundColor:"#ffc82e",marginRight:"5px"}}),(0,n.jsx)("span",{children:"Belmont Cubs"})]}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"15px"},children:[(0,n.jsx)("div",{style:{width:"20px",height:"20px",backgroundColor:"#00ae42",marginRight:"5px"}}),(0,n.jsx)("span",{children:"Belmont Scouts"})]}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"15px"},children:[(0,n.jsx)("div",{style:{width:"20px",height:"20px",backgroundColor:"#9e1b32",marginRight:"5px"}}),(0,n.jsx)("span",{children:"Belmont Venturers"})]}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)("div",{style:{width:"20px",height:"20px",backgroundColor:"#00664a",marginRight:"5px"}}),(0,n.jsx)("span",{children:"Belmont Scout Group (General)"})]})]})]})}function k(s={}){const{wrapper:e}={...(0,a.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(x,{...s})}):x(s)}},35358:(s,e,t)=>{var n={"./af":25177,"./af.js":25177,"./ar":61509,"./ar-dz":41488,"./ar-dz.js":41488,"./ar-kw":58676,"./ar-kw.js":58676,"./ar-ly":42353,"./ar-ly.js":42353,"./ar-ma":24496,"./ar-ma.js":24496,"./ar-ps":6947,"./ar-ps.js":6947,"./ar-sa":82682,"./ar-sa.js":82682,"./ar-tn":89756,"./ar-tn.js":89756,"./ar.js":61509,"./az":95533,"./az.js":95533,"./be":28959,"./be.js":28959,"./bg":47777,"./bg.js":47777,"./bm":54903,"./bm.js":54903,"./bn":61290,"./bn-bd":17357,"./bn-bd.js":17357,"./bn.js":61290,"./bo":31545,"./bo.js":31545,"./br":11470,"./br.js":11470,"./bs":44429,"./bs.js":44429,"./ca":7306,"./ca.js":7306,"./cs":56464,"./cs.js":56464,"./cv":73635,"./cv.js":73635,"./cy":64226,"./cy.js":64226,"./da":93601,"./da.js":93601,"./de":77853,"./de-at":26111,"./de-at.js":26111,"./de-ch":54697,"./de-ch.js":54697,"./de.js":77853,"./dv":60708,"./dv.js":60708,"./el":54691,"./el.js":54691,"./en-au":53872,"./en-au.js":53872,"./en-ca":28298,"./en-ca.js":28298,"./en-gb":56195,"./en-gb.js":56195,"./en-ie":66584,"./en-ie.js":66584,"./en-il":65543,"./en-il.js":65543,"./en-in":9033,"./en-in.js":9033,"./en-nz":79402,"./en-nz.js":79402,"./en-sg":43004,"./en-sg.js":43004,"./eo":32934,"./eo.js":32934,"./es":97650,"./es-do":20838,"./es-do.js":20838,"./es-mx":17730,"./es-mx.js":17730,"./es-us":56575,"./es-us.js":56575,"./es.js":97650,"./et":3035,"./et.js":3035,"./eu":3508,"./eu.js":3508,"./fa":119,"./fa.js":119,"./fi":90527,"./fi.js":90527,"./fil":95995,"./fil.js":95995,"./fo":52477,"./fo.js":52477,"./fr":85498,"./fr-ca":26435,"./fr-ca.js":26435,"./fr-ch":37892,"./fr-ch.js":37892,"./fr.js":85498,"./fy":37071,"./fy.js":37071,"./ga":41734,"./ga.js":41734,"./gd":70217,"./gd.js":70217,"./gl":77329,"./gl.js":77329,"./gom-deva":32124,"./gom-deva.js":32124,"./gom-latn":93383,"./gom-latn.js":93383,"./gu":95050,"./gu.js":95050,"./he":11713,"./he.js":11713,"./hi":43861,"./hi.js":43861,"./hr":26308,"./hr.js":26308,"./hu":90609,"./hu.js":90609,"./hy-am":17160,"./hy-am.js":17160,"./id":74063,"./id.js":74063,"./is":89374,"./is.js":89374,"./it":88383,"./it-ch":21827,"./it-ch.js":21827,"./it.js":88383,"./ja":23827,"./ja.js":23827,"./jv":89722,"./jv.js":89722,"./ka":41794,"./ka.js":41794,"./kk":27088,"./kk.js":27088,"./km":96870,"./km.js":96870,"./kn":84451,"./kn.js":84451,"./ko":63164,"./ko.js":63164,"./ku":98174,"./ku-kmr":6181,"./ku-kmr.js":6181,"./ku.js":98174,"./ky":78474,"./ky.js":78474,"./lb":79680,"./lb.js":79680,"./lo":15867,"./lo.js":15867,"./lt":45766,"./lt.js":45766,"./lv":69532,"./lv.js":69532,"./me":58076,"./me.js":58076,"./mi":41848,"./mi.js":41848,"./mk":30306,"./mk.js":30306,"./ml":73739,"./ml.js":73739,"./mn":99053,"./mn.js":99053,"./mr":86169,"./mr.js":86169,"./ms":73386,"./ms-my":92297,"./ms-my.js":92297,"./ms.js":73386,"./mt":77075,"./mt.js":77075,"./my":72264,"./my.js":72264,"./nb":22274,"./nb.js":22274,"./ne":8235,"./ne.js":8235,"./nl":92572,"./nl-be":43784,"./nl-be.js":43784,"./nl.js":92572,"./nn":54566,"./nn.js":54566,"./oc-lnc":69330,"./oc-lnc.js":69330,"./pa-in":29849,"./pa-in.js":29849,"./pl":94418,"./pl.js":94418,"./pt":79834,"./pt-br":48303,"./pt-br.js":48303,"./pt.js":79834,"./ro":24457,"./ro.js":24457,"./ru":82271,"./ru.js":82271,"./sd":1221,"./sd.js":1221,"./se":33478,"./se.js":33478,"./si":17538,"./si.js":17538,"./sk":5784,"./sk.js":5784,"./sl":46637,"./sl.js":46637,"./sq":86794,"./sq.js":86794,"./sr":45719,"./sr-cyrl":3322,"./sr-cyrl.js":3322,"./sr.js":45719,"./ss":56e3,"./ss.js":56e3,"./sv":41011,"./sv.js":41011,"./sw":40748,"./sw.js":40748,"./ta":11025,"./ta.js":11025,"./te":11885,"./te.js":11885,"./tet":28861,"./tet.js":28861,"./tg":86571,"./tg.js":86571,"./th":55802,"./th.js":55802,"./tk":59527,"./tk.js":59527,"./tl-ph":29231,"./tl-ph.js":29231,"./tlh":31052,"./tlh.js":31052,"./tr":85096,"./tr.js":85096,"./tzl":79846,"./tzl.js":79846,"./tzm":81765,"./tzm-latn":97711,"./tzm-latn.js":97711,"./tzm.js":81765,"./ug-cn":48414,"./ug-cn.js":48414,"./uk":16618,"./uk.js":16618,"./ur":57777,"./ur.js":57777,"./uz":57609,"./uz-latn":72475,"./uz-latn.js":72475,"./uz.js":57609,"./vi":21135,"./vi.js":21135,"./x-pseudo":64051,"./x-pseudo.js":64051,"./yo":82218,"./yo.js":82218,"./zh-cn":52648,"./zh-cn.js":52648,"./zh-hk":1632,"./zh-hk.js":1632,"./zh-mo":31541,"./zh-mo.js":31541,"./zh-tw":50304,"./zh-tw.js":50304};function a(s){var e=r(s);return t(e)}function r(s){if(!t.o(n,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return n[s]}a.keys=function(){return Object.keys(n)},a.resolve=r,s.exports=a,a.id=35358}}]);