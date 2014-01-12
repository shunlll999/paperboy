var localData;
var startListener = Function();
var infoListener = Function();

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

			case "Info":
					return new InfoPage();
			break;

		}
	}

	GameStageMeneger.prototype.addEventListener = function( phase, mFunction )
	{
		
		switch(phase){
			case "START.CLICK":
				startListener = mFunction;
			break;

			case "INFO.CLICK":
				infoListener = mFunction;
			break;
		}
		
	}

	window.GameStageMeneger = GameStageMeneger;

}(window));


 