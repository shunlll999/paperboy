(function(window){

	this.startListener = Function();
	this.stageWidth = 0;
	this.stageHeight = 0;

	function CoreGamePage()
	{
		var coreGameGroup = gameStage.add.group();

		backgroundGame = gameStage.add.sprite(0, 0, "gameBG");
		this.stageWidth = backgroundGame.width;
		this.stageHeight = backgroundGame.height;
		coreGameGroup.add(backgroundGame);

		this.getCoreGameGroup = function(){ return coreGameGroup; };
	}

	CoreGamePage.prototype.getScreen = function(){
		
		return this.getCoreGameGroup();
	}

	CoreGamePage.prototype.addEventListener = function( phase, funtionPram ){

		
	}

	CoreGamePage.prototype.update = function(){

		this.getCoreGameGroup().x -= 1;
		//console.log("this.getCoreGameGroup(): width : "+ this.stageWidth);
		if(this.getCoreGameGroup().x < -(this.stageWidth-gameStage.world.width)){
			this.getCoreGameGroup().x = 0;
		}

	}
	

	window.CoreGamePage = CoreGamePage;

}(window));


 