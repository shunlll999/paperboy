var localData;
var listener = Function();

(function(window){

	function GameStageMeneger()
	{
		GameStageMeneger.prototype.init();
	}

	GameStageMeneger.prototype.init = function(){
		console.log("GameStageMeneger init");
	}

	GameStageMeneger.prototype.getScreen = function(screen)
	{
		switch( screen ){

			case "Home":
					return new HomeScreen();
			break;

		}
	}

	GameStageMeneger.prototype.addEventListener = function( mFunction )
	{
		listener = mFunction;
	}

	window.GameStageMeneger = GameStageMeneger;

}(window));

(function(window){

	function HomeScreen(){

		var homeScreenGroup = gameStage.add.group();

		background = GameAssets.createAsset( 'background', gameStage.world.centerX, gameStage.world.centerY);
		footer = GameAssets.createAsset( 'footer', gameStage.world.centerX, gameStage.world.centerY);
		footer.y =  gameStage.world.height+footer.height;
		logoGame = GameAssets.createAsset( 'logoGame', gameStage.world.centerX, gameStage.world.centerY);
		logoGame.y = logoGame.y-200;
		logoGame.alpha = 0;
		homeBtn = GameAssets.createAsset( 'startBtn', gameStage.world.centerX, gameStage.world.centerY);
		homeBtn.alpha = 0;

		GameAssets.ratio( background, gameWidth*ratioWidth, gameHeight*ratioHeight);

		background.alpha = 0;
		gameStage.add.tween(background).to({  alpha:1 }, 2000, null, true);
		gameStage.add.tween(footer).to({  y:gameStage.world.height-footer.height }, 2000, Phaser.Easing.Cubic.Out, true,500, false);
		gameStage.add.tween(logoGame).to({  y:gameStage.world.centerY-150, alpha:1 }, 2000, Phaser.Easing.Cubic.Out, true,100, false);
		gameStage.add.tween(homeBtn).to({  y:gameStage.world.centerY+100, alpha:1 }, 2000, Phaser.Easing.Cubic.Out, true,200, false).onComplete.add(loopTween,this);

		homeBtn.inputEnabled=true;
		homeBtn.events.onInputDown.add(startBtnHandler,this);
		homeBtn.events.onInputUp.add(startBtnHandler,this);

		homeScreenGroup.add(background);
		homeScreenGroup.add(footer);
		homeScreenGroup.add(logoGame);
		homeScreenGroup.add(homeBtn);

		function loopTween(){
			var tween = gameStage.add.tween(logoGame).to({ y: gameStage.world.centerY-100 }, 2000, Phaser.Easing.Cubic.InOut)
		    .to({ y: gameStage.world.centerY-150}, 2000, Phaser.Easing.Cubic.InOut)
		    .loop()
		    .start();
		};

		function startBtnHandler(event)
		{
			if(homeBtn.scale.x == 1){
				localData = event;
				homeBtn.scale.x =  homeBtn.scale.y = 0.9;
				listener(event);
			}else{ 
				homeBtn.scale.x =  homeBtn.scale.y = 1
			};
		};

		return homeScreenGroup;
	};

	window.HomeScreen = HomeScreen;

}(window));

 