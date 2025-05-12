let fav_entreeClicked = false;

const fav_entree = document.querySelector("#fav_entree");
const fav_side = document.querySelector("#fav_side");
const fav_dessert = document.querySelector("#fav_dessert");

fav_entree.onclick = function () {
    alert("Burgers!");
    fav_entreeClicked = true;
}

fav_side.onclick = function () {
    alert("French Fries!");
}

fav_dessert.onclick = function () {
    if (fav_entreeClicked) {
        alert("I personally like a good cookie with my burger and fries, but people prefer ice cream.");
    } else {
        alert("Ice Cream!");
    }
}
