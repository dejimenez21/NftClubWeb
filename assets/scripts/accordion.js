
$(document).ready(function() {
    var buttons = $(".accordion");
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }

            this.children[2].classList.toggle("invisible");
            this.children[1].classList.toggle("invisible");
          });
    };
});
