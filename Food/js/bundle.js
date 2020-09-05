/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/tabs */ "./js/module/tabs.js");
/* harmony import */ var _module_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/calc */ "./js/module/calc.js");
/* harmony import */ var _module_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/cards */ "./js/module/cards.js");
/* harmony import */ var _module_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/forms */ "./js/module/forms.js");
/* harmony import */ var _module_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/modals */ "./js/module/modals.js");
/* harmony import */ var _module_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/slider */ "./js/module/slider.js");
/* harmony import */ var _module_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/timer */ "./js/module/timer.js");









window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => Object(_module_modals__WEBPACK_IMPORTED_MODULE_4__["openModal"])(".modal", modalTimerId), 300000);
  Object(_module_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  Object(_module_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2020-12-01');
  Object(_module_modals__WEBPACK_IMPORTED_MODULE_4__["default"])("[data-modal]", ".modal", modalTimerId);
  Object(_module_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('form', modalTimerId);
  Object(_module_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_module_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
  Object(_module_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
}); //DOMContentLoaded – загружается после загрузки всех остальных скриптов

//запрос без axios
/*   const getResourses = async (url) => {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Couldn't get resourses url : ${url}, status : ${res.status}`);
      }

      return await res.json();
    };

    first variant
    getResourses('http://localhost:3000/menu')
      .then(data => {
        data.forEach(({
          img,
          altimg,
          title,
          descr,
          price
        }) => {
          new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
        });
      }); */

/*       showSlides(slideIndex);

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = `${slides.length}`;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length; //последнему элементу
    }
    slides.forEach((elem) => (elem.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  } 

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
  next.addEventListener("click", () => {
    plusSlides(1);
  });
  
  */

/***/ }),

/***/ "./js/module/calc.js":
/*!***************************!*\
  !*** ./js/module/calc.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {

  const result = document.querySelector(".calculating__result span");

  let sex, height, weight, age, ratio;

  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "female";
    localStorage.setItem("sex", "female");
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = "female";
    localStorage.setItem("ratio", 1.375);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((elem) => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute("id") === localStorage.getItem("sex")) {
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings("#gender div", "calculating__choose-item_active");
  initLocalSettings(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = "____";
    }
    if (sex === "female") {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    }
    if (sex === "male") {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }

  // calcTotal();

  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
        } else {
          sex = e.target.getAttribute("id");
          localStorage.setItem("sex", e.target.getAttribute("id"));
          console.log(ratio, sex);
        }

        elements.forEach((elem) => {
          elem.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStaticInformation("#gender div", "calculating__choose-item_active");
  getStaticInformation(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      if (input.value.match(/\D/gi)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }
      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }

  getDynamicInformation("#height");
  getDynamicInformation("#weight");
  getDynamicInformation("#age");
}
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/module/cards.js":
/*!****************************!*\
  !*** ./js/module/cards.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cards() {
  class MenuCard {
    constructor(src, alt, subtitle, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 10;
      this.changeToRub();
    }

    changeToRub() {
      this.price = this.transfer * this.price;
    }
    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
      <img src=${this.src} alt=${this.alt}>
      <h3 class="menu__item-subtitle">${this.subtitle}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span>рб/день</div>
      </div>
    `;
      this.parent.append(element);
    }
  }
  axios.get("http://localhost:3000/menu").then((resourses) => {
    resourses.data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/module/forms.js":
/*!****************************!*\
  !*** ./js/module/forms.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./js/module/modals.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/form/spinner.svg",
    success: "Complited successfully",
    failure: "We will contact with you",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
       display: block;
       margin: 0 auto;
     `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      //Thanks Modal

      function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.add("hide");
        Object(_modals__WEBPACK_IMPORTED_MODULE_0__["openModal"])(".modal", modalTimerId);

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
         <div class='modal__content'>
           <div data-close class='modal__close'>&times;</div>
           <div class='modal__title'>${message}</div>
         </div>
       `;
        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
          thanksModal.remove();
          prevModalDialog.classList.add("show");
          prevModalDialog.classList.remove("hide");
          Object(_modals__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(".modal");
        }, 4000);
      }
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/module/modals.js":
/*!*****************************!*\
  !*** ./js/module/modals.js ***!
  \*****************************/
/*! exports provided: openModal, closeModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove("show");
  modal.classList.add("hide");
  document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function modals(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((elem) => {
    elem.addEventListener("click", () => openModal(modalSelector, modalTimerId));
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") === "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });


  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight ===
      document.documentElement.scrollHeight // Текущая прокрутка сверху + контентная составляющая документа = высота документа в целом = высоте scrollа
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}


/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./js/module/slider.js":
/*!*****************************!*\
  !*** ./js/module/slider.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({
 container,
 slide,
 nextArrow,
 prevArrow,
 totalCounter,
 currentCounter,
 wrapper,
 field
}) {
 const slides = document.querySelectorAll(slide),
  prev = document.querySelector(prevArrow),
  slider = document.querySelector(container),
  next = document.querySelector(nextArrow),
  current = document.querySelector(currentCounter),
  total = document.querySelector(totalCounter),
  slidesWrapper = document.querySelector(wrapper),
  slidesField = document.querySelector(field),
  width = window.getComputedStyle(slidesWrapper).width;

 let slideIndex = 1,
  offset = 0;

 slidesField.style.width = 100 * slides.length + "%";
 slidesField.style.display = "flex";
 slidesField.style.transition = "0.5s all";

 slidesWrapper.style.overflow = "hidden";

 slides.forEach((slide) => {
  slide.style.width = width;
 });

 slider.style.position = "relative";

 const indicators = document.createElement("ol"),
  dots = [];
 slider.append(indicators);
 indicators.classList.add("carousel-indicators");

 for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("li");
  dot.setAttribute("data-slide-to", i + 1);
  dot.classList.add("dot");
  indicators.append(dot);
  if (i == 0) {
   dot.style.opacity = "1";
  }
  indicators.append(dot);
  dots.push(dot);
 }

 if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
  current.textContent = `0${slideIndex}`;
 } else {
  total.textContent = `${slides.length}`;
  current.textContent = slideIndex;
 }

 function noDigits(str) {
  return +str.replace(/\D/g, "");
 }
 next.addEventListener("click", () => {
  if (offset === noDigits(width) * (slides.length - 1)) {
   offset = 0;
  } else {
   offset += noDigits(width);
  }
  slidesField.style.transform = `translate(-${offset}px)`;

  if (slideIndex == slides.length) {
   slideIndex = 1;
  } else {
   slideIndex++;
  }

  if (slides.length < 10) {
   current.textContent = `0${slideIndex}`;
  } else {
   current.textContent = slideIndex;
  }

  dots.forEach((dot) => (dot.style.opacity = ".5"));
  dots[slideIndex - 1].style.opacity = 1;
 });

 prev.addEventListener("click", () => {
  if (offset === 0) {
   offset = noDigits(width) * (slides.length - 1);
  } else {
   offset -= noDigits(width);
  }
  slidesField.style.transform = `translate(-${offset}px)`;

  if (slideIndex == 1) {
   slideIndex = slides.length;
  } else {
   slideIndex--;
  }

  if (slides.length < 10) {
   current.textContent = `0${slideIndex}`;
  } else {
   current.textContent = slideIndex;
  }

  dots.forEach((dot) => (dot.style.opacity = ".5"));
  dots[slideIndex - 1].style.opacity = 1;
 });

 dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
   let slideTo = +e.target.getAttribute("data-slide-to");
   slideIndex = slideTo;
   console.log(slideIndex);
   offset = noDigits(width) * (slideTo - 1);

   slidesField.style.transform = `translateX(-${offset}px)`;

   if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
   } else {
    current.textContent = slideIndex;
   }
   dots.forEach((dot) => (dot.style.opacity = ".5"));
   dots[slideIndex - 1].style.opacity = 1;
  });
 });
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/module/tabs.js":
/*!***************************!*\
  !*** ./js/module/tabs.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
 const tabs = document.querySelectorAll(tabsSelector);
 const tabsContent = document.querySelectorAll(tabsContentSelector);
 const tabsParent = document.querySelector(tabsParentSelector);

 function hideTabContent() {
  tabsContent.forEach((elem) => {
   elem.classList.remove("show", "fade");
   elem.classList.add("hide");
  });

  tabs.forEach((elem) => {
   elem.classList.remove(activeClass);
  });
 }

 function showTabContent(i) {
  tabsContent[i].classList.remove("hide");
  tabsContent[i].classList.add("show", "fade");
  tabs[i].classList.add("tabheader__item_active");
 }
 //callfunction
 hideTabContent();
 showTabContent(0);

 tabsParent.addEventListener("click", (event) => {
  const target = event.target;
  if (target && target.classList.contains(tabsSelector.slice(1))) {
   tabs.forEach((item, i) => {
    if (target == item) {
     hideTabContent();
     showTabContent(i);
    }
   });
  } //если цель для события и цель для события сод класс (name), тогда пройтись по всем табам и если цель для события === табу, скрыть контент других табов и добавить контент таба подчиняющийся условию.
 });
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/module/timer.js":
/*!****************************!*\
  !*** ./js/module/timer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadLine) {
 function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date()), //получает миллисекунды
   days = Math.floor(total / (1000 * 60 * 60 * 24)),
   hours = Math.floor((total / (1000 * 60 * 60)) % 24),
   minutes = Math.floor((total / (1000 * 60)) % 60),
   seconds = Math.floor((total / 1000) % 60);

  return {
   total: total,
   days: days,
   hours: hours,
   minutes: minutes,
   seconds: seconds,
  };
 }

 function getZero(num) {
  if (num >= 0 && num < 10) {
   return `0${num}`;
  } else {
   return num;
  }
 }

 function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
   days = timer.querySelector("#days"),
   hours = timer.querySelector("#hours"),
   minutes = timer.querySelector("#minutes"),
   seconds = timer.querySelector("#seconds");
  const timerInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
   const t = getTimeRemaining(endtime);
   days.innerHTML = getZero(t.days);
   hours.innerHTML = getZero(t.hours);
   minutes.innerHTML = getZero(t.minutes);
   seconds.innerHTML = getZero(t.seconds);

   if (t.total <= 0) {
    clearInterval(timerInterval);
   }
  }
 }

 setClock(id, deadLine);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const postData = async (url, data) => {
 const res = await fetch(url, {
  method: "POST",
  headers: {
   "Content-type": "application/json",
  },
  body: data,
 });
 return await res.json();
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map