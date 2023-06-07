var typed = new Typed(".text-animation",{
  strings: ["FrontEnd Developer","Game Developer","Level Designer","Game Animation Designer","Game Modeler"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 2000,
  loop: true
})

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll(".navbar a");
  var delay = 350; // Her butonun animasyon için bekleyeceği süre (ms)
  
  navLinks.forEach(function(link, index) {
    setTimeout(function() {
      link.classList.add("show");
    }, index * delay);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var textContainer = document.getElementById("text-message");
  var text = "I am expanding my software volume that I have been in for a long time. In this adventure I entered with the reduction of the game, I continue to maintain myself by learning map design / modeling / Game construction / Animation / Html / CSS / JavaScript / Python.";
  var delay = 40; // Yazı hızı (ms)
  
  var index = 0;
  var timer = setInterval(function() {
    if (text[index] === "\n") {
      textContainer.innerHTML += "<br>"; // Alt satır karakteri (\n) geldiğinde <br> etiketi ekleyin
    } else {
      textContainer.innerHTML += text[index];
    }
    index++;
    
    if (index >= text.length) {
      clearInterval(timer);
    }
  }, delay);
});

