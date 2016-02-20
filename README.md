# MessageUp.js

MessageUp.js is a 1 KB Jaascript file which is used to display messages one by one on a same place.

Like for loading screen. It is very easy to install copy and paste the messageup-min.js in your js rot folder then initialize its path 
at he end of body tag.
Just above it add your own script which takes some parameters related to messageup.js like:
❮script❯ 
     var msg=["Message 1", "Message 2", "Message 3", "Message 4", "Message 5" ];  //define messages here 
     var color=["red", "green", "yellow", "green", "blue"];  // define color here (optional) 
     var time=1500;  // define time here (optional) 
     var speed="slow";  // define speed here as slow or fast (optional) 
     var iteration="repeat";  // define iteration type here as repeat or no-repeat (optional) 
❮/script❯ 
and lastly just add a div to your HTML with ID message-box and you are ready to go :)

Note* currently this is working for only on e message box. Don't try to initialize with more than one div.
      
