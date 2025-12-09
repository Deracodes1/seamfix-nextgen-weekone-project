"use strict";

const allProducts = document.querySelectorAll(".grid-item");
const productAlert = document.querySelector(".product-alert");
const alertMsg = document.querySelector(".alert-message");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
allProducts.forEach((product) => {
  const productNameEl = product.querySelector(".product-name");
  product.addEventListener("click", function () {
    // alert(productNameEl.textContent);

    // improved alert with modal window for better ux
    productAlert.style.visibility = "visible";
    overlay.style.display = "block";
    alertMsg.textContent = `The current highlighted product is ${productNameEl.textContent}.`;
  });
});

overlay.addEventListener("click", function () {
  productAlert.style.visibility = "hidden";
  overlay.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  productAlert.style.visibility = "hidden";
  overlay.style.display = "none";
});
