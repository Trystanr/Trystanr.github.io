(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 542,
	height: 394,
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
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backhover = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.closetDark = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.closetNew = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.doorcopy = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.door = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.form = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lightDown = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.lightUp = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.plagirism = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.rat1 = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.rat2 = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.rationale = function() {
	this.spriteSheet = ss["closest_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("INTERACTIVE INFOGRAPHIC\n\nANIMATION BY\nMIKAYLA FALLICK\n\nINTERACTIVITY BY\nMIKAYLA FALLICK\n\nCODING BY\nMIKAYLA FALLICK\n\nCREATED IN\nADOBE ANIMATE \nHTML 5 - JAVASCRIPT\n\nDESIGN BY\nMIKAYLA FALLICK\n\nREFERENCING AND PLAGIRISM FORM INCLUDED\n\nMIKAYLA FALLICK\nU15191002\nBBIS MULTIMEDIA\nVIO 202 PROJECT 2\nTHEME 2", "30px 'Background noise'");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 291;
	this.text.setTransform(145.5,20.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:5.3},0).wait(1).to({y:-10.1},0).wait(1).to({y:-25.5},0).wait(1).to({y:-41},0).wait(1).to({y:-56.4},0).wait(1).to({y:-71.8},0).wait(1).to({y:-87.2},0).wait(1).to({y:-102.6},0).wait(1).to({y:-118},0).wait(1).to({y:-133.5},0).wait(1).to({y:-148.9},0).wait(1).to({y:-164.3},0).wait(1).to({y:-179.7},0).wait(1).to({y:-195.1},0).wait(1).to({y:-210.5},0).wait(1).to({y:-225.9},0).wait(1).to({y:-241.4},0).wait(1).to({y:-256.8},0).wait(1).to({y:-272.2},0).wait(1).to({y:-287.6},0).wait(1).to({y:-303},0).wait(1).to({y:-318.4},0).wait(1).to({y:-333.9},0).wait(1).to({y:-349.3},0).wait(1).to({y:-364.7},0).wait(1).to({y:-380.1},0).wait(1).to({y:-395.5},0).wait(1).to({y:-410.9},0).wait(1).to({y:-426.3},0).wait(1).to({y:-441.8},0).wait(1).to({y:-457.2},0).wait(1).to({y:-472.6},0).wait(1).to({y:-488},0).wait(1).to({y:-503.4},0).wait(1).to({y:-518.8},0).wait(1).to({y:-534.3},0).wait(1).to({y:-549.7},0).wait(1).to({y:-565.1},0).wait(1).to({y:-580.5},0).wait(1).to({y:-595.9},0).wait(1).to({y:-611.3},0).wait(1).to({y:-626.7},0).wait(1).to({y:-642.2},0).wait(1).to({y:-657.6},0).wait(1).to({y:-673},0).wait(1).to({y:-688.4},0).wait(1).to({y:-703.8},0).wait(1).to({y:-719.2},0).wait(1).to({y:-734.7},0).wait(1).to({y:-750.1},0).wait(1).to({y:-765.5},0).wait(1).to({y:-780.9},0).wait(1).to({y:-796.3},0).wait(1).to({y:-811.7},0).wait(1).to({y:-827.1},0).wait(1).to({y:-842.6},0).wait(1).to({y:-858},0).wait(1).to({y:-873.4},0).wait(1).to({y:-888.8},0).wait(1).to({y:-904.2},0).wait(1).to({y:-919.6},0).wait(1).to({y:-935.1},0).wait(1).to({y:-950.5},0).wait(1).to({y:-965.9},0).wait(1).to({y:-981.3},0).wait(1).to({y:-996.7},0).wait(1).to({y:-1012.1},0).wait(1).to({y:-1027.5},0).wait(1).to({y:-1043},0).wait(1).to({y:-1058.4},0).wait(1).to({y:-1073.8},0).wait(1).to({y:-1089.2},0).wait(1).to({y:-1104.6},0).wait(1).to({y:-1120},0).wait(1).to({y:-1135.5},0).wait(1).to({y:-1150.9},0).wait(1).to({y:-1166.3},0).wait(1).to({y:-1181.7},0).wait(1).to({y:-1197.1},0).wait(1).to({y:-1212.5},0).wait(1).to({y:-1228},0).wait(1).to({y:-1243.4},0).wait(1).to({y:-1258.8},0).wait(1).to({y:-1274.2},0).wait(1).to({y:-1289.6},0).wait(1).to({y:-1305},0).wait(1).to({y:-1320.4},0).wait(1).to({y:-1335.9},0).wait(1).to({y:-1351.3},0).wait(1).to({y:-1366.7},0).wait(1).to({y:-1382.1},0).wait(1).to({y:-1397.5},0).wait(1).to({y:-1412.9},0).wait(1).to({y:-1428.4},0).wait(1).to({y:-1443.8},0).wait(1).to({y:-1459.2},0).wait(1).to({y:-1474.6},0).wait(1).to({y:-1490},0).wait(1).to({y:-1505.4},0).wait(1).to({y:-1520.8},0).wait(1).to({y:-1536.3},0).wait(1).to({y:-1551.7},0).wait(1).to({y:-1567.1},0).wait(1).to({y:-1582.5},0).wait(1).to({y:-1597.9},0).wait(1).to({y:-1613.3},0).wait(1).to({y:-1628.8},0).wait(1).to({y:-1644.2},0).wait(1).to({y:-1659.6},0).wait(1).to({y:-1675},0).wait(1).to({y:-1690.4},0).wait(1).to({y:-1705.8},0).wait(1).to({y:-1721.2},0).wait(1).to({y:-1736.7},0).wait(1).to({y:-1752.1},0).wait(1).to({y:-1767.5},0).wait(1).to({y:-1782.9},0).wait(1).to({y:-1798.3},0).wait(1).to({y:-1813.7},0).wait(1).to({y:-1829.2},0).wait(1).to({y:-1844.6},0).wait(1).to({y:-1860},0).wait(1).to({y:-1875.4},0).wait(1).to({y:-1890.8},0).wait(1).to({y:-1906.2},0).wait(1).to({y:-1921.6},0).wait(1).to({y:-1937.1},0).wait(1).to({y:-1952.5},0).wait(1).to({y:-1967.9},0).wait(1).to({y:-1983.3},0).wait(1).to({y:-1998.7},0).wait(1).to({y:-2014.1},0).wait(1).to({y:-2029.6},0).wait(1).to({y:-2045},0).wait(1).to({y:-2060.4},0).wait(1).to({y:-2075.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20.7,295,1208.9);


(lib.plagirism_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rationale();
	this.instance.setTransform(0,0,0.394,0.394);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiSC3QhbgBg3gRQgQgFgjgNQghgNgSgFIgtgKQgcgGgQgIQgmgUgUgtQgTgpAGgvQAEgZAKgVQAMgYASgLQAQgKAXgEIApgEQBFgGA+geIABAFQAvgIBAAJQAlAGBJAOQBeAPCKgHQBOgECdgLQAwgBAcAGQApAIAXAZQAuAzgkBnQgaBRgwARQgPAGgbABQggABgMACQgKACgQAHIgbAKQgZAIghACQgTACgoAAQg0ABh/AIQhpAIhAAAIgIgBg");
	this.shape.setTransform(52.9,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,34.3);


(lib.plagBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plagirism();
	this.instance.setTransform(0,0,0.393,0.393);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AktDEQgYgGgtgSQgugSgXgGIg2gQQgegLgOgTQgHgJgGgOIgKgaIgRggQgMgVgEgLQgPgrAVguQAVgtArgTQAXgLAhgDQATgBApAAQBmABDVgMQDNgLBsACIAAgEQCSgKCEAmQA3APAXAaQAPARAGAXQAFAWgEAXQgGAdgVAUQgVAXgcAIQgBAegZAXQgXAWghAHQgYAFgmgBQgpgCgVAAQghAAgoAHQgXAEgxALIi+AqQhcAUgyAFQgaADgYAAQgyAAgpgLg");
	this.shape.setTransform(51.1,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,33);


(lib.lightOn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lightUp();

	this.instance_1 = new lib.lightDown();
	this.instance_1.setTransform(3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsE8QgeAAgWgGQgjgIgdgYQgcgYgPghQgPghABgmQABglARggIAPgaQAIgPACgMQADgLgBgRIgBhfQgBguADgXQAFgmAQgbQAgg1BSgWQAwgPAwAFQA0AGAlAcQAnAfAPA0QAOAygMAzIgGAWQgEANABAKQABAQAKAfQAFAPAAAbIgBAtIAFAnQADAYgBAOQgBA2gkArQglAsg0ALQgSAEgYAAIgrAAIglAAIgOAAg");
	this.shape.setTransform(23.9,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,70);


(lib.doorOpen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.doorcopy();
	this.instance.setTransform(0,0,0.272,0.272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.2,369.1);


(lib.backbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();

	this.instance_1 = new lib.backhover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvBGMQhegGhKgUQhWgXhDguQhKgzgnhHQgshQAFhiQAFheAyhQQAwhNBSgyQBPgxBegNQA1gHBKACICAAHQCcAGBWgrIAFgCQHmAHPKARQBfACAwAEQBPAGA9ARQBLAVA5AkQA/ApAjA6QAmBAADBMQACBLgjBBQgVAogmAnQgdAdguAkQhtBWhpAlQhKAahiAJQg7AFh2AAI3aADQhxAAg4gEg");
	this.shape.setTransform(128.4,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262,68);


(lib.doorClosed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.door();
	this.instance.setTransform(0,0,0.272,0.272);

	this.instance_1 = new lib.doorOpen();
	this.instance_1.setTransform(65,184.5,1.015,1,0,0,0,65,184.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnWWOQgPgUAAgtQgEjWACh5QACi5ALiWQgTAMgYgJQgYgJgNgVQgLgSgEgZQgCgSAAgdQADiYAjiSIARhHQAJgpABgeQACgdgFgoIgJhDQgWieAGjLQADhtAVj8QABgQgBgHQgCgNgHgHQgFgGgLgEIgSgJQgOgKgFgUQgDgTAGgSQAGgPAMgRIAYgeQA4hIAPhbQAQheglhQQgUgmgHgUQgOgjAGgaQAGgeAdgUQAagSAigCQAcgCAiALQAYAHAiAQIBgAuQA3AYAtAJQAbAFAyADQA1ADAWADQA4AJB6AyQBxAtBDAFIBFAFQAmAGAUAVQASAUADAjQABAUgEAqQgIBYANDmQAMDJgXBxQgHAfgaBZQgWBLgGAuQgJBHAMBmIAVCsQAHBEACDPQABCrATBlIARBPQAKAwAEAgQAGA3gHBAQgGAzgOBDQgKAwgMAdQgQApgYAaQgrAuhUAPIiXANQhgAJjJA8QjBA5hrAEIgIAAQg3AAgUgZgAlDFnIgBALQgCAKABAGIAMgQQAEgHAAgEQAAgEgFgGQgFgHAAgEIgCgBQAAALgCALg");
	this.shape.setTransform(67.9,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regX:65,scaleX:1.015,x:65}}]},1).to({state:[{t:this.instance_1,p:{regX:65.1,scaleX:1,x:65.1}}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.6,344.6);


// stage content:
(lib.closest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Sound.removeAllSounds();
		this.stop();
		
		var back = new Audio('sounds/closet.mp3');
		
		console.log("Music registered");
		back.play();
		back.volume = 0.2;
		
		this.lightOn.addEventListener("click", buttonClicked.bind(this));
		function buttonClicked()
		{
			console.log("light switch");
			this.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.plagBtn.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			console.log("plag button clicked");
			this.gotoAndStop(2);
		}
		
		this.ratBtn.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function f2_MouseClickHandler()
		{
			console.log("rat button clicked");
			this.gotoAndStop(3);
		}
		createjs.Sound.removeAllSounds();
		this.stop();
		
		var door = new Audio('sounds/doorClose.mp3');
		var doorClosed = exportRoot.doorClosed;
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.doorClosed.addEventListener("mouseover", fl_MouseOverHandler);
		function fl_MouseOverHandler() {
			door.play();
		} 
		
		this.doorClosed.addEventListener("click", buttonClicked.bind(this));
		function buttonClicked()
		{
			console.log("door clicked");
			window.open("FirstSceneSounds.html", "_self");
		}
		
		//add plagirism form btn
		//add credits btn - they move up with tween
		
		//back btn applies to both 
		//any other plagirism
		//You must reference the original author and URL.
	}
	this.frame_2 = function() {
		//display plag form
		this.button_1.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			console.log("back pressed");
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(3));

	// Layer 1
	this.plagBtn = new lib.plagirism_1();
	this.plagBtn.setTransform(64.2,335.9,1,1,0,0,0,51.6,17.2);
	new cjs.ButtonHelper(this.plagBtn, 0, 1, 2, false, new lib.plagirism_1(), 3);

	this.ratBtn = new lib.plagBtn();
	this.ratBtn.setTransform(63.5,370.4,1,1,0,0,0,51.5,16.5);
	new cjs.ButtonHelper(this.ratBtn, 0, 1, 2, false, new lib.plagBtn(), 3);

	this.instance = new lib.Text();
	this.instance.setTransform(395.5,1005.5,1,1,0,0,0,147.5,604.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.ratBtn},{t:this.plagBtn}]},1).to({state:[]},1).to({state:[]},1).wait(2));

	// backbtn
	this.button_1 = new lib.backbtn();
	this.button_1.setTransform(434.2,357.2,0.359,0.359);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.backbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(2).to({_off:false},0).to({_off:true},2).wait(1));

	// info
	this.instance_1 = new lib.rat2();
	this.instance_1.setTransform(299.6,54.9,0.396,0.396);

	this.instance_2 = new lib.rat1();
	this.instance_2.setTransform(39.5,54.8,0.436,0.436);

	this.instance_3 = new lib.form();
	this.instance_3.setTransform(130.9,29.4,0.402,0.402);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.instance_3}]},1).wait(2));

	// Actions
	this.lightOn = new lib.lightOn();
	this.lightOn.setTransform(154.8,180.1,0.244,0.244,0,0,0,21.5,35);
	new cjs.ButtonHelper(this.lightOn, 0, 1, 2, false, new lib.lightOn(), 3);

	this.instance_4 = new lib.closetDark();
	this.instance_4.setTransform(0,1,0.262,0.262);

	this.doorClosed = new lib.doorClosed();
	this.doorClosed.setTransform(81.3,200.3,1,1,0,0,0,68.3,172.3);
	new cjs.ButtonHelper(this.doorClosed, 0, 1, 2, false, new lib.doorClosed(), 3);

	this.instance_5 = new lib.closetNew();
	this.instance_5.setTransform(0,1,0.263,0.263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.lightOn}]}).to({state:[{t:this.instance_5},{t:this.doorClosed}]},1).to({state:[{t:this.instance_5},{t:this.doorClosed}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271,198,541.6,393.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;