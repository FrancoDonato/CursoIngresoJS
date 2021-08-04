/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let mayor;
	let menor;
	let respuesta;
	respuesta='s';
	flag = 0;
	
	do{
		numero =parseInt(prompt("Ingrese un numero."));

		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
		console.log(numero);
		if(flag == 0){
			console.log("Es la primera vez");
			flag++;
			mayor = numero;
			menor = numero;
		}
		else{
			console.log("No es la primera vez");
			if(numero>mayor){
				mayor=numero;
			}
			else if(numero<menor){
				menor=numero;
			}

		}
	
		respuesta=prompt("Quiere ingresar otro numero?(s/n)".toLowerCase());
	}while(respuesta=='s')

	document.getElementById("txtIdMaximo").value = mayor;
	document.getElementById("txtIdMinimo").value = menor;
}//FIN DE LA FUNCIÓN