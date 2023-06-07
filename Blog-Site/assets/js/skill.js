document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".navbar a");
    var delay = 350; // Her butonun animasyon için bekleyeceği süre (ms)
    
    navLinks.forEach(function(link, index) {
      setTimeout(function() {
        link.classList.add("show");
      }, index * delay);
    });
  });