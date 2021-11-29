"use strict";

var url = "";

function replace() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].src = url;
	}
}

chrome.storage.sync.get({
	enabled: true,
	url: "https://maturesex.fetischtreffen.net/wp-content/uploads/sites/58/2009/07/milf-pornos.gif"
}, function(items) {
	if (items.enabled) {
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		if(window.location && window.location.host.replace(/www\./, '') === 'twitch.tv') {
			if(getRandomInt(1,40)===3){
			window.setInterval(() => {
				const elm = document.querySelector('[data-a-target="video-player"]')
				console.log('test', elm)
				if(elm) {
					elm.style.filter = 'blur(20px)'
				}
			}, 3000)	
			}
		}

		/**
		 * Returns a random integer between min (inclusive) and max (inclusive).
		 * The value is no lower than min (or the next integer greater than min
		 * if min isn't an integer) and no greater than max (or the next integer
		 * lower than max if max isn't an integer).
		 * Using Math.round() will give you a non-uniform distribution!
		 */
		
		if(getRandomInt(1,400)===144){
		if(getRandomInt(0,10)===4){
			url = "https://firebasestorage.googleapis.com/v0/b/intra-boosting.appspot.com/o/images%2FMicrosoftTeams-image.png?alt=media&token=e911e962-3398-45f8-9b10-83056c377d2c";
		var css = document.createElement("style");
		css.innerHTML = "img { content: url(\"" + url + "\") !important; }";
		document.body.appendChild(css);
		window.setInterval(replace, 3000);
		replace();	
		}
		else{
		url = "[17:07] Chiara Purger - Brand Boosting GmbHhttps://firebasestorage.googleapis.com/v0/b/intra-boosting.appspot.com/o/images%2FMicrosoftTeams-image.png?alt=media&token=e911e962-3398-45f8-9b10-83056c377d2c";
		var css = document.createElement("style");
		css.innerHTML = "img { content: url(\"" + url + "\") !important; }";
		document.body.appendChild(css);
		window.setInterval(replace, 3000);
		replace();	
		}	
		}
		
	}
});