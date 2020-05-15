$(document).ready(function(){

$("#Enviar").click(function(){
    validar();
});
    
    
$("#eliminar").click(function(){
	$("#mensaje").empty();
 $("#nombre").css("border","1px solid gray")
  $("#email").css("border","1px solid gray")
   $("#apellido").css("border","1px solid gray")
    $("#cur2").css("border","1px solid gray")
});
    
    
  });  
    
    
function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    
    
    if ($("#nombre").val()=="") {
	     $("#mensaje").html("El campo nombre es obligatorio").css("color","red")
        $("#nombre").css("border","1px solid red")
    }
    if ($("#apellido").val().length < 5) {
	$("#apellido").css("border","1px solid red")
	var mensaje="El campo apellido debe tener al menos 4 caracteres"
		var menj= document.createElement("p");
		menj.append(mensaje);
		$("#mensaje").append(menj);
    }
    if(!$("#email").val().match(regexemail)){
 	$("#email").css("border","1px solid red")
      var  mensaje="Debe ser un email valido";
  	var menj2=document.createElement("p")
  	menj2.append(mensaje)
  	$("#mensaje").append(menj2);
 
    }
    if ($("#cur2 option:selected").val()==0){
		$("#cur2").css("border","1px solid red")
		var mensaje="Debe seleccionar un Curso"
		var menj3=document.createElement("p")
		menj3.append(mensaje)
		$("#mensaje").append(menj3);
	
    }
        
}