/*!
 * Bootstrap v3.3.7 
 * Copyright 2016 Fmunifer.com
 */

/*El document ready debe estar arriba del documento js*/
$(document).ready(function () {

	var i1, i2, i3, i4;

	//Código para que la web muestre el popover
    $('[data-toggle="popover"]').popover();

 	/*Verifica el campo input de Nombre y Apellidos.*/
	$("#txtName").blur(function() {
		var name = $("#txtName").val();
		//Si el nombre no es vacío
	 	if (name.length > 0){
	 		//Se elimina la class que indica el rojo exterior del campo (por si previamente había error en el campo).
	 		$("#txtName").removeClass("form-control-error");
	 		//Se resetea el popover del error.
	 		$("#alertName").attr("data-content", "");
	 		//Se indica la variable true
	 		i1 = true;
	 	}else{
	 		//Se añade una clase que 
	 		$("#txtName").addClass("form-control-error");
	 		i1 = false;
	 		$("#alertName").attr("data-content", "Debe introducir un nombre.");
	 	}
	 	verificaFormulario(i1, i2, i3, i4);
	}); 	

	/*Verifica el campo input de apellido.*/
	$("#txtSurname").blur(function() {
		var name = $("#txtSurname").val();
		//Si el apellido no es vacío
	 	if (name.length > 0){
	 		//Se elimina la class que indica el rojo exterior del campo (por si previamente había error en el campo).
	 		$("#txtSurname").removeClass("form-control-error");
	 		//Se resetea el popover del error.
	 		$("#alertSurname").attr("data-content", "");
	 		//Se indica la variable true
	 		i2 = true;
	 	}else{
	 		//Se añade una clase que 
	 		$("#txtSurname").addClass("form-control-error");
	 		i2 = false;
	 		$("#alertSurname").attr("data-content", "Debe introducir un apellido.");
	 	}
	 	verificaFormulario(i1, i2, i3, i4);
	}); 	

	/*Verifica el campo input del email.*/
	$("#txtEmail").blur(function(){
		var email = $("#txtEmail").val();
		var expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		if(email.length > 0){
			if (!expresion.test(email)) {
				$("#txtEmail").addClass("form-control-error");
				$("#alertEmail").attr("data-content", "El email introducido no tiene el formato adecuado debe ser como el siguiente nombre_usuario@dominio.com");
				i3 = false;
			}else{
				$("#txtEmail").removeClass("form-control-error");
				$("#alertEmail").attr("data-content", "");
				i3 = true;
			}
		}else{
			$("#txtEmail").addClass("form-control-error");
			$("#alertEmail").attr("data-content", "El campo es obligatorio debe introducir un email.");
			i3 = false;
		}
		verificaFormulario(i1, i2, i3);
	});

	//Función que activa o desactiva el botón de enviar en función de si los campos anteriores están rellenos.
	function verificaFormulario(i1, i2, i3){
		//Si el campo de asunto, email, teléfono y descripción son correctos se activa el botón de enviar.
		if( i1 == true && i2 == true && i3 == true){
			$("#btnEnviar").attr("disabled", false);
		} else{
			$("#btnEnviar").attr("disabled", true);
		}
	}

});
 
 