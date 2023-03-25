let context;
let canvas;
let ship;
let score = 0; /* starting score set to 0 */
let hp = 1;
let keys = [];
let asteroids = [];
let weapon = [];

document.addEventListener('DOMContentLoaded', Canvas);

function Canvas() /* Defining canvas characteristics and keypress */
{
    canvas = document.getElementById('gameContainer');
    context = canvas.getContext('2d');
    context.fillStyle = 'black';
    canvas.width = 1000;
    canvas.height = 550;
    context.fillRect(0,0, canvas.width, canvas.height);
    ship = new Spaceship(); /* Calling Spaceship class */

    for(let i = 0; i < 100; i++) /* For loop to determining the number of asteroids and drawing them by calling
                                    the Asteroids class */
    {
        asteroids.push(new Asteroids());
    }

    /* Handling key press */
    document.addEventListener("keyup", function (a)
    {
        keys[a.keyCode] = false;

        if(a.keyCode === 32)
        {
            weapon.push(new Weapon(ship.angle));
        }
    });
    document.addEventListener("keydown", function (a)
    {
        keys[a.keyCode] = true;
    });
}

/* Defining characteristics of the spaceship */
class Spaceship {
    constructor() {
        this.visible = true; /* Making the spaceship visible by default and making it disappear when game over */
        this.x = canvas.width / 2;
        this.y = canvas.height/ 2;
        this.spaceshipSpeed = 0.1;
        this.velocityX = 0;
        this.velocityY = 0;
        this.moveAhead = false; /* Ship stationary at the start of the game */
        this.rotationSpeed = 0.0017;
        this.angle = 0;
        this.radius = 12;
        this.color = 'red';
        this.tipX = canvas.width / 2;
        this.tipY = canvas.height / 2;

    }

    /* Function to rotate the ship clockwise/anticlockwise on key press */
    RotateShip(dir){
        this.angle += this.rotationSpeed * dir;

    }
    /* Function to update the ship positioning */
    Update()
    {
        let radians = this.angle / Math.PI * 180;
        if(this.moveAhead)
        {
            this.velocityX += Math.cos(radians) * this.spaceshipSpeed;
            this.velocityY += Math.sin(radians) * this.spaceshipSpeed;
        }

        /* Giving the spaceship the ability to move to the other side of the canvas if the ship moves off-screen  */
        if(this.x < this.radius)
        {
            this.x = canvas.width;
        }

        if(this.x > canvas.width)
        {
            this.x = this.radius;
        }

        if(this.y < this.radius)
        {
            this.y = canvas.height;
        }

        if(this.y > canvas.height)
        {
            this.y = this.radius;
        }

        /* Simulating deceleration when 'W' key is released */
        this.velocityX *= 0.99;
        this.velocityY *= 0.99;
        this.x -= this.velocityX;
        this.y -= this.velocityY;
    }

    drawShip(){
        context.strokeStyle = this.color;
        context.beginPath();
        let verticesAngle = ((2 * Math.PI) / 3); /* Calculating angle of the vertices */
        let radians = this.angle / Math.PI * 180;
        for(let i = 0; i < 3; i++) /* For loop to draw the vertices of the ship being in the shape of a triangle */
        {
            context.lineTo(this.x - this.radius * Math.cos(verticesAngle * i + radians),
                this.y - this.radius * Math.sin(verticesAngle * i + radians));
        }

        /* Defining from which tip the bullets will be shot from */
        this.tipX = this.x - this.radius * Math.cos(radians);
        this.tipY = this.y -this.radius * Math.sin(radians);
        context.closePath();
        context.stroke();
    }
}

/* Defining characteristics of the bullets */
class Weapon {
    constructor(angle) {
        this.visible = true;
        this.angle = angle;
        this.x = ship.tipX;
        this.y = ship.tipY;
        this.height = 4;
        this.width = 4;
        this.speed = 9;
        this.x = ship.tipX;
        this.y = ship.tipY;
    }

    Update()
    {
        const radians = this.angle / Math.PI * 180;
        this.x -= Math.cos(radians) * this.speed;
        this.y -= Math.sin(radians) * this.speed;
    }

