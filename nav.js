
/*___________________________________________REEMPLAZO NAV POR NAV2___________________________________________________________*/

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$("nav").addClass("nav2");
		 } else{
		 	$("nav").removeClass("nav2");
		 }

	});

});

/*_____________________________________________________Cambiando el logo blanco por el logo rosado________________________________________*/

$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() > 1) {
            $('#logot').attr('src','assets/images/logo-pink.png')
        }
        if($(this).scrollTop() < 1) {        
         $('#logot').attr('src','assets/images/logo-white.png');   
        }
    });
});

