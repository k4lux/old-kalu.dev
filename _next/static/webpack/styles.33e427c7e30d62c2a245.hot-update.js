webpackHotUpdate("styles",{

/***/ "./components/organisms/cover/styles.css":
/*!***********************************************!*\
  !*** ./components/organisms/cover/styles.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cover":"_3A_lbbwI5BomnorP0KQzeO","inner":"_3fm40iwZ2JHamhZsVu4pRz","title":"_1rXDrkbCzgJm6CdoSeIYhd","subtitle":"_2fOAQL6nxxJq4ZF40VwBZh"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1569196885498");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.33e427c7e30d62c2a245.hot-update.js.map