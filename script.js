let angle = 0; 
const line = document.getElementById("line");

// Correct spelling: setInterval (not setIntervel)
setInterval(() => {
  angle += 2; 
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; 
}, 20);
