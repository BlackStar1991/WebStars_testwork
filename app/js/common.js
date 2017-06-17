$(document).ready(function () {


   var body = $("body");
   var infoButton = $(".nav_icon");
   var fullNavigation = $(".nav_fullNavigation");
   var navigationButton = $(".bl_navigation__button");
   var navagationBlock = $(".bl_navigation__fullItems");

   function slideShow(button, element){
       button.on("click", function(){
           element.slideToggle(400);
       });
   }
    slideShow(infoButton, fullNavigation);
    slideShow(navigationButton, navagationBlock);





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
