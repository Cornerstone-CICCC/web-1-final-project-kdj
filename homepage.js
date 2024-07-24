const firstVideoButton = document.querySelector(".video1");
const secondVideoButton = document.querySelector(".video2");
const thirdVideoButton = document.querySelector(".video3");

const modal = document.querySelector(".youtube-container");

const firstVideoClick = firstVideoButton.addEventListener("click", () => {
  modal.innerHTML = `
  <div class="youtube">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aJ7N3lzHlIY?si=930KAPvoQTxvVqrJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  `;

  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  // modal.backgroundColor = "rgba(255, 255, 255, .8)";

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 50);
});

const secondVideoClick = secondVideoButton.addEventListener("click", () => {
  modal.innerHTML = `
  <div class="youtube">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hvcp56MpEiE?si=ZHr1sJavA0Q3OcWD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  `;

  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  // modal.backgroundColor = "rgba(255, 255, 255, .8)";

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 50);
});

const thirdVideoClick = thirdVideoButton.addEventListener("click", () => {
  modal.innerHTML = `
  <div class="youtube">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/C47K1TX9PAA?si=9S7HzmRYpJMixrQb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  `;

  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  // modal.backgroundColor = "rgba(255, 255, 255, .8)";

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 50);
});

modal.addEventListener("click", () => {
  modal.innerHTML = "";
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
  }, 450);
});

// function toggleSelect(button) {
//   document
//     .querySelectorAll(".eventButton")
//     .forEach((btn) => btn.classList.remove("selected"));
//   button.classList.add("selected");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   flatpickr("#date", {
//     dateFormat: "d-m-Y",
//     placeholder: "Select date",
//     allowInput: true,
//   });
// });

// function toggleWedding() {
//   const weddingDiv = document.getElementById("wedding");
//   if (weddingDiv.style.display === "none" || weddingDiv.style.display === "") {
//     weddingDiv.style.display = "block";
//   } else {
//     weddingDiv.style.display = "none";
//   }
// }

// document.getElementById("button1").addEventListener("click", toggleWedding);
// document.getElementById("button2").addEventListener("click", toggleWedding);
// document.getElementById("button3").addEventListener("click", toggleWedding);

// document.querySelectorAll('input[name="contact_method"]').forEach((input) => {
//   input.addEventListener("change", updateContactTimeLegend);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const contactMethodRadios = document.querySelectorAll(
//     'input[name="contactMethod"]'
//   );
//   const timeCallQuestion = document.getElementById("timeCallQuestion");
//   const groupCall = document.querySelector(".groupCall");
//   const callInput = document.getElementById("callInput");
//   const whatsappInput = document.getElementById("whatsappInput");
//   const smsInput = document.getElementById("smsInput");
//   const emailInput = document.getElementById("emailInput");

//   const updateTimeCallQuestion = () => {
//     const selectedMethod = document.querySelector(
//       'input[name="contactMethod"]:checked'
//     );
//     callInput.style.display = "none";
//     whatsappInput.style.display = "none";
//     smsInput.style.display = "none";
//     emailInput.style.display = "none";
//     groupCall.style.display = "none";
//     timeCallQuestion.style.display = "none";

//     if (selectedMethod) {
//       switch (selectedMethod.value) {
//         case "call":
//           timeCallQuestion.textContent = "When do you want us to call?";
//           groupCall.style.display = "block";
//           timeCallQuestion.style.display = "block";
//           callInput.style.display = "block";
//           break;
//         case "whatsapp":
//           timeCallQuestion.textContent = "When do you want us to WhatsApp?";
//           groupCall.style.display = "block";
//           timeCallQuestion.style.display = "block";
//           whatsappInput.style.display = "block";
//           break;
//         case "sms":
//           timeCallQuestion.textContent = "When do you want us to send an SMS?";
//           groupCall.style.display = "block";
//           timeCallQuestion.style.display = "block";
//           smsInput.style.display = "block";
//           break;
//         case "email":
//           timeCallQuestion.textContent =
//             "When do you want us to send an Email?";
//           groupCall.style.display = "block";
//           timeCallQuestion.style.display = "block";
//           emailInput.style.display = "block";
//           break;
//       }
//     }
//   };

//   contactMethodRadios.forEach((radio) => {
//     radio.addEventListener("change", updateTimeCallQuestion);
//   });

