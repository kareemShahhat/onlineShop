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

const product = [
    {
        id: 1,
        image: "assets/img/categ/cat1-removebg-preview.png",
        title: "Headset Xmax Pro 3d",
        price:350
    },
    {
        id: 2,
        image: "assets/img/product06.png",
        title: "labtop msi x78s",
        price:1260
    },
    {
        id: 3,
        image: "assets/img/product07.png",
        title: "Samsung Glaxy 6s 5g",
        price:600
    },
    {
        id: 4,
        image: "assets/img/product08.png",
        title: "labtop dell xps 21d",
        price:4000
    },
    {
        id: 5,
        image: "assets/img/product09.png",
        title: "Headset Xmax Pro 3d",
        price:350
    },
    {
        id: 6,
        image: "assets/img/product10.png",
        title: "Camera LG oneshot",
        price:600
    },
    {
        id: 7,
        image: "assets/img/product11.png",
        title: "Xbox Controller",
        price:430
    },
    {
        id: 8,
        image: "assets/img/product12.png",
        title: "Airbuds pro",
        price:1500
    },
    {
        id: 9,
        image: "assets/img/product01.png",
        title: "Laptop apple mac2",
        price:2300
    },
    {
        id: 10,
        image: "assets/img/product02.png",
        title: "Headset Xmax Pro 3d",
        price:350
    },
    {
        id: 11,
        image: "assets/img/product03.png",
        title: "Apple m1 max",
        price:3600
    },
    {
        id: 12,
        image: "assets/img/product04.png",
        title: "Tablet air plus max",
        price:740
    }
]

const categoryis = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0

document.getElementById('item_cont').innerHTML = categoryis.map((item)=>
{
    var {image, title, price} = item ;
    return (
        `<div class="item">
        <div class="box">
            <div class="selbox"><span>Hot</span></div>
            <div class="boximg">
                <a href="item.html"><img src=${image} alt=""></a>
            </div>
            <div class="infos">
                <h3>${title}</h3>
                <ul>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="far fa-star"></i></li>
                    <li><p>(5)</p></li>
                </ul>
                <h4>$ ${price} <strike>$750</strike></h4>`+
                `<button onclick='addtocart(`+(i++)+`)'>Add To Cart <i class='fas fa-shopping-cart'></i></button>
            </div>
        </div>
    </div>`
    )
}).join('')

var cart =[]

function addtocart(a){
    cart.push({...categoryis[a]});
    displaycart()
}

function displaycart(a){
    let j = 0 , total = 0 ; 
    document.getElementById('widgcart').innerHTML = cart.length;
    document.getElementById('widgcart1').innerHTML = cart.length;
    if (cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your Cart is empty";
        document.getElementById('totalcat').innerHTML = "00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>{
            var {image,title,price} = items;
            total = total+price
            document.getElementById('totalcat').innerHTML = total;
            return(
                `<div class="product-widget">
                <div class="product-img">
                    <img src=${image} alt="">
                </div>
                <div class="product-body">
                    <h3 class="product-name"><a href="#">${title}</a></h3>
                    <h4 class="product-price"><span class="qty"></span>$ ${price}.00</h4>
                </div>
                <button class="delete" onclick="delelmnt(`+(j++)+`)"><i class="fas fa-times"></i></button>
            </div>`
            )
        }).join('')
    }
}


function delelmnt(a){
    cart.splice(a,1);
    displaycart()
}
