$(function() {

	var cislo = +prompt("Zadaj cislo.");
	var vysledok = cislo*3;
	alert('Vysledok je: ' + vysledok);

	var druheCislo = +prompt("Zadaj zase cislo.");
	function trojnasobok(druheCislo) {
		var druhyVysledok = druheCislo*3;
		return druhyVysledok;
	};
	
	alert('Vratene z funkcie returnom: ' + trojnasobok(druheCislo));
});

