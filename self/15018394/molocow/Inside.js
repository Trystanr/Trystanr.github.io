(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 1024,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.Button = function() {
	this.spriteSheet = ss["Inside_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ButtonDown = function() {
	this.spriteSheet = ss["Inside_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CowBoyMask = function() {
	this.spriteSheet = ss["Inside_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.INSIDE = function() {
	this.spriteSheet = ss["Inside_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Stars = function() {
	this.spriteSheet = ss["Inside_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Stars();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,788,328);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CowBoyMask();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452,261);


(lib.btnRelease = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button();

	this.instance_1 = new lib.ButtonDown();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,341);


(lib.Stars_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(684,164,1,1,0,0,0,394,164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:679.6},0).wait(1).to({x:675.1},0).wait(1).to({x:670.7},0).wait(1).to({x:666.3},0).wait(1).to({x:661.8},0).wait(1).to({x:657.4},0).wait(1).to({x:653},0).wait(1).to({x:648.5},0).wait(1).to({x:644.1},0).wait(1).to({x:639.7},0).wait(1).to({x:635.2},0).wait(1).to({x:630.8},0).wait(1).to({x:626.4},0).wait(1).to({x:621.9},0).wait(1).to({x:617.5},0).wait(1).to({x:613.1},0).wait(1).to({x:608.6},0).wait(1).to({x:604.2},0).wait(1).to({x:599.8},0).wait(1).to({x:595.3},0).wait(1).to({x:590.9},0).wait(1).to({x:586.5},0).wait(1).to({x:582},0).wait(1).to({x:577.6},0).wait(1).to({x:573.2},0).wait(1).to({x:568.7},0).wait(1).to({x:564.3},0).wait(1).to({x:559.8},0).wait(1).to({x:555.4},0).wait(1).to({x:551},0).wait(1).to({x:546.5},0).wait(1).to({x:542.1},0).wait(1).to({x:537.7},0).wait(1).to({x:533.2},0).wait(1).to({x:528.8},0).wait(1).to({x:524.4},0).wait(1).to({x:519.9},0).wait(1).to({x:515.5},0).wait(1).to({x:511.1},0).wait(1).to({x:506.6},0).wait(1).to({x:502.2},0).wait(1).to({x:497.8},0).wait(1).to({x:493.3},0).wait(1).to({x:488.9},0).wait(1).to({x:484.5},0).wait(1).to({x:480},0).wait(1).to({x:475.6},0).wait(1).to({x:471.2},0).wait(1).to({x:466.7},0).wait(1).to({x:462.3},0).wait(1).to({x:457.9},0).wait(1).to({x:453.4},0).wait(1).to({x:449},0).wait(1).to({x:444.6},0).wait(1).to({x:440.1},0).wait(1).to({x:435.7},0).wait(1).to({x:431.3},0).wait(1).to({x:426.8},0).wait(1).to({x:422.4},0).wait(1).to({x:418},0).wait(1).to({x:413.5},0).wait(1).to({x:409.1},0).wait(1).to({x:404.7},0).wait(1).to({x:400.2},0).wait(1).to({x:395.8},0).wait(1).to({x:391.4},0).wait(1).to({x:387},0).wait(1).to({x:382.5},0).wait(1).to({x:378.1},0).wait(1).to({x:373.7},0).wait(1).to({x:369.2},0).wait(1).to({x:364.8},0).wait(1).to({x:360.4},0).wait(1).to({x:355.9},0).wait(1).to({x:351.5},0).wait(1).to({x:347.1},0).wait(1).to({x:342.6},0).wait(1).to({x:338.2},0).wait(1).to({x:333.8},0).wait(1).to({x:329.3},0).wait(1).to({x:324.9},0).wait(1).to({x:320.5},0).wait(1).to({x:316},0).wait(1).to({x:311.6},0).wait(1).to({x:307.2},0).wait(1).to({x:302.7},0).wait(1).to({x:298.3},0).wait(1).to({x:293.9},0).wait(1).to({x:289.4},0).wait(1).to({x:285},0).wait(1).to({x:280.6},0).wait(1).to({x:276.1},0).wait(1).to({x:271.7},0).wait(1).to({x:267.3},0).wait(1).to({x:262.8},0).wait(1).to({x:258.4},0).wait(1).to({x:254},0).wait(1).to({x:249.5},0).wait(1).to({x:245.1},0).wait(1).to({x:240.7},0).wait(1).to({x:236.2},0).wait(1).to({x:231.8},0).wait(1).to({x:227.4},0).wait(1).to({x:222.9},0).wait(1).to({x:218.5},0).wait(1).to({x:214},0).wait(1).to({x:209.6},0).wait(1).to({x:205.2},0).wait(1).to({x:200.7},0).wait(1).to({x:196.3},0).wait(1).to({x:191.9},0).wait(1).to({x:187.4},0).wait(1).to({x:183},0).wait(1).to({x:178.6},0).wait(1).to({x:174.1},0).wait(1).to({x:169.7},0).wait(1).to({x:165.3},0).wait(1).to({x:160.8},0).wait(1).to({x:156.4},0).wait(1).to({x:152},0).wait(1).to({x:147.5},0).wait(1).to({x:143.1},0).wait(1).to({x:138.7},0).wait(1).to({x:134.2},0).wait(1).to({x:129.8},0).wait(1).to({x:125.4},0).wait(1).to({x:120.9},0).wait(1).to({x:116.5},0).wait(1).to({x:112.1},0).wait(1).to({x:107.6},0).wait(1).to({x:103.2},0).wait(1).to({x:98.8},0).wait(1).to({x:94.3},0).wait(1).to({x:89.9},0).wait(1).to({x:85.5},0).wait(1).to({x:81},0).wait(1).to({x:76.6},0).wait(1).to({x:72.2},0).wait(1).to({x:67.7},0).wait(1).to({x:63.3},0).wait(1).to({x:58.9},0).wait(1).to({x:54.4},0).wait(1).to({x:50},0).wait(1).to({x:45.6},0).wait(1).to({x:41.1},0).wait(1).to({x:36.7},0).wait(1).to({x:32.3},0).wait(1).to({x:27.8},0).wait(1).to({x:23.4},0).wait(1).to({x:19},0).wait(1).to({x:14.5},0).wait(1).to({x:10.1},0).wait(1).to({x:5.7},0).wait(1).to({x:1.2},0).wait(1).to({x:-3.2},0).wait(1).to({x:-7.6},0).wait(1).to({x:-12.1},0).wait(1).to({x:-16.5},0).wait(1).to({x:-21},0).wait(1).to({x:-25.4},0).wait(1).to({x:-29.8},0).wait(1).to({x:-34.3},0).wait(1).to({x:-38.7},0).wait(1).to({x:-43.1},0).wait(1).to({x:-47.6},0).wait(1).to({x:-52},0).wait(1).to({x:-56.4},0).wait(1).to({x:-60.9},0).wait(1).to({x:-65.3},0).wait(1).to({x:-69.7},0).wait(1).to({x:-74.2},0).wait(1).to({x:-78.6},0).wait(1).to({x:-83},0).wait(1).to({x:-87.5},0).wait(1).to({x:-91.9},0).wait(1).to({x:-96.3},0).wait(1).to({x:-100.8},0).wait(1).to({x:-105.2},0).wait(1).to({x:-109.6},0).wait(1).to({x:-114.1},0).wait(1).to({x:-118.5},0).wait(1).to({x:-122.9},0).wait(1).to({x:-127.4},0).wait(1).to({x:-131.8},0).wait(1).to({x:-136.2},0).wait(1).to({x:-140.7},0).wait(1).to({x:-145.1},0).wait(1).to({x:-149.5},0).wait(1).to({x:-154},0).wait(1).to({x:-158.4},0).wait(1).to({x:-162.8},0).wait(1).to({x:-167.3},0).wait(1).to({x:-171.7},0).wait(1).to({x:-176.1},0).wait(1).to({x:-180.6},0).wait(1).to({x:-185},0).wait(1).to({x:-189.4},0).wait(1).to({x:-193.9},0).wait(1).to({x:-198.3},0).wait(1).to({x:-202.7},0).wait(1).to({x:-207.2},0).wait(1).to({x:-211.6},0).wait(1).to({x:-216},0).wait(1).to({x:-220.5},0).wait(1).to({x:-224.9},0).wait(1).to({x:-229.3},0).wait(1).to({x:-233.8},0).wait(1).to({x:-238.2},0).wait(1).to({x:-242.6},0).wait(1).to({x:-247.1},0).wait(1).to({x:-251.5},0).wait(1).to({x:-256},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290,0,788,328);


(lib.CowFloat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(226,130,1,1,0,0,0,226,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:128.3},0).wait(1).to({y:126.7},0).wait(1).to({y:125},0).wait(1).to({y:123.3},0).wait(1).to({y:121.6},0).wait(1).to({y:119.9},0).wait(1).to({y:118.3},0).wait(1).to({y:116.6},0).wait(1).to({y:114.9},0).wait(1).to({y:114.5},0).wait(1).to({y:114.1},0).wait(1).to({y:113.7},0).wait(1).to({y:113.3},0).wait(1).to({y:112.9},0).wait(1).to({y:112.5},0).wait(1).to({y:112.1},0).wait(1).to({y:111.7},0).wait(1).to({y:111.3},0).wait(1).to({y:110.8},0).wait(1).to({y:110.4},0).wait(1).to({y:110},0).wait(1).to({y:109.6},0).wait(1).to({y:109.2},0).wait(1).to({y:110.7},0).wait(1).to({y:112.1},0).wait(1).to({y:113.5},0).wait(1).to({y:115},0).wait(1).to({y:116.4},0).wait(1).to({y:117.9},0).wait(1).to({y:119.3},0).wait(1).to({y:120.7},0).wait(1).to({y:122.2},0).wait(1).to({y:123.6},0).wait(1).to({y:125},0).wait(1).to({y:125.4},0).wait(1).to({y:125.8},0).wait(1).to({y:126.2},0).wait(1).to({y:126.6},0).wait(1).to({y:127},0).wait(1).to({y:127.4},0).wait(1).to({y:127.7},0).wait(1).to({y:128.1},0).wait(1).to({y:128.5},0).wait(1).to({y:128.9},0).wait(1).to({y:129.3},0).wait(1).to({y:129.7},0).wait(1).to({y:130},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,452,261);


// stage content:



(lib.inside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.btnCow.addEventListener("click", buttonClicked.bind(this)); 
		
		function buttonClicked() 
		{ 
			window.open("MilkFill.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1nbzMAAAg3lMArPAAAMAAAA3lg");
	mask.setTransform(412.5,522);

	// Layer 3
	this.instance = new lib.Stars_1();
	this.instance.setTransform(503.7,497.7,1,1,0,0,0,394,164);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.btnCow = new lib.btnRelease();
	this.btnCow.setTransform(167.6,729.8,1,1,0,0,0,75,170.5);
	new cjs.ButtonHelper(this.btnCow, 0, 1, 1);

	this.instance_1 = new lib.CowFloat();
	this.instance_1.setTransform(987.8,555.7,1,1,0,0,0,226,130.5);

	this.instance_2 = new lib.INSIDE();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.btnCow}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,512,1280,1024);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;