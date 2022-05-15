var item = document.getElementById("shopping-cart--list");

var tot = document.getElementById("total");

var subtotal = document.querySelectorAll(".product-total-price");

var total = 0;

for (var i = 0; i < subtotal.length; i++) {
  var x = parseInt(subtotal[i].innerText);
  total = total + x;
  tot.innerText = total;
}
item.addEventListener("click", like);

function like(e) {
  if (e.target.classList.contains("material-icons")) {
    var attributes = e.target.getAttribute("class");
    if (attributes.includes("color")) {
      e.target.setAttribute("class", "material-icons");
    } else {
      e.target.setAttribute("class", "material-icons color");
    }
  }
}

item.addEventListener("click", remove);

function remove(e) {
  if (e.target.classList.contains("product-remove")) {
    var li = e.target.parentElement.parentElement;
    item.removeChild(li);
    var subtotalint = parseInt(e.target.nextElementSibling.innerText);
    var totInt = parseInt(tot.innerText);
    total = totInt - subtotalint;
    tot.innerText = total;
  }
}

item.addEventListener("click", add);

function add(e) {
  if (e.target.classList.contains("product-plus")) {
    var qty = parseInt(e.target.previousElementSibling.innerText);
    var priceint = parseInt(
      e.target.parentElement.parentElement.previousElementSibling
        .lastElementChild.innerText
    );
    var subtotalint = e.target.parentElement.parentElement.lastElementChild;
    qty++;
    var pricetotal = priceint * qty;
    e.target.previousElementSibling.innerText = qty;
    subtotalint.innerText = pricetotal;

    var totInt = parseInt(tot.innerText);
    total = totInt + priceint;
    tot.innerText = total;
  }
}

item.addEventListener("click", minus);

function minus(e) {
  if (e.target.classList.contains("product-subtract")) {
    var qty = parseInt(e.target.nextElementSibling.innerText);
    if (qty > 1) {
      var priceint = parseInt(
        e.target.parentElement.parentElement.previousElementSibling
          .lastElementChild.innerText
      );
      var subtotalint = e.target.parentElement.parentElement.lastElementChild;
      qty--;
      var pricetotal = priceint * qty;
      e.target.nextElementSibling.innerText = qty;
      subtotalint.innerText = pricetotal;
      var totInt = parseInt(tot.innerText);
      total = totInt - priceint;
      tot.innerText = total;
    } else {
      return;
    }
  }
}
