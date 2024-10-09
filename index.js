// Logs things to the console.
// console.log("Hello there!")

// I want to register a click event on the button.
// Step 1: Create a reference to the button.
// This is done by using a method called querySelector.
// const button = document.querySelector(".btn"); // This will create a reference to the first element with the class ".btn"
// console.log(button);

// Step 2: Register and event listener on the button.

// Two arguments here, first one is the name of the event as a string. The second one is the callback function that executes when the event is triggered.
// button.addEventListener("click", function (){
//     // console.log("Button clicked");
// });

// Whenever I click on the button, the function above will run and execute its code.

// Step 3: Test the click event out in the browser.

// ############ Let's get information from the input fields ############
const button = document.querySelector(".btn");
const usernameInput = document.querySelector("#username");
const addressInput = document.querySelector("#address");
const emailInput = document.querySelector("#email");
const telephoneInput = document.querySelector("#telephone");

button.addEventListener("click", function(){
    const username = usernameInput.value;
    const address = addressInput.value;
    const email = emailInput.value;
    const tel = telephoneInput.value;

    const information = {
        username: username,
        address: address,
        email: email,
        tel: tel
    };

    console.log(information)
});