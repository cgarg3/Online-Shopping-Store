/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Chirag Garg
 *      Student ID: 143180214
 *      Date:       26 July 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
const displayItems = document.querySelector(".display-items");
const navbar = document.querySelector("#menu");

// Load items
window.addEventListener("DOMContentLoaded", function () {
  // Everything set to 'Electronics' by default
  document.getElementById("selected-category").textContent = "Electronics";
  displayProductItems(
    products.filter(function (product) {
      if (product.categories.includes("ELECTRONICS")) {
        return product;
      }
    })
  );

  displayMenuButtons();
});

// Displays all the products in form of cards
function displayProductItems(productItems) {
  let displayProducts = productItems.map(function (product) {
    return createProductCard(product);
  });

  displayProducts = displayProducts.join("");
  displayItems.innerHTML = displayProducts;
}

// Creates a product card
function createProductCard(product) {
  return `<article class="card">
    <img src="${product.imageUrl}" alt="Product-Image">
    <div class="card-info">
    <header>
      <h4>${product.name}</h4>
      <h4 class="price">CAD${(product.price / 100).toLocaleString("en-CA", {
        currency: "CAD",
        style: "currency"
      })}</h4>
    </header>
    <p class="card-text">${product.description}</p>
    </div>
  </article>`;
}

// Displays all the menu buttons and changes the heading according to it
function displayMenuButtons() {
  // Creating the navbar dynamically
  const cats = categories
    .map(function (item) {
      return `<button data-id="${item.name}" class="filter-btn" type="button">${item.name}</button>`;
    })
    .join("");

  navbar.innerHTML = cats;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter Items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id;
      document.getElementById("selected-category").textContent = e.currentTarget.dataset.id;

      // Converting human readable to category codes
      if (category === "Electronics") {
        category = "ELECTRONICS";
      } else if (category === "Jewelry") {
        category = "JEWELRY";
      } else if (category === "Men's Clothing") {
        category = "MEN-CLOTHES";
      } else if (category === "Women's Clothing") {
        category = "WOMEN-CLOTHES";
      }

      const productCategory = products.filter(function (item) {
        if (item.categories.includes(category)) {
          return item;
        }
      });

      displayProductItems(productCategory);
    });
  });
}
