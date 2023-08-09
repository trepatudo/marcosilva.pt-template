/**
 * Some crappy JS-only hax for theme selection
 * @author Marco Silva
 */

const linkSelector = document.getElementById("themeSelectorLink");
const themes = ["lite", "dark", "hack"];

function switchTheme() {
    let currentTheme = linkSelector.innerText;
    let nextTheme = themes.indexOf(currentTheme) + 1;
    nextTheme = nextTheme > 2 ? 0 : nextTheme;

    // Change theme
    enableTheme(themes[nextTheme]);
}

function enableTheme(theme) {
    document.getElementsByTagName("body")[0].className = "theme-" + theme;
    linkSelector.innerText = theme;
    if (localStorage) {
        localStorage.setItem("theme", theme);
    }
}


linkSelector.addEventListener("click", function (event) {
    switchTheme();
});

// Enable theme
if (localStorage && localStorage.getItem("theme")) {
    enableTheme(localStorage.getItem("theme"));
}
