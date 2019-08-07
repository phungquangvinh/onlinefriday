$( document ).ready(function() {
	const options_item = {
	    loop:true,
	    nav:true,
	    navText: [`<i class="fa fa-angle-left" aria-hidden="true"></i>`,`<i class="fa fa-angle-right" aria-hidden="true"></i>`],
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
	};

	const options_list = {
	    loop:true,
	    nav:true,
	    navText: [`<i class="fa fa-angle-left" aria-hidden="true"></i>`,`<i class="fa fa-angle-right" aria-hidden="true"></i>`],
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
	};

    $('.owl-carousel.banner').owlCarousel({
	    loop:true,
	    items: 1,
	    autoplay:true,
	    autoplayTimeout:5000,
	});

	$('.item-favourite .owl-carousel.item').owlCarousel(options_item);

	$('.owl-carousel.partner-list').owlCarousel(options_list);

	$('.owl-carousel.payment-list').owlCarousel({
	    loop:true,
	    nav:true,
	    navText: [`<i class="fa fa-angle-left" aria-hidden="true"></i>`,`<i class="fa fa-angle-right" aria-hidden="true"></i>`],
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