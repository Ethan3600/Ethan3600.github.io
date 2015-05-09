new WOW().init();

$(document).ready(function (){

	$(".glyphicon").on('click', function(){
		$.scrollTo("#top", 1000);
	});
	$("#about").on('click', function(){
		$.scrollTo('#top',1000);
	});
	$("#opener").on('click', function(){
		$.scrollTo('#banlen',1000);
	});

});