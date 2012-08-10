$(document).ready(function(){
    var widthdiv= $('.up').css('width');
    var widthTotal = parseInt(widthdiv);
    // alert(widthTotal + 1000);
    // var margen_img = $('.imagenes').css('width');
    // alert(margen_img);
    

    // Realización de acomodación en la parte SUPERIOR del footer
    var widthImgTotal = 0;      // ancho total de todas las imagenes del footer
    var countIMG = 0;             // cantidad de imagenes del footer
    $('.up .footer-img').each(function(index) {
        countIMG++;
        var width = $(this).attr('width');
        var widthIMG = parseInt(width);
        widthImgTotal = widthImgTotal + widthIMG;
    });
    
    // defino primeros y último margen de las imágenes
    var firstMarginLeft = lastMarginRight = (( widthTotal - widthImgTotal ) / ( countIMG + 1 )) - 3;
    var allMargin = firstMarginLeft / 2;  // defino los margin-right y margin-left de las imagenes

    // acomodo los márgenes según los cálculos realizados
    $('.up .footer-img').css('margin-left', allMargin);
    $('.up .footer-img').css('margin-right', allMargin);
    $('.up img.footer-img:first').css('margin-left', firstMarginLeft);
    $('.up img:last').css('margin-right', lastMarginRight);

    // Realización de acomodación en la parte INFERIOR del footer
    var widthImgTotal = 0;      // ancho total de todas las imagenes del footer
    var countIMG = 0;             // cantidad de imagenes del footer
    $('.down .footer-img').each(function(index) {
        countIMG++;
        var width = $(this).attr('width');
        var widthIMG = parseInt(width);
        widthImgTotal = widthImgTotal + widthIMG;
    });
    
    // defino primeros y último margen de las imágenes
    var firstMarginLeft = lastMarginRight = (( widthTotal - widthImgTotal ) / ( countIMG + 1 )) - 3;
    var allMargin = firstMarginLeft / 2;  // defino los margin-right y margin-left de las imagenes

    // acomodo los márgenes según los cálculos realizados
    $('.down .footer-img').css('margin-left', allMargin);
    $('.down .footer-img').css('margin-right', allMargin);
    $('.down img.footer-img:first').css('margin-left', firstMarginLeft);
    $('.down img:last').css('margin-right', lastMarginRight);


});