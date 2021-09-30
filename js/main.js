$(document).ready(function(){
    $('#search, .fa-search').mouseenter(function(){
        $('.logo').hide();
    });

    $('#search, .fa-search').mouseleave(function(){
        $('.logo').show();
    });

    $('.fa-bars').click(function(){
        $('.navbar').toggle();
        $(this).toggleClass('fa-times');
    });

    $('.navbar, .navbar a').click(function(){
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times');
    });

    $(window).on('scroll load',function(){
        if($(window).scrollTop()>20){
            $('#header').css({
                'background-image':'linear-gradient(to right,rgba(255,0,0,0.9),rgba(255,0,255,0.9))',
                'height':'6rem',
                'box-shadow':'0 0.1rem .3rem #000'
            });
        }
        else{
            $('#header').css({
                'background':'#333',
                'box-shadow':'none'
            })
        }
    })

    $('.home-slider').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,
        items:1
    });

    $('.product-slider').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,
        items:1
    });

    $('.brand-slider').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

});
