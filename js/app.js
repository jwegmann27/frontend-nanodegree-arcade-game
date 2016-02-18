/*Getting a Grasp on the Situation
So first we obv have the enimies class and the player class
The Enemy class needs the following
    - Load Images : already done for me CHECK
    - define multiple enemy objects probably using "new" like in the car van example
    - Set location for enemies 
    - Move Enemies

The Player class will need the following: 
    - Load Image of Player
    - Set starting location
    - Take in inputs so that we can control the player
    - reset when gets in the river or hits an enemy

    Ok now we can start*/
//Canvas is 505 by 606
    // Enemies our player must avoid
var allEnemies= [ ];// end of allEnemies

var bugInitx = 20, bugInity = 100;

var Enemy = function(bugInitx, bugInity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = bugInitx;
    this.y = bugInity;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(bugInitx, bugInity,dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt*Math.random();//idk about this yet
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemy = new Enemy();
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    //load image of player i hope
    var initx = 200, inity = 430;
    this.x = initx;
    this.y = inity;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.render = function() {
    //In this i guess I can just emulate the render enemy 
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.update = function() {};
Player.prototype.handleInput = function() {};
Player.prototype.checkCollisions = function() {};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();


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

