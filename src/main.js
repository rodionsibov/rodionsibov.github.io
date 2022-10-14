let j = 0;
const txt = `Say Hello!`;
const speed = 200;

function typeWriter() {
	if (j < txt.length) {
		document.querySelector('#demo').innerHTML += txt.charAt(j);
		j++;
		setTimeout(typeWriter, speed);
	}
}
setTimeout(typeWriter, 2000)

listener = document.addEventListener("keypress", (e) => {
  if (e.key === "t") {
    // document.body.classList.toggle('dark')
    clearInterval(id);
  }
});

const canvas = document.querySelector("#matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + nums;

const fontSize = 16;

const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

let id = setInterval(draw, 30);

