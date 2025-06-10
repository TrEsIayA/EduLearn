const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

/*for opening an closing of the sidebar*/
const menu = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const clsBtn = document.getElementById("closemenu-toggle");
const section = document.querySelector("section");

/*open sidebar: menu icon ia clicked the open class is 
added to the sidebar(css) and is hidden by setting 
its display to none*/
menu.addEventListener("click", () => {
  sidebar.classList.add("open");
  menu.style.display = "none";
});

/*close sidebar: hidden by removing the open class and menu icon is
shown by setting its display to flex*/
clsBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  sidebar.classList.remove("open");
});

/*click outside to close the sidebar*/
window.addEventListener("click", (e) => {
  if (e.target === section) {
    sidebar.style.display = "none";
  }
});

/*runs when user tries to submit form: gets the value of the input with class .js-email, 
removes any spaces using .trim(), and stores it in emailVal.
console.log(emailVal); is for debugging to show the value in the browser console.*/
function formEmailValidation() {
  const emailVal = document.querySelector(".js-email").value.trim();
  console.log(emailVal);

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /*pattern check: regular expression (regex) pattern*/
  if (!emailPattern.test(emailVal)) {
    alert("Please enter a valid email address.");
    return;
  }
}

/*bagong dagdag para lang don sa quizzes*/
const quizBtns = document.querySelectorAll(".quiz-opener");
const quizOverlay = document.querySelector(".quiz-warning-overlay");

quizBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent jumping or redirect
    quizOverlay.classList.add("open");
  });
});

quizOverlay.addEventListener("click", (e) => {
  if (e.target === quizOverlay) {
    quizOverlay.classList.remove("open");
  }
});
