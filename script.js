const navItem = document.querySelectorAll(".nav-link");

navItem.forEach((el) => {
  el.addEventListener("click", () => {
    navItem.forEach((item) => {
      if (item !== el) {
        item.classList.remove("color-secondary");
        item.classList.remove("text-dark");
      }
    });
    el.classList.toggle("color-secondary");
    el.classList.toggle("text-dark");
  });
});
