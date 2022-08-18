$.noConflict();
jQuery(document).ready(function($){
  $(".hamburger").click(() => {
    $(".nav-items").slideToggle(500);
    let path = ($(".hamburger").attr("src") === "/assets/icons/icons8-menu.svg")
    ? "/assets/icons/close-icon.svg"
    : "/assets/icons/icons8-menu.svg";
    $(".hamburger").attr("src", path)
  })
});
