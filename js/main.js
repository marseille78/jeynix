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
    btnScrollDown.addEventListener("click", function () {
      pageSlider.slideTo(4);
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
  this.dataset.toggleLang === "ua" ? document.body.classList.remove("en") : document.body.classList.add("en");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJsYXlvdXQvc2lkZWJhci9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJidG5zTGFuZyIsImxlbmd0aCIsIkxhbmd1YWdlIiwibWFpbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlU2xpZGVyIiwiU3dpcGVyIiwid3JhcHBlckNsYXNzIiwic2xpZGVDbGFzcyIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJwYXJhbGxheCIsImtleWJvYXJkIiwiZW5hYmxlIiwib25seUluVmlld3BvcnQiLCJwYWdlVXBEb3duIiwibW91c2V3aGVlbCIsInNlbnNpdGl2aXR5Iiwid2F0Y2hPdmVyZmxvdyIsInNwZWVkIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwicGFnaW5hdGlvbiIsInR5cGUiLCJjbGlja2FibGUiLCJidWxsZXRDbGFzcyIsInNjcm9sbGJhciIsImRyYWdDbGFzcyIsImRyYWdnYWJsZSIsImluaXQiLCJvbiIsInNldFNjcm9sbFR5cGUiLCJhZGQiLCJzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQiLCJib2R5Iiwic2xpZGVDaGFuZ2UiLCJyZXNpemUiLCJjb250YWlucyIsInBhcmFtcyIsImZyZWVNb2RlIiwiaSIsInNsaWRlcyIsIml0ZW1TbGlkZSIsIml0ZW1TbGlkZUNvbnRlbnQiLCJpdGVtU2xpZGVDb250ZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJidG5TY3JvbGxEb3duIiwic2xpZGVUbyIsImxvb3AiLCJuYXZpZ2F0aW9uIiwicHJldkVsIiwibmV4dEVsIiwiYnRucyIsIl90aGlzIiwiaXRlbSIsInRvZ2dsZSIsInByb3RvdHlwZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIs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SUFBQSxDQUFBO0FBQ0EsQ0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgQXBwID0ge1xyXG4vLyAgIHByb2R1Y3RNb2RhbDogbnVsbCxcclxuLy8gICB0ZXN0TW9kYWw6IG51bGwsXHJcbi8vIH07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vIEFPUy5pbml0KHtcclxuICAvLyAgIGRlbGF5OiAzMDBcclxuICAvLyB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVzaXplIEJyb3dzZXIgV2luZG93XHJcbiAgICovXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3BlbmVkJylcclxuICAgICAgLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5lZCcpXHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEV4YW1wbGVcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8vIChmdW5jdGlvbigpIHtcclxuICAvLyAgIGNvbnN0IGV4YW1wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhhbXBsZScpO1xyXG4gIC8vXHJcbiAgLy8gICBpZiAoIWV4YW1wbGUpIHJldHVybjtcclxuICAvLyAgIG5ldyBFeGFtcGxlKG9wdCk7XHJcbiAgLy8gfSkoKTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgKiBMYW5ndWFnZVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBidG5zTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS1sYW5nXScpO1xyXG5cclxuICAgIGlmIChidG5zTGFuZy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBuZXcgTGFuZ3VhZ2UoYnRuc0xhbmcpO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICogUGFnZSBTbGlkZXJcclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbWFpblwiKTtcclxuXHJcbiAgICBjb25zdCBwYWdlU2xpZGVyID0gbmV3IFN3aXBlcihcIltkYXRhLXN3aXBlcl1cIiwge1xyXG4gICAgICAvLyDQodCy0L7RlyDQutC70LDRgdC4XHJcbiAgICAgIHdyYXBwZXJDbGFzczogXCJzbGlkZXJfX3dyYXBwZXJcIixcclxuICAgICAgc2xpZGVDbGFzczogXCJzZWN0aW9uXCIsXHJcblxyXG4gICAgICAvLyDQktC10YDRgtC40LrQsNC70YzQvdC40Lkg0YHQu9Cw0LnQtNC10YBcclxuICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXHJcblxyXG4gICAgICAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YHQu9Cw0LnQtNGW0LIg0LTQu9GPINC/0L7QutCw0LfRg1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHJcbiAgICAgIC8vINCS0LzQuNC60LDRlNC80L4g0L/QsNGA0LDQu9Cw0LrRgVxyXG4gICAgICBwYXJhbGxheDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vINCa0LXRgNGD0LLQsNC90L3RjyDQutC70LDQstGW0LDRgtGD0YDQvtGOXHJcbiAgICAgIGtleWJvYXJkOiB7XHJcbiAgICAgICAgLy8g0KPQstGW0LzQutC90YPRgtC4L9CS0LjQvNC60L3Rg9GC0LhcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgLy8g0KPQstGW0LzQutC90YPRgtC4L9CS0LjQvNC60L3Rg9GC0LhcclxuICAgICAgICAvLyDRgtGW0LvRjNC60Lgg0LrQvtC70Lgg0YHQu9Cw0LnQtNC10YBcclxuICAgICAgICAvLyDQsiDQvNC10LbQsNGFINCyJ9GO0L/QvtGA0YLQsFxyXG4gICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgIC8vINCj0LLRltC80LrQvdGD0YLQuC/QktC40LzQutC90YPRgtC4XHJcbiAgICAgICAgLy8g0LrQtdGA0YPQstCw0L3QvdGPINC60LvQsNCy0ZbRiNCw0LzQuFxyXG4gICAgICAgIC8vIHBhZ2VVcCwgcGFnZURvd25cclxuICAgICAgICBwYWdlVXBEb3duOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0JrQtdGA0YPQstCw0L3QvdGPINC60L7Qu9C10YHQvtC8INC80LjRiNGWXHJcbiAgICAgIG1vdXNld2hlZWw6IHtcclxuICAgICAgICAvLyDQp9GD0YLQu9C40LLRltGB0YLRjCDQutC+0LvQtdGB0LAg0LzQuNGI0ZZcclxuICAgICAgICBzZW5zaXRpdml0eTogMSxcclxuICAgICAgICAvLyDQmtC70LDRgSDQvtCxJ9GU0LrRgtCwINC90LAg0Y/QutC+0LzRg1xyXG4gICAgICAgIC8vINCx0YPQtNC1INCy0ZbQtNC/0YDQsNGG0YzQvtCy0YPQstCw0YLQuCDQv9GA0L7QutGA0YPRgtC60LAg0LzQuNGI0LXRjlxyXG4gICAgICAgIC8vIGV2ZW50c1RhcmdldDogXCIuaW1hZ2Utc2xpZGVyXCJcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCS0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YTRg9C90LrRhtGW0L7QvdCw0LvQsFxyXG4gICAgICAvLyDRj9C60YnQviDRgdC70LDQudC00ZbQsiDQvNC10L3RjNGIINC90ZbQtiDQv9C+0YLRgNGW0LHQvdC+XHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblxyXG4gICAgICAvLyDQqNCy0LjQtNC60ZbRgdGC0YxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuXHJcbiAgICAgIC8vINCe0L3QvtCy0LjRgtGMINGB0LLQsNC50L/QtdGAXHJcbiAgICAgIC8vINC/0YDQuCDQt9C80ZbQvdGWINC10LvQtdC80LXQvdGC0ZbQsiDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG5cclxuICAgICAgLy8g0J7QvdC+0LLQuNGC0Ywg0YHQu9Cw0LnQtNC10YBcclxuICAgICAgLy8g0L/RgNC4INC30LzRltC90ZYg0LHQsNGC0YzQutGW0LLRgdGM0LrQuNGFXHJcbiAgICAgIC8vINC10LvQvNC10L3RgtGW0LIg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHJcbiAgICAgIC8vINCe0L3QvtCy0LjRgtGMINGB0LvQsNC50LTQtdGAXHJcbiAgICAgIC8vINC/0YDQuCDQt9C80ZbQvdGWINC00L7Rh9C10YDQvdGW0YVcclxuICAgICAgLy8g0LXQu9C10LzQtdC90YLRltCyINGB0LvQsNC50LTQsFxyXG4gICAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcclxuXHJcbiAgICAgIC8vINCd0LDQstGW0LPQsNGG0ZbRj1xyXG4gICAgICAvLyDQkdGD0LvQtdGC0LgsINC/0L7RgtC+0YfQvdC1INC/0L7Qu9C+0LbQtdC90L3Rjywg0L/RgNC+0LPRgNC10YHQsdCw0YBcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi5zbGlkZXJfX3BhZ2luYXRpb25cIixcclxuICAgICAgICB0eXBlOiBcImJ1bGxldHNcIixcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgYnVsbGV0Q2xhc3M6IFwic2xpZGVyX19idWxsZXRcIixcclxuICAgICAgICBcImJ1bGxldEFjdGl2ZUNsYXNzXCI6IFwic2xpZGVyX19idWxsZXQtLWFjdGl2ZVwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQodC60YDQvtC7XHJcbiAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgIGVsOiBcIi5zbGlkZXJfX3Njcm9sbFwiLFxyXG4gICAgICAgIGRyYWdDbGFzczogXCJzbGlkZXJfX2RyYWctc2Nyb2xsXCIsXHJcbiAgICAgICAgLy8g0JzQvtC20LvQuNCy0ZbRgdGC0Ywg0L/QtdGA0LXRgtGP0LPRg9Cy0LDRgtC4INGB0LrRgNC+0LvQu1xyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCS0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LDQstGC0L7RltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRl1xyXG4gICAgICBpbml0OiBmYWxzZSxcclxuXHJcbiAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgb246IHtcclxuICAgICAgICAvLyDQn9C+0LTRltGPINGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGXXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZXRTY3JvbGxUeXBlKCk7XHJcbiAgICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbFwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDQn9C+0LTRltGPINC30LzRltC90Lgg0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vINCX0LzRltC90LAg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsCDQsdGA0LDRg9C30LXRgNCwXHJcbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNldFNjcm9sbFR5cGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxUeXBlKCkge1xyXG4gICAgICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJmcmVlXCIpKSB7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZnJlZVwiKTtcclxuICAgICAgICBwYWdlU2xpZGVyLnBhcmFtcy5mcmVlTW9kZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VTbGlkZXIuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbVNsaWRlID0gcGFnZVNsaWRlci5zbGlkZXNbaV07XHJcbiAgICAgICAgY29uc3QgaXRlbVNsaWRlQ29udGVudCA9IGl0ZW1TbGlkZS5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fX2NvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGlmIChpdGVtU2xpZGVDb250ZW50KSB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtU2xpZGVDb250ZW50SGVpZ2h0ID0gaXRlbVNsaWRlQ29udGVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgaWYgKGl0ZW1TbGlkZUNvbnRlbnRIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnJlZVwiKTtcclxuICAgICAgICAgICAgcGFnZVNsaWRlci5wYXJhbXMuZnJlZU1vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidG5TY3JvbGxEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNjcm9sbC1kb3duXVwiKTtcclxuXHJcbiAgICBidG5TY3JvbGxEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHBhZ2VTbGlkZXIuc2xpZGVUbyg0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBhZ2VTbGlkZXIuaW5pdCgpO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFdlbGNvbWUgc2xpZGVyXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIChmdW5jdGlvbigpIHtcclxuICAgIG5ldyBTd2lwZXIoXCJbZGF0YS13ZWxjb21lLXN3aXBlcl1cIiwge1xyXG4gICAgICAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YHQu9Cw0LnQtNGW0LIg0LTQu9GPINC/0L7QutCw0LfRg1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG5cclxuICAgICAgLy8g0KjQstC40LTQutGW0YHRgtGMXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcblxyXG4gICAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgICAgLy8g0J3QsNCy0ZbQs9Cw0YbRltGPXHJcbiAgICAgIC8vINCR0YPQu9C10YLQuCwg0L/QvtGC0L7Rh9C90LUg0L/QvtC70L7QttC10L3QvdGPLCDQv9GA0L7Qs9GA0LXRgdCx0LDRgFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6IFwiLnN3aXBlcl9fcGFnaW5hdGlvblwiLFxyXG4gICAgICAgIHR5cGU6IFwiYnVsbGV0c1wiLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICBidWxsZXRDbGFzczogXCJzd2lwZXJfX2J1bGxldFwiLFxyXG4gICAgICAgIFwiYnVsbGV0QWN0aXZlQ2xhc3NcIjogXCJzd2lwZXJfX2J1bGxldC0tYWN0aXZlXCJcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyX19idXR0b24tcHJldicsXHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlcl9fYnV0dG9uLW5leHQnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSkoKTtcclxufSk7IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogTGFuZ3VhZ2VcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5mdW5jdGlvbiBMYW5ndWFnZShidG5zKSB7XHJcbiAgdGhpcy5idG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZS1sYW5nXVwiKTtcclxuXHJcbiAgdGhpcy5idG5zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbkxhbmd1YWdlLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAodGhpcy5kYXRhc2V0LnRvZ2dsZUxhbmcgPT09IFwidWFcIilcclxuICAgID8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZW5cIilcclxuICAgIDogZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZW5cIik7XHJcbn07Il19