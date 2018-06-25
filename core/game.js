
function init() {
	var stage;  
	var queue;  
	var dice1;  
	var dice2;  
	var txt_dice1;  
	var txt_dice2;  

	var assetData = [
		{id: "dice1", src: "/Assets/images/1.png"},
		{id: "dice2", src: "/Assets/images/2.png"},
		{id: "dice3", src: "/Assets/images/3.png"},
		{id: "dice4", src: "/Assets/images/4.png"},
		{id: "dice5", src: "/Assets/images/5.png"},
		{id: "dice6", src: "/Assets/images/6.png"},
		{id: "start", src: "/Assets/images/StartButton.png"}
	]
	
	preload();
	
	function preload() {
		queue = new createjs.LoadQueue();
		queue.on("complete", begin, this);
		queue.loadManifest(assetData);
	}
	
	
	function begin() {
		stage = new createjs.Stage(document.getElementById("canvas"));
		createjs.Ticker.setFPS(60);
			createjs.Ticker.on("tick", update, this);
		
			var Image_Start = queue.getResult("start");
		var button_Start = new createjs.Bitmap(Image_Start);
		button_Start.addEventListener("click", showNewRoll);
		button_Start.x = 320;
		button_Start.y = 430;
		stage.addChild(button_Start);
	}
	
		function showNewRoll() {
	
		stage.removeChild(dice1);
		stage.removeChild(dice2);
		stage.removeChild(txt_dice1);
		stage.removeChild(txt_dice2);
		
	
		var txt1 = (Math.floor(Math.random() * 6) + 1);
		var txt2 = (Math.floor(Math.random() * 6) + 1);
		var img1 = queue.getResult("dice" + txt1);
		var img2 = queue.getResult("dice" + txt2);
		
			dice1 = new createjs.Bitmap(img1);
		dice2 = new createjs.Bitmap(img2);
		dice1.x = 640 - (dice1.getBounds().width * 2) - 50;
		dice2.x = 640 - (dice1.getBounds().width) - 30;
		dice1.y = 100;
		dice2.y = 100;
		 
			txt_dice1 = new createjs.Text(txt1, "20px console", "#000");
		txt_dice2 = new createjs.Text(txt2, "20px console", "#000");
		txt_dice1.x = dice1.x + (dice1.getBounds().width * 0.5);
		txt_dice2.x = dice2.x + (dice2.getBounds().width * 0.5);
		txt_dice1.y = 100 + dice1.getBounds().height + 20;
		txt_dice2.y = 100 + dice2.getBounds().height + 20;
		
			stage.addChild(dice1);
		stage.addChild(dice2);
		stage.addChild(txt_dice1);
		stage.addChild(txt_dice2);
	}
	

	function update() {
		stage.update();
	}
	
};

