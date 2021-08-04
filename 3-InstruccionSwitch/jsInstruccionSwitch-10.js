function mostrar()
{
	let destino;
	let estacion;
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	if(estacion == "Invierno"){
		switch(destino){
			case "Bariloche":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
				break;		
		}
	}
	else if (estacion == "Verano"){
		switch(destino){
			case "Cataratas":
			case "Mar del plata":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
				break;	

		}
	}
	else if (estacion == "Otoño"){
			alert("Se viaja");
	}
	else {
		switch(destino){
			case "Bariloche":
				alert("No se viaja");
				break;
			default:
				alert("Se viaja");
				break;
		}
	}

}//FIN DE LA FUNCIÓN