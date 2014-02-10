(function(window){

	this.startListener = Function();
	this.stageWidth = 0;
	this.stageHeight = 0;
	this.platformGame = null;
	var hero = null;
	var isStartGame = false;
	var heroDefaultY = 0;
	var platform;
	var timer;

	function CoreGamePage()
	{

		timer = gameStage.time.create(false);

		var coreGameGroup = gameStage.add.group();
		platform = gameStage.add.tileSprite(0, assetH-192, assetW, 256, 'platformGame');

		hero = gameStage.add.sprite(0, 0, 'idle');
		hero.x = 100;
		hero.y = platform.y-(hero.height-7);
		heroDefaultY = hero.y;
        hero.animations.add('idle');

        hero.animations.play('idle', 60, true);

        currentAnimation(hero,'idle');

		coreGameGroup.add(platform);
		coreGameGroup.add(hero);

		gameStage.input.onDown.add(releaseMouse, this);

		this.getCoreGameGroup = function(){ return coreGameGroup; };
	}

	function currentAnimation( target, animName ){

		target.destroy()
		
		hero = gameStage.add.sprite(0, 0, animName);
		hero.x = 100;
		hero.y = platform.y-(hero.height-7);
        hero.animations.add(animName);
        hero.animations.play(animName, 60, true);

	}

	function releaseMouse(){

		if( !isStartGame )return;

		console.log("defaultY: "+heroDefaultY );
		currentAnimation(hero,'jump');
		gameStage.add.tween(hero).to({y:heroDefaultY-200 }, 500, Phaser.Easing.Cubic.Out, true).onComplete.add(reRun, this);

	}

	function reRun(){
		
		gameStage.add.tween(hero).to({y:heroDefaultY}, 500, Phaser.Easing.Cubic.In, true).onComplete.add(refreshAnim, this);
		
	}

	function refreshAnim(){

		currentAnimation(hero,'speedup');
		hero.y = heroDefaultY
		timer.add(3000, function(){
			currentAnimation(hero,'idle');
			timer.stop();
		}, this);
		timer.start();
		console.log("refreshAnim");
	}

	CoreGamePage.prototype.getScreen = function(){
		
		return this.getCoreGameGroup();
	}

	CoreGamePage.prototype.addEventListener = function( phase, funtionPram ){

		
	}

	CoreGamePage.prototype.show = function(){

		isStartGame = true;
		//gameStage.add.tween(platform).to({  y:0 }, 1000, Phaser.Easing.Cubic.Out, true);
	}

	CoreGamePage.prototype.update = function(){


		//console.log("updateing...");
		platform.tilePosition.x -= 5;
		
	}
	

	window.CoreGamePage = CoreGamePage;

}(window));


 