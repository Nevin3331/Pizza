$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }

});

$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: 0
        }, 0, 'swing', function(){
            window.location.hash = hash;
        });
    }
});
