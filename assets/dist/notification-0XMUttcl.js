import{j as n}from"./util-CfqN00QO.js";window.addEventListener("alpine:init",()=>{Alpine.store("toastNotification",{list:[],visible:[],init(){window.addEventListener("cardanoPress:addNotice",e=>this.add(e.detail)),window.addEventListener("cardanoPress:removeNotice",e=>this.remove(e.detail))},add(e){e!=null&&e.id||(e.id=n,e.unique=!0),e!=null&&e.unique||this.remove(e.id),this.list.push(e),this.visible.push(e),e!=null&&e.unique&&setTimeout(()=>{this.remove(e.id)},5e3*this.list.length)},remove(e){[this.visible,this.list].forEach(t=>{const i=t.find(d=>d.id===e),s=t.indexOf(i);0<=s&&t.splice(s,1)})}})});
