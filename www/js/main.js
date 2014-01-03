var game = {

	init: function(){

		startControl();
		document.getElementsByTagName("body")[0].style.margin.left;

	}

};

var gameStage;
var logoRainball;

var gameWidth = 800;
var gameHeight = 600;

var assetH = document.body.clientHeight;
var assetW = document.body.clientWidth;

var ratioWidth = assetW/gameWidth;
var ratioHeight = assetH/gameHeight;

var targetRatio;
var progressObj;
var progressBar;
var loadingText;
var homeBtn;

var homeGroup;

function startControl(){
	console.log("start control");
	gameStage = new Phaser.Game(assetW, assetH, Phaser.AUTO, 'gamewall', { init:init, preload: preload, create: create, update: update  });
}

function init(){
	gameStage.load.image("rainballLogo", "images/rainballlogo.png");
	gameStage.load.start();

	progressObj = gameStage.add.group();

	var graphics = gameStage.add.graphics(0, 0);
    graphics.beginFill(0xFFFFFF);
    graphics.drawRect((assetW-300)*0.5, (assetH-40)*0.5, 300, 40);

    graphics.beginFill(0x000000);
    graphics.drawRect((assetW-290)*0.5, (assetH-30)*0.5, 290, 30);

    progressBar = gameStage.add.graphics(0, 0);
    progressBar.beginFill(0xcccccc);

	//text = "loading..";
   // var style = { font: "15px Arial", fill: "#ffffff", align: "center" };
   // loadingText = gameStage.add.text(0, 100, text, style);
   // loadingText.x = (assetW-loadingText.width)*0.5;
   // loadingText.y = ((assetH-loadingText.height)*0.5);
   
    progressObj.add(graphics);
    progressObj.add(progressBar);
   // progressObj.add(loadingText);
	console.log("init game");
}

function preload(){
	

	gameStage.load.onFileComplete.add(updateProgressBar, this);

	gameStage.load.image("rainballLogo", "images/rainballlogo.png");
	gameStage.load.image('logoGame', 'images/mainlogp.png');
	gameStage.load.image("background", "images/nainbg.png");
	gameStage.load.image("footer", "images/footer.png");
	gameStage.load.image("startBtn", "images/mainBTN.png");
}

function updateProgressBar(progress){
	
	//loadingText.setText(text+" "+(progress)+" %");
	var percent = (progress*285)/100;
	console.log("loading... "+percent);

	progressBar.drawRect((assetW-285)*0.5, (assetH-25)*0.5, percent, 25);
	//loadingText.x = (assetW-loadingText.width)*0.5;
}

function create(){
	console.log("created... ");
	gameStage.add.sprite(0, 0, 'rainballLogo');
	homeGroup = gameStage.add.group();

	gameStage.add.tween(progressObj).to({ y: -50, alpha:0 }, 1000, Phaser.Easing.Cubic.In, true);
	logoRainball = GameAssets.createAsset( 'rainballLogo', gameStage.world.centerX, gameStage.world.centerY);
	logoRainball.alpha = 0;
	gameStage.add.tween(logoRainball).to({  alpha:1 }, 1000, Phaser.Easing.Cubic.Out, true,1500, false).onComplete.add(destroySplash, this);

}

function destroySplash(){
	gameStage.add.tween(logoRainball).to({  alpha:0 }, 1000, Phaser.Easing.Cubic.In, true,3000, false).onComplete.add(renderHomeScreen, this);
}

function renderHomeScreen(){

	var home = new GameStageMeneger();
	homeGroup = home.getScreen("Home");
	home.addEventListener(onClickHandler);


}

function onClickHandler(event){
	console.log(event.key);
	gameStage.add.tween(homeGroup).to({  y:gameStage.world.height }, 2000, Phaser.Easing.Cubic.InOut, true,0, false);
}

function update(){

}