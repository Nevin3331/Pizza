$('.sea_carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
});
$(".prev-btn-third").click(function () {
    $(".sea_carousel").slick("slickPrev");
});

$(".next-btn-third").click(function () {
    $(".sea_carousel").slick("slickNext");
});
$(".prev-btn-third").addClass("slick-disabled");
$(".sea_carousel").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn-third").addClass("slick-disabled");
    } else {
        $(".prev-btn-third").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn-third").addClass("slick-disabled");
    } else {
        $(".next-btn-third").removeClass("slick-disabled");
    }
});