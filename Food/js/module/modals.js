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

export {
  openModal,
  closeModal
};
export default modals;