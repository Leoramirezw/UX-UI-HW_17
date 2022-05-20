$(function() {
    $('.soccer img').click(function() {
        $('.soccer').animate({top:-120});
    });
    $('.soccer img').click(function() {
        $('.soccer').animate({top:0});
    });
});

function fade() {
    $('.preload').fadeOut("slow");
    }
    setTimeout(fade, 3000);