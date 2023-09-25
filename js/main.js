"use strict";

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Resize Browser Window
   */
  window.addEventListener("resize", function () {
    document.querySelectorAll(".opened").forEach(function (el) {
      el.classList.remove("opened");
    });
  });

  /**
   * Example
   */
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
});
"use strict";

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
//# sourceMappingURL=main.js.map
