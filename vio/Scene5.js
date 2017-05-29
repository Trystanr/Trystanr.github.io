(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Scene5_atlas_", frames: [[0,0,230,95],[0,97,230,95]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.returnbuttonhover = function() {
	this.spriteSheet = ss["Scene5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.returnbutton = function() {
	this.spriteSheet = ss["Scene5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALVY9IAA4zMAwZAAAIAAYzgEg7tgBrIAA3RMAlEAAAIAAXRg");
	this.shape.setTransform(382.2,159.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,764.4,319.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrBUQgDAAgCgCQgCgCgBgEIAAhVQAAgYgJgLQgKgMgRABQgOgBgKAFQgKAEgHAGIgJAIIABALIABANIAABVQgBAEgCACQgCACgDAAIgMAAQgEAAgCgCQgCgCAAgEIAAhVQAAgXgKgMQgKgLgTAAQgPAAgKAFQgLAGgFAFIgGAGIAABtQAAAEgCACQgCACgEAAIgMAAQgDAAgDgCQgCgCAAgEIAAiTQAAgEACgCQADgCADAAIAIAAIAEABIACAEIAEANIAGgGQAGgGAMgFQAMgFARAAQASAAANAGQANAIAIAMIAJgHQAIgGAOgHQANgGARAAQAXAAAOAKQAOAJAGAQQAGARAAAWIAABVQAAAEgCACQgDACgDAAg");
	this.shape.setTransform(162.9,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghBQQgNgGgHgGIgCgEIAAgFIADgFIADgFQABgCAEgBQADAAADABIAGAFQAFADAIADQAJAEAKAAQAMAAAIgGQAGgFABgIQAAgLgKgHQgJgHgRgJQgLgFgLgGQgKgHgIgJQgGgLgBgOQABgIAFgKQAEgKAMgHQAMgHASAAQAPAAAMAEQAMAEAGAFQADACABADQABADgDAEIgDAHQgBAEgFAAQgDABgCgCIgGgCIgMgEQgIgDgHgBQgNABgFAFQgFAFAAAGQAAAKAJAGQAJAGAMAGQAOAGAMAIQAMAHAHAJQAIAKABAPQgBAMgHALQgHAKgMAHQgNAGgRAAQgUgBgNgFg");
	this.shape_1.setTransform(140.1,46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFCMQgDAAgCgDQgCgCgBgDIAAiUQABgDACgCQACgDADAAIAMAAQADAAACADQADACAAADIAACUQAAADgDACQgCADgDAAgAgNhpQgGgGABgHQgBgJAGgGQAFgFAIAAQAJAAAEAFQAHAGgBAJQABAHgHAGQgEAFgJAAQgIAAgFgFg");
	this.shape_2.setTransform(128.2,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBUQgDAAgDgCQgCgCAAgEIAAiTQAAgEACgCQADgCADAAIAIAAIAEABQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAEAMIAFgGQAFgGALgFQAKgFARAAIAOABQAHABAFADQAEADgBAFIgFAPQgCADgDAAQgCACgDgCIgHgCIgJgBQgQAAgJAFQgJAGgFAFIgFAGIAABtQAAAEgCACQgCACgEAAg");
	this.shape_3.setTransform(118.3,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBHQgOgNgBgZQABgZAQgOQARgPAfAAQAJAAAIACIANACIAFABQABgWgFgMQgGgKgRAAQgQAAgNAEQgNADgGACQgDABgCgBIgDgEIgDgKQgBgEABgCQACgDACAAIAJgEIAVgFQAMgCAPAAQAUAAAMAHQALAHAEAQQAFAPAAAYIAABaQgBAEgCACQgCACgDAAIgIAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgCgEIgDgLQgEAEgIAFQgHAFgJADQgKAEgMAAQgWAAgOgPgAgZAIQgLAIAAARQAAAMAIAIQAHAJANAAQAPgBAMgHQAMgHAGgJIAAgfQgEgDgJgCQgIgCgOAAQgQAAgLAIg");
	this.shape_4.setTransform(101.1,46);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFCMQgDAAgDgDQgCgCAAgDIAAiUQAAgDACgCQADgDADAAIALAAQAEAAACADQADACgBADIAACUQABADgDACQgCADgEAAgAgNhpQgGgGAAgHQAAgJAGgGQAGgFAHAAQAJAAAEAFQAGAGABAJQgBAHgGAGQgEAFgJAAQgHAAgGgFg");
	this.shape_5.setTransform(88.7,40.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsCLQgSgIgIgNQgIgNAAgOQAAgMAFgJQAFgHAGgEIAIgGIAAgCQgGgBgHgEQgGgEgGgJQgFgHAAgNQAAgMAEgHQAEgKAGgFIAJgJIAEgDIgDgGQgDgFgDgJQgEgJAAgNQAAgTAJgQQAIgRAQgKQAPgKAWAAIBEAAQADAAACACQADACAAAEIAAAHQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgWAFIAFAEQAEAFAFAKQAEAKAAAQQAAATgIAQQgIAQgQAKQgPAJgUABQgOgBgIgDIgNgEIgEgDIgFADQgFADgEAFQgEAFgBAHQAAAIAGAHQAGAFALABIA6AAQASAAAOAFQANAGAIALQAJANAAARQAAARgLAQQgLAPgTAJQgTAKgZAAQgbgBgRgIgAgaA5IgJAFQgFADgFAHQgEAGAAAJQAAAPAOAKQAOAJAVAAQANAAANgFQAMgFAIgIQAIgJAAgMQABgDgCgGQgCgGgHgGQgHgGgOABIgsAAIgFABgAgfhtQgMANAAAVQAAAVAMAMQAMANATgBQASABALgNQALgMAAgVQAAgVgLgNQgLgMgSAAQgTAAgMAMg");
	this.shape_6.setTransform(75.3,52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwBHQgOgNgBgZQABgZAQgOQARgPAfAAQAJAAAIACIANACIAFABQABgWgFgMQgGgKgRAAQgQAAgNAEQgNADgGACQgDABgCgBIgDgEIgDgKQgBgEABgCQACgDACAAIAJgEIAVgFQAMgCAPAAQAUAAAMAHQALAHAEAQQAFAPAAAYIAABaQgBAEgCACQgCACgDAAIgIAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgCgEIgDgLQgEAEgIAFQgHAFgJADQgKAEgMAAQgWAAgOgPgAgZAIQgLAIAAARQAAAMAIAIQAHAJANAAQAPgBAMgHQAMgHAGgJIAAgfQgEgDgJgCQgIgCgOAAQgQAAgLAIg");
	this.shape_7.setTransform(56.4,46);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFCQQgEAAgCgDQgCgCAAgDIAAkPQAAgDACgCQACgDAEABIALAAQAEgBACADQACACAAADIAAEPQAAADgCACQgCADgEAAg");
	this.shape_8.setTransform(44,39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhXCQQgDAAgCgDQgCgCAAgDIAAkPQAAgDACgCQACgDADABIBaAAQAaAAAVAMQAUAMAMAVQAMAUABAZQgBAZgMAVQgMAVgUAMQgVAMgaAAIhCAAIAABhQAAADgCACQgCADgEAAgAg/AJIBAAAQARAAAOgIQAOgIAJgOQAIgOAAgRQAAgRgIgOQgJgNgOgIQgOgHgRgBIhAAAg");
	this.shape_9.setTransform(28.9,39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AvUGLIAAsVIepAAIAAMVg");
	this.shape_10.setTransform(98.1,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.1,79.1);


(lib.btnBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.returnbutton();
	this.instance.parent = this;

	this.instance_1 = new lib.returnbuttonhover();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,95);


// stage content:
(lib.Untitled6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.backToMain.addEventListener("click", buttonClicked.bind(this));
		this.btnPlaig.addEventListener("click", pClicked.bind(this));
		function buttonClicked()
		{
			window.open("index.html","_self");
		}
		function pClicked()
		{
			window.open("studentform.pdf","_self");
		}
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// Layer 7
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(419.5,851,1,1,0,0,0,382.2,159.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(16));

	// Layer 5
	this.btnPlaig = new lib.Symbol1();
	this.btnPlaig.parent = this;
	this.btnPlaig.setTransform(253.4,767.5,1,1,0,0,0,186.8,39.5);
	new cjs.ButtonHelper(this.btnPlaig, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnPlaig).wait(24));

	// Layer 4
	this.text = new cjs.Text("Upon completing the project, I must sit back and look at it with the\ngreatest pleasure. Not only did the message and look and feel\nof the original project translate directly into the experience, it was\nalso done with extremely intuitive and well presented interactions.\n\nI really am so happy with the final two interactions; the gas can\nand the location actions. They came out with a fluidity and touch of\nproffessionalism I did not know was possible using Adobe Animate.\n\nThe scenes had transitions which donate heavily to a singular \nexperience. \n\nI really am proud of this project and appreciate the oppurtunity to \nwork with it.", "41px 'Brandon Grotesque Regular'");
	this.text.lineHeight = 37;
	this.text.parent = this;
	this.text.setTransform(-1198.9,154.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:-1143.8},0).wait(1).to({x:-1088.7},0).wait(1).to({x:-1033.6},0).wait(1).to({x:-978.5},0).wait(1).to({x:-923.4},0).wait(1).to({x:-868.3},0).wait(1).to({x:-813.2},0).wait(1).to({x:-758.1},0).wait(1).to({x:-703},0).wait(1).to({x:-647.9},0).wait(1).to({x:-592.8},0).wait(1).to({x:-537.6},0).wait(1).to({x:-482.5},0).wait(1).to({x:-427.4},0).wait(1).to({x:-372.3},0).wait(1).to({x:-317.2},0).wait(1).to({x:-262.1},0).wait(1).to({x:-207},0).wait(1).to({x:-151.9},0).wait(1).to({x:-96.8},0).wait(1).to({x:-41.7},0).wait(1).to({x:13.4},0).wait(1).to({x:68.6},0).wait(1));

	// Layer 3
	this.backToMain = new lib.btnBack();
	this.backToMain.parent = this;
	this.backToMain.setTransform(665,944.5,1,1,0,0,0,115,47.5);
	new cjs.ButtonHelper(this.backToMain, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.backToMain).wait(24));

	// Header
	this.text_1 = new cjs.Text("RATIONALE", "67px 'Brandon Grotesque Black'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 74;
	this.text_1.parent = this;
	this.text_1.setTransform(-234.9,54.4);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({x:-213.7},0).wait(1).to({x:-192.5},0).wait(1).to({x:-171.3},0).wait(1).to({x:-150.1},0).wait(1).to({x:-128.9},0).wait(1).to({x:-107.7},0).wait(1).to({x:-86.5},0).wait(1).to({x:-65.3},0).wait(1).to({x:-44.1},0).wait(1).to({x:-22.9},0).wait(1).to({x:-1.7},0).wait(1).to({x:19.4},0).wait(1).to({x:40.6},0).wait(1).to({x:61.8},0).wait(1).to({x:83},0).wait(1).to({x:104.2},0).wait(1).to({x:125.4},0).wait(1).to({x:146.6},0).wait(1).to({x:167.8},0).wait(1).to({x:189},0).wait(1).to({x:210.2},0).wait(1).to({x:231.4},0).wait(1).to({x:252.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-560.9,564.4,2002.6,958.4);
// library properties:
lib.properties = {
	width: 1280,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Scene5_atlas_.png", id:"Scene5_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;