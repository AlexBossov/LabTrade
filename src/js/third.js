
function chooseCategory(number) {
    let categories = document.getElementsByClassName("category-container__category");

    categories[number].style.backgroundColor = "#FFA3A3"
    for (let i = 0; i < categories.length; i++) {
        if (i !== number)
            categories[i].style.backgroundColor = "#FFF1F1"
    }
}