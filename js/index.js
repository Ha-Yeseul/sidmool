$(document).ready(function () { //스타트
  var win = window.innerWidth;
  // 팝업
  $("header .button_wrap a.my").click(function(){
    $(".layer_pop").show();
  });

  $(".layer_pop .btn_wrap > a.close_btn").click(function(){
    $(".layer_pop").hide();
  });
  //모바일
  if (win >= 320 && win < 768) {
    // 리스트
    $("header .button_wrap a.menu").click(function () {
      $("nav").stop().fadeToggle(500);     
    });
    sub_menu();
    main_slide();
    best_product();
  }
  // 모바일

  //웹
  else if (win >= 768) {
    $("nav").fadeIn();
    sub_menu();
    main_slide();
    best_product();
  }
  
  var sec02Sh = $(".sec02").offset().top;
  
  $(window).scroll(function () { 
    var winSh = $(window).scrollTop();
    if (winSh>=sec02Sh) {
      $("header").addClass("on");
      $("nav").addClass("on");
      $(".main_menu >li>a").addClass("on");
      console.log("윈도우스크롤" + winSh);
      console.log("sec02높이" + sec02Sh);
    }
    else{
      $("header").removeClass("on");
      $("nav").removeClass("on");
      $(".main_menu >li>a").removeClass("on");
    }
  });
  //웹   
  let mode ;
  // 반응형
  $(window).resize(function () {
    var win = window.innerWidth;
    console.log(win);
    
    //모바일
    if(win >= 320 && win < 768) {
      mode = "mobile";
      // 리스트
      $("header .button_wrap a.menu").click(function () {
        $("nav").stop().fadeToggle(500);  
      });
      sub_menu();
      main_slide();
      best_product();
    }
    //모바일
    else if(win >= 768) {
      mode = "web"
      $("nav").fadeIn();
      sub_menu();
      main_slide();
      best_product();
    }
    //웹
    if(mode == 'mobile') {
      $("nav").fadeOut(0);
    }
  });

  //함수
  // 1. sub_menu 슬라이드
  function sub_menu() {
    $(".main_menu>li").mouseover(function () {
      $(this).children(".sub_menu").stop().slideDown(500);
    });

    $(".main_menu>li").mouseout(function () {
      $(this).children(".sub_menu").stop().slideUp(500);
    });
  }

  // 2. sec01 이미지 슬라이드 
  function main_slide() {
    var swiper01 = new Swiper(".sec01 .slide", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".sec01 .swiper-pagination",
        clickable: true
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },

    });
  }

  // best product_m 슬라이드
  function best_product() {
    var swiper02 = new Swiper(".bestProduct", {
      navigation: {
        nextEl: ".bestProduct .swiper-button-next",
        prevEl: ".bestProduct .swiper-button-prev",
      },
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 1500,
      breakpoints:{
        320:{
          slidePerView: 1,
          spaceBetween: 10
        },
        640:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        1000:{
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
  }


  function product_sub(){
    var swiper03 = new Swiper(".mySwiper_sub_best", {
      scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
      },
    });
  }
  // best product_pc 슬라이드
  // function best_product_pc() {
  //   var swiper02 = new Swiper(".mySwiper_best", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     slidesPerGroup: 3,
  //     loop: true,
  //     loopFillGroupWithBlank: true,
  //     navigation: {
  //       nextEl: ".mySwiper_best .swiper-button-next",
  //       prevEl: ".mySwiper_best .swiper-button-prev",
  //     }
  //   });
  // }
}); // 끝
