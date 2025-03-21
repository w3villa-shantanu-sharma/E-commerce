$(document).ready(function () {

  $('#category-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1280: {
        items: 5
      }
    }
  });

  $('#features').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1280: {
        items: 4
      }
    }
  });

  //  Testimonial Carousel
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 } // For example
    }
  });

  //  Blog Carousel
  $('.blog-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true, // Different behavior
    autoplay: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  });

  $('.most-viewed-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,   // SHOW DOTS
    responsive: {
      0: {
        items: 1,
        gap: 0
      },
      480: {
        items: 2
      },
      768: {
        items: 3,
        gap: 10
      },
      1024: {
        items: 4
      },
      1280: {
        items: 4
      }
    }
  });

  $('#brand-slider').owlCarousel({
    loop: true,
    margin: 8,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3
      },
      768: {
        items: 5
      },
      1024: {
        items: 7
      },
      1200: {
        items: 9
      }
    }
  });


  var $heroSlider = $('#hero-slider');

  $heroSlider.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false, // Default dots OFF
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    onInitialized: updateCustomDots,
    onTranslated: updateCustomDots
  });

  function updateCustomDots(event) {
    var total = event.item.count;
    var index = event.item.index - event.relatedTarget._clones.length / 2;
    if (index >= total || index < 0) {
      index = total - 1;
    }

    $('.custom-pagination').each(function (i, el) {
      var dots = $(el).find('.dot');
      dots.removeClass('active');
      dots.eq(index).addClass('active');
    });
  }

  // Click event on custom dots
  $('.custom-pagination .dot').click(function () {
    var index = $(this).data('index');
    $heroSlider.trigger('to.owl.carousel', [index, 300]);
  });

  const scrollBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // adjust "300" as needed
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });




});

