//SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


//REMOVE MOBILE
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


//NEW SWIPER
let newSwiper = new Swiper(".menu-swiper",{
    navigation: {
        nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination", //버튼을 담을 태그 설정
        dynamicBullets: true //버튼스타일
    },
    spaceBetween: 20, //슬라이드 사이 여백
    loop: 'true', //슬라이드 반복 여부
    slidesPerView: 'auto', // 한 슬라이드 보여줄 갯수
    centeredSlides: true, // 센터모드
    breakpoints: { //반응형
        992: { //width
            spaceBetween: 70,
        },
    },
});


//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top', //방향
    distance: '30px', //거리
    duration: 1500, //시간
    delay: 100, //지연시간(처음에 뜨는시간)
})


sr.reveal('.home_title', {origin: 'bottom'})
sr.reveal('.home_description', {origin: 'bottom', delay: 200})
sr.reveal('.home_button', {origin: 'bottom', delay: 300})
sr.reveal('.home_milk', {origin: 'bottom', distance: '100px', duration: 2000, delay: 500})
sr.reveal('.home_icecream-animate', {distance: '800px', duration: 800, delay: 700})
sr.reveal('.home_strawberry', {distance: '800px', duration: 800, delay: 800})
sr.reveal('.home_cheesecake', {distance: '800px', duration: 800, delay: 900})
sr.reveal('.home_leaf:nth-child(1)', {distance: '800px', duration: 800, delay: 1000})
sr.reveal('.home_leaf:nth-child(2)', {distance: '800px', duration: 800, delay: 1100})
sr.reveal('.home_leaf:nth-child(3)', {distance: '800px', duration: 800, delay: 1200})
sr.reveal('.home_leaf:nth-child(4)', {distance: '800px', duration: 800, delay: 1300})
sr.reveal('.home_leaf:nth-child(5)', {distance: '800px', duration: 800, delay: 1400})
sr.reveal('.home_leaf:nth-child(6)', {distance: '800px', duration: 800, delay: 1500})

sr.reveal('.left', {origin: 'left', distance: '800px', duration: 1000, delay: 100})
sr.reveal('.right', {origin: 'right', distance: '800px', duration: 1000, delay: 100})
sr.reveal('.center h2', {origin: 'bottom', distance: '30px', duration: 1200, delay: 400})
sr.reveal('.top_content, .bottom_content')
sr.reveal('.top_image, .bottom_image', {delay: 300})


sr.reveal('.special_card, .item', {interval: 100})




