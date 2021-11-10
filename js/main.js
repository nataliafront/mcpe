var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // when window width is <= 499px

      400: {
        slidesPerView: 2.5,
        spaceSlides: 15
      },

      550: {
        slidesPerView: 3,
        spaceSlides: 15
      },
      700: {
          slidesPerView: 4,
          spaceSlides: 15
      },
      // when window width is <= 999px
      900: {
          slidesPerView: 5,
          spaceBetween: 20
      },
  }
});

var sandwich = function sandwich() {
    var sandwichButton = document.querySelector('.sandwich__open-btn');
    var sandwichClose = document.querySelector('.sandwich__close-btn');
    var menu = document.querySelector('.sandwich__content');
    sandwichButton.addEventListener('click', function () {
      menu.classList.add('sandwich__content--opened');
    });
    sandwichClose.addEventListener('click', function () {
      menu.classList.remove('sandwich__content--opened');
    });
};
  
sandwich();