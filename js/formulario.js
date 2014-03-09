$(function(){
	var $form = $("#formulario"),
		$titulo = $("#titulo"),
		$url = $("#url"),
		$buttom = $("#mostrar-form"),
		$list = $("#contenido"),
		$post = $(".item").first();

	if(localStorage.getItem('autosave')){
		$titulo.val(sessionStorage.getItem('titulo'));
		$url.val(sessionStorage.getItem('url'));
	}

	var id = setInterval(function(){
		sessionStorage.setItem('titulo',$titulo.val());
		sessionStorage.setItem('url',$url.val());
	},1000)


	function mostrarFormulario(){
		//e.preventDefault();
		$form.slideToggle();
		$list.slideToggle();
		return false;
	}

	function agregarPost(e){
		e.preventDefault();
		var url = $url.val();
		var titulo = $titulo.val();
		var $clone = $post.clone();

		$clone.find('.titulo_item a')
			.text(titulo)
			.attr('href',url);

		$clone.hide();

		$list.prepend($clone);
		mostrarFormulario();
		$titulo.val('');
		$url.val('');
		$clone.fadeIn();
	}

	$buttom.click(mostrarFormulario)
	$form.on("submit",agregarPost)
})