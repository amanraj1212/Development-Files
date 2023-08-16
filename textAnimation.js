//Aman Raj
const text = document.querySelector('#text-animation');
const textContent = text.textContent;
const delay = 23; // Adjust this value to control the typing speed
let i = 0;

text.textContent = '';

function typeWriter() {
  if (i < textContent.length) {
    text.textContent += textContent.charAt(i);
    i++;
    setTimeout(typeWriter, delay);
  } else {
    text.style.opacity = 1;
  }
}

typeWriter();