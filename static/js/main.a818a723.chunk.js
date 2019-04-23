(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},36:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=(a(36),a(7)),i=a(8),l=a(10),d=a(9),u=a(11),p=a(4),m=a(2),h=a.n(m),f=a(12),g=a(13),v=a.n(g),b="https://eng-ger-dictio.herokuapp.com/api/words",E=function(){return function(){var e=Object(f.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(w()),e.prev=1,e.next=4,v.a.get("".concat(b));case 4:(a=e.sent).data&&t({type:"GET_WORDS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},w=function(){return{type:"APPS_LOADING"}},y=Object(p.b)(function(e){return{dict:e.dict}},{getWord:function(e){return function(){var t=Object(f.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),t.prev=1,t.next=4,v.a.get("".concat(b,"/").concat(e));case 4:(n=t.sent).data&&a({type:"GET_WORD",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()},deleteWord:function(e){return function(){var t=Object(f.a)(h.a.mark(function t(a){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.delete("".concat(b,"/").concat(e));case 3:a({type:"DELETE_WORD",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.word,a=t._id,n=t.english,c=t.german,o=t.description,s=e.getWord,i=e.deleteWord;return r.a.createElement("div",{className:"row mb-2 nogutters"},r.a.createElement("div",{className:"col col-3 pt-1"}," ",n," "),r.a.createElement("div",{className:"col col-4 pt-1"}," ",c.join(",")," "),r.a.createElement("div",{className:"col col-3 pt-1"}," ",o," "),r.a.createElement("div",{className:"col col-1"},r.a.createElement("button",{className:"btn btn-success btn-phone",onClick:s.bind(void 0,a)},r.a.createElement("i",{className:"far fa-sm upd-phone"},"\uf044"))),r.a.createElement("div",{className:"col col-1"},r.a.createElement("button",{className:"btn btn-danger btn-phone",onClick:i.bind(void 0,a)},r.a.createElement("i",{className:"far fa-sm del-phone"},"\uf2ed"))))}),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.dict.isUpdate!==e.dict.isUpdate&&this.props.getWords()}},{key:"render",value:function(){var e=this.props.dict.words;return this.props.dict.loading?r.a.createElement("p",null,"App is loading"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mb-2 nogutters font-weight-bold head"},r.a.createElement("div",{className:"col col-3 "}," English "),r.a.createElement("div",{className:"col col-4 "}," German "),r.a.createElement("div",{className:"col col-3 "}," Type "),r.a.createElement("div",{className:"col col-1 "}," Edit "),r.a.createElement("div",{className:"col col-1 "}," Delete ")),r.a.createElement("div",{className:"mt-2"},e.map(function(e){return r.a.createElement(y,{word:e,key:e._id})})))}}]),t}(n.Component),N=Object(p.b)(function(e){return{dict:e.dict}},{getWords:E})(O),_=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("h1",{className:"navbar-brand"},"English - German Dictionary "))},j=a(5),W=a(29),D=a(30),k=a(3),x={words:[],single_word:null,loading:!1,isUpdate:!1,errmsg:""},C=Object(j.c)({dict:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WORDS":return Object(k.a)({},e,{words:t.payload,loading:!1});case"GET_WORD":return Object(k.a)({},e,{single_word:t.payload,isUpdate:!0});case"UPDATE_WORD":return Object(k.a)({},e,{words:e.words.map(function(e){return e._id===t.payload._id?t.payload:e}),isUpdate:!1});case"DELETE_WORD":return Object(k.a)({},e,{words:e.words.filter(function(e){return e._id!==t.payload})});case"ADD_WORD":return Object(k.a)({},e,{words:[t.payload].concat(Object(D.a)(e.words))});case"APPS_LOADING":return Object(k.a)({},e,{loading:!0});case"CANCEL":return Object(k.a)({},e,{isUpdate:!1});default:return e}}}),U=[W.a],S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,A=Object(j.e)(C,{},S(j.a.apply(void 0,U))),T=(a(62),a(63),a(16)),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={_id:"",english:"",german:"",description:"",valError:!1},a.onChange=function(e){a.setState(Object(T.a)({},e.target.name,e.target.value))},a.clearfields=function(){a.setState({_id:"",english:"",german:"",description:""})},a.isValidWord=function(e){return!/[^a-z\xe4\xf6\xfc\xdf,-\s]/i.test(e)},a.isValidInput=function(){return a.isValidWord(a.state.english)&&a.isValidWord(a.state.german)&&a.isValidWord(a.state.description)},a.isValid=function(){return a.state.english&&a.state.german&&a.state.description},a.cancel=function(){a.setState({valError:!1}),a.clearfields(),a.props.cancel()},a.onSubmit=function(e){e.preventDefault(),console.log(a.state);var t=a.createWord();if(!t)return console.log("no submit");a.props.dict.isUpdate?a.props.updateWord(Object(k.a)({},t,{_id:a.state._id})):a.props.addWord(t),a.clearfields()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"createWord",value:function(){return this.isValid()&&this.isValidInput()?(this.setState({valError:!1}),{english:this.state.english,german:this.state.german,description:this.state.description}):(this.setState({valError:!0}),null)}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){this.props.dict.isUpdate&&this.props.dict.isUpdate!==e.dict.isUpdate&&this.setState({_id:this.props.dict.single_word._id,english:this.props.dict.single_word.english,german:this.props.dict.single_word.german,description:this.props.dict.single_word.description,errorForm:this.props.dict.errorForm})}},{key:"render",value:function(){var e=this.state.valError?r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{className:"alert alert-danger"},"Please fill in all fields correctly")):null;return r.a.createElement("form",{className:"mt-3 lmargin",onSubmit:this.onSubmit},e,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"english",className:"col-1 col-sm-2 col-md-1 col-form-label"},"english"),r.a.createElement("div",{className:"col-sm-8 "},r.a.createElement("input",{className:"form-control",type:"text",name:"english",id:"english",value:this.state.english,onChange:this.onChange}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"german",className:"col-1 col-sm-2 col-md-1 col-form-label"},"german"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("input",{className:"form-control",type:"text",name:"german",id:"german",value:this.state.german,onChange:this.onChange}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"description",className:"col-1 col-sm-2 col-md-1 col-form-label"},"type"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("input",{className:"form-control",type:"text",name:"description",id:"description",value:this.state.description,onChange:this.onChange}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2 mr-2"},this.props.dict.isUpdate?"Update Word":"Add Word"),r.a.createElement("button",{type:"button",onClick:this.cancel,className:"btn btn-warning mb-2"},"Cancel"))))}}]),t}(n.Component),V=Object(p.b)(function(e){return{dict:e.dict}},{addWord:function(e){return function(){var t=Object(f.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("".concat(b),e);case 3:n=t.sent,a({type:"ADD_WORD",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},updateWord:function(e){return function(){var t=Object(f.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.put("".concat(b,"/").concat(e._id),e);case 3:n=t.sent,a({type:"UPDATE_WORD",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},getWords:E,cancel:function(){return{type:"CANCEL"}}})(R),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){A.dispatch(E())}},{key:"render",value:function(){return r.a.createElement(p.a,{store:A},r.a.createElement(_,null),r.a.createElement("div",{className:"container"},r.a.createElement(V,null),r.a.createElement(N,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.a818a723.chunk.js.map