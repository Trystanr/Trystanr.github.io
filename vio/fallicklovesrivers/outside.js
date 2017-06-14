(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 668,
	height: 531,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.back = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backhover = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.outside_1 = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pFour = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pOne = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pThree = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pTwo = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.rec = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.text = function() {
	this.spriteSheet = ss["outside_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.pTwo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pTwo();
	this.instance.setTransform(0,0,0.263,0.263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.9,85.5);


(lib.pThree_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pThree();
	this.instance.setTransform(0,0,0.263,0.263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,87.1);


(lib.pOne_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pOne();
	this.instance.setTransform(0,0,0.263,0.263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.7,71.8);


(lib.pFour_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pFour();
	this.instance.setTransform(0,0,0.263,0.263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.2,115.3);


(lib.backbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.517,0.517);

	this.instance_1 = new lib.backhover();
	this.instance_1.setTransform(0,0,0.519,0.519);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EEB8").s().p("AC1DDIkDgyQhWgQgyACQgdABgvAIQg5AKgTACQg+AHhugJQgngDgUgFQgggIgUgRQgQgPgMgYQgIgQgJgdQgghjAgg2QAZgpA6gPQAWgFAcgCIA0gBIKlABQBcAAAxgCQBOgEA9gNIAAABQA6gFAiABQAyADAlARQAsAUAXApQAaAsgOAqQgEALgMAWQgMATgEAMQgDAJgFAfQgDAagIANQgKASgXANQgQAJgcAKQhYAegxAKQg3ALhBAAQhBAAhLgLg");
	this.shape.setTransform(72.1,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.6,35.2);


(lib.Block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DCDDDA").ss(1,1,1).p("AmZkcIMzAAIAAI5IszAAg");
	this.shape.setTransform(41,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AmZEcIAAo4IMyAAIAAI4g");
	this.shape_1.setTransform(41,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,84,59);


// stage content:
(lib.outside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///////////////////////////////////
		// Start of Drag & Drop
		///////////////////////////////////
		var wind = new Audio('sounds/wind.mp3');
		wind.play();
		
		this.stop();
			this.pOne.addEventListener("mousedown", oneClicked.bind(this));
			this.pTwo.addEventListener("mousedown", twoClicked.bind(this));
			this.pThree.addEventListener("mousedown", threeClicked.bind(this));
			this.pFour.addEventListener("mousedown", fourClicked.bind(this));
			
			this.blueBlock.addEventListener("mousedown", mouseWasDown.bind(this));
			document.body.addEventListener('mouseup',mouseUp,false);
			stage.on("stagemousemove", function(e){ mouseMove(e); });
			stage.on("stagemousedown", function(e){ mouseDown(e); });
			
			var blockHead;
			var blockNeck;
			var blockArm;
			var blockBody;
			var iXMouse;
			var iXCurr;
			var bCanMove = false;
			var pieceOne = exportRoot.pOne;
			var pieceTwo = exportRoot.pTwo;
			var pieceThree = exportRoot.pThree;
			var pieceFour = exportRoot.pFour;
			blockNeck = pieceOne;
			blockHead = pieceTwo;
			blockArm = pieceThree;
			blockBody = pieceFour;
		
			function oneClicked()
			{
				mouseWasDown();
				blockNeck = pieceOne;
				block = pieceOne;
			}
			
			function twoClicked()	
			{
				mouseWasDown();
				blockHead = pieceTwo;
				block = pieceTwo;
				console.log("yas");
			}
		
			function threeClicked()		
			{
				mouseWasDown();
				blockArm = pieceThree;
				block = pieceThree;
			}
		
			function fourClicked()
			{
				mouseWasDown();
				blockBody = pieceFour;
				block = pieceFour;
			}
			
			function mouseDown(e)
			{
				iXMouse = e.stageX;
			}
			function mouseWasDown() {
				bCanMove = true;
				console.log("WHAT?");
		
			}
			function mouseUp()
			{
				bCanMove = false;
				if (blockNeck.y>120 && blockNeck.y<170)//The row is now set in stone 
				{
					if(blockNeck.x>230&&blockNeck.x<290)
					{
						blockNeck.x = 268.5;	//neck
						blockNeck.y = 142.75;
					}
				}
				if (blockHead.y>50 && blockHead.y<150)
				{
					if((blockHead.x>=210) && (blockHead.x<270))
					{
						console.log("DOWN?");
						blockHead.x = 239.2;	//head
						blockHead.y = 169.75;
						console.log("DOWN!");
					}	
				}
				if(block.y >=160 && block.y<200)
				{
					if(blockArm.x>200&&blockArm.x<250)
					{
						blockArm.x = 234;	//arm
						blockArm.y = 186.4;
					}
				}
				if(blockBody.y>=130&&blockBody.y<180)
				{
					{
						blockBody.x = 260.1;	//body
						blockBody.y = 158.25;
					}		
				}	
														
			}
			function mouseMove(e) 
			{
				if (bCanMove) {
					iXCurr = e.stageX;
					block.x = e.stageX;		
					block.y = e.stageY;	
					//blockhead.x = e.stageX;
					//blockhead.y = e.stageY;
				}
			}
		///////////////////////////////////
		// End of Drag & Drop
		///////////////////////////////////	
		this.backbtn.addEventListener("click", buttonClicked.bind(this));
		function buttonClicked()
		{
			window.open("FirstSceneSounds.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Actions
	this.instance = new lib.text();
	this.instance.setTransform(25.5,-38.3,0.273,0.273,10);

	this.backbtn = new lib.backbtn();
	this.backbtn.setTransform(520.4,485.8);
	new cjs.ButtonHelper(this.backbtn, 0, 1, 2, false, new lib.backbtn(), 3);

	this.pOne = new lib.pOne_1();
	this.pOne.setTransform(212,219.6,1,1,0,0,0,65.5,38);

	this.pTwo = new lib.pTwo_1();
	this.pTwo.setTransform(394.7,207.2,1,1,0,0,0,68.5,37.6);

	this.pFour = new lib.pFour_1();
	this.pFour.setTransform(431.6,343.1,1,1,0,0,0,68.5,37.7);

	this.pThree = new lib.pThree_1();
	this.pThree.setTransform(183.8,370.8,1,1,0,0,0,65.8,37.3);

	this.instance_1 = new lib.rec();
	this.instance_1.setTransform(69.6,129,2.413,2.413);

	this.instance_2 = new lib.outside_1();
	this.instance_2.setTransform(0,0,0.322,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.pThree},{t:this.pFour},{t:this.pTwo},{t:this.pOne},{t:this.backbtn},{t:this.instance}]}).to({state:[]},1).wait(5));

	// Layer 1
	this.blueBlock = new lib.Block();
	this.blueBlock.setTransform(850.9,115.1,1,1,0,0,0,41,28.5);

	this.timeline.addTween(cjs.Tween.get(this.blueBlock).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(331.1,227.2,895.3,570.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;