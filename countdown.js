////////////////////////LEVEL 1
/*
var secs;

function countdown(seconds){
  secs = parseInt(seconds);
  var clearIntervalID = setInterval(function() {
  	console.log(secs--);
	if (secs<0) {clearInterval(clearIntervalID);}
  }, 1000);
}
*/

///////////////////////LEVEL 2


function countdown(seconds){
  var secs = parseInt(seconds);
  var clearIntervalID = setInterval(function() {
  	console.log(secs--);
	if (secs<0) {clearInterval(clearIntervalID);}
  }, 1000);
}


///////////////////////LEVEL 3

/*function countdown(seconds){
	i give up 
	:P
}*/



countdown(5);
