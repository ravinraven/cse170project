function loadMainContent( pagename ){
   //var pagename = pagehash;//pagehash.substring(1, pagehash.length);
	$( ".container" ).load( pagename , function( response, status, xhr ) {
		if ( status == "error" ) {
		var msg = "Sorry but there was an error: ";
		$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
	} });
}
function loadBeachContent(content){
var src = "/images/" + content;
$("#weather").attr("src", src);
}

function getRealtime(){
	var date = new Date();
	var hours = date.getHours();
	var am = "AM";
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if(hours<10){ hours = "0"+hours;}else if (hours>11){hours = hours%12; am="PM";}
    if(minutes<10){minutes = "0"+minutes;}
	var formattedTime = hours + ':' + minutes + " " +am;
	return formattedTime;
}