
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const burger = document.getElementById("burger");
  
    if (nav && burger) {
      nav.classList.toggle("active");
      burger.classList.toggle("toggle");
    }
  }
  

  function showCustomAlert(message) {
    const alertBox = document.getElementById("customAlert");
    const alertMsg = document.getElementById("customAlertMessage");
    const closeBtn = document.getElementById("customAlertClose");
  
    alertMsg.textContent = message;
    alertBox.style.display = "flex";
  
    closeBtn.onclick = () => {
      alertBox.style.display = "none";
    };
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm"); // ✅ Corrected ID here
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("clientName").value.trim();
        const email = document.getElementById("clientEmail").value.trim();
        const message = document.getElementById("clientMessage").value.trim();
  
        if (name && email && message) {
          showCustomAlert("Inquiry successfully sent. Thank you, " + name + "!");
          this.reset();
        } else {
          showCustomAlert("Please fill in all the fields.");
        }
      });
    }
  });
  