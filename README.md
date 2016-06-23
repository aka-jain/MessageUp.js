# MessageUp.js

MessageUp.js is a 1 KB Javascript file based on Jquery which is used to display messages one by one at the  same place, like for a loading screen.


##How To use MessageUp.js

It is very easy to install, just copy and paste the messageup-min.js in your js root folder and then initialize its path 
in your html file. It's better to initialize it in head tag.
```
<head>
 <script src="path/to/messageUp.min.js"></script>
</head>
```
##### Dependency : It depends on jquery. So initialize jquery before messageUp.js 

```
<script>
     var msg=["Message 1", "Message 2", "Message 3", "Message 4", "Message 5" ];  //define messages here
     var color=["red", "green", "yellow", "green", "blue"];  // define color here (optional by default it is dark grey)
     var time=1500;  // define time here (optional by default it is medium)
     var speed="slow";  // define speed here as slow or fast (optional by default it is medium)
     var iteration="no-repeat";  // define iteration type here as repeat or no-repeat (optional by default it is repeat)
</script>
```


and lastly just add a div to your HTML with ID message-box and you are ready to go :)
```
   <div class="message-box"> </div>
```

Note* currently this is working for only one message box. Don't try to initialize with more than one div.
      
