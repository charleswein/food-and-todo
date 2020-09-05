export class Local {
 static get todos() {
  let todosStr = localStorage.getItem('groupDataList');
  return JSON.parse(todosStr);
 }
 static set todos(todosArr) {
  localStorage.setItem('groupDataList', JSON.stringify(todosArr));
 }
}