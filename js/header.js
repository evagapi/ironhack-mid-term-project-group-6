const menus = document.getElementsByClassName("navigator-bar-links");
const menusarray = [...menus];
menusarray.forEach((menu) => {
  menu.addEventListener("click", function (e) {
    menusarray.forEach((menu) => {
      menu.classList.remove("home-link");
    });
    e.target.classList.add("home-link");
    console.log(e.target);
  });
});
