$(document).ready(function () {


   var body = $("body");
   var infoButton = $(".nav_icon");
   var fullNavigation = $(".nav_fullNavigation");

   infoButton.on("click", function(){
       fullNavigation.slideToggle(400);


   })

//
// $(window).resize(function(){
//    if( body.width() >= 992 ){
//         fullNavigation.css("display", "block");
//    }
// });
//
//
// $(window).resize();


});
