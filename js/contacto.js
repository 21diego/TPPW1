$(document).ready(function(){
   	
	$("#comentario").keyup(function(){
			alert(this.value);

    $("#btn-enviar").click(function(){
        return validarFormu();              
    });
                  
});

function validarFormu(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    var mensaje="";

    var error=0;
    
  reset();
    
    if($("#nombre").val()==""){
        mensaje+= "<p>El campo nombre es obligatorio.</p>";
       error++;
       $("#nombre").addClass('error');
       }
    if($("#apellido").val()==""){
        mensaje+= "<p>El campo apellido es obligatorio.</p>";
        error++;
        $("#apellido").addClass('error');
    }
    if(!$("#email").val().match(regexemail)){
        mensaje+= "<p>Debe ser un email valido.</p>";
        error++;
        $("#email").addClass('error');
    }
    if($("#telefono").val()==""){
    mensaje+="<p>Debe ingresar un telefono valido, sin guiones ni espacios.</p>";
    error++;
    $("#telefono").addClass('error');
    }
    if ($("#provincia").val()==""){
        mensaje+= "<p>Debe ingresar una provincia.</p>";
        error++;
        $("#provincia").addClass('error');
    }
    if ($("#comentario").val()==""){
        mensaje+= "<p>Debe ingresar un comentario.</p>";
        error++;
        $("#comentario").addClass('error');
    }
    if(error>0){
        $("#mensaje").append(mensaje);
        return false;
    } else {
        mensaje+="<p>Gracias por comunicarse con nosotros.</p>"
		$("#mensaje1").append(mensaje);
        return true;
    }
		
		});
}

function reset(){
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#email").removeClass('error');
    $("#telefono").removeClass('error');
    $("#provincia").removeClass('error');
    $("#comentario").removeClass('error');
    $("#mensaje").empty();
	$("#mensaje1").empty();
}