!function(){const e=document.querySelector(".icon-menu");if(e){const t=document.querySelector(".menu__body");e.addEventListener("click",(function(o){document.body.classList.toggle("lock"),e.classList.toggle("active"),t.classList.toggle("active")}))}new Swiper(".image-slider",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:3,spaceBetween:30,slidesPerColomn:1,mousewheel:{sensitivity:2,eventsTarget:".image-slider__image"}});const t=document.querySelector(".up-button"),o=document.querySelector(".down-button"),c=document.querySelector(".sidebar"),n=document.querySelector(".container-studio"),r=document.querySelector(".main-slide"),l=r.querySelectorAll("div").length;let s=0;function a(e){"up"===e?(s++,s===l&&(s=0)):"down"===e&&(s--,s<0&&(s=l-1));const t=n.clientHeight;r.style.transform=`translateY(-${s*t}px)`,c.style.transform=`translateY(${s*t}px)`}c.style.top=`-${100*(l-1)}vh`,t.addEventListener("click",(()=>{a("up")})),o.addEventListener("click",(()=>{a("down")})),document.addEventListener("keydown",(e=>{"ArrowUp"===e.key?a("up"):"ArrowDown"===e.key&&a("down")}));const i=document.querySelectorAll(".tabs__nav-btn"),d=document.querySelectorAll(".tabs__item");i.forEach((function(e){e.addEventListener("click",(function(){let t=e,o=t.getAttribute("data-tab"),c=document.querySelector(o);t.classList.contains("active")||(i.forEach((function(e){e.classList.remove("active")})),d.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),c.classList.add("active"))}))})),document.querySelector(".tabs__nav-btn").click()}(),function(){const e=document.querySelectorAll("[data-modal]"),t=document.body,o=document.querySelectorAll(".modal__close"),c=document.querySelectorAll(".modal");function n(e){e.classList.remove("show"),t.classList.remove("no-scroll")}e.forEach((e=>{e.addEventListener("click",(e=>{let o=e.currentTarget.getAttribute("data-modal"),c=document.getElementById(o);document.querySelector(".modal__content").addEventListener("click",(e=>{e.stopPropagation()})),c.classList.add("show"),t.classList.add("no-scroll")}))})),o.forEach((e=>{e.addEventListener("click",(e=>{n(e.currentTarget.closest(".modal"))}))})),c.forEach((e=>{e.addEventListener("click",(e=>{n(e.currentTarget)}))}))}();// ================================= anchors

const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
    event.preventDefault();

	 const blockId = anchor.getAttribute('href').substring(1);

	 document.getElementById(blockId).scrollIntoView({
       behavior: 'smooth',
		 block: 'start'
	 })
	})

})
