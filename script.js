const navItem = document.querySelectorAll(".nav-link");

navItem.forEach((el) => {
  el.addEventListener("click", () => {
    navItem.forEach((item) => {
      if (item !== el) {
        item.classList.remove("color-primary");
        item.classList.remove("text-light");
      }
    });
    el.classList.toggle("color-primary");
    el.classList.toggle("text-light");
  });
});
