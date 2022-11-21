const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});

/* 
- bring in buttons
- loop through all buttons
- add click event listener on each
- add toggle class on each parentNode because the active class is styled on the parent node and not the button itself

  */