    drawBullet()
    {
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Asteroids{
    constructor(x, y, collisionRadius) {
        this.visible = true;
        /* Randomizing the x and y positions of the asteroids */
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height);

        /* Defining how close the bullets need to be to the asteroids in order to destroy them and also how close
         the asteroid and the ship need to be for game over*/
        this.collisionRadius = collisionRadius || 13;
        this.size = 6;
        this.speed = 1;
        this.angle = Math.floor(Math.random() * 359);
        this.color = 'white';
    }

    Update()
    {
        var radians = this.angle / Math.PI * 180;

        /* Defining asteroids speed */
        this.x +=  Math.cos(radians) * this.speed;
        this.y += Math.sin(radians) * this.speed;

        /* Giving the asteroids the ability to move to the other side of the canvas if they move off-screen */
        if(this.x < this.size)
        {
            this.x = canvas.width;
        }

        if(this.x > canvas.width)
        {
            this.x = this.size;
        }

        if(this.y < this.size)
        {
            this.y = canvas.height;
        }

        if(this.y > canvas.height)
        {
            this.y = this.size;
        }
    }

    drawAsteroids()
    {
        context.strokeStyle = this.color;
        context.beginPath();
        let angle = ((Math.PI * 2) / 5);
        const radians = this.angle / Math.PI * 180;

        /* Drawing asteroids in a hexagonal shape */
        for(let i = 0; i < 6; i++)
        {
            context.lineTo(this.x - this.size * Math.cos(angle * i + radians),
                this.y - this.size * Math.sin(angle * i + radians));
        }
        context.closePath();
        context.stroke();
    }
}

/* Defining the distance between bullets, asteroids and ship for a collision */
function Collision(c1x, c1y, r1, c2x, c2y, r2)
{
    let radius1 = r1 + r2;
    let diffX = c1x - c2x;
    let diffY = c1y - c2y;

    return radius1 > Math.sqrt((diffX * diffX) + (diffY * diffY));

}

/* Function to save and update scores, do things in case of collision and call out everything and start the game */
function Game()

{
    ship.moveAhead = (keys[87]);

    if (keys[68]) {
        ship.RotateShip(1);
    }
    if (keys[65]) {
        ship.RotateShip(-1);
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.font = '20px Arial';
    context.fillText('Score: ' + score.toString(), 20, 35);

    /* If game over, update scores */
    if(hp <= 0)
    {
        ship.visible = false;
        context.fillStyle = 'white';
        context.font = '60px Arial';
        context.fillText('Game over', canvas.width / 2 - 150, canvas.height / 2);
        let newScore = score; /* Store score */
        hp = 0;

        /* Check if user is logged in */
        if(sessionStorage.loggedUser !== "undefined")
        {
            let userDetails = sessionStorage.loggedUser;

            /* Check previous score and update if new score is higher */
            if(userDetails !== undefined)
            {
                let userDetails = JSON.parse(localStorage[sessionStorage.loggedUser]);
                if(userDetails.highscore < newScore)
                {
                    userDetails.highscore = newScore;
                    localStorage[userDetails.username] = JSON.stringify(userDetails);
                }
            }
        }


    }
    /* Game over if all asteroids destroyed */
    if(asteroids.length === 0)
    {
        ship.visible = false;
        context.fillStyle = 'white';
        context.font = '60px Arial';
        context.fillText('Game over', canvas.width / 2 - 150, canvas.height / 2);
    }
    /* Check collision between ship and asteroid */
    if(asteroids.length !== 0)
    {
        for(let k = 0; k < asteroids.length; k++)
        {
            if(Collision(ship.x, ship.y, 2, asteroids[k].x, asteroids[k].y, asteroids[k].collisionRadius))
            {
                ship.x = canvas.width / 2;
                ship.y = canvas.height / 2;
                ship.velocityX = 0;
                ship.velocityY = 0;
                hp -= 1;
            }
        }
    }
    /* Check collision between bullet and asteroid */
    if(asteroids.length !== 0 && weapon.length !== 0){
loop1:
        for(let l = 0; l < asteroids.length; l++)
        {
            for(let m = 0; m < weapon.length; m++)
            {
                if(Collision(weapon[m].x, weapon[m].y, 1, asteroids[l].x, asteroids[l].y, asteroids[l].collisionRadius))
                {
                    asteroids.splice(l, 1);
                    weapon.splice(m, 1);
                    score += 20;
                    break loop1;
                }
            }
        }
    }

    /* Calling classes and functions within to start the game */
    if(ship.visible)
    {
        ship.Update();
        ship.drawShip();
    }
    if(weapon.length !== 0)
    {
        for(let i = 0; i < weapon.length; i++)
        {
            weapon[i].Update();
            weapon[i].drawBullet();
        }
    }

    if(asteroids.length !== 0)
    {
        for(let j = 0; j < asteroids.length; j++)
        {
            asteroids[j].Update();
            asteroids [j].drawAsteroids(j);
        }
    }
    requestAnimationFrame(Game);
}
requestAnimationFrame(Game);