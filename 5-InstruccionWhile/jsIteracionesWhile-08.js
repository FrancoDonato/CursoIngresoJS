/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numero;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	do{
		numero=prompt("Ingrese un numero.");
		numero=parseInt(numero);
		if(numero>=0){
			sumaPositivos = sumaPositivos + numero ;
		}
		else {
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}
		respuesta = prompt("Quiere seguir ingresando numeros?");
	   }while(respuesta == "si")


	document.getElementById("txtIdSuma").value = sumaPositivos ; 
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN