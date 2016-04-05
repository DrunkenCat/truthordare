function giveTruth() {
	var task = ["Cats or dogs?", 
					"First kiss?",
					"Most embarassing moment in school?",
					"Most embarassing moment EVER?",
					"Your hottest friend?",
					"Are you, the Batman?",
					"To be or not to be?",
					"Your guilty pleassure song?",
					"Your guilty pleassure movie?"]
	return task[Math.floor(Math.random() * task.length)]
}