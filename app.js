/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// burger\r\n\r\nconst iconMenu = document.querySelector('.icon-menu')\r\nif (iconMenu) {\r\nconst menuBody = document.querySelector('.menu__body')\r\niconMenu.addEventListener('click', function(e) {\r\n\tdocument.body.classList.toggle('lock')\r\n\ticonMenu.classList.toggle('active')\r\n\tmenuBody.classList.toggle('active')\r\n})\r\n}\r\n\r\n// karusel\r\n// ==============================\r\n\r\n// let activeImage = 0\r\n// const imagesSwiper = document.querySelectorAll('.wedding-right__swiper-slide')\r\n\r\n//  const swiperBtn = document.querySelector('.swiper-button-next').onclick = () =>{\r\n// imagesSwiper[activeImage].classList.remove('active-img')\r\n// imagesSwiper[activeImage].classList.add('none')\r\n// if (activeImage+1 == imagesSwiper.length) {\r\n// activeImage = 0\r\n// } else {\r\n// \tactiveImage++\r\n// }\r\n// imagesSwiper[activeImage].classList.add('active-img')\r\n// imagesSwiper[activeImage].classList.remove('none')\r\n// }\r\n\r\n\r\n// ===============================swiper\r\n\r\nconst swiper = new Swiper('.image-slider', {\r\n\t// Optional parameters\r\n\tdirection: 'horizontal',\r\n\tloop: true,\r\n\r\n\t// If we need pagination\r\n\t// pagination: {\r\n\t//   el: '.swiper-pagination',\r\n\t// },\r\n\r\n\t// Navigation arrows\r\n\tnavigation: {\r\n\t  nextEl: '.swiper-button-next',\r\n\t  prevEl: '.swiper-button-prev',\r\n\t},\r\n\r\n\t// And if we need scrollbar\r\n\tscrollbar: {\r\n\t  el: '.swiper-scrollbar',\r\n\t//   возможность перетаскивать скрол\r\n\tdraggable:true\r\n\t},\r\n\t// курсор перетаскивания\r\n\t// grabCursor: true\r\n\r\n\t// autoHeight: true,\r\n\r\n\t// количество слайдов для показа\r\n\tslidesPerView: 3,\r\n\r\n\tspaceBetween: 30,\r\n\r\n\tslidesPerColomn: 1,\r\n\r\n\tmousewheel: {\r\n// чувствительность колеса\r\nsensitivity:2,\r\n// класс на котором будет срабатывать прокрутка мышью\r\neventsTarget: \".image-slider__image\"\r\n\t},\r\n });\r\n\r\n\r\n//==================================  studio slider\r\n\r\nconst upBtn = document.querySelector('.up-button')\r\nconst downBtn = document.querySelector('.down-button')\r\nconst sidebar = document.querySelector('.sidebar')\r\nconst container = document.querySelector('.container-studio')\r\nconst mainSlide = document.querySelector('.main-slide')\r\nconst slidesCount = mainSlide.querySelectorAll('div').length\r\n// console.log(mainSlide);\r\n\r\nlet activeSlideIndex = 0\r\n\r\n\r\nsidebar.style.top = `-${(slidesCount - 1) * 100}vh`\r\n\r\nupBtn.addEventListener('click', () => {\r\n\tchangeSlide('up')\r\n})\r\n\r\ndownBtn.addEventListener('click', () => {\r\n\tchangeSlide('down')\r\n})\r\n\r\ndocument.addEventListener('keydown', event => {\r\n\tif (event.key === 'ArrowUp') {\r\n\t\tchangeSlide('up')\r\n\t} else if (event.key === 'ArrowDown') {\r\n\t\tchangeSlide('down')\r\n\t}\r\n\r\n})\r\n\r\nfunction changeSlide(direction) {\r\n\tif (direction === 'up') {\r\n\t\tactiveSlideIndex++\r\n\t\tif (activeSlideIndex === slidesCount)\r\n\t\t\tactiveSlideIndex = 0\r\n\t} else if (direction === 'down') {\r\n\t\tactiveSlideIndex--\r\n\t\tif (activeSlideIndex < 0) {\r\n\t\t\tactiveSlideIndex = slidesCount - 1\r\n\t\t}\r\n\t}\r\n\r\n\r\n\tconst height = container.clientHeight\r\n\r\n\tmainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`\r\n\r\n\tsidebar.style.transform = `translateY(${activeSlideIndex * height}px)`\r\n}\r\n\r\n\r\n\r\n// =======tabs================\r\n\r\nconst tabsBtn = document.querySelectorAll('.tabs__nav-btn')\r\nconst tabsItems = document.querySelectorAll('.tabs__item')\r\n\r\ntabsBtn.forEach(onTabClick);\r\n\r\nfunction onTabClick (item) {\r\n\titem.addEventListener('click', function() {\r\n\t\tlet currentBtn = item;\r\n\t\tlet tabId = currentBtn.getAttribute('data-tab');\r\n\t\tlet currentTab = document.querySelector(tabId);\r\n\r\n\t\tif( ! currentBtn.classList.contains('active')) {\r\n\t\t\ttabsBtn.forEach(function(item) {\r\n\t\t\t\titem.classList.remove('active');\r\n\t\t\t\t});\r\n\r\n\t\t\t\ttabsItems.forEach(function(item) {\r\n\t\t\t\t\titem.classList.remove('active');\r\n\t\t\t\t});\r\n\r\n\t\t\t\tcurrentBtn.classList.add('active');\r\n\t\t\t\tcurrentTab.classList.add('active');\r\n\t\t}\r\n\t});\r\n}\r\n\r\ndocument.querySelector('.tabs__nav-btn').click()\r\n\r\n\r\n\r\n// ================================= anchors\r\n\r\nconst anchors = document.querySelectorAll('a[href*=\"#\"]')\r\nanchors.forEach(anchor => {\r\n\tanchor.addEventListener('click', event => {\r\n    event.preventDefault();\r\n\r\n\t const blockId = anchor.getAttribute('href').substring(1);\r\n\r\n\t document.getElementById(blockId).scrollIntoView({\r\n       behavior: 'smooth',\r\n\t\t block: 'start'\r\n\t })\r\n\t})\r\n\r\n})\n\n//# sourceURL=webpack://meela/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\n\r\nmodalBtn.forEach(item => {\r\nitem.addEventListener('click', event => {\r\nlet $this = event.currentTarget;\r\nlet modalId = $this.getAttribute('data-modal');\r\nlet modal = document.getElementById(modalId)\r\nlet modalContent = document.querySelector('.modal__content');\r\nmodalContent.addEventListener('click', event => {\r\n\tevent.stopPropagation();\r\n});\r\n\r\nmodal.classList.add('show');\r\nbody.classList.add('no-scroll');\r\n});\r\n});\r\n\r\nmodalClose.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n    let currentModal = event.currentTarget.closest('.modal');\r\n\r\ncloseModal(currentModal);\r\n\t});\r\n});\r\n\r\nmodal.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n    let currentModal = event.currentTarget;\r\n\r\n     closeModal(currentModal);\r\n\t});\r\n});\r\n\r\nfunction closeModal(currentModal) {\r\n\tcurrentModal.classList.remove('show');\r\n\tbody.classList.remove('no-scroll');\r\n}\n\n//# sourceURL=webpack://meela/./src/assets/js/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	
/******/ })()
;
