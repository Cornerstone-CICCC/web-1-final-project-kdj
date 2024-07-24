function showTab(tabName) {
  var tabs = document.querySelectorAll(".tabcontent");
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  document.getElementById(tabName).style.display = "grid";

  var tablinks = document.querySelectorAll(".tablink");
  tablinks.forEach((tablink) => {
    tablink.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}

// const menuBTN = document.getElementById("menu-button");
// const menu = document.getElementById("menu");
// // const menu = document.querySelector(".ul_header_web");

// menuBTN.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });
