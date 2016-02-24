# MessageUp.js
<br />
<br />
MessageUp.js is a 1 KB Jaascript file which is used to display messages one by one on a same place.
<br />
<br />
Like for loading screen. It is very easy to install copy and paste the messageup-min.js in your js rot folder then initialize its path 
at he end of body tag.
<br />
<br />
Just above it add your own script which takes some parameters related to messageup.js like:
<br />
❮script❯ 
<br />
     var msg=["Message 1", "Message 2", "Message 3", "Message 4", "Message 5" ];  //define messages here
     <br />
     var color=["red", "green", "yellow", "green", "blue"];  // define color here 
     <br />
     var time=1500;  // define time here
     <br />
     var speed="slow";  // define speed here as slow or fast
     <br />
     var iteration="repeat";  // define iteration type here as repeat or no-repeat
     <br />
❮/script❯
<br />
and lastly just add a div to your HTML with ID message-box and you are ready to go :)
<br /><br />
Note* currently this is working for only one message box. Don't try to initialize with more than one div.
      
