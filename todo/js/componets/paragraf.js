import {
 Base
} from './base.js';

export class Paragraf extends Base {
 constructor(name) {
  let p = document.createElement('p');
  super(p);
  this.name = name;
  p.append(this.name);
  this.p = p;
 }

 setName(name) {
  this.name = name;
  this.p.innerHTML = name;
 }
 onClick(func) {
  this.p.onclick = func;
 }
 getElement() {
  return this.p;
 }
}