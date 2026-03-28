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

  // Slider
  const slideCount = $(".ku-slider__item").length;
  const indexCount = slideCount - 1;

  // Build single progress bar + numbers
  $(".ku-slider__progress").html(`
    <span class="slide-current">1</span>
    <div class="progressBar"><div class="inProgress"></div></div>
    <span class="slide-total">${slideCount}</span>
`);

  // Init slick
  $(".ku-slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "ease-in-out",
  });

  // Progress system
  let percentTime;
  let tick;
  let time = 0.1;
  let progressBarIndex = 0;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    const currentSlide = $(".ku-slider .slick-track .slick-active").data("slickIndex");

    $(".slide-current").text(currentSlide + 1); // Update number

    if (currentSlide !== progressBarIndex) {
      progressBarIndex = currentSlide;
      startProgressbar();
    } else {
      percentTime += 1 / (time + 5);
      $(".inProgress").css({ width: percentTime + "%" });

      if (percentTime >= 100) {
        $(".ku-slider").slick("slickNext");
        progressBarIndex++;
        if (progressBarIndex > indexCount) progressBarIndex = 0;
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $(".inProgress").css({ width: "0%" });
    clearInterval(tick);
  }

  startProgressbar();

  //news slider
  $(".ku-news__slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: ".ku-news__slidebtn",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //events slider
  $(".ku-events__slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: ".ku-events__slidebtn",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //Wow js
  new WOW().init();
});
