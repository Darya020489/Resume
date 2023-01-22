const modal = document.querySelector(".modal");
const avatar = document.querySelector(".main-info__avatar");
// const span = document.querySelector(".modal__close");

avatar.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("body_hidden");
};

// span.onclick = function () {
//   modal.style.display = "none";
//   document.body.classList.remove("body_hidden");
// };

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
