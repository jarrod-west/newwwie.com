(()=>{"use strict";(()=>{var e,t,n,o,s,i={},r=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function l(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,o,s,i,r){var a={type:e,props:o,key:s,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n:r};return null==r&&null!=t.vnode&&t.vnode(a),a}function p(e){return e.children}function h(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!w.__r++||s!==t.debounceRendering)&&((s=t.debounceRendering)||setTimeout)(w)}function w(){for(var e;w.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,o,s,i,r;e.__d&&(i=(s=(t=e).__v).__e,(r=t.__P)&&(n=[],(o=l({},s)).__v=s.__v+1,S(r,s,o,t.__n,void 0!==r.ownerSVGElement,null!=s.__h?[i]:null,n,null==i?d(s):i,s.__h),D(n,s),s.__e!=i&&m(s)))}))}function _(e,t,n,o,s,a,l,c,h,m){var g,w,_,f,k,b,T,D=o&&o.__k||r,N=D.length;for(n.__k=[],g=0;g<t.length;g++)if(null!=(f=n.__k[g]=null==(f=t[g])||"boolean"==typeof f?null:"string"==typeof f||"number"==typeof f||"bigint"==typeof f?u(null,f,null,null,f):Array.isArray(f)?u(p,{children:f},null,null,null):f.__b>0?u(f.type,f.props,f.key,null,f.__v):f)){if(f.__=n,f.__b=n.__b+1,null===(_=D[g])||_&&f.key==_.key&&f.type===_.type)D[g]=void 0;else for(w=0;w<N;w++){if((_=D[w])&&f.key==_.key&&f.type===_.type){D[w]=void 0;break}_=null}S(e,f,_=_||i,s,a,l,c,h,m),k=f.__e,(w=f.ref)&&_.ref!=w&&(T||(T=[]),_.ref&&T.push(_.ref,null,f),T.push(w,f.__c||k,f)),null!=k?(null==b&&(b=k),"function"==typeof f.type&&f.__k===_.__k?f.__d=h=v(f,h,e):h=y(e,f,_,D,k,h),"function"==typeof n.type&&(n.__d=h)):h&&_.__e==h&&h.parentNode!=e&&(h=d(_))}for(n.__e=b,g=N;g--;)null!=D[g]&&("function"==typeof n.type&&null!=D[g].__e&&D[g].__e==n.__d&&(n.__d=d(o,g+1)),P(D[g],D[g]));if(T)for(g=0;g<T.length;g++)U(T[g],T[++g],T[++g])}function v(e,t,n){for(var o,s=e.__k,i=0;s&&i<s.length;i++)(o=s[i])&&(o.__=e,t="function"==typeof o.type?v(o,t,n):y(n,o,o,s,o.__e,t));return t}function y(e,t,n,o,s,i){var r,a,l;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||s!=i||null==s.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(s),r=null;else{for(a=i,l=0;(a=a.nextSibling)&&l<o.length;l+=2)if(a==s)break e;e.insertBefore(s,i),r=i}return void 0!==r?r:s.nextSibling}function f(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function k(e,t,n,o,s){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||f(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||f(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?T:b,i):e.removeEventListener(t,i?T:b,i);else if("dangerouslySetInnerHTML"!==t){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function b(e){this.l[e.type+!1](t.event?t.event(e):e)}function T(e){this.l[e.type+!0](t.event?t.event(e):e)}function S(e,n,o,s,i,r,a,c,u){var d,m,g,w,v,y,f,k,b,T,S,D,U,P=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(u=o.__h,c=n.__e=o.__e,n.__h=null,r=[c]),(d=t.__b)&&d(n);try{e:if("function"==typeof P){if(k=n.props,b=(d=P.contextType)&&s[d.__c],T=d?b?b.props.value:d.__:s,o.__c?f=(m=n.__c=o.__c).__=m.__E:("prototype"in P&&P.prototype.render?n.__c=m=new P(k,T):(n.__c=m=new h(k,T),m.constructor=P,m.render=W),b&&b.sub(m),m.props=k,m.state||(m.state={}),m.context=T,m.__n=s,g=m.__d=!0,m.__h=[]),null==m.__s&&(m.__s=m.state),null!=P.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=l({},m.__s)),l(m.__s,P.getDerivedStateFromProps(k,m.__s))),w=m.props,v=m.state,g)null==P.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==w&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(k,T),!m.__e&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(k,m.__s,T)||n.__v===o.__v){m.props=k,m.state=m.__s,n.__v!==o.__v&&(m.__d=!1),m.__v=n,n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),m.__h.length&&a.push(m);break e}null!=m.componentWillUpdate&&m.componentWillUpdate(k,m.__s,T),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(w,v,y)}))}if(m.context=T,m.props=k,m.__v=n,m.__P=e,S=t.__r,D=0,"prototype"in P&&P.prototype.render)m.state=m.__s,m.__d=!1,S&&S(n),d=m.render(m.props,m.state,m.context);else do{m.__d=!1,S&&S(n),d=m.render(m.props,m.state,m.context),m.state=m.__s}while(m.__d&&++D<25);m.state=m.__s,null!=m.getChildContext&&(s=l(l({},s),m.getChildContext())),g||null==m.getSnapshotBeforeUpdate||(y=m.getSnapshotBeforeUpdate(w,v)),U=null!=d&&d.type===p&&null==d.key?d.props.children:d,_(e,Array.isArray(U)?U:[U],n,o,s,i,r,a,c,u),m.base=n.__e,n.__h=null,m.__h.length&&a.push(m),f&&(m.__E=m.__=null),m.__e=!1}else null==r&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=N(o.__e,n,o,s,i,r,a,u);(d=t.diffed)&&d(n)}catch(e){n.__v=null,(u||null!=r)&&(n.__e=c,n.__h=!!u,r[r.indexOf(c)]=null),t.__e(e,n,o)}}function D(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function N(t,n,o,s,r,a,l,u){var p,h,m,g=o.props,w=n.props,v=n.type,y=0;if("svg"===v&&(r=!0),null!=a)for(;y<a.length;y++)if((p=a[y])&&"setAttribute"in p==!!v&&(v?p.localName===v:3===p.nodeType)){t=p,a[y]=null;break}if(null==t){if(null===v)return document.createTextNode(w);t=r?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,w.is&&w),a=null,u=!1}if(null===v)g===w||u&&t.data===w||(t.data=w);else{if(a=a&&e.call(t.childNodes),h=(g=o.props||i).dangerouslySetInnerHTML,m=w.dangerouslySetInnerHTML,!u){if(null!=a)for(g={},y=0;y<t.attributes.length;y++)g[t.attributes[y].name]=t.attributes[y].value;(m||h)&&(m&&(h&&m.__html==h.__html||m.__html===t.innerHTML)||(t.innerHTML=m&&m.__html||""))}if(function(e,t,n,o,s){var i;for(i in n)"children"===i||"key"===i||i in t||k(e,i,null,n[i],o);for(i in t)s&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||k(e,i,t[i],n[i],o)}(t,w,g,r,u),m)n.__k=[];else if(y=n.props.children,_(t,Array.isArray(y)?y:[y],n,o,s,r&&"foreignObject"!==v,a,l,a?a[0]:o.__k&&d(o,0),u),null!=a)for(y=a.length;y--;)null!=a[y]&&c(a[y]);u||("value"in w&&void 0!==(y=w.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==g.value)&&k(t,"value",y,g.value,!1),"checked"in w&&void 0!==(y=w.checked)&&y!==t.checked&&k(t,"checked",y,g.checked,!1))}return t}function U(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function P(e,n,o){var s,i;if(t.unmount&&t.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||U(s,null,n)),null!=(s=e.__c)){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(e){t.__e(e,n)}s.base=s.__P=null}if(s=e.__k)for(i=0;i<s.length;i++)s[i]&&P(s[i],n,"function"!=typeof e.type);o||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function W(e,t,n){return this.constructor(e,n)}function C(n,o,s){var r,a,l;t.__&&t.__(n,o),a=(r="function"==typeof s)?null:s&&s.__k||o.__k,l=[],S(o,n=(!r&&s||o).__k=function(t,n,o){var s,i,r,a={};for(r in n)"key"==r?s=n[r]:"ref"==r?i=n[r]:a[r]=n[r];if(arguments.length>2&&(a.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===a[r]&&(a[r]=t.defaultProps[r]);return u(t,a,s,i,null)}(p,null,[n]),a||i,i,void 0!==o.ownerSVGElement,!r&&s?[s]:a?null:o.firstChild?e.call(o.childNodes):null,l,!r&&s?s:a?a.__e:o.firstChild,r),D(l,n)}e=r.slice,t={__e:function(e,t,n,o){for(var s,i,r;t=t.__;)if((s=t.__c)&&!s.__)try{if((i=s.constructor)&&null!=i.getDerivedStateFromError&&(s.setState(i.getDerivedStateFromError(e)),r=s.__d),null!=s.componentDidCatch&&(s.componentDidCatch(e,o||{}),r=s.__d),r)return s.__E=s}catch(t){e=t}throw e}},n=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=l({},this.state),"function"==typeof e&&(e=e(l({},n),this.props)),e&&l(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},h.prototype.render=p,o=[],w.__r=0;var I=0;function H(e,n,o,s,i){var r,a,l={};for(a in n)"ref"==a?r=n[a]:l[a]=n[a];var c={type:e,props:l,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--I,__source:i,__self:s};if("function"==typeof e&&(r=e.defaultProps))for(a in r)void 0===l[a]&&(l[a]=r[a]);return t.vnode&&t.vnode(c),c}var x=function(e){var t=e.data,n=t.name,o=t.location,s=t.period,i=s.interval,r=s.day,a=s.weekDay,l=t.links,c=l.twitter,u=l.facebook,p=l.website,h=l.meetUp,d=l.linkedIn,m=t.demographic,g=t.format;return H("div",{class:"card",children:[H("h4",{children:H("a",{href:p||h,children:n})}),H("dl",{children:[H("dt",{children:"Links:"}),H("dd",{children:H("ul",{children:[d?H("li",{children:H("a",{href:d,rel:"external",children:"LinkedIn"})}):"",u?H("li",{children:H("a",{href:u,rel:"external",children:"Facebook"})}):"",h?H("li",{children:H("a",{href:h,rel:"external",children:"MeetUp"})}):"",c?H("li",{children:H("a",{href:c,rel:"external",children:"Twitter"})}):""]})}),H("dt",{children:"When:"}),H("dd",{children:[i,", ",a," ",r]}),H("dt",{children:"Where:"}),H("dd",{children:o}),H("dt",{children:"Who:"}),H("dd",{children:m}),H("dt",{children:"Format:"}),H("dd",{children:g})]})]})},A=[{name:"Newcastle Coders Group",location:"ICT Building, University of Newcastle",period:{interval:"Monthly",day:"2nd",weekDay:"Wed"},links:{twitter:"https://twitter.com/ncgau",facebook:"https://www.facebook.com/groups/ncgau/",website:"http://ncg.asn.au/",meetUp:"http://www.meetup.com/Newcastle-Coders-Group/"},demographic:"Anyone with an interest in learning about the latest technology as well as new approaches and techniques to designing and developing software.",format:"Group discussion of recent tech News. Organised presentations from local and/or visiting speakers. Socialising over pizza."},{name:"Newcastle Women and Gender Diverse People in Tech",location:"NewyTechPeople Office",period:{interval:"Monthly",day:"2nd",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/"},demographic:"Women and Gender Diverse people who are in the technology field, a field adjacent to it, or have an interest in tech and would like to meet some lovely people who feel the same.",format:"The format varies but will often include networking/socialising and a presentation."},{name:"Newcastle Cybersecurity Group",location:"University of Newcastle I2N Hub Honeysuckle",period:{interval:"Monthly",day:"4th",weekDay:"Thurs"},links:{linkedIn:"https://www.linkedin.com/company/newcastlecybersecuritygroup/",meetUp:"https://www.meetup.com/Newcastle-Cyber-Security-Group/"},demographic:"Anyone interested in or practicing cybersecurity! Our members include students, consultants, engineers, penetration testers, company directors, and more!",format:"You eat pizza from Bella Italia while a local expert presents. Our presenters cover broad topics ranging from GRC, Web Security, Fraud, Security Culture, Videogame Hacking, Linux Internals, and more! We then head over to Honeysuckle Hotel for networking and a few drinks post-event."},{name:"Newcatle IoT Pioneers",location:"Stag and Hunter, Mayfield",period:{interval:"Monthly",day:"1st",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/Newcastle-IoT-Pioneers/"},demographic:"In or around Newcastle, Lake Macquarie or the Hunter? Keen to make a splash in the Internet of Things world? Then this Meetup is for you!",format:"Organised presentations"},{name:"Hunter Data Analytics",location:"Check meetup event details (but usually at University of Newcastle City Campus)",period:{interval:"Monthly",day:"3rd",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/Hunter-Data-Analytics/",linkedIn:"https://www.linkedin.com/company/hunter-data-analytics/",twitter:"https://twitter.com/hunteranalytics"},demographic:"Data analysts, data scientists, data engineers, statisticians, computer scientists, machine learning engineers etc",format:"Networking/chats, followed by organised presentations, followed by pub."},{name:"NewcastleJS",location:"INNX Hub Cooperative Working Space",period:{interval:"Monthly",day:"2nd",weekDay:"Tues"},links:{meetUp:"https://www.meetup.com/NewcastleJS-JavaScript-Meetup/",twitter:"https://twitter.com/newcastlejs"},demographic:"Javascript enthusiasts. Amateur to Professional, AngularJS to NodeJS and everything else JS.",format:"Some beverages and short form presentations as well as industry news and jobs board. Post meetup drinks and food at The Edwards afterwards."},{name:"Newcastle Salesforce Community Group",location:"NewyTechPeople, 24 Lindus Street, Wickham",period:{interval:"Monthly",day:"4th",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/newcastle-salesforce-community-group/",linkedIn:"https://www.linkedin.com/groups/14186054/"},demographic:"Salesforce users, technologists, strategists, designers, business process owners, analysts, novices, experts and everything inbetween.",format:"Drinks, beers, wine, pizza and a speaker/presentation slot. The group will grow and evolve to meet the needs and interests of our members."},{name:"Blockchain Newcastle",location:"Check meetup event details",period:{interval:"Monthly",day:"",weekDay:""},links:{meetUp:"https://www.meetup.com/blockchain-newcastle/"},demographic:"People interested in future technology cycles, whether they be technologists, entrepreneurs, consultants, advisors or simply curious.",format:"Discussion over drinks, beers, wine, and food at local venues."}],M=function(){return A.map((function(e){return H(x,{data:e})}))};C(H(M,{}),document.getElementById("groups"));var L=[{event:{title:"July: Stephen G - Rust & WASM; Stephen Y - Graphs in software",description:"We are back in July with Stephen G giving us his experiences working with Rust and WASM and Stephen Y giving us a talk about graphs in software.\n\nStephen Ys talk will cover how a combination of the Rust memory checker, type system and macros makes web development easier, when compared with other single language front and backends like typescript/nodejs, and why Stephen started teaching Rust to primary school children. http://rustycc.com.au.\n\nStephen G's talk will cover Graphs and graph databases: what makes them useful, some popular use cases, some interesting edge cases, and the roles they can play supporting Generative AI.\n\nWe'd like to thank our sponsors\n\n* Mudbath\n* Saphi Engineering\n* Newy Tech People",dateTime:"2024-07-03T18:00+10:00",eventUrl:"https://www.meetup.com/newcastle-coders-group/events/300836846",going:11,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/505406540/676x380.webp",venue:{name:"Mudbath Digital ",lat:-32.92607,lng:151.7626,address:"8/710 Hunter st",city:"Newcastle "}},group:{name:"Newcastle Coders Group",urlname:"newcastle-coders-group",groupPhoto:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"WGDPTech Meet-up: TBA",description:"Our July event to TBA but you can RSVP here to save the date!\n\n5:30PM: The event starts with a catch-up6:00PM: The presentation will begin\n\nDon't forget our 2024 location! We'll gather at the NewyTechPeople office at 9 Downie St, Maryville NSW for this event.\n\nEveryone is welcome to this event, regardless of gender- so share it with your friends. Through these speaker events, we aim to share experiences and knowledge, that's how we learn, and that's how we can improve the community for everyone.We provide food, so let us know of any allergies :)",dateTime:"2024-07-11T17:30+10:00",eventUrl:"https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/events/301771246",going:3,maxTickets:40,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/518951708/676x380.webp",venue:{name:"9 Downie St",lat:-32.912266,lng:151.75763,address:"9 Downie St",city:"Maryville"}},group:{name:"Women & Gender Diverse People in Tech",urlname:"newcastle-women-and-gender-diverse-people-in-tech",groupPhoto:{id:"516565764",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"516565764",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"data.JUL <- TBD Save the date",description:"**EOI Call for Speakers** 🗣️🎙️\n[https://forms.gle/fnWkDmzmdPvs7z7WA](https://forms.gle/fnWkDmzmdPvs7z7WA)\nWe are yet to lock in a speaker for this month. You can always submit an expression of interest through the above Google Form or join [Newwwie Slack](https://newwwie.com/#invite) and call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U)\n\n🗣️**Talk Description**: TBD\n\n🎙️**Speaker Bio**: TBD\n\n🏢 **Venue**: University's Q building in Honeysuckle, Level 2\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.\n\n##-------------------------------------------------------------------##\n**CHARTS 📊 & CHATS 🍻 - Social Drinks**\n*Backup plan in case of no speaker lined up.*\n##-------------------------------------------------------------------##\n\nNo speaker this month, but look forward to more talks in coming months.\nThe Honeysuckle Hotel is where we usually go after our events at the university's Q Building. There is no booking but we will try and gather some tables, likely out the back.\nIf you can't find us, call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U) and we'll direct you.\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\n🕒 **When**: Third Thursday of the Month 5.30pm-7.30pm\n🏢 **Venue**: The Honeysuckle Hotel, Honeysuckle Drive, Newcastle\n[https://maps.app.goo.gl/z3e4JvSvYWb6quwn6](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6)",dateTime:"2024-07-18T17:30+10:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301848973",going:3,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/521972165/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"NCSG July 2024 | Placeholder Event",description:"This event is a placeholder event\n\n**Event details:**\n\nDate: **WEDNESDAY** July 31st\n\nTime: 18:00-20:00\n\nVenue: 16 Honeysuckle Drive, Newcastle (The University of Newcastle 'Q Building') - second floor\n\nFood: PIZZAS Provided, please inform us of dietary requirements when RSVPing\n\nDrink: Non-alcoholic provided, come and grab a few with us at the pub after if you'd like!\n\n**Getting there/parking/public transport:**\n\n* Event location is [here](https://goo.gl/maps/rCqoDx8MbjqyeHTMA) \\- please use the western door\\. UoN requires us to keep this door closed for safety\\, so there will be someone there to let you in\\.\n* Please try and get in the door before 6:10pm. We check occasionally but you might get stuck outside in the cold for a while.\n* The [car park behind the building](https://goo.gl/maps/FzNNQfbAxxW38GNr7) is free after 5PM, and generally has plenty of room.\n* The closest public transport point is [Honeysuckle Light Rail Station](https://goo.gl/maps/3P2BpkiMaCeZ8isk9), which will take you to Newcastle Interchange and beyond every \\~7min or so. Walk along Honeysuckle Drive for a better-lit pathway.\n\n**The rest:**\n\nIf you’re experiencing any symptoms representative of COVID-19, please don’t attend. We’ll miss you, but the health/safety of attendees is paramount.\n\nNCSG is a community group determined to improve and uplift the Newcastle cybersecurity community. We meet monthly (on the last Wednesday of each month) and have a bunch of interesting speakers, from local legends to heavy hitters in the enterprise world.\n\n**Want to learn more?** Be sure to follow us on [LinkedIn](https://www.linkedin.com/company/newcastlecybersecuritygroup/) or visit newwwie.com, join the community and come and chat in the #security channel.\n\n**Keen on speaking? Reach out at the event, or message us here.**",dateTime:"2024-07-31T19:00+10:00",eventUrl:"https://www.meetup.com/newcastle-cyber-security-group/events/298927280",going:1,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/483205216/676x380.webp",venue:null},group:{name:"Newcastle Cyber Security Group",urlname:"Newcastle-Cyber-Security-Group",groupPhoto:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"August: Adam Cogan on AI",description:"In August we'll be back with Adam Cogan Chief Architect at SSW giving us a talk about the current state of developing in AI. We'd love to give you more details about what he's talking about, but I'm writing this in May so everything will have changed by then.\n\nWe'd like to than our sponsors\n\n* SSW\n* Saphi Engineering",dateTime:"2024-08-07T18:00+10:00",eventUrl:"https://www.meetup.com/newcastle-coders-group/events/300837217",going:6,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/505406540/676x380.webp",venue:{name:"SSW Newcastle - Enterprise Software Development",lat:-32.926857,lng:151.77159,address:"432 Hunter St",city:"Newcastle"}},group:{name:"Newcastle Coders Group",urlname:"newcastle-coders-group",groupPhoto:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"data.AUG <- TBD Save the date",description:"**EOI Call for Speakers** 🗣️🎙️\n[https://forms.gle/fnWkDmzmdPvs7z7WA](https://forms.gle/fnWkDmzmdPvs7z7WA)\nWe are yet to lock in a speaker for this month. You can always submit an expression of interest through the above Google Form or join [Newwwie Slack](https://newwwie.com/#invite) and call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U)\n\n🗣️**Talk Description**: TBD\n\n🎙️**Speaker Bio**: TBD\n\n🏢 **Venue**: University's Q building in Honeysuckle, Level 2\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.\n\n##-------------------------------------------------------------------##\n**CHARTS 📊 & CHATS 🍻 - Social Drinks**\n*Backup plan in case of no speaker lined up.*\n##-------------------------------------------------------------------##\n\nNo speaker this month, but look forward to more talks in coming months.\nThe Honeysuckle Hotel is where we usually go after our events at the university's Q Building. There is no booking but we will try and gather some tables, likely out the back.\nIf you can't find us, call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U) and we'll direct you.\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\n🕒 **When**: Third Thursday of the Month 5.30pm-7.30pm\n🏢 **Venue**: The Honeysuckle Hotel, Honeysuckle Drive, Newcastle\n[https://maps.app.goo.gl/z3e4JvSvYWb6quwn6](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6)",dateTime:"2024-08-15T17:30+10:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301848981",going:3,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/521972247/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"NCSG August 2024 | Placeholder Event",description:"This event is a placeholder event\n\n**Event details:**\n\nDate: **WEDNESDAY** August 28th\n\nTime: 18:00-20:00\n\nVenue: 16 Honeysuckle Drive, Newcastle (The University of Newcastle 'Q Building') - second floor\n\nFood: PIZZAS Provided, please inform us of dietary requirements when RSVPing\n\nDrink: Non-alcoholic provided, come and grab a few with us at the pub after if you'd like!\n\n**Getting there/parking/public transport:**\n\n* Event location is [here](https://goo.gl/maps/rCqoDx8MbjqyeHTMA) \\- please use the western door\\. UoN requires us to keep this door closed for safety\\, so there will be someone there to let you in\\.\n* Please try and get in the door before 6:10pm. We check occasionally but you might get stuck outside in the cold for a while.\n* The [car park behind the building](https://goo.gl/maps/FzNNQfbAxxW38GNr7) is free after 5PM, and generally has plenty of room.\n* The closest public transport point is [Honeysuckle Light Rail Station](https://goo.gl/maps/3P2BpkiMaCeZ8isk9), which will take you to Newcastle Interchange and beyond every \\~7min or so. Walk along Honeysuckle Drive for a better-lit pathway.\n\n**The rest:**\n\nIf you’re experiencing any symptoms representative of COVID-19, please don’t attend. We’ll miss you, but the health/safety of attendees is paramount.\n\nNCSG is a community group determined to improve and uplift the Newcastle cybersecurity community. We meet monthly (on the last Wednesday of each month) and have a bunch of interesting speakers, from local legends to heavy hitters in the enterprise world.\n\n**Want to learn more?** Be sure to follow us on [LinkedIn](https://www.linkedin.com/company/newcastlecybersecuritygroup/) or visit newwwie.com, join the community and come and chat in the #security channel.\n\n**Keen on speaking? Reach out at the event, or message us here.**",dateTime:"2024-08-28T18:00+10:00",eventUrl:"https://www.meetup.com/newcastle-cyber-security-group/events/298927283",going:1,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/483205216/676x380.webp",venue:null},group:{name:"Newcastle Cyber Security Group",urlname:"Newcastle-Cyber-Security-Group",groupPhoto:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"data.SEP <- TBD Save the date",description:"**EOI Call for Speakers** 🗣️🎙️\n[https://forms.gle/fnWkDmzmdPvs7z7WA](https://forms.gle/fnWkDmzmdPvs7z7WA)\nWe are yet to lock in a speaker for this month. You can always submit an expression of interest through the above Google Form or join [Newwwie Slack](https://newwwie.com/#invite) and call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U)\n\n🗣️**Talk Description**: TBD\n\n🎙️**Speaker Bio**: TBD\n\n🏢 **Venue**: University's Q building in Honeysuckle, Level 2\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.\n\n##-------------------------------------------------------------------##\n**CHARTS 📊 & CHATS 🍻 - Social Drinks**\n*Backup plan in case of no speaker lined up.*\n##-------------------------------------------------------------------##\n\nNo speaker this month, but look forward to more talks in coming months.\nThe Honeysuckle Hotel is where we usually go after our events at the university's Q Building. There is no booking but we will try and gather some tables, likely out the back.\nIf you can't find us, call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U) and we'll direct you.\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\n🕒 **When**: Third Thursday of the Month 5.30pm-7.30pm\n🏢 **Venue**: The Honeysuckle Hotel, Honeysuckle Drive, Newcastle\n[https://maps.app.goo.gl/z3e4JvSvYWb6quwn6](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6)",dateTime:"2024-09-19T17:30+10:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301848984",going:3,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/521972268/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}}],z=function(){function e(){this.render(L)}return e.prototype.render=function(e){e.length>0?C(this.renderList(e),document.getElementById("meetupEvents")):C(H("li",{children:H("p",{children:"It appears there are no upcoming events. Check back soon."})}),document.getElementById("meetupEvents"))},e.prototype.renderList=function(e){var t=this;return e.map((function(e,n){var o=e.event,s=e.group,i=new Date(o.dateTime),r=t.niceDay(i.getDay()),a=t.niceMonth(i.getMonth()),l=t.niceTime(i);return H("li",{class:"eventItem",children:[H("div",{class:"eventItem-left",children:[t.renderImage(s,o.photoUrl),H("div",{class:"eventItem-start",children:[H("span",{class:"eventItem-start_day",children:r}),H("span",{class:"eventItem-start_time",children:l}),H("span",{class:"eventItem-start_month",children:[i.getDate()," ",a]}),H("span",{class:"eventItem-start_year",children:i.getFullYear()})]})]}),H("div",{class:"eventItem-right",children:[H("p",{class:"eventItem-title",children:o.title}),H("p",{class:"eventItem-group",children:["Hosted by: ",H("a",{href:"https://meetup.com/".concat(s.urlname),children:s.name})]}),H("p",{class:"eventItem-description",children:[o.description.substring(0,240),"..."]}),H("ul",{class:"eventItem-stats",children:[H("li",{class:"eventItem-stats_rsvp",title:"Number of people who have RSVP'd vs. the total number of spots",children:[H("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 482.9 482.9",style:"enable-background:new 0 0 482.9 482.9;",children:H("g",{children:H("g",{children:[H("path",{d:"M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"}),H("path",{d:"M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z"})]})})}),o.going," / ",o.maxTickets?o.maxTickets:"∞"]}),H("li",{class:"eventItem-stats_duration",title:"Duration of the event",children:[H("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 60 60",style:"enable-background:new 0 0 60 60;",children:H("g",{children:[H("path",{d:"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n                                            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"}),H("path",{d:"M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"})]})}),t.parseIsoDuration(o.duration)]}),H("li",{class:"eventItem-stats_location",title:"Location of the event",children:[H("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 54.757 54.757",style:"enable-background:new 0 0 54.757 54.757;",children:H("g",{children:[H("path",{d:"M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"}),H("path",{d:"M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031C45.576,13.08,46.321,24.468,41.099,31.431z"})]})}),t.renderLocationLink(o.venue)]})]})]}),H("a",{class:"button",href:o.eventUrl,children:"More info"})]})}))},e.prototype.renderImage=function(e,t){var n="",o="eventItem-image";return e.groupPhoto?n=H("img",{src:this.renderImageLink(e.groupPhoto),alt:e.name,class:"eventItem-groupPhoto"}):t?n=H("img",{src:t,alt:e.name,class:"eventItem-image_photo"}):o+=" eventItem-image_notSupplied",H("div",{class:o,children:n})},e.prototype.renderLocationLink=function(e){return e?e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")?H("a",{href:"https://www.google.com/maps/search/".concat(encodeURIComponent(e.name),"/@").concat(e.lat,",").concat(e.lng,",16z"),target:"_blank",children:[H("span",{children:[e.address,", ",e.city," -"," "]}),"View on Google"]}):H("em",{children:[H("span",{children:[e.address,","]})," ",e.city]}):H("em",{children:"Not specified"})},e.prototype.renderImageLink=function(e,t){return void 0===t&&(t="676x380"),"".concat(e.baseUrl).concat(e.id,"/").concat(t,".webp")},e.prototype.niceTime=function(e){try{return e.toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"2-digit"})}catch(n){var t=this.niceHours(e.getHours());return"".concat(t,":").concat(e.getMinutes())}},e.prototype.niceHours=function(e){return(e+24)%12||12},e.prototype.niceDay=function(e,t){void 0===t&&(t=!0);var n={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};return!0===t?n[e].slice(0,3):n[e]},e.prototype.niceMonth=function(e,t){void 0===t&&(t=!0);var n={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};return!0===t?n[e].slice(0,3):n[e]},e.prototype.parseIsoDuration=function(e){var t=e.match(/P((?<years>\d+)Y)?((?<months>\d+)M)?((?<days>\d+)D)?T((?<hours>\d+)H)?((?<minutes>\d+)M)?((?<seconds>\d+)S)?/).groups;return Object.keys(t).reduce((function(e,n){return t[n]?e+"".concat(t[n]," ").concat(n):e}),"")},e}();new z,new M})()})();