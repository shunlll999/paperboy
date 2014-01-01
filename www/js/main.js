var game = {

	init: function(){

		startControl();
		document.getElementsByTagName("body")[0].style.margin.left;

	}

};

var gameStage;
var logoGame;

var gameWidth = 800;
var gameHeight = 600;

var assetH = document.body.clientHeight;
var assetW = document.body.clientWidth;

var ratioWidth = assetW/gameWidth;
var ratioHeight = assetH/gameHeight;
var targetRatio;
var progressObj;
var progressBar;
var background;
var loadingText;

function startControl(){
	console.log("start control");
	gameStage = new Phaser.Game(assetW, assetH, Phaser.AUTO, 'gamewall', { init:init, preload: preload, create: create, update: update  });
}

function init(){

	progressObj = gameStage.add.group();

	var graphics = gameStage.add.graphics(0, 0);
    graphics.beginFill(0xFFFFFF);
    graphics.drawRect((assetW-300)*0.5, (assetH-40)*0.5, 300, 40);

    graphics.beginFill(0x000000);
    graphics.drawRect((assetW-290)*0.5, (assetH-30)*0.5, 290, 30);

    progressBar = gameStage.add.graphics(0, 0);
    progressBar.beginFill(0xcccccc);

	text = "loading..";
    var style = { font: "15px Arial", fill: "#ffffff", align: "center" };
    loadingText = gameStage.add.text(0, 100, text, style);
    loadingText.x = (assetW-loadingText.width)*0.5;
    loadingText.y = ((assetH-loadingText.height)*0.5);
   
    progressObj.add(graphics);
    progressObj.add(progressBar);
    progressObj.add(loadingText);
    

	console.log("init game");



}

function preload(){
	

	gameStage.load.onFileComplete.add(updateProgressBar, this);

	gameStage.load.image('logoGame', 'images/mainlogp.png');
	gameStage.load.image("background", "images/nainbg.png");
	gameStage.load.image("footer", "images/footer.png");
}

function updateProgressBar(progress){
	
	loadingText.setText(text+" "+(progress+1)+" %");
	var percent = (progress*285)/100;
	console.log("loading... "+percent);
	progressBar.drawRect((assetW-285)*0.5, (assetH-25)*0.5, percent+2.5, 25);
	loadingText.x = (assetW-loadingText.width)*0.5;
}

function create(){
	console.log("created... ");
	gameStage.add.tween(progressObj).to({ y: -50, alpha:0 }, 1000, Phaser.Easing.Cubic.In, true).onComplete.add(renderHomeScreen, this);

}

function renderHomeScreen(){
	background = GameAssets.createAsset( 'background', gameStage.world.centerX, gameStage.world.centerY);
	footer = GameAssets.createAsset( 'footer', gameStage.world.centerX, gameStage.world.centerY);
	footer.y =  gameStage.world.height+footer.height;
	logoGame = GameAssets.createAsset( 'logoGame', gameStage.world.centerX, gameStage.world.centerY);
	logoGame.y = logoGame.y-150;
	logoGame.alpha = 0;

	GameAssets.ratio( background, gameWidth*ratioWidth, gameHeight*ratioHeight);

	background.alpha = 0;
	gameStage.add.tween(background).to({  alpha:1 }, 2000, null, true);
	gameStage.add.tween(footer).to({  y:gameStage.world.height-footer.height }, 2000, Phaser.Easing.Cubic.Out, true,500, false);
	gameStage.add.tween(logoGame).to({  y:gameStage.world.centerY-100, alpha:1 }, 2000, Phaser.Easing.Cubic.Out, true,100, false);
}

function update(){

}