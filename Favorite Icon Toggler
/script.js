let parrentUl = document.querySelector(".item-list")
let btns = document.querySelectorAll(".favorite-icon")

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("filled")) {
      btn.classList.remove("filled");
      btn.innerHTML = "&#9825;";
    } else {
      btn.classList.add("filled");
      btn.innerHTML = "&#10084;";
    }
  });
});

