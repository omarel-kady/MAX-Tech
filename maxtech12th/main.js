//first function (contact page when click sendmessage )
function sendmessage() {
  window.alert("Message Succesfully send");
}
// second  function (cart page when click remove button product will remove)

// third  function
function increaseQuantity(qtyId, priceId, unitPrice) {
  let qtyElem = document.getElementById(qtyId);
  let priceElem = document.getElementById(priceId);
  let qty = parseInt(qtyElem.innerText);
  qty++;
  qtyElem.innerText = qty;
  priceElem.innerText = "$" + (qty * unitPrice).toFixed(2);
  updateTotal();
}

function decreaseQuantity(qtyId, priceId, unitPrice) {
  let qtyElem = document.getElementById(qtyId);
  let priceElem = document.getElementById(priceId);
  let qty = parseInt(qtyElem.innerText);
  if (qty > 1) {
    qty--;
    qtyElem.innerText = qty;
    priceElem.innerText = "$" + (qty * unitPrice).toFixed(2);
    updateTotal();
  }
}

function updateTotal() {
  let total = 0;
  let items = document.querySelectorAll(".cart-item");
  items.forEach((item) => {
    if (item.style.display !== "none") {
      let priceText = item.querySelector("p[id^='price']").innerText;
      let price = parseFloat(priceText.replace("$", ""));
      total += price;
    }
  });
  document.getElementById("cartTotal").innerText =
    "Total: $" + total.toFixed(2);
}

function removeItem(productId) {
  document.getElementById(productId).style.display = "none";
}

//fourth function  (cart page when click proceed checkout product Core i9 out of stock )
function outofstock() {
  let item = document.getElementById("cart-item2");
  let span = document.getElementById("i9");
  span.innerHTML = "(out of stock)";
  item.style.background = "red";
}
//fifth function (index page greeting message)
function greeting() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  alert(greeting + " Welcome to MAX Tech!");
}
if (window.location.pathname === "/index.html") {
  window.onload = greeting;
}
// 6 function (Gallary in the shop-single page)
// 7 function (shop page when hover laptop product image change)
let img = document.getElementById("img-laptop");

img.addEventListener("mouseover", function () {
  img.src = "assets/img/a4.png"; // Switch to second image on hover
});
// 8 function
img.addEventListener("mouseout", function () {
  img.src = "assets/img/alfa.png"; // Switch back to original image
});

//9 function (shop page windoes allert on buying hard disk) (Y)
document.getElementById("harddiskAddToCart").onclick = function () {
  showAlert("harddiskAlert");
};

function showAlert(alertId) {
  document.getElementById(alertId).style.display = "flex";
}

function closeAlert(alertId) {
  document.getElementById(alertId).style.display = "none";
}
