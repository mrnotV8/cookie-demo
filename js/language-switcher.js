function changeLanguage(lang) {
    setCookie("site-lang", lang, 7);
    location.reload();
}
