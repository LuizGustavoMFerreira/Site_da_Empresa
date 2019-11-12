var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
    '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>';
      