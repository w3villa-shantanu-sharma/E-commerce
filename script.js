$(document).ready(function(){
  
    //  Testimonial Carousel
    $('.testimonials-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:3 } // For example
      }
    });
  
    //  Blog Carousel
    $('.blog-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true, // Different behavior
      autoplay: false,
      responsive:{
        0:{ items:1 },
        768:{ items:2 },
        1024:{ items:3 }
      }
    });

    $('.most-viewed-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay : true,   // SHOW DOTS
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
      


  
  });
  
