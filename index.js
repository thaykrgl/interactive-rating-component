const submitState = document.getElementById("submit");
const thankState = document.getElementById("thank");
const rating = document.getElementById("rating");
const submitButton = document.getElementById("submit-button");
const elements = document.querySelectorAll('.vote');
const backIcon = document.getElementById("back-icon");

// Submit Button
submitButton.addEventListener("click", function () {
  submitState.classList.add("d-none");
  thankState.classList.remove("d-none");
})

// Vote Buttons
elements.forEach(element => {
  element.addEventListener('click', (e) => {
    rating.innerHTML = element.innerHTML;
    let computed = window.getComputedStyle(element);
    bgColor = computed.backgroundColor;

    reset(elements);

    if (bgColor != "rgb(149, 158, 172)") {
      element.style.backgroundColor = "#959eac";
      element.style.color = "#fff";
    }
    else if (bgColor == "rgb(149, 158, 172)") {
      element.style.backgroundColor = "#252d37";
      element.style.color = "hsl(217, 12%, 63%)";
    }
    else {
      element.style.color = "#fff";
    }

  });
});

backIcon.addEventListener("click", function () {
  submitState.classList.remove("d-none");
  thankState.classList.add("d-none");

})

function reset(elements) {

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "hsl(217, 12%, 63%)";
    elements[i].style.backgroundColor = "#252d37";
  }
}

