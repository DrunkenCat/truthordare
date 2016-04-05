



//*****HIDES*****
//***************

//*****MENU PAGE*****


function hideMenu() {
	$("#menuPage").hide();
}

//*****INSTRUCTIONS PAGE*****

function hideInstructions() {
	$("#instructionsPage").hide();
}

function hideI1() {
	$("#i1").hide();
	$("#toI2").hide();

}

function hideI2() {
	$("#i2").hide();
	$("#backToI1").hide();
	$("#toI3").hide();
}


function hideI3() {
	$("#i3").hide();
	$("#backToI2").hide();
	$("#toI4").hide();
}

function hideI4() {
	$("#i4").hide();
	$("#backToI3").hide();
	$("#toI5").hide();
}

function hideI5() {
	$("#i5").hide();
	$("#backToI4").hide();
}



//*****DECKS*****

function hideDecks() {
	$("#deck_wrapper").hide();
	$("#taskDeckTruth").hide();
	$("#taskDeckDare").hide();
}


//*****ALERTS*****

function hideAlertTaskCompleted() {
	$("#alertTaskCompleted").hide();
}

function hideAlertTaskFailed() {
	$("#alertTaskFailed").hide();
}

function hideAlertTaskFold() {
	$("#alertTaskFold").hide();
}

//*****CHOICE BUTTONS*****

function hideChoiceButtons() {
	$("#choiceButtonsTruth").hide();
	$("#choiceButtonsDare").hide();
}


function hidesoundOff() {
	$("#soundOff").hide();
}

//*****ABOUT THE GAME*****

function hideAboutTheGame() {
	$("#aboutTheGame").hide();
}


//*****MUSIC*****
//***************

function playBackgroundMusic() {

	var intro = document.createElement('audio');
		intro.setAttribute('src', 'music/music_intro.mp3');
		intro.play();

		backgroundMusic = new Audio('music/music_end.mp3'); 
		backgroundMusic.addEventListener('ended', function() {
    	this.currentTime = 0;
    	this.play();
		}, false);
		backgroundMusic.play();
}



function pauseBackgroundMusic(playBackgroundMusic) {
	$("#soundOn").click(function() {
   	 	this.currentTime = 0;
		backgroundMusic.pause();
		$("#soundOn").hide();
		$("#soundOff").show();

	});
}

function resumeBackgroundMusic(playBackgroundMusic) {
	$("#soundOff").click(function() {
   	 	this.currentTime = 0;
		backgroundMusic.play();
		$("#soundOff").hide();
		$("#soundOn").show();

	});
}




//*****SHOWING DIVS*****
//***************


function showInstructions() {
	$("#howButton, #how").click(function() {
		$("#i1").show();
		$("#toI2").show();
		$("#instructionText").text("First, to play 'Truth or Dare', you need to have at least two players. You can have as many players as you want...");
		hideI2();
		hideI3();
		hideI4();
		hideI5();
		hideMenu();
		hideDecks();
		hideChoiceButtons();
		hideAboutTheGame();
		$("#instructionsPage").show();
	});
}

function showI1() {
	$("#backToI1").click(function() {
		hideI2();
		$("#i1").show();
		$("#toI2").show();
		$("#instructionText").text("First, to play 'Truth or Dare', you need to have at least two players. You can have as many players as you want...");
	});

}


function showI2() {
	$("#toI2").click(function() {
		hideI1();
		$("#i2").show();
		$("#backToI1").show();
		$("#toI3").show();
		$("#instructionText").text("You and your friends can decide how many shots each player has. The shots indicate players's health during the game. What you and your friends drink is entirely up to you.");
				
	});
	
	$("#backToI2").click(function() {
		hideI3();
		$("#i2").show();
		$("#backToI1").show();
		$("#toI3").show();
		$("#instructionText").text("You and your friends can decide how many shots each player has. The shots indicate players's health during the game. What you and your friends drink is entirely up to you.");
				
	});

}


function showI3() {
	$("#toI3").click(function() {
		hideI2();
		$("#i3").show();
		$("#backToI2").show();
		$("#toI4").show();
		$("#instructionText").text("On every turn, the player clicks a deck of truths or dares and gets a task to accomplish.");		

	});

	$("#backToI3").click(function() {
		hideI4();
		$("#i3").show();
		$("#backToI2").show();
		$("#toI4").show();
		$("#instructionText").text("On every turn, the player clicks a deck of truths or dares and gets a task to accomplish.");		
	

	});

}

function showI4() {
	$("#toI4").click(function() {
		hideI3();
		$("#i4").show();
		$("#backToI3").show();
		$("#toI5").show();
		$("#instructionText").text("If the player fails the task, he or she has to drink one shot. If the player refuses to accomplish the task, he or she has to drink two shots.");		

	});

	$("#backToI4").click(function() {
		hideI5();
		$("#i4").show();
		$("#backToI3").show();
		$("#toI5").show();
		$("#instructionText").text("If the player fails the task, he or she has to drink one shot. If the player refuses to accomplish the task, he or she has to drink two shots.");

	});

}

