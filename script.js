// Scroll Progress Bar
window.onscroll = function () {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
  };
  
  // Form submission
  document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();
    this.classList.add("hidden");
    document.querySelector(".thank-you").classList.remove("hidden");
  });
// Scroll progress bar
window.onscroll = function () {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.width = scrolled + "%";
};

// Form submission
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
});

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = themeToggle.querySelector("span");
  icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const category = form.querySelector('select').value;
  const message = form.querySelector('textarea').value;

  const payload = {
    name,
    email,
    category,
    message,
  };

  fetch("https://script.google.com/macros/s/AKfycbyVn9-9y_TtIhAvqK-UwDfcigu2jDAJ7L-W-1a-WQSMmwZhqbCTKFZikS7_xF3mt2krLg/exec", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Submitted:", data);
      form.classList.add("hidden");
      document.querySelector(".thank-you").classList.remove("hidden");
    })
    .catch((err) => {
      alert("Oops! Something went wrong.");
      console.error(err);
    });
});
  
