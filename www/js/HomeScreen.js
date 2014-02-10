

(function(window){

	HomeScreen.startListener  = Function();

	function HomeScreen(){

		var _homeScreenGroup = gameStage.add.group();

		background = GameAssets.createAsset( 'background', gameStage.world.centerX, gameStage.world.centerY);
		footer = GameAssets.createAsset( 'footer', gameStage.world.centerX, gameStage.world.centerY);
		footer.y =  gameStage.world.height+footer.height;
		logoGame = GameAssets.createAsset( 'logoGame', gameStage.world.centerX, gameStage.world.centerY);
		logoGame.y = logoGame.y-200;
		logoGame.alpha = 0;
		homeBtn = GameAssets.createAsset( 'startBtn', gameStage.world.centerX, gameStage.world.centerY);
		homeBtn.alpha = 0;

		settingIcon = GameAssets.createAsset("settingIcon", 60, 500 );
		settingIcon.name = "settingIcon";
		//settingIcon.y = gameStage.world.height-(settingIcon.height+50);

		infoIcon = GameAssets.createAsset("infoIcon", 60, 0 );
		infoIcon.name = "infoIcon";
		infoIcon.y =settingIcon.y-(infoIcon.height+20);
		

		GameAssets.ratio( background, gameWidth*ratioWidth, gameHeight*ratioHeight);

		background.alpha = 0;
		gameStage.add.tween(background).to({  alpha:1 }, 200, null, true);
		gameStage.add.tween(footer).to({  y:gameStage.world.height-footer.height }, 2000, Phaser.Easing.Cubic.Out, true,500, false);
		gameStage.add.tween(logoGame).to({  y:gameStage.world.centerY-150, alpha:1 }, 2000, Phaser.Easing.Cubic.Out, true,100, false);
		gameStage.add.tween(homeBtn).to({  y:gameStage.world.centerY+100, alpha:1 }, 2000, Phaser.Easing.Cubic.Out, true,200, false).onComplete.add(loopTween,this);

		homeBtn.inputEnabled=true;
		homeBtn.events.onInputDown.add(startBtnHandler,this);
		homeBtn.events.onInputUp.add(startBtnHandler,this);

		settingIcon.inputEnabled=true;
		settingIcon.events.onInputDown.add(alignButtonAction,this);
		settingIcon.events.onInputUp.add(alignButtonAction,this);

		infoIcon.inputEnabled=true;
		infoIcon.events.onInputDown.add(alignButtonAction,this);
		infoIcon.events.onInputUp.add(alignButtonAction,this);


		_homeScreenGroup.add(background);
		_homeScreenGroup.add(footer);
		_homeScreenGroup.add(logoGame);
		_homeScreenGroup.add(homeBtn);
		_homeScreenGroup.add(infoIcon);
		_homeScreenGroup.add(settingIcon);
		//homeScreenGroup.add(settingScreen);

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
				event.phase = "START.CLICK";
				this.startListener(event);
				//startListener(event);
			}else{ 
				homeBtn.scale.x =  homeBtn.scale.y = 1
			};
		};

		function alignButtonAction(target){

			
			if(target.scale.x == 1){
				target.scale.x =  target.scale.y = 0.9;
				console.log(target.key);

				switch(target.name){

					case "settingIcon":
						target.phase = "SETTING.CLICK";
						this.startListener(target);
					break;

					case "infoIcon":
						target.phase = "INFO.CLICK";
						this.startListener(target);
						//infoListener(target);
					break;

				}

			}else{ 
				target.scale.x =  target.scale.y = 1
			};

		}

		function settingOnAction(){
			console.log("CLOSE_SETTING_PANEL");
		}

		this.getHomeScreenGroup = function(){ return _homeScreenGroup; };
	};

	HomeScreen.prototype.getScreen = function(){

		return this.getHomeScreenGroup();
	}

	HomeScreen.prototype.addEventListener = function( phase, funtionPram ){

		this.startListener = funtionPram;
	}

	window.HomeScreen = HomeScreen;

}(window));