function showI5() {
	$("#toI5").click(function() {
		hideI4();
		$("#i5").show();
		$("#backToI4").show();
		$("#instructionText").text("The last player to have any shots left, wins the game of 'Truth or Dare'!");
	});

}

function showAboutTheGame() {
	$("#about, #aboutButton").click(function() {
		hideInstructions();
		hideMenu();
		hideDecks();
		hideChoiceButtons();
		$("#aboutTheGame").show();
	});
}

function showMenu() {
	$("#backButton, #menu").click(function() {
		hideInstructions();
		hideAboutTheGame();
		hideDecks();
		hideChoiceButtons();
		$("#menuPage").show();
	});
}


function showDecks() {
	$("#deck_wrapper").fadeIn();
	$("#deckleft").fadeIn();
	$("#deckright").fadeIn();
}

function startGame() {
	$("#startButton, #start2").click(function() {
		hideMenu();
		hideInstructions();
		hideAboutTheGame();
		showDecks();
		var deckShuffle = document.createElement('audio');
		deckShuffle.setAttribute('src', 'sounds/shuffle2.mp3');
		deckShuffle.play();
	});
}

function showAlertTaskCompleted() {
		$("#alertTaskCompleted").show();
		$("#alertTaskCompleted").fadeOut(5000);
}

function showAlertTaskFailed() {
		$("#alertTaskFailed").show();
		$("#alertTaskFailed").fadeOut(5000);
}

function showAlertTaskFold() {
		$("#alertTaskFold").show();
		$("#alertTaskFold").fadeOut(5000);
}


function truthCardClicked() {
	$("#truthdeck").click(function() {
		$("#deckleft").hide();
		$("#deckright").hide();
		$("#taskDeckTruth").show();
		/*$("#truthCardText").text(giveTruth());*/
		$("#textTruth").text(giveTruth());
		$("#choiceButtonsTruth").show();
		$("#choiceButtonsDare").hide();
		var cardFlip = document.createElement('audio');
		cardFlip.setAttribute('src', 'sounds/flip.mp3');
		cardFlip.play();
	});
}



function dareCardClicked() {
	$("#daredeck").click(function() {
		$("#deckleft").hide();
		$("#deckright").hide();
		$("#taskDeckDare").show();
		$("#choiceButtonsDare").show();
		$("#choiceButtonsTruth").hide();
		/*$("#dareCardText").text(giveDare());*/
		$("#textDare").text(giveDare());
		var cardFlip = document.createElement('audio');
		cardFlip.setAttribute('src', 'sounds/flip.mp3');
		cardFlip.play();
	});
}





//*****CHOICE BUTTONS CLICKED*****
//********************************


//*****RESET*****

function resetButtonClicked() {
	$(".resetButton").click(function() {
		$("#dareCardText").text("Dare");
		$("#truthCardText").text("Truth");
		restoreDecks();
		hideChoiceButtons();
		showAlertTaskCompleted();
		var deckShuffle = document.createElement('audio');
		deckShuffle.setAttribute('src', 'sounds/shuffle2.mp3');
		deckShuffle.play();
	});
}

//*****FAILED*****

function failedButtonClicked() {
	$(".failedButton").click(function() {
		$("#dareCardText").text("Dare");
		$("#truthCardText").text("Truth");
		restoreDecks();
		hideChoiceButtons();
		showAlertTaskFailed();
		var deckShuffle = document.createElement('audio');
		deckShuffle.setAttribute('src', 'sounds/shuffle2.mp3');
		deckShuffle.play();
	});
}

//*****FOLD*****

function foldButtonClicked() {
	$(".foldButton").click(function() {
		$("#dareCardText").text("Dare");
		$("#truthCardText").text("Truth");
		restoreDecks();
		hideChoiceButtons();
		showAlertTaskFold();
		var deckShuffle = document.createElement('audio');
		deckShuffle.setAttribute('src', 'sounds/shuffle2.mp3');
		deckShuffle.play();
	});
}


function restoreDecks() {
	$("#choiceButtons").hide();
	$("#taskDeckTruth").hide();
	$("#taskDeckDare").hide();
	$("#deckleft, #deckright").show();



}




//*****ON READY*****

function onReady() {


	playBackgroundMusic();
	pauseBackgroundMusic();
	resumeBackgroundMusic();

	hideInstructions();
	hideI2();
	hideI3();
	hideI4();
	hideI5();
	
	showI1();
	showI2();
	showI3();
	showI4();
	showI5();

	hideAboutTheGame();

	hidesoundOff();

	hideAlertTaskCompleted();
	hideAlertTaskFailed();
	hideAlertTaskFold();
	hideDecks();
	hideChoiceButtons();

	showInstructions();
	showMenu();
	showAboutTheGame();

	startGame();

	truthCardClicked();
	dareCardClicked();
	resetButtonClicked();
	failedButtonClicked();
	foldButtonClicked();

	restoreDecks();

}


//*****INIT*****

$(document).ready(onReady)
