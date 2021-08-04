/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	//declaracion de variables
	let nombre;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let cantHsolos=0;
	let mayoresViudos=0;
	let maxTemperatura;
	let personaconTemp;
	let mayoresTemp=0;
	let cantHombres=0;
	let edadTotal=0;
	let promedioEdad=0;
	let respuesta;
	let flag=1;

	do{
		nombre=prompt("Ingrese su nombre.").toLowerCase();
		while(nombre.length==0){
			nombre=prompt("Error. Por favor, ingrese su nombre para continuar").toLowerCase();
		}
		edad=parseInt(prompt("Ingrese su edad"));
		while(isNaN(edad)|| edad < 0){
			edad=parseInt(prompt("Error. Ingrese una edad valida, mayor a 0"));
		}
		sexo=prompt("Ingrese su sexo.(f/m)");
		while(sexo!="f" && sexo!="m"){
			sexo=prompt("Error. Ingrese un sexo valido(f/m)");
		}
		estado=prompt("Ingrese su estado civil(soltero/casado/viudo)").toLowerCase();
		while(estado!="soltero" && estado!="casado" && estado!="viudo"){
			estado=prompt("Error. Ingrese un estado valido(casado/soltero/viudo)").toLowerCase();
		}
		temperatura=parseInt(prompt("Ingrese su temperatura corporal"));
		while(isNaN(temperatura)||temperatura<0){
			temperatura=parseInt(prompt("Error. Ingrese una temperatura valida mayor a 0"));
		}
		if(flag==1 || maxTemperatura<temperatura){
			maxTemperatura=temperatura;
			personaconTemp=nombre;
			flag=0;
		}
		if(edad>=18 && estado=="viudo"){
			mayoresViudos++;
		}
	    if(sexo=="m" && estado == "soltero" || estado == "viudo"){
			cantHsolos++;
		}
		if(edad>=60 && temperatura>=38){
			mayoresTemp++;
		}	
		if(sexo=="m" && estado=="soltero"){
			cantHombres++;
			edadTotal=edadTotal+edad;
		}	
		respuesta=prompt("Quiere ingresar otro pasajero?(s/n)").toLowerCase();
		while(respuesta!= "s" && respuesta!="n"){
			respuesta=prompt("Error. Ingrese una respuesta valida(s/n)").toLowerCase();
		}
	}while(respuesta=="s")


	alert("La persona con mas temperatura es " + personaconTemp);
	alert("Hay " + mayoresViudos + " mayores de edad viudos");
	alert("Hay " + cantHsolos + " hombres solteros o viudos");
	alert("Hay " + mayoresTemp + " personas de tercera edad con mas de 38° de temp.");
	
	if(cantHombres==0){
		alert("No hay hombres solteros");
	}
	else {
		promedioEdad=edadTotal/cantHombres;
		alert("El promedio de edad entre los hombres solteros es " + promedioEdad);

	}

}
