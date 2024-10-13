const hamburger = document.querySelector(".c-header__menu");
const menu = document.querySelector(".c-menu");

hamburger.addEventListener("pointerdown", (e) => {
    if (menu.classList.contains("js-hidden")) {
        hamburger.src = "images/icon-close.svg";
        document.body.style.overflow = "hidden";
    }
    else {
        hamburger.src = "images/icon-hamburger.svg";
        document.body.style.overflow = "";
    }
    menu.classList.toggle("js-hidden");
})

window.addEventListener("resize", (e) => {
    hamburger.src = "images/icon-hamburger.svg";
    document.body.style.overflow = "";
    menu.classList.add("js-hidden");
})