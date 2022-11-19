$(document).ready(function(){

    var swiper = new Swiper(".mySwiper", {
      speed: 400,
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: true,
      loop: true,
      loopFillGroupWithBlank: true,
      /* mousewheel: true, */
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  /* $(window).on('scroll', function(){
    var 스크롤값 = $(window).scrollTop();
    if(스크롤값 > 600){
        $('#bottom_header a').css('color', '#000');
    } else {
        $('#bottom_header a').css('color', '#FFF');
    }
  }); */

  $(window).on('scroll', function(){
    var 스크롤값 = $(window).scrollTop();
    if(스크롤값 > 600){
        $('#bottom_header').css('background-color', '#000');
    } else {
        $('#bottom_header').css('background-color', 'rgba(0,0,0,0)');
    }
  });




});