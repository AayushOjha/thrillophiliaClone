window.addEventListener("load",function(){function e(){if(u.length)for(let e of u)e.addEventListener("mouseenter",t,!1)}function t(e){var n,r=e.target;g=r.getAttribute("data-menu-identifier"),version=r.getAttribute("data-version"),g&&version&&(req=new XMLHttpRequest,req.open("GET",m+`?menuIdentifier=${g}&version=${version}`,!0),req.send(),req.onreadystatechange=function(){req.readyState===XMLHttpRequest.DONE&&(200===req.status?(a>=1024?r.childNodes[3].childNodes[1].innerHTML=req.responseText:(n=r.getAttribute("data-submenu"),document.getElementById(n).innerHTML=req.responseText),r.setAttribute("data-menu-loaded",!0),r.removeEventListener("mouseenter",t)):console.log("There was a problem with the request."))})}function n(){var e=document.getElementById("additional-data");if(e){var t=e.dataset,n=JSON.parse(t.utmParams);[["input[name='booking_request[utm_campaign]']",n.utm_campaign],["input[name='booking_request[utm_medium]']",n.utm_medium],["input[name='booking_request[utm_source]']",n.utm_source],["input[name='booking_request[utm_term]']",n.utm_term],["input[name='booking_request[utm_content]']",n.utm_content],["input[name='booking_request[referer]']",t.client],["input[name='booking_request[referer]']",t.referer]].forEach(function(e){document.querySelectorAll(e[0]).forEach(function(t){e[1]&&(t.value=e[1])})})}}var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),r=window.pageYOffset,s=document.getElementsByClassName("banner-section-container")[0],o=document.getElementById("header");const i=document.getElementsByClassName("text-prefixer");var d,c;const l=document.querySelector("#header .header-base"),u=(document.getElementById("wrapper"),document.getElementById("promotional-bar-controller"),document.getElementsByClassName("navbar-menu-toggler")),m="/fetch-menu-content";document.getElementById("sticky-nav-list-container");var g;if(e(),s){var v=s.getBoundingClientRect(),f=v.top+v.height,h=document.querySelector(".listing-types-container");a>=1024&&r>f?(l.classList.add("hidden-top-navbar"),h&&h.classList.add("sticky-banner-dock")):a>=1024&&(l.classList.remove("hidden-top-navbar"),h&&h.classList.remove("sticky-banner-dock"))}if(a<1024){const e=document.querySelector("#header-mobile-nav-opener"),t=document.querySelector("#mobile-nav-drop"),n=document.querySelector("#header-search-opener"),a=document.querySelector("#header .search-slide"),r=document.querySelectorAll(".dropdown-toggler-input");function p(){if(r.length)for(let e of r)e.onclick=L}function L(e){r.forEach(t=>{t!=e.target&&(t.checked=!1)})}p(),e.addEventListener("click",n=>{n.stopPropagation(),toggleClass(e,"hamburger-slide-in"),toggleClass(t,"slideIn"),toggleClass(document.querySelector("body"),"has-modal")}),n.addEventListener("click",()=>{toggleClass(a,"showBlock"),toggleClass(document.querySelector("body"),"has-modal")})}if("true"==o.getAttribute("data-scroll-white-nav")&&(d=!!o.classList.contains("transparent-nav"),r>50&&(d&&o.classList.remove("transparent-nav"),o.classList.add("white-nav")),document.addEventListener("scroll",()=>{(r=window.pageYOffset)>50?(d&&o.classList.remove("transparent-nav"),o.classList.add("white-nav")):(d&&o.classList.add("transparent-nav"),o.classList.remove("white-nav"))})),"true"==o.getAttribute("data-scroll-half-nav")&&(c=!!o.classList.contains("half-nav"),r>50&&(c||o.classList.add("half-nav")),document.addEventListener("scroll",()=>{(r=window.pageYOffset)>50?c||o.classList.add("half-nav"):o.classList.remove("half-nav")})),i.length)for(let e of i){var b=e.getAttribute("data-text-prefix");e.innerHTML=b+" "+e.innerHTML}window.addEventListener("click",function(e){if("sign-out-link"===e.target.id){const e=new CustomEvent("userLoggedOut");document.dispatchEvent(e)}}),n()});const toggleClass=(e,t)=>e.classList.contains(t)?e.classList.remove(t):e.classList.add(t);var adasdashdkasjda=1;