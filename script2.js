// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

// ✅ UPDATED Add to Cart (with SIZE)
function addToCart(product, price, image, size) {
  if (!size) {
    alert("❌ Please select a size");
    return;
  }

  cart.push({
    product,
    price,
    image,
    size
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();

  alert(`✅ ${product} (Size ${size}) added to cart`);
}

// Update Cart Display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  if (!cartItems) return;

  cartItems.innerHTML = "";
  total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "cart-item";

    li.innerHTML = `
      <img src="${item.image}" class="cart-img">
      <span>
        <strong>${item.product}</strong><br>
        Size: ${item.size} <br>
        $${item.price}
      </span>
      <button class="remove-btn" onclick="removeItem(${index})">❌</button>
    `;

    cartItems.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = `Total: $${total}`;
}

// Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// Clear Cart
document.addEventListener("DOMContentLoaded", () => {
  updateCart();

  const clearBtn = document.getElementById("clear-cart");
  if (clearBtn) {
    clearBtn.onclick = () => {
      cart = [];
      localStorage.removeItem("cart");
      updateCart();
      alert("🗑 Cart cleared");
    };
  }
});
