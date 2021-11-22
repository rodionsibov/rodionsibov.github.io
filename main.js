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
	let random = Math.floor(Math.random() * 100) + 2
	
	console.log(random);
	Array.from(sectionEl).forEach(item => console.log(item))
})