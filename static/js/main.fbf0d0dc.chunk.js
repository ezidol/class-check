(this.webpackJsonpclass=this.webpackJsonpclass||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),s=a.n(l),r=(a(16),a(1)),i=a(4),o=a(5),u=a(7),d=a(6),m=function(e){return e.children},h=(a(17),function(e){return console.log(e.id),c.a.createElement(m,null,c.a.createElement("div",{className:e.id===e.activeId?"Student active":"Student",onClick:e.clicked},c.a.createElement("div",{className:"Name"},c.a.createElement("h2",null,e.name)),c.a.createElement("div",{className:"Score"},c.a.createElement("h2",null,e.score)," "),e.id===e.activeId?c.a.createElement("div",{className:"Button"},c.a.createElement("button",{onClick:e.handlePlusScore},"+"),c.a.createElement("button",{onClick:e.handleMinusScore},"-")):null))}),v=(a(18),function(e){var t,a=e.studentList?e.studentList.map((function(t){return c.a.createElement(h,{key:t.id,id:t.id,name:t.name,score:t.score,activeId:e.activeId,clicked:function(){return e.handleActiveId(t.id)},handlePlusScore:e.handlePlusScore,handleMinusScore:e.handleMinusScore})})):null;return t=(a=a.slice(0,30)).length>10&&a.length<=20?c.a.createElement("div",{className:"list"},c.a.createElement("div",{className:"list1"},a.slice(0,10)),c.a.createElement("div",{className:"list2"},a.slice(10,20))):a.length>20?c.a.createElement("div",{className:"list"},c.a.createElement("div",{className:"list1"},a.slice(0,10)),c.a.createElement("div",{className:"list2"},a.slice(10,20)),c.a.createElement("div",{className:"list3"},a.slice(20,30))):a,c.a.createElement("div",{className:"Students"},t)}),E=(a(19),function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h3",null,"\uc774\ub984"),c.a.createElement("p",null,c.a.createElement("input",{type:"text",placeholder:"\uc774\ub984\uc744 \uc801\uc73c\uc138\uc694",value:e.activeNote.name,onChange:function(t){return e.handleEditNote(t,"name")}})),c.a.createElement("h3",null,"\uc810\uc218"),c.a.createElement("p",null,c.a.createElement("input",{type:"number",placeholder:"\uc810\uc218\ub97c \uc801\uc73c\uc138\uc694",value:e.activeNote.score,onChange:function(t){return e.handleEditNote(t,"score")}})))}),f=a(8),S=(a(20),a(21),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={sec:10,run:!1},e.handleTimerRun=function(){e.setState({run:!e.state.run,sec:0===e.state.sec?10:e.state.sec})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.state.run&&(e.setState({sec:e.state.sec-1}),console.log(e.state.sec)),0===e.state.sec&&e.setState({run:!1})}),1e3)}},{key:"render",value:function(){var e=null;return e=10===this.state.sec?"\uc2dc\uc791":0===this.state.sec?"\uc7ac\uc2dc\uc791":"\uc911\uc9c0",c.a.createElement("div",{className:"timer"},c.a.createElement("div",{className:"clock"},0===this.state.sec?c.a.createElement("h2",null,"\ub9c8\uac10!"):c.a.createElement("h2",null," ",this.state.sec,"\ucd08 "),c.a.createElement("button",{onClick:this.handleTimerRun},e)))}}]),a}(n.Component)),N=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),l=a[0],s=a[1],r=Object(n.useState)(!0),i=Object(f.a)(r,2),o=i[0],u=i[1],d=Object(n.useState)("\uc785\ub825"),m=Object(f.a)(d,2),h=m[0],v=m[1],E="";return E=o?c.a.createElement("input",{type:"text",placeholder:"\uc8fc\uc81c\ub97c \uc801\uc73c\uc138\uc694",value:l,onChange:function(e){return function(e){s(e.target.value)}(e)}}):l,c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"view-header"},c.a.createElement("div",{className:"title-view"},E,c.a.createElement("span",{className:"input-button"},c.a.createElement("button",{onClick:function(){o?(u(!1),v("\uc218\uc815")):(u(!0),v("\uc785\ub825"))}},h))),e.timerShow?c.a.createElement(S,null):null,c.a.createElement("div",null,c.a.createElement("div",{className:"button"},c.a.createElement("span",{className:"timer"},c.a.createElement("button",{onClick:e.toggleTimerShow},e.timerShow?c.a.createElement("p",null,"\ud0c0\uc774\uba38 \uc228\uae30\uae30"):c.a.createElement("p",null,"\ud0c0\uc774\uba38"))),c.a.createElement("span",{className:"rank"},c.a.createElement("button",{onClick:e.toggleRankShow},e.rankShow?c.a.createElement("p",null,"\uc21c\uc704\uc228\uae30\uae30"):c.a.createElement("p",null,"\uc21c\uc704\ubcf4\uae30"))),c.a.createElement("span",{className:"control"},c.a.createElement("button",{onClick:e.added},c.a.createElement("p",null,"add")),c.a.createElement("button",{onClick:e.deleted},c.a.createElement("p",null,"delete")))))),c.a.createElement("hr",null))},g=(a(22),function(e){var t=e.studentList,a=Object(r.a)(t).sort((function(e,t){return t.score-e.score})),n=Object(r.a)(new Set(a.map((function(e){return e.score}))));console.log(n);var l=1;n.forEach((function(e){a.forEach((function(t){t.score===e&&(t.rank=l)})),l++}));var s=(a=a.filter((function(e){return e.rank<4}))).map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",{className:"td-rank"},e.rank,"\ub4f1"),c.a.createElement("td",null,e.name),c.a.createElement("td",{className:"td-score"},e.score))}));return console.log(a),c.a.createElement("div",{className:"rank"},c.a.createElement("h3",null,"\ub7ad\ud0b9"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\uc21c\uc704"),c.a.createElement("th",null,"\uc774\ub984"),c.a.createElement("th",null,"\uc810\uc218"))),c.a.createElement("tbody",null,s)))}),p=(a(23),1),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={studentList:[{id:1,name:"",score:0}],activeId:p,rankShow:!1,timerShow:!1},e.toggleTimerShow=function(){e.setState({timerShow:!e.state.timerShow})},e.toggleRankShow=function(){e.setState({rankShow:!e.state.rankShow})},e.handleActiveId=function(t){e.setState({activeId:t})},e.handleEditNote=function(t,a){var n=Object(r.a)(e.state.studentList);n.find((function(t){return t.id===e.state.activeId}))[a]="score"===a?Number(t.target.value):t.target.value,e.setState({studentList:n})},e.handleAddStudent=function(){if(30==e.state.studentList.length)return 0;var t=Object(r.a)(e.state.studentList);p++,e.setState({studentList:[].concat(Object(r.a)(t),[{id:p,name:"",score:0}]),activeId:p})},e.handleDeleteStudent=function(t){var a=Object(r.a)(e.state.studentList);a=a.filter((function(t){return t.id!==e.state.activeId})),e.setState({studentList:a,activeId:0===a.length?null:a[0].id})},e.handlePlusScore=function(){var t=Object(r.a)(e.state.studentList);t.find((function(t){return t.id===e.state.activeId})).score+=1,e.setState({studentList:t})},e.handleMinusScore=function(){var t=Object(r.a)(e.state.studentList);t.find((function(t){return t.id===e.state.activeId})).score-=1,e.setState({studentList:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state.studentList.find((function(t){return t.id===e.state.activeId}));return console.log(t),c.a.createElement("div",{className:"Class"},c.a.createElement("div",{className:"Header"},c.a.createElement(N,{added:function(){return e.handleAddStudent()},deleted:function(){return e.handleDeleteStudent(e.state.activeId)},rankShow:this.state.rankShow,toggleRankShow:this.toggleRankShow,toggleTimerShow:this.toggleTimerShow,timerShow:this.state.timerShow,studentList:this.state.studentList})),c.a.createElement("div",{className:"main"},c.a.createElement(v,{studentList:this.state.studentList,handleActiveId:this.handleActiveId,handlePlusScore:this.handlePlusScore,handleMinusScore:this.handleMinusScore,activeId:this.state.activeId}),c.a.createElement("div",{className:"right-main"},c.a.createElement("div",{className:"note-view"},0===this.state.studentList.length?null:c.a.createElement(E,{activeNote:t,handleEditNote:this.handleEditNote})),c.a.createElement("div",{className:"rank-view"},this.state.rankShow?c.a.createElement(g,{studentList:this.state.studentList}):null))))}}]),a}(n.Component);a(24);var b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.fbf0d0dc.chunk.js.map