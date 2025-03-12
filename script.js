document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Initialize Product Slider
    var productSlider = new Splide(".product-slider", {
        type: "loop",
        start: 0,
        perPage: 4,
        perMove: 2,
        gap: "10px",
        pagination: false, // Custom pagination will be used
        arrows: false,
        breakpoints: {
            768: {
                perPage: 2,
                pagination: true,
                gap: "10px",
            },
            480: {
                perPage: 1,
                gap: "5px",
            },
        },
    });
    productSlider.mount(); 

    // 🔹 Initialize Testimonial Slider
    var testimonialSlider = new Splide("#testimonial-slider", {
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "30px",
        arrows: true,
        pagination: false, // Custom pagination will be used
        speed: 800,
        autoplay: true,
        interval: 5000,
        breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
        },
    });
    testimonialSlider.mount(); 

    // ✅ Custom Pagination for Product Slider
    createCustomPagination(productSlider, ".product-dots");

    // ✅ Custom Pagination for Testimonial Slider
    createCustomPagination(testimonialSlider, ".testimonial-dots");
});

/**
 * Function to create custom pagination
 */
function createCustomPagination(slider, dotContainerSelector) {
    let dotsContainer = document.querySelector(dotContainerSelector);
    let slideCount = slider.length;

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
            let index = this.getAttribute("data-index");
            slider.go(index);

            dots.forEach((d) => d.classList.remove("active"));
            this.classList.add("active");
        });
    });

    slider.on("move", function (newIndex) {
        dots.forEach((d) => d.classList.remove("active"));
        dots[newIndex].classList.add("active");
    });
}
