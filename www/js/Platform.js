(function(window){

	Platform.prototype.platformGame = null;

	function Platform()
	{
		Platform.prototype.platformGame = gameStage.add.sprite(0, 0, "platformGame");
	}


	Platform.prototype.setX = function( value ){

		Platform.prototype.platformGame.x = value;
	}

	Platform.prototype.setY = function( value ){

		Platform.prototype.platformGame.y = value;
	}

	window.Platform = Platform;

}(window));