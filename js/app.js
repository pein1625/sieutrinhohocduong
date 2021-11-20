// smooth scroll to div
$(function () {
  $(".js-scroll-to").on("click", function (e) {
    e.preventDefault();

    const $el = $(this),
          target = $el.data("target"),
          offset = parseInt($el.data("offset") || 0),
          duration = parseInt($el.data("duration") || 800);

    if (!$(target).length) return;

    $([document.documentElement, document.body]).stop().animate({
      scrollTop: $(target).offset().top - offset
    }, duration);
  });
});

$(function () {
  new WOW().init();
});

$(function () {
  $(".course-menu__heading").on("click", function (e) {
    e.preventDefault();

    $(this).toggleClass("active").siblings(".course-menu__list").slideToggle();
  });
});

// menu toggle

$(function () {

  $(".menu-toggle").on("click", function () {

    var $toggle = $(this);

    $toggle.toggleClass("active").siblings(".menu-sub").slideToggle();

    $toggle.siblings(".menu-mega").children(".menu-sub").slideToggle();

    $toggle.parent().siblings(".menu-item-group").children(".menu-sub").slideUp();

    $toggle.parent().siblings(".menu-item-group").children(".menu-mega").children(".menu-sub").slideUp();

    $toggle.parent().siblings(".menu-item-group").children(".menu-toggle").removeClass("active");
  });

  $(".menu-item-group > .menu-link, .menu-item-mega > .menu-link").on("click", function (e) {

    if ($(window).width() < 1200 || !mobileAndTabletCheck()) return;

    e.preventDefault();
  });
});

// navbar mobile toggle
$(function () {
  var $body = $("html, body");
  var $navbar = $(".js-navbar");
  var $navbarToggle = $(".js-navbar-toggle");

  $navbarToggle.on("click", function () {
    $navbarToggle.toggleClass("active");
    $navbar.toggleClass("is-show");
    $body.toggleClass("overflow-hidden");
  });
});

// require _scroll-to-dip.js
$(function () {
  var $moveTop = $(".btn-movetop");
  var $window = $(window);

  if (!$moveTop.length) return;

  $window.on("scroll", function () {
    if ($window.scrollTop() > 150) {
      $moveTop.addClass("show");

      return;
    }

    $moveTop.removeClass("show");
  });
});

$(function () {
  $(".sticky-btns__toggle").on("click", function (e) {
    e.preventDefault();

    $(".sticky-btns").toggleClass("active");
  });
});

// swiper template
function addSwiper(selector, options = {}) {
  return Array.from(document.querySelectorAll(selector), function (item) {
    var $sliderContainer = $(item),
        $sliderEl = $sliderContainer.find(selector + "__container");

    if (options.navigation) {
      $sliderContainer.addClass("has-nav");
      options.navigation = {
        prevEl: $sliderContainer.find(selector + "__prev"),
        nextEl: $sliderContainer.find(selector + "__next")
      };
    }

    if (options.pagination) {
      $sliderContainer.addClass("has-pagination");
      options.pagination = {
        el: $sliderContainer.find(selector + "__pagination"),
        clickable: true
      };
    }

    return new Swiper($sliderEl, options);
  });
}

// banner slider
$(function () {
  addSwiper(".banner-slider", {
    navigation: true,
    pagination: true,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    }
  });
});

// payment-slider
$(function () {
  addSwiper(".payment-slider", {
    loop: true,
    pagination: true,
    speed: 500,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
});

// review-slider-1
$(function () {
  addSwiper(".review-slider-1", {
    pagination: true,
    loop: true,
    slidesPerView: 1,
    speed: 500,
    breakpoints: {
      576: {
        slidesPerView: 1.5
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
});

// review-slider-2
$(function () {
  addSwiper(".review-slider-2", {
    pagination: true,
    loop: true,
    slidesPerView: 1,
    speed: 500,
    breakpoints: {
      576: {
        slidesPerView: 1.5
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 16
      }
    }
  });
});

// download-slider
$(function () {
  addSwiper(".download-slider", {
    pagination: true,
    slidesPerView: 1,
    spaceBetween: 60,
    speed: 500,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  });
});

// student-slider
$(function () {
  addSwiper(".student-slider", {
    pagination: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
});

// teacher-slider
$(function () {
  addSwiper(".teacher-slider", {
    pagination: true,
    navigation: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
});