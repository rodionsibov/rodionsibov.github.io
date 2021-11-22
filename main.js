//type effect
let j = 0;
const txt = `Say Hello!`;
const speed = 200;

function typeWriter() {
	if (j < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(j);
		j++;
		setTimeout(typeWriter, speed);
	}
}
