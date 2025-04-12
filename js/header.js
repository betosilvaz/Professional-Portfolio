let hero = document.querySelector("#hero");
let isExecuting = false;

document.addEventListener("scroll", function(e) {
    if(isExecuting) return;

    isExecuting = true;

    let elementData = hero.getBoundingClientRect();
    let header = document.querySelector(".page-header");
    if(elementData.top <= -10) {
        header.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";
    } else {
        header.style.boxShadow = "none";
    }

    setTimeout(function() {
        isExecuting = false;
    }, 1);
})