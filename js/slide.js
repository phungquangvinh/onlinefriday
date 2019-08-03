$( document ).ready(function() {
    $('.owl-carousel.banner').owlCarousel({
	    loop:true,
	    items: 1,
	    autoplay:true,
	    autoplayTimeout:5000,
	});
});

$( document ).ready(function () {
	$('.owl-carousel.item').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:4
	        },
	        1000:{
	            items:8
	        }
	    }
	})
})
