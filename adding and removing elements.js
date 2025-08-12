// Adding and Removing elements :
//              While over website is running we cannot add elements using jQuery , but we add and delete elements by using jQuery methods.

// Adding methods :

$("h1").before("<button> Click Me </button>");      // add html element before the h1 tag
$("h1").after("<button> Click Me </button>");       // add html element after the h1 tag
$("h1").prepend("<button> Click Me </button>");     // add html element into the h1 tag before the content
$("h1").append("<button> Click Me </button>");      // add html element into the h1 tag after the content

// Removing methods :

$("h1").remove();                                   // remove the selected element