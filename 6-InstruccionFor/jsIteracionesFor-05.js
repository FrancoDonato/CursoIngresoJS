function mostrar()
{
	let numero;
	for(let contador=0; ;contador ++){
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero=parseInt(prompt("Error. Ingrese un numero valido"));
		}
		if(numero==9){
			alert("Ingreso el numero 9");
			break;
		}
	}


}//FIN DE LA FUNCIÓN