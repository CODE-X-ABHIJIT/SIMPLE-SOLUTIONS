document.addEventListener("DOMContentLoaded", () => {
  // Section scroll-in animations
  const sections = document.querySelectorAll(".section");
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => sectionObserver.observe(section));

  // Animated Counter
  const counterEl = document.querySelector(".counter");
  let counterStarted = false;

  if (counterEl) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counterStarted) {
          counterStarted = true;
          let count = 0;
          const target = 8000;
          const interval = setInterval(() => {
            if (count >= target) {
              clearInterval(interval);
              counterEl.textContent = count + "+";
            } else {
              count += 100;
              counterEl.textContent = count;
            }
          }, 20);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(counterEl);
  }

  // Navbar shrink on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("shrink", window.scrollY > 60);
  });

  // Smooth scroll for in-page nav links
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetOffsetTop = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // Contact form submission using Formspree
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      fetch("https://formspree.io/f/xwpowdqd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            alert("✅ Message sent successfully! We'll get back to you soon.");
            form.reset();
          } else {
            alert("⚠️ Something went wrong. Please try again later.");
          }
        })
        .catch(error => {
          alert("⚠️ Submission failed. Please check your internet connection.");
          console.error(error);
        });
    });
  }
});
