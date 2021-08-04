/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese la clave.");
	while(claveIngresada != "utn750"){
		claveIngresada = prompt("ingrese la clave. Ayuda: es utn750");
	}
}//FIN DE LA FUNCIÓN
