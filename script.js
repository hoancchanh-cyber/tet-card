let musicOn = false;
const iframe = document.getElementById("music");

function toggleMusic() {
  if (!musicOn) {
    iframe.src += "&autoplay=1";
    musicOn = true;
  } else {
    iframe.src = iframe.src.replace("&autoplay=1", "");
    musicOn = false;
  }
}

// PHÁO HOA ĐƠN GIẢN
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
    ctx.fill();
  }

  setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 800);
}
