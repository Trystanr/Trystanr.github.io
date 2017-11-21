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



(lib.Background = function() {
	this.spriteSheet = ss["Molocow_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cloud1 = function() {
	this.spriteSheet = ss["Molocow_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Cloud2 = function() {
	this.spriteSheet = ss["Molocow_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer5 = function() {
	this.spriteSheet = ss["Molocow_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.straw = function() {
	this.spriteSheet = ss["Molocow_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cloud1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,592,428);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.straw();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,357,953);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cloud1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,592,428);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421,375);


(lib.Cloudright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cloud2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,901,522);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(210.5,187.5,1,1,0,0,0,210.5,187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:184.9},0).wait(1).to({y:182.7},0).wait(1).to({y:180.7},0).wait(1).to({y:178.9},0).wait(1).to({y:177.4},0).wait(1).to({y:176.1},0).wait(1).to({y:174.9},0).wait(1).to({y:173.9},0).wait(1).to({y:173},0).wait(1).to({y:172.2},0).wait(1).to({y:171.5},0).wait(1).to({y:170.8},0).wait(1).to({y:170.2},0).wait(1).to({y:169.6},0).wait(1).to({y:169.1},0).wait(1).to({y:168.6},0).wait(1).to({y:168.1},0).wait(1).to({y:167.6},0).wait(1).to({y:167.1},0).wait(1).to({y:166.6},0).wait(1).to({y:166.2},0).wait(1).to({y:165.7},0).wait(1).to({y:165.2},0).wait(1).to({y:165.7},0).wait(1).to({y:166.1},0).wait(1).to({y:166.5},0).wait(1).to({y:167},0).wait(1).to({y:167.4},0).wait(1).to({y:167.8},0).wait(1).to({y:168.2},0).wait(1).to({y:168.7},0).wait(1).to({y:169.1},0).wait(1).to({y:169.6},0).wait(1).to({y:170},0).wait(1).to({y:170.5},0).wait(1).to({y:171},0).wait(1).to({y:171.5},0).wait(1).to({y:172.1},0).wait(1).to({y:172.7},0).wait(1).to({y:173.4},0).wait(1).to({y:174.1},0).wait(1).to({y:175},0).wait(1).to({y:175.9},0).wait(1).to({y:177},0).wait(1).to({y:178.2},0).wait(1).to({y:179.6},0).wait(1).to({y:181.2},0).wait(1).to({y:183},0).wait(1).to({y:185.1},0).wait(1).to({y:187.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421,375);


// stage content:



(lib.Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
		
		this.cloudClick.addEventListener("click", buttonClicked.bind(this)); 
		this.btnCloud.addEventListener("click", buttonClicked.bind(this)); 
		 
		function buttonClicked() 
		{ 
			this.play();
		}
	}
	this.frame_89 = function() {
		this.stop();
		
		window.open("Space.html","_self");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// Layer 3
	this.instance = new lib.Symbol1();
	this.instance.setTransform(686.1,187.5,1,1,0,0,0,210.5,187.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(86));

	// Layer 2
	this.instance_1 = new lib.Cloudright();
	this.instance_1.setTransform(926.1,626.6,1,1,0,0,0,450.5,261);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({x:926.5},0).wait(1).to({x:927},0).wait(1).to({x:927.4},0).wait(1).to({x:927.9},0).wait(1).to({x:928.3},0).wait(1).to({x:928.8},0).wait(1).to({x:929.2},0).wait(1).to({x:929.7},0).wait(1).to({x:930.1},0).wait(1).to({x:930.6},0).wait(1).to({x:931},0).wait(1).to({x:931.5},0).wait(1).to({x:932},0).wait(1).to({x:932.4},0).wait(1).to({x:932.9},0).wait(1).to({x:953.9,alpha:0.975},0).wait(1).to({x:975,alpha:0.95},0).wait(1).to({x:996.1,alpha:0.925},0).wait(1).to({x:1017.2,alpha:0.9},0).wait(1).to({x:1038.3,alpha:0.875},0).wait(1).to({x:1059.3,alpha:0.85},0).wait(1).to({x:1080.4,alpha:0.825},0).wait(1).to({x:1101.5,alpha:0.8},0).wait(1).to({x:1122.6,alpha:0.775},0).wait(1).to({x:1143.7,alpha:0.75},0).wait(1).to({x:1164.7,alpha:0.725},0).wait(1).to({x:1185.8,alpha:0.7},0).wait(1).to({x:1206.9,alpha:0.675},0).wait(1).to({x:1228,alpha:0.65},0).wait(1).to({x:1249.1,alpha:0.625},0).wait(1).to({x:1270.1,alpha:0.6},0).wait(1).to({x:1291.2,alpha:0.575},0).wait(1).to({x:1312.3,alpha:0.55},0).wait(1).to({x:1333.4,alpha:0.525},0).wait(1).to({x:1354.5,alpha:0.5},0).wait(1).to({x:1375.5,alpha:0.475},0).wait(1).to({x:1396.6,alpha:0.45},0).wait(1).to({x:1417.7,alpha:0.425},0).wait(1).to({x:1438.8,alpha:0.4},0).wait(1).to({x:1459.9,alpha:0.375},0).wait(1).to({x:1480.9,alpha:0.35},0).wait(1).to({x:1502,alpha:0.325},0).wait(1).to({x:1523.1,alpha:0.3},0).wait(1).to({x:1544.2,alpha:0.275},0).wait(1).to({x:1565.3,alpha:0.25},0).wait(1).to({x:1586.3,alpha:0.225},0).wait(1).to({x:1607.4,alpha:0.2},0).wait(1).to({x:1628.5,alpha:0.175},0).wait(1).to({x:1649.6,alpha:0.15},0).wait(1).to({x:1670.7,alpha:0.125},0).wait(1).to({x:1691.7,alpha:0.1},0).wait(1).to({x:1712.8,alpha:0.075},0).wait(1).to({x:1733.9,alpha:0.05},0).wait(1).to({x:1755,alpha:0.025},0).wait(1).to({x:1776.1,alpha:0},0).to({_off:true},1).wait(30));

	// Layer 5
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(1163.6,-551.1,1,1,0,0,0,178.5,476.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({rotation:1.2,x:1156.2,y:-509.7},0).wait(1).to({rotation:2.4,x:1148.8,y:-468.4},0).wait(1).to({rotation:3.5,x:1141.4,y:-427.1},0).wait(1).to({rotation:4.7,x:1134.1,y:-385.8},0).wait(1).to({rotation:5.9,x:1126.7,y:-344.5},0).wait(1).to({rotation:7.1,x:1119.4,y:-303.2},0).wait(1).to({rotation:8.3,x:1112,y:-261.8},0).wait(1).to({rotation:9.5,x:1104.6,y:-220.5},0).wait(1).to({rotation:10.6,x:1097.2,y:-179.2},0).wait(1).to({rotation:11.8,x:1089.8,y:-137.8},0).wait(1).to({rotation:13,x:1082.5,y:-96.5},0).wait(1).to({rotation:14.2,x:1075.1,y:-55.3},0).wait(1).to({rotation:15.4,x:1067.7,y:-13.9},0).wait(1).to({rotation:16.6,x:1060.4,y:27.4},0).wait(1).to({rotation:17.7,x:1053,y:68.7},0).wait(1).to({rotation:18.9,x:1045.6,y:110.1},0).wait(1).to({rotation:20.1,x:1038.2,y:151.3},0).wait(1).to({rotation:21.3,x:1030.9,y:192.6},0).wait(1).to({rotation:22.5,x:1023.5,y:234},0).wait(37).to({rotation:23.5,x:1057.8,y:187.9},0).wait(1).to({rotation:24.4,x:1092.2,y:141.9},0).wait(1).to({rotation:25.4,x:1126.6,y:95.9},0).wait(1).to({rotation:26.4,x:1160.9,y:49.9},0).wait(1).to({rotation:27.4,x:1195.3,y:3.9},0).wait(1).to({rotation:28.4,x:1229.6,y:-42.1},0).wait(1).to({rotation:29.4,x:1264,y:-88.2},0).wait(1).to({rotation:30.4,x:1298.3,y:-134.2},0).wait(1).to({rotation:31.4,x:1332.7,y:-180.2},0).wait(1).to({rotation:32.4,x:1367,y:-226.3},0).wait(1).to({rotation:33.4,x:1401.4,y:-272.3},0).wait(1).to({rotation:34.4,x:1435.7,y:-318.3},0).wait(1).to({rotation:35.3,x:1470.1,y:-364.4},0).wait(1).to({rotation:36.3,x:1504.5,y:-410.4},0).wait(1).to({rotation:37.3,x:1538.8,y:-456.4},0).to({_off:true},1).wait(15));

	// Layer 4
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(316.2,718.6,1,1,0,0,0,296,214);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1).to({x:316.1},0).wait(1).to({x:316},0).wait(2).to({x:315.9},0).wait(1).to({x:315.8},0).wait(2).to({x:315.7},0).wait(2).to({x:315.6},0).wait(1).to({x:315.5},0).wait(2).to({x:315.4},0).wait(2).to({x:315.3},0).wait(1).to({x:315.2},0).wait(1).to({x:297.8,alpha:0.975},0).wait(1).to({x:280.3,alpha:0.95},0).wait(1).to({x:262.9,alpha:0.925},0).wait(1).to({x:245.4,alpha:0.9},0).wait(1).to({x:227.9,alpha:0.875},0).wait(1).to({x:210.4,alpha:0.85},0).wait(1).to({x:192.9,alpha:0.825},0).wait(1).to({x:175.5,alpha:0.8},0).wait(1).to({x:158,alpha:0.775},0).wait(1).to({x:140.5,alpha:0.75},0).wait(1).to({x:123,alpha:0.725},0).wait(1).to({x:105.6,alpha:0.7},0).wait(1).to({x:88.1,alpha:0.675},0).wait(1).to({x:70.6,alpha:0.65},0).wait(1).to({x:53.1,alpha:0.625},0).wait(1).to({x:35.7,alpha:0.6},0).wait(1).to({x:18.2,alpha:0.575},0).wait(1).to({x:0.7,alpha:0.55},0).wait(1).to({x:-16.8,alpha:0.525},0).wait(1).to({x:-34.3,alpha:0.5},0).wait(1).to({x:-51.7,alpha:0.475},0).wait(1).to({x:-69.2,alpha:0.45},0).wait(1).to({x:-86.7,alpha:0.425},0).wait(1).to({x:-104.2,alpha:0.4},0).wait(1).to({x:-121.6,alpha:0.375},0).wait(1).to({x:-139.1,alpha:0.35},0).wait(1).to({x:-156.6,alpha:0.325},0).wait(1).to({x:-174.1,alpha:0.3},0).wait(1).to({x:-191.6,alpha:0.275},0).wait(1).to({x:-209,alpha:0.25},0).wait(1).to({x:-226.5,alpha:0.225},0).wait(1).to({x:-244,alpha:0.2},0).wait(1).to({x:-261.5,alpha:0.175},0).wait(1).to({x:-278.9,alpha:0.15},0).wait(1).to({x:-296.4,alpha:0.125},0).wait(1).to({x:-313.9,alpha:0.1},0).wait(1).to({x:-331.4,alpha:0.075},0).wait(1).to({x:-348.8,alpha:0.05},0).wait(1).to({x:-366.3,alpha:0.025},0).wait(1).to({x:-383.8,alpha:0},0).to({_off:true},1).wait(30));

	// Layer 1
	this.btnCloud = new lib.Symbol5();
	this.btnCloud.setTransform(316.2,718.6,1,1,0,0,0,296,214);
	new cjs.ButtonHelper(this.btnCloud, 0, 1, 1);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(686.1,187.5,1,1,0,0,0,210.5,187.5);

	this.cloudClick = new lib.Cloudright();
	this.cloudClick.setTransform(926.1,626.6,1,1,0,0,0,450.5,261);
	new cjs.ButtonHelper(this.cloudClick, 0, 1, 1);

	this.instance_5 = new lib.straw();
	this.instance_5.setTransform(985.1,-1027.6);

	this.instance_6 = new lib.Background();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.cloudClick},{t:this.instance_4},{t:this.btnCloud}]}).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6},{t:this.instance_5}]},55).to({state:[{t:this.instance_6},{t:this.instance_5}]},15).to({state:[{t:this.instance_6},{t:this.instance_5}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,-515.6,1376.6,2051.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;