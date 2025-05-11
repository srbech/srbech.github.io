let fav_entreeClicked = false;

const fav_entree = document.querySelector("#fav_entree");
const fav_side = document.querySelector("#fav_side");
const fav_desert = document.querySelector("#fav_desert");

fav_entree.onclick = function () {
    alert("Oh no, fun fact 2 was clicked!");
    funfact_oneClicked = true;
}

fav_side.onclick = function () {
    alert("I almost went with an ice cream truck instead.");
}

fav_desert.onclick = function () {
    if (fav_entreeClicked = true) {
        alert("Oops! Fun fact 1 was clicked first!");
    } else {
        alert("I think food trucks are great.");
    }
}