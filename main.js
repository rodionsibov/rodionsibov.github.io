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

const sectionEl = document.querySelector('section')
sectionEl.addEventListener('click', () => {
	let random = Math.floor(Math.random() * 100) + 104
	console.log(random);
	console.log(navigator);
	Array.from(sectionEl).forEach(item => windows.navigator.vibrate(random))
})