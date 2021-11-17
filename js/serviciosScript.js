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

/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo */
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion');
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
/*Animacion para un titulo o párrafo */
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
/*Animacion para un titulo o párrafo*/
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

/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo*/
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

/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo*/
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

/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo*/
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion6');
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
/*Animacion para un titulo o párrafo*/
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion7');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover2 1s ease-out'
		}
	})
}catch (error) {
	console.error(error);
	
}

/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo*/
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion8');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover2 1s ease-out'
		}
	})
}catch (error) {
	console.error(error);
	
}

/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo*/
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion9');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover2 1s ease-out'
		}
	})
}catch (error) {
	console.error(error);
	
}


/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo*/
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion10');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover2 1s ease-out'
		}
	})
}catch (error) {
	console.error(error);
	
}

/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo*/
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion11');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover2 1s ease-out'
		}
	})
}catch (error) {
	console.error(error);
	
}


/*------------------------------------------------------------------------------------------------------ */
/*Animacion para un titulo o párrafo*/
try{
	window.addEventListener('scroll',function(){
		let animacion = document.getElementById('animacion12');
		let posicion = animacion.getBoundingClientRect().top;
		console.log(posicion);
		let tamanioPantalla = window.innerHeight;
	
		if(posicion < tamanioPantalla){
			animacion.style.animation = 'mover2 1s ease-out'
		}
	})
}catch (error) {
	console.error(error);
	
}

/*------------------------------------------ */
/*Para las primeras cuatro imagenes del CONOZCA NUESTRO TRABAJO */
try{
	let animado = document.querySelectorAll("#animado"); 
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
}catch (error) {
	console.error(error);
	
}

/*--------------------- */
/*Para las otras cuatro imagenes del CONOZCA NUESTRO TRABAJO  */
try{
	let animado2 = document.querySelectorAll("#animado2"); 
function mostrarScroll2(){
	let scrollTop2 = document.documentElement.scrollTop; //cantidad de scroll que hago mientras voy bajando
	for(var i =0; i<animado2.length; i++){
		let alturaAnimado2 = animado2[i].offsetTop; //detecta la altura
		if(alturaAnimado2-550 < scrollTop2){
			animado2[i].style.opacity =1;
			animado2[i].classList.add("mostrarArriba2"); /*se le agrega una clase */
		}
	}
}
window.addEventListener('scroll',mostrarScroll2);
}catch (error) {
	console.error(error);
	
}










