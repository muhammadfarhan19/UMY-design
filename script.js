const navItem = document.querySelectorAll(".nav-link");

navItem.forEach((el) => {
  el.addEventListener("click", () => {
    navItem.forEach((item) => {
      if (item !== el) {
        item.classList.remove("bg-primary");
        item.classList.remove("text-black");
      }
    });
    el.classList.toggle("bg-primary");
    el.classList.toggle("text-black");
  });
});
