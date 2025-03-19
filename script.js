$(document).ready(function () {

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
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  // $(".owl-new-fashion").owlCarousel({
  //   loop: false,
  //   margin: 20,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 2
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   },
  //   onInitialized: removeClones,
  //   onResized: removeClones
  // });

  // function removeClones(event) {
  //   $('.owl-new-fashion .owl-item.cloned').hide(); // extra safety to hide clones
  // }

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


});

