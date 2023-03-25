/* RegEXP to define password strength (At least 8 characters, must have at least 1 uppercase, 1 lowercase
   and 1 special character
 */
let passwordCheck = RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
let reg_btn;
let passwordInput;

window.onload = function () /* call all functions when the window has been loaded */
{
    reg_btn = document.getElementById("Reg-btn");

    reg_btn.onclick = Register;

    reg_btn.disabled = true; /* Register button disabled by default */

    passwordInput = document.getElementById("reg-password");

    passwordInput.onkeyup = checkRegistrationPassword;
}

function checkRegistrationPassword() /* Check password strength */
{

    let password1 = document.getElementById("reg-password").value;
    let result = passwordCheck.test(password1);

    reg_btn.disabled = !result; /* Register button remains disabled until password criteria has been met */

}

function Register() /* Handle inputs and error handling */
{
    var userDetails = {};
    userDetails.name = document.getElementById("reg-name").value;
    userDetails.email = document.getElementById("reg-email").value;
    userDetails.username = document.getElementById("reg-username").value;
    userDetails.password = document.getElementById("reg-password").value;

    /* Check if any field is left empty */
    if(userDetails.name.length === 0 || userDetails.email.length === 0 ||
        userDetails.username.length === 0 || userDetails.password.length === 0)
    {
        alert("Please fill out all fields");
        reg_btn.disabled = true;

    }
    /* Check if username exists in localstorage */
    else if(localStorage.getItem(userDetails.username) !== null)
    {
        alert("Username already taken");
        return false
    }

    /* Create user account and save details to localstorage */
    else
    {
        userDetails.highscore = 0;

        localStorage[userDetails.username] = JSON.stringify(userDetails);

        alert("Registration Successful");

    }
}
