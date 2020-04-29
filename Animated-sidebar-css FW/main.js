// sidebar toggle

const btnToggle = document.querySelector(".toggle-btn");

btnToggle.addEventListener("click", function () {
  console.log("click");
  document.getElementById("sidebar").classList.toggle("active");
  console.log(document.getElementById("sidebar"));
});
