let game = new Game(40);

const btnPlay = document.getElementById('btnPlay');
btnPlay.addEventListener("click", game.throwDice.bind(game));

const btnGetPoints = document.getElementById("btnGetPoints");
btnGetPoints.addEventListener("click", game.getPoints.bind(game));

game.init();