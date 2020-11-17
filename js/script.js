// --------------dropdown------------
// showing the dropdown content
function myFunction() {
	document.getElementById("myDropdown")
	  .classList.toggle("show");
}

// guest count 
// --------------adult--------
var clicks_adult = 0;
function makeAdditionAdult() {
	  clicks_adult += 1;
	if (clicks_adult >= 10){
			 clicks_adult=10;
}
	  document.getElementById("clicks-adult").innerHTML = clicks_adult; 
showClean();
};

function makeSubstractionAdult() {
	  clicks_adult -= 1;
		if (clicks_adult <= 0){
			 clicks_adult=0;
  }
	  document.getElementById("clicks-adult").innerHTML = clicks_adult;
showClean();
};

// --------------children--------
var clicks_children = 0;
function makeAdditionChildren() {
	  clicks_children += 1;
	if (clicks_children >= 10){
			 clicks_children = 10;
}
	 document.getElementById("clicks-children").innerHTML = clicks_children;
 showClean();
};

function makeSubstractionChildren() {
	  clicks_children -= 1;
		if (clicks_children <= 0){
			 clicks_children = 0;
  }
	 document.getElementById("clicks-children").innerHTML = clicks_children;
	if (clicks_adult==0){
 showClean();
}
};

// --------------babies--------
var clicks_babies = 0;
function makeAdditionBabies() {
	  clicks_babies += 1;
	if (clicks_babies >= 10){
			 clicks_babies = 10;
}
	 document.getElementById("clicks-babies").innerHTML = clicks_babies;
showClean();
};

function makeSubstractionBabies() {
	  clicks_babies -= 1;
		if (clicks_babies <= 0){
			 clicks_babies = 0;
  }
	 document.getElementById("clicks-babies").innerHTML = clicks_babies;
showClean();
};

// show result of counting guests
var guestResult = 0;

function showResult(){
	guestResult = clicks_adult + clicks_children + clicks_babies;
	var orig_text= document.getElementById("dropbtn");
		if (guestResult == 1){
			orig_text.innerHTML = guestResult + " гость";
	}
	else if (guestResult >= 2 && guestResult <= 4) {
		orig_text.innerHTML = guestResult + " гостя";
	} else
		orig_text.innerHTML = guestResult + " гостей";
}

function showClean(){
	guestResult = clicks_adult + clicks_children + clicks_babies;
	var show_cleanBtn = document.getElementById("clean");
	if (guestResult > 0) {
		show_cleanBtn.style.display = "block";
	} else {
		show_cleanBtn.style.display = "none";
	}
}

function clean(){
	clicks_adult=0;
	clicks_children=0;
	clicks_babies=0;
	document.getElementById("clicks-adult").innerHTML = '0';
	document.getElementById("clicks-children").innerHTML = '0';
	document.getElementById("clicks-babies").innerHTML = '0';
	document.getElementById("dropbtn").innerHTML = 'Сколько гостей';
	var show_cleanBtn = document.getElementById("clean");
	show_cleanBtn.style.display = "none";
}