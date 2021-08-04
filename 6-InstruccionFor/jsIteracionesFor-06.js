function mostrar()
{
	let numero;
	let contador=1;
	let pares = 0;
	
	numero=parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero) || numero<0){
		numero=parseInt(prompt("Error. Ingrese un numero valido"));
	}

	for(contador=1 ; contador<=numero ; contador++){
		if(contador % 2 == 0){
			console.log(contador);
			pares++;
		}
		
		
	}
	alert("La cantidad de numeros pares es " + pares);

}//FIN DE LA FUNCIÓN