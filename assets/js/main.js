(function($){
    "use strict";

   $("[data-background").each(function () {
      $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

  
//testimonial slider 
    var swiper = new Swiper(".tp-testimonial-active", {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".tp-swiper-test-button-next",
        prevEl: ".tp-swiper-test-button-prev",
      },
    });

  //brand slider 
    var slider = new Swiper('.tp-brand-top-active', {
      loop: true,
      freemode: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 4000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 6,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
        a11y: false,
      },
    });

    $('.popup-image').magnificPopup({
      type: 'image'
      // other options
    });
    $(".video").magnificPopup({
      type: "iframe",
      
    });

// team slider
    var swiper = new Swiper(".tp-team-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".tp-swiper-team-button-next",
        prevEl: ".tp-swiper-team-button-prev",
      },
      breakpoints: {
        '1200': {
          slidesPerView: 4,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
        a11y: false,
      },
    });

})(jQuery);