//   updateTimeCallQuestion();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const contactMethodRadios = document.querySelectorAll(
//     'input[name="contactMethod"]'
//   );
//   const callInput = document.getElementById("callInput");
//   const whatsappInput = document.getElementById("whatsappInput");
//   const smsInput = document.getElementById("smsInput");
//   const emailInput = document.getElementById("emailInput");

//   contactMethodRadios.forEach((radio) => {
//     radio.addEventListener("change", function () {
//       callInput.classList.remove("show-input");
//       whatsappInput.classList.remove("show-input");
//       smsInput.classList.remove("show-input");
//       emailInput.classList.remove("show-input");

//       switch (this.value) {
//         case "call":
//           callInput.classList.add("show-input");
//           break;
//         case "whatsapp":
//           whatsappInput.classList.add("show-input");
//           break;
//         case "sms":
//           smsInput.classList.add("show-input");
//           break;
//         case "email":
//           emailInput.classList.add("show-input");
//           break;
//       }
//     });
//   });
// });

// document
//   .getElementById("whatsappNumber")
//   .addEventListener("input", function (e) {
//     let value = e.target.value.replace(/\D/g, "");
//     if (value.length > 3) {
//       value = value.substring(0, 3) + "-" + value.substring(3);
//     }
//     if (value.length > 8) {
//       value = value.substring(0, 8) + "-" + value.substring(8);
//     }
//     e.target.value = value;
//   });

// document.getElementById("phoneNumber").addEventListener("input", function (e) {
//   let value = e.target.value.replace(/\D/g, "");
//   if (value.length > 3) {
//     value = value.substring(0, 3) + "-" + value.substring(3);
//   }
//   if (value.length > 8) {
//     value = value.substring(0, 8) + "-" + value.substring(8);
//   }
//   e.target.value = value;
// });

// document.getElementById("smsNumber").addEventListener("input", function (e) {
//   let value = e.target.value.replace(/\D/g, "");
//   if (value.length > 3) {
//     value = value.substring(0, 3) + "-" + value.substring(3);
//   }
//   if (value.length > 8) {
//     value = value.substring(0, 8) + "-" + value.substring(8);
//   }
//   e.target.value = value;
// });

// function initSearchBox() {
//   var input = document.getElementById("locationInput");
//   var searchBox = new google.maps.places.SearchBox(input);

//   searchBox.addListener("places_changed", function () {
//     var places = searchBox.getPlaces();

//     if (places.length == 0) {
//       return;
//     }

//     places.forEach(function (place) {
//       if (!place.geometry) {
//         console.log("Returned place contains no geometry");
//         return;
//       }

//       console.log("Place found:", place.name);
//     });
//   });
// }

// google.maps.event.addDomListener(window, "load", initSearchBox);

// document.addEventListener("DOMContentLoaded", function () {
//   const contactForm = document.querySelector(".contact-form");
//   const bridalFormContainer = document.querySelector(".bridalFormContainer");
//   const partyFormContainer = document.querySelector(".partyFormContainer");
//   const thanksFormContainer = document.querySelector(".thanksFormContainer");
//   const photoThanksFormContainer = document.querySelector(
//     ".photoThanksFormContainer"
//   );

//   contactForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const selectedEventType = document.querySelector(".eventButton.selected");
//     if (selectedEventType) {
//       switch (selectedEventType.id) {
//         case "button1":
//           bridalFormContainer.style.display = "block";
//           break;
//         case "button2":
//           partyFormContainer.style.display = "block";
//           break;
//         case "button3":
//           photoThanksFormContainer.style.display = "block";
//           break;
//       }
//       contactForm.parentElement.style.display = "none";
//     }
//   });
//   const bridalForm = bridalFormContainer.querySelector("form");
//   if (bridalForm) {
//     bridalForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       thanksFormContainer.style.display = "block";
//       bridalForm.parentElement.style.display = "none";
//     });
//   }

//   const partyForm = partyFormContainer.querySelector("form");
//   if (partyForm) {
//     partyForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       thanksFormContainer.style.display = "block";
//       partyForm.parentElement.style.display = "none";
//     });
//   }
// });

