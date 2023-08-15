$('.feedback_photo').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 2,
  autoplay: false,
  dots: false,
  arrows: false,
  autoplay: true,
  dots: true,
  appendArrows: $('.slick-slider-nav'),
  appendDots: $('.slick-slider-dots'),
  prevArrow: "<button class='slick-prev btn btn-white rounded-circle'><i class='mdi mdi-chevron-left'></i></button>",
  nextArrow: "<button class='slick-next btn btn-white rounded-circle'><i class='mdi mdi-chevron-right'></i></button>",
});
$(".prev-btn").click(function () {
  $(".feedback_photo").slick("slickPrev");
});

$(".next-btn").click(function () {
  $(".feedback_photo").slick("slickNext");
});
$(".prev-btn").addClass("slick-disabled");
$(".feedback_photo").on("afterChange", function () {
  if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
  } else {
      $(".prev-btn").removeClass("slick-disabled");
  }
  if ($(".slick-next").hasClass("slick-disabled")) {
      $(".next-btn").addClass("slick-disabled");
  } else {
      $(".next-btn").removeClass("slick-disabled");
  }
});


