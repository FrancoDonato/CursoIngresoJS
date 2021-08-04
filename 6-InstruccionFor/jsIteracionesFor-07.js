function mostrar()
{
	let numero;
	let i = 1;
	let contador = 0;

	numero=parseInt(prompt("Ingrese un numero positivo"));
	while(isNaN(numero)|| numero<0){
		numero=parseInt(prompt("Error. Ingrese un numero valido y positivo"));
	}
	for(i=1 ; i<=numero ;i++){
		if(numero % i == 0){
			console.log(i);
			contador++;
		}

	}
	alert("La cantidad de divisores es " + contador);



}//FIN DE LA FUNCIÓN