// Select all necessary elements
const totalElement = document.querySelector(".total");
const productCards = document.querySelectorAll(".card");

// Function to update total price
function updateTotal() {
  let total = 0;
  productCards.forEach((card) => {
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    const unitPrice = parseFloat(card.querySelector(".unit-price").textContent);
    total += quantity * unitPrice;
  });
  totalElement.textContent = `${total} $`;
}

// Function to handle quantity changes
function changeQuantity(card, change) {
  const quantityElement = card.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  quantity += change;
  if (quantity < 0) quantity = 0; // Prevent negative quantity
  quantityElement.textContent = quantity;
  updateTotal();
}

// Function to delete item from cart
function deleteItem(card) {
  card.remove();
  updateTotal();
}

// Function to like item
function toggleLike(heartIcon) {
  heartIcon.classList.toggle("liked");
}

// Attach event listeners to each product card
productCards.forEach((card) => {
  const plusButton = card.querySelector(".fa-plus-circle");
  const minusButton = card.querySelector(".fa-minus-circle");
  const deleteButton = card.querySelector(".fa-trash-alt");
  const heartButton = card.querySelector(".fa-heart");

  // Increment quantity
  plusButton.addEventListener("click", () => {
    changeQuantity(card, 1);
  });

  // Decrement quantity
  minusButton.addEventListener("click", () => {
    changeQuantity(card, -1);
  });

  // Delete item
  deleteButton.addEventListener("click", () => {
    deleteItem(card);
  });

  // Like item
  heartButton.addEventListener("click", () => {
    toggleLike(heartButton);
  });
});
