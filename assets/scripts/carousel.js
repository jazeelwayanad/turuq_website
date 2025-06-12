 $(document).ready(function () {
        var $slider = $(".slick-fade");

        $slider.on(
          "init reInit afterChange",
          function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $(".current").text(("0" + i).slice(-2));
            $(".total").text(("0" + slick.slideCount).slice(-2));
          }
        );

        $slider.slick({
          dots: false,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: "linear",
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: true,
          prevArrow: $(".prev"),
          nextArrow: $(".next"),
        });
      });