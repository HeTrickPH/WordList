// JavaScript Document
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