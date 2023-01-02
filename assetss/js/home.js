$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      center: true,
      loop: true,
      margin: 10,
      mouseDrag: false,
      animateOut: "fadeOut",
      nav: true,
      dots: false,
      navText: [
        "<i class='bi bi-arrow-left left both'></i>",
        "<i class='bi bi-arrow-right right both'></i>",
      ],
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 1,
          nav: true,
          loop: true,
        },
      },
    });
  });
 
  