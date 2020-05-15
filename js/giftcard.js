$(document).ready(function(){
   $("input[name=fuente]").change(function(){
    $("#titulo").css("font-size",this.value+"px");
   }
   )

   $("input[name=color]").change(function(){
    $("#titulo").css("color",this.value)
    $("#date_img").css("color",this.value)
   })

   $("input[name=color]").change(function(){
    $("#titulo").css("color",this.value)
   })

   $("input[name=color_fondo]").change(function(){
    $(".imagen_re").css("background-color",this.value)
   })
   $("input[name=subtitulo]").change(function(){
       if(this.value == 1 ){
				//$(".bloque_titulo").css("top", "70%");
				 //$(".bloque_titulo").css("transform", "translate(25%, -50%)");
       }else if(this.value == 2){
   			//$(".bloque_titulo").css("top", "10%");
				 //$(".bloque_titulo").css("transform", "translate(-25%, -25%)");
       }else{
        //$(".bloque_titulo").css("top", "10%");
				 //$(".bloque_titulo").css("transform", "translate(25%, -25%)");
       }
    
   })

   
   $("#editar_titulo").keyup(function(){
    $("#titulo").html(this.value);
   })
	
	$("#editar_monto").keyup(function(){
		$("#monto>span").html(this.value);
	})

   $("#data_time").change(function(){
    $("#date_img").html(this.value.replace("T", "   "));
   })

   
 
})