chooseCategory(0)


function chooseCategory(number) {
    let categories = document.getElementsByClassName("category-container__category");

    categories[number].style.backgroundColor = "#FFA3A3"
    let title = document.getElementsByClassName("video-container__title");
    title[0].innerHTML = categories[number].innerHTML
    console.log(categories[number])
    for (let i = 0; i < categories.length; i++) {
        if (i !== number)
            categories[i].style.backgroundColor = "#FFF1F1"
    }
}