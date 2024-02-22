const bt = document.querySelector("#Food");
const a = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

bt.addEventListener("click", () => {
  a.classList.add("cart-active");
});

closeCart.addEventListener("click", () => {
  a.classList.remove("cart-active");
});

document.addEventListener("DOMContentLoaded", loadproduct);

function loadproduct() {
  loadcontend();
}

function loadcontend() {
  // remove product items from cart
  let remove = document.querySelectorAll(".cart-remove");
  remove.forEach((bt) => {
    bt.addEventListener("click", removeItem);
  });

  // quality change event

  let quantitychange = document.querySelectorAll(".cart-quantity");
  quantitychange.forEach((quantity) => {
    quantity.addEventListener("change", changequantity);
  });
  updatetotal();

  // add product in cart
  let cartbutton = document.querySelectorAll(".addcart");
  cartbutton.forEach((bt) => {
    bt.addEventListener("click", cartfunction);
  });
}

// remove cart item

function removeItem() {
  if (confirm("Remove from the cart")) {
    let title = this.parentElement.querySelector(".cart-add-title").innerHTML;
    console.log(title);
    itemlist = itemlist.filter((el) => el.title != title);
    this.parentElement.remove();

    loadproduct();
  }
}

// quantity only positive function

function changequantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadcontend();
}

let itemlist = [];

function cartfunction() {
  let shirt = this.parentElement;
  let title = shirt.querySelector(".title").innerHTML;
  let price = shirt.querySelector(".amount").innerText;
  let imgscr = shirt.querySelector(".productimage").src;

  let newproduct = { title, price, imgscr };

  //  \\\\\\\ condition for already added carts

  if (itemlist.find((el) => el.title == newproduct.title)) {
    alert("Product already added in Cart");
    return;
  } else {
    itemlist.push(newproduct);
  }

  let newproductElement = createcart(title, price, imgscr);

  let element = document.createElement("div");
  element.innerHTML = newproductElement;

  let productcollection = document.querySelector(".cart-contend");

  productcollection.append(element);

  loadproduct();
}

function createcart(title, price, imgscr) {
  return `
        
                   <div class="cart-box">
                                <img src="${imgscr}" class="cart-img">
                                <div class="detail-box">
                                  <div class="cart-add-title">${title}</div>
                                  <div class="price-box">
                                    <div class="cart-price"><i class="fa fa-inr"></i><span class="price1">${price}</span></div>
                                    <div class="cart-amt"><i class="fa fa-inr"></i><span class="price2">${price}</span></div>
                                    
                                  </div>
                                  <input type="number" value="1" class="cart-quantity">
                                  
                                </div>
                                <ion-icon name="trash" class="cart-remove"></ion-icon>
                              </div>`;
}

// update total cart function

function updatetotal() {
  const cartitem = document.querySelectorAll(".cart-box");
  const totalvalue = document.querySelector(".total-price");
  let total = 0;
  cartitem.forEach((product) => {
    let priceElement = parseFloat(product.querySelector(".price1").innerHTML);
    let qty = parseInt(product.querySelector(".cart-quantity").value);
    total += priceElement * qty;
    product.querySelector(".price2").innerText = +priceElement * qty;
  });
  totalvalue.innerHTML = +total;

  // add product count
  const countcart = document.querySelector("#cart-count");
  let count = itemlist.length;
  countcart.innerHTML = count;

  if (count == 0) {
    countcart.style.display = "none";
  } else {
    countcart.style.display = "block";
  }
}

// -----------------search functionality--------------------

const helpon = document.querySelector("#Help");
const b = document.querySelector(".help");
const Helpoff = document.querySelector(".fa-times-circle");

helpon.addEventListener("click", () => {
  b.classList.add("help-active");
});

Helpoff.addEventListener("click", () => {
  b.classList.remove("help-active");
});

// -------------------search function ------------

var helpcontainer = document.getElementById("maintopic");
var helpsearch = document.getElementById("helpsearch");
var helpproductlist = helpcontainer.querySelectorAll(".first-topic");

helpsearch.addEventListener("keyup", function () {
  var helpenteredvalue = event.target.value.toUpperCase();

  for (count = 0; count < helpproductlist.length; count = count + 1) {
    var helpproductname =
      helpproductlist[count].querySelector("h5").textContent;

    if (helpproductname.toUpperCase().indexOf(helpenteredvalue) < 0) {
      helpproductlist[count].style.display = "none";
    } else {
      helpproductlist[count].style.display = "block";
    }
  }
});

// ---------------product search functionality--------------?

var container = document.getElementById("featured-container");
var search = document.getElementById("product");
var productlist = container.querySelectorAll(".colum2");

search.addEventListener("keyup", function () {
  let enteredvalue = event.target.value.toUpperCase();

  for (count = 0; count < productlist.length; count = count + 1) {
    let productname = productlist[count].querySelector("h4").textContent;

    if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});

// ---------------help contend 1---------------

const bt1 = document.querySelector("#first-topic1");
const a1 = document.querySelector(".helpcontend1");
const closeCart1 = document.querySelector("#helpcon");

bt1.addEventListener("click", () => {
  a1.classList.add("helpcontend1-active");
});

closeCart1.addEventListener("click", () => {
  a1.classList.remove("helpcontend1-active");
});

// ------------help contend 2-------
const bt2 = document.querySelector("#first-topic2");
const a2 = document.querySelector(".helpcontend2");
const closeCart2 = document.querySelector("#helpcon2");

bt2.addEventListener("click", () => {
  a2.classList.add("helpcontend2-active");
});

closeCart2.addEventListener("click", () => {
  a2.classList.remove("helpcontend2-active");
});

// ---------help contend 3------
const bt3 = document.querySelector("#first-topic3");
const a3 = document.querySelector(".helpcontend3");
const closeCart3 = document.querySelector("#helpcon3");

bt3.addEventListener("click", () => {
  a3.classList.add("helpcontend3-active");
});

closeCart3.addEventListener("click", () => {
  a3.classList.remove("helpcontend3-active");
});

// ------------help contend 4--------
const bt4 = document.querySelector("#first-topic4");
const a4 = document.querySelector(".helpcontend4");
const closeCart4 = document.querySelector("#helpcon4");

bt4.addEventListener("click", () => {
  a4.classList.add("helpcontend4-active");
});

closeCart4.addEventListener("click", () => {
  a4.classList.remove("helpcontend4-active");
});

// -----------help contend 5-----
const bt5 = document.querySelector("#first-topic5");
const a5 = document.querySelector(".helpcontend5");
const closeCart5 = document.querySelector("#helpcon5");

bt5.addEventListener("click", () => {
  a5.classList.add("helpcontend5-active");
});

closeCart5.addEventListener("click", () => {
  a5.classList.remove("helpcontend5-active");
});

// ----------help contend 6-------
const bt6 = document.querySelector("#first-topic6");
const a6 = document.querySelector(".helpcontend6");
const closeCart6 = document.querySelector("#helpcon6");

bt6.addEventListener("click", () => {
  a6.classList.add("helpcontend6-active");
});

closeCart6.addEventListener("click", () => {
  a6.classList.remove("helpcontend6-active");
});
// ------------------help paragraph-------

var display = 0;
function show(butt) {
  var a = butt.nextElementSibling;

  if (display == 0) {
    a.style.display = "block";
    display = 1;
  } else {
    a.style.display = "none";
    display = 0;
  }
}

// -------payment page----

const bt7 = document.querySelector(".btn-buy");
const a7 = document.querySelector(".payment-container");
const closeCart7 = document.querySelector("#cart-close2");

bt7.addEventListener("click", () => {
  a7.classList.add("payment-container-active");
});

closeCart7.addEventListener("click", () => {
  a7.classList.remove("payment-container-active");
});
// -----------Address validation -----
function validateNumber() {
  let user = /^[A-Za-z\s]*$/;
  let phone = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  let pin = /^(\d{3})[- ]?(\d{3})$/;
  // var addressRegex =
  //   /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;

  let alpha = document.getElementById("input2").value;
  let num = document.getElementById("input").value;
  let local = document.getElementById("input4").value;
  let dis = document.getElementById("input5").value;
  let pincode = document.getElementById("input6").value;
  // let address = document.getElementById("input3").value;
  console.log(pincode);
  // address format 3344 W Alameda Avenue, Lakewood, CO 80222
  if (!user.test(alpha)) {
    alert("Enter valid name");
    return false;
  }

  if (!phone.test(num)) {
    alert("invalid phone number");
    return false;
  }
  if (!user.test(local)) {
    alert("Enter valid locatity");
    return false;
  }
  if (!user.test(dis)) {
    alert("Enter valid District/City/Town");
    return false;
  }
  // if (!addressRegex.test(address)) {
  //   alert("Enter valid address");
  //   return false;
  // }
  // if (document.emp3.add.value == "") {
  //   alert("Enter the addresss");
  //   return false;
  // }
  if (!pin.test(pincode)) {
    alert("Pin code should be 6 digits ");
    return false;
  }
  alert("Address saved");
  return true;
}
function order() {
  let cardname = /^[A-Za-z\s]*$/;
  let cardnum = /^(\d{4})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{4})$/;
  let cvv = /^(\d{3})$/;

  let alpha = document.getElementById("input7").value;
  let num = document.getElementById("input8").value;
  console.log(num);
  let local = document.getElementById("input9").value;

  if (!cardname.test(alpha)) {
    alert("Invalid name");
    return false;
  }
  if (!cardnum.test(num)) {
    alert("Invalid card number");
    return false;
  }
  if (!cvv.test(local)) {
    alert("Pin code should be 3 digits");
    return false;
  }
  var checkbox = document.getElementById("accept");
  if (!checkbox.checked) {
    // document.getElementById("error").innerHTML =
    //   "You must accept the condition";
    alert("You must accept the terms and conditions by checking the Checkbox");
    return false;
  }
  alert("Order placed successfully");
  return true;
}
// ----------loader------
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
