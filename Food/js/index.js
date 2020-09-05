import tabs from './module/tabs';
import calc from './module/calc';
import cards from './module/cards';
import forms from './module/forms';
import modals from './module/modals';
import slider from './module/slider';
import timer from './module/timer';
import {
  openModal
} from './module/modals';

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 300000);
  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  timer('.timer', '2020-12-01');
  modals("[data-modal]", ".modal", modalTimerId);
  forms('form', modalTimerId);
  cards();
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
  calc();
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