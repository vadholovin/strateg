/* eslint-disable */


/**
 * #SVG4EVERYBODY
 */
(function ($) {
  svg4everybody({});
})(jQuery);



jQuery(function ($) {
  const HIDDEN = 'dropdown/shown';
  const SHOWN = 'dropdown/hidden';
  const BEFORE_SHOW = 'dropdown/beforeshow';
  const BEFORE_HIDE = 'dropdown/beforehide';

  /**
   *
   * @param {jQuery Element} dropdown
   * @param {Boolean} show
   */
  const toggle = (dropdown, show = true) => {
    if (!dropdown.length) {
      return;
    }

    const event = [BEFORE_HIDE, BEFORE_SHOW][Number(show)];
    const btn = dropdown.prev();

    if (btn.hasClass('js-dropdown-toggle')) {
      btn.toggleClass('is-active', show);
    }

    dropdown
      .trigger(event)
      .toggleClass('is-active', show);
  };


  $(document).on('click', '.js-dropdown-toggle', function (e) {
    const btn = $(this);
    const dropdown = btn.next();

    if (!dropdown.hasClass('js-dropdown')) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    toggle(dropdown, !btn.hasClass('is-active'));
  });

  /**
   * Trigger shown/hidden event, after transition end
   */
  $(document).on('transitionend', '.js-dropdown', function () {
    const self = $(this);
    const isActive = Number(self.hasClass('is-active'));

    self.trigger([HIDDEN, SHOWN][isActive]);
  });

  /**
   * Hide all visible dropdown before to show new one
   */
  $(document).on(BEFORE_SHOW, '.js-dropdown', () => {
    $('.js-dropdown.is-active').each(function () {
      toggle($(this), false);
    });
  });

  /**
   * Hide dropdown when click outside
   */
  $(document).on('click', (e) => {
    const target = $(e.target);

    if (target.hasClass('js-dropdown') || target.parents('.js-dropdown').length) {
      return;
    }

    $('.js-dropdown.is-active').each(function () {
      toggle($(this), false);
    });
  });

});


/**
 * HEADER SCROLL
 */
jQuery(function ($) {
  $(window).scroll(function() {
    let offsetY = $(window).scrollTop();
    const top = 50;

    if ( offsetY > top) {
      $('.header').addClass('on-top');
      $('.header__main').addClass('is-scrolled');
      $('.wrapper--inner').addClass('is-header-scrolled');
    } else {
      $('.header').removeClass('on-top');
      $('.header__main').removeClass('is-scrolled');
      $('.wrapper--inner').removeClass('is-header-scrolled');
    }
  });
});


/**
 * MENU
 */
jQuery(function ($) {
  $('#burger').click(function (e) {
    e.preventDefault();
    $('.mobile-nav').toggleClass('is-open');
    $('body').toggleClass('is-nav-mobile-open');
  });

  $('#mobile-nav-overlay').click(function (e) {
    e.preventDefault();
    $('.mobile-nav').removeClass('is-open');
    $('body').removeClass('is-nav-mobile-open');
  });
});


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
        spaceBetween: 20
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


  const relatedSlider = new Swiper('#post-related-slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '#post-related-slider-wrap .swiper-button-next',
      prevEl: '#post-related-slider-wrap .swiper-button-prev',
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
        spaceBetween: 32
      },
    },
  });


  const resultsThumbs = new Swiper('#results-thumbs', {
    slidesPerView: 3,
    spaceBetween: 26,
    direction: 'vertical',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 26
      }
    },
  });

  const resultsSlider = new Swiper('#results-slider', {
    loop: true,
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
    const icon = $(this).find('.icon-plus');
    const block = button.parents('.services-tile');
    const info = button.parents('.services-tile').find('.js-services-body');

    button.toggleClass('is-active');
    icon.toggle();
    block.toggleClass('is-expanded');
    info.slideToggle();

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

  $('[name=quiz-debt]').change(function (e) {
    let value = $('[name=quiz-debt]:checked').val();

    if (value == 'a') {
      $('#quiz-result-text-3, #quiz-result-dot-3').addClass('is-active');
    } else if ('bcdef'.indexOf(value) != -1) {
      $('#quiz-result-text-4, #quiz-result-dot-4').addClass('is-active');
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


/**
 * VIDEO
 */
jQuery(function ($) {
  if ($('.js-video').length) {
    function findVideos() {
      let videos = document.querySelectorAll('.js-video');

      for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
      }
    }

    function setupVideo(video) {
      let link = video.querySelector('.video__link');
      let media = video.querySelector('.video__media');
      let button = video.querySelector('.video__button');
      let id = parseMediaURL(media);

      video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
      });

      link.removeAttribute('href');
      video.classList.add('video--enabled');
    }

    function parseMediaURL(media) {
      let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
      let url = media.src;
      let match = url.match(regexp);

      return match[1];
    }

    function createIframe(id) {
      let iframe = document.createElement('iframe');

      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', generateURL(id));
      iframe.classList.add('video__media');

      return iframe;
    }

    function generateURL(id) {
      let query = '?rel=0&showinfo=0&autoplay=1';

      return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();
  }
});


/**
 * POPUPS
 */
jQuery(function ($) {
  if($('.js-img-pop[href*=".jpg"], .js-img-pop[href*=".jpeg"], .js-img-pop[href*=".png"]').length){
    let links = $('.js-img-pop[href*=".jpg"], .js-img-pop[href*=".jpeg"], .js-img-pop[href*=".png"]');

		links.magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
			}
		});
  }
});


/**
 * FORM RESPOND
 */
jQuery(function ($) {
  document.addEventListener( 'wpcf7mailsent', function( event ) {
    setTimeout(() => {
      $('.wpcf7-response-output').removeAttr('style');
    }, 5000);
  }, false );

  document.addEventListener( 'wpcf7mailfailed', function( event ) {
    setTimeout(() => {
      $('.wpcf7-response-output').removeAttr('style');
    }, 5000);
  }, false );
});


/**
 * COUNTUP
 */
jQuery(function ($) {
  "use strict";

  var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

  var counters = $(".js-counter");

  counters.each(function (ignore, counter) {
    new Waypoint({
      element: counter,
      handler: function() {
        counterUp(counter, {
          duration: 1500,
          delay: 16
        });
        this.destroy();
      },
      offset: 'bottom-in-view',
    });
  });
});


/**
 * MARQUEE
 */
jQuery(function ($) {
  $('.js-marquee').marquee({
    //duration in milliseconds of the marquee
    duration: 10000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
  });
});