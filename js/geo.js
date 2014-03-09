$(function(){
	var geo = navigator.geolocation;
	var opciones = {};
	function geo_error(){
		console.log("no te encuentro...");
	}

	function geo_exit(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		var mapa = new Image();

		mapa.src="http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&sensor=false&center="+lat+","+lon;

		$("#geo").append(mapa);

		obtenerGeoInformacion(lat,lon);

	}

	geo.getCurrentPosition(geo_exit, geo_error, opciones)
})
