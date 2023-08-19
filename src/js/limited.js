$('.limited_carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    dots: false,
    arrows: true,
});
$(".prev-btn-second").click(function () {
    $(".limited_carousel").slick("slickPrev");
});

$(".next-btn-second").click(function () {
    $(".limited_carousel").slick("slickNext");
});
$(".prev-btn-second").addClass("slick-disabled");
$(".limited_carousel").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn-second").addClass("slick-disabled");
    } else {
        $(".prev-btn-second").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn-second").addClass("slick-disabled");
    } else {
        $(".next-btn-second").removeClass("slick-disabled");
    }
});