function loadMainContent( pagename ){
   //var pagename = pagehash;//pagehash.substring(1, pagehash.length);
	$( ".container" ).load( pagename , errorResponse);
}
function loadBeachContent(content){
var src = "/images/" + content;
$("#weather").attr("src", src);
}

function getLocalize(date){
	date = new Date(date+" UTC");
	var hours = date.getHours();
	var am = "AM";
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if(hours<10){ hours = "0"+hours;}else if (hours>12){hours = hours%12; am="PM";}
    if(minutes<10){minutes = "0"+minutes;}
	var formattedTime = hours + ':' + minutes + " " +am;
	return formattedTime;
} 

function getRealtime(){
	var date = new Date();
	var hours = date.getHours();
	var am = "AM";
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if(hours<10){ hours = "0"+hours;}else if (hours>12){hours = hours%12; am="PM";}
    if(minutes<10){minutes = "0"+minutes;}
	var formattedTime = hours + ':' + minutes + " " +am;
	return formattedTime;
}

//ajax error response callback function
function errorResponse ( response, status, xhr ) {
		//parseweather(response);
if ( status == "error" ) { var msg = "Sorry but there was an error: ";
$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );}};