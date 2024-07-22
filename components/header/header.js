fetch("./components/header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("#header").innerHTML = data;
  });


 const menuBTN = document.getElementById("menu-button") 
 const menu = document.getElementById("menu")

 menuBTN.addEventListener("click", ()=>{
  menu.classList.toggle("active")

 })