$( document ).ready(function() {
	const options_item = {
	    loop:true,
	    nav:true,
	    navText: [`<i class="fa fa-angle-left" aria-hidden="true"></i>`,`<i class="fa fa-angle-right" aria-hidden="true"></i>`],
	    center:true,
	    dots: false,
	    responsive:{
	        0:{
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

	$('.owl-carousel.deal-danh-sach').owlCarousel({
	    loop:true,
	    nav:true,
	    navText: [`<i class="fa fa-angle-left" aria-hidden="true"></i>`,`<i class="fa fa-angle-right" aria-hidden="true"></i>`],
	    dots: false,
	    margin:10,
	    responsive:{
	        0:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1024:{
	            items:4
	        }
	    }
	});

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

/*gallery slide*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}