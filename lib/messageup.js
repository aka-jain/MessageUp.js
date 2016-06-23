// MessageUp.js=========
// By Akash Jain===========
// Date:2 Feb 2016=========
// Github===========
(function ( $ ) {
	$.fn.messageup = function(options) {
	var ele = this;
	var settings = $.extend({
            // These are the defaults.
            msg: ["Hi!", "I'm Messageup.js", "Use me to...", "display your text", " change your text", "do cool things", ":)"],
            color: ["#E53935", "#5E35B1", "#009688", "#AFB42B", "#37474F", "#EF6C00", "#558B2F"],
            time : 1500,
            speed : "slow", 
            interation : "repeat"
        }, options );
   console.log(settings.msg);
	// // script for messageup
	 var msg = settings.msg;
	 var color = settings.color;
	 var time = settings.time;
	 var speed = settings.speed;
	 var iteration = settings.iteration;
	// check speed

	if (speed == "slow") {
		fade_time = 700;
	} else if (speed == "fast") {
		fade_time = 200;
	}

	// check iteration type (repeat or no-repeat)
	if (iteration == "no-repeat") {
		stop = 0;
	} else {
		stop = 1;
	}
	var	iter = 0;
			// messageup function
			var msg_length = msg.length;
			var col_count = 0;
				ele.html(msg[iter % msg_length]);
				// color checking
				if (col_count < msg_length) {

					ele.css({
						'color': color[col_count]
					});
					col_count++;

				} else {
					col_count = 0;
					ele.css({
						'color': color
					});
					col_count++;
				}

				ele.hide().fadeIn(fade_time);

		// if (iter == msg.length && stop == 0) {
		// 	check_time = clearInterval(doSomething, time);
		// } else {
		// 	check_time = setInterval(doSomething, time);
		// }
		iter++;	

	}
}( jQuery ));