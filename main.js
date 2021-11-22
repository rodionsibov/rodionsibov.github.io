const faviconHref = emoji => `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>${emoji}</text></svg>`

const changeFavicon = emoji => {
	// Ensure we have access to the document, i.e. we are in the browser.
	if (typeof window === 'undefined') return;

	const link = window.document.querySelector("link[rel*='icon']") || window.document.createElement("link");
	link.type = "image/svg+xml";
	link.rel = "shortcut icon";
	link.href = faviconHref(emoji);
	window.document.getElementsByTagName("head")[0].appendChild(link);
}; // Thanks to https://formito.com/tools/favicon

const currentEmoji = () => {
	// Add 15 minutes and round down to closest half hour
	const time = new Date(Date.now() + 15 * 60 * 1000);
	const hours = time.getHours() % 12;
	const minutes = time.getMinutes() < 30 ? 0 : 30;

	return {
		"0.0": "🕛",
		"0.30": "🕧",
		"1.0": "🕐",
		"1.30": "🕜",
		"2.0": "🕑",
		"2.30": "🕝",
		"3.0": "🕒",
		"3.30": "🕞",
		"4.0": "🕓",
		"4.30": "🕟",
		"5.0": "🕔",
		"5.30": "🕠",
		"6.0": "🕕",
		"6.30": "🕡",
		"7.0": "🕖",
		"7.30": "🕢",
		"8.0": "🕗",
		"8.30": "🕣",
		"9.0": "🕘",
		"9.30": "🕤",
		"10.0": "🕙",
		"10.30": "🕥",
		"11.0": "🕚",
		"11.30": "🕦"
	}[`${hours}.${minutes}`]
};


// One minute
const delay = 60 * 1000

// Change the favicon when the page gets loaded...
const emoji = currentEmoji()
changeFavicon(emoji)

// ... and update it every minute
setInterval(() => {
	const emoji = currentEmoji()
	changeFavicon(emoji)
}, delay)


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


setTimeout(typeWriter, 3000)



function vibrate(ms) {
	navigator.vibrate(ms);
}




const changeFavicon = emoji => {
	// Ensure we have access to the document, i.e. we are in the browser.
	if (typeof window === 'undefined') return;
	const link = window.document.querySelector("link[rel*='icon']") || window.document.createElement("link");
	link.type = "image/svg+xml";
	link.rel = "shortcut icon";
	link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>${emoji}</text></svg>`;
	window.document.getElementsByTagName("head")[0].appendChild(link);
}; // Thanks to https://formito.com/tools/favicon

changeFavicon("🧔");