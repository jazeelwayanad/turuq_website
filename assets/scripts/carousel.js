
      $(document).ready(function () {
  var $slider = $('.slick-fade');

  function startProgressBar() {
    $('.progress-fill').css({
      width: '0%',
      transition: 'none'
    });

    setTimeout(function () {
      $('.progress-fill').css({
        width: '100%',
        transition: 'width 4000ms linear'
      });
    }, 10);
  }

  $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.current').text(('0' + i).slice(-2));
    $('.total').text(('0' + slick.slideCount).slice(-2));
    startProgressBar();
  });

  $slider.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
        pauseOnHover: false
  });

  startProgressBar();
});