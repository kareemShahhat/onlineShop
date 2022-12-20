let tabs = document.querySelectorAll(".tabs_ul li");
let tabsArray = Array.from(tabs);

let devs_cont = document.querySelectorAll(".content_rev > div");
let devs_contarray = Array.from(devs_cont);

tabsArray.forEach((ele) => {
    ele.addEventListener("click",function(e){
        tabsArray.forEach((ele)=>{
            ele.classList.remove("active_tab_rev");
        });
        e.currentTarget.classList.add("active_tab_rev");

        devs_contarray.forEach((div)=>{
            div.style.display="none";
        });
        console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display="block";
    });
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    margin:5
});