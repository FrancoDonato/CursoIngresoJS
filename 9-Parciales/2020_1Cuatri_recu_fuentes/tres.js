function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estCivil;
	let tempCorporal;
	let masTemp;
	let nacionMasTemp;
	let flag=1;
	let mayoresSolt=0;
	let mujeresSolas=0;
	let contViejos=0;
	let mujeresCasadas=0;
	let promedioEdad=0;
	let edadCasadas=0;
	let respuesta;

	do{
		nombre=prompt("Ingrese el nombre del pasajero");
		while(nombre.length==0){
			nombre=prompt("Error. Ingrese el nombre del pasajero");
		}
		nacionalidad=prompt("Ingrese la nacionalidad");
		while(nacionalidad.length==0){
			nacionalidad=prompt("Error. Ingrese al menos una nacionalidad");
		}
		edad=parseInt(prompt("Ingrese la edad del pasajero"));
		while(isNaN(edad)|| edad<0){
			edad=parseInt(prompt("Error. Ingrese una edad mayor a 0"));
		}
		sexo=prompt("Ingrese su sexo(f/m)").toLowerCase();
		while(sexo!="f" && sexo!="m"){
			sexo=prompt("Error.Ingrese un sexo valido(f/m)").toLowerCase();
		}
		estCivil=prompt("Ingrese su estado civil(soltero/casado/viudo)").toLowerCase();
		while(estCivil!="soltero" && estCivil!="casado" && estCivil!="viudo"){
			estCivil=prompt("Error. Ingrese un estado civil valido(soltero/casado/viudo)").toLowerCase();
		}
		tempCorporal=parseFloat(prompt("Ingrese su temperatura corporal"));
		while(isNaN(tempCorporal)|| tempCorporal<0){
			tempCorporal=parseFloat(prompt("Error. ingrese una temperatura valida y mayor a 0"));
		}
		if(edad>17 && estCivil=="soltero"){
			mayoresSolt++;
		}
		if(flag==1 || masTemp<tempCorporal){
			masTemp=tempCorporal;
			nacionMasTemp=nacionalidad;
			flag=0;
		}
		if(sexo=="f"){
			switch(estCivil){
				case "soltero":
				case "viudo":
					mujeresSolas++;
					break;
				case "casado":
					mujeresCasadas++;
			        edadCasadas=edadCasadas+edad;
					break;
		    }	
	    }	
		if(edad>=60 && tempCorporal>38){
			contViejos++;
		}
		


		respuesta=prompt("Quiere ingresar mas pasajeros?(s/n)").toLowerCase();
		while(respuesta!="s" && respuesta!="n"){
			respuesta=prompt("Error. Ingrese una respuesta valida(s/n)").toLowerCase();
		}
	}while(respuesta=="s");
	//nacionalidad de la persona con mas temperatura
	alert("La persona con mas temperatura tiene nacionalidad de " + nacionMasTemp);

	//personas mayores y solteras
	alert("Hay " + mayoresSolt + " personas mayores y solteras");

	//mujeres solteras o viudas
	alert("Hay " + mujeresSolas + " mujeres solteras o viudas");

	//personas de tercera edad con temperatura
	alert("Hay " + contViejos + " personas de la tercera edad con temperaturas mayores a 38°");

	//promedio de edad de las mujeres casadas
	promedioEdad=edadCasadas/mujeresCasadas;
	if(mujeresCasadas>=1){
	alert("El promedio de edad entre las mujeres casadas es de " + promedioEdad);
	}
	else{
		alert("No hay mujeres casadas");
	}

}
