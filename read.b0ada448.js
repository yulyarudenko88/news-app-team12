!function(){for(var e=document.getElementsByClassName("revision-date-btn"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active-revision-date");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));var a=document.querySelector(".theme-switch__checkbox"),r=document.querySelector("body");a.addEventListener("change",(function(){r.classList.toggle("theme-dark"),"theme-dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","theme-dark"):localStorage.removeItem("theme")})),"theme-dark"===localStorage.getItem("theme")?(r.classList.add("theme-dark"),a.checked=!0):a.checked=!1;var l=Array.from(document.querySelectorAll(".nav-list__link")),c=window.location.href;l.map((function(e){var t=e.innerHTML.toLowerCase();c.includes(t)?e.classList.add("current"):e.classList.remove("current")}))}();
//# sourceMappingURL=read.b0ada448.js.map