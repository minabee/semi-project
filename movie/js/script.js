$(document).ready(() => {

    //hamburger-menu
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    });

    //setting owl carousel
    let navText = ["<i class='bx bx-chevron-left'></i>","<i  class='bx bx-chevron-right'></i>"] //박스아이콘

    //첫번째 슬라이드
    $('#main-carousel').owlCarousel({
        items: 1, //한 화면에 보여줄 아이템 수
        dots: false, //Pagination(페이지숫자) 표시 여부
        loop: true, //반복여부 (true:무한반복, false:마지막 슬라이드에서 끝)
        nav: true, //네비게이션 버튼 표시 옵션
        navText: navText, //네비게이션 버튼 텍스트 수정
        autoplay: true, //자동넘김
        autoplayHoverPause: true //마우스 오버시 멈출 지 여부
    });
    //두번째 슬라이드
    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: { //반응형웹일 경우, 브라우저 크기에 따른 옵션설정
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    });
    //세번째이후 슬라이드
    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15, //슬라이드간의 간격 (px)
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    });






});