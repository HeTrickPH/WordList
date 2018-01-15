<<<<<<< HEAD
// JavaScript Document
	var QuizList = [];
	var testQuizList = [];
	var timer;
	
	function makeQuizList(){
		debugger;
		var today = new Date();
		var limitDate = document.getElementById("writenDate").value;
		if (limitDate == "all word") {
			QuizList = WordList;
		} else if (limitDate == "in 24our") {
			//john code it 
			var in24 = today.getFullYear() + "/" + ("0" +(today.getMonth()+1)).slice(-2)  + "/" + (today.getDate() - 1);
			QuizList = WordList.filter(x => { return x.date >= in24; } );
		} else if (limitDate == "last week") {
			var lastWeek = today.getFullYear() + "/" +  ("0" +(today.getMonth()+1)).slice(-2) + "/" +  (today.getDate() - 7);
			QuizList = WordList.filter(x => { return x.date >= lastWeek; } );
		} else if (limitDate == "last Month") {
			var lastMonuth = today.getFullYear() + "/" +  ("0" +today.getMonth()).slice(-2) + "/" +  today.getDate();
			QuizList = WordList.filter(x => { return x.date >= lastMonuth; } );
		} else if (limitDate == "last three Months") {
			var threeMonuth = today.getFullYear() + "/" + ("0" +(today.getMonth()-2)).slice(-2) + "/" +  today.getDate();
			QuizList = WordList.filter(x => { return x.date >= threeMonuth; } );
		} else if (limitDate == "last half year") {
		 	var halfyear = today.getFullYear() + "/" + ("0" +(today.getMonth()-5)).slice(-2) + "/" +  today.getDate();
			QuizList = WordList.filter(x => { return x.date >= halfyear; } );
		}
	}
	
 	function showWord() {
		debugger;
		makeQuizList();
		var manyWord = document.getElementById("manyWord");
		var defList = "";
		var numWordIsSoImportant = 1; 
		var i = Math.floor(Math.random() * QuizList.length)
		while (i < QuizList.length && numWordIsSoImportant <= manyWord.value) {
			if (QuizList[i].used != true) { 
				defList +="<tr><td>" + QuizList[i].def + "</td><td><div><input class='form-control' type='text' id='" + QuizList[i].spell + "'/><span></span><div></td></tr>";
				document.getElementById("defList").innerHTML = defList;
				numWordIsSoImportant++;
				QuizList[i].used = true;
				testQuizList.push(i);
				i = Math.floor(Math.random() * QuizList.length);
			} else {
				i = Math.floor(Math.random() * QuizList.length);
			}
		}
		document.getElementById("reOrcheck").innerHTML = "<button type='button'class='btn btn-primary' data-toggle='modal' data-target='#myModal' onclick='Empty()'>check the answer</button>"
		
		for (i = 0;i < QuizList.length; i++) {
			;
			if (QuizList[i].used == true) {
				debugger
				QuizList[i].used = false;
			}
			if (i == QuizList.length) {
				break;
			}
		}
		
		var TimeLim = document.getElementById("Timelim");
		var d = new Date();
		var countDown;
		if (TimeLim.value == "off"){
			var timer = setTimeout(check, 60 * 60 * 1000);
			countDown = d.setMinutes(d.setMinutes() + 60).getTime;
		} else {
			var timer = setTimeout(check, TimeLim.value * 60 * 1000);
			countDown = d.setMinutes(d.setMinutes() + TimeLim.value).getTime;
		}
	}
	
	function Empty() {
		var emptyInput = 0;
			for (var i = 0; i < testQuizList.length; i++) {
				var santans = QuizList[testQuizList[i]];
				var input = document.getElementById(santans.spell);
				if (input.value == "") {
					emptyInput++;
				}
			}
		if (emptyInput > 0) {
		document.getElementById("modalBody").innerHTML = "Do you want check your answer?" + emptyInput + "Q is empty";
		}
	}
	
	function check(timeover) {
		clearTimeout(timer);
		var defList = "";
		var score = 100;
		for (var i = 0;i < testQuizList.length; i++) {
			var santans = QuizList[testQuizList[i]];
			var input = document.getElementById(santans.spell);
			if (santans.spell === input.value) {
					defList +="<tr><td>" + santans.def + "</td><td><div class='form-group has-success has-feedback'><input class='form-control' type='text' value='" + input.value + "' id='" + santans.spell + "' disabled/><span class='glyphicon glyphicon-ok form-control-feedback'></span></div></td></tr>";
				score = score;
			} 
			else {
				defList +="<tr><td>" + santans.def  + "      " + "<strong>/" + santans.spell + "</strong>" + "</td><td><div class='form-group has-error has-feedback'><input class='form-control' type='text' value='" + input.value + "' id='" + santans.spell + "'disabled/><span class='glyphic on glyphicon-remove form-control-feedback'></span></div></td></tr>";
				score = score - (100 / testQuizList.length);
			}
		}
		var message = "Do you still want to know your score?"; // default message 
		if (score == 100) { message = "Do what ever you want tonight!"}
		else if (score >= 90) { message = "Ooooh, almost got 100!!";}
		else if (score >= 70) { message = "Try to got 100!!";}
		else if (score >= 50) { message = "Don't try to play game tonight.";}
		else if (score >= 30) { message = "Seriously? No food for you!";} 
		else if (score > 0) { message = "You're screwed!!!!";}		

		document.getElementById("massage").innerHTML = message;
		document.getElementById("score").innerHTML = score;
		overlayOn();
		document.getElementById("defList").innerHTML = defList;

		document.getElementById("reOrcheck").innerHTML = "<button class='btn btn-primary' id='reOrcheck' onclick='reStart()'>REtest?</button>";	
	}
	
	
	function reStart() {
		location.reload();
	}
	
	function overlayOn() {
		document.getElementById("overlay").style.display = "block";
	}

	function overlayOff() {
		document.getElementById("overlay").style.display = "none";
=======
// JavaScript Document
	var QuizList = [];
	var testWordList = [];
	var timer;
	
	function makeQuizList(){
		var toDayDate = new Date();
		var limitDate = document.getElementById("writenDate");
		if (limitDate == "All word") {
			QuizList = WordList
		} else (limitDate == "today") {
			QuizList = WordList.filter(x => { return x.date==toDayDate; } );
		} else (limitDate == "last weak") {
			QuizList = WordList.filter(x => { return x.date>=; } );
		} else (limitDate == "last Monuth") {
			
		} else (limitDate == "last three Monuth") {
			
		} else (limitDate == "last half year") {
		 	
		}
	}
	
 	function showWord() {
		var manyWord = document.getElementById("manyWord");
		var defList = "";
		var numWordIsSoImportant = 1; 
		var i = Math.floor(Math.random() * WordList.length)
		while (i < WordList.length && numWordIsSoImportant <= manyWord.value) {
			if (date.value == "all word") {
				if (WordList[i].used != true) { 
					defList +="<tr><td>" + WordList[i].def + "</td><td><div><input class='form-control' type='text' id='" + WordList[i].spell + "'/><span></span><div></td></tr>";
					document.getElementById("defList").innerHTML = defList;
					numWordIsSoImportant++;
					WordList[i].used = true;
					testWordList.push(i);
					i = Math.floor(Math.random() * WordList.length);
				} else {
					i = Math.floor(Math.random() * WordList.length);
				}
			} else if (date.value == WordList[i].date) {
				if (WordList[i].used != true) { 
					defList +="<tr><td>" + WordList[i].def + "</td><td><div><input class='form-control' type='text' id='" + WordList[i].spell + "'/><span></span><div></td></tr>";
					document.getElementById("defList").innerHTML = defList;
					numWordIsSoImportant++;
					WordList[i].used = true;
					testWordList.push(i);
					i = Math.floor(Math.random() * WordList.length);
				} else {
					i = Math.floor(Math.random() * WordList.length);
				}
			} else {
				i = Math.floor(Math.random() * WordList.length);
			}
		}
		document.getElementById("reOrcheck").innerHTML = "<button type='button'class='btn btn-primary' data-toggle='modal' data-target='#myModal' onclick='Empty()'>check the answer</button>"
		
		for (i = 0;i < WordList.length; i++) {
			;
			if (WordList[i].used == true) {
				debugger
				WordList[i].used = false;
			}
			if (i == WordList.length) {
				break;
			}
		}
		
		var TimeLim = document.getElementById("Timelim");
		var d = new Date();
		var countDown;
		if (TimeLim.value == "off"){
			var timer = setTimeout(check, 60 * 60 * 1000);
			countDown = d.setMinutes(d.setMinutes() + 60).getTime();
		} else {
			var timer = setTimeout(check, TimeLim.value * 60 * 1000);
			countDown = d.setMinutes(d.setMinutes() + TimeLim.value).getTime();
		}
	}
	
	function Empty() {
		var emptyInput = 0;
			for (var i = 0; i < testWordList.length; i++) {
				var santans = WordList[testWordList[i]];
				var input = document.getElementById(santans.spell);
				if (input.value == "") {
					emptyInput++;
				}
			}
		if (emptyInput > 0) {
		document.getElementById("modalBody").innerHTML = "Do you want check your answer?" + emptyInput + "Q is empty";
		}
	}
	
	function check(timeover) {
		clearTimeout(timer);
		var defList = "";
		var score = 100;
		for (var i = 0;i < testWordList.length; i++) {
			var santans = WordList[testWordList[i]];
			var input = document.getElementById(santans.spell);
			if (santans.spell === input.value) {
					defList +="<tr><td>" + santans.def + "</td><td><div class='form-group has-success has-feedback'><input class='form-control' type='text' value='" + input.value + "' id='" + santans.spell + "' disabled/><span class='glyphicon glyphicon-ok form-control-feedback'></span></div></td></tr>";
				score = score;
			} 
			else {
				defList +="<tr><td>" + santans.def  + "      " + "<strong>/" + santans.spell + "</strong>" + "</td><td><div class='form-group has-error has-feedback'><input class='form-control' type='text' value='" + input.value + "' id='" + santans.spell + "'disabled/><span class='glyphic on glyphicon-remove form-control-feedback'></span></div></td></tr>";
				score = score - (100 / testWordList.length);
			}
		}
		var message = "Do you still want to know your score?"; // default message 
		if (score == 100) { message = "Do what ever you want tonight!"}
		else if (score >= 90) { message = "Ooooh, almost got 100!!";}
		else if (score >= 70) { message = "Try to got 100!!";}
		else if (score >= 50) { message = "Don't try to play game tonight.";}
		else if (score >= 30) { message = "Seriously? No food for you!";} 
		else if (score > 0) { message = "You're screwed!!!!";}		

		document.getElementById("massage").innerHTML = message;
		document.getElementById("score").innerHTML = score;
		overlayOn();
		document.getElementById("defList").innerHTML = defList;

		document.getElementById("reOrcheck").innerHTML = "<button class='btn btn-primary' id='reOrcheck' onclick='reStart()'>REtest?</button>";	
	}
	
	
	function reStart() {
		location.reload();
	}
	
	function overlayOn() {
		document.getElementById("overlay").style.display = "block";
	}

	function overlayOff() {
		document.getElementById("overlay").style.display = "none";
>>>>>>> 1dee49bda2c42b5ba0af8c26fe129c5496c23d24
	}	