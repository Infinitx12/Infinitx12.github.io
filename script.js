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
  
