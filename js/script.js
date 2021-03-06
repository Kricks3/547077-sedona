var link = document.querySelector(".find-hotels-btn");
var form = document.querySelector(".find-hotels");
var dateIn = document.querySelector(".input-date-in");
var dateOut = document.querySelector(".input-date-out");
var adults = document.querySelector(".count-adults");
var adultsInput = document.getElementById("adults");
var adultsLessBtn = adults.querySelector(".less-btn");
var adultsMoreBtn = adults.querySelector(".more-btn");
var child = document.querySelector(".count-child");
var childInput = document.getElementById("child");
var childLessBtn = child.querySelector(".less-btn");
var childMoreBtn = child.querySelector(".more-btn");

form.classList.add("form-hidden");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (form.classList.contains("form-hidden")) {
		form.classList.remove("form-hidden");
	}
	else {
		form.classList.add("form-hidden");
		form.classList.remove("form-error");
	}
	dateIn.focus();
});

adultsLessBtn.addEventListener("click", function(evt) {
	if (adultsInput.value > 1) {
		adultsInput.value = parseInt(adultsInput.value) - 1;
	}
});


adultsMoreBtn.addEventListener("click", function(evt) {
	adultsInput.value = parseInt(adultsInput.value) + 1;
});

childLessBtn.addEventListener("click", function(evt) {
	if (childInput.value > 0) {
		childInput.value = parseInt(childInput.value) - 1;
	}
});

childMoreBtn.addEventListener("click", function(evt) {
	childInput.value = parseInt(childInput.value) + 1;
});


form.addEventListener("submit", function (evt) {
    if (!dateIn.value || !dateOut.value  || !adultsInput.value || (adultsInput.value <= 0) || (childInput.value < 0)) {
      evt.preventDefault();
      form.classList.remove("form-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("form-error");
    } 
  });

