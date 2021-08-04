/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo ;
	let porcentaje ; 
	let resultado ;

	sueldo = parseInt(document.getElementById("txtIdImporte").value);
	porcentaje = sueldo * 0.25 ; 
	resultado = sueldo - porcentaje ;  
	document.getElementById("txtIdResultado").value = resultado ;


}
