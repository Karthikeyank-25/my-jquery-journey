// Animating Website with jQuery :
//              Animate the website by using jQuery methods in javascript.

// Animating Methods :

// Single animation :

$("h1").click(function (){
    $("h1").hide();
})

// Multiple Animation :

$("h1").click(function (){
    $("h1").hide().show().fadeOut().fadeIn().slideUp().slideDown();
})

// Animate Method Animation :

$("h1").click(function (){
    $("h1").animate({
        opacity : 0.5,
        border : "35%"
    });
})