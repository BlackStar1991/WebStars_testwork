$(document).ready(function () {


    var body = $("body");
    var infoButton = $(".nav_icon");
    var fullNavigation = $(".nav_fullNavigation");
    var navigationButton = $(".bl_navigation__button");
    var navagationBlock = $(".bl_navigation__fullItems");

    function slideShow(button, element) {   /// Silide menu
        button.on("click", function () {
            element.slideToggle(400);
        });
    }

    slideShow(infoButton, fullNavigation);
    slideShow(navigationButton, navagationBlock);


    var mainImgBlock = $(".product_imgBlock__mainImage");

    mainImgBlock.slick(
        {
            adaptiveHeight:true,
            asNavFor: '.product_addImages',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
             ]

        }
    );                    //// Main product slider

    var fullSliderPicture = $(".product_addImages");

    fullSliderPicture.slick({
        adaptiveHeight:true,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        asNavFor: '.product_imgBlock__mainImage',
        slidesToScroll: 1,
        focusOnSelect: true
    });                   /// add For Main Slider




    var addProducts = $(".product_addOptions__slider");

    addProducts.slick({                      // addProducts slider
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    var viewsProducts = $(".product_views__slider");

    viewsProducts.slick({                      // viewsProducts slider
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });


    var blockNavigation = $(".bl_navigation"),
        blockRepresent = $(".bl_represent"),
        blockTelephones = $(".bl_telephones"),
        blockCallback = $(".bl_callback");


    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var addFluid = $(".my_fixed__wrapper");


    var startFixed = blockNavigation.offset().top;

    function addSomeClass(whom, whatClassAdd) {
        whom.addClass(whatClassAdd);
    }
    function removeSomeClass(whom, whatClassAdd) {
        whom.removeClass(whatClassAdd);
    }

    function takeRightTop(elem, startTopPosition, correctTop, startLeftPosition, correctLeft,) {

            elem.offset({top: (startTopPosition + correctTop), left: (startLeftPosition + correctLeft)});
    }




    function topZiro(elem) {
        elem.removeAttr('style');
    }


    $(window).scroll(function() {

        var topNow = blockNavigation.offset().top;
        var leftNow = blockNavigation.offset().left;

        if ( ($(this).scrollTop() > startFixed) && (screenWidth >= 1200) ) {




            addFluid.removeClass("hidden");


            addSomeClass(blockNavigation, "my_fixed");
            addSomeClass(blockRepresent , "my_fixed__represent");
            addSomeClass(blockTelephones, "my_fixed__telephones");
            addSomeClass(blockCallback, "my_fixed__callback");

            takeRightTop(addFluid, topNow, -5);


            takeRightTop(blockRepresent, topNow, 5, leftNow, 310);
            takeRightTop(blockTelephones, topNow, -4, leftNow, 540);
            takeRightTop(blockCallback, topNow, -2, leftNow, 920 );



        } else if($(this).scrollTop() <= startFixed ) {


            addFluid.addClass("hidden");




            removeSomeClass(blockNavigation, "my_fixed");
            removeSomeClass(blockRepresent, "my_fixed__represent");
            removeSomeClass(blockTelephones, "my_fixed__telephones");
            removeSomeClass(blockCallback, "my_fixed__callback");



            topZiro($(".bl_represent"));
            topZiro($(".bl_telephones"));
            topZiro($(".bl_callback"));


        }

        });



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
