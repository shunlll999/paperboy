var game = {

	init: function(){

		startControl();

	}

};

var gameStage;
var logoGame;

function startControl(){
	console.log("start control");
	gameStage = new Phaser.Game(640, 320, Phaser.AUTO, 'gamewall', { preload: preload, create: create, update: update  });
}

function preload(){
	console.log("loading... ");
	gameStage.load.image('logoGame', 'img/mainlogp.png');
}

function create(){
	console.log("created... ");
	logoGame = gameStage.add.sprite(gameStage.world.centerX, gameStage.world.centerY, 'logoGame');
	logoGame.anchor.setTo(0.5, 0.5);

}

function update(){
	
}