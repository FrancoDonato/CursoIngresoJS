function mostrar()
{
	let estacion;
	let destino; 
	let precio;
	let precioFinal;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precio = 15000

	if (estacion == "Invierno"){
		switch(destino){
			case "Bariloche":
				precioFinal = precio *1.20;
				alert("El precio final es " + precioFinal);
				break ;
			case "Cataratas":
			case "Cordoba": 
				precioFinal = precio - precio * 0.10;
				alert("El precio final es " + precioFinal);
				break;	
			case "Mar del plata":
				precioFinal = precio - precio * 0.20;
				alert("El precio final es " + precioFinal);
				break;	

		}
	}
	else if (estacion == "Verano"){
		switch(destino){
			case "Bariloche":
				precioFinal = precio - precio * 0.20;
				alert("El precio final es " + precioFinal);
				break ;
			case "Cataratas":
			case "Cordoba": 
				precioFinal = precio * 1.10;
				alert("El precio final es " + precioFinal);
				break;	
			case "Mar del plata":
				precioFinal = precio + 1.20;
				alert("El precio final es " + precioFinal);
				break;	

		}
	}
	else {
		switch(destino){
			case "Bariloche":
				precioFinal = precio * 1.10;
				alert("El precio final es " + precioFinal);
				break ;
			case "Cataratas":
				precioFinal = precio * 1.10;
				alert("El precio final es " + precioFinal);
				break;
			case "Cordoba": 
				precioFinal = precio;
				alert("El precio final es " + precioFinal);
				break;	
			case "Mar del plata":
				precioFinal = precio + 1.10;
				alert("El precio final es " + precioFinal);
				break;	

		}
	}

}//FIN DE LA FUNCIÓN