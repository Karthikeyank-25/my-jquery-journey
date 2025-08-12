// Adding event listeners :
//              Adding event listeners to the elements in the document in javaScript by adding jQuery methods.

// Adding event listener :

$("h1").click(function (){                          // instead of using (.addEventListener("click",function (){}))
    $("h1").css("color","orange");
})

// For Example ;

$("document").keypress(function (event){
    console.log(event.key);
})

$("h1").on("mouseHover",function (){
    $("h1").css("font-size","25rem");
})