const first_name = document.querySelector("#first-name");
const submit = document.querySelector("#submit");
const clear = document.querySelector("#clear");
const heading = document.querySelector("#form_heading");

first_name.oninput = function () {
    heading.innerHTML = first_name.value + "'s Order Form";
}

submit.onclick = function (event) {
    event.preventDefault();
    alert("Thank you for ordering!");
}

clear.onclick = function (event) {
    event.preventDefault();
    alert("All inputs have been cleared.");
    document.querySelector("form").reset();
}