import {
  Local
}
from './localStorage.js';

import {
  Button
} from './componets/button.js';

import {
  Paragraf
} from './componets/paragraf.js';

import {
  ListItem
} from './componets/listItem.js';

let container = document.querySelector('.container-fluid');
let input = document.querySelector('.form__input');
let form = document.querySelector('form');
let groupDataList = Local.todos || [];
let ul = document.querySelector('.list-group');
let doneButton, removeButton;

let obj = {
  text: undefined,
  id: undefined,
  done: false
};

const delay = ms => {
  return new Promise(resolve => {
    setInterval(() => {
      container.classList.toggle('next-foto');
      resolve();
    }, ms);
  });
};

let delayOne = delay(5000); //timer


let doneButtonOnClick = (e) => {
  e.target.nextSibling.classList.toggle('text--active');
};

const removeButtonOnClick = (e) => {
  e.target.parentElement.remove();
};

const dataList = newValue => {
  if (input.value.trim().length > 2) {
    newValue = input.value;
    let dropDownList = document.querySelector('.drop-list');
    const li = new ListItem();
    li.addClass('list-group-item', 'list__item');

    const p = new Paragraf(newValue);
    p.addClass('text');

    doneButton = new Button('Done');
    doneButton.eventList(doneButtonOnClick);
    doneButton.addClass('list__button');

    removeButton = new Button('Remove');
    removeButton.eventList(removeButtonOnClick);

    dropDownList.style.display = "flex";
    ul.append(li.getElement());
    li.methodAppend(doneButton.getElement(), p.getElement(), removeButton.getElement());
  } else {
    alert('Введите более 2-х чисел');
  }
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  dataList();
  form.reset();
});