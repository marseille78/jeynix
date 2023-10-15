"use strict";

document.body.classList.add("loading");
document.addEventListener('DOMContentLoaded', function () {
  /**
   * Resize Browser Window
   */

  window.addEventListener('resize', function () {
    document.querySelectorAll('.opened').forEach(function (el) {
      el.classList.remove('opened');
    });
  });

  /***********************************
  * Language
  ***********************************/

  (function () {
    var btnsLang = document.querySelectorAll('[data-toggle-lang]');
    if (btnsLang.length === 0) return;
    new Language(btnsLang);
  })();

  /***********************************
  * Page Slider
  ***********************************/

  (function () {
    var mainContainer = document.querySelector(".page__main");
    var pageSlider = new Swiper("[data-swiper]", {
      // Свої класи
      wrapperClass: "slider__wrapper",
      slideClass: "section",
      // Вертикальний слайдер
      direction: "vertical",
      // Кількість слайдів для показу
      slidesPerView: "auto",
      // Вмикаємо паралакс
      parallax: true,
      // Керування клавіатурою
      keyboard: {
        // Увімкнути/Вимкнути
        enable: true,
        // Увімкнути/Вимкнути
        // тільки коли слайдер
        // в межах в'юпорта
        onlyInViewport: true,
        // Увімкнути/Вимкнути
        // керування клавішами
        // pageUp, pageDown
        pageUpDown: true
      },
      // Керування колесом миші
      mousewheel: {
        // Чутливість колеса миші
        sensitivity: 1
        // Клас об'єкта на якому
        // буде відпрацьовувати прокрутка мишею
        // eventsTarget: ".image-slider"
      },

      // Відключення функціонала
      // якщо слайдів меньш ніж потрібно
      watchOverflow: true,
      // Швидкість
      speed: 800,
      // Оновить свайпер
      // при зміні елементів слайдера
      observer: true,
      // Оновить слайдер
      // при зміні батьківських
      // елментів слайдера
      observeParents: true,
      // Оновить слайдер
      // при зміні дочерніх
      // елементів слайда
      observeSlideChildren: true,
      // Навігація
      // Булети, поточне положення, прогресбар
      pagination: {
        el: ".slider__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "slider__bullet",
        "bulletActiveClass": "slider__bullet--active"
      },
      // Скрол
      scrollbar: {
        el: ".slider__scroll",
        dragClass: "slider__drag-scroll",
        // Можливість перетягувати скролл
        draggable: true
      },
      // Відключення автоініціалізації
      init: false,
      // Події
      on: {
        // Подія ініціалізації
        init: function init() {
          document.body.classList.remove("loading");
          setScrollType();
          mainContainer.classList.add("loaded");
        },
        slideChangeTransitionEnd: function slideChangeTransitionEnd() {
          document.body.classList.remove("scroll");
        },
        // Подія зміни слайда
        slideChange: function slideChange() {
          document.body.classList.add("scroll");
        },
        // Зміна розміру вікна браузера
        resize: function resize() {
          setScrollType();
        }
      }
    });
    function setScrollType() {
      if (mainContainer.classList.contains("free")) {
        mainContainer.classList.remove("free");
        pageSlider.params.freeMode = false;
      }
      for (var i = 0; i < pageSlider.slides.length; i++) {
        var itemSlide = pageSlider.slides[i];
        var itemSlideContent = itemSlide.querySelector(".section__content");
        if (itemSlideContent) {
          var itemSlideContentHeight = itemSlideContent.offsetHeight;
          if (itemSlideContentHeight > window.innerHeight) {
            mainContainer.classList.add("free");
            pageSlider.params.freeMode = true;
            break;
          }
        }
      }
    }
    var btnScrollDown = document.querySelector("[data-scroll-down]");
    var btnScrollUp = document.querySelector("[data-scroll-up]");
    btnScrollDown.addEventListener("click", function (e) {
      e.preventDefault();
      pageSlider.slideTo(4);
    });
    btnScrollUp.addEventListener("click", function (e) {
      e.preventDefault();
      pageSlider.slideTo(0);
    });
    pageSlider.init();
  })();

  /*********************************
  * Welcome slider
  *********************************/
  (function () {
    new Swiper("[data-welcome-swiper]", {
      // Кількість слайдів для показу
      slidesPerView: 1,
      autoplay: {
        delay: 5000
      },
      // Швидкість
      speed: 800,
      loop: true,
      // Навігація
      // Булети, поточне положення, прогресбар
      pagination: {
        el: ".swiper__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "swiper__bullet",
        "bulletActiveClass": "swiper__bullet--active"
      },
      navigation: {
        prevEl: '.swiper__button-prev',
        nextEl: '.swiper__button-next'
      }
    });
  })();
});
/***********************************
* Language
***********************************/

