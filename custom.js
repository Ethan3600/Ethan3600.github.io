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
	$("#contact").on('click', function(){
		$.scrollTo('#scroll2cont',1000);
	});

});

//shine function
var config = new shinejs.Config({ 
  numSteps: 7,
  opacity: 0.25
});

var shine = new Shine(document.getElementById('welcome'));

function handleMouseMove(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}

window.addEventListener('mousemove', handleMouseMove, false);

shine.config = config;
shine.draw();