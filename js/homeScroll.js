$(document).ready(function (){

    $("#showCode").click(function (){
        $(this).blur();
        $('html, body').animate({
            scrollTop: $("#code").offset().top - 130
        }, 700);
    });

    $("#showFeatures").click(function (){
        $(this).blur();
        $('html, body').animate({
            scrollTop: $("#features").offset().top - 130
        }, 700);
    });
});
