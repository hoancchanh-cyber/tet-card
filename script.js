let player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('music');
}

function toggleMusic() {
    if (!player) return;
    if (isPlaying) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
    isPlaying = !isPlaying;
}

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function Firework() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.radius = Math.random() * 3 + 2;
    this.color = `hsl(${Math.random() * 360},100%,50%)`;
    this.speed = Math.random() * 3 + 2;
}

Firework.prototype.update = function () {
    this.y -= this.speed;
};

Firework.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
};

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.05) {
        fireworks.push(new Firework());
    }

    fireworks.forEach((fw, index) => {
        fw.update();
        fw.draw();
        if (fw.y < 0) fireworks.splice(index, 1);
    });

    requestAnimationFrame(animate);
}

animate();

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
