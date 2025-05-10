let funfact_oneClicked = false;
let funfact_twoClicked = false;

const funfact_one = document.querySelector("#funfact_one");
const funfact_two = document.querySelector("#funfact_two");
const funfact_three = document.querySelector("#funfact_three");

funfact_one.onclick = function () {

        if (funfact_twoClicked) {
            alert("Oh no, fun fact 2 was clicked!");
        } else {
            alert("I think food trucks are great.");
        }
        funfact_oneClicked = true;
    }

funfact_two.onclick = function () {
    alert("I almost went with an ice cream truck instead.");
    funfact_twoClicked = true;
}

funfact_three.onclick = function () {
    if (funfact_oneClicked) {
        alert("Oops! Fun fact 1 was clicked first!");
    } else {
        alert("I think food trucks are great.");
    }
}