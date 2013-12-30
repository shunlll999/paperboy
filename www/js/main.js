var game = {

	init: function(){

		startControl();

	}

};

var gameStage;

function startControl(){
	console.log("start control");
	var gameStage = new Phaser.Game(640, 320, Phaser.AUTO, 'gamewall', { preload: preload, create: create, update: update  });
}

function preload(){
	console.log("loading... ");
}

function create(){
	console.log("created... ");
}

function update(){
	
}