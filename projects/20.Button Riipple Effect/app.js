const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX; //x position in viewport
    const y = e.clientY; // y position in viewport

    const buttonTop = e.target.offsetTop; //position of button from top
    const buttonLeft = e.target.offsetLeft;

    // position inside button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");

    // set the position of the circle
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    // handle error by removing multiple circles created after sometime
    setTimeout(() => circle.remove(), 500);
  });
});
