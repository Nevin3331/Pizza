$('.classic_carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
});
$(".prev-btn-first").click(function () {
    $(".classic_carousel").slick("slickPrev");
});

$(".next-btn-first").click(function () {
    $(".classic_carousel").slick("slickNext");
});
$(".prev-btn-first").addClass("slick-disabled");
$(".classic_carousel").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn-first").addClass("slick-disabled");
    } else {
        $(".prev-btn-first").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn-first").addClass("slick-disabled");
    } else {
        $(".next-btn-first").removeClass("slick-disabled");
    }
});