(function(window){

	this.startListener = Function();
	this.stageWidth = 0;
	this.stageHeight = 0;
	this.platformGame = null;
	var hero = null;

	var platform;

	function CoreGamePage()
	{
		var coreGameGroup = gameStage.add.group();
		platform = gameStage.add.tileSprite(0, assetH-192, assetW, 256, 'platformGame');

		hero = gameStage.add.sprite(0, 0, 'idle');
		hero.x = 100;
		hero.y = platform.y-(hero.height-7);
        hero.animations.add('idle');
        hero.animations.play('idle', 60, true);

		coreGameGroup.add(platform);
		coreGameGroup.add(hero);

		this.getCoreGameGroup = function(){ return coreGameGroup; };
	}

	CoreGamePage.prototype.getScreen = function(){
		
		return this.getCoreGameGroup();
	}

	CoreGamePage.prototype.addEventListener = function( phase, funtionPram ){

		
	}

	CoreGamePage.prototype.show = function(){

		gameStage.add.tween(platform).to({  y:0 }, 1000, Phaser.Easing.Cubic.Out, true);
	}

	CoreGamePage.prototype.update = function(){


		//console.log("updateing...");
		platform.tilePosition.x -= 5;
		
	}
	

	window.CoreGamePage = CoreGamePage;

}(window));


 