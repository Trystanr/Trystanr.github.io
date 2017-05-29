(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.back1 = function() {
	this.initialize(img.back1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,1024);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,1024);


(lib.cactus = function() {
	this.initialize(img.cactus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,350);


(lib.Computer = function() {
	this.initialize(img.Computer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,543);


(lib.fern = function() {
	this.initialize(img.fern);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,402);


(lib.Frame = function() {
	this.initialize(img.Frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,164);


(lib.justAuz = function() {
	this.initialize(img.justAuz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,1024);


(lib.justEu = function() {
	this.initialize(img.justEu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,1024);


(lib.justUS = function() {
	this.initialize(img.justUS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,1024);


(lib.Light = function() {
	this.initialize(img.Light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,205);


(lib.noFlag = function() {
	this.initialize(img.noFlag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,1024);


(lib.Noteshighlight = function() {
	this.initialize(img.Noteshighlight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,130);


(lib.Notes = function() {
	this.initialize(img.Notes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,109);


(lib.Piggybank = function() {
	this.initialize(img.Piggybank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,130);


(lib.Piggybank1 = function() {
	this.initialize(img.Piggybank1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,131);


(lib.Piggybank2 = function() {
	this.initialize(img.Piggybank2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,131);


(lib.Piggybank3 = function() {
	this.initialize(img.Piggybank3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,131);


(lib.Womanpj = function() {
	this.initialize(img.Womanpj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,631,369);


(lib.Womansuit = function() {
	this.initialize(img.Womansuit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,631,369);// helper functions:

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


(lib.woman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		sClothing = localStorage.getItem("15018394-clothing"); //pj, suit
		console.log(sClothing);
		
		if (sClothing == null) {
			localStorage.setItem("15018394-clothing","pj");
		} else if (sClothing == "pj") {
			//this.gotoAndStop(1);
		} else if (sClothing == "suit") {
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Womanpj();
	this.instance.parent = this;

	this.instance_1 = new lib.Womansuit();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,631,369);


(lib.plant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		iPlant = localStorage.getItem("15018394-background"); //room, beach
		console.log(iPlant);
		
		if (iPlant == null) {
			localStorage.setItem("15018394-background","room");
		} else if (iPlant == "room") {
			//this.gotoAndStop(1);
		} else if (iPlant == "beach") {
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.fern();
	this.instance.parent = this;
	this.instance.setTransform(0,12);

	this.instance_1 = new lib.cactus();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12,185,402);


(lib.pigboi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		iFuel = localStorage.getItem("15018394-fuel"); //0-201
		console.log(iFuel);
		
		//0, 50,100,201
		if (iFuel == null) {
			localStorage.setItem("15018394-fuel",0);
		} else if (iFuel == 0) {
			
		} else if ((51 > iFuel)&&(iFuel > 0)) {
			this.gotoAndStop(1);
		} else if ((101 > iFuel)&&(iFuel > 51)) {
			this.gotoAndStop(2);
		} else if (iFuel > 101) {
			this.gotoAndStop(3);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.Piggybank();
	this.instance.parent = this;

	this.instance_1 = new lib.Piggybank1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Piggybank2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Piggybank3();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,130);


(lib.Globe = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var iCheckOne = localStorage.getItem("15018394-checkOne"); //1, 0
		var iCheckTwo = localStorage.getItem("15018394-checkTwo"); //1, 0
		var iCheckThree = localStorage.getItem("15018394-checkThree"); //1, 0
		
		console.log("ONE:"+iCheckOne);
		console.log(iCheckTwo);
		console.log(iCheckThree);
		
		if (iCheckOne == null) {
			localStorage.setItem("15018394-checkOne",1);
			localStorage.setItem("15018394-checkTwo",1);
			localStorage.setItem("15018394-checkThree",1);
		}
		if (iCheckOne == 0) {
			console.log("aus");
			this.gotoAndStop(1);
		} else if (iCheckTwo == 0) {
			//this.gotoAndStop(1);
			console.log("uk");
			this.gotoAndStop(2);
		} else if (iCheckThree == 0) {
			//US
			//AUS
			console.log("us");
			this.gotoAndStop(3);
		} else {
			console.log("nada");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.noFlag();
	this.instance.parent = this;

	this.instance_1 = new lib.justAuz();
	this.instance_1.parent = this;

	this.instance_2 = new lib.justEu();
	this.instance_2.parent = this;

	this.instance_3 = new lib.justUS();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,358,1024);


(lib.computer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Computer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.computer, new cjs.Rectangle(0,0,640,543), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		iBackground = localStorage.getItem("15018394-background"); //room, beach
		console.log(iBackground);
		
		if (iBackground == null) {
			localStorage.setItem("15018394-background","room");
		} else if (iBackground == "room") {
			//this.gotoAndStop(1);
		} else if (iBackground == "beach") {
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.back1();
	this.instance.parent = this;

	this.instance_1 = new lib.back2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,1024);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Frame();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,174,164), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,226,205), null);


(lib.note = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Notes();
	this.instance.parent = this;

	this.instance_1 = new lib.Noteshighlight();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,109);


// stage content:
(lib.MainScene = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Sound.removeAllSounds();
		
		var aOfficeNoise = new Audio('sounds/roomNoise.mp3');
		var aNoteTurn = new Audio('sounds/pageTurn.mp3');
		
		this.noteOne.addEventListener("click", noteOneClick.bind(this));
		this.noteTwo.addEventListener("click", noteTwoClick.bind(this));
		this.noteThree.addEventListener("click", noteThreeClick.bind(this));
		this.noteFour.addEventListener("click", noteFourClick.bind(this));
		
		this.btnFrame.addEventListener("click", frameClick.bind(this));
		
		aOfficeNoise.play();
		
		function noteOneClick()
		{
			localStorage.setItem("15018394-noteVar","1");
			aNoteTurn.play();
			this.play();
		}
		
		function noteTwoClick()
		{
			localStorage.setItem("15018394-noteVar","2");
			aNoteTurn.play();
			this.play();
		}
		
		function noteThreeClick()
		{
			localStorage.setItem("15018394-noteVar","3");
			aNoteTurn.play();	
			this.play();
		}
		
		function noteFourClick()
		{
			localStorage.setItem("15018394-noteVar","4");
			aNoteTurn.play();
			this.play();
		}
		
		function frameClick() {
			localStorage.setItem("15018394-noteVar","5");
			this.play();
		}
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
		
		var sNote = localStorage.getItem("15018394-noteVar");
		if (sNote == 1) {
			window.open("Scene1.html","_self");
		} else if (sNote == 2) {
			window.open("Scene2.html","_self");
		} else if (sNote == 3) {
			window.open("Scene3.html","_self");
		} else if (sNote == 4) {
			window.open("Scene4.html","_self");
		} else if (sNote == 5) {
			window.open("Scene5.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(21).call(this.frame_44).wait(1));

	// Actions
	this.noteFour = new lib.note();
	this.noteFour.parent = this;
	this.noteFour.setTransform(1084.5,423.7);
	new cjs.ButtonHelper(this.noteFour, 0, 1, 1);

	this.noteThree = new lib.note();
	this.noteThree.parent = this;
	this.noteThree.setTransform(958,423.7);
	new cjs.ButtonHelper(this.noteThree, 0, 1, 1);

	this.noteOne = new lib.note();
	this.noteOne.parent = this;
	this.noteOne.setTransform(958,287.4);
	new cjs.ButtonHelper(this.noteOne, 0, 1, 1);

	this.noteTwo = new lib.note();
	this.noteTwo.parent = this;
	this.noteTwo.setTransform(1084.5,287.4);
	new cjs.ButtonHelper(this.noteTwo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.noteTwo},{t:this.noteOne},{t:this.noteThree},{t:this.noteFour}]}).to({state:[]},24).wait(21));

	// Layer 3
	this.btnFrame = new lib.Symbol2();
	this.btnFrame.parent = this;
	this.btnFrame.setTransform(171,165,1,1,0,0,0,87,82);

	this.timeline.addTween(cjs.Tween.get(this.btnFrame).wait(23).to({_off:true},1).wait(21));

	// Lamp
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(669,102.5,1,1,0,0,0,113,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:true},1).wait(21));

	// Earth
	this.instance_1 = new lib.Globe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1066,512,1,1,0,0,0,179,512);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:true},1).wait(21));

	// Piggybank
	this.instance_2 = new lib.pigboi();
	this.instance_2.parent = this;
	this.instance_2.setTransform(753,786,1,1,0,0,0,74,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:82.5,regY:65.5,x:761.5,y:786.5},0).wait(22).to({_off:true},1).wait(21));

	// Plant
	this.instance_3 = new lib.plant();
	this.instance_3.parent = this;
	this.instance_3.setTransform(147.5,646,1,1,0,0,0,92.5,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:92,regY:213,x:147,y:658},0).wait(22).to({_off:true},1).wait(21));

	// Woman
	this.instance_4 = new lib.woman();
	this.instance_4.parent = this;
	this.instance_4.setTransform(417.5,839.5,1,1,0,0,0,315.5,184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:true},1).wait(21));

	// Computer
	this.instance_5 = new lib.computer();
	this.instance_5.parent = this;
	this.instance_5.setTransform(543.1,552.8,1,1,0,0,0,320,271.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:true},1).wait(21));

	// Background
	this.instance_6 = new lib.background();
	this.instance_6.parent = this;
	this.instance_6.setTransform(640,512,1,1,0,0,0,640,512);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,512,1280,1024);
// library properties:
lib.properties = {
	width: 1280,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back1.jpg", id:"back1"},
		{src:"images/back2.jpg", id:"back2"},
		{src:"images/cactus.png", id:"cactus"},
		{src:"images/Computer.png", id:"Computer"},
		{src:"images/fern.png", id:"fern"},
		{src:"images/Frame.png", id:"Frame"},
		{src:"images/justAuz.png", id:"justAuz"},
		{src:"images/justEu.png", id:"justEu"},
		{src:"images/justUS.png", id:"justUS"},
		{src:"images/Light.png", id:"Light"},
		{src:"images/noFlag.png", id:"noFlag"},
		{src:"images/Noteshighlight.png", id:"Noteshighlight"},
		{src:"images/Notes.png", id:"Notes"},
		{src:"images/Piggybank.png", id:"Piggybank"},
		{src:"images/Piggybank1.png", id:"Piggybank1"},
		{src:"images/Piggybank2.png", id:"Piggybank2"},
		{src:"images/Piggybank3.png", id:"Piggybank3"},
		{src:"images/Womanpj.png", id:"Womanpj"},
		{src:"images/Womansuit.png", id:"Womansuit"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;