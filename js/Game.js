/* 
Game class for simple dice game. 
Created 20.9.2019 - lessons
author: TP
 */
class Game {
    
    constructor(endPoints) {
        this.dice = 1;
        this.endPoints = endPoints;
        this.roundPoints = 0;
        this.players = [];
        this.turn = 0;
    }

    /* init -method
    Initializes game */
    init() {
        
        // Check if players exist and ask data if they dont
        if (this.players.length < 1) {
            // Ask information for new
            this.endPoints = prompt("To what points we are going to play?");
            let numOfPlayers = prompt("How many players?");
            for (let i=0; i < numOfPlayers; i++){
                this.players.push(new Player(prompt("Give name of player " + i+1 + ".")));
            }
            this.updateUI();
        } else {
            this.updateUI();
        }
    }

    /* 
    updateUI -method
    Updates user interface */
    updateUI() {
        
        // Player name throwing
        document.getElementById("turn").innerHTML = this.players[this.turn].name;
        
        // Dice number
        document.getElementById("dice").innerHTML = this.dice;
        
        // Dice images
        var diceImgs = ["1.png","2.png","3.png","4.png","5.png","6.png"];
        document.getElementById("diceImg").src = "img/" + diceImgs[this.dice-1];

        // Round points
        document.getElementById("roundPoints").innerHTML = this.roundPoints;
        
        // Player data
        const playersDiv = document.getElementById("players");
        let html = "";
        for (let x in this.players) {
            html += this.players[x].name + " : " + this.players[x].points + "<br>";
        }
        playersDiv.innerHTML = html;

    }
    
    /* 
    changeTurn -method
    Changes player in turn */
    changeTurn() {
        this.checkWin();
        this.turn++;
        if (this.turn > this.players.length - 1) {
            this.turn = 0;
        }
    }

    /* getPoints -method
    Moves round points for player and changes turn */
    getPoints() {
        this.players[this.turn].points += this.roundPoints;
        this.resetRoundPoints();
        this.changeTurn();
        this.updateUI();
    }
    
    /* setRoundPoints -method
    Increases round points by value of dice */
    setRoundPoints(dicePoints) {
        this.roundPoints += dicePoints;
    }
    
    /* resetRoundPoints -method
    Resets round points */
    resetRoundPoints() {
        this.roundPoints = 0;
    }
    
    // throwDice -method
    // Player throws a dice
    throwDice() {
        this.dice = Math.floor(Math.random() * 6) + 1;
        if (this.dice == 1) {
            this.resetRoundPoints();
            this.changeTurn();
        }
        else {
            this.setRoundPoints(this.dice);
        }
        this.updateUI();
    }

    /* checkWin -method
    Checks if current player has won the game */
    checkWin(){
        if (this.players[this.turn].points >= this.endPoints) {
            alert('Voittaja selvisi! Se on ' + this.players[this.turn].name + "!");
        }
    }
}












