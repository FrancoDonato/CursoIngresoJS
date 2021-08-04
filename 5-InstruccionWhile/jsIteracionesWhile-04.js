/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero =parseInt(prompt("ingrese un número entre 0 y 9."));
	while(!(numero>=0 && numero <= 9)){
		alert ("El numero " + numero + " no es correcto.");
		numero =parseInt(prompt("ingrese un numero entre 0 y 9."));
	}
	alert("numero correcto");

	
}//FIN DE LA FUNCIÓN