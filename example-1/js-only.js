const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

// In this function the params will be concatenate, because both of them are string
function add(num1, num2) {
    return num1 + num2;
}

// It's necesary to change the type of the param to numbers
function addTwo(num1, num2) {
    return Number(num1) + Number(num2);
}

button.addEventListener("click", function () {
    console.log(addTwo(input1.value, input2.value));
});
