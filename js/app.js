//Canvas is 505 by 606
//variables for the enemy objects
var bugY, bugX, speed;

var Enemy = function(bugX, bugY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var min = 100,
        max = 150;
    this.x = bugX;
    this.y = bugY;
    this.speed = Math.random() * (max - min) + min;
    //gives a range of random numbers for the speed
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

/*Enemy.prototype.move = function(dt){
// becasuse the bugs have a set y I only need to change the X cord. 
this.x + (Math.random()*20);
};
I was going to have a move function but it didnt seem necessary*/

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.reset();
    }
};

Enemy.prototype.reset = function(speed) {
    var min = 100,
        max = 150;
    this.x = 0;
    speed = Math.random() * (max - min) + min;
    return speed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var bug1 = new Enemy(-150, 225, 10);
var bug2 = new Enemy(-150, 145, 20);
var bug3 = new Enemy(-150, 55, 15);
var allEnemies = [bug1, bug2, bug3];
// i could push the enemies into the array but i dont see a point to 
//complicate it since we only have three enemies

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var plyX = 200,
    plyY = 435,
    x;

var Player = function() {
    //load image of player i hope
    // the next four lines are all the lines need to start with a player
    this.x = plyX;
    this.y = plyY;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.render = function() {
    //In this i guess I can just emulate the render enemy 
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.update = function() {
    if (this.y < 0) {
        this.reset();
    } else if (this.checkCollisions() === true) {
        this.reset();
    }
};
Player.prototype.reset = function() {
    this.x = plyX;
    this.y = plyY;
    for (var i = 0; i < 3; i++) {
        allEnemies[i].reset();
    }
    // in the future if i wanted to this could trigger a point variable or a win msg. 
};
Player.prototype.handleInput = function(dir) {
    if (dir == 'left' && this.x > 0) {
        this.x -= 25;
    } else if (dir == 'up' && this.y > 0) {
        this.y -= 25;
    } else if (dir == 'right' && this.x < 400) {
        this.x += 25;
    } else if (dir == 'down' && this.y < 430) {
        this.y += 25;
    }
};
Player.prototype.checkCollisions = function() {
    //this is for the all enemies iteration
    for (var i = 0; i < 3; i++) {
        if ((this.x) >= (allEnemies[i].x - 50) && (this.x) <= (allEnemies[i].x + 50) && (this.y) >= (allEnemies[i].y - 33) && (this.y) <= (allEnemies[i].y + 33)) {
            return true;
        }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(); // this creates a player object


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});