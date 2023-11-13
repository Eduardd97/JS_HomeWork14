const arrowSvg = document.getElementById("Capa_1");
const languageMenu = document.querySelector(".language");

arrowSvg.addEventListener("click", () => {
    if (languageMenu.style.display === "flex" && arrowSvg.style.fill === "brown") {
        languageMenu.style.display = "none";
        arrowSvg.style.fill = "white";
    } else {
        languageMenu.style.display = "flex";
        arrowSvg.style.fill = "brown";
    }
});