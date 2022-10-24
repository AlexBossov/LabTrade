underLineNav();


function underLineNav() {
    let navs = document.getElementsByClassName("header__nav__item");

    if (window.location.pathname === "/LabTrade/src/html/index.html") {
        navs[0].classList.add("header__nav__item--underline")
        navs[0].classList.remove("header__nav__item")
    }

    if (window.location.pathname === "/LabTrade/src/html/labs.html") {
        navs[1].classList.add("header__nav__item--underline")
        navs[1].classList.remove("header__nav__item")
    }

    if (window.location.pathname === "/LabTrade/src/html/lectures.html") {
        navs[2].classList.add("header__nav__item--underline")
        navs[2].classList.remove("header__nav__item")
    }
}