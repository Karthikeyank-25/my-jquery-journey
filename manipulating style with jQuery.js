// Manipulating style with jQuery :
//              Manipulating , setting , changing style attributes in the javaScript by using jQuery library.

// Manipulating style : colour, background-colour, font-style, font-size

$("h1").css("color");           // get property
$("h1").css("color","green");   // set property

//Manipulating style : adding class, removing class, check class 

$("h1").addClass("Included");   // adding class
$("h1").removeClass("Removed"); // removing class
$("h1").hasClass("Removed");    // check the class

// Manipulating style : adding multiple classes

$("h1").addClass("added included");