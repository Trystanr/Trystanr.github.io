(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1786,
	height: 2463,
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



(lib._buildaninvasionkit_ = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background11111111 = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.backhover = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bikini = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bikiniMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.box1 = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.brainnobtn = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.brainNobtnHov = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.brainYesbtn = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.footsteps = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.gameboy = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.gameboyMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.gloves = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.glovesInfo = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.glovesMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ipod = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ipodMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.lost = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.makeup = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.makeupMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.paper = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.paperMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.papersInfo = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.pill = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.pillInfo = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.pillMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.plasters = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.plastersInfo = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.plastersMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.playagaincopy = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.playagainHover = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.scisorrrs = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.scisorrrsMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.survivalText = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.torch = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.torchInfo = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.torchMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.water = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.waterInfo = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.waterMove = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.win = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.youarehere = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.zombie2 = function() {
	this.spriteSheet = ss["SurvivalKitnew_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.you = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.youarehere();
	this.instance.setTransform(0,0,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.1,186.4);


(lib.waterInfo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.waterInfo();
	this.instance.setTransform(0,0,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,718.8,644.8);


(lib.waterHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.waterMove();
	this.instance.setTransform(0,262.4,0.53,0.53,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316,343.9);


(lib.water_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.water();
	this.instance.setTransform(0,238.1,0.53,0.53,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.3,323.1);


(lib.torchInfo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.torchInfo();
	this.instance.setTransform(0,0,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,705.3,632.7);


(lib.torchHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.torchMove();
	this.instance.setTransform(0,0,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.1,451.7);


(lib.torch_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.torch();
	this.instance.setTransform(0,0,0.389,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.7,258.1);


(lib.surText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.survivalText();
	this.instance.setTransform(0,0,0.731,0.731);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,805.9,482);


(lib.boxbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.box1();
	this.instance.setTransform(0,0,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,764.3,899.8);


(lib.scissorsHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scisorrrsMove();
	this.instance.setTransform(36.3,223.8,0.677,0.677,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256.5,223.8);


(lib.scissors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scisorrrs();
	this.instance.setTransform(36.3,218,0.677,0.677,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,218);


(lib.plastersInfo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plastersInfo();
	this.instance.setTransform(0,0,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,705.3,632.7);


(lib.plastersHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plastersMove();
	this.instance.setTransform(0,0,0.509,0.509);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218.7,185.1);


(lib.plasters_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plasters();
	this.instance.setTransform(0,0,0.509,0.509);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.6,184.1);


(lib.pillsInfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pillInfo();
	this.instance.setTransform(0,0,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,705.3,632.7);


(lib.pillsHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pillMove();
	this.instance.setTransform(0,0,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.1,124.7);


(lib.pills = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pill();
	this.instance.setTransform(0,0,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.6,115);


(lib.paperInfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.papersInfo();
	this.instance.setTransform(0,0,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,705.3,632.7);


(lib.paperHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.paperMove();
	this.instance.setTransform(388,0,0.534,0.534,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388,361.4);


(lib.paper_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.paper();
	this.instance.setTransform(303.2,0,0.534,0.534,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303.2,334.1);


(lib.losePanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lost();
	this.instance.setTransform(0,0,1.187,1.187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2491.7,1779.8);


(lib.endPanelWin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.win();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2100,1500);


(lib.endBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.brainNobtnHov();

	this.instance_1 = new lib.brainYesbtn();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKjT8Qg8gDg2gmQg1gogshFQgcgqgshZQguhcgZgoQgshGgzgoQgigdhDgjQhMgngbgUQgzglhChNQhihzgMgNQg8g+hZg+Qg2gmhvhDQighjg0gdQiOhchvgzQigg/hOghQiMg5hQhBQhEg4gjhEQgohPAPhLQANhPBJg/QA7gzBcgkQCRg2DAgPQBygKDmADQgKgsAcgoQAbgnAtgNQApgMAuANQAqANAiAgQASARAhAkQAeAeAcAHQApAKBGgjQBMglAlACQg/hDAVhjQAUhjBUglIADAOQAugGAoAlQAjAhATA0QALAgATBCQAUA4AdAdQArApBZAOICXAVQBWAYBiBTQA3AvBuBkQBHA2BfAwQBHAlBqArQBzAtAzAaQBYAuA2A6QA/BFAKBbQAKBig9A6QgnAnhCARQgwANhJACQBABbAZA8QAlBbgUBKQgLAhgVAXQgXAZgdAEQgzAGhAg/IlSlCQARBWgQBXQgQBWgtBKQAMEngJFZQAAApgFAaQgHAlgSAYQghApg9AAIgKAAgAIbIGQAAASACBWQACBAgGAnQgGAaAAANQAAAeAWAbQAHANALAHQANAHAKgFQgDghAEhfQAEhQgLguQgOg9gjgXgAyFqSQgNACgIAHIAAADQhPAWg2A2IAkA1QAWAdAVATQAcAfA+AgQAeAOBAATQBCATAfANQASAIAmAVQAkAUATAIQBFAcA1gOQgogMAAhRIAAibQAAg2AFgcQAPgtAigPImrAAQgRAAgJACgAofmvQgKAkAoA0QARAcASAKQANAHATABQALAAAXgDQAbgDBlgTQgigYgHgbQgDgJAAgQQAAgNgGgLQgHgNgLgEQgJgFgTAAIijAAg");
	this.shape.setTransform(76,121.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217,217);


(lib.end2btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.brainNobtnHov();

	this.instance_1 = new lib.brainnobtn();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKjT8Qg8gDg2gmQg1gogshFQgcgqgshZQguhcgZgoQgshGgzgoQgigdhDgjQhMgngbgUQgzglhChNQhihzgMgNQg8g+hZg+Qg2gmhvhDQighjg0gdQiOhchvgzQigg/hOghQiMg5hQhBQhEg4gjhEQgohPAPhLQANhPBJg/QA7gzBcgkQCRg2DAgPQBygKDmADQgKgsAcgoQAbgnAtgNQApgMAuANQAqANAiAgQASARAhAkQAeAeAcAHQApAKBGgjQBMglAlACQg/hDAVhjQAUhjBUglIADAOQAugGAoAlQAjAhATA0QALAgATBCQAUA4AdAdQArApBZAOICXAVQBWAYBiBTQA3AvBuBkQBHA2BfAwQBHAlBqArQBzAtAzAaQBYAuA2A6QA/BFAKBbQAKBig9A6QgnAnhCARQgwANhJACQBABbAZA8QAlBbgUBKQgLAhgVAXQgXAZgdAEQgzAGhAg/IlSlCQARBWgQBXQgQBWgtBKQAMEngJFZQAAApgFAaQgHAlgSAYQghApg9AAIgKAAgAIbIGQAAASACBWQACBAgGAnQgGAaAAANQAAAeAWAbQAHANALAHQANAHAKgFQgDghAEhfQAEhQgLguQgOg9gjgXgAyFqSQgNACgIAHIAAADQhPAWg2A2IAkA1QAWAdAVATQAcAfA+AgQAeAOBAATQBCATAfANQASAIAmAVQAkAUATAIQBFAcA1gOQgogMAAhRIAAibQAAg2AFgcQAPgtAigPImrAAQgRAAgJACgAofmvQgKAkAoA0QARAcASAKQANAHATABQALAAAXgDQAbgDBlgTQgigYgHgbQgDgJAAgQQAAgNgGgLQgHgNgLgEQgJgFgTAAIijAAg");
	this.shape.setTransform(76,121.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217,217);


(lib.zombie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombie2();
	this.instance.setTransform(0,0,0.351,0.351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,101.7);


(lib.makeupHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.makeup();
	this.instance.setTransform(314.9,-93,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(314.9,-93,181,149.2);


(lib.makeup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.makeupMove();
	this.instance.setTransform(0,0,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,170.4);


(lib.ipodHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ipodMove();
	this.instance.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.7,136.5);


(lib.ipod_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ipod();
	this.instance.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.7,136.5);


(lib.glovesInfo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glovesInfo();
	this.instance.setTransform(0,0,0.356,0.356);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,664.7,596.3);


(lib.glovesHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glovesMove();
	this.instance.setTransform(0,0,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,502.8,344.7);


(lib.gloves_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gloves();
	this.instance.setTransform(0,0,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,502.8,320.4);


(lib.gameboyHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gameboyMove();
	this.instance.setTransform(217.2,0,0.433,0.433,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.2,211.1);


(lib.gameboy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gameboy();
	this.instance.setTransform(218.3,0,0.436,0.436,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218.3,212.2);


(lib.bikiniHov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bikiniMove();
	this.instance.setTransform(0,0,0.658,0.658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,497.1,375.3);


(lib.bikini_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bikini();
	this.instance.setTransform(0,0,0.658,0.658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,403,380.6);


(lib.playbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playagaincopy();

	this.instance_1 = new lib.playagainHover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EEB8").s().p("AmFEqQiVgHjXgYQgpgFgUgDQgigGgZgMQgfgPgUgWQgXgZgEgcQgDgNABgkQAAgfgGgRQgIgQgWgYQgZgYgHgOQgOgZAAgsQgEgxAFgeQAHgqAagVQATgTAjgGQARgDAvgDQBMgCBegXIAAgIQH6ACPyAAQAfgBAPADQAaAEAQANQAVASAIAkQAFAVAEArQACAUAHAZIANAsIAkByQAOAqAaBVQAJAfABANQADAYgJATQgMAZgjAKQgZAHgqgBQlwACreABQiIgBhEgCgAB7A0IBEARQA5ATAjgJQgDgZANgaQimAAhUADQAEABAIAJIgCAAQAfACAnAJgAqXh3QA+ACB2AAQhugJgwgBQgSgBgEAJg");
	this.shape.setTransform(99.5,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,59);


(lib.backbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,1.427,1.427);

	this.instance_1 = new lib.backhover();
	this.instance_1.setTransform(0,0,1.489,1.489);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EEB8").s().p("AmeJsIlMgPQgxgRg9gHQgugFhQAAQkvABoHABQgbjjARh3QAVhsAIg2QAMhcgVhAQhGACgxgSQg+gXgJgzQgGgfARghQAPgdAcgTQAYgQAkgKQATgGAtgIQEQgvCwghQAsgHAagIQAngLAbgSQARgKAcgYQAdgZAOgJQAqgcBbgYQBigaAngWIACAIQC2gQEjA9IDsAyQCIAaBjAJQBBAFBSABICTgCQG0gGNogQQAqAAAaAHQAlAJAPAaQANAYgKAfQgKAcgXATQgUAQgfAKQgUAGgjAGQA+AGAlAHQA3AKAqATQAwAXAgAlQAkApAGAvQAGAygbA7QgNAbguBKQgoBAgMAlQgSA4ASAvQA1AKAkAeQApAigOAoQgRA6htAAMggUAAUQASAegQAmQgPAlghARQgeAQgpAEIgfABIgqgBgAIEDQQDKgIBsgCQiAgIg+gCQhQAMgoAIgAoehuQDYgCGwAAQhqgRiIgDQhSgCikAEIAAgCQhsAOg0AIg");
	this.shape.setTransform(194.4,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,374,97.1);


// stage content:
(lib.SurvivalKitnew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Sound.removeAllSounds(); //removes all loaded sounds
		this.stop();
		var rightItems = 0;
		var youWrong = new Audio('sounds/youWrong.mp3');
		var right = new Audio('sounds/yay.mp3');
		var wind = new Audio('sounds/wind.mp3');
		//copy!
		var youWin = exportRoot.WinPanel;
		var youLose = exportRoot.losePanel;
		var endBtn1 = exportRoot.endBtn1;
		var endBtn2 = exportRoot.endBtn2;
		
		//end of copy!
		
		wind.play();
		
		right.volume = 0.2;
		youWrong.volume = 0.2;
		//NEED TO BE DECLARED OUTSIDE INVISIBLE FUNCTION 
			var plastersInfo = exportRoot.plastersInfo;
			var glovesInfo = exportRoot.glovesInfo;
			var torchInfo = exportRoot.torchInfo;
			var waterInfo = exportRoot.waterInfo;
			var pillsInfo = exportRoot.pillsInfo;
			var paperInfo = exportRoot.paperInfo;
		
		invisible()
		function invisible()
		{
			plastersInfo.visible = false;
			glovesInfo.visible = false;
			torchInfo.visible = false;
			waterInfo.visible = false;
			pillsInfo.visible = false;
			paperInfo.visible = false;
			youWin.visible=false;
			youLose.visible=false;
			endBtn1.visible=false;
			endBtn2.visible=false;
			console.log("hidden");
		}
		
		//COLLISION DETECTION 
		
		var zombie = exportRoot.zombie; //zombie is blue (b)
		var you = exportRoot.you; //you are green (g)
		var zombieW = zombie.nominalBounds.width; //blueW is for zombieW 
		var youW = you.nominalBounds.width; //you are greenW
		
		//WHEN CLICKED ON RIGHT BUTTON
		function rightItem()
		{
			console.log("right clicked");
			right.play();
			rightItems = rightItems + 1;
			if (rightItems == 7)
			{
				console.log("YOU WIN");
				//show image - maybe make a function for this
			}
		}
		
		//WHEN CLICKED ON WRONG BUTTON
		function wrongItem()
		{
			console.log("wrong clicked");
			youWrong.play();
			zombie.x += 300;
			if((you.x <= zombie.x + zombieW) && (you.x + youW >= zombie.x)) 
				youLose();
		      else
		         console.log('not hitting');
		}
		
		//exporting hover images
		//EXPORTING GAMEBOY
		var gameboy = exportRoot.gameboy;
		var gameboyHov = exportRoot.gameboyHov;
		gameboyHov.visible = false;
		
		
		this.gameboy.addEventListener("click", buttonClicked.bind(this));
		function buttonClicked()
		{
			console.log("Gameboy clicked");
			wrongItem();
			gameboyHov.visible = true;
			gameboy.visible = false;
		}
		
		//EXPORTING IPOD
		
		var ipod = exportRoot.ipod;
		var ipodHov = exportRoot.ipodHov;
		ipodHov.visible = false;
		
		this.ipod.addEventListener("click", buttonClicked2.bind(this));
		function buttonClicked2()
		{
			console.log("ipod clicked");
			wrongItem();
			ipodHov.visible = true;
			ipod.visible = false;
		}
		
		//EXPORTING MAKEUP 
		
		var makeup = exportRoot.makeup;
		var makeupHov = exportRoot.makeupHov;
		makeupHov.visible = false;
		
		this.makeup.addEventListener("click", buttonClicked3.bind(this));
		function buttonClicked3()
		{
			console.log("makeup clicked");
			wrongItem();
			makeupHov.visible = true;
			makeup.visible = false;
		}
		
		//EXPORTING BIKINI TOP 
		var bikini = exportRoot.bikini;
		var bikiniHov = exportRoot.bikiniHov;
		bikiniHov.visible = false;
		
		this.bikini.addEventListener("click", buttonClicked4.bind(this));
		function buttonClicked4()
		{
			console.log("bikini clicked");
			wrongItem();
			bikiniHov.visible = true;
			bikini.visible = false;
		}
		
		//EXPORTING TORCH
		var torch = exportRoot.torch;
		var torchHov = exportRoot.torchHov;
		torchHov.visible = false;
		
		this.torch.addEventListener("click", buttonClicked5.bind(this));
		function buttonClicked5()
		{
			invisible()
			console.log("torch clicked");
			rightItem();
			torchHov.visible = true;
			torch.visible = false;
			torchInfo.visible = true;
		}
		
		//EXPORTING GLOVES
		var gloves = exportRoot.gloves;
		var glovesHov = exportRoot.glovesHov;
		glovesHov.visible = false;
		
		this.gloves.addEventListener("click", buttonClicked6.bind(this));
		function buttonClicked6()
		{
			invisible()
			console.log("gloves clicked");
			rightItem();
			glovesHov.visible = true;
			gloves.visible = false;
			glovesInfo.visible = true;
		}
		
		//EXPORTING THE WATER
		var water = exportRoot.water;
		var waterHov = exportRoot.waterHov;
		waterHov.visible = false;
		
		this.water.addEventListener("click", buttonClicked7.bind(this));
		function buttonClicked7()
		{
			invisible()
			console.log("water clicked");
			rightItem();
			waterHov.visible = true;
			water.visible = false;
			waterInfo.visible = true;
		}
		
		//EXPORTING PAPER
		var paper = exportRoot.paper;
		var paperHov = exportRoot.paperHov;
		paperHov.visible = false;
		
		this.paper.addEventListener("click", buttonClicked8.bind(this));
		function buttonClicked8()
		{
			invisible()
			console.log("paper clicked");
			rightItem();
			paperHov.visible = true;
			paper.visible = false;
			paperInfo.visible = true;
		}
		
		//EXPORTING PILLS
		var pills = exportRoot.pills;
		var pillsHov = exportRoot.pillsHov;
		pillsHov.visible = false;
		
		
		
		this.pills.addEventListener("click", buttonClicked9.bind(this));
		function buttonClicked9()
		{
			invisible()
			console.log("pills clicked");
			rightItem();
			pillsHov.visible = true;
			pills.visible = false;
			pillsInfo.visible = true;
		}
		
		//EXPORTING SCISSORS
		var scissors = exportRoot.scissors;
		var scissorsHov = exportRoot.scissorsHov;
		scissorsHov.visible = false;
		
		this.scissors.addEventListener("click", buttonClicked10.bind(this));
		function buttonClicked10()
		{
			invisible()
			console.log("scissors clicked");
			rightItem();
			scissorsHov.visible = true;
			scissors.visible = false;
			torchInfo.visible = true; // ALSO A TOOL AND SUPPLY
		}
		
		//EXPORTING PLASTERS
		var plasters = exportRoot.plasters;
		var plastersHov = exportRoot.plastersHov;
		plastersHov.visible = false;
		
		this.plasters.addEventListener("click", buttonClicked11.bind(this));
		function buttonClicked11()
		{
			invisible()
			console.log("plasters clicked");
			rightItem();
			plastersHov.visible = true;
			plasters.visible = false;
			plastersInfo.visible = true;
		}
		
		//_______________________________________________________________________
		
		//BACK BUTTON
		
		exportRoot.backbtn.addEventListener("click", backbutton.bind(this));
		function backbutton()
		{
			window.open("FirstSceneSounds.html", "_self");
		}
		
		//MAKE RESET BUTTON 
		
		exportRoot.playbtn.addEventListener("click", playAgain.bind(this));
		function playAgain()
		{
			window.open("SurvivalKitnew.html", "_self");
		}
		//YOU LOSE 
		function youLose()
		{
			console.log("YOU LOSE! LOL");
			//copy!
			endBtn1.visible = true;
			losePanel.visible=true;
		}
		
		exportRoot.endBtn1.addEventListener("click", endButtonLose.bind(this));
		function endButtonLose()
		{
			window.open("survivalKitNew.html", "_self");
		}
		
		exportRoot.endBtn2.addEventListener("click", endButtonWin.bind(this));
		function endButtonWin()
		{
			window.open("survivalKitNew.html", "_self");
		}
		
		
		
		//SWAP BACKGROUNDS
		//ADD LOSING AND WINNING IMAGES 
		
		//IF YOU HAVE TIME, ADD FOOD AND CLOTHING, REMOVE SCISSORS
	}
	this.frame_1 = function() {
		this.stop();
		
		exportRoot.endBtn.addEventListener("click", endbutton.bind(this))
		function endButton()
		{
			console.log("End of lost!");
			window.open("SurvivalKitnew.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Actions
	this.endBtn2 = new lib.end2btn();
	this.endBtn2.setTransform(273.5,1740.1,1.765,1.765);
	new cjs.ButtonHelper(this.endBtn2, 0, 1, 2, false, new lib.end2btn(), 3);

	this.endBtn1 = new lib.endBtn();
	this.endBtn1.setTransform(726.2,1735.2,1.883,1.883);
	new cjs.ButtonHelper(this.endBtn1, 0, 1, 2, false, new lib.endBtn(), 3);

	this.losePanel = new lib.losePanel();
	this.losePanel.setTransform(891.8,1077.1,1,1,0,0,0,1245.9,889.9);

	this.WinPanel = new lib.endPanelWin();
	this.WinPanel.setTransform(893.4,1065.6,1.206,1.206,0,0,0,1050,750);

	this.glovesInfo = new lib.glovesInfo_1();
	this.glovesInfo.setTransform(1407,552.2,1.122,1.122,0,0,0,332.2,298.2);

	this.plastersInfo = new lib.plastersInfo_1();
	this.plastersInfo.setTransform(1386.8,534,1,1,0,0,0,352.6,316.4);

	this.waterInfo = new lib.waterInfo_1();
	this.waterInfo.setTransform(1388.6,540,1,1,0,0,0,359.4,322.4);

	this.torchInfo = new lib.torchInfo_1();
	this.torchInfo.setTransform(1386.8,534,1,1,0,0,0,352.6,316.4);

	this.paperInfo = new lib.paperInfo();
	this.paperInfo.setTransform(1386.8,534,1,1,0,0,0,352.6,316.4);

	this.pillsInfo = new lib.pillsInfo();
	this.pillsInfo.setTransform(1386.8,534,1,1,0,0,0,352.6,316.4);

	this.playbtn = new lib.playbtn();
	this.playbtn.setTransform(150,2320,1,1,0,0,0,102.5,29.5);
	new cjs.ButtonHelper(this.playbtn, 0, 1, 2, false, new lib.playbtn(), 3);

	this.you = new lib.you();
	this.you.setTransform(1481,981,1,1,0,0,0,89,93.2);

	this.backbtn = new lib.backbtn();
	this.backbtn.setTransform(1552.4,2376.5,1,1,0,0,0,187,48.5);
	new cjs.ButtonHelper(this.backbtn, 0, 1, 2, false, new lib.backbtn(), 3);

	this.instance = new lib.surText();
	this.instance.setTransform(620.2,423.2,1,1,-1.4,0,0,402.9,240.9);
	this.instance.alpha = 0.441;

	this.instance_1 = new lib._buildaninvasionkit_();
	this.instance_1.setTransform(19.7,0,0.69,0.69);

	this.plastersHov = new lib.plastersHov();
	this.plastersHov.setTransform(1112.6,2051.3,1,1,0,0,0,109.4,92.5);
	new cjs.ButtonHelper(this.plastersHov, 0, 1, 1);

	this.plasters = new lib.plasters_1();
	this.plasters.setTransform(1126.9,2071.9,1,1,0,0,0,119.8,92);

	this.scissorsHov = new lib.scissorsHov();
	this.scissorsHov.setTransform(177.8,1657.3);
	new cjs.ButtonHelper(this.scissorsHov, 0, 1, 1);

	this.scissors = new lib.scissors();
	this.scissors.setTransform(317.2,1774.2,1,1,0,0,0,114,109);

	this.pillsHov = new lib.pillsHov();
	this.pillsHov.setTransform(436.3,1964.8,1,1,0,0,0,62,62.4);
	new cjs.ButtonHelper(this.pillsHov, 0, 1, 1);

	this.pills = new lib.pills();
	this.pills.setTransform(437.8,1961.1,1,1,0,0,0,56.2,57.5);

	this.paperHov = new lib.paperHov();
	this.paperHov.setTransform(728.6,2044.9,1,1,0,0,0,194,180.7);
	new cjs.ButtonHelper(this.paperHov, 0, 1, 1);

	this.paper = new lib.paper_1();
	this.paper.setTransform(737,2049.4,1,1,0,0,0,151.6,167.1);

	this.waterHov = new lib.waterHov();
	this.waterHov.setTransform(264.3,2039.7,1,1,0,0,0,158,172);
	new cjs.ButtonHelper(this.waterHov, 0, 1, 1);

	this.water = new lib.water_1();
	this.water.setTransform(258.4,2053.5,1,1,0,0,0,158.2,161.6);

	this.glovesHov = new lib.glovesHov();
	this.glovesHov.setTransform(1371.6,1991.7,1,1,0.8,0,0,251.2,172.4);
	new cjs.ButtonHelper(this.glovesHov, 0, 1, 1);

	this.gloves = new lib.gloves_1();
	this.gloves.setTransform(1374.1,2005.7,1,1,0,0,0,251.3,160.2);

	this.torchHov = new lib.torchHov();
	this.torchHov.setTransform(1252.6,1551.3,1,1,0,0,0,89,225.8);
	new cjs.ButtonHelper(this.torchHov, 0, 1, 1);

	this.torch = new lib.torch_1();
	this.torch.setTransform(1290.3,1651.9,1,1,0,0,0,59.9,129.1);

	this.bikiniHov = new lib.bikiniHov();
	this.bikiniHov.setTransform(886.4,1695.7,1,1,0,0,0,248.6,187.7);
	new cjs.ButtonHelper(this.bikiniHov, 0, 1, 1);

	this.bikini = new lib.bikini_1();
	this.bikini.setTransform(842.7,1697.9,1,1,0,0,0,201.5,190.2);

	this.makeupHov = new lib.makeupHov();
	this.makeupHov.setTransform(1273.9,1764.5,1,1,0,0,0,90.5,74.5);

	this.makeup = new lib.makeup_1();
	this.makeup.setTransform(1593.4,1667.2,1,1,0,0,0,90.5,85.2);

	this.ipodHov = new lib.ipodHov();
	this.ipodHov.setTransform(1442.9,1375.4,1,1,0,0,0,139.8,68.2);
	new cjs.ButtonHelper(this.ipodHov, 0, 1, 1);

	this.ipod = new lib.ipod_1();
	this.ipod.setTransform(1446.2,1379,1,1,0,0,0,139.8,68.2);

	this.gameboyHov = new lib.gameboyHov();
	this.gameboyHov.setTransform(1089.7,1343.2,1,1,0,0,0,108.5,105.5);
	new cjs.ButtonHelper(this.gameboyHov, 0, 1, 1);

	this.gameboy = new lib.gameboy_1();
	this.gameboy.setTransform(1093.6,1347.2,1,1,0,0,0,109.1,106);

	this.zombie = new lib.zombie();
	this.zombie.setTransform(256.9,969.9,1.559,1.559,0,0,0,37,50.9);

	this.instance_2 = new lib.footsteps();
	this.instance_2.setTransform(401.1,1026.8,0.37,0.636,-90);

	this.kit = new lib.boxbtn();
	this.kit.setTransform(475.3,1513.2,1.009,1.009,0,0,0,382.2,449.9);
	new cjs.ButtonHelper(this.kit, 0, 1, 1);

	this.instance_3 = new lib.background11111111();
	this.instance_3.setTransform(0,3,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.kit},{t:this.instance_2},{t:this.zombie},{t:this.gameboy},{t:this.gameboyHov},{t:this.ipod},{t:this.ipodHov},{t:this.makeup},{t:this.makeupHov},{t:this.bikini},{t:this.bikiniHov},{t:this.torch},{t:this.torchHov},{t:this.gloves},{t:this.glovesHov},{t:this.water},{t:this.waterHov},{t:this.paper},{t:this.paperHov},{t:this.pills},{t:this.pillsHov},{t:this.scissors},{t:this.scissorsHov},{t:this.plasters},{t:this.plastersHov},{t:this.instance_1},{t:this.instance},{t:this.backbtn},{t:this.you},{t:this.playbtn},{t:this.pillsInfo},{t:this.paperInfo},{t:this.torchInfo},{t:this.waterInfo},{t:this.plastersInfo},{t:this.glovesInfo},{t:this.WinPanel},{t:this.losePanel},{t:this.endBtn1},{t:this.endBtn2}]}).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(519.7,1231.5,2533.3,2463.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;