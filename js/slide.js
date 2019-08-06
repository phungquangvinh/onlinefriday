$( document ).ready(function() {
    $('.owl-carousel.banner').owlCarousel({
	    loop:true,
	    items: 1,
	    autoplay:true,
	    autoplayTimeout:5000,
	});

	$('.item-favourite .owl-carousel.item').owlCarousel({
	    loop:true,
	    nav:true,
	    center:true,
	    dots: false,
	    responsive:{
	        0:{
	            items:2
	        },
	        375:{
	            items:4
	        },
	        768:{
	            items:6
	        },
	        1024:{
	            items:8
	        }
	    }
	});

	$('.owl-carousel.partner-list').owlCarousel({
	    loop:true,
	    nav:true,
	    dots: false,
	    margin: 15,
	    responsive:{
	        0:{
	            items:2
	        },
	        768:{
	            items:4
	        },
	        1024:{
	            items:5
	        }
	    }
	});

	$('.owl-carousel.payment-list').owlCarousel({
	    loop:true,
	    nav:true,
	    dots: false,
	    margin: 15,
	    responsive:{
	        0:{
	            items:2
	        },
	        768:{
	            items:4
	        },
	        1024:{
	            items:6
	        }
	    }
	});
});