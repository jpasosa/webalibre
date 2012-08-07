$(document).ready(function(){
        num = Math.random() * 10;
        num = Math.round(num);
        $(window).scroll(function(){
            texto = 'url("/bundles/webalibresecciones/images/base/scroll-up' + num + '.png") no-repeat';
            if ($(this).scrollTop() > 300) {
                $('.scrollup').css('background', texto);
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').css('background', texto);
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
});