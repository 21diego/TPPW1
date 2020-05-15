$(document).ready(function(){
	
	
	
	$(".curso-inscripcion-link").click(function(){
		
		if (sessionStorage.getItem("total") === null){
			sessionStorage.setItem("total",1);
		} else {
			sessionStorage.setItem("total",parseInt(sessionStorage.getItem("total"))+1);
		}
		$("#cantidad").html(sessionStorage.getItem("total"));
		
	});
	
});

$(window).on("load", function(){
	
	if (sessionStorage.getItem("total") === null){
		$("#cantidad").html(0);
	}
	else {
		$("#cantidad").html(sessionStorage.getItem("total"));
	}

});