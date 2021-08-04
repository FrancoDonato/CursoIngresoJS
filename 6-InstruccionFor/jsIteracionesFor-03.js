function mostrar()
{
	/*let cantidad;
	mensaje = "Hola UTN FRA";

	cantidad =parseInt(prompt("ingrese el número de repeticiones"));
	while(isNaN(cantidad) || cantidad<0){
		cantidad = parseInt(prompt("Error. Ingrese un numero positivo"));
	}
	for(let contador=0 ; contador<cantidad ; contador++){
		alert(mensaje);
	}*/


	/*Nos dedicamos a la venta exclusiva de Discos rígidos. <br>
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los <br>
siguientes datos:<br>
Tipo: (validar "HDD", "SSD" o "SSDM2")<br>
Precio: (validar entre 5000 y 18000),<br>
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).<br>
Marca: (validar “Seagate”, “WD”, “Kingston”)<br>
Capacidad: (validar 250, 500, 1, 2)<br>
Se debe Informar al usuario lo siguiente:<br>
a) Del más barato de los SSD, la cantidad de unidades y marca.<br>
b) que tipo tiene mas unidades vendidas en total  <br>
c) Cuántas unidades de HDD hay en total.<br>
d) el porcentaje que tiene HDD, SSD y SSDM2 sobre el total de unidades compradas.
*/

let tipo;
let precio;
let cantidad;
let marca;
let capacidad;
let masBarato=0;
let unidadMasbarata=0;
let flag=1;
let marcaMasBarata;
let totalDiscos=0;
let totalHDD=0;
let totalSSD=0;
let totalSSDM2=0;
let porcentajeHDD;
let porcentajeSSD;
let porcentajeSSDM2;

for(let i=0; i<3 ; i++){
	tipo=prompt("Ingrese el tipo de disco(HDD/SSD/SSDM2)").toLowerCase();
	while(tipo!="hdd" && tipo!="ssd" && tipo!="ssdm2"){
		tipo=prompt("Error. Ingrese un tipo de disco valido(HDD/SSD/SSDM2)").toLowerCase();
	}
	precio=parseFloat(prompt("Ingrese el precio entre 5000 y 18000"));
	while(isNaN(precio)|| precio<5000 || precio>18000){
		precio=parseFloat(prompt("Error. Ingrese un precio valido entre 5000 y 18000"));
	}
	cantidad=parseInt(prompt("Ingrese la cantidad de discos(Maximo 50 unidades)"));
	while(isNaN(cantidad)||cantidad<1 || cantidad>50){
		cantidad=parseInt(prompt("Error. Ingrese una cantidad validad(maximo 50 unidades)"));
	}
	marca=prompt("Ingrese la marca del disco(Seagate/WD/Kingston)").toLowerCase();
	while(marca!="seagate" && marca!="wd" && marca!="kingston"){
		marca=prompt("Error. Ingrese un tipo de marca valido(Seagate/WD/Kingston)").toLowerCase();
	}
	capacidad=parseInt(prompt("Ingrese la capacidad del disco(250/500/1/2)"));
	while(capacidad!=250 && capacidad!=500 && capacidad!=1 && capacidad!=2){
		capacidad=parseInt(prompt("Error. Ingrese una capacidad valida(250/500/1/2)"));
	}
	switch(tipo){
		case "ssd":
			totalSSD=totalSSD+cantidad;
			if(flag==1 || masBarato>precio){
				masBarato=precio;
				marcaMasBarata=marca;
				unidadMasbarata=cantidad;
				flag=0;
			}
			break;
		case "hdd":
			totalHDD=totalHDD+cantidad;
			break;	
		default:
			totalSSDM2=totalSSDM2+cantidad;	
	}
}
//a)
alert("Los discos mas baratos son de la marca " + marcaMasBarata + " con una cantidad de " + unidadMasbarata);
//b)
if(totalHDD>totalSSD && totalHDD>totalSSDM2){
alert("El tipo que tiene mas unidades es HDD");
}
else if(totalSSD>totalHDD && totalSSD>totalSSDM2){
	alert("El tipo que tiene mas unidades es SSD");
}
else{
	alert("El tipo que tiene mas unidades es SSDM2");
}
//c)
alert("La cantidad total de discos HDD es de " + totalHDD );
//d)
totalDiscos=totalHDD+totalSSD+totalSSDM2;
porcentajeHDD=(totalDiscos*totalHDD)/100;
porcentajeSSD=(totalDiscos*totalSSD)/100;
porcentajeSSDM2=(totalDiscos*totalSSDM2)/100;
alert("El porcentaje de discos HDD es " + porcentajeHDD);
alert("El porcentaje de discos SSD es " + porcentajeSSD);
alert("El porcentaje de discos SSDM2 " + porcentajeSSDM2);

}//FIN DE LA FUNCIÓN