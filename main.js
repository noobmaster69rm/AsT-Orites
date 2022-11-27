let passwordCheck = RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
let reg_btn;
let passwordInput;

window.onload = function ()
{
    reg_btn = document.getElementById("Reg-btn");

    reg_btn.onclick = Register;

    reg_btn.disabled = true;

    passwordInput = document.getElementById("reg-password");

    passwordInput.onkeyup = checkRegistrationPassword;
}

function checkRegistrationPassword()
{

    let password1 = document.getElementById("reg-password").value;
    let result = passwordCheck.test(password1);

    reg_btn.disabled = !result;

}

function Register()
{
    var userDetails = {};
    userDetails.name = document.getElementById("reg-name").value;
    userDetails.email = document.getElementById("reg-email").value;
    userDetails.username = document.getElementById("reg-username").value;
    userDetails.password = document.getElementById("reg-password").value;


    if(userDetails.name.value === "" || userDetails.email.value === "" ||
        userDetails.username.value === "" || userDetails.password.value === "")
    {
        alert("Please fill out all fields");
        reg_btn.disabled = true;

    }

    else if(localStorage.getItem(userDetails.username) !== null)
    {
        alert("Username already taken");
        return false
    }

    else if(localStorage.getItem(userDetails.email) !== null)
    {
        alert("Email already have an account registered to it")
        return false
    }

    else
    {
        userDetails.highscore = 0;

        localStorage[userDetails.username] = JSON.stringify(userDetails);

        alert("Registration Successful");

    }
}
