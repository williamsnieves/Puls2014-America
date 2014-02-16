$(function(){
	$.get('logos_footer.html',function(logos){
		$("footer").append(logos);
	});

	$.get('usuario.json',function(info){
		console.log(info);
		var avatar   = new Image();
		avatar.src   = "assets/"+info.avatar;
		avatar.title = info.nombre +' '+info.apellido; 

		$("#avatar").append(avatar);
	}); 
});