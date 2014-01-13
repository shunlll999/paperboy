(function(window){

	SettingScreen.startListener  = Function();

	function SettingScreen()
	{
			var blackAlphaScreen;
			var settingGroup;
			var melodyIsMute = false;
			var sfIsMute = false;

			settingGroup = gameStage.add.group();

			blackAlphaScreen = gameStage.add.graphics(0, 0);
	    	blackAlphaScreen.beginFill(0x000000,0.8);
	    	blackAlphaScreen.drawRect(0, 0, assetW, assetH);

	    	settingPanel = GameAssets.createAsset( 'settingPanel', gameStage.world.centerX, gameStage.world.centerY);

	    	melodyBtn = gameStage.add.button(settingPanel.x-((settingPanel.width/2)-50), 0, 'melodyIcon', melodyOnClick, this, 1, 1, 0);
	    	melodyBtn.y = settingPanel.y-(melodyBtn.height/2)

	    	soundFXBtn = gameStage.add.button(melodyBtn.x+(melodyBtn.width+30), melodyBtn.y, 'soundFX', soundFXOnClick, this, 1, 1, 0);

	    	FBBtn = gameStage.add.button(soundFXBtn.x+(soundFXBtn.width+30), soundFXBtn.y, 'Facebook', fbOnClick, this, 0, 0, 0);

	    	closeBtn = gameStage.add.button(settingPanel.x+((settingPanel.width/2)-70), settingPanel.y-((settingPanel.height/2)+20), 'CloseBTN', closeOnClick, this, 0, 0, 0);

	    	settingGroup.add(blackAlphaScreen);
	    	settingGroup.add(settingPanel);
	    	settingGroup.add(melodyBtn);
	    	settingGroup.add(soundFXBtn);
	    	settingGroup.add(FBBtn);
	    	settingGroup.add(closeBtn);

	    	 function melodyOnClick(){

				console.log("Click");

				if( !melodyIsMute ){
					melodyIsMute = true;
					melodyBtn.setFrames(0, 0, 1);
				}else{
					melodyIsMute = false;
					melodyBtn.setFrames(1, 1, 0);
				}
			}

			 function soundFXOnClick(){
				if( !sfIsMute ){
					sfIsMute = true;
					soundFXBtn.setFrames(0, 0, 1);
				}else{
					sfIsMute = false;
					soundFXBtn.setFrames(1, 1, 0);
				}
			}

			function fbOnClick(){
				
			}

			function closeOnClick(){

				settingGroup.visible = false;
			}

			this.getsettingGroup = function(){ return settingGroup; };
	}

	SettingScreen.prototype.getScreen = function(){

		return this.getsettingGroup();

	}

	SettingScreen.prototype.addEventListener = function( phase, funtionPram ){

		this.startListener = funtionPram;

	}

	window.SettingScreen = SettingScreen;

}(window));