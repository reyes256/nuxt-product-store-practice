import{_ as u}from"./nuxt-link.32a35334.js";import{_ as p,o,c as s,a as c,t as i,f as n,g as l,p as m,b as h,w as f,F as x,r as g,h as v}from"./entry.bb8fef05.js";import{u as y,a as b}from"./fetch.34d1ef22.js";const w=t=>(m("data-v-fa98842b"),t=t(),h(),t),C={class:"card text-center"},N=["src"],$={class:"font-bold text-gray-500 m-4 truncate"},k=w(()=>c("p",{class:"btn my-4"},"View Details",-1)),I={__name:"ProductCard",props:["product"],setup(t){return(e,a)=>{const r=u;return o(),s("div",C,[c("img",{src:t.product.image,class:"thumb"},null,8,N),c("p",$,i(t.product.title),1),n(r,{to:`/products/${t.product.id}`},{default:l(()=>[k]),_:1},8,["to"])])}}},S=p(I,[["__scopeId","data-v-fa98842b"]]),B={class:"grid grid-cols-4 gap-5"},M={__name:"index",async setup(t){let e,a;const{data:r}=([e,a]=f(()=>b("https://fakestoreapi.com/products","$U48yGv7YOO")),e=await e,a(),e);return y({title:"Nuxt Dojo | Merch",meta:[{name:"description",content:"Nuxt 3 Merch"}]}),(D,F)=>{const _=S;return o(),s("div",null,[c("div",B,[(o(!0),s(x,null,g(v(r),d=>(o(),s("div",null,[n(_,{product:d},null,8,["product"])]))),256))])])}}};export{M as default};
