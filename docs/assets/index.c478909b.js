import{j as e,f as a,o as n,c as t,a as s,t as r}from"./vendor.ed891d9b.js";import{A as o}from"./index.f9691c3e.js";const u=new o(window.api.others).getInstance();const d={setup(){const n=e().path,t=a("");var s;return u({url:"/manage/add.json",method:"get",data:s}).then((e=>{t.value=e.resultMessage})),{route:n,manage:t}}};d.render=function(e,a,o,u,d,l){return n(),t("div",null,[s("h1",null,r(u.route),1),s("span",null,r(u.manage),1)])};export default d;
