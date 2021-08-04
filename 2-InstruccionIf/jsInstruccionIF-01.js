function mostrar()
{
	//tomo la edad  
	let edad ; 

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad == 15){
		alert("Niña bonita");
	}
	else {
		alert ("la edad es "+ edad);
	}

}//FIN DE LA FUNCIÓN