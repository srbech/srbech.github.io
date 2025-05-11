const first_name = document.querySelector("first_name");
const submit = document.querySelector("submit");
const clear = document.querySelector("#clear");

first_name.oninput = function () {
    heading.innerHTML = first_name.value + "'s Order Form"
}

submit.onclick = function () {
    alert("Thank you for ordering!");
}

clear.onclick = function () {
    alert("All inputs have been cleared.");
}
