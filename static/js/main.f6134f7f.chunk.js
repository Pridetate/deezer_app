(this.webpackJsonpdeezerapp=this.webpackJsonpdeezerapp||[]).push([[0],{101:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(27),i=n.n(r),s=(n(101),n(13)),o=n(176),l=n(178),j=n(179),d=n(177),h=n(172),x=n(2),b=function(){return Object(x.jsx)(o.a,{position:"static",children:Object(x.jsx)(d.a,{maxWidth:"xl",children:Object(x.jsx)(l.a,{disableGutters:!0,children:Object(x.jsxs)(h.a,{container:!0,spacing:2,children:[Object(x.jsx)(h.a,{item:!0,xs:4}),Object(x.jsx)(h.a,{item:!0,xs:4,children:Object(x.jsx)(j.a,{title:"header",className:"header",variant:"h6",component:"div",children:"Deezer"})}),Object(x.jsx)(h.a,{item:!0,xs:4})]})})})})},u=n(180),p=n(182),O=n(181),m=n(184),f=n(165),g=n(29),v=n.n(g),y=n(43),w=n(164),k=n(173),C=n(175),S=n(168),z=Object(S.a)((function(e){return{dialogPaper:{height:"800px"}}})),A=function(e){var t=e.open,n=e.onClose,a=e.data,r=z(),i=Object(c.useState)([]),o=Object(s.a)(i,2),l=o[0],d=o[1],b=Object(c.useState)([]),f=Object(s.a)(b,2),g=f[0],S=f[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.album.id.toString(),n=fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+t,{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}),e.next=5,n;case 5:return e.next=7,e.sent.json();case 7:c=e.sent,console.log(c),S(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.artist.tracklist,n=t.substring(0,t.length-2)+"5",e.prev=2,c=fetch("https://cors-anywhere.herokuapp.com/"+n,{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}),e.next=6,c;case 6:return e.next=8,e.sent.json();case 8:r=e.sent,d(r.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();a&&t(),a&&e()}),[a]),Object(x.jsxs)(k.a,{open:t,onClose:n,fullWidth:!0,maxWidth:"lg","aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",classes:{paper:r.dialogPaper},children:[" ",Object(x.jsxs)(h.a,{container:!0,spacing:2,children:[Object(x.jsx)(h.a,{item:!0,xs:4}),Object(x.jsx)(h.a,{item:!0,xs:4,children:Object(x.jsx)("div",{style:{justifyContent:"center",alignItems:"center"},children:Object(x.jsx)(j.a,{style:{color:"black",fontSize:25},children:"Artist Details"})})}),Object(x.jsx)(h.a,{item:!0,xs:4})]}),Object(x.jsx)("div",{style:{width:"80%",marginLeft:"10%",marginBottom:20},children:Object(x.jsxs)(h.a,{container:!0,spacing:2,mt:2,children:[Object(x.jsxs)(h.a,{item:!0,xs:8,md:8,children:[Object(x.jsx)(j.a,{gutterBottom:!0,variant:"h6",component:"div",style:{color:"blue",fontSize:"bold"}}),Object(x.jsx)(u.a,{sx:{maxWidth:345},children:a?Object(x.jsxs)(m.a,{children:[Object(x.jsx)(O.a,{component:"img",height:"180",image:a.artist.picture,alt:"green iguana"}),Object(x.jsx)(p.a,{})]}):null})]}),Object(x.jsxs)(h.a,{item:!0,xs:4,children:[Object(x.jsx)(j.a,{gutterBottom:!0,variant:"h6",component:"div",style:{color:"blue",fontSize:"bold"},children:"Top Tracks"}),l&&l.map((function(e,t){return Object(x.jsxs)(w.a,{style:{justifyContent:"space-between",display:"flex",flexDirection:"row"},children:[Object(x.jsxs)(w.a,{style:{justifyContent:"left",display:"flex",flexDirection:"row"},children:[Object(x.jsxs)(j.a,{gutterBottom:!0,variant:"h6",component:"div",children:[t+1,"."]}),Object(x.jsx)(j.a,{variant:"h6",children:e.title})]}),Object(x.jsx)(j.a,{variant:"h6",color:"text.secondary",children:e.duration})]},e.id)}))]}),Object(x.jsx)(h.a,{container:!0,spacing:2,children:Object(x.jsx)(h.a,{item:!0,xs:12,children:Object(x.jsx)(j.a,{style:{color:"blue",fontSize:20},children:"Albums"})})}),Object(x.jsx)(h.a,{container:!0,spacing:2,children:l&&l.map((function(e,t){return Object(x.jsx)(h.a,{item:!0,xs:12,md:2,children:Object(x.jsx)(u.a,{sx:{maxWidth:400},children:Object(x.jsxs)(m.a,{children:[Object(x.jsx)(O.a,{component:"img",height:"140",image:e.album.cover,alt:"green iguana"}),Object(x.jsx)(p.a,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(j.a,{gutterBottom:!0,variant:"h6",component:"div",style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.album.title}),Object(x.jsx)(j.a,{variant:"body2",color:"text.secondary",children:g&&g.release_date?g.release_date.substring(0,4):"no date"})]})})]})})},e.id)}))})]})}),Object(x.jsx)(C.a,{onClick:n,style:{color:"blue",fontSize:25},mt:5,children:"Close"})]})},B=function(e){var t=e.item,n=Object(c.useState)(!1),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){}),[t]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{sx:{maxWidth:345},onClick:function(){i(!0)},children:t?Object(x.jsxs)(m.a,{children:[Object(x.jsx)(O.a,{component:"img",height:"140",image:t.artist.picture,alt:"green iguana"}),Object(x.jsxs)(p.a,{children:[Object(x.jsxs)(f.a,{style:{justifyContent:"space-between",display:"flex",flexDirection:"row"},children:[Object(x.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Artist"}),Object(x.jsx)(j.a,{variant:"body2",color:"text.secondary",style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.artist.name})]}),Object(x.jsxs)(f.a,{style:{justifyContent:"space-between",display:"flex",flexDirection:"row"},children:[Object(x.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Fans"}),Object(x.jsx)(j.a,{variant:"body2",color:"text.secondary",children:t.rank>1e3?t.rank.toString().substring(0,t.rank.toString().length-3)+"K":t.rank})]})]})]}):null}),Object(x.jsx)(A,{open:r,onClose:function(){i(!1)},data:t})]})},D=n(167),T=n(81),W=n.n(T),F=n(185),P=Object(c.createContext)({}),I=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useContext)(P).setArtist,i=function(){var e=Object(y.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+n,{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}),e.next=4,t;case 4:return e.next=6,e.sent.json();case 6:c=e.sent,r(c.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){}),[]),Object(x.jsx)("div",{children:Object(x.jsx)(D.a,{id:"filled-search",label:"Search artist",type:"search",variant:"outlined",placeholder:"type artist and click search icon",value:n,onChange:function(e){a(e.target.value)},fullWidth:!0,InputProps:{startAdornment:Object(x.jsx)(F.a,{position:"start",children:Object(x.jsx)(W.a,{style:{cursor:"pointer"},onClick:i})})}})})};var E=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)(P.Provider,{value:{artist:n,setArtist:a},children:[Object(x.jsx)(h.a,{container:!0,spacing:2,children:Object(x.jsx)(h.a,{item:!0,xs:12,children:Object(x.jsx)(b,{})})}),Object(x.jsxs)("div",{style:{width:"80%",marginLeft:"10%",justifyContent:"center",alignItems:"center"},children:[Object(x.jsxs)(h.a,{container:!0,spacing:2,mt:1,children:[Object(x.jsx)(h.a,{item:!0,xs:8,md:8,children:Object(x.jsx)(I,{})}),Object(x.jsx)(h.a,{item:!0,xs:2,md:8}),Object(x.jsx)(h.a,{item:!0,xs:1})]}),Object(x.jsx)(h.a,{container:!0,spacing:2,mt:1,children:n&&n.length>0?n.slice(0,5).map((function(e){return Object(x.jsx)(h.a,{item:!0,xs:12,md:2,children:Object(x.jsx)(B,{item:e})})})):null})]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root")),L()}},[[111,1,2]]]);
//# sourceMappingURL=main.f6134f7f.chunk.js.map