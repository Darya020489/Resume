const modal = document.querySelector(".modal");
const avatar = document.querySelector(".main-info__avatar");

avatar.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("body_hidden");
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
