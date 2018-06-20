function switchSlider () {
	// Coletando valor do slider
	var slider = document.getElementById("slider-switch");
	var output = document.getElementById("data-switch");
	var val = slider.value;

	// Convertendo em data
	if (val < 17) {
		var dia = Number(val) + 14;
		var data = '06.' + dia;
		var show = dia + ' de Junho';
	}
	else {
		var dia = Number(val) - 16;
		var data = '07.' + dia;
		var show = dia + ' de Julho';
	}
	output.innerHTML = show;

	// Caso de click no Slider
	slider.oninput = function() {
		var val = this.value;
		if (val < 17) {
			var dia = Number(val) + 14;
			var data = '06.' + dia;
			var show = dia + ' de Junho';
		}
		else {
			var dia = Number(val) - 16;
			var data = '07.' + dia;
			var show = dia + ' de Julho';
		}
		output.innerHTML = show;
		
		// Modificando tabela de grupos
		var swt = document.getElementsByClassName("switch");
		var frame = "<iframe width='600' height='1200' frameborder='0' scrolling='yes' src='https://lucasnoveline.github.io/worldcup2018_posts/Acompanhamento/Switch/?data=" + data + "' align='middle'></iframe>";

		swt[0].innerHTML = frame;
	}
	// Modificando tabela de grupos
	var swt = document.getElementsByClassName("switch");
	var frame = "<iframe width='600' height='1200' frameborder='0' scrolling='yes' src='https://lucasnoveline.github.io/worldcup2018_posts/Acompanhamento/Switch/?data=" + data + "' align='middle'></iframe>";

	swt[0].innerHTML = frame;
}