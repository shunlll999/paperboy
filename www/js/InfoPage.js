(function(window){

	this.startListener = Function();

	function InfoPage()
	{
		var infoGroup = gameStage.add.group();

		backgroundInfo = GameAssets.createAsset('background', gameStage.world.centerX, gameStage.world.centerY);
		GameAssets.ratio( backgroundInfo, gameWidth*ratioWidth, gameHeight*ratioHeight);

		infoIcon = GameAssets.createAsset("infoIcon", 0, 0 );
		infoIcon.x = gameStage.world.width - (infoIcon.width);
		infoIcon.y = settingIcon.y-(infoIcon.height+20);

		infoGroup.add(backgroundInfo);
		infoGroup.add(infoIcon);

		infoIcon.inputEnabled=true;
		infoIcon.events.onInputDown.add(alignButtonAction,this);
		infoIcon.events.onInputUp.add(alignButtonAction,this);

		function alignButtonAction(target){

			
			if(target.scale.x == 1){
				target.scale.x =  target.scale.y = 0.9;
				console.log(target.key);

				switch(target.key){

					case "infoIcon":
						target.phase = "INFO.CLICK";
						this.startListener(target);
					break;

				}

			}else{ 
				target.scale.x =  target.scale.y = 1
			};

		}

		this.getInfoGroup = function(){ return infoGroup; };
	}

	InfoPage.prototype.getScreen = function(){
		
		return this.getInfoGroup();
	}

	InfoPage.prototype.addEventListener = function( phase, funtionPram ){

		this.startListener = funtionPram;
		//console.log("phase: "+phase);
	}
	

	window.InfoPage = InfoPage;

}(window));


 