$( document ).ready(function() {
    $('.carusel__inner').slick({
        arrows:false,
        //autoplay: true,
        //autoplaySpeed: 2000,
    });

    $('.countries .hamburger').on('click',function(){
        $(this).toggleClass('hamburger_active');
        $('.countries__items').toggleClass('countries__items_active');

        $('.promo .hamburger').removeClass('hamburger_active');
        $('.promo__menu').removeClass('promo__menu_active');
    });

    $('.promo .hamburger').on('click',function(){
        $(this).toggleClass('hamburger_active');
        $('.promo__menu').toggleClass('promo__menu_active');

        $('.countries .hamburger').removeClass('hamburger_active');
        $('.countries__items').removeClass('countries__items_active');
    });
    
});

