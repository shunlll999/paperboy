var targetAsset;
var GameAssets = {
	createAsset: function( assetName, px, py )
	{
		console.log("create background");
		targetAsset = gameStage.add.sprite(px, py, assetName);
		targetAsset.anchor.setTo(0.5, 0.5);
		
		return targetAsset;
	},

	ratio: function( target, ratioWidth, ratioHeight)
	{
		target.width = ratioWidth;//gameWidth*ratioWidth;
		target.height = ratioHeight;//gameHeight*ratioHeight;
	}
};