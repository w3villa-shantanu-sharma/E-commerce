document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.product-slider', {
        type: 'loop',
        perPage: 4,
        perMove: 2,
        gap: '15px',
        pagination: true,
        arrows: false,
        breakpoints: {
            768: {
                perPage: 2,
                gap: '10px',
            },
            480: {
                perPage: 1,
                gap: '5px',
            }
        }
    });

    splide.mount();
});
