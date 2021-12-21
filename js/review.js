$(document).ready(function () {
  $(".plus").click(function (e) {
    e.preventDefault();
    $(".EventNotice").stop().slideToggle();
  });

  bestReview();
  $(".card").flip({
    axis: 'y',
    trigger: 'click'
  });

  $(".photoReview .more").click(function (e) {
    e.preventDefault();
    // $(".photoReview .txtbox p").addClass("on");
    var attrP = $(".photoReview .txtbox p").attr("class");
    var attrA = $(this).attr("class");

    console.table(attrP)
    console.table(attrA)
    var attrIdx = attrA.indexOf("click");
    console.log(attrA);
    //버튼새
    if (attrIdx == -1) {
      $(this).addClass("click");
      $(this).parent().find('p').addClass("on");
      console.log("클릭붙이기");

    } else {
      $(this).removeClass("click");
      $(this).parent().find('p').removeClass("on");
      console.log("클릭떼기");
    }
  });
  // 리뷰더읽기
  
  $(".photoReview .add").click(function (e) { 
    e.preventDefault();
    var attr = $(".photoReview ul.reviewAdd").attr("class");
    var idx = attr.indexOf("hidden");
    if (idx != -1) {
      console.log(idx);
      $(".photoReview ul.reviewAdd").addClass("flex");
      $(".photoReview ul.reviewAdd").removeClass("hidden");
    }
    else{
      $(".photoReview ul.reviewAdd").removeClass("flex");
      $(".photoReview ul.reviewAdd").addClass("hidden");
    }
  });

    
  $(".txtReview .add").click(function (e) { 
    e.preventDefault();
    var attr = $(".board.plus").attr("class");
    $(".board.plus").slideToggle();
  });


  // text review{
    $(".txtReview .more").click(function (e) {
      e.preventDefault();
      // $(".photoReview .txtbox p").addClass("on");
      var attrP = $(" .txtReview .txtbox p").attr("class");
      var attrA = $(this).attr("class");
  
      console.table(attrP)
      console.table(attrA)
      var attrIdx = attrA.indexOf("on");
      console.log(attrA);
      //버튼새
      if (attrIdx == -1) {
        $(this).addClass("on");      
        $(this).parent().find('p').addClass("ellipsis");
        console.log("클릭붙이기");
  
      } else {
        $(this).removeClass("on");
        $(this).parent().find('p').removeClass("ellipsis");
        console.log("클릭떼기");
      }
    });
  
});

function bestReview() {
  var swiper = new Swiper(".reviewCard", {
    // slidesPerView: 3,
    // spaceBetween: 30,
    // slidesPerGroup: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 5
      }
    }

  });

}