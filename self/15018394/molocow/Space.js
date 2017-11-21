(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1280,
	height: 1024,
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



(lib.arrowbois = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asteroid_1 = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Asteroid_2 = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.moonpivot = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Spaceprompt = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Spacestart = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Space = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.stars = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.UFOtile = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.UFO = function() {
	this.spriteSheet = ss["Space_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moonpivot();
	this.instance.setTransform(-18.5,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-72.5,37,145);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrowbois();
	this.instance.setTransform(-100,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-250,200,500);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Spaceprompt();
	this.instance.setTransform(-250,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-100,500,200);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EoMUmTAMQYpAAAMAAAMmBMwYpAAAg");
	this.shape.setTransform(3355.8,2579.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EoMUGTBMAAAsmBMQYpAAAMAAAMmBg");
	this.shape_1.setTransform(3355.8,2579.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,6713.5,5160.7);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Space();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,1024);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UFOtile();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,576,12);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stars();
	this.instance.setTransform(0,0,1.961,1.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3295,1004.2);


(lib.EarthClick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAhwAAAQAANqp5JqQp5Jqt+AAQt9AAp5pqQp5pqAAtqQAAtpJ5pqQJ5pqN9AAQN+AAJ5JqQJ5JqAANpg");
	this.shape.setTransform(-8,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A32XUQp5pqAAtqQAAtpJ5pqQJ5pqN9AAQN+AAJ5JqQJ5JqgBNpQABNqp5JqQp5Jpt+AAQt9AAp5ppg");
	this.shape_1.setTransform(-8,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-186,434,424);


(lib.Asteroid_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asteroid_2();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.Asteroid_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asteroid_1();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.UFO_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/uCEIAAkHMA/dAAAIAAEHg");
	mask.setTransform(27.5,37.8);

	// Layer 4 copy
	this.instance = new lib.Symbol2();
	this.instance.setTransform(29.2,35.5,1,1,0,0,0,288,6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:24.9},0).wait(1).to({x:20.5},0).wait(1).to({x:16.2},0).wait(1).to({x:11.9},0).wait(1).to({x:7.5},0).wait(1).to({x:3.2},0).wait(1).to({x:-1.1},0).wait(1).to({x:-5.5},0).wait(1).to({x:-9.8},0).wait(1).to({x:-14.1},0).wait(1).to({x:-18.5},0).wait(1).to({x:-22.8},0).wait(1).to({x:-27.2},0).wait(1).to({x:-31.5},0).wait(1).to({x:-35.8},0).wait(1).to({x:-40.2},0).wait(1).to({x:-44.5},0).wait(1).to({x:-48.8},0).wait(1).to({x:-53.2},0).wait(1).to({x:-57.5},0).wait(1).to({x:-61.8},0).wait(1).to({x:-66.2},0).wait(1).to({x:-70.5},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.UFO();
	this.instance_1.setTransform(-256,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-256,512,512);


(lib.Moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(0.5,72.3,1,1,0,0,0,0.5,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},200).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-72.5,37,145);


// stage content:



(lib.Flyingthroughspace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var win = false;
		var started = false;
		var block = exportRoot.UFO_Game; 
		var direction = 0;
		var directionDecay = 10;
		
		var theScene = this;
		
		this.stop();
		createjs.Ticker.addEventListener("tick", moveBlock); 
		window.onkeydown = keyPressed.bind(this);
		window.onkeyup = keyUp.bind(this);
		
		function keyPressed(e) {
			
			//directionDecay = 10;
			
			if (!win) {
				if (e.keyCode == 40) {
					direction = 1;
				} else if (e.keyCode == 38) {
					direction = 2;
				}
			}
		}
		
		function keyUp(e) {
			direction = 0;
			
			if (e.keyCode==32) {
				started = true;
				theScene.play();
			}
		}
		
		function moveBlock() 
		{
			if (started) {
			
				if (direction == 1) {
					if(block.y + (block.nominalBounds.width/2) >= 1000){ 
						directionDecay= 1;
					} else {
						directionDecay= 10;
					}
				}
				
				if (direction == 2) {
					if(block.y + (block.nominalBounds.width/2) <= 500){ 
						directionDecay= 1;
					} else {
						directionDecay= 10;
					}
				}
				
				//0 = no
				//1 = up
				//2 = down
				if (direction == 1) {
					block.y += 1*directionDecay;
				} else if (direction == 2) {
					block.y -= 1*directionDecay;
				} else {
					
				}
			}
		}
	}
	this.frame_485 = function() {
		this.stop();
		
		this.earthButton.addEventListener("click", buttonClicked.bind(this)); 
		 
		function buttonClicked() 
		{ 
			this.play();
		}
	}
	this.frame_504 = function() {
		this.stop();
		
		window.open("Farm.html","_self");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(485).call(this.frame_485).wait(19).call(this.frame_504).wait(1));

	// Layer 7
	this.earthButton = new lib.EarthClick();
	this.earthButton.setTransform(798.1,504,0.383,0.383);
	this.earthButton.compositeOperation = "lighter";
	this.earthButton._off = true;
	new cjs.ButtonHelper(this.earthButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.earthButton).wait(485).to({_off:false},0).to({_off:true},1).wait(19));

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(263.3,315.9,1,1,0,0,0,3355.8,2579.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(497).to({_off:false},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Moon();
	this.instance_1.setTransform(797.5,452.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(485).to({_off:false},0).to({_off:true},1).wait(19));

	// Background
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(640,1536.4,1,1,0,0,0,640,512);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(466).to({_off:false},0).wait(1).to({y:1479.6},0).wait(1).to({y:1422.7},0).wait(1).to({y:1365.9},0).wait(1).to({y:1309.1},0).wait(1).to({y:1252.2},0).wait(1).to({y:1195.4},0).wait(1).to({y:1138.6},0).wait(1).to({y:1081.7},0).wait(1).to({y:1024.9},0).wait(1).to({y:968.1},0).wait(1).to({y:911.2},0).wait(1).to({y:854.4},0).wait(1).to({y:797.6},0).wait(1).to({y:740.7},0).wait(1).to({y:683.9},0).wait(1).to({y:627.1},0).wait(1).to({y:570.2},0).wait(1).to({y:513.4},0).wait(2).to({scaleX:1.42,scaleY:1.42,x:575,y:516.2},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:509.9,y:518.9},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:445,y:521.7},0).wait(1).to({scaleX:2.68,scaleY:2.68,x:379.9,y:524.4},0).wait(1).to({scaleX:3.09,scaleY:3.09,x:314.8,y:527.2},0).wait(1).to({scaleX:3.51,scaleY:3.51,x:249.8,y:529.9},0).wait(1).to({scaleX:3.93,scaleY:3.93,x:184.8,y:532.7},0).wait(1).to({scaleX:4.35,scaleY:4.35,x:119.7,y:535.5},0).wait(1).to({scaleX:4.77,scaleY:4.77,x:54.7,y:538.2},0).wait(1).to({scaleX:5.19,scaleY:5.19,x:-10.4,y:541},0).wait(1).to({scaleX:5.61,scaleY:5.61,x:-75.5,y:543.7},0).wait(1).to({scaleX:6.03,scaleY:6.03,x:-140.4,y:546.4},0).wait(1).to({scaleX:6.44,scaleY:6.44,x:-205.6,y:549.2},0).wait(1).to({scaleX:6.86,scaleY:6.86,x:-270.6,y:551.9},0).wait(1).to({scaleX:7.28,scaleY:7.28,x:-335.7,y:554.7},0).wait(1).to({scaleX:7.7,scaleY:7.7,x:-400.7,y:557.4},0).wait(1).to({scaleX:8.12,scaleY:8.12,x:-465.8,y:560.2},0).wait(1).to({scaleX:8.54,scaleY:8.54,x:-530.7,y:563},0).wait(1).to({scaleX:8.96,scaleY:8.96,x:-595.8,y:565.7},0).wait(1));

	// Asteroid_2
	this.instance_3 = new lib.Asteroid_1_1("synched",0);
	this.instance_3.setTransform(1465.4,170.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(178).to({_off:false},0).wait(1).to({x:1458.4},0).wait(1).to({x:1451.3},0).wait(1).to({x:1444.3},0).wait(1).to({x:1437.3},0).wait(1).to({x:1430.3},0).wait(1).to({x:1423.2},0).wait(1).to({x:1416.2},0).wait(1).to({x:1409.2},0).wait(1).to({x:1402.2},0).wait(1).to({x:1395.1},0).wait(1).to({x:1388.1},0).wait(1).to({x:1381.1},0).wait(1).to({x:1374},0).wait(1).to({x:1367},0).wait(1).to({x:1360},0).wait(1).to({x:1353},0).wait(1).to({x:1345.9},0).wait(1).to({x:1338.9},0).wait(1).to({x:1331.9},0).wait(1).to({x:1324.9},0).wait(1).to({x:1317.8},0).wait(1).to({x:1310.8},0).wait(1).to({x:1303.8},0).wait(1).to({x:1296.8},0).wait(1).to({x:1289.7},0).wait(1).to({x:1282.7},0).wait(1).to({x:1275.7},0).wait(1).to({x:1268.7},0).wait(1).to({x:1261.6},0).wait(1).to({x:1254.6},0).wait(1).to({x:1247.6},0).wait(1).to({x:1240.5},0).wait(1).to({x:1233.5},0).wait(1).to({x:1226.5},0).wait(1).to({x:1219.5},0).wait(1).to({x:1212.4},0).wait(1).to({x:1205.4},0).wait(1).to({x:1198.4},0).wait(1).to({x:1191.3},0).wait(1).to({x:1184.3},0).wait(1).to({x:1177.3},0).wait(1).to({x:1170.3},0).wait(1).to({x:1163.2},0).wait(1).to({x:1156.2},0).wait(1).to({x:1149.2},0).wait(1).to({x:1142.2},0).wait(1).to({x:1135.1},0).wait(1).to({x:1128.1},0).wait(1).to({x:1121.1},0).wait(1).to({x:1114},0).wait(1).to({x:1107},0).wait(1).to({x:1100},0).wait(1).to({x:1093},0).wait(1).to({x:1085.9},0).wait(1).to({x:1078.9},0).wait(1).to({x:1071.9},0).wait(1).to({x:1064.9},0).wait(1).to({x:1057.8},0).wait(1).to({x:1050.8},0).wait(1).to({x:1043.8},0).wait(1).to({x:1036.8},0).wait(1).to({x:1029.7},0).wait(1).to({x:1022.7},0).wait(1).to({x:1015.7},0).wait(1).to({x:1008.6},0).wait(1).to({x:1001.6},0).wait(1).to({x:994.6},0).wait(1).to({x:987.6},0).wait(1).to({x:980.5},0).wait(1).to({x:973.5},0).wait(1).to({x:966.5},0).wait(1).to({x:959.5},0).wait(1).to({x:952.4},0).wait(1).to({x:945.4},0).wait(1).to({x:938.4},0).wait(1).to({x:931.3},0).wait(1).to({x:924.3},0).wait(1).to({x:917.3},0).wait(1).to({x:910.3},0).wait(1).to({x:903.2},0).wait(1).to({x:896.2},0).wait(1).to({x:889.2},0).wait(1).to({x:882.2},0).wait(1).to({x:875.1},0).wait(1).to({x:868.1},0).wait(1).to({x:861.1},0).wait(1).to({x:854},0).wait(1).to({x:847},0).wait(1).to({x:840},0).wait(1).to({x:833},0).wait(1).to({x:825.9},0).wait(1).to({x:818.9},0).wait(1).to({x:811.9},0).wait(1).to({x:804.9},0).wait(1).to({x:797.8},0).wait(1).to({x:790.8},0).wait(1).to({x:783.8},0).wait(1).to({x:776.8},0).wait(1).to({x:769.7},0).wait(1).to({x:762.7},0).wait(1).to({x:755.7},0).wait(1).to({x:748.6},0).wait(1).to({x:741.6},0).wait(1).to({x:734.6},0).wait(1).to({x:727.6},0).wait(1).to({x:720.5},0).wait(1).to({x:713.5},0).wait(1).to({x:706.5},0).wait(1).to({x:699.5},0).wait(1).to({x:692.4},0).wait(1).to({x:685.4},0).wait(1).to({x:678.4},0).wait(1).to({x:671.3},0).wait(1).to({x:664.3},0).wait(1).to({x:657.3},0).wait(1).to({x:650.3},0).wait(1).to({x:643.2},0).wait(1).to({x:636.2},0).wait(1).to({x:629.2},0).wait(1).to({x:622.2},0).wait(1).to({x:615.1},0).wait(1).to({x:608.1},0).wait(1).to({x:601.1},0).wait(1).to({x:594.1},0).wait(1).to({x:587},0).wait(1).to({x:580},0).wait(1).to({x:573},0).wait(1).to({x:565.9},0).wait(1).to({x:558.9},0).wait(1).to({x:551.9},0).wait(1).to({x:544.9},0).wait(1).to({x:537.8},0).wait(1).to({x:530.8},0).wait(1).to({x:523.8},0).wait(1).to({x:516.8},0).wait(1).to({x:509.7},0).wait(1).to({x:502.7},0).wait(1).to({x:495.7},0).wait(1).to({x:488.6},0).wait(1).to({x:481.6},0).wait(1).to({x:474.6},0).wait(1).to({x:467.6},0).wait(1).to({x:460.5},0).wait(1).to({x:453.5},0).wait(1).to({x:446.5},0).wait(1).to({x:439.5},0).wait(1).to({x:432.4},0).wait(1).to({x:425.4},0).wait(1).to({x:418.4},0).wait(1).to({x:411.3},0).wait(1).to({x:404.3},0).wait(1).to({x:397.3},0).wait(1).to({x:390.3},0).wait(1).to({x:383.2},0).wait(1).to({x:376.2},0).wait(1).to({x:369.2},0).wait(1).to({x:362.2},0).wait(1).to({x:355.1},0).wait(1).to({x:348.1},0).wait(1).to({x:341.1},0).wait(1).to({x:334},0).wait(1).to({x:327},0).wait(1).to({x:320},0).wait(1).to({x:313},0).wait(1).to({x:305.9},0).wait(1).to({x:298.9},0).wait(1).to({x:291.9},0).wait(1).to({x:284.9},0).wait(1).to({x:277.8},0).wait(1).to({x:270.8},0).wait(1).to({x:263.8},0).wait(1).to({x:256.8},0).wait(1).to({x:249.7},0).wait(1).to({x:242.7},0).wait(1).to({x:235.7},0).wait(1).to({x:228.6},0).wait(1).to({x:221.6},0).wait(1).to({x:214.6},0).wait(1).to({x:207.6},0).wait(1).to({x:200.5},0).wait(1).to({x:193.5},0).wait(1).to({x:186.5},0).wait(1).to({x:179.5},0).wait(1).to({x:172.4},0).wait(1).to({x:165.4},0).wait(1).to({x:158.4},0).wait(1).to({x:151.3},0).wait(1).to({x:144.3},0).wait(1).to({x:137.3},0).wait(1).to({x:130.3},0).wait(1).to({x:123.2},0).wait(1).to({x:116.2},0).wait(1).to({x:109.2},0).wait(1).to({x:102.2},0).wait(1).to({x:95.1},0).wait(1).to({x:88.1},0).wait(1).to({x:81.1},0).wait(1).to({x:74},0).wait(1).to({x:67},0).wait(1).to({x:60},0).wait(1).to({x:53},0).wait(1).to({x:45.9},0).wait(1).to({x:38.9},0).wait(1).to({x:31.9},0).wait(1).to({x:24.9},0).wait(1).to({x:17.8},0).wait(1).to({x:10.8},0).wait(1).to({x:3.8},0).wait(1).to({x:-3.2},0).wait(1).to({x:-10.3},0).wait(1).to({x:-17.3},0).wait(1).to({x:-24.3},0).wait(1).to({x:-31.4},0).wait(1).to({x:-38.4},0).wait(1).to({x:-45.4},0).wait(1).to({x:-52.4},0).wait(1).to({x:-59.5},0).wait(1).to({x:-66.5},0).wait(1).to({x:-73.5},0).wait(1).to({x:-80.5},0).wait(1).to({x:-87.6},0).wait(1).to({x:-94.6},0).to({_off:true},1).wait(104));

	// Arrow indicators
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(227,562.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},8).to({_off:true},1).wait(496));

	// Space button
	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(613.9,880.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},8).to({_off:true},1).wait(496));

	// UFO_1
	this.UFO_Game = new lib.UFO_1();
	this.UFO_Game.setTransform(309,531.8);

	this.timeline.addTween(cjs.Tween.get(this.UFO_Game).wait(421).to({_off:true},1).wait(83));

	// Asteroid_1
	this.instance_6 = new lib.Asteroid_2_1("synched",0);
	this.instance_6.setTransform(1457.6,502.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).wait(1).to({x:1447.2},0).wait(1).to({x:1436.9},0).wait(1).to({x:1426.6},0).wait(1).to({x:1416.2},0).wait(1).to({x:1405.9},0).wait(1).to({x:1395.6},0).wait(1).to({x:1385.2},0).wait(1).to({x:1374.9},0).wait(1).to({x:1364.6},0).wait(1).to({x:1354.2},0).wait(1).to({x:1343.9},0).wait(1).to({x:1333.6},0).wait(1).to({x:1323.2},0).wait(1).to({x:1312.9},0).wait(1).to({x:1302.6},0).wait(1).to({x:1292.3},0).wait(1).to({x:1281.9},0).wait(1).to({x:1271.6},0).wait(1).to({x:1261.3},0).wait(1).to({x:1250.9},0).wait(1).to({x:1240.6},0).wait(1).to({x:1230.3},0).wait(1).to({x:1219.9},0).wait(1).to({x:1209.6},0).wait(1).to({x:1199.3},0).wait(1).to({x:1188.9},0).wait(1).to({x:1178.6},0).wait(1).to({x:1168.3},0).wait(1).to({x:1157.9},0).wait(1).to({x:1147.6},0).wait(1).to({x:1137.3},0).wait(1).to({x:1127},0).wait(1).to({x:1116.6},0).wait(1).to({x:1106.3},0).wait(1).to({x:1096},0).wait(1).to({x:1085.6},0).wait(1).to({x:1075.3},0).wait(1).to({x:1065},0).wait(1).to({x:1054.6},0).wait(1).to({x:1044.3},0).wait(1).to({x:1034},0).wait(1).to({x:1023.6},0).wait(1).to({x:1013.3},0).wait(1).to({x:1003},0).wait(1).to({x:992.6},0).wait(1).to({x:982.3},0).wait(1).to({x:972},0).wait(1).to({x:961.7},0).wait(1).to({x:951.3},0).wait(1).to({x:941},0).wait(1).to({x:930.7},0).wait(1).to({x:920.3},0).wait(1).to({x:910},0).wait(1).to({x:899.7},0).wait(1).to({x:889.3},0).wait(1).to({x:879},0).wait(1).to({x:868.7},0).wait(1).to({x:858.3},0).wait(1).to({x:848},0).wait(1).to({x:837.7},0).wait(1).to({x:827.4},0).wait(1).to({x:817},0).wait(1).to({x:806.7},0).wait(1).to({x:796.4},0).wait(1).to({x:786},0).wait(1).to({x:775.7},0).wait(1).to({x:765.4},0).wait(1).to({x:755},0).wait(1).to({x:744.7},0).wait(1).to({x:734.4},0).wait(1).to({x:724},0).wait(1).to({x:713.7},0).wait(1).to({x:703.4},0).wait(1).to({x:693},0).wait(1).to({x:682.7},0).wait(1).to({x:672.4},0).wait(1).to({x:662.1},0).wait(1).to({x:651.7},0).wait(1).to({x:641.4},0).wait(1).to({x:631.1},0).wait(1).to({x:620.7},0).wait(1).to({x:610.4},0).wait(1).to({x:600.1},0).wait(1).to({x:589.7},0).wait(1).to({x:579.4},0).wait(1).to({x:569.1},0).wait(1).to({x:558.7},0).wait(1).to({x:548.4},0).wait(1).to({x:538.1},0).wait(1).to({x:527.7},0).wait(1).to({x:517.4},0).wait(1).to({x:507.1},0).wait(1).to({x:496.8},0).wait(1).to({x:486.4},0).wait(1).to({x:476.1},0).wait(1).to({x:465.8},0).wait(1).to({x:455.4},0).wait(1).to({x:445.1},0).wait(1).to({x:434.8},0).wait(1).to({x:424.4},0).wait(1).to({x:414.1},0).wait(1).to({x:403.8},0).wait(1).to({x:393.4},0).wait(1).to({x:383.1},0).wait(1).to({x:372.8},0).wait(1).to({x:362.5},0).wait(1).to({x:352.1},0).wait(1).to({x:341.8},0).wait(1).to({x:331.5},0).wait(1).to({x:321.1},0).wait(1).to({x:310.8},0).wait(1).to({x:300.5},0).wait(1).to({x:290.1},0).wait(1).to({x:279.8},0).wait(1).to({x:269.5},0).wait(1).to({x:259.1},0).wait(1).to({x:248.8},0).wait(1).to({x:238.5},0).wait(1).to({x:228.1},0).wait(1).to({x:217.8},0).wait(1).to({x:207.5},0).wait(1).to({x:197.2},0).wait(1).to({x:186.8},0).wait(1).to({x:176.5},0).wait(1).to({x:166.2},0).wait(1).to({x:155.8},0).wait(1).to({x:145.5},0).wait(1).to({x:135.2},0).wait(1).to({x:124.8},0).wait(1).to({x:114.5},0).wait(1).to({x:104.2},0).wait(1).to({x:93.8},0).wait(1).to({x:83.5},0).wait(1).to({x:73.2},0).wait(1).to({x:62.8},0).wait(1).to({x:52.5},0).wait(1).to({x:42.2},0).wait(1).to({x:31.9},0).wait(1).to({x:21.5},0).wait(1).to({x:11.2},0).wait(1).to({x:0.9},0).wait(1).to({x:-9.5},0).wait(1).to({x:-19.8},0).wait(1).to({x:-30.1},0).wait(1).to({x:-40.5},0).wait(1).to({x:-50.8},0).wait(1).to({x:-61.1},0).wait(1).to({x:-71.5},0).wait(1).to({x:-81.8},0).wait(1).to({x:-92.1},0).wait(1).to({x:-102.4},0).to({_off:true},1).wait(306));

	// Stars
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(1735.6,503.6,1,1,0,0,0,1647.5,502.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({x:1727.4},0).wait(1).to({x:1719.1},0).wait(1).to({x:1710.9},0).wait(1).to({x:1702.7,y:503.7},0).wait(1).to({x:1694.4},0).wait(1).to({x:1686.2},0).wait(1).to({x:1678,y:503.8},0).wait(1).to({x:1669.8},0).wait(1).to({x:1661.5},0).wait(1).to({x:1653.3,y:503.9},0).wait(1).to({x:1645.1},0).wait(1).to({x:1636.9},0).wait(1).to({x:1628.6,y:504},0).wait(1).to({x:1620.4},0).wait(1).to({x:1612.2},0).wait(1).to({x:1604,y:504.1},0).wait(1).to({x:1595.7},0).wait(1).to({x:1587.5},0).wait(1).to({x:1579.3,y:504.2},0).wait(1).to({x:1571},0).wait(1).to({x:1562.8},0).wait(1).to({x:1554.6,y:504.3},0).wait(1).to({x:1546.3},0).wait(1).to({x:1538.1},0).wait(1).to({x:1529.9,y:504.4},0).wait(1).to({x:1521.6},0).wait(1).to({x:1513.4},0).wait(1).to({x:1505.2,y:504.5},0).wait(1).to({x:1497},0).wait(1).to({x:1488.7},0).wait(1).to({x:1480.5,y:504.6},0).wait(1).to({x:1472.3},0).wait(1).to({x:1464},0).wait(1).to({x:1455.8,y:504.7},0).wait(1).to({x:1447.6},0).wait(1).to({x:1439.3},0).wait(1).to({x:1431.1,y:504.8},0).wait(1).to({x:1422.9},0).wait(1).to({x:1414.6},0).wait(1).to({x:1406.4,y:504.9},0).wait(1).to({x:1398.2},0).wait(1).to({x:1390},0).wait(1).to({x:1381.7,y:505},0).wait(1).to({x:1373.5},0).wait(1).to({x:1365.3},0).wait(1).to({x:1357,y:505.1},0).wait(1).to({x:1348.8},0).wait(1).to({x:1340.6},0).wait(1).to({x:1332.3,y:505.2},0).wait(1).to({x:1324.1},0).wait(1).to({x:1315.9},0).wait(1).to({x:1307.6,y:505.3},0).wait(1).to({x:1299.4},0).wait(1).to({x:1291.2},0).wait(1).to({x:1283,y:505.4},0).wait(1).to({x:1274.7},0).wait(1).to({x:1266.5},0).wait(1).to({x:1258.3,y:505.5},0).wait(1).to({x:1250},0).wait(1).to({x:1241.8},0).wait(1).to({x:1233.6,y:505.6},0).wait(1).to({x:1225.3},0).wait(1).to({x:1217.1},0).wait(1).to({x:1208.9,y:505.7},0).wait(1).to({x:1200.6},0).wait(1).to({x:1192.4},0).wait(1).to({x:1184.2,y:505.8},0).wait(1).to({x:1175.9},0).wait(1).to({x:1167.7},0).wait(1).to({x:1159.5,y:505.9},0).wait(1).to({x:1151.3},0).wait(1).to({x:1143},0).wait(1).to({x:1134.8,y:506},0).wait(1).to({x:1126.6},0).wait(1).to({x:1118.3},0).wait(1).to({x:1110.1,y:506.1},0).wait(1).to({x:1101.9},0).wait(1).to({x:1093.6},0).wait(1).to({x:1085.4,y:506.2},0).wait(1).to({x:1077.2},0).wait(1).to({x:1068.9},0).wait(1).to({x:1060.7,y:506.3},0).wait(1).to({x:1052.5},0).wait(1).to({x:1044.3},0).wait(1).to({x:1036,y:506.4},0).wait(1).to({x:1027.8},0).wait(1).to({x:1019.6},0).wait(1).to({x:1011.3,y:506.5},0).wait(1).to({x:1003.1},0).wait(1).to({x:994.9},0).wait(1).to({x:986.6,y:506.6},0).wait(1).to({x:978.4},0).wait(1).to({x:970.2},0).wait(1).to({x:961.9,y:506.7},0).wait(1).to({x:953.7},0).wait(1).to({x:945.5},0).wait(1).to({x:937.3,y:506.8},0).wait(1).to({x:929},0).wait(1).to({x:920.8},0).wait(1).to({x:912.6,y:506.9},0).wait(1).to({x:904.3},0).wait(1).to({x:896.1},0).wait(1).to({x:887.9,y:507},0).wait(1).to({x:879.6},0).wait(1).to({x:871.4},0).wait(1).to({x:863.2,y:507.1},0).wait(1).to({x:854.9},0).wait(1).to({x:846.7},0).wait(1).to({x:838.5,y:507.2},0).wait(1).to({x:830.3},0).wait(1).to({x:822},0).wait(1).to({x:813.8,y:507.3},0).wait(1).to({x:805.6},0).wait(1).to({x:797.3},0).wait(1).to({x:789.1,y:507.4},0).wait(1).to({x:780.9},0).wait(1).to({x:772.6},0).wait(1).to({x:764.4,y:507.5},0).wait(1).to({x:756.2},0).wait(1).to({x:747.9},0).wait(1).to({x:739.7,y:507.6},0).wait(1).to({x:731.5},0).wait(1).to({x:723.2},0).wait(1).to({x:715,y:507.7},0).wait(1).to({x:706.8},0).wait(1).to({x:698.6},0).wait(1).to({x:690.3,y:507.8},0).wait(1).to({x:682.1},0).wait(1).to({x:673.9},0).wait(1).to({x:665.6,y:507.9},0).wait(1).to({x:657.4},0).wait(1).to({x:649.2},0).wait(1).to({x:640.9,y:508},0).wait(1).to({x:632.7},0).wait(1).to({x:624.5},0).wait(1).to({x:616.2,y:508.1},0).wait(1).to({x:608},0).wait(1).to({x:599.8},0).wait(1).to({x:591.6,y:508.2},0).wait(1).to({x:583.3},0).wait(1).to({x:575.1},0).wait(1).to({x:566.9,y:508.3},0).wait(1).to({x:558.6},0).wait(1).to({x:550.4},0).wait(1).to({x:542.2,y:508.4},0).wait(1).to({x:533.9},0).wait(1).to({x:525.7},0).wait(1).to({x:517.5,y:508.5},0).wait(1).to({x:509.2},0).wait(1).to({x:501},0).wait(1).to({x:492.8,y:508.6},0).wait(1).to({x:484.6},0).wait(1).to({x:476.3},0).wait(1).to({x:468.1,y:508.7},0).wait(1).to({x:459.9},0).wait(1).to({x:451.6},0).wait(1).to({x:443.4,y:508.8},0).wait(1).to({x:435.2},0).wait(1).to({x:426.9},0).wait(1).to({x:418.7,y:508.9},0).wait(1).to({x:410.5},0).wait(1).to({x:402.2},0).wait(1).to({x:394,y:509},0).wait(1).to({x:385.8},0).wait(1).to({x:377.6},0).wait(1).to({x:369.3,y:509.1},0).wait(1).to({x:361.1},0).wait(1).to({x:352.9},0).wait(1).to({x:344.6,y:509.2},0).wait(1).to({x:336.4},0).wait(1).to({x:328.2},0).wait(1).to({x:319.9,y:509.3},0).wait(1).to({x:311.7},0).wait(1).to({x:303.5},0).wait(1).to({x:295.2,y:509.4},0).wait(1).to({x:287},0).wait(1).to({x:278.8},0).wait(1).to({x:270.5,y:509.5},0).wait(1).to({x:262.3},0).wait(1).to({x:254.1},0).wait(1).to({x:245.9,y:509.6},0).wait(1).to({x:237.6},0).wait(1).to({x:229.4},0).wait(1).to({x:221.2,y:509.7},0).wait(1).to({x:212.9},0).wait(1).to({x:204.7},0).wait(1).to({x:196.5,y:509.8},0).wait(1).to({x:188.2},0).wait(1).to({x:180},0).wait(1).to({x:171.8,y:509.9},0).wait(1).to({x:163.5},0).wait(1).to({x:155.3},0).wait(1).to({x:147.1,y:510},0).wait(1).to({x:138.9},0).wait(1).to({x:130.6},0).wait(1).to({x:122.4,y:510.1},0).wait(1).to({x:114.2},0).wait(1).to({x:105.9},0).wait(1).to({x:97.7,y:510.2},0).wait(1).to({x:89.5},0).wait(1).to({x:81.2},0).wait(1).to({x:73,y:510.3},0).wait(1).to({x:64.8},0).wait(1).to({x:56.5},0).wait(1).to({x:48.3,y:510.4},0).wait(1).to({x:40.1},0).wait(1).to({x:31.9},0).wait(1).to({x:23.6,y:510.5},0).wait(1).to({x:15.4},0).wait(1).to({x:7.2},0).wait(1).to({x:-1.1,y:510.6},0).wait(1).to({x:-9.3},0).wait(1).to({x:-17.5},0).wait(1).to({x:-25.8,y:510.7},0).wait(1).to({x:-34},0).wait(1).to({x:-42.2},0).wait(1).to({x:-50.5,y:510.8},0).wait(1).to({x:-58.7},0).wait(1).to({x:-66.9},0).wait(1).to({x:-75.1,y:510.9},0).wait(1).to({x:-83.4},0).wait(1).to({x:-91.6},0).wait(1).to({x:-99.8,y:511},0).wait(1).to({x:-108.1},0).wait(1).to({x:-116.3},0).wait(1).to({x:-124.5,y:511.1},0).wait(1).to({x:-132.8},0).wait(1).to({x:-141},0).wait(1).to({x:-149.2,y:511.2},0).wait(1).to({x:-157.4},0).wait(1).to({x:-165.7},0).wait(1).to({x:-173.9,y:511.3},0).wait(1).to({x:-182.1},0).wait(1).to({x:-190.4},0).wait(1).to({x:-198.6,y:511.4},0).wait(1).to({x:-206.8},0).wait(1).to({x:-215.1},0).wait(1).to({x:-223.3,y:511.5},0).wait(1).to({x:-231.5},0).wait(1).to({x:-239.8},0).wait(1).to({x:-248,y:511.6},0).wait(1).to({x:-256.2},0).wait(1).to({x:-264.5},0).wait(1).to({x:-272.7,y:511.7},0).wait(1).to({x:-280.9},0).wait(1).to({x:-289.2},0).wait(1).to({x:-297.4,y:511.8},0).wait(1).to({x:-305.6},0).wait(1).to({x:-313.8},0).wait(1).to({x:-322.1,y:511.9},0).wait(1).to({x:-330.3},0).wait(1).to({x:-338.5},0).wait(1).to({x:-346.8,y:512},0).wait(1).to({x:-355},0).wait(1).to({x:-363.2},0).wait(1).to({x:-371.5,y:512.1},0).wait(1).to({x:-379.7},0).wait(1).to({x:-387.9},0).wait(1).to({x:-396.2,y:512.2},0).wait(1).to({x:-404.4},0).wait(1).to({x:-412.6},0).wait(1).to({x:-420.8,y:512.3},0).wait(1).to({x:-429.1},0).wait(1).to({x:-437.3},0).wait(1).to({x:-445.5,y:512.4},0).wait(1).to({x:-453.8},0).wait(1).to({x:-462},0).wait(1).to({x:-470.2,y:512.5},0).wait(1).to({x:-478.5},0).wait(1).to({x:-486.7},0).wait(1).to({x:-494.9,y:512.6},0).wait(1).to({x:-503.2},0).wait(1).to({x:-511.4},0).wait(1).to({x:-519.6,y:512.7},0).wait(1).to({x:-527.8},0).wait(1).to({x:-536.1},0).wait(1).to({x:-544.3},0).wait(1).to({x:-552.5,y:512.8},0).wait(1).to({x:-560.8},0).wait(1).to({x:-569},0).wait(1).to({x:-577.2,y:512.9},0).wait(1).to({x:-585.5},0).wait(1).to({x:-593.7},0).wait(1).to({x:-601.9,y:513},0).wait(1).to({x:-610.2},0).wait(1).to({x:-618.4},0).wait(1).to({x:-626.6,y:513.1},0).wait(1).to({x:-634.8},0).wait(1).to({x:-643.1},0).wait(1).to({x:-651.3,y:513.2},0).wait(1).to({x:-659.5},0).wait(1).to({x:-667.8},0).wait(1).to({x:-676,y:513.3},0).wait(1).to({x:-684.2},0).wait(1).to({x:-692.5},0).wait(1).to({x:-700.7,y:513.4},0).wait(1).to({x:-708.9},0).wait(1).to({x:-717.2},0).wait(1).to({x:-725.4,y:513.5},0).wait(1).to({x:-733.6},0).wait(1).to({x:-741.9},0).wait(1).to({x:-750.1,y:513.6},0).wait(1).to({x:-758.3},0).wait(1).to({x:-766.5},0).wait(1).to({x:-774.8,y:513.7},0).wait(1).to({x:-783},0).wait(1).to({x:-791.2},0).wait(1).to({x:-799.5,y:513.8},0).wait(1).to({x:-807.7},0).wait(1).to({x:-815.9},0).wait(1).to({x:-824.2,y:513.9},0).wait(1).to({x:-832.4},0).wait(1).to({x:-840.6},0).wait(1).to({x:-848.9,y:514},0).wait(1).to({x:-857.1},0).wait(1).to({x:-865.3},0).wait(1).to({x:-873.5,y:514.1},0).wait(1).to({x:-881.8},0).wait(1).to({x:-890},0).wait(1).to({x:-898.2,y:514.2},0).wait(1).to({x:-906.5},0).wait(1).to({x:-914.7},0).wait(1).to({x:-922.9,y:514.3},0).wait(1).to({x:-931.2},0).wait(1).to({x:-939.4},0).wait(1).to({x:-947.6,y:514.4},0).wait(1).to({x:-955.9},0).wait(1).to({x:-964.1},0).wait(1).to({x:-972.3,y:514.5},0).wait(1).to({x:-980.5},0).wait(1).to({x:-988.8},0).wait(1).to({x:-997,y:514.6},0).wait(1).to({x:-1005.2},0).wait(1).to({x:-1013.5},0).wait(1).to({x:-1021.7,y:514.7},0).wait(1).to({x:-1029.9},0).wait(1).to({x:-1038.2},0).wait(1).to({x:-1046.4,y:514.8},0).wait(1).to({x:-1054.6},0).wait(1).to({x:-1062.9},0).wait(1).to({x:-1071.1,y:514.9},0).wait(1).to({x:-1079.3},0).wait(1).to({x:-1087.5},0).wait(1).to({x:-1095.8,y:515},0).wait(1).to({x:-1104},0).wait(1).to({x:-1112.2},0).wait(1).to({x:-1120.5,y:515.1},0).wait(1).to({x:-1128.7},0).wait(1).to({x:-1136.9},0).wait(1).to({x:-1145.2,y:515.2},0).wait(1).to({x:-1153.4},0).wait(1).to({x:-1161.6},0).wait(1).to({x:-1169.9,y:515.3},0).wait(1).to({x:-1178.1},0).wait(1).to({x:-1186.3},0).wait(1).to({x:-1194.6,y:515.4},0).wait(1).to({x:-1202.8},0).wait(1).to({x:-1211},0).wait(1).to({x:-1219.2,y:515.5},0).wait(1).to({x:-1227.5},0).wait(1).to({x:-1235.7},0).wait(1).to({x:-1243.9,y:515.6},0).wait(1).to({x:-1252.2},0).wait(1).to({x:-1260.4},0).wait(1).to({x:-1268.6,y:515.7},0).wait(1).to({x:-1276.9},0).wait(1).to({x:-1285.1},0).wait(1).to({x:-1293.3,y:515.8},0).wait(1).to({x:-1301.6},0).wait(1).to({x:-1309.8},0).wait(1).to({x:-1318,y:515.9},0).wait(1).to({x:-1326.2},0).wait(1).to({x:-1334.5},0).wait(1).to({x:-1342.7,y:516},0).wait(1).to({x:-1350.9},0).wait(1).to({x:-1359.2},0).wait(1).to({x:-1367.4,y:516.1},0).wait(1).to({x:-1375.6},0).wait(1).to({x:-1383.9},0).wait(1).to({x:-1392.1,y:516.2},0).wait(1).to({x:-1400.3},0).wait(1).to({x:-1408.6},0).wait(1).to({x:-1416.8,y:516.3},0).wait(1).to({x:-1425},0).wait(1).to({x:-1433.2},0).wait(1).to({x:-1441.5,y:516.4},0).wait(1).to({x:-1449.7},0).wait(1).to({x:-1457.9},0).wait(1).to({x:-1466.2,y:516.5},0).wait(1).to({x:-1474.4},0).wait(1).to({x:-1482.6},0).wait(1).to({x:-1490.9,y:516.6},0).wait(1).to({x:-1499.1},0).wait(1).to({x:-1507.3},0).wait(1).to({x:-1515.6,y:516.7},0).wait(1).to({x:-1523.8},0).wait(1).to({x:-1532},0).wait(1).to({x:-1540.2,y:516.8},0).wait(1).to({x:-1548.5},0).wait(1).to({x:-1556.7},0).wait(1).to({x:-1564.9,y:516.9},0).wait(1).to({x:-1573.2},0).wait(1).to({x:-1581.4},0).wait(1).to({x:-1589.6,y:517},0).wait(1).to({x:-1597.9},0).wait(1).to({x:-1606.1},0).wait(1).to({x:-1614.3,y:517.1},0).wait(1).to({x:-1622.6},0).wait(1).to({x:-1630.8},0).wait(1).to({x:-1639,y:517.2},0).wait(1).to({x:-1647.3},0).to({_off:true},1).wait(83));

	// Layer 5
	this.instance_8 = new lib.UFO_1();
	this.instance_8.setTransform(338.5,531.8,1,1,0,0,0,29.2,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(422).to({_off:false},0).wait(1).to({regX:0,x:338.4},0).wait(1).to({x:367.6},0).wait(1).to({x:396.8},0).wait(1).to({x:425.9},0).wait(1).to({x:455.1},0).wait(1).to({x:484.3},0).wait(1).to({x:513.4},0).wait(1).to({x:542.6},0).wait(1).to({x:571.8},0).wait(1).to({x:600.9},0).wait(1).to({x:630.1},0).wait(1).to({x:659.3},0).wait(1).to({x:688.4},0).wait(1).to({x:717.6},0).wait(1).to({x:746.8},0).wait(1).to({x:775.9},0).wait(1).to({x:805.1},0).wait(1).to({x:834.3},0).wait(1).to({x:863.4},0).wait(1).to({x:892.6},0).wait(1).to({x:921.8},0).wait(1).to({x:950.9},0).wait(1).to({x:980.1},0).wait(1).to({x:1009.3},0).wait(1).to({x:1038.4},0).wait(1).to({x:1067.6},0).wait(1).to({x:1096.8},0).wait(1).to({x:1125.9},0).wait(1).to({x:1155.1},0).wait(1).to({x:1184.3},0).wait(1).to({x:1213.4},0).wait(1).to({x:1242.6},0).wait(1).to({x:1271.8},0).wait(1).to({x:1300.9},0).wait(1).to({x:1330.1},0).wait(1).to({x:1359.3},0).wait(1).to({x:1388.4},0).wait(1).to({x:1417.6},0).wait(1).to({x:1446.8},0).wait(1).to({x:1475.9},0).wait(1).to({x:1505.1},0).wait(1).to({x:1534.3},0).to({_off:true},1).wait(40));

	// First_Background
	this.instance_9 = new lib.stars();
	this.instance_9.setTransform(88.1,1.5,1.961,1.961);

	this.instance_10 = new lib.Spacestart();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_10}]},64).to({state:[{t:this.instance_10}]},65).to({state:[{t:this.instance_10}]},60).to({state:[{t:this.instance_10}]},222).to({state:[{t:this.instance_10}]},43).to({state:[{t:this.instance_10}]},20).to({state:[]},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(484).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,512,3383.1,1024);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;