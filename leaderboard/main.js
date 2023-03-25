let localStorageSize = Object.keys(localStorage).length;

/* Array to store username and high score */
var details = [];

/* Create object of user's username and high score */
for(let i = localStorageSize - 1; i > 0; i--)
{
    let key = Object.keys(localStorage)[i];
    let user = JSON.parse(localStorage[key]);
    let username = user.username;
    let score = user.highscore;

    details.push({username, score});
}

for(let i = details.length - 1; i > 0; i--)
{
    for(let j = 1; j <= i; j++)
    {
        /* Rank user with the highest score top to bottom */
        if(details[j-1].score < details[j].score)
        {
            let tmp = details[j - 1];
            details[j - 1] = details[j];
            details[j] = tmp;
        }
    }
}

function loadLeaderboard()
{
    /* Create header and rows for the username and the scores */
    let row = "<table><tr><th><h3>Username</h3></th><th><h3>Score</h3></th></tr>";
    for(let i = 0; i < details.length; i++){
        row += "<tr><td>" + details[i].username + "</td><td>" + details[i].score + "</td></tr>";
    }

    row += "</table>";

    /* Add rows to the table */
    document.getElementById("leaderboard").innerHTML = row;
}

window.onload = function()
{
    loadLeaderboard();
}