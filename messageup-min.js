$(document).ready(function(){var color_main;if(typeof color=='undefined'){color_main=["red"]}else{color_main=color}var time_main if(typeof time=='undefined'){time_main=100}else{time_main=time}if(typeof speed=='undefined'){fade_time=500}else if(speed=="slow"){fade_time=700}else if(speed=="fast"){fade_time=200}if(typeof iteration=="undefined"){stop=1}else if(iteration=="no-repeat"){stop=0}else{stop=1}var count,message=[];var number=msg.length;for(count=0;count<number;count++){message[count]=msg[count]}var col_count=0,iter=0,itr_dot=0;function messageup(){$("#message-box").html(message[iter%message.length]);var val=$("#message-box");if(col_count<number){$("#message-box").css({'color':color_main[col_count]});col_count++}else{col_count=0;val.css({'color':color_main});col_count++}val.hide().fadeIn(fade_time);iter++;if(iter==number&&stop==0){check_time=clearInterval(messageup,time_main)}else{check_time=setTimeout(messageup,time_main)}}messageup()})
