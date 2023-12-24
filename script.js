let clickCount = 0;
const colors = ['red', 'blue', 'yellow'];
let currentColorIndex = 0;

const button = document.getElementById('clickButton');
button.addEventListener('click', handleButtonClick);

function handleButtonClick() {
  // Increment click count
  clickCount++;
  document.getElementById("clickCount").textContent = clickCount;

  // Change button color
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  button.style.backgroundColor = colors[currentColorIndex];
}
