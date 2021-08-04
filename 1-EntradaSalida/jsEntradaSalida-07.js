/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1
	let numero2
	let suma

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = numero1 + numero2 ;
	alert("El resultado es " + suma);


}

function restar()
{
	let numero1
	let numero2
	let resta 

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = numero1 - numero2 ; 
	alert("El resultado es "+ resta);
	
}

function multiplicar()
{ 
	let numero1 
	let numero2
	let multiplicacion

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicacion = numero1 * numero2 ; 
	alert("El resultado es " + multiplicacion);

	
}

function dividir()
{
	let numero1
	let numero2
	let division 

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	division= numero1/numero2;
	alert("El resultado es "+ division);
}

