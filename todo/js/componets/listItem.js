import {
 Base
} from './base.js';

export class ListItem extends Base {
 constructor(name) {
  let li = document.createElement('li');
  super(li);
  this.name = name;
  this.li = li;
 }
 methodAppend(...elem) {
  this.li.append(...elem);
 }
 setName(name) {
  this.name = name;
  this.li.innerHTML = name;
 }
 onClick(func) {
  this.li.onclick = func;
 }
 getElement() {
  return this.li;
 }
}