function groupStageSliders () {
	// Coletando valor do slider
	var slider = document.getElementById("slider-grupos");
	var output = document.getElementById("data-grupos");
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
		// Modificando tabela Next Match
		var next_matches = document.getElementsByClassName("next_matches");
		var f = "<iframe width='400' height='200' frameborder='0' scrolling='no' src='https://fnagano.github.io/worldcup2018/Acompanhamento/Next_matches/?file_path=data/" + data + ".json' align='middle'></iframe>";
		next_matches[0].innerHTML = f;
		
		// Modificando tabela de oitavas
		var oitavas = document.getElementsByClassName("oitavas");
		var f = "<iframe width='300' height='200' frameborder='0' scrolling='no' src='https://fnagano.github.io/worldcup2018/Acompanhamento/Matamata/Oitavas/?file_path=data/" + data + ".json'";
		oitavas[0].innerHTML = f;
		
		// Modificando tabela de grupos
		var tables = document.getElementsByClassName("tables");
		var i;

		// Para cada tabela de grupos
		for (i = 0; i < tables.length; i++) { 
		    var group = tables[i].id;
		    var frame = "<iframe width='300' height='200' frameborder='0' scrolling='no' src='https://fnagano.github.io/worldcup2018/Acompanhamento/Tabelas_grupos/?file_path=" + group + "/" + data + ".json' align='middle'></iframe>";
		    tables[i].innerHTML = frame;
		}
	}
	// Modificando tabela Next Match
	var next_matches = document.getElementsByClassName("next_matches");
	var f = "<iframe width='400' height='200' frameborder='0' scrolling='no' src='https://fnagano.github.io/worldcup2018/Acompanhamento/Next_matches/?file_path=data/" + data + ".json' align='middle'></iframe>";
	next_matches[0].innerHTML = f;
	
	// Modificando tabela de oitavas
	var oitavas = document.getElementsByClassName("oitavas");
	var f = "<iframe width='300' height='200' frameborder='0' scrolling='no' src='https://fnagano.github.io/worldcup2018/Acompanhamento/Matamata/Oitavas/?file_path=data/" + data + ".json'";
	oitavas[0].innerHTML = f;

	// Modificando tabela de grupos
	var tables = document.getElementsByClassName("tables");
	var i;

	// Para cada tabela de grupos
	for (i = 0; i < tables.length; i++) { 
	    var group = tables[i].id;
	    var frame = "<iframe width='300' height='200' frameborder='0' scrolling='no' src='https://fnagano.github.io/worldcup2018/Acompanhamento/Tabelas_grupos/?file_path=" + group + "/" + data + ".json' align='middle'></iframe>";
	    tables[i].innerHTML = frame;
	}
}


	
