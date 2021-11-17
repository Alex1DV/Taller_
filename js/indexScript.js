/*Para cuando el menu se haga pequeño */
try{
	jQuery('document').ready(function($){
		/*Se crean variables*/
		var menuBtn = $('.menu-icon') /*para mostrar el menu*/
		menu = $('.navigation ul');
		/*Cuando la persona haga click en menuBtn*/
		menuBtn.click(function() {
	
			if(menu.hasClass('show')){ /*si menu tiene la clase show*/
	
				menu.removeClass('show');
			} else{						/*si no tiene la quita */
				menu.addClass('show'); 
			}
	
			
		}); 
	
	});
}catch (error) {
	console.error(error);
	
}


/*----------------------------------------------------------------------------------------------------- */
/*Animacion para un titulo */
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion');
		let posicion = animacion.getBoundingClientRect().left;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight/2;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover 1s ease-out'
		}
	})
}catch (error) {
	console.error(error);
	
}

/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo */
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion2');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover 1s ease-out'
		}
	})
}catch (error) {
	console.error(error);
	
}


/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo */
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion3');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover 1s ease-out'
		}
	})
	
}catch (error) {
	console.error(error);
	
}


/*---------------------------------------------------------- */
/*Para la parte de conozca nuestro taller */
try{
	let animado = document.querySelectorAll("#animado"); //selecciona el slider
function mostrarScroll(){
	let scrollTop = document.documentElement.scrollTop; //cantidad de scroll que hago mientras voy bajando
	for(var i =0; i<animado.length; i++){
		let alturaAnimado = animado[i].offsetTop; //detecta la altura
		if(alturaAnimado-600 < scrollTop){
			animado[i].style.opacity =1;
			animado[i].classList.add("mostrarArriba"); /*se le agrega una clase */
		}
	}
}
window.addEventListener('scroll',mostrarScroll);
/*----------------------------------------------------------------- */
window.addEventListener('scroll',mostrarScroll);

}catch (error) {
	console.error(error);
	
}
/*---------------------------- */
/*Para la parte de NOS PUEDE ENCONTRAR AQUI */
try{
	let animado = document.querySelectorAll("#animadoT"); //selecciona el slider
function mostrarScroll(){
	let scrollTop = document.documentElement.scrollTop; //cantidad de scroll que hago mientras voy bajando
	for(var i =0; i<animado.length; i++){
		let alturaAnimado = animado[i].offsetTop; //detecta la altura
		if(alturaAnimado-600 < scrollTop){
			animado[i].style.opacity =1;
			animado[i].classList.add("mostrarArriba"); /*se le agrega una clase */
		}
	}
}
window.addEventListener('scroll',mostrarScroll);
/*----------------------------------------------------------------- */
window.addEventListener('scroll',mostrarScroll);

}catch (error) {
	console.error(error);
	
}
/*-------------------------------------------------------------------------- */
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion4');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover 1s ease-out'
		}
	})
	
}catch (error) {
	console.error(error);
	
}
/*-------------------------------------------------------------------------- */
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion5');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover 1s ease-out'
		}
	})
	
}catch (error) {
	console.error(error);
	
}



