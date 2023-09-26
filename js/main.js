"use strict";

// const App = {
//   productModal: null,
//   testModal: null,
// };

document.addEventListener('DOMContentLoaded', function () {
  // AOS.init({
  //   delay: 300
  // });

  /**
   * Resize Browser Window
   */

  window.addEventListener('resize', function () {
    document.querySelectorAll('.opened').forEach(function (el) {
      el.classList.remove('opened');
    });
  });

  /*******************************
   * Example
   ******************************/
  // (function() {
  //   const example = document.querySelector('.example');
  //
  //   if (!example) return;
  //   new Example(opt);
  // })();

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
          setScrollType();
          mainContainer.classList.add("loaded");
        },
        // Подія зміни слайда
        slideChange: function slideChange() {},
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
    pageSlider.init();
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
  this.dataset.toggleLang === "ua" ? document.body.classList.remove("en") : document.body.classList.add("en");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJsYXlvdXQvc2lkZWJhci9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJidG5zTGFuZyIsImxlbmd0aCIsIkxhbmd1YWdlIiwibWFpbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlU2xpZGVyIiwiU3dpcGVyIiwid3JhcHBlckNsYXNzIiwic2xpZGVDbGFzcyIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJwYXJhbGxheCIsImtleWJvYXJkIiwiZW5hYmxlIiwib25seUluVmlld3BvcnQiLCJwYWdlVXBEb3duIiwibW91c2V3aGVlbCIsInNlbnNpdGl2aXR5Iiwid2F0Y2hPdmVyZmxvdyIsInNwZWVkIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwicGFnaW5hdGlvbiIsInR5cGUiLCJjbGlja2FibGUiLCJidWxsZXRDbGFzcyIsInNjcm9sbGJhciIsImRyYWdDbGFzcyIsImRyYWdnYWJsZSIsImluaXQiLCJvbiIsInNldFNjcm9sbFR5cGUiLCJhZGQiLCJzbGlkZUNoYW5nZSIsInJlc2l6ZSIsImNvbnRhaW5zIiwicGFyYW1zIiwiZnJlZU1vZGUiLCJpIiwic2xpZGVzIiwiaXRlbVNsaWRlIiwiaXRlbVNsaWRlQ29udGVudCIsIml0ZW1TbGlkZUNvbnRlbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpbm5lckhlaWdodCIsImJ0bnMiLCJfdGhpcyIsIml0ZW0iLCJ0b2dnbGUiLCJwcm90b3R5cGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhc2V0IiwidG9nZ2xlTGFuZyIsImJvZHkiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLFFBQUEsQ0FBQUMsZ0JBQUEsQ0FBQSxrQkFB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Q0E5RCxRQUFBLENBQUErRCxJQUFBLENBQUF6RCxTQUFBLENBQUFDLE1BQUEsQ0FBQSxJQUFBLENBQUEsR0FDQVAsUUFBQSxDQUFBK0QsSUFBQSxDQUFBekQsU0FBQSxDQUFBbUMsR0FBQSxDQUFBLElBQUEsQ0FBQTtBQUNBLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEFwcCA9IHtcclxuLy8gICBwcm9kdWN0TW9kYWw6IG51bGwsXHJcbi8vICAgdGVzdE1vZGFsOiBudWxsLFxyXG4vLyB9O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAvLyBBT1MuaW5pdCh7XHJcbiAgLy8gICBkZWxheTogMzAwXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2l6ZSBCcm93c2VyIFdpbmRvd1xyXG4gICAqL1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW5lZCcpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKVxyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBFeGFtcGxlXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvLyAoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICBjb25zdCBleGFtcGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4YW1wbGUnKTtcclxuICAvL1xyXG4gIC8vICAgaWYgKCFleGFtcGxlKSByZXR1cm47XHJcbiAgLy8gICBuZXcgRXhhbXBsZShvcHQpO1xyXG4gIC8vIH0pKCk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICogTGFuZ3VhZ2VcclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYnRuc0xhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGUtbGFuZ10nKTtcclxuXHJcbiAgICBpZiAoYnRuc0xhbmcubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgbmV3IExhbmd1YWdlKGJ0bnNMYW5nKTtcclxuICB9KSgpO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFBhZ2UgU2xpZGVyXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VfX21haW5cIik7XHJcblxyXG4gICAgY29uc3QgcGFnZVNsaWRlciA9IG5ldyBTd2lwZXIoXCJbZGF0YS1zd2lwZXJdXCIsIHtcclxuICAgICAgLy8g0KHQstC+0Zcg0LrQu9Cw0YHQuFxyXG4gICAgICB3cmFwcGVyQ2xhc3M6IFwic2xpZGVyX193cmFwcGVyXCIsXHJcbiAgICAgIHNsaWRlQ2xhc3M6IFwic2VjdGlvblwiLFxyXG5cclxuICAgICAgLy8g0JLQtdGA0YLQuNC60LDQu9GM0L3QuNC5INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG5cclxuICAgICAgLy8g0JrRltC70YzQutGW0YHRgtGMINGB0LvQsNC50LTRltCyINC00LvRjyDQv9C+0LrQsNC30YNcclxuICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblxyXG4gICAgICAvLyDQktC80LjQutCw0ZTQvNC+INC/0LDRgNCw0LvQsNC60YFcclxuICAgICAgcGFyYWxsYXg6IHRydWUsXHJcblxyXG4gICAgICAvLyDQmtC10YDRg9Cy0LDQvdC90Y8g0LrQu9Cw0LLRltCw0YLRg9GA0L7RjlxyXG4gICAgICBrZXlib2FyZDoge1xyXG4gICAgICAgIC8vINCj0LLRltC80LrQvdGD0YLQuC/QktC40LzQutC90YPRgtC4XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIC8vINCj0LLRltC80LrQvdGD0YLQuC/QktC40LzQutC90YPRgtC4XHJcbiAgICAgICAgLy8g0YLRltC70YzQutC4INC60L7Qu9C4INGB0LvQsNC50LTQtdGAXHJcbiAgICAgICAgLy8g0LIg0LzQtdC20LDRhSDQsifRjtC/0L7RgNGC0LBcclxuICAgICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcclxuICAgICAgICAvLyDQo9Cy0ZbQvNC60L3Rg9GC0Lgv0JLQuNC80LrQvdGD0YLQuFxyXG4gICAgICAgIC8vINC60LXRgNGD0LLQsNC90L3RjyDQutC70LDQstGW0YjQsNC80LhcclxuICAgICAgICAvLyBwYWdlVXAsIHBhZ2VEb3duXHJcbiAgICAgICAgcGFnZVVwRG93bjogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCa0LXRgNGD0LLQsNC90L3RjyDQutC+0LvQtdGB0L7QvCDQvNC40YjRllxyXG4gICAgICBtb3VzZXdoZWVsOiB7XHJcbiAgICAgICAgLy8g0KfRg9GC0LvQuNCy0ZbRgdGC0Ywg0LrQvtC70LXRgdCwINC80LjRiNGWXHJcbiAgICAgICAgc2Vuc2l0aXZpdHk6IDEsXHJcbiAgICAgICAgLy8g0JrQu9Cw0YEg0L7QsSfRlNC60YLQsCDQvdCwINGP0LrQvtC80YNcclxuICAgICAgICAvLyDQsdGD0LTQtSDQstGW0LTQv9GA0LDRhtGM0L7QstGD0LLQsNGC0Lgg0L/RgNC+0LrRgNGD0YLQutCwINC80LjRiNC10Y5cclxuICAgICAgICAvLyBldmVudHNUYXJnZXQ6IFwiLmltYWdlLXNsaWRlclwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQktGW0LTQutC70Y7Rh9C10L3QvdGPINGE0YPQvdC60YbRltC+0L3QsNC70LBcclxuICAgICAgLy8g0Y/QutGJ0L4g0YHQu9Cw0LnQtNGW0LIg0LzQtdC90YzRiCDQvdGW0LYg0L/QvtGC0YDRltCx0L3QvlxyXG4gICAgICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cclxuICAgICAgLy8g0KjQstC40LTQutGW0YHRgtGMXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcblxyXG4gICAgICAvLyDQntC90L7QstC40YLRjCDRgdCy0LDQudC/0LXRgFxyXG4gICAgICAvLyDQv9GA0Lgg0LfQvNGW0L3RliDQtdC70LXQvNC10L3RgtGW0LIg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuXHJcbiAgICAgIC8vINCe0L3QvtCy0LjRgtGMINGB0LvQsNC50LTQtdGAXHJcbiAgICAgIC8vINC/0YDQuCDQt9C80ZbQvdGWINCx0LDRgtGM0LrRltCy0YHRjNC60LjRhVxyXG4gICAgICAvLyDQtdC70LzQtdC90YLRltCyINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblxyXG4gICAgICAvLyDQntC90L7QstC40YLRjCDRgdC70LDQudC00LXRgFxyXG4gICAgICAvLyDQv9GA0Lgg0LfQvNGW0L3RliDQtNC+0YfQtdGA0L3RltGFXHJcbiAgICAgIC8vINC10LvQtdC80LXQvdGC0ZbQsiDRgdC70LDQudC00LBcclxuICAgICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXHJcblxyXG4gICAgICAvLyDQndCw0LLRltCz0LDRhtGW0Y9cclxuICAgICAgLy8g0JHRg9C70LXRgtC4LCDQv9C+0YLQvtGH0L3QtSDQv9C+0LvQvtC20LXQvdC90Y8sINC/0YDQvtCz0YDQtdGB0LHQsNGAXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogXCIuc2xpZGVyX19wYWdpbmF0aW9uXCIsXHJcbiAgICAgICAgdHlwZTogXCJidWxsZXRzXCIsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIGJ1bGxldENsYXNzOiBcInNsaWRlcl9fYnVsbGV0XCIsXHJcbiAgICAgICAgXCJidWxsZXRBY3RpdmVDbGFzc1wiOiBcInNsaWRlcl9fYnVsbGV0LS1hY3RpdmVcIlxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu1xyXG4gICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICBlbDogXCIuc2xpZGVyX19zY3JvbGxcIixcclxuICAgICAgICBkcmFnQ2xhc3M6IFwic2xpZGVyX19kcmFnLXNjcm9sbFwiLFxyXG4gICAgICAgIC8vINCc0L7QttC70LjQstGW0YHRgtGMINC/0LXRgNC10YLRj9Cz0YPQstCw0YLQuCDRgdC60YDQvtC70LtcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQktGW0LTQutC70Y7Rh9C10L3QvdGPINCw0LLRgtC+0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0ZdcclxuICAgICAgaW5pdDogZmFsc2UsXHJcblxyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7XHJcbiAgICAgICAgLy8g0J/QvtC00ZbRjyDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRl1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2V0U2Nyb2xsVHlwZSgpO1xyXG4gICAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vINCf0L7QtNGW0Y8g0LfQvNGW0L3QuCDRgdC70LDQudC00LBcclxuICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24oKSB7fSxcclxuXHJcbiAgICAgICAgLy8g0JfQvNGW0L3QsCDRgNC+0LfQvNGW0YDRgyDQstGW0LrQvdCwINCx0YDQsNGD0LfQtdGA0LBcclxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2V0U2Nyb2xsVHlwZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbFR5cGUoKSB7XHJcbiAgICAgIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImZyZWVcIikpIHtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmcmVlXCIpO1xyXG4gICAgICAgIHBhZ2VTbGlkZXIucGFyYW1zLmZyZWVNb2RlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZVNsaWRlci5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtU2xpZGUgPSBwYWdlU2xpZGVyLnNsaWRlc1tpXTtcclxuICAgICAgICBjb25zdCBpdGVtU2xpZGVDb250ZW50ID0gaXRlbVNsaWRlLnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbl9fY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW1TbGlkZUNvbnRlbnQpIHtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1TbGlkZUNvbnRlbnRIZWlnaHQgPSBpdGVtU2xpZGVDb250ZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICBpZiAoaXRlbVNsaWRlQ29udGVudEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmcmVlXCIpO1xyXG4gICAgICAgICAgICBwYWdlU2xpZGVyLnBhcmFtcy5mcmVlTW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTbGlkZXIuaW5pdCgpO1xyXG4gIH0pKCk7XHJcbn0pOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIExhbmd1YWdlXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZnVuY3Rpb24gTGFuZ3VhZ2UoYnRucykge1xyXG4gIHRoaXMuYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtbGFuZ11cIik7XHJcblxyXG4gIHRoaXMuYnRucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5MYW5ndWFnZS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgKHRoaXMuZGF0YXNldC50b2dnbGVMYW5nID09PSBcInVhXCIpXHJcbiAgICA/IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImVuXCIpXHJcbiAgICA6IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImVuXCIpO1xyXG59OyJdfQ==