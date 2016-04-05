function giveDare() {
	var task = ["Do a somersault", 
					"Sing a song", 
					"Explain 'MAC-address'",
					"Quote a bible verse",
					"You're too sober, drink one",
					"You're WAY too sober, drink two",
					"Throw a striptease show",
					"Give a speech",
					"YO! Throw a rap!",
					"Do 10 push-ups!",
					"Dance like there is no tomorrow",
					"Sing a serenade"
					]
	return task[Math.floor(Math.random() * task.length)]
}