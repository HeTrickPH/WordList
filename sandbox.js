// JavaScript Document

var a = [1,2,3,4,5,6,7,8,9,0];
var txt = "";
var val = "";
var i;
function optionCreat(){
	for (i=0; i< a.length; i++){
		txt += "<option value='" + a[i] + "'>" + a[i] + "</option>";
	}
	document.getElementById("a").innerHTML = txt;
}
function setVal(num){
	val = a[num];
	document.getElementById("b").innerHTML = val;
}

