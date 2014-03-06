$(function(){
	var $form = $("#formulario"),
		$titulo = $("#titulo"),
		$url = $("#url"),
		$buttom = $("#mostrar-form"),
		$list = $("#contenido"),
		$post = $(".item").first();


	function mostrarFormulario(e){
		e.preventDefault();
		$form.slideToggle();
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

		$clone.fadeIn();
	}

	$buttom.click(mostrarFormulario)
	$form.on("submit",agregarPost)
})