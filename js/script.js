$( document ).ready(function() {
    $('.countries .hamburger').on('click',function(){
        $(this).toggleClass('hamburger_active');
        $('.countries__items').toggleClass('countries__items_active');

        $('.promo .hamburger').removeClass('hamburger_active');
        $('.promo__menu-items').removeClass('promo__menu-items_active');
    });

    $('.promo .hamburger').on('click',function(){
        $(this).toggleClass('hamburger_active');
        $('.promo__menu-items').toggleClass('promo__menu-items_active');

        $('.countries .hamburger').removeClass('hamburger_active');
        $('.countries__items').removeClass('countries__items_active');
    });
});

