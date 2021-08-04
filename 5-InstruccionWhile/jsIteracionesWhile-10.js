/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let seguir;
	let positivos=0;
	let negativos=0;
	let contadorPosi=0;
	let contadorNega=0;
	let promN = 0;
	let promP = 0;
	let numero;
	let ceros=0;
	let pares=0;
	let diferencia;



	//bucle para ingresar numeros
	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Eso no es numero. Por favor ingrese un numero"));	
		}
		if(numero > 0){
			contadorPosi++;
			positivos = positivos + numero;
		}
		else if(numero < 0){
			contadorNega++;
			negativos = negativos + numero;
		}
		else{
			ceros++;
		}

		//contador de pares
		if(numero % 2 ==0){
			pares++;
		}


		seguir=prompt("Quiere ingresar mas numeros?(s/n)").toLowerCase();
		while(seguir != 's' && seguir != 'n'){
			seguir=prompt("Ingrese 's' para continuar o 'n' para finalizar.").toLowerCase();
		}
	}while(seguir =='s');
	
	//calcular promedios y diferencia 
	if(positivos != 0){
	promP = positivos/contadorPosi;
	}
	if(negativos != 0){
		promN = negativos/contadorNega;
	}	
	diferencia = positivos - negativos;
	//Mostrar datos
	console.log("suma de positivos " + positivos);
	console.log("suma de negativos " + negativos);
	console.log("cantidad de positivos " + contadorPosi);
	console.log("cantidad de negativos " + contadorNega);
	console.log("cantidad de ceros" + ceros);
	console.log("cantidad de pares" + pares);
	console.log("Este es el promedio de positivos" + promP);
	console.log("Este es el promedio de negativos" + promN);
	console.log("La diferencia entre positivos y negativos es " + diferencia);



}//FIN DE LA FUNCIÓN