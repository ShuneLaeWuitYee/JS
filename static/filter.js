$(function(){
	$(document).ready(function(){
		//$( "li" ).filter( ":even" ).css( "background-color", "red" );
		//$( "li" ).first().css( "background-color", "red" );
		$( "li" ).last().css( "background-color", "red" );
		$("li.item-ii").find("li").css("background-color","gray");
	});	
});
