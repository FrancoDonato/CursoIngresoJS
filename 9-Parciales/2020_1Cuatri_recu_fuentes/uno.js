
/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/

function mostrar()
{//declaracion de variables
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let jabonCaro=0;
	let unidadJabon;
	let fabrJabon;
	let flag=1;
	let acumB=0;
	let acumJ=0;
	let acumA=0;
	let contadorB=0;
	let contadorJ=0;
	let contadorA=0;
	let tipoMasUnidad;
	let promedioPorCompra;
	let barbijoTotal;

	//inicio for
	for(let i=0; i<2 ; i++){
		tipo=prompt("Ingrese el producto(barbijo/jabon/alcohol)").toLowerCase();
		while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol"){
			tipo=prompt("Error. Ingrese un producto valido(barbijo/jabon/alcohol)").toLowerCase();
		}
		precio=parseInt(prompt("Ingrese el precio del producto(Entre 100 y 300)"));
		while(isNaN(precio)|| precio<100 || precio>300){
			precio=parseInt(prompt("Error. Ingrese un precio valido en el rango sugerido(100 y 300)"));
		}
		cantidad=parseInt(prompt("Ingrese la cantidad de unidades.(entre 1 y 1000)"));
		while(isNaN(cantidad)||cantidad<1 || cantidad>1000){
			cantidad=parseInt(prompt("Error. Ingrese una cantidad valida(entre 1 y 1000)"));
		}
		marca=prompt("Ingrese la marca del producto");
		while(marca.length==0){
			marca=prompt("Error. Ingrese la marca del producto");
		}
		fabricante=prompt("Ingrese el fabricante del producto");
		while(fabricante.length==0){
			fabricante=prompt("Error. Ingrese el fabricante del producto");
		}
		switch(tipo){
			case "barbijo":
				contadorB++;
				acumB=acumB + cantidad;

				break;
			case "jabon":
				contadorJ++;
				acumJ=acumJ + cantidad;
				if(flag==1 || precio > jabonCaro){
					jabonCaro=precio;
					unidadJabon=cantidad;
					fabrJabon=fabricante;
					flag=0;
				}
				break;
			case "alcohol":
				contadorA++;
				acumA=acumA + cantidad;
				break;		
			}
	}
	alert("El jabon mas caro tiene " + unidadJabon + " unidades y el fabricante es " + fabrJabon);
	if(acumA>acumB && acumA>acumJ){
		promedioPorCompra=acumA/contadorA;
		alert("El producto con mas unidades en total es el alcohol con un promedio de " + promedioPorCompra)
	}
	else if(acumB>acumA && acumB>acumJ){
		promedioPorCompra=acumB/contadorB;
		alert("El producto con mas unidades en total es el barbijo con un promedio de " + promedioPorCompra)

	}
	else{
		promedioPorCompra=acumJ/contadorJ;
		alert("El producto con mas unidades en total es el jabon con un promedio de " + promedioPorCompra)

	}
	alert("Se compraron en total " + acumB + " barbijos");
}
