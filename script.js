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
  
  });
  

  
  // ===== Splide.js Initialization =====
  document.addEventListener("DOMContentLoaded", function () {
  
    // Product Slider
    var productSlider = new Splide(".product-slider", {
      type: "loop",
      start: 0,
      perPage: 4,
      perMove: 2,
      gap: "10px",
      pagination: false,
      arrows: false,
      breakpoints: {
        768: { perPage: 2, gap: "10px" },
        480: { perPage: 1, gap: "5px" },
      },
    });
    productSlider.mount();
  

  
    // Create Pagination
    createCustomPagination(productSlider, ".product-dots");
  
    // Fix sizing
   
  });
  
  // ===== Custom Pagination Function =====
  function createCustomPagination(slider, dotContainerSelector) {
    let dotsContainer = document.querySelector(dotContainerSelector);
    let slideCount = slider.length;
    dotsContainer.innerHTML = '';
  
    for (let i = 0; i < slideCount; i++) {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.setAttribute("data-index", i);
      dotsContainer.appendChild(dot);
    }
  
    let dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot) => {
      dot.addEventListener("click", function () {
        let index = parseInt(this.getAttribute("data-index"));
        slider.go(index);
      });
    });
  
    slider.on("move", function (newIndex) {
      dots.forEach((d) => d.classList.remove("active"));
      dots[newIndex].classList.add("active");
    });
  }
  