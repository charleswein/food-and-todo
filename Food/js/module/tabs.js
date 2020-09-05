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
export default tabs;