// function updateThankYouMessage() {
//   var name = document.getElementById("name").value;
//   document.getElementById("userName").textContent = name;
// }
// document
//   .querySelector(".contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     updateThankYouMessage();
//   });
// function updatecallMessage() {
//   var number = document.getElementById("phoneNumber").value;
//   document.getElementById("userNumber").textContent = number;
// }
// document
//   .querySelector(".contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     updatecallMessage();
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   const handleIncrementDecrement = (event) => {
//     event.preventDefault();
//     const button = event.target;
//     const serviceRow = button.closest(".serviceRow");
//     const input = serviceRow.querySelector('input[type="text"]');
//     let value = parseInt(input.value, 10);

//     if (button.classList.contains("increment")) {
//       value++;
//     } else if (button.classList.contains("decrement")) {
//       value = value > 0 ? value - 1 : 0;
//     }

//     input.value = value;
//   };
//   const incrementButtons = document.querySelectorAll(".increment");
//   const decrementButtons = document.querySelectorAll(".decrement");

//   incrementButtons.forEach((button) => {
//     button.addEventListener("click", handleIncrementDecrement);
//   });

//   decrementButtons.forEach((button) => {
//     button.addEventListener("click", handleIncrementDecrement);
//   });
// });

// function updateTotal(spanId, amount) {
//   var totalSpan = document.getElementById(spanId);
//   var currentTotal = parseInt(totalSpan.textContent);
//   var newTotal = currentTotal - amount;
//   if (newTotal < 0) {
//     newTotal = 0;
//   }
//   totalSpan.textContent = newTotal;

//   var spanToItems = {
//     total1: ["Groom"],
//     total2: ["Bridesmaid"],
//     total3: ["FlowerGirl"],
//     total4: ["Woman"],
//     total5: ["Man"],
//   };

//   var itemIds = spanToItems[spanId];

//   if (itemIds) {
//     itemIds.forEach((id) => {
//       var liElement = document.getElementById(id);
//       if (liElement) {
//         if (newTotal > 0) {
//           liElement.innerText = `${id} * ${newTotal}`;
//           liElement.style.display = "none";
//         } else {
//           liElement.style.display = "none";
//         }
//       }
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const selectedServices = document.getElementById("selectedServices");

//   function updateSelectedServices() {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     const services = {};
//     checkboxes.forEach((checkbox) => {
//       if (checkbox.checked) {
//         const category = checkbox.dataset.category;
//         const value = checkbox.value;

//         if (!services[category]) {
//           services[category] = [];
//         }
//         services[category].push(value);
//       }
//     });
//     let serviceText = "";
//     for (const [category, items] of Object.entries(services)) {
//       const liElement = document.querySelector(
//         `li[data-category="${category}"]`
//       );
//       if (liElement) {
//         serviceText += `${liElement.innerText}: ${items.join(" + ")}\n`;
//       } else {
//         serviceText += `${category}: ${items.join(" + ")} on sale\n`;
//       }
//     }

//     selectedServices.textContent = serviceText.trim() || "No services selected";
//   }

//   document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
//     checkbox.addEventListener("change", updateSelectedServices);
//   });
//   updateSelectedServices();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const selectedPremium = document.getElementById("selectedPremium");

//   function updateSelectedPremium() {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     const services = [];
//     checkboxes.forEach((checkbox) => {
//       if (checkbox.checked) {
//         const label = checkbox.nextElementSibling.textContent;
//         services.push(label);
//       }
//     });
//     selectedPremium.innerHTML = "";
//     services.forEach((service) => {
//       const li = document.createElement("li");
//       li.textContent = service;
//       selectedPremium.appendChild(li);
//     });
//   }
//   document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
//     checkbox.addEventListener("change", updateSelectedPremium);
//   });
//   updateSelectedPremium();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const backButtons = document.querySelectorAll(".backButton");

//   backButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       document.querySelector(".bridalFormContainer").style.display = "none";
//       document.querySelector(".partyFormContainer").style.display = "none";
//       document.querySelector(".thanksFormContainer").style.display = "none";
//       document.querySelector(".contactFormContainer").style.display = "block";
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const photoshootNextButton = document.getElementById("photoshootNext");
//   const photoThanksFormContainer = document.getElementById(
//     "photoThanksFormContainer"
//   );
//   photoshootNextButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     document.querySelector(".contactFormContainer").style.display = "none";
//     document.querySelector(".bridalFormContainer").style.display = "none";
//     document.querySelector(".partyFormContainer").style.display = "none";
//     document.querySelector(".thanksFormContainer").style.display = "none";
//     photoThanksFormContainer.style.display = "block";
//   });
// });
