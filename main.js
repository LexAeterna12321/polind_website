const cardBtns = document.querySelectorAll(".card__btn");

cardBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.target.parentNode.parentNode.children[0].classList.toggle(
      "card__front--hidden"
    );
  });
});
