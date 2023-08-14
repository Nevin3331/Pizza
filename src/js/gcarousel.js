$('.gallery__picture').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true
});
$(".prev-btn").click(function () {
    $(".gallery__picture").slick("slickPrev");
});

$(".next-btn").click(function () {
    $(".gallery__picture").slick("slickNext");
});
$(".prev-btn").addClass("slick-disabled");
$(".gallery__picture").on("afterChange", function () {
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