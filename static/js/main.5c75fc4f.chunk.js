(this["webpackJsonpreddit-search"]=this["webpackJsonpreddit-search"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/loading.8d3aacb4.svg"},15:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAScSURBVHja7Ni9SytLGMDh4XKq9Ok9EqtACkGCIlnwo47FljaiENRaTJ8iFnZCMKBFiKVF/oAVCYjGQgUdu2BSiMWmTtq9xQvD3tkk5hpzIvf+nkpnN+/OzrvzqRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgml8sFQRAEQS6X63uD1nrI1dEFA7RarWq1mkgk/sz7ykN/VAp+fVegQqFwdXXVbDYnWt3X11erJJlMzszMLC8vr6+vT/rp//FeGARBrVabdC+MlicSiVarFQSB53n/zxT89S1ROp1Or9fLZrPjp+rfajabBwcHSqnFxUVS+HW+71cqFRlOR5mW8vm89E4zmY3z9MvLS6VULBaTf4vFotY6l8vJI3zfz+fzZsxoNBrdbjcIgm6363me4zhyyXEcrbXW2gruuq7WutFomEHFumdITKlJqVQK31+tVrXWpkrC8zytteu6UxtI5a2kyazhNDqQ1mo1k7xwIr+8jnAcR5rPtJEElIp1u11p02KxKEF839da+74vvzINJyVW40ptzShtVWN4TNd1o68m95hvIlr/aabQcRz5GMMJs1Io93e7XVPiOI409/C+OCSFnueFW1lSGASBtKPkzzRTuG6lUkkKZeSwstU3r+FqjBJTGiTc1yVCOGHyHYSTOrUUmhfwfd8Mp1YKG41GNFsmr5+msPpPtVrNfPjmiZJCa7iTNBeLRSuspE3KpdOEqxEtCadwlJhyjxlLpX2kTUzvlzaJxvnTmwqxt7eXyWSSyeTx8fHGxkb0htnZWaXU2dlZuLBcLhcKhXg87rquTGyDbG5uRgvv7+8PDw+tHcXT01P431QqpZRqt9vWguvj40MptbCwIHNqp9OJx+P5fP7o6Mg87u7urm9lRonped7q6momk5FL8/PzSqmTk5PT09OVlRV52XQ6rZQ6Pz//Eb0wOpxavXDQePjp3sMcIFiid0ovtDp6MJSpvzWWRmfHcP1HjCmtYcZVGTDNyJnP58ccRX99e1Lr9XqlUtnd3ZXN/vcGL5fL4/z84uKib/n7+7u5IZvNyv7Edd14PN7r9aRHfjnmy8tLOp3e3t5+eHiIxWKPj49yRiGdb21tTSl1fX095a19dC1uVqdW95Lv2kzv1qohWv6Fk62+vfDT+NH1S9/VTbgaI8aU1YrneVIxmQLl71wuZ613prYvjNrf35fN/u/fv8Plb29vSqmdnR3rO5DvvV6vT6g+z8/P0efKONZoNMJD5e3trXSOpaUlmczGjCmTXCqVmpub6/V6Mv/d3Nwopba2tmKxWLvdntyLf70XmtWXdQg+iU3FKL3QHASGN9qmE4TnVFmFmoXukGqMHlOGIjMRhudI6+c/K4Wm6pPe2o+Swug2XL6bvoerkr++l4Zv7QfFNF9zOFuylxhzFP0Gcv7U94A7fGplHR1ZB2yjfIZ9T78GzT1a677brPBhmKwDrbMY0+LyuOiKd/gB26CYfdtB6jm1HT0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAkf09AHpYlY2UOr/4AAAAAElFTkSuQmCC"},16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),m=(a(21),a(22),a(1)),u=a(3),A=a.n(u),o=a(14),s=a.n(o),i=(a(40),a(15)),d=a.n(i),p=function(e){var t=e.data,a=t.preview,n=t.title.replace(/&amp;/g,"&");a&&(a=a.images[0].source.url.replace(/&amp;/g,"&")),n.length>50&&(n=n.substring(0,47).concat("..."));var l=new Date(1e3*t.created_utc);return l=l.getFullYear().toString()+"/"+(l.getMonth()+1).toString()+"/"+l.getDate().toString(),r.a.createElement("div",{className:"Post"},r.a.createElement("div",{className:"PreviewImage"},a?r.a.createElement("img",{src:a,alt:"preview",width:"150",height:"150"}):r.a.createElement("img",{src:d.a,alt:"preview",width:"150",height:"150"})),r.a.createElement("a",{href:t.url},n),r.a.createElement("p",null,r.a.createElement("span",{className:"Author"},"by ",r.a.createElement("a",{href:"https://www.reddit.com/u/".concat(t.author)},t.author)),r.a.createElement("span",null," "),r.a.createElement("span",{className:"Subreddit"},"to ",r.a.createElement("a",{href:"https://www.reddit.com/r/".concat(t.subreddit)},"r/",t.subreddit))),r.a.createElement("p",{className:"Date"},"Posted on ",l.toString()),r.a.createElement("p",{className:"Stats"},r.a.createElement("span",null,"Comments: ",t.num_comments," "),r.a.createElement("span",null,"Score: ",t.score)),r.a.createElement("a",{className:"Link",href:t.full_link},"link"))},b=(a(41),function(e){var t=e.data,a=e.postInfoArray.find((function(e){return e.postId===t.link_id})),n=a.postLink,l=new Date(1e3*t.created_utc);l=l.getFullYear().toString()+"/"+(l.getMonth()+1).toString()+"/"+l.getDate().toString();var c=a.postTitle.replace(/&amp;/g,"&");c.length>50&&(c=c.substring(0,47).concat("..."));var m=t.body;return m.length>300&&(m=m.substring(0,297).concat("...")),r.a.createElement("div",{className:"Comment"},r.a.createElement("div",{className:"AuthorAndSubreddit"},r.a.createElement("p",null,r.a.createElement("span",{className:"Author"},"by ",r.a.createElement("a",{href:"https://www.reddit.com/u/".concat(t.author)},t.author)),r.a.createElement("span",null," "),r.a.createElement("span",{className:"Subreddit"},"at ",r.a.createElement("a",{href:"https://www.reddit.com/r/".concat(t.subreddit)},"r/",t.subreddit)))),r.a.createElement("p",{className:"Body"},m),r.a.createElement("p",{className:"BottomLine"},r.a.createElement("span",{className:"Date"},"Posted on ",l.toString()),r.a.createElement("span",{className:"Link"},r.a.createElement("a",{href:n+t.id},"link"))))}),E=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),u=Object(m.a)(c,2),o=u[0],i=u[1],d=Object(n.useState)(""),E=Object(m.a)(d,2),h=E[0],f=E[1],v=Object(n.useState)(""),g=Object(m.a)(v,2),S=g[0],O=g[1],j=Object(n.useState)(""),y=Object(m.a)(j,2),k=y[0],N=y[1],T=Object(n.useState)(50),C=Object(m.a)(T,2),w=C[0],z=C[1],I=Object(n.useState)(),F=Object(m.a)(I,2),q=F[0],P=F[1],X=Object(n.useState)(),L=Object(m.a)(X,2),V=L[0],x=L[1],G=Object(n.useState)(!1),R=Object(m.a)(G,2),D=R[0],B=R[1],M=Object(n.useState)(!0),W=Object(m.a)(M,2),K=W[0],U=W[1],H=Object(n.useState)("score"),J=Object(m.a)(H,2),Y=J[0],Q=J[1],Z=Object(n.useState)(!1),_=Object(m.a)(Z,2),$=_[0],ee=_[1],te=Object(n.useState)([]),ae=Object(m.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)([]),ce=Object(m.a)(le,2),me=ce[0],ue=ce[1],Ae=function(e){var t=e.target,a=t.name,n=t.value;"author"===a&&i(n),"title"===a&&f(n),"subreddit"===a&&O(n),"searchTerm"===a&&N(n),"size"===a&&z(n),"after"===a&&P(n),"before"===a&&x(n),"sortType"===a&&Q(n),"sort"===a&&("desc"===n?(U(!0),B(!1)):(U(!1),B(!0))),"searchType"===a&&l("submissions"===n)};return Object(n.useEffect)((function(){if(a){var e=ne.map((function(e){return r.a.createElement(p,{key:e.id,data:e})}));ue(e),ee(!1)}else{var t=ne.map((function(e){return e.link_id})).join(",");console.log("commentLinkString",t),A.a.get("https://api.pushshift.io/reddit/search/submission/?ids=".concat(t,"&size=").concat(w)).then((function(e){var t=e.data.data,a=ne.map((function(e){var a=t.find((function(t){return"t3_"+t.id===e.link_id}));return{postId:e.link_id,postLink:a.full_link,postTitle:a.title}}));console.log(a);var n=ne.map((function(e){return r.a.createElement(b,{key:e.id,data:e,postInfoArray:a})}));ue(n),ee(!1)})).catch((function(e){console.log(e)}))}}),[ne]),r.a.createElement("form",{onSubmit:function(e){ee(!0),e.preventDefault();var t=a?"https://api.pushshift.io/reddit/search/submission":"https://api.pushshift.io/reddit/search/comment",n=K?"desc":"asc";A.a.get(t,{params:{author:o,title:h,q:k,subreddit:S,size:w,after:q,before:V,sort:n,sort_type:Y}}).then((function(e){re(e.data.data),console.log(e.data.data)})).catch((function(e){console.log(e)}))}},r.a.createElement("label",null,"Search Type "),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"searchType",onChange:Ae,value:"submissions",checked:a}),"Posts"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"searchType",onChange:Ae,value:"comments",checked:!a}),"Comments"),r.a.createElement("br",null),r.a.createElement("label",null,"Author "),r.a.createElement("input",{type:"text",name:"author",onChange:Ae,value:o}),r.a.createElement("br",null),r.a.createElement("label",null,"Subreddit "),r.a.createElement("input",{type:"text",name:"subreddit",onChange:Ae,value:S}),r.a.createElement("br",null),r.a.createElement("label",null,"Search Term "),r.a.createElement("input",{type:"text",name:"searchTerm",onChange:Ae,value:k}),r.a.createElement("br",null),r.a.createElement("label",null,"Title "),r.a.createElement("input",{type:"text",name:"title",onChange:Ae,value:h}),r.a.createElement("br",null),r.a.createElement("label",null,"Return Size "),r.a.createElement("input",{type:"number",name:"size",onChange:Ae,value:w}),r.a.createElement("br",null),r.a.createElement("label",null,"After "),r.a.createElement("input",{type:"date",name:"after",onChange:Ae,value:q}),r.a.createElement("br",null),r.a.createElement("label",null,"Before "),r.a.createElement("input",{type:"date",name:"before",onChange:Ae,value:V}),r.a.createElement("br",null),r.a.createElement("label",null,"Sort "),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"sort",onChange:Ae,value:"desc",checked:K}),"Descending"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"sort",onChange:Ae,value:"asc",checked:D}),"Ascending"),r.a.createElement("br",null),r.a.createElement("label",null,"Sort Type "),r.a.createElement("select",{name:"sortType",onChange:Ae,value:Y},r.a.createElement("option",{value:"score"},"Score"),r.a.createElement("option",{value:"num_comments"},"Number of Comments"),r.a.createElement("option",{value:"created_utc"},"Created Date")),r.a.createElement("br",null),r.a.createElement("button",null,"Search"),r.a.createElement("br",null),r.a.createElement("div",null,$?r.a.createElement("img",{src:s.a,alt:"loading"}):me))};var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5c75fc4f.chunk.js.map