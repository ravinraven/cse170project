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