function mostrar()
{
	let destino ;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Ushuaia":
			alert("Se encuentra al sur");
			break;
		case "Mar del plata":
			alert("Se encuentra al este");
			break;
		case "Bariloche":
			alert("Se encuentra al Oeste");
			break;
		case "Cataratas":
			alert("Se encuentra al norte");
			break;
						
	}
}//FIN DE LA FUNCIÓN