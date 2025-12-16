// Get current page filename
const currentPage = window.location.pathname.split("/").pop();

// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add active class to current page link
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Optional: Add smooth transitions and form enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add focus effect to input fields
  const inputFields = document.querySelectorAll('.input_box input');

  inputFields.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });
});