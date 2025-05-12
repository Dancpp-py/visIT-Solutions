function goTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const burger = document.getElementById('burger');
  
  navLinks.classList.toggle('active');
  burger.classList.toggle('open');
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('div[id]');
  const navButtons = document.querySelectorAll('.navBtn');
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navButtons.forEach((btn) => btn.classList.remove('active'));
      const activeBtn = document.querySelector(`.navBtn[onclick="goTo('${sectionId}')"]`);
      if (activeBtn) activeBtn.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".big-service-card");

  cards.forEach(card => {
    card.addEventListener("click", function (e) {
      if (e.target.classList.contains("learn-more-btn") || e.target.classList.contains("back-btn")) return;

      const expanded = document.querySelector(".big-service-card.expanded");
      if (expanded && expanded !== card) return;

      card.classList.toggle("expanded");

      const learnMoreBtn = card.querySelector(".learn-more-btn");
      if (learnMoreBtn) {
        learnMoreBtn.style.display = card.classList.contains("expanded") ? "inline-block" : "none";
      }

      let backBtn = card.querySelector(".back-btn");
      if (!backBtn && card.classList.contains("expanded")) {
        backBtn = document.createElement("button");
        backBtn.textContent = "Back";
        backBtn.classList.add("back-btn");
        backBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          card.classList.remove("expanded");
          if (learnMoreBtn) learnMoreBtn.style.display = "none";
          backBtn.remove();
        });
        card.appendChild(backBtn);
      }
    });
  });
});

function navigateWithFade(targetPage) {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = targetPage;
  }, 400);
}
