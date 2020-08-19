import {
 Base
} from './base.js';

export class Button extends Base {
 constructor(name) {
  let button = document.createElement('button');
  super(button);
  this.button = button;
  this.name = name;
  button.append(this.name);
 }

 setName(name) {
  this.name = name;
  this.button.innerHTML = name;
 }
 onClick(func) {
  this.button.onclick = func;
 }
 eventList(func) {
  this.button.addEventListener('click', func);
 }
 getElement() {
  return this.button;
 }
}