// sliders.js

// ===== Owl Carousel Initialization =====
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 800,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:3 }
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
  
    // Testimonial Slider
    var testimonialSlider = new Splide("#testimonial-slider", {
      type: "loop",
      perPage: 3,
      perMove: 1,
      focus: 'center',
      gap: "32px",
      arrows: false,
      pagination: false,
      speed: 800,
      autoplay: true,
      interval: 5000,
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 },
      },
    });
    testimonialSlider.mount();
  
    // Create Pagination
    createCustomPagination(productSlider, ".product-dots");
    createCustomPagination(testimonialSlider, ".testimonial-dots");
  
    // Fix sizing
    setTimeout(() => {
      testimonialSlider.refresh();
    }, 100);
  });
  
  // ===== Custom Pagination Function =====
  function createCustomPagination(slider, dotContainerSelector) {
    let dotsContainer = document.querySelector(dotContainerSelector);
    let slideCount = slider.Components.Elements.slides.length;
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
  