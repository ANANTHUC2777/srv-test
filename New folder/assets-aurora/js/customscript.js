$(function () {
  //ham
  $(".custom-ham").on("click", function () {
    $(this).toggleClass("change");
  });

  // Scroll to Top
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $("#return-to-top").fadeIn(200);
    } else {
      $("#return-to-top").fadeOut(200);
    }
  });

  $("#return-to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 100);
  });

  // Sticky Header
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $("header").addClass("effect");
    } else {
      $("header").removeClass("effect");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //Nav Menu
  const menuButton = document.querySelector(".custom-ham");
  const mobileMenu = document.querySelector(".ma-nav__mobile-menu");
  const links = document.querySelector(".ma-nav__links");
  const btn = document.querySelector(".ma__btn");
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
  //Wow js
  new WOW().init();

  //slider
  $(".ma-clients__slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
