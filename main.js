(()=>{"use strict";var e={555:(e,t,n)=>{n.d(t,{p:()=>r,D:()=>d});const l=function(e,t,n,l){this.project=e,this.title=t,this.date=n,this.priority=l,r.push(this)},o=function(){r=r.filter((e=>e.title!==this.value)),localStorage.clear("listy"),localStorage.setItem("listy",JSON.stringify(r)),d(r)},i=function(){document.getElementById("toDo").innerHTML="";const e=document.getElementById("new");e.style.display="none";let t=r.findIndex((e=>e.title==this.value)),n=document.getElementById("newForm");n.style.display="flex";let l=document.getElementById("projectText");l.value=r[t].project;let o=document.getElementById("toDoText");o.value=r[t].title;let i=document.getElementById("dateText");i.innerText=r[t].date;let c=document.getElementById("urgentBox"),a=document.createElement("button");a.setAttribute("id","submit"),a.innerText="Edit",n.appendChild(a),a.addEventListener("click",(function(){e.style.display="block",n.removeChild(a),r[t].project=l.value,r[t].title=o.value,r[t].date=i.value,c.checked?r[t].priority=!0:r[t].priority=!1,l.value="shopping",o.value="",n.style.display="none",d(r)}))};let r=localStorage.getItem("listy")?JSON.parse(localStorage.getItem("listy")):[];function c(){const e=document.getElementById("projects");e.innerHTML="";let t=r.map((e=>e.project)).filter(((e,t,n)=>n.indexOf(e)==t));t.map((n=>{let l=document.createElement("div");return l.classList.add("projectList"),l.innerText=n,e.appendChild(l),t}));let n=document.querySelectorAll(".projectList");Array.from(n).forEach((e=>{e.addEventListener("click",a)}))}function d(e){const t=document.getElementById("toDo");t.innerHTML="",e.forEach((e=>{let n=document.createElement("div"),l=document.createElement("img"),o=document.createElement("titleBox"),i=document.createElement("img");i.classList.add("editButton"),l.classList.add("checkBox"),n.classList.add("newItem"),i.src="pen.png",l.src="bin.png",i.value=e.title,o.innerText=e.title,l.value=e.title,n.appendChild(i),n.appendChild(o),n.appendChild(l),t.appendChild(n)}));const n=document.querySelectorAll(".editButton");Array.from(n).forEach((e=>{e.addEventListener("click",i)}));const l=document.querySelectorAll(".checkBox");Array.from(l).forEach((e=>{e.addEventListener("click",o)}))}function a(){d(r.filter((e=>e.project===this.innerText)))}0===r.length&&(new l("jobby","get a job","2020/10/15",!0),new l("jobby","write a CV","2020/11/18",!1),new l("home","vacuum","2020/11/15",!0)),c(),d(r),document.getElementById("new").addEventListener("click",(function(){let e=document.getElementById("newForm");e.style.display="flex",document.getElementById("toDo").innerHTML="";let t=document.getElementById("projectText"),n=document.getElementById("toDoText"),o=document.getElementById("dateText"),i=document.getElementById("urgentBox"),a=document.createElement("button");a.setAttribute("id","submit"),a.innerText="+Add",e.appendChild(a),a.addEventListener("click",(function(){let s,u=t.value,m=n.value,p=o.value;e.removeChild(a),s=!!i.checked,new l(u,m,p,s),localStorage.clear("listy"),localStorage.setItem("listy",JSON.stringify(r)),t.value="shopping",n.value="",e.style.display="none",c(),d(r)}))})),function(){let e=document.querySelectorAll(".filterBoxes");for(let n=0;n<e.length;n++){function t(){if("View All"===e[n].innerText)d(r);else if("Urgent"===e[n].innerText)d(r.filter((e=>!0===e.priority)));else if("Today"===e[n].innerText){let e=new Date,t=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate();d(r.filter((e=>e.date===t)))}}e[n].addEventListener("click",t)}}()}},t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={exports:{}};return e[l](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(555)})();