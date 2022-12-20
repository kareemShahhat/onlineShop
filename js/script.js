$(document).ready(function(){

                
    var owl = $('.owl1');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    var owl = $('.owll2');
        owl.owlCarousel({
            items:4,
            loop:true,
            margin:25,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:2,
                    nav:false,
                },
                600:{
                    items:2,
                    nav:false,
                    margin:15
                },
                1000:{
                    items:4,
                    
                }
            }
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[2000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })

        var owl = $('.owl4');
        owl.owlCarousel({
            items:4,
            loop:true,
            margin:25,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:2,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false,
                    margin:15
                },
                1000:{
                    items:4,
                }}
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[10000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })

        var owl5 = $('.owl5');
        owl5.owlCarousel({
            items:1,
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:10000,
            URLhashListener:true,
            autoplayHoverPause:true,
            startPosition: 'URLHash',
            responsive:{
                0:{
                    items:2,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false,
                    margin:15
                },
                1000:{
                    items:4,
                }}

        });
        $('.play').on('click',function(){
            owl5.trigger('play.owl.autoplay',[10000])
        })
        $('.stop').on('click',function(){
            owl5.trigger('stop.owl.autoplay')
        })

        
        /*$('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });*/
});



var bars4 =document.getElementById('www');
var bars5 =document.getElementById('www2');
var cat11 =document.querySelector('.categoryis');

bars4.onclick = function(){
    'use strict'
    cat11.classList.toggle("activcatd");
}
bars5.onclick = function(){
    'use strict'
    cat11.classList.toggle("activcatd");
}
var dropcatr_btn = document.querySelector(".widcart_");
var dropcatr = document.querySelector(".cart-dropdown");
dropcatr_btn.onclick = function(){
    'use strict'
    dropcatr.classList.toggle("activcatd");
}

/*
bars4.addEventListener('mouseover', (event) => {
    cat11.classList.add("activcatd");
});
cat11.addEventListener('mouseover', (event) => {
    cat11.classList.add("activcatd");
});
cat11.addEventListener('mouseout', (event) => {
    cat11.classList.remove("activcatd");
});
*/




// bars4.onclick = () =>{
//     cat11.classList.toggle("activcatd");
// }


