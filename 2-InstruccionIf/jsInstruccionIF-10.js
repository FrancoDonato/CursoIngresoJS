function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numb = Math.floor(Math.random() * 10
	 + 1);

	
	if(numb>=9){
		alert(numb + " Excelente");	
	}
	else{
		if(numb>=4){
			alert(numb + " Aprobo");
		}
		else{
			alert(numb + " Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN