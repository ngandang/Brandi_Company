

$(document).ready(function(){

    $(".slider").slick({
        autoplay:true,
        autoplaySpeed:4000,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        dots:true,
        pauseOnDotsHover:true,
        cssEase:'linear',
        // fade:true,
        draggable:false
    });



    $(".slider-features").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
        cssEase: 'linear'

    });

    $(".slider-team").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: true,
        cssEase: 'linear'

    })

})

