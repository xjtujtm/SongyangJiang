(function () {
  var STORAGE_KEY = "site-lang";
  var DEFAULT_LANG = "zh";

  function getInitialLang() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "zh" || saved === "en") return saved;
    return (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : DEFAULT_LANG;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-zh]").forEach(function (el) {
      var text = el.getAttribute("data-" + lang);
      if (text !== null) el.textContent = text;
    });

    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = lang === "zh" ? "EN" : "中文";

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function toggleLang() {
    var next = document.documentElement.lang === "zh" ? "en" : "zh";
    applyLang(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getInitialLang());

    var btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", toggleLang);

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  });
})();
