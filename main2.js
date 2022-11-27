let login_btn;
let userAcc;
let userDetails;
let loggedUser;
let logout_btn;

login_btn = document.getElementById("Login-btn")
login_btn.onclick = Login

logout_btn = document.getElementById("logout-btn");


if(sessionStorage.loggedUser !== "undefined")
{
    userAcc = sessionStorage.loggedUser;

    if(userAcc !== undefined)
    {
        login_btn.disabled = true;
        document.getElementById("welcome").innerHTML = "Welcome " +  userAcc
    }

    else
    {
        document.getElementById("welcome").innerHTML = "Sign In"
        logout_btn.disabled = true;
    }
}

function Login()
{
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if(username.length === 0 || password.length === 0)
    {
        alert("Please fill out all fields");
        return false;
    }

    if(localStorage[username] === undefined)
    {
        alert("Username does not exist");
        return false;
    }

    else
    {
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
