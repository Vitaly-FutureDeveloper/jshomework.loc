$(document).ready(function(){

    $('.btn-on-modal').on('click', function(){
        $('.overlay').fadeIn(800);
        $('.modal').slideDown(400);
    });

    $('.close').on('click', function(){
        $('.overlay').fadeOut(800);
        $('.modal').slideUp(400);
    });


    $('.overlay').on('click', function(){
        $('.overlay').fadeOut(800);
        $('.modal').slideUp(400);
    });

});