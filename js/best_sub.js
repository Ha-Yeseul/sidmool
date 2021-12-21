$(document).ready(function () {
  bestItem();
  $(".bestItem .more").click(function () {
    more();
  });

  $(".productList li .btnWrap a").click(function () {
    var attr = $(this).attr("class");
    if (attr === "on") {
      $(this).removeClass("on");
      console.log("리무브");
    } else {
      $(this).addClass("on");
      console.log("애드");
    }
  });

  // var sec02Sh = $(".productList").offset().top;
  // $(window).scroll(function () { 
  //   var winSh = $(window).scrollTop();
  //   if (winSh>=sec02Sh) {
  //     $("header").addClass("on");
  //     $("nav").addClass("on");
  //     $(".main_menu >li>a").addClass("on");
  //     console.log("윈도우스크롤" + winSh);
  //     console.log("sec02높이" + sec02Sh);
  //   }
  //   else{
  //     $("header").removeClass("on");
  //     $("nav").removeClass("on");
  //     $(".main_menu >li>a").removeClass("on");
  //   }
  // });
});


// 아이템 스와이퍼
function bestItem() {
  var swiper = new Swiper(".bestWrap", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });
}

// more 버튼 
function more() {
  var sec02 = $(".productList").offset().top;
  $("html, body").animate({
    scrollTop: sec02
  }, 1000);
  console.log(sec02);
}

// 아이콘 클릭이벤트