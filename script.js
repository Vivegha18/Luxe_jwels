function shopNow() {
  alert("Redirecting to Products page...");
  window.location.href = "products.html";
}
function addToCart(productName) {
  alert(productName + " has been added to your cart!");
}
// Contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert("Thank you, " + name + "! Your message has been sent.");
    form.reset();
  });
});