/* eslint-disable */
/**
 * #SVG4EVERYBODY
 */
(function ($) {
  svg4everybody({});
})(jQuery);


/**
 * HEADER SCROLL
 */
jQuery(function ($) {
  $(window).scroll(function() {
    let offsetY = $(window).scrollTop();
    const top = 50;

    if ( offsetY > top) {
      $('.header__main').addClass('is-scrolled');
      $('.wrapper--inner').addClass('is-header-scrolled');
    } else {
      $('.header__main').removeClass('is-scrolled');
      $('.wrapper--inner').removeClass('is-header-scrolled');
    }
  });
});


/**
 * MENU
 */
/*
(function ($) {
  $('.js-menu-toggler').click(function (e) { 
    e.preventDefault();
    $('.mobile-nav').toggleClass('is-open');
    $('.page-mask').toggleClass('is-visible');
    $('body').toggleClass('is-nav-mobile-open');
  });

  $('.js-mobile-nav-close, .js-page-mask').click(function (e) { 
    e.preventDefault();
    $('.mobile-nav').removeClass('is-open');
    $('.page-mask').removeClass('is-visible');
    $('body').removeClass('is-nav-mobile-open');
  });
})(jQuery);
*/

/**
 * SLIDERS
 */
document.addEventListener('DOMContentLoaded', function() {
  const solutionSlider = new Swiper('#solution-slider', {
    lazy: true,
    spaceBetween: 40,
    slidesPerView: 5,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '#solution-slider .swiper-button-next',
      prevEl: '#solution-slider .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 4
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 12
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 28
      },
      1800: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    },
  });


  const teamSlider = new Swiper('#team-slider', {
    lazy: true,
    spaceBetween: 40,
    slidesPerView: 3,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '#team-slider-wrap .swiper-button-next',
      prevEl: '#team-slider-wrap .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 4
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 12
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1800: {
        spaceBetween: 75
      }
    },
  });


  const questionsSlider = new Swiper('#questions-slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '#questions-slider-wrap .swiper-button-next',
      prevEl: '#questions-slider-wrap .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 12
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1800: {
        spaceBetween: 36
      }
    },
  });


  const resultsThumbs = new Swiper('#results-thumbs', {
    slidesPerView: 3,
    spaceBetween: 26,
    direction: 'vertical',
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 8
      },
      1024: {
        spaceBetween: 26
      }
    },
  });

  const resultsSlider = new Swiper('#results-slider', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '#results-slider .swiper-button-next',
      prevEl: '#results-slider .swiper-button-prev',
    },
    thumbs: {
      swiper: resultsThumbs
    }
  });
  
});


/**
 * SERVICES MORE BUTTON
 */
jQuery(function ($) {
  $('.js-services-more').click(function (e) { 
    e.preventDefault();
    const button = $(this);
    const block = button.parents('.services-tile').find('.js-services-body');

    button.toggleClass('is-active');
    block.slideToggle();

  });
});


/**
 * INPUT MASK
 */
document.addEventListener('DOMContentLoaded', function() {
  const phones = document.querySelectorAll('.js-input-phone');

  if (typeof(phones) != 'undefined' && phones != null) {
    Array.prototype.forEach.call(phones, function(el, i) {
      const cleavePhone = new Cleave(el, {
        blocks: [2, 3, 3, 2, 2],
        delimiters: [' ', ' ', '-'],
        numericOnly: true,
      });

      el.addEventListener('focus', (e) =>  {
        if(!cleavePhone.properties.prefix) {
          cleavePhone.properties.prefix = '+7';
          cleavePhone.properties.prefixLength = 2;
          e.target.value = '+7 ';
        }
      });

      el.addEventListener('blur', (e)=>  {
        if(cleavePhone.properties.prefix === '+7' && e.target.value === '+7 ') {
          cleavePhone.properties.prefix = '';
          cleavePhone.properties.prefixLength = null;
          e.target.value = null;
        }
      });
    });
  }
});


/**
 * LAZY LOAD
 */
document.addEventListener('DOMContentLoaded', function() {
  const observer = lozad('.lozad', {});
  observer.observe();
});


/**
 * QUIZ
 */
jQuery(function ($) {
  const btnNext = $('#quiz-next'),
        module_1 = $('#quiz-module-1'),
        module_2 = $('#quiz-module-2'),
        progress = $('#quiz-progress'),
        progressFill = $('#quiz-bar-inner'),
        progressDot = $('#quiz-steps-dot-1'),
        progressText = $('#quiz-steps-text-1'),
        progressStep = 33.333333,
        status = 'is-active';

  btnNext.click(function (e) { 
    e.preventDefault();
    let step = btnNext.data('quiz-step');
    
    if (step == 1 && $('[name=quiz-debt]').is(':checked')) {
      module_1.removeClass(status).next().addClass(status);
      btnNext.data('quiz-step', 2);
      progressDot.next().addClass(status);
      progressText.next().addClass(status);
      progressFill.css('transform', 'translateX(' + progressStep*2 + '%)');
    }
    
    if (step == 2 && $('[name=quiz-debt-object]').is(':checked')) {
      module_2.removeClass(status).next().addClass(status);
      progress.hide();
      btnNext.hide();
    }

  });

});


/**
 * READMORE
 */
jQuery(function ($) {
  $('.js-categories').readmore({
    collapsedHeight: 200,
    speed: 300,
    moreLink: '<a class="show-more" href="#">Еще...</a>',
    lessLink: '',
    heightMargin: 16,
  });
});


/**
 * TOOLTIPS
 */
document.addEventListener('DOMContentLoaded', function() {
  tippy('[data-tippy-content]', {
    theme: 'light',
  });
});