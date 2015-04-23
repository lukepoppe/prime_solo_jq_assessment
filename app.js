var i = 0;
$(document).ready(function(){
	$("#btn").on("click", function(){
	i++;
		$("#create").append("<div>Line #: " + i + "<button id='changeColor'>changeColor</button><button id='remove'>Remove</button></div>");
		
	});
$("#create").on("click", "#remove", function(){
		$(this).parent().remove();		
	});
$("#create").on("click", "#changeColor", function(){
	$(this).parent().toggleClass("color");	

	});
});
