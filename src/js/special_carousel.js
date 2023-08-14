$('.special_carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true
});
$(".prev-btn").click(function () {
    $(".special_carousel").slick("slickPrev");
});

$(".next-btn").click(function () {
    $(".special_carousel").slick("slickNext");
});
$(".prev-btn").addClass("slick-disabled");
$(".special_carousel").on("afterChange", function () {
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