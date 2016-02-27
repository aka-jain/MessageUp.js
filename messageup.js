// MessageUp.js=========
// By Akash Jain===========
// Date:2 Feb 2016=========
// Github===========


$(document).ready(function () {

	var color_main;
	//check color
	if (typeof color == 'undefined') {
		color_main = ["red"];
	} else {
		color_main = color;
	}

	var time_main
		//check time
		//	var time = (typeof time == 'undefined') ? 1500 : time;
	if (typeof time == 'undefined') {
		time_main = 100;
	} else {
		time_main = time;
	}
	// check speed

	if (typeof speed == 'undefined') {
		fade_time = 500;
	} else if (speed == "slow") {
		fade_time = 700;
	} else if (speed == "fast") {
		fade_time = 200;
	}

	// check iteration type (repeat or no-repeat)

	if (typeof iteration == "undefined") {
		stop = 1;
	} else if (iteration == "no-repeat") {
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

		$("#message-box").html(message[iter % message.length]);

		var val = $("#message-box");


		// color checking
		if (col_count < number) {

			$("#message-box").css({
				'color': color_main[col_count]
			});
			col_count++;

		} else {
			col_count = 0;
			val.css({
				'color': color_main
			});
			col_count++;
		}

		val.hide().fadeIn(fade_time);
		iter++;

		// iteration checking
		if (iter == number && stop == 0) {
			check_time = clearInterval(messageup, time_main);
		} else {
			check_time = setTimeout(messageup, time_main);
		}

	}

	messageup();
})