function Language(btns) {
  var _this = this;
  this.btns = document.querySelectorAll("[data-toggle-lang]");
  this.btns.forEach(function (item) {
    item.addEventListener("click", _this.toggle);
  });
}
Language.prototype.toggle = function (e) {
  e.preventDefault();
  this.dataset.toggleLang === "en" ? document.body.classList.remove("ua") : document.body.classList.add("ua");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJsYXlvdXQvc2lkZWJhci9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwiYnRuc0xhbmciLCJsZW5ndGgiLCJMYW5ndWFnZSIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwicGFnZVNsaWRlciIsIlN3aXBlciIsIndyYXBwZXJDbGFzcyIsInNsaWRlQ2xhc3MiLCJkaXJlY3Rpb24iLCJzbGlkZXNQZXJWaWV3IiwicGFyYWxsYXgiLCJrZXlib2FyZCIsImVuYWJsZSIsIm9ubHlJblZpZXdwb3J0IiwicGFnZVVwRG93biIsIm1vdXNld2hlZWwiLCJzZW5zaXRpdml0eSIsIndhdGNoT3ZlcmZsb3ciLCJzcGVlZCIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJvYnNlcnZlU2xpZGVDaGlsZHJlbiIsInBhZ2luYXRpb24iLCJ0eXBlIiwiY2xpY2thYmxlIiwiYnVsbGV0Q2xhc3MiLCJzY3JvbGxiYXIiLCJkcmFnQ2xhc3MiLCJkcmFnZ2FibGUiLCJpbml0Iiwib24iLCJzZXRTY3JvbGxUeXBlIiwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kIiwic2xpZGVDaGFuZ2UiLCJyZXNpemUiLCJjb250YWlucyIsInBhcmFtcyIsImZyZWVNb2RlIiwiaSIsInNsaWRlcyIsIml0ZW1TbGlkZSIsIml0ZW1TbGlkZUNvbnRlbnQiLCJpdGVtU2xpZGVDb250ZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJidG5TY3JvbGxEb3duIiwiYnRuU2Nyb2xsVXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJzbGlkZVRvIiwiYXV0b3BsYXkiLCJkZWxheSIsImxvb3AiLCJuYXZpZ2F0aW9uIiwicHJldkVsIiwibmV4dEVsIiwiYnRucyIsIl90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QUEsQ0FBQSxVQUFBOEQsSUFBQSxFQUFBO0lBQ0FBLElBQUEsQ0FBQWpFLGdCQUFBLENBQUEsT0FBQSxFQUFBZ0UsS0FBQSxDQUFBRSxNQUFBLENBQUE7RUFDQSxDQUFBLENBQUE7QUFDQTtBQUVBMUQsUUFBQSxDQUFBMkQsU0FBQSxDQUFBRCxNQUFBLEdBQUEsVUFBQVosQ0FBQSxFQUFBO0VBQ0FBLENBQUEsQ0FBQUMsY0FBQSxDQUFBLENBQUE7RUFFQSxJQUFBLENBQUFhLE9BQUEsQ0FBQUMsVUFBQSxLQUFBLElBQUEsR0FDQXpFLFFBQUEsQ0FBQUMsSUFBQSxDQUFBQyxTQUFBLENBQUFPLE1BQUEsQ0FBQSxJQUFBLENBQUEsR0FDQVQsUUFBQSxDQUFBQyxJQUFBLENBQUFDLFNBQUEsQ0FBQUMsR0FBQSxDQUFBLElBQUEsQ0FBQTtBQUNBLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2l6ZSBCcm93c2VyIFdpbmRvd1xyXG4gICAqL1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW5lZCcpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKVxyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgKiBMYW5ndWFnZVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBidG5zTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS1sYW5nXScpO1xyXG5cclxuICAgIGlmIChidG5zTGFuZy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBuZXcgTGFuZ3VhZ2UoYnRuc0xhbmcpO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICogUGFnZSBTbGlkZXJcclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbWFpblwiKTtcclxuXHJcbiAgICBjb25zdCBwYWdlU2xpZGVyID0gbmV3IFN3aXBlcihcIltkYXRhLXN3aXBlcl1cIiwge1xyXG4gICAgICAvLyDQodCy0L7RlyDQutC70LDRgdC4XHJcbiAgICAgIHdyYXBwZXJDbGFzczogXCJzbGlkZXJfX3dyYXBwZXJcIixcclxuICAgICAgc2xpZGVDbGFzczogXCJzZWN0aW9uXCIsXHJcblxyXG4gICAgICAvLyDQktC10YDRgtC40LrQsNC70YzQvdC40Lkg0YHQu9Cw0LnQtNC10YBcclxuICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXHJcblxyXG4gICAgICAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YHQu9Cw0LnQtNGW0LIg0LTQu9GPINC/0L7QutCw0LfRg1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHJcbiAgICAgIC8vINCS0LzQuNC60LDRlNC80L4g0L/QsNGA0LDQu9Cw0LrRgVxyXG4gICAgICBwYXJhbGxheDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vINCa0LXRgNGD0LLQsNC90L3RjyDQutC70LDQstGW0LDRgtGD0YDQvtGOXHJcbiAgICAgIGtleWJvYXJkOiB7XHJcbiAgICAgICAgLy8g0KPQstGW0LzQutC90YPRgtC4L9CS0LjQvNC60L3Rg9GC0LhcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgLy8g0KPQstGW0LzQutC90YPRgtC4L9CS0LjQvNC60L3Rg9GC0LhcclxuICAgICAgICAvLyDRgtGW0LvRjNC60Lgg0LrQvtC70Lgg0YHQu9Cw0LnQtNC10YBcclxuICAgICAgICAvLyDQsiDQvNC10LbQsNGFINCyJ9GO0L/QvtGA0YLQsFxyXG4gICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgIC8vINCj0LLRltC80LrQvdGD0YLQuC/QktC40LzQutC90YPRgtC4XHJcbiAgICAgICAgLy8g0LrQtdGA0YPQstCw0L3QvdGPINC60LvQsNCy0ZbRiNCw0LzQuFxyXG4gICAgICAgIC8vIHBhZ2VVcCwgcGFnZURvd25cclxuICAgICAgICBwYWdlVXBEb3duOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0JrQtdGA0YPQstCw0L3QvdGPINC60L7Qu9C10YHQvtC8INC80LjRiNGWXHJcbiAgICAgIG1vdXNld2hlZWw6IHtcclxuICAgICAgICAvLyDQp9GD0YLQu9C40LLRltGB0YLRjCDQutC+0LvQtdGB0LAg0LzQuNGI0ZZcclxuICAgICAgICBzZW5zaXRpdml0eTogMSxcclxuICAgICAgICAvLyDQmtC70LDRgSDQvtCxJ9GU0LrRgtCwINC90LAg0Y/QutC+0LzRg1xyXG4gICAgICAgIC8vINCx0YPQtNC1INCy0ZbQtNC/0YDQsNGG0YzQvtCy0YPQstCw0YLQuCDQv9GA0L7QutGA0YPRgtC60LAg0LzQuNGI0LXRjlxyXG4gICAgICAgIC8vIGV2ZW50c1RhcmdldDogXCIuaW1hZ2Utc2xpZGVyXCJcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCS0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YTRg9C90LrRhtGW0L7QvdCw0LvQsFxyXG4gICAgICAvLyDRj9C60YnQviDRgdC70LDQudC00ZbQsiDQvNC10L3RjNGIINC90ZbQtiDQv9C+0YLRgNGW0LHQvdC+XHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblxyXG4gICAgICAvLyDQqNCy0LjQtNC60ZbRgdGC0YxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuXHJcbiAgICAgIC8vINCe0L3QvtCy0LjRgtGMINGB0LLQsNC50L/QtdGAXHJcbiAgICAgIC8vINC/0YDQuCDQt9C80ZbQvdGWINC10LvQtdC80LXQvdGC0ZbQsiDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG5cclxuICAgICAgLy8g0J7QvdC+0LLQuNGC0Ywg0YHQu9Cw0LnQtNC10YBcclxuICAgICAgLy8g0L/RgNC4INC30LzRltC90ZYg0LHQsNGC0YzQutGW0LLRgdGM0LrQuNGFXHJcbiAgICAgIC8vINC10LvQvNC10L3RgtGW0LIg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHJcbiAgICAgIC8vINCe0L3QvtCy0LjRgtGMINGB0LvQsNC50LTQtdGAXHJcbiAgICAgIC8vINC/0YDQuCDQt9C80ZbQvdGWINC00L7Rh9C10YDQvdGW0YVcclxuICAgICAgLy8g0LXQu9C10LzQtdC90YLRltCyINGB0LvQsNC50LTQsFxyXG4gICAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcclxuXHJcbiAgICAgIC8vINCd0LDQstGW0LPQsNGG0ZbRj1xyXG4gICAgICAvLyDQkdGD0LvQtdGC0LgsINC/0L7RgtC+0YfQvdC1INC/0L7Qu9C+0LbQtdC90L3Rjywg0L/RgNC+0LPRgNC10YHQsdCw0YBcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi5zbGlkZXJfX3BhZ2luYXRpb25cIixcclxuICAgICAgICB0eXBlOiBcImJ1bGxldHNcIixcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgYnVsbGV0Q2xhc3M6IFwic2xpZGVyX19idWxsZXRcIixcclxuICAgICAgICBcImJ1bGxldEFjdGl2ZUNsYXNzXCI6IFwic2xpZGVyX19idWxsZXQtLWFjdGl2ZVwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQodC60YDQvtC7XHJcbiAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgIGVsOiBcIi5zbGlkZXJfX3Njcm9sbFwiLFxyXG4gICAgICAgIGRyYWdDbGFzczogXCJzbGlkZXJfX2RyYWctc2Nyb2xsXCIsXHJcbiAgICAgICAgLy8g0JzQvtC20LvQuNCy0ZbRgdGC0Ywg0L/QtdGA0LXRgtGP0LPRg9Cy0LDRgtC4INGB0LrRgNC+0LvQu1xyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCS0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LDQstGC0L7RltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRl1xyXG4gICAgICBpbml0OiBmYWxzZSxcclxuXHJcbiAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgb246IHtcclxuICAgICAgICAvLyDQn9C+0LTRltGPINGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGXXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgICAgc2V0U2Nyb2xsVHlwZSgpO1xyXG4gICAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g0J/QvtC00ZbRjyDQt9C80ZbQvdC4INGB0LvQsNC50LTQsFxyXG4gICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInNjcm9sbFwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDQl9C80ZbQvdCwINGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LAg0LHRgNCw0YPQt9C10YDQsFxyXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZXRTY3JvbGxUeXBlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsVHlwZSgpIHtcclxuICAgICAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJlZVwiKSkge1xyXG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZyZWVcIik7XHJcbiAgICAgICAgcGFnZVNsaWRlci5wYXJhbXMuZnJlZU1vZGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlU2xpZGVyLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1TbGlkZSA9IHBhZ2VTbGlkZXIuc2xpZGVzW2ldO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1TbGlkZUNvbnRlbnQgPSBpdGVtU2xpZGUucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uX19jb250ZW50XCIpO1xyXG5cclxuICAgICAgICBpZiAoaXRlbVNsaWRlQ29udGVudCkge1xyXG4gICAgICAgICAgY29uc3QgaXRlbVNsaWRlQ29udGVudEhlaWdodCA9IGl0ZW1TbGlkZUNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgIGlmIChpdGVtU2xpZGVDb250ZW50SGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZyZWVcIik7XHJcbiAgICAgICAgICAgIHBhZ2VTbGlkZXIucGFyYW1zLmZyZWVNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnRuU2Nyb2xsRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zY3JvbGwtZG93bl1cIik7XHJcbiAgICBjb25zdCBidG5TY3JvbGxVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zY3JvbGwtdXBdXCIpO1xyXG5cclxuICAgIGJ0blNjcm9sbERvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGFnZVNsaWRlci5zbGlkZVRvKDQpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGJ0blNjcm9sbFVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBhZ2VTbGlkZXIuc2xpZGVUbygwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBhZ2VTbGlkZXIuaW5pdCgpO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFdlbGNvbWUgc2xpZGVyXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIChmdW5jdGlvbigpIHtcclxuICAgIG5ldyBTd2lwZXIoXCJbZGF0YS13ZWxjb21lLXN3aXBlcl1cIiwge1xyXG4gICAgICAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YHQu9Cw0LnQtNGW0LIg0LTQu9GPINC/0L7QutCw0LfRg1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG5cclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogNTAwMCxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCo0LLQuNC00LrRltGB0YLRjFxyXG4gICAgICBzcGVlZDogODAwLFxyXG5cclxuICAgICAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vINCd0LDQstGW0LPQsNGG0ZbRj1xyXG4gICAgICAvLyDQkdGD0LvQtdGC0LgsINC/0L7RgtC+0YfQvdC1INC/0L7Qu9C+0LbQtdC90L3Rjywg0L/RgNC+0LPRgNC10YHQsdCw0YBcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi5zd2lwZXJfX3BhZ2luYXRpb25cIixcclxuICAgICAgICB0eXBlOiBcImJ1bGxldHNcIixcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgYnVsbGV0Q2xhc3M6IFwic3dpcGVyX19idWxsZXRcIixcclxuICAgICAgICBcImJ1bGxldEFjdGl2ZUNsYXNzXCI6IFwic3dpcGVyX19idWxsZXQtLWFjdGl2ZVwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlcl9fYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXJfX2J1dHRvbi1uZXh0JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pKCk7XHJcbn0pOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIExhbmd1YWdlXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZnVuY3Rpb24gTGFuZ3VhZ2UoYnRucykge1xyXG4gIHRoaXMuYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtbGFuZ11cIik7XHJcblxyXG4gIHRoaXMuYnRucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5MYW5ndWFnZS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgKHRoaXMuZGF0YXNldC50b2dnbGVMYW5nID09PSBcImVuXCIpXHJcbiAgICA/IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInVhXCIpXHJcbiAgICA6IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInVhXCIpO1xyXG59OyJdfQ==