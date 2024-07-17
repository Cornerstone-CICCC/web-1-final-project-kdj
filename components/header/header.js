fetch("./components/header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("#header").innerHTML = data;
  });
