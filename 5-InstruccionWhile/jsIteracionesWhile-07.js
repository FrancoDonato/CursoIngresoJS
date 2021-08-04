/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let acumulador;
	let respuesta;
	let contador;
	let promedio;
	acumulador=0;
	contador=0;
	respuesta="si";

	do{
		contador++;
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		respuesta = prompt("Quiere agregar mas numeros? (si/no)");

	}while(respuesta == "si");

	promedio = acumulador / contador ; 

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN