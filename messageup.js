// MessageUp.js=========
// By Akash Jain===========
// Date:2 Feb 2016=========
// Github===========


// fadeIn function



function fadeIn(element, ms) {
	if (!element)
		return;

	element.style.opacity = 0;
	element.style.filter = "alpha(opacity=0)";
	element.style.display = "block";
	element.style.visibility = "visible";

	if (ms) {
		var opacity = 0;
		var timer = setInterval(function () {
			opacity += 50 / ms;
			if (opacity >= 1) {
				clearInterval(timer);
				opacity = 1;
			}
			element.style.opacity = opacity;
			element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
		}, 50);
	} else {
		element.style.opacity = 1;
		element.style.filter = "alpha(opacity=1)";
	}
}



// check speed

if (speed == "slow") {
	fade_time = 700;
} else if (speed == "fast") {
	fade_time = 200;
} else {
	fade_time = 500;
}

// check iteration type (repeat or no-repeat)


if (iteration == "no-repeat") {
	stop = 0;
} else {
	stop = 1;
}

// messageup function

var count, message = [];
var number = msg.length;

// taking values from script
for (count = 0; count < number; count++) {
	message[count] = msg[count];
}


var col_count = 0,
	iter = 0,
	itr_dot = 0;

function messageup() {

	document.getElementById("message-box").innerHTML = message[iter % message.length];
	var val = document.getElementById("message-box");


	// color checking
	if (col_count < number) {
		val.style.color = color[col_count];
		col_count++;

	} else {

		col_count = 0;
		val.style.color = color[col_count];
		col_count++;
	}
	fadeIn(val, fade_time);
	iter++;

	// iteration checking
	if (iter == number && stop == 0) {
		check_time = clearInterval(messageup, time);
	} else {
		check_time = setTimeout(messageup, time);
	}
}
messageup();