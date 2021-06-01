$(document).ready(function(){
  $('.header__menu-burger').click(function(){
    $('.header').toggleClass('active')
    $('body').toggleClass('active')
  })
});
// =======================================================================================================
$(document).ready(function(){
  $('.for_you').click(function(){
    $('.cargo__tab').removeClass().addClass("cargo__tab for_you");
    $('.cargo__items').removeClass().addClass("cargo__items for_you");
  })
  $('.show__all').click(function(){
    $('.cargo__tab').removeClass().addClass("cargo__tab");
    $('.cargo__items').removeClass().addClass("cargo__items");
  })
  $('.favorite').click(function(){
    $('.cargo__tab').removeClass().addClass("cargo__tab favorite");
    $('.cargo__items').removeClass().addClass("cargo__items favorite");
  })
  $('.new').click(function(){
    $('.cargo__tab').removeClass().addClass("cargo__tab new");
    $('.cargo__items').removeClass().addClass("cargo__items new");
  })
});
$(document).ready(function(){
  $('.magazine').click(function(){
    $('.tab__items').removeClass().addClass("tab__items magazine");
    $('.tab__menu').removeClass().addClass("tab__menu magazine");
  })
  $('.vip').click(function(){
    $('.tab__items').removeClass().addClass("tab__items vip");
    $('.tab__menu').removeClass().addClass("tab__menu vip");
  })
});
$(window).on('load', function () {
  $('.cargo__tab').removeClass().addClass("cargo__tab for_you");
  $('.cargo__items').removeClass().addClass("cargo__items for_you");
  $('.tab__items').removeClass().addClass("tab__items magazine");
  $('.tab__menu').removeClass().addClass("tab__menu magazine");
});
// =======================================================================================================

// =======================================================================================================
new Swiper('.cargo__slider-swiper',{

  navigation: {
    nextEl: '.cargo__button-next',
    prevEl: '.cargo__button-prev',
  },

  // включення/виключення
  // свайп
  simulateTouch: true,

  // чутливість
  touchRatio: 1,

  // кут спрацьовування свайпа
  touchAngel: 45,

  // курсор перетягування
  grabCursor: false,

  // переключення по кліку на слайд
  slideToClickedSlide: false,

  // управління клавіатурою
  keyboard: {
    // вкл\викл
    enable: true,
    // вкл\викл
    // тільки коли слайдер в межах вюпорта
    onlyInViewport: true,
    // вкл\викл
    // управління клавішами PgUp, PgDown
    pageUpDown: true,
  },

  // автовисота
  autoHeight: true,

  // кількість слайдів для показу
  slidesPerView: 1,

  // відключення функції slidesPerView
  // якщо слайдів менше ніж треба
  watchOverflow: true,

  // відступи між слайдами
  spaceBetween: 0,

  // кількість пролистуваних слайдів
  slidesPerGroup: 1,

  // активний слайд по центру
  centeredSlides: true,

  // стартовий слайд
  initialSlide: 0,

  // нескінечний слайдер
  loop: true,

  // вільний режим перегортання слайдів
  freeMode: false,

  // скорість переключення слайдів
  speed: 300,

});
// =======================================================================================================
