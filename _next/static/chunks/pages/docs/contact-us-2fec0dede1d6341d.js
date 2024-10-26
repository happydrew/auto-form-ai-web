(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{7529:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/contact-us",function(){return r(8952)}])},205:function(t,e,r){"use strict";r.d(e,{Z:function(){return l},V:function(){return o}});var n=r(1527),a=r(6259);function o(t){let{children:e,className:r,as:o="span",...i}=t;return(0,n.jsx)(o,{className:(0,a.W)("py-1 px-2.5 capitalize text-xs rounded bg-zinc-200 dark:bg-zinc-700 font-bold roboto-mono",r),...i,children:e})}var i=r(2906),s=r.n(i);function l(t){var e;let{children:r,className:o,as:i="div",...l}=t,c="a"===i||i===s();return(0,n.jsx)(i,{className:(0,a.W)("border border-zinc-200 dark:border-[#414141] p-8 lg:p-12 bg-white dark:bg-neutral-800","rounded-none",c&&["hover:!border-primary hover:dark:bg-neutral-700/50 hover:shadow-2xl hover:shadow-primary/10","dark:shadow-none transition-colors"],o),...(null===(e=l.href)||void 0===e?void 0:e.startsWith("https://"))&&{target:"_blank",rel:"noreferrer"},...l,children:r})}},8984:function(t,e,r){"use strict";r.d(e,{G:function(){return u}});var n=r(1527),a=r(7183),o=r(2906),i=r.n(o),s=r(5715),l=r(205),c=r(5805),d=r(6259);function u(t){return[]}e.Z=function(){let t={div:"div",h1:"h1",h3:"h3",span:"span",time:"time",...(0,a.a)()},{asPath:e}=(0,c.useRouter)(),r=(0,s.HI)("/blog").flatMap(t=>t.children||t).sort((t,e)=>e.frontMatter.date-t.frontMatter.date),o=e.startsWith("/blog")?"":e.replace("/tags/","").replace(/\/$/,""),u=r.flatMap(t=>t.frontMatter.tags).reduce((t,e)=>(t[e]||(t[e]=0),t[e]+=1,t),{}),m=(0,n.jsx)(t.div,{className:"flex gap-3 md:gap-5 mt-6 flex-wrap roboto-mono",children:Object.entries(u).sort((t,e)=>e[1]-t[1]).map(t=>{let[e,r]=t;return(0,n.jsxs)(i(),{href:o===e?"/blog":"/tags/".concat(e),"data-active":o===e?"":void 0,className:(0,d.W)("tag [&[data-active]]:bg-primary capitalize"),children:[e.replaceAll("-"," ")," (",r,")"]},e)})}),h=r.map(e=>(!o||e.frontMatter.tags.includes(o))&&(0,n.jsxs)(l.Z,{as:i(),href:e.route,className:"flex flex-col",children:[(0,n.jsx)(t.div,{className:"gap-2 flex mb-7",children:e.frontMatter.tags.map(t=>(0,n.jsx)(l.V,{children:t.replaceAll("-"," ")},t))}),(0,n.jsx)(t.div,{className:"font-extrabold text-xl md:text-3xl text-balance",children:e.frontMatter.title}),(0,n.jsxs)(t.div,{className:"opacity-50 text-sm my-7 flex gap-2",children:[(0,n.jsx)(t.time,{dateTime:e.frontMatter.date.toISOString(),children:e.frontMatter.date.toLocaleDateString("en",{month:"long",day:"numeric",year:"numeric"})}),(0,n.jsx)(t.span,{className:"border-r border-gray-500"}),(0,n.jsxs)(t.span,{children:["by ",e.frontMatter.byline]})]}),(0,n.jsx)(t.span,{className:"text-primary block font-bold mt-auto",children:"Read more →"})]},e.route));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.div,{className:"py-10 md:py-20 container",children:[(0,n.jsx)(t.h1,{className:"text-4xl md:text-7xl font-extrabold mb-10",children:"Blog"}),(0,n.jsx)(t.h3,{className:"text-2xl font-bold",children:"Categories"}),m]}),(0,n.jsx)(t.div,{className:"container grid md:grid-cols-2 gap-7 pb-10",children:h})]})}},8952:function(t,e,r){"use strict";r.r(e),r.d(e,{useTOC:function(){return l}});var n=r(1527),a=r(7801),o=r(3015),i=r(7183),s=r(2409);function l(t){return[{value:"Contact Us",id:"contact-us",depth:2}]}e.default=(0,a.c)(function(t){let{toc:e=l(t)}=t,r={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:e[0].id,children:e[0].value}),"\n",(0,n.jsx)(r.p,{children:"If you have any questions or concerns about AutoFormAI, please contact us at:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(s.LQ,{className:"inline-block w-6 h-6 mr-1"}),": ",(0,n.jsx)(r.a,{href:"mailto:zhugetd@gmail.com",children:"zhugetd@gmail.com"})]}),"\n"]})]})},"/docs/contact-us",{filePath:"src/pages/docs/contact-us.mdx",timestamp:1729949785e3,pageMap:o.v,frontMatter:{title:"Contact Us",author:"Drew Grant",description:"Contact us for more information about AutoFormAI.",date:"2024-10-26"},title:"Contact Us"},"undefined"==typeof RemoteContent?l:RemoteContent.useTOC)},3015:function(t,e,r){"use strict";r.d(e,{v:function(){return s}}),r.r({});var n=r(1527),a=r(9722),o=r(2906),i=r.n(o);r(7042),r(8984);let s=[{data:{index:{type:"page",display:"hidden",theme:{layout:"raw"}},tags:{display:"children",theme:{layout:"raw"}},docs:{type:"page",title:"Documentation"},blog:{type:"page",title:"Blog",theme:{layout:"raw",typesetting:"article",timestamp:!1}}}},{name:"blog",route:"/blog",children:[{data:{"*":{display:"hidden",theme:{sidebar:!1,timestamp:!0,layout:"default",topContent:function(){let{frontMatter:t}=(0,a.ZR)(),{title:e,byline:r,tags:o}=t,s=new Date(t.date);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-balance",children:e}),(0,n.jsxs)("div",{className:"text-gray-500 text-center",children:[(0,n.jsx)("time",{dateTime:s.toISOString(),children:s.toLocaleDateString("en",{month:"long",day:"numeric",year:"numeric"})})," ","by ",r]}),(0,n.jsx)("div",{className:"mt-6 gap-2 flex justify-center roboto-mono",children:o.map(t=>(0,n.jsx)(i(),{href:"/tags/".concat(t),className:"transition-colors py-1 px-2.5 capitalize rounded bg-zinc-200 dark:bg-zinc-700 font-bold hover:!no-underline hover:!bg-primary hover:text-white dark:hover:text-zinc-900",children:t.replaceAll("-"," ")},t))})]})}}}}},{name:"auto-form-ai",route:"/blog/auto-form-ai",frontMatter:{title:"AutoFormAI - One-Click Web Form Autofill",author:"Drew Grant",description:"AutoFormAI is an efficient and intelligent Chrome extension designed to help you quickly and easily complete various web forms.",date:new Date(17299008e5),tags:["AutoFormAI","Chrome Extension","AI","Web Form Autofill"]}}]},{name:"blog",route:"/blog",frontMatter:{sidebarTitle:"Blog"}},{name:"docs",route:"/docs",children:[{data:{introduction:"Introduction","-- 2":{type:"separator",title:"About"},"privacy-policy":{title:"Privacy Policy"},"contact-us":"Contact Us"}},{name:"contact-us",route:"/docs/contact-us",frontMatter:{title:"Contact Us",author:"Drew Grant",description:"Contact us for more information about AutoFormAI.",date:new Date(17299008e5)}},{name:"introduction",route:"/docs/introduction",frontMatter:{title:"AutoFormAI - One-Click Web Form Autofill",author:"Drew Grant",description:"AutoFormAI is an efficient and intelligent Chrome extension designed to help you quickly and easily complete various web forms.",date:new Date(17299008e5)}},{name:"privacy-policy",route:"/docs/privacy-policy",frontMatter:{title:"Privacy Policy for AutoFormAI",author:"Drew Grant",description:"This Privacy Policy explains how we collect, use, and protect your personal information when you use our Chrome extension.",date:new Date(17299008e5)}}]},{name:"index",route:"/",frontMatter:{title:"AutoFormAI - One-Click Web Form Autofill",author:"Drew Grant",description:"AutoFormAI is an efficient and intelligent Chrome extension designed to help you quickly and easily complete various web forms.",date:new Date(17299008e5)}},{name:"tags",route:"/tags",children:[]}]}},function(t){t.O(0,[975,888,774,179],function(){return t(t.s=7529)}),_N_E=t.O()}]);