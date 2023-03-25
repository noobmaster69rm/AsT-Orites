let login_btn;
let userAcc;
let userDetails;
let loggedUser;
let logout_btn;

login_btn = document.getElementById("Login-btn")
login_btn.onclick = Login

logout_btn = document.getElementById("logout-btn");

/* Check if a user is signed in */
if(sessionStorage.loggedUser !== "undefined")
{
    userAcc = sessionStorage.loggedUser;

    if(userAcc !== undefined)
    {
        document.getElementById("welcome").innerHTML = "Welcome " +  userAcc
    }

    else
    {
        document.getElementById("welcome").innerHTML = "Sign In"
        logout_btn.disabled = true;
    }
}

function Login() /* Handle inputs and error handling */
{
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    /* Check if any field is left empty */
    if(username.length === 0 || password.length === 0)
    {
        alert("Please fill out all fields");
        return false;
    }

    /* Check if username exists in localstorage */
    if(localStorage[username] === undefined)
    {
        alert("Username does not exist");
        return false;
    }

    else
    {
        /* Get username and check if password corresponds */
        userDetails =  JSON.parse(localStorage[username]);


        if(password === userDetails.password)
        {
            sessionStorage.loggedUser = userDetails.username;
            alert("Login Successful");
        }

        else
        {
            alert("Incorrect Username and Password combination");
        }

    }
}
