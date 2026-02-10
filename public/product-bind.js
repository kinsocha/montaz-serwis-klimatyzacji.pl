// product-bind.js
(function () {
  const body = document.body;
  if (!body) return;

  const productCode = body.getAttribute("data-product");
  if (!productCode) return;

  if (!window.PRODUCTS || !window.PRODUCTS[productCode]) return;

  const data = window.PRODUCTS[productCode];

  const priceEl = document.querySelector(".js-price");
  const availEl = document.querySelector(".js-availability");

  if (priceEl) priceEl.textContent = data.price || "—";
  if (availEl) availEl.textContent = data.availability || "—";
})();
