function mostrar()
{
	let numero;
	let contador;
	let acumulador;
	contador=0;
	acumulador=0;
	let promedio;
	parseInt(numero);
	while(contador<=4){
		contador++;
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		promedio = acumulador / 5;
	}
	
	acumulador = document.getElementById("txtIdSuma").value;
	promedio = document.getElementById("txtIdPromedio").value;
}//FIN DE LA FUNCIÓN