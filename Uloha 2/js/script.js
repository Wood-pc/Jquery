(function($){

    var cislo1 = +prompt('Zadaj číslo'),
        cislo2 = +prompt('Zadaj druhé číslo'),
        soucet = cislo1 + cislo2;

    if (soucet % 2 == 0) {
        vysledek = 'párny'
    }
    else {
        vysledek = 'nepárny'
    };

    alert('Súčet  tvojich čisiel je ' + soucet + ', čo je ' + vysledek + ' výsledok.');

})(jQuery);