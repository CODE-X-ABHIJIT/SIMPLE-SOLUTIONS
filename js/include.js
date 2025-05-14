// js/include.js
document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    fetch("header.html").then(res => res.text()),
    fetch("footer.html").then(res => res.text())
  ]).then(([headerHTML, footerHTML]) => {
    document.getElementById("header-placeholder").innerHTML = headerHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;

    // Wait until header is inserted, then bind menu toggle
    setTimeout(() => {
      const menuIcon = document.getElementById('menu-icon');
      const navLinks = document.getElementById('nav-links');

      if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });
      }
    }, 0);
  });
});
