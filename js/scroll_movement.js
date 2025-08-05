// ==================== VERTICAL MOVEMENT =====================

let sections = document.querySelectorAll("[data-section]");
let currentSection = 0;
let action = function (e) {
    let direction = (e.deltaY > 0) ? "bottom" : "top";
    if (direction == "bottom" && currentSection < sections.length - 1) {
        currentSection++;
    } else if (direction == "top" && currentSection > 0) {
        currentSection--;
    }
    let nextElement = sections[currentSection];
    nextElement.scrollIntoView(true);
};

document.body.addEventListener("wheel", action);

document.body.addEventListener("touchstart", function(e) {
    document.body.removeEventListener("wheel", action);
});