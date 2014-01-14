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

var coreGameCreated = false;

var homeGroup;
var infoGroup;
var settingGroup;
var coreGameGroup;

function startControl(){
	console.log("start control");
	gameStage = new Phaser.Game(assetW, assetH, Phaser.AUTO, 'gamewall', { init:init, preload: preload, create: create, update: update  });
}

function init(){

	//splash screen
	//gameStage.load.image("rainballLogo", "images/rainballlogo.png");
	//gameStage.load.start();

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
	loadingAssets();
	
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

	//splash screen
	//gameStage.add.sprite(0, 0, 'rainballLogo');

	homeGroup = gameStage.add.group();
	infoGroup = gameStage.add.group();
	settingGroup = gameStage.add.group();
	coreGameGroup = gameStage.add.group();

	gameStage.add.tween(progressObj).to({ y: -50, alpha:0 }, 1000, Phaser.Easing.Cubic.In, true);
	logoRainball = GameAssets.createAsset( 'rainballLogo', gameStage.world.centerX, gameStage.world.centerY);
	logoRainball.alpha = 0;
	gameStage.add.tween(logoRainball).to({  alpha:1 }, 1000, Phaser.Easing.Cubic.Out, true,1500, false).onComplete.add(destroySplash, this);

}

function destroySplash(){
	gameStage.add.tween(logoRainball).to({  alpha:0 }, 1000, Phaser.Easing.Cubic.In, true,3000, false).onComplete.add(renderHomeScreen, this);
}

function renderHomeScreen(){

	//var home = new GameStageMeneger();
	var home = new HomeScreen();
	homeGroup = home.getScreen();
	home.addEventListener("START.CLICK",onClickHandler);
	home.addEventListener("INFO.CLICK",onClickHandler);
	home.addEventListener("SETTING.CLICK",onClickHandler);

	var info = new InfoPage();
	infoGroup = info.getScreen();
	infoGroup.x = -gameStage.world.width;
	info.addEventListener("INFO.CLICK",onInfoClickHandler);

	var setting = new SettingScreen();
	settingGroup = setting.getScreen();
	settingGroup.visible = false;

	_coreGame = new CoreGamePage();
	coreGameGroup = _coreGame.getScreen();
	coreGameGroup.x = 0;
	coreGameGroup.y = -_coreGame.stageHeight;
	coreGameCreated = true;
	
}

function onClickHandler(event){
	console.log(" KEY "+event.phase);
	switch(event.phase){
		case "START.CLICK":
			gameStage.add.tween(homeGroup).to({  y:gameStage.world.height }, 2000, Phaser.Easing.Cubic.InOut, true,0, false);
			gameStage.add.tween(coreGameGroup).to({  y:0 }, 2000, Phaser.Easing.Cubic.InOut, true,0, false);
		break;

		case "INFO.CLICK":
			gameStage.add.tween(homeGroup).to({  x:gameStage.world.width }, 1000, Phaser.Easing.Cubic.InOut, true,0, false);
			gameStage.add.tween(infoGroup).to({  x:0 }, 1000, Phaser.Easing.Cubic.InOut, true,0, false);
		break;

		case "SETTING.CLICK":
			settingGroup.visible = true;
		break;
	}
	
}

function onInfoClickHandler(target){

	gameStage.add.tween(homeGroup).to({  x:0 }, 1000, Phaser.Easing.Cubic.InOut, true,0, false);
	gameStage.add.tween(infoGroup).to({  x:-gameStage.world.width }, 1000, Phaser.Easing.Cubic.InOut, true,0, false);

}

function update(){

	//console.log("coreGameCreateed: "+coreGameCreated);
	//coreGameGroup.x -=1;
	if(coreGameCreated){
		_coreGame.update();
	}
}