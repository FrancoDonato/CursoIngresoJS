function mostrar()
{
	let numero;
	let i;
	let primo = 0; 

	numero = parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)||numero <0){
		numero= parseInt(prompt("Error. Ingrese un numero valido y positivo"));
	}
	for(i = 1 ; i <= numero ; i++){
		if(numero % i == 0){
			primo++;
		}
	}
	if(primo==2){
		alert("El numero es PRIMO");
	}
	else{
		alert("El numero No es primo");
	}
}//FIN DE LA FUNCIÓN