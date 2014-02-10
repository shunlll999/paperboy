function loadingAssets(){


	gameStage.load.image("rainballLogo", "images/rainballlogo.png");
	gameStage.load.image('logoGame', 'images/mainlogp.png');
	gameStage.load.image("background", "images/nainbg.png");
	gameStage.load.image("footer", "images/footer.png");
	gameStage.load.image("startBtn", "images/mainBTN.png");
	gameStage.load.image("infoIcon", "images/infoIcon.png");
	gameStage.load.image("settingIcon", "images/settingIcon.png");
	gameStage.load.image("settingPanel", "images/settingPanel.png");

	gameStage.load.image("platformGame", "images/tilePlatform.jpg");

	gameStage.load.spritesheet("melodyIcon","images/melodyIcon.png", 66,63);
	gameStage.load.spritesheet("soundFX","images/sfIcon.png", 66,63);
	gameStage.load.spritesheet("Facebook","images/fb.png", 66,63);
	gameStage.load.spritesheet("CloseBTN","images/closeIcon.png", 49,48);

	gameStage.load.atlasJSONHash('idle', 'images/atlas/hero.png', 'jsons/idle.json');
	gameStage.load.atlasJSONHash('speedup', 'images/atlas/hero.png', 'jsons/speedup.json');
	gameStage.load.atlasJSONHash('break', 'images/atlas/hero.png', 'jsons/break.json');
	gameStage.load.atlasJSONHash('shoot', 'images/atlas/hero.png', 'jsons/shoot.json');
	gameStage.load.atlasJSONHash('die', 'images/atlas/hero.png', 'jsons/die.json');
	gameStage.load.atlasJSONHash('hert', 'images/atlas/hero.png', 'jsons/hert.json');
	gameStage.load.atlasJSONHash('jump', 'images/atlas/hero.png', 'jsons/jump.json');

	gameStage.load.atlasJSONHash('hero', 'images/atlas/hero.png', 'jsons/hero.json');

}