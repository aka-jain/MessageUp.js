# MessageUp.js

MessageUp.js is a 1 KB Javascript file based on Jquery which is used to display messages one by one at the  same place, like for a loading screen.

# Install using npm
npm install msgup

##How To use MessageUp.js

It is very easy to install, just copy and paste the messageup-min.js in your js root folder and then initialize its path 
in your html file. It's better to initialize it in head tag.
```
<head>
 <script src="path/to/messageUp.min.js"></script>
</head>
```
##### Dependency : It depends on jquery. So initialize jquery before messageUp.js 

#General Notes
The messageup element is now accessible outside of the callback API via the jQuery.messageup() method. 
Example use:
```
$('element').messageup();
```
Note: element can be id or class or any html tag

##Default options
```
msg: ["Hi!", "I'm Messageup.js", "Use me to...", "display your text", " change your text", "do cool things", ":)"],
color: ["#E53935", "#5E35B1", "#009688", "#AFB42B", "#37474F", "#EF6C00", "#558B2F"],
time : 1500,
speed : "slow", 
interation : "repeat"
```
##Add your options
```
msg : ["Message 1", "Message 2", "Message 3", "Message 4", "Message 5" ],
color : ["red", "green", "yellow", "green", "blue"], 
time : 1500, 
speed : "slow",
iteration : "no-repeat"
```
#Example
for a div tag having class named "message-box"
```
<div class="message-box"></div>
```
you can initialize it like this
```
$(".message-box").messageup({
 msg : ["Hi", "This", "is", "custom", "message"],
	color : ["#E53935", "#5E35B1", "#009688" , "#EF6C00", "#37474F"],
	time : 1000,
	speed : "fast",
	iteration : "repeat"
})
```

Run this script in your browser...
Enjoy Cheers !!
Made with :heart: while listening :musical_note:

