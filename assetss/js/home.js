$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".menu_respons_burger").toggleClass("nav-toggle");
  });
});
$(document).ready(function () {
  $(".dropdown-toggle").click(function () {
    $(this).next(".dropdown").slideToggle();
    $(this).next(".pages_drop").slideToggle();
    $(this).next(".shop_drop").slideToggle();
    $(this).next(".product_drop").slideToggle();
    $(this).next(".shop_pages_drop").slideToggle();
    $(this).next(".shop_types_drop").slideToggle();
    $(this).next(".portfoilio_drop").slideToggle();
    $(this).next(".shop_layouts_drop").slideToggle();
    $(this).next(".blog_drop").slideToggle();
    $(this).next(".elements_blog").slideToggle();
    $(this).next(".categories_dropdown").slideToggle();
  });
  $(document).click(function (e) {
    let target = e.target;
    if (
      !$(target).is(".dropdown-toggle") &&
      !$(target).parents().is(".dropdown-toggle")
    ) {
      $(".dropdown").slideUp();
      $(".pages_drop").slideUp();
      $(".shop_drop").slideUp();
      $(".product_drop").slideUp();
      $(".shop_pages_drop").slideUp();
      $(".shop_types_drop").slideUp();
      $(".shop_layouts_drop").slideUp();
      $(".portfoilio_drop").slideUp();
      $(".blog_drop").slideUp();
      $(".elements_drop").slideUp();
      $(".categories_dropdown").slideUp();
    }
  });
});
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

  