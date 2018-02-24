// JavaScript Document
	var QuizList = [];
	var answerList = [];
	var timer;

	function MakeFilterDate (filterOption) {
		debugger;
		var claFilterDate;
		if (filterOption == "in 24hours") {clafilterDate = 1;}
		else if (filterOption == "last week") {clafilterDate = 7;}
		else if (filterOption == "last Month") {clafilterDate = 30;}
		else if (filterOption == "last three Months") {clafilterDate = 92;} 
		else if (filterOption == "last half year") {clafilterDate = 181;}
		
		var filterIngDate = new Date((new Date().getTime()) - clafilterDate * 86400000);
		
		var filterIng = filterIngDate.getFullYear() + "/" + ("0" + filterIngDate.getMonth()).slice(-2) + "/" +  filterIngDate.getDate();
		return filterIng;
	}

	function makeQuizList() {
		debugger;
		var filterOption = document.getElementById("writenDate").value;
		if (filterOption == "all word") {
			QuizList = WordList;
		} else {
			if (filterOption == "Date") {
				var selectedDate = document.getElementById("FilterOptions").value;
				QuizList = WordList.filter(x => { return x.date == selectedDate; } );
			} else if (filterOption == "Author") {
				var selectedUser = document.getElementById("FilterOptions").value;
				QuizList = WordList.filter(x => { return x.name == selectedUser; } );
			}
		}
	}
	
	window.onload = function() {
		debugger;
		var users = "<option>all users</option>";
		users += "<option>" + WordList[0].name + "</option>";
		var n = WordList.filter(x => { return x.name != WordList[0].name; } );
		
		for (var i = 0; i < WordList.length; i++) {
			if (n[0].name != undefined) {
				users += "<option>" + n[0].name + "</option>";
				n = n.filter(x => { return x.name != n[0].name; });
			}
			
			if (n.length == 0) {
				document.getElementById("users").innerHTML = users;
				break;
			}
		}
	};
	
 	function showWord() {
		makeQuizList();
		var manyWord = document.getElementById("manyWord");
		var defList = "";
		var numWordIsSoImportant = 1; 
		var i = Math.floor(Math.random() * QuizList.length);
		while (i < QuizList.length && numWordIsSoImportant <= manyWord.value) {
			if (QuizList[i].used != true) { 
				debugger;
				defList +="<tr><td>" + QuizList[i].def + "</td><td><div><input class='form-control' type='text' id='" + QuizList[i].spell + "'/><span></span><div></td></tr>";
				numWordIsSoImportant++;
				QuizList[i].used = true;
				answerList.push(i);
				i = Math.floor(Math.random() * QuizList.length);
			} else {
				i = Math.floor(Math.random() * QuizList.length);
			}
		}
		document.getElementById("defList").innerHTML = defList;
		document.getElementById("reOrcheck").innerHTML = "<button type='button'class='btn btn-primary' data-toggle='modal' data-target='#myModal' onclick='Empty()'>check the answer</button>";
		
		for (i = 0;i < QuizList.length; i++) {
			if (QuizList[i].used == true) {
				debugger
				QuizList[i].used = false;
			}
			if (i == QuizList.length) {break;}
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
			for (var i = 0; i < answerList.length; i++) {
				var sentance = QuizList[answerList[i]];
				var input = document.getElementById(sentance.spell);
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
		debugger;
		for (var i = 0;i < answerList.length; i++) {
			var sentance = QuizList[answerList[i]];
			var input = document.getElementById(sentance.spell);
			if (sentance.spell === input.value) {
					defList +="<tr><td>" + sentance.def + "</td><td><div class='form-group has-success has-feedback'><input class='form-control' type='text' value='" + input.value + "' id='" + sentance.spell + "' disabled/><span class='glyphicon glyphicon-ok form-control-feedback'></span></div></td></tr>";
				score = score;
			} 
			else {
				defList +="<tr><td>" + sentance.def  + "      " + "<strong>/" + sentance.spell + "</strong>" + "</td><td><div class='form-group has-error has-feedback'><input class='form-control' type='text' value='" + input.value + "' id='" + sentance.spell + "'disabled/><span class='glyphic on glyphicon-remove form-control-feedback'></span></div></td></tr>";
				score = score - (100 / answerList.length);
			}
		}
		var message = "Do you still want to know your score?"; // default message 
		if (score == 100) { message = "Do what ever you want tonight!";}
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
	}	

	var optionListPro = [];
	var filteredArr;

	function selectDates(kindOfFilter) {
		var i = 0;
		if (kindOfFilter == "Date") {
			for(i=0; i<WordList.length; i++){
				optionListPro.push(WordList[i].date);
      		}	
		} else if (kindOfFilter == "Author") {
			for(i=0; i<WordList.length; i++){
				optionListPro.push(WordList[i].name);
      		}
		}
		debugger;
		filteredArr = optionListPro.filter(function(item,index){
				if(optionListPro.indexOf(item)==index)
				return item;
		});	
		optionListPro = [];
	}

	function makeOption(){
		var optionList = "";
		if (document.getElementById("writenDate").value == "Date") {
			selectDates("Date");
			for(var i=0; i< filteredArr.length; i++){
				optionList += "<option>" + filteredArr[i] + "</option>";
			}
			document.getElementById("FilterOptions").innerHTML = optionList;
		} else if (document.getElementById("writenDate").value == "Author") {
			debugger;
			selectDates("Author");
			for(var i=0; i< filteredArr.length; i++){
				
				optionList += "<option>" + filteredArr[i] + "</option>";
			}
			
		}
		document.getElementById("FilterOptions").innerHTML = optionList;
	}
	
	//var dateList =[];
    //function makeDateList(){
	//for(var i=0; i<WordList.length; i++){
	//   dateList.push(WordList[i].date);
    //  }
    // return dateList;	
    //}
    //makeDateList();
	