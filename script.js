$ (function() {
	$('ul.parent > li').hover(function() {
		$(this).find('ul.child').show(400);
	}, function() {
		$(this).find('ul.child').hide(100);
	});
});  


$("document").ready(function(){
$("#imageclass").cycle();
})

	

$("document").ready(function(){
$("#methodimg").cycle();
})

$(function() {

    var width = 1350;
    var animationSpeed = 1500;
    var pause = 3000;
    var currentSlide = 1;


    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider)

    startSlider();


});
    $("document").ready(function(){
     $('.owl-carousel').owlCarousel({
            center:true,
            items:1,
            loop:true,
     });
        });