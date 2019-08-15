const cardBtns = document.querySelectorAll(".card__btn");
cardBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.target.parentNode.parentNode.children[0].classList.toggle(
      "card__front--hidden"
    );
  });
});
//
const headerBtn = document.querySelector(".header__btn");
const searchAnchor = document.getElementById("search");
headerBtn.addEventListener("click", () => {
  window.scrollTo({
    behavior: "smooth",
    top: searchAnchor.offsetTop
  });
});
//
const CityExplorePopupBtn = document.querySelector(".explore__btn");
CityExplorePopupBtn.addEventListener("click", () => {
  const popup = document.querySelector(".popup");
  popup.classList.remove("popup--hidden");
});
//
const popupCloseBtn = document.querySelector(".popup__btn");
popupCloseBtn.addEventListener("click", e => {
  console.log(e.target.parentNode.parentNode);
  e.target.parentNode.parentNode.classList.add("popup--hidden");
});
