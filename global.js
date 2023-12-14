const responsive_wrapper = document.querySelector(".responsive_wrapper");
const responsive_wrapper_btn = document.querySelector(".responsive_wrapper_btn");
const responsive_app_navigation_menu = document.querySelector(".responsive_app_navigation_menu");
const app_navigation_menu = document.querySelector(".app_navigation_menu");


responsive_wrapper_btn.addEventListener("click", () => {
  responsive_wrapper.style.display = "none";
});

app_navigation_menu.addEventListener("click", () => {
  responsive_app_navigation_menu.classList.toggle("app_navigation_menu_toggle");
});