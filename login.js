const signUpbutton = document.getElementById("submitsignUp");
const signInbutton = document.getElementById("submitsignIn");
const container = document.getElementById("container");
signUpbutton.addEventListener("click", () => {
  container.classList.add("right-panal-active");
});

signInbutton.addEventListener("click", () => {
  container.classList.remove("right-panal-active");
});
// --------help page------

const helpon = document.querySelector("#Help");
const b = document.querySelector(".help");
const Helpoff = document.querySelector(".fa-times-circle");

helpon.addEventListener("click", () => {
  b.classList.add("help-active");
});

Helpoff.addEventListener("click", () => {
  b.classList.remove("help-active");
});

// -------Login mail validation-----
function validate_form() {
  if (document.emp.mail.value == "") {
    alert("Please Entered the Email ID");
    return false;
  }
  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      document.emp.mail.value
    )
  ) {
    alert("You have entered an invalid email address!");
    return false;
  }
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  if (!regex.test(document.emp.pass.value)) {
    alert(
      "Password must contain Uppercase,Lowecase,special character and numbers "
    );
    return false;
  }
  alert("Login Successfully");
  return true;
}
// ------------------Registration mail validation--------

function validate_form1() {
  if (document.emp1.mail1.value == "") {
    alert("Please Entered the Email ID");
    return false;
  }
  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      document.emp1.mail1.value
    )
  ) {
    alert("You have entered an invalid email address!");
    return false;
  }
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let pass1 = document.querySelector(".text3").value;
  let pass2 = document.querySelector(".text4").value;
  console.log(pass1);
  if (!regex.test(document.emp1.pass1.value)) {
    alert(
      "Password Must contains Uppercase,Lowecase,special character and Numbers "
    );
    return false;
  }
  if (pass1 != pass2) {
    alert("Password Must Be same");
    return false;
  }
  alert("Registered Successfully");
  return true;
  // signInbutton.addEventListener("click", () => {
  //   container.classList.remove("right-panal-active");
  // });
}

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
// // ------------------help paragraph-------

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
// ----------loader-----
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
