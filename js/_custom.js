$(document).ready(function () {
  // Close tablet menu
  $(".subheader__burger__hidden").on("click", function () {
    $(".subheader__nav__hidden").removeClass("active");
    $(".subheader__burger").removeClass("active");
    $("html").removeClass("overflow");
  });

  // Burger menu open/close
  $(".subheader__burger").on("click", function () {
    $(".subheader__nav__hidden").toggleClass("active");
    $(".subheader__burger").toggleClass("active");
    $("html").toggleClass("overflow");
  });

  // обработчик события resize
  $(window).resize(function () {
    if ($(window).width() <= "1199") {
      // Intro Slider
      $("#introSlider")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: $("#introNext"),
          prevArrow: $("#introPrev"),
        });
    }

    if ($(window).width() <= "767") {
    }
  });

  // вызовем событие resize
  $(window).resize();

  // Валидация формы
  function validateForm() {
    let username = document.forms["form"]["username"].value;
    let userphone = document.forms["form"]["userphone"].value;
    if (username.trim() == "" || userphone.trim() == "") {
      return false;
    }
  }
});
