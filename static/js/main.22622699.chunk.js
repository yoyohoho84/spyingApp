(this.webpackJsonpspyingapp=this.webpackJsonpspyingapp||[]).push([[0],{169:function(e,t,n){e.exports=n(268)},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return i}));var a=7559432,r=197704164,l="https://sun9-66.userapi.com/w_MnmNc3dh8r1k59e70cf_QSB1njUOxjz9yMRg/LAKFtB0L41A.jpg",c="https://sun9-9.userapi.com/-Mukwo7NvSlTIbbWHZnEVU518ZqecRiHfiEpZw/A8oqlT09iKc.jpg",o="photo-197704164_457239022",i=Number(new URLSearchParams(document.location.search).get("vk_user_id"))},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(35),r=n.n(a),l=n(64),c=n(43),o=n(109),i=n(110),s=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"callMethod",value:function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c,o=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:{},t.next=3,fetch("".concat(e.baseURL,"/").concat(n),{headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(l.a)(Object(l.a)({},a),{},{search:document.location.search})),method:"POST"});case 3:return c=t.sent,t.abrupt("return",c.json());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}();s.baseURL="https://one-digitalspace.ru/spy/rest-api";n(11);var u=n(18),m=n.n(u),f=n(19);function p(e,t,n){switch(e){case"share-link":!function(){var e="https://vk.com/app".concat(f.b,"#").concat(f.f);m.a.send("VKWebAppShare",{link:e})}();break;case"copy-link":!function(e){var t="https://vk.com/app".concat(f.b,"#").concat(f.f);m.a.sendPromise("VKWebAppGetClientVersion").then((function(n){console.log(n.platform),"web"===n.platform||"mobile-web"===n.platform?window.navigator.clipboard.writeText(t).then((function(){console.log("successfully set",t),e("\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430")}),(function(){console.log("write failed",t)})):(m.a.send("VKWebAppCopyText",{text:t}),e("\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430"))})).catch((function(e){console.log("error",e)}))}(t);break;case"story":!function(){var e="https://vk.com/app".concat(f.b,"#").concat(f.f);m.a.sendPromise("VKWebAppShowStoryBox",{background_type:"image",url:f.c,attachment:{text:"go_to",type:"url",url:e}})}();break;case"share-wall":!function(e){e.preventDefault();var t="https://vk.com/app".concat(f.b,"#").concat(f.f),n="".concat(f.d,",https://vk.com/app").concat(f.b,"#").concat(f.f),a="\u0417\u0430\u0445\u043e\u0434\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u0443\u0437\u043d\u0430\u0439, \u043a\u043e\u0433\u043e \u043b\u0430\u0439\u043a\u0430\u0435\u0442 \u0438\u043b\u0438 \u043a\u043e\u043c\u0443 \u043f\u0438\u0448\u0435\u0442 \u0442\u0432\u043e\u044f \u0432\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0430, \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 - ".concat(t);m.a.send("VKWebAppShowWallPostBox",{message:a,attachments:n})}(n)}}n(0),n(40)},263:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);n(170),n(196),n(198),n(199),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238);var a=n(0),r=n.n(a),l=n(96),c=n.n(l),o=n(18),i=n.n(o),s=n(35),u=n.n(s),m=n(43),f=n(11),p=n(2),d=n(39),g=n.n(d),b=n(105),h=n.n(b),E=(n(258),n(106)),v=n.n(E),y=(n(107),n(108),n(259),n(260),n(261),n(262),n(26)),x=function(e){var t=e.id,n=e.fullName,a=e.photoURL,l=e.urlUser,c=e.likes,o=e.activeTab,i=e.type;return r.a.createElement(p.f,{className:"itemShop"},r.a.createElement(r.a.Fragment,null),r.a.createElement("span",{style:{paddingLeft:"15px",color:"white"}},t),r.a.createElement(p.e,{style:{width:"100%",marginLeft:"10px"},before:a?r.a.createElement(p.i,{href:l,target:"_blank"},r.a.createElement(p.c,{src:a})):r.a.createElement(p.c,{src:"https://vk.com/images/camera_200.png"}),description:r.a.createElement(r.a.Fragment,null,"likes"===i?r.a.createElement(p.f,{className:"itemMainTopUsersDescription"},"likes"===o?r.a.createElement(p.f,{className:"itemMainTopUsersLike"},r.a.createElement(p.f,{style:{whiteSpace:"nowrap",color:"white"}},"\u041b\u0430\u0439\u043a\u0438: ",c)):r.a.createElement(p.f,{className:"itemMainTopUsersLike"},r.a.createElement(p.f,{style:{whiteSpace:"nowrap",color:"white"}},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438: 15"))):"")},r.a.createElement(p.f,{style:{display:"flex",justifyContent:"start",alignItems:"center",flexDirection:"row",marginLeft:"10px",color:"white"}},n)))},k=function(e){var t=e.activeTab,n=e.setActiveTab,a=e.tabName,l=e.tabType,c=e.openAlert;return r.a.createElement(p.d,{style:{backgroundColor:t===l?"green":"#184a6e",color:"white",width:"48%"},mode:"commerce",size:"m",onClick:"comments"===l?function(){return c("\u0420\u0430\u0437\u0434\u0435\u043b \u0435\u0449\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435","red")}:function(){return n(l)},stretched:"groups"===l},r.a.createElement("span",{style:{whiteSpace:"hidden-friends"===l?"none":""}}," ",a))},w=function(e){var t=e.targetUserInfo;return r.a.createElement(p.f,{className:"panelHomeResult"},r.a.createElement(C,{fullName:t.generalInfo.fullName,id:t.generalInfo.id,photoURL:t.generalInfo.photoURL,type:"getUserInfo"}),r.a.createElement(p.f,null,"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438: ",t.generalInfo.regDate),r.a.createElement(p.f,null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043e\u043d\u043b\u0430\u0439\u043d: ",t.generalInfo.lastSeen),r.a.createElement(p.f,null,"\u0413\u043e\u0440\u043e\u0434: ",t.generalInfo.city),r.a.createElement(p.f,null,"\u0410\u0443\u0434\u0438\u043e: ",t.generalInfo.audiosCount),r.a.createElement(p.f,null,"\u0424\u043e\u0442\u043e: ",t.generalInfo.photosCount),r.a.createElement(p.f,null,"\u0412\u0438\u0434\u0435\u043e: ",t.generalInfo.videosCount),r.a.createElement(p.f,null,"\u0414\u0440\u0443\u0437\u0435\u0439: ",t.generalInfo.friendsCount),r.a.createElement(p.f,null,"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432: ",t.generalInfo.followersCount))},A=n(111),j=n.n(A),C=function(e){var t=e.id,n=e.fullName,a=e.photoURL,l=e.firstName,c=e.lastName,o=e.city,i=e.age,s=e.type,u=e.openModal,m=e.isProtected,f=e.openAlert,d=(e.referrals,e.getPlatform),g="https://vk.com/id"+t;return r.a.createElement(p.f,{style:{backgroundColor:"#184a6e"}},r.a.createElement(p.e,{style:{width:"100%"},before:a?r.a.createElement(p.i,{href:g,target:"_blank"},r.a.createElement(p.c,{src:a})):r.a.createElement(p.c,{src:"https://vk.com/images/camera_200.png"}),description:"getUserInfo"!==s?r.a.createElement(p.f,{className:"itemMainTopUsersDescription"},"\u0421\u043a\u0440\u044b\u0442\u043e"!==i?r.a.createElement(p.f,{className:"itemMainTopUsersLike"},r.a.createElement(p.f,{style:{whiteSpace:"nowrap",color:"white"}},"\u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",i)):r.a.createElement(r.a.Fragment,null),r.a.createElement(p.f,{className:"itemMainTopUsersLike"},r.a.createElement(p.f,{style:{whiteSpace:"nowrap",color:"white"}},"\u0413\u043e\u0440\u043e\u0434: ",o)),"ios"===d?"":r.a.createElement(p.f,{className:"itemMainTopUsersLike"},r.a.createElement(p.f,null,r.a.createElement(p.d,{before:r.a.createElement(j.a,{fill:"white",width:16,height:16}),style:{backgroundColor:"green",color:"white"},mode:"commerce",size:"m",stretched:!0,onClick:function(){return m?f("\u0417\u0430\u0449\u0438\u0442\u0430 \u0443\u0436\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0430","green"):u("guard")}},m?"\u0417\u0430\u0449\u0438\u0442\u0430 \u0443\u0436\u0435 \u043a\u0443\u043f\u043b\u0435\u043d\u0430":"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430\u0449\u0438\u0442\u0443")))):r.a.createElement(r.a.Fragment,null)},r.a.createElement(p.f,{style:{display:"flex",justifyContent:"start",alignItems:"center",flexDirection:"row",marginLeft:"10px",color:"white"}},n||"".concat(l," ").concat(c))))},O=function(e){var t=e.activeTab,n=e.setActiveTab;e.openAlert;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.f,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row",margin:"10px 0px 10px 0px"}},r.a.createElement(k,{activeTab:t,setActiveTab:n,tabType:"general",tabName:"\u041e\u0431\u0449\u0430\u044f"}),r.a.createElement(k,{activeTab:t,setActiveTab:n,tabType:"likes",tabName:"\u041b\u0430\u0439\u043a\u0430\u044e\u0442"})),r.a.createElement(p.f,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row",margin:"10px 0px 10px 0px"}},r.a.createElement(k,{activeTab:t,setActiveTab:n,tabType:"hidden-friends",tabName:"\u0421\u043a\u0440\u044b\u0442\u044b\u0435 \u0434\u0440\u0443\u0437\u044c\u044f"}),r.a.createElement(k,{activeTab:t,setActiveTab:n,tabType:"hidding-friends",tabName:"\u0421\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u0434\u0440\u0443\u0437\u044c\u044f"})),r.a.createElement(p.f,{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",margin:"10px 0px 10px 0px"}},r.a.createElement(k,{activeTab:t,setActiveTab:n,tabType:"groups",tabName:"\u0413\u0440\u0443\u043f\u043f\u044b 18+"})))},S=(y.a.callMethod,function(e){var t=e.id,n=(e.go,e.fetchedUser),a=e.openPopoutSharing,l=e.openModal,c=e.USER_ID,o=e.onChangeHandlerId,i=e.getUserInfo,s=e.targetUserInfo,u=e.snackbar,m=e.loadingSpinner,f=e.userInfo,d=e.renderTargetUserInfo,g=e.activeTab,b=e.setActiveTab,h=e.inputValue,E=e.renderUserGroups,y=e.getUser,x=e.openAlert,k=e.promoBannerProps,A=e.setPromoBannerProps,j=e.renderHiddenFriends,S=e.renderHiddingFriends,T=e.referrals,U=(e.nativeAds,e.getPlatform);return r.a.createElement(p.l,{id:t},r.a.createElement(p.m,{left:r.a.createElement(p.d,{style:{marginLeft:"20px",background:"inherit",padding:"0px"}},r.a.createElement(v.a,{width:24,height:24,fill:"green",onClick:y}))},"\u0421\u043b\u0435\u0436\u043a\u0430 5.0"),r.a.createElement(p.f,{style:{padding:"10px 15px 15px 15px"}},r.a.createElement(p.f,{className:"panelHomeBalance"},r.a.createElement(p.f,{className:"flexSpaceBetweenRow"},f.photoURL&&n?r.a.createElement(C,{fullName:f.fullName,firstName:f.firstName,lastName:f.lastName,id:f.id,photoURL:f.photoURL,city:n.city?n.city.title:"\u0421\u043a\u0440\u044b\u0442\u043e",age:f.age,isProtected:f.isProtected,openModal:l,openAlert:x,referrals:T,getPlatform:U}):r.a.createElement("div",{className:"flexCenterColumn"},r.a.createElement(p.q,{size:"large",style:{margin:"10px 0px 0px 10px",color:"green"}})),r.a.createElement(p.f,null)),r.a.createElement(p.f,{className:"flexSpaceBetweenRow"},r.a.createElement(p.f,null),r.a.createElement(p.f,null,"\u0421\u043b\u0435\u0436\u0435\u043a: ",f.attempts)),"ios"===U?"":r.a.createElement(p.f,{className:"flexSpaceBetweenRow"},r.a.createElement(p.f,null),r.a.createElement(p.f,{style:{marginBottom:"10px"}},r.a.createElement(p.d,{style:{backgroundColor:"green",color:"white"},mode:"commerce",size:"m",stretched:!0,onClick:function(){return l("buy")}},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c")))),r.a.createElement(p.f,null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),r.a.createElement(p.f,{style:{margin:"10px 0px 10px 0px"}},r.a.createElement(p.h,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",placeholder:"https://vk.com/id".concat(c),onChange:o,type:"text",value:h})),r.a.createElement(p.f,null,r.a.createElement(p.d,{style:{backgroundColor:"#184a6e",color:"white",borderRadius:"13px"},size:"xl",level:"2",onClick:i},"\u0423\u0437\u043d\u0430\u0442\u044c")),s?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.f,{style:{margin:"10px 0px 10px 0px"}},r.a.createElement(O,{activeTab:g,setActiveTab:b,openAlert:x})),"general"===g?r.a.createElement(w,{targetUserInfo:s}):"","likes"===g?r.a.createElement(r.a.Fragment,null,0!==d.length?d:r.a.createElement(p.f,{className:"flexCenterColumn"}," ","\u0423 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043b\u0430\u0439\u043a\u043e\u0432")):"","groups"===g?r.a.createElement(r.a.Fragment,null,0!==E.length?E:r.a.createElement(p.f,{className:"flexCenterColumn"}," ","\u0423 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0442 \u0433\u0440\u0443\u043f\u043f 18+")):"","hidden-friends"===g?r.a.createElement(r.a.Fragment,null,0!==j.length?j:r.a.createElement(p.f,{className:"flexCenterColumn"},"\u0423 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0442\u0443 \u0441\u043a\u0440\u044b\u0442\u044b\u0445 \u0434\u0440\u0443\u0437\u0435\u0439")):"","hidding-friends"===g?r.a.createElement(r.a.Fragment,null,0!==S.length?S:r.a.createElement(p.f,{className:"flexCenterColumn"}," ","\u0423 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0442\u0443 \u0441\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439")):""):r.a.createElement(r.a.Fragment,null,m),r.a.createElement(p.f,null,r.a.createElement(p.d,{style:{marginTop:"10px",backgroundColor:"green",color:"white",borderRadius:"13px"},size:"xl",level:"2",onClick:a},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f")),"web"===U?"":r.a.createElement(p.f,null,r.a.createElement(p.d,{className:"animationIcons",style:{marginTop:"10px",backgroundColor:"#184a6e",color:"white",borderRadius:"13px"},size:"xl",level:"2",onClick:function(){l("ads")}},"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043b\u0435\u0436\u043a\u0438"))),k&&r.a.createElement(p.g,{vertical:"bottom"},r.a.createElement(p.n,{bannerData:k,onClose:function(){return A(null)}})),u)}),T=n(40),U=(n(263),n(264),n(265),n(266),n(267),n(19)),I=y.a.callMethod,N=function(){var e=Object(a.useState)("home"),t=Object(f.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),o=Object(f.a)(c,2),s=o[0],d=o[1],b=Object(a.useState)(null),E=Object(f.a)(b,2),v=E[0],k=E[1],w=Object(a.useState)(null),A=Object(f.a)(w,2),j=A[0],C=A[1],O=Object(a.useState)(null),N=Object(f.a)(O,2),R=N[0],M=N[1],L=Object(a.useState)(null),P=Object(f.a)(L,2),V=P[0],D=P[1],_=Object(a.useState)(null),B=Object(f.a)(_,2),F=B[0],z=B[1],K=Object(a.useState)(null),W=Object(f.a)(K,2),H=W[0],G=W[1],J=Object(a.useState)({}),q=Object(f.a)(J,2),Z=q[0],Q=q[1],X=Object(a.useState)(""),Y=Object(f.a)(X,2),$=Y[0],ee=Y[1],te=Object(a.useState)(""),ne=Object(f.a)(te,2),ae=ne[0],re=ne[1],le=Object(a.useState)(null),ce=Object(f.a)(le,2),oe=ce[0],ie=ce[1],se=Object(a.useState)(null),ue=Object(f.a)(se,2),me=ue[0],fe=ue[1],pe=Object(a.useState)(null),de=Object(f.a)(pe,2),ge=de[0],be=de[1],he=Object(a.useState)(""),Ee=Object(f.a)(he,2),ve=(Ee[0],Ee[1],Object(a.useState)()),ye=Object(f.a)(ve,2),xe=ye[0],ke=ye[1],we=Object(a.useState)(0),Ae=Object(f.a)(we,2),je=Ae[0],Ce=(Ae[1],Object(a.useState)("")),Oe=Object(f.a)(Ce,2),Se=Oe[0],Te=Oe[1];function Ue(){i.a.send("VKWebAppAllowMessagesFromGroup",{group_id:U.e}).then((function(e){console.log("res",e)})).catch((function(e){setTimeout(Ue,5e3),console.log("err",e)}))}function Ie(){if(![236908027,457421325].includes(U.f))return i.a.send("VKWebAppShowNativeAds",{ad_format:"preloader"}).then((function(e){return console.log("VKWebAppShowNativeAds RES",e)})).catch((function(e){return console.log("VKWebAppShowNativeAds ERR",e)}))}function Ne(){i.a.send("VKWebAppJoinGroup",{group_id:U.e}).then((function(e){var t=e.result;console.log("VKWebAppJoinGroup",t)}))}function Re(e){var t=e.target.value.trim();+t}function Me(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green";R||M(r.a.createElement(p.p,{duration:"7000",layout:"horizontal",onClose:function(){return M(null)},before:r.a.createElement(p.c,{size:24,style:{backgroundColor:t}},"green"===t?r.a.createElement(g.a,{fill:"#fff",width:14,height:14}):r.a.createElement(h.a,{fill:"#fff",width:14,height:14}))},e))}function Le(){I("getUser").then((function(e){var t=e.message;Q(t)}))}Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe(function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.detail,a=n.type,r=n.data,"VKWebAppUpdateConfig"===a&&((l=document.createAttribute("scheme")).value=r.scheme?r.scheme:"bright_light",document.body.attributes.setNamedItem(l));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Le(),function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){i.a.send("VKWebAppGetClientVersion").then((function(e){Te(e.platform),console.log("getPlatform",Se)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){Ie(),setTimeout(Ne,5e3),setTimeout(Ue,2e3)}),[]),Object(a.useEffect)((function(){var e=setInterval((function(){console.log("adsBanner refresh"),i.a.send("VKWebAppGetAds").then((function(e){console.log("promoBannerProps 1",e),console.log("promoBannerProps 2",{promoBannerProps:e}),ke({title:e.title,domain:e.domain,trackingLink:e.trackingLink,ctaText:e.ctaText,advertisingLabel:e.advertisingLabel,iconLink:e.iconLink,description:e.description,ageRestrictions:e.ageRestrictions,statistics:e.statistics})})).catch((function(e){return console.log("promoBannerProps ERR",e)}))}),5e3);i.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppViewHide":clearInterval(e)}}))}),[]);return r.a.createElement(p.r,{activePanel:n,popout:v,header:!1,modal:j},r.a.createElement(S,{id:"home",fetchedUser:s,go:function(e){l(e.currentTarget.dataset.to)},openAlert:Me,snackbar:R,openPopoutSharing:function(){C(null),k(r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{onClose:function(){return k(null)}},r.a.createElement(p.b,{autoclose:!0,onClick:function(){return Object(y.b)("share-link")}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u043e\u0439"),r.a.createElement(p.b,{autoclose:!0,onClick:function(){return Object(y.b)("copy-link",Me)}},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"),r.a.createElement(p.b,{autoclose:!0,onClick:function(){return Object(y.b)("story")}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"),r.a.createElement(p.b,{autoclose:!0,onClick:function(e){return Object(y.b)("share-wall",null,e)}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0435\u043d\u0435"))))},openModal:function(e){switch(e){case"buy":C(r.a.createElement(T.ModalBuy,{setActiveModal:C,APP_AVATAR:U.a,onChangeHandlerAmount:Re,getUser:Le,type:e}));break;case"guard":C(r.a.createElement(T.ModalGuard,{setActiveModal:C,APP_AVATAR:U.a,onChangeHandlerAmount:Re,getUser:Le,type:e}));break;case"ads":C(r.a.createElement(T.ModalADS,{setActiveModal:C,APP_AVATAR:U.a,nativeAds:Ie}))}},USER_ID:U.f,onChangeHandlerId:function(e){var t=e.target.value.trim();t,re(t),console.log("inputValue",ae)},getUserInfo:function(){return""===ae?Me("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f","red"):0===Z.attempts?Me("\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0435, \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0431\u0430\u043b\u0430\u043d\u0441","red"):(re(""),D(null),z(null),ee("general"),G(r.a.createElement("div",{className:"flexCenterColumn"},r.a.createElement(p.q,{size:"large",style:{marginTop:20}}),r.a.createElement("div",{style:{marginTop:"8px"}},"C\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442"),r.a.createElement("div",null,"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0440\u0443\u0437\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))),void I("getUserInfo",{targetUser:ae}).then((function(e){var t=e.status,n=e.message;"success"===t&&n.generalInfo?(Le(),D(n),z(n.likesInfo.map((function(e,t){var n="https://vk.com/id"+e.id;return r.a.createElement(x,{id:t+1,key:t,urlUser:n,fullName:e.fullName,photoURL:e.photoURL,likes:e.likes,activeTab:"likes",type:"likes"})}))),ie(n.groupsInfo.map((function(e,t){var n="https://vk.com/club"+e.id;return r.a.createElement(x,{id:t+1,key:t,urlUser:n,fullName:e.name,photoURL:e.photoURL,type:"group"})}))),fe(n.hiddenFriends.map((function(e,t){var n="https://vk.com/id"+e.id;return r.a.createElement(x,{id:t+1,key:t,urlUser:n,fullName:e.fullName,photoURL:e.photoURL,type:"hidden-friends"})}))),be(n.hiddingFriends.map((function(e,t){var n="https://vk.com/id"+e.id;return r.a.createElement(x,{id:t+1,key:t,urlUser:n,fullName:e.fullName,photoURL:e.photoURL,type:"hidding-friends"})})))):Me(n,"red"),G(null)})))},targetUserInfo:V,loadingSpinner:H,userInfo:Z,renderTargetUserInfo:F,activeTab:$,setActiveTab:ee,inputValue:ae,renderUserGroups:oe,getUser:Le,promoBannerProps:xe,setPromoBannerProps:ke,renderHiddenFriends:me,renderHiddingFriends:ge,referrals:je,nativeAds:Ie,getPlatform:Se}))};i.a.send("VKWebAppInit"),c.a.render(r.a.createElement(N,null),document.getElementById("root"))},40:function(e,t,n){"use strict";var a=n(92);n.d(t,"ModalBuy",(function(){return a.a}));var r=n(93);n.o(r,"ModalADS")&&n.d(t,"ModalADS",(function(){return r.ModalADS})),n.o(r,"ModalBuyVIP")&&n.d(t,"ModalBuyVIP",(function(){return r.ModalBuyVIP})),n.o(r,"ModalGuard")&&n.d(t,"ModalGuard",(function(){return r.ModalGuard}));var l=n(94);n.d(t,"ModalGuard",(function(){return l.a}));var c=n(95);n.d(t,"ModalADS",(function(){return c.a}))},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(11),r=n(0),l=n.n(r),c=n(2),o=n(26).a.callMethod,i=function(e){var t=e.setActiveModal,n=(e.onChangeHandlerAmount,e.APP_AVATAR),i=(e.getDonateLink,e.getUser),s=e.type,u=Object(r.useState)(49),m=Object(a.a)(u,2),f=m[0],p=m[1],d=Object(r.useState)(""),g=Object(a.a)(d,2),b=g[0],h=g[1];return Object(r.useEffect)((function(){o("getDonateLink",{amount:"guard"===s?199:f}).then((function(e){var t=e.status,n=e.message;"success"===t?(h(n),i()):console.log(n)}))}),[f]),l.a.createElement(c.k,{activeModal:"buy"},l.a.createElement(c.j,{id:"buy",onClose:function(){return t(null)},icon:l.a.createElement(c.c,{size:72,src:n}),header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",caption:l.a.createElement(l.a.Fragment,null,l.a.createElement(c.f,{style:{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column",width:"100%"}},l.a.createElement(c.o,{defaultChecked:!0,name:"radio",onClick:function(){return p(49)}},l.a.createElement(c.f,{style:{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}},l.a.createElement("span",{style:{textDecoration:"line-through",fontSize:"12px",color:"red",marginLeft:"30px"}},"99 \u20bd"),l.a.createElement("span",{style:{whiteSpace:"nowrap"}},"49 \u20bd ( 1 \u0441\u043b\u0435\u0436\u043a\u0430 )"))),l.a.createElement(c.o,{name:"radio",onClick:function(){return p(119)}},l.a.createElement(c.f,{style:{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}},l.a.createElement("span",{style:{textDecoration:"line-through",fontSize:"12px",color:"red",marginLeft:"30px"}},"199 \u20bd"),l.a.createElement("span",{style:{whiteSpace:"nowrap"}},"119 \u20bd ( 3 \u0441\u043b\u0435\u0436\u043a\u0438 )"))),l.a.createElement(c.o,{name:"radio",onClick:function(){return p(189)}},l.a.createElement(c.f,{style:{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}},l.a.createElement("span",{style:{textDecoration:"line-through",fontSize:"12px",color:"red",marginLeft:"30px"}},"299 \u20bd"),l.a.createElement("span",{style:{whiteSpace:"nowrap"}},"189 \u20bd ( 5 \u0441\u043b\u0435\u0436\u0435\u043a )")))),l.a.createElement(c.f,null,l.a.createElement(c.d,{style:{backgroundColor:"#184a6e",color:"white",borderRadius:"13px"},size:"xl",level:"2",href:b,target:"_blank",onClick:function(){return t(null)}},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c")))}))}},93:function(e,t){},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(11),r=n(0),l=n.n(r),c=n(2),o=n(26).a.callMethod,i=function(e){var t=e.setActiveModal,n=(e.onChangeHandlerAmount,e.APP_AVATAR),i=(e.getDonateLink,e.getUser),s=e.type,u=Object(r.useState)(49),m=Object(a.a)(u,2),f=m[0],p=(m[1],Object(r.useState)("")),d=Object(a.a)(p,2),g=d[0],b=d[1];return Object(r.useEffect)((function(){o("getDonateLink",{amount:"guard"===s?199:f}).then((function(e){var t=e.status,n=e.message;"success"===t?(b(n),i()):console.log(n)}))}),[f]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.k,{activeModal:"guard"},l.a.createElement(c.j,{id:"guard",onClose:function(){return t(null)},icon:l.a.createElement(c.c,{size:72,src:n}),header:"\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u0441\u043b\u0435\u0436\u043a\u0438",caption:l.a.createElement(l.a.Fragment,null,l.a.createElement(c.f,{style:{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column",width:"100%",padding:"20px 0px 20px 0px"}},'\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 "\u0417\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u0441\u043b\u0435\u0436\u043a\u0438" \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u0441\u043c\u043e\u0433\u0443\u0442 \u0443\u0437\u043d\u0430\u0442\u044c \u043e \u0412\u0430\u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e.'),l.a.createElement(c.f,null,l.a.createElement(c.d,{style:{backgroundColor:"#184a6e",color:"white",borderRadius:"13px"},size:"xl",level:"2",href:g,target:"_blank",onClick:function(){return t(null)}},"\u041a\u0443\u043f\u0438\u0442\u044c")))})))}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),l=n(2),c=function(e){var t=e.setActiveModal,n=e.APP_AVATAR,a=e.nativeAds;return r.a.createElement(l.k,{activeModal:"ads"},r.a.createElement(l.j,{id:"ads",onClose:function(){return t(null)},icon:r.a.createElement(l.c,{size:72,src:n}),header:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0441\u043b\u0435\u0436\u043a\u0438",caption:r.a.createElement(r.a.Fragment,null,r.a.createElement(l.f,{style:{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column",width:"100%",padding:"20px 0px 20px 0px"}},r.a.createElement("div",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0434\u043d\u0443 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0443\u044e \u0441\u043b\u0435\u0436\u043a\u0443, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e 10 \u0440\u0430\u0437 "),r.a.createElement("div",null,"\u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0439 \u0440\u043e\u043b\u0438\u043a."),r.a.createElement("div",null,"\u041f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e, \u0432\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0443\u044e \u0441\u043b\u0435\u0436\u043a\u0443."),r.a.createElement("div",null,"\u0412 \u0434\u0435\u043d\u044c \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 5 \u0441\u043b\u0435\u0436\u0435\u043a.")),r.a.createElement(l.f,null,r.a.createElement(l.d,{style:{backgroundColor:"#184a6e",color:"white",borderRadius:"13px"},size:"xl",level:"2",onClick:a},"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443")))}))}}},[[169,1,2]]]);
//# sourceMappingURL=main.22622699.chunk.js.map