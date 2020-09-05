export class Base {
 constructor(elem) {
  this.elem = elem;
 }
 addClass(...className) {
  this.elem.classList.add(...className);
 }
 removeClass(className) {
  this.elem.classList.remove(className);
 }
 toogleClass(className) {
  this.elem.classList.toggle(className);
 }
 containsClass(className) {
  this.elem.classList.contains(className);
 }
}