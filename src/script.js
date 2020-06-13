export const creteProductSlider = (el) => {
    window.$(el).owlCarousel({
        items: 5,
        dots: false,
        navText:["<div class='arrow arrow--left' style='display: none'></div>","<div class='arrow arrow--right'></div>"],
        responsive: {
            0: {
                items: 1.5,
                nav: false,
                loop: true,
            },
            768: {
                items: 2,
                nav: true,
            },
            992: {
                items: 3,
                nav: true,
            },

            1280: {
                items: 4,
                nav: true,
            },
        },

        onTranslated: (e) => {
            if (e.item.index !== 0) {
                window.$(`${el} .arrow.arrow--left`).removeAttr('style');
            }

            else {
                window.$(`${el} .arrow.arrow--left`).attr('style', 'display: none');
            }
        }
    });

};
