$(document).ready(function(){
    var widthdiv= $('.up').css('width');
    var anchoTotal = parseInt(widthdiv);
    // alert(anchoTotal + 1000);
    var margen_img = $('.imagenes').css('width');
    // alert(margen_img);
    
    var ancho_total = 0;
    var cant_img = 0
    $('.up .footer-img').each(function(index) {
        cant_img++;
        var width = $(this).attr('width');
        var width_footer_img = parseInt(width);
        ancho_total = ancho_total + width_footer_img;
    });
    var margen = ((( anchoTotal - ancho_total ) / cant_img) / 2) - 3;
    // alert(margen);
    $('.up .footer-img').css('margin-left', margen);
    $('.up .footer-img').css('margin-right', margen);
    // alert(totalancho);
    // alert(suma_ancho_imagenes);
});