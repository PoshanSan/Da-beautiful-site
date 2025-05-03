const colors = ["#000000", "#001F3F", "#ffffff", "#C83E4D"];
const haha = ["#ffffff", "#B8860B", "#000000", "#B8860B"];
const abraKadabra = [
  "Dark theme! Change to Navy & Gold?",
  "Navy and Gold! Change to Light theme?",
  "Light theme! Change to my theme?",
  "My theme! Change to dark theme?"
];
let Index = 0;

function cycletheme() {
  document.body.style.backgroundColor = colors[Index];
  document.body.style.color = haha[Index];
  document.querySelector("#Alpenlibe").innerText = abraKadabra[Index];
  Index = (Index + 1) % colors.length;
}

function updateTextWithFade(id, newText) {
  const element = document.getElementById(id);
  element.classList.add("hidden");

  setTimeout(() => {
    element.innerText = newText;
    element.classList.remove("hidden");
  }, 400); // matches your CSS transition duration
}

document.getElementById("readStoryBtn").addEventListener("click", function() {
  window.open("The_Decay/The_Decay.pdf", "_blank");
});
