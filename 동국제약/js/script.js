//NAV DROPDOWN
// $(function(){
//     //on : 24시간 모니터링
//     $(window).on('resize load', resize);
// });

// function resize(){
//     if($(window).width() > 1023){
//         $(".gnb, .header_bg").hover(function(){
//             $(".sub, .header_bg").stop().show();
//         },function(){
//             $(".sub, .header_bg").stop().hide();
//         });
//     }else{
//         $(".gnb_title").click(function(){
//             $(this).toggleClass("on");
//             $(this).parent().find(".sub").stop().slideToggle();
//         });
//     }
// }
$('.gnb, .header_bg').on('mouseover',function(){
    if($( window ).width() > 1023){
        $(".sub, .header_bg").stop().show();
        
    }
})
$('.gnb, .header_bg').on('mouseleave',function(){
    if($( window ).width() > 1023){
        $(".sub, .header_bg").stop().hide();
    }
})
$('.gnb_title').on('click',function(){
    if($( window ).width() <= 1023){
        $(this).toggleClass("on");
        $(this).parent().find(".sub").stop().slideToggle();
    }
})

//SHOW NAV BACKGROUND
const scrollNav = document.getElementById('header')
window.onscroll = function(){
    if(window.scrollY >= 300){
        scrollNav.classList.add('scroll-nav')
    }else{
        scrollNav.classList.remove('scroll-nav')
    }
}

//SHOW MENUwindowWidth
const nav = document.getElementById('nav'),
      navHamburger = document.getElementById('nav-hamburger'),
      navClose = document.getElementById('nav-close')

if(navHamburger){
    navHamburger.addEventListener('click', () =>{
        nav.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        nav.classList.remove('show-menu')
    })
}

//HOME,BRAND SWIPER
let homeSwiper = new Swiper(".home-swiper",{
    // autoplay:{
    //     delay:2500,
    // },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});
let barndSwiper = new Swiper(".brand-swiper",{
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    // autoplay:{
    //     delay:2500,
    // },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
});

//FAMILY SITE
$(".footer_family>div").click(function(){
    $(this).toggleClass("on");
    $(".footer_family>ul").stop().slideToggle();
});