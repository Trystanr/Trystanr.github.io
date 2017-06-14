(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1791,
	height: 1279,
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



(lib.armBite = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.backhover = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.guess = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.guessBox1 = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.guessHover = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.instructions = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.legBite = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.level1 = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.level2 = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.level3 = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.level4 = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.level5 = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.level6 = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.level7 = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.neckBite = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.playagain = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.playagainHover = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.SCALE = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.skeleton = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.slider = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.INFECTIONSTAGEMAN = function() {
	this.spriteSheet = ss["chalkboard_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA6IgKgDIgKgDQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgCAFIgDAAIAAgmIADAAQACAMAEAGQAEAGAHAEQAIAEAHAAQAKAAAGgGQAGgFAAgIQAAgEgCgEQgDgEgEgEIgQgKIgVgLQgFgFgEgGQgDgGAAgHQAAgMAKgJQAIgIAPAAQAHAAAKAEIAGACQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABgBACgEIACAAIAAAnIgCAAQgCgMgEgGQgEgHgHgEQgHgEgGAAQgIAAgGAGQgFAFgBAHQABAFADAEQAFAGARALQAQAHAGAEQAGAEADAGQADAGAAAHQAAANgKAJQgKAJgQAAg");
	this.shape.setTransform(0.8,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvA4IAAgDIAEAAQAIAAADgFQABgDAAgJIAAhHQAAgKgCgDQgDgEgHAAIgEAAIAAgDIAxAAIAAADQgHAAgDACQgEACgBACQgCADAAAKIAABFQAAAHACACIADADQACABAJAAIAIAAQANAAAFgCQAFgCAFgFQAEgFAEgKIADAAIgKAfg");
	this.shape.setTransform(1.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJA4IAAgDIAEAAQAHAAADgEQACgDAAgKIAAgiIgyAAIAAAiIABALIAEAEQADACAEAAIAEAAIAAADIgwAAIAAgDIAEAAQAHAAADgEQACgDAAgKIAAhHIgBgLIgDgEQgEgCgEAAIgEAAIAAgDIAwAAIAAADIgEAAQgEAAgDACQgDACgBACQgBADAAAIIAAAgIAyAAIAAggIgBgLQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAgBQgEgCgEAAIgEAAIAAgDIAxAAIAAADIgEAAQgEAAgEACQgDACgBACQgBADAAAIIAABHQAAAIACADQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQAEACAEAAIAEAAIAAADg");
	this.shape.setTransform(2.1,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmA4IAAgDIAEAAQAHAAACgEQACgDAAgKIAAhHIgBgLQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQgEgCgDAAIgEAAIAAgDIBMAAIABAZIgDAAQgBgIgDgEQgDgDgEgCQgEgCgIAAIgVAAIAAAtIARAAQAGAAADgDQAEgEABgJIACAAIAAAkIgCAAQgBgGgBgDQgBgDgDgCQgDgCgFAAIgRAAIAAAkIABALQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQADACACAAIAEAAIAAADg");
	this.shape.setTransform(6.1,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.1,97,22.9);


(lib.e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvA4IAAgDIAEAAQAEAAAEgCQACgCABgCQABgDAAgIIAAhHQAAgLgCgCQgDgEgHAAIgEAAIAAgDIBVAAIABAZIgDAAQgCgJgCgDQgCgEgEgBQgDgCgJAAIgdAAIAAAtIAXAAQAKAAADgDQAEgEABgKIADAAIAAAmIgDAAQgBgJgCgCQgBgDgEgBQgDgCgHAAIgXAAIAAAlIABAJIACADQACABAFAAIARAAQAJAAAFgCQAEgBAEgEQAFgFAFgKIAEAAIgKAcg");
	this.shape.setTransform(1.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmAqQgPgRgBgZQABgaARgRQAQgOAUAAQAWAAARAQQAPARAAAYQAAAYgPARQgRARgWAAQgWAAgQgQgAgXgoQgMAOAAAaQAAAaANAPQAIALAOAAQAPAAAKgMQAKgMAAgbQAAgbgLgOQgJgLgPAAQgOAAgJALg");
	this.shape.setTransform(2.1,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.L_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvA4IAAgDIAEAAQAIAAADgFQABgDAAgJIAAhHQAAgKgCgDQgDgEgHAAIgEAAIAAgDIAxAAIAAADQgHAAgDACQgEACgBACQgCADAAAKIAABFQAAAHACACIADADQACABAJAAIAIAAQANAAAFgCQAFgCAFgFQAEgFAEgKIADAAIgKAfg");
	this.shape_1.setTransform(1.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3A4IAAgDIAEAAQAHAAADgFQACgDAAgJIAAhHQAAgKgCgDQgEgEgGAAIgEAAIAAgDIAtAAQAYAAANAGQANAGAIANQAIANAAARQAAAWgOAQQgQASgfAAgAgXguIAABeQAKACAHAAQASAAAMgOQANgNAAgXQAAgWgNgNQgMgNgSAAQgIAAgJACg");
	this.shape.setTransform(2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxA4IAAgDIAEAAQAHAAADgFQACgDAAgJIAAhHQAAgKgCgDQgDgEgHAAIgEAAIAAgDIAxAAQALAAAIACQANADAGAIQAHAHAAAKQAAAJgGAGQgEAHgKADQALABAGAFQAIAIAAALQAAAIgFAIQgGAIgJADQgJAEgTAAgAgRABIAAAvQAKACAHAAQAPAAAIgHQAIgHAAgKQAAgGgEgGQgEgGgHgEQgJgDgJAAIgJAAgAgRgvIAAArIAHABIAJAAQAKAAAGgDQAGgCAEgGQACgFAAgGQABgKgJgHQgHgHgOAAQgJAAgGACg");
	this.shape.setTransform(1.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXA4IAAgDIAEAAQAIAAADgFQABgCAAgKIAAhUIgNAAIgLABQgFACgDAEQgDAFAAAIIgEAAIACgbIBaAAIABAbIgDAAIgDgKQgCgFgFgCQgEgDgHAAIgQAAIAABUQAAALADACQADAEAGAAIAEAAIAAADg");
	this.shape.setTransform(1.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXA4IAAgDIAEAAQAHAAAEgEQACgDAAgKIAAhHIgBgLIgEgEQgEgCgEAAIgEAAIAAgDIAvAAIAAADIgEAAQgHAAgDAEQgCADAAAKIAABHIABALQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQAEACAEAAIAEAAIAAADg");
	this.shape.setTransform(-1.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.e_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvA4IAAgDIAEAAQAEAAAEgCQACgCABgCQABgDAAgIIAAhHQAAgLgCgCQgDgEgHAAIgEAAIAAgDIBVAAIABAZIgDAAQgCgJgCgDQgCgEgEgBQgDgCgJAAIgdAAIAAAtIAXAAQAKAAADgDQAEgEABgKIADAAIAAAmIgDAAQgBgJgCgCQgBgDgEgBQgDgCgHAAIgXAAIAAAlIABAJIACADQACABAFAAIARAAQAJAAAFgCQAEgBAEgEQAFgFAFgKIAEAAIgKAcg");
	this.shape_1.setTransform(1.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.1,104,22.9);


(lib.level7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.level7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,637,195);


(lib.level6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.level6();
	this.instance.setTransform(0,0,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452.3,99.2);


(lib.level5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.level5();
	this.instance.setTransform(0,0,0.71,0.71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,494.4,93.8);


(lib.level4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.level4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,737,211);


(lib.level3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.level3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,603,139);


(lib.level2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.level2();
	this.instance.setTransform(0,0,0.775,0.775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,460.1,108.5);


(lib.level1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.level1();
	this.instance.setTransform(0,0,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.7,106);


(lib.placeholder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{blood:0,bite:1,flesh:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEAAIECAAAGwAAID7AAAiPAAIDjAAAqqAAIDdAAAmbAAIDcAA");
	this.shape.setTransform(68.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AEXAAIEBAAAACAAIDkAAAoXAAIDcAAAkJAAIDcAA");
	this.shape_1.setTransform(53.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,138.6,2);


(lib.playAgainbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playagain();

	this.instance_1 = new lib.playagainHover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AONFWIhDgTQgngKgdAAQgQABgfAFQggAFgPABQgTAAgegEIgxgHQgkgEg0AHIhZAMQhWAKiBgJQiPgMhGgDQhZgEkRANQjiALiHgTIhigQQg7gJgogDQg8gEgWgGQgsgMgQggQgJgUACggQAEgkgBgSQgBgTgGgbIgLguQgLg8ASg8IAKgdQAGgSACgMQADgNADgYQACgaADgLQALgyAmgkQAmglAzgIIAAgBIPUARILDANICxADQCGACASBFQAGAVgIAeIgPA1QgQBFAhBbIASAyQAKAdABAVQACAcgKAYQgLAagWAMQAPAegIAjQgIAjgbAUQgeAVgrAAQgcAAghgIg");
	this.shape.setTransform(104.4,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,59);


(lib.guessbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.guess();

	this.instance_1 = new lib.guessHover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFeFXIhsgMQksgjkiAHQgtAAgXALIgZAQQgQAKgJAEQggAMglgTQgegQgcgiQgqgwgDgmQgBgSAHgeQAJgkABgKQACgTgCgmQgDgmADgSQABgNAIgaQAIgbABgOQADgXgQhOQgNg+ARghQAMgXAYgNQAYgNAbAAQAOABAfAGQAdAHAQgBQAOgBATgEIAhgJIAogIQAZgEAPgFIAAADQArAFB8AGIDUAGQBeAFBCgCQA/AAB/gJQAqgCAbAFQAmAFAYATQAbAWAUArQATApADAlQACAsgaAaQgNALgDAIQgDAGABAKIAEARQALAqgBA0QgBAigGA+QgEAygGAnQgEAzgRAYQgRAXgiAJQgZAGgmABQgvgBg+gGg");
	this.shape.setTransform(59,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,58);


(lib.backbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();

	this.instance_1 = new lib.backhover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOLGiQiigehRgNQhygTiPgFQhagDiqABQqyAKqNArQgoADgXgBQgigBgagKQgfgKgVgYQgXgZgBgeQAAgNAFgUIAGghQACgYgIggIgSg3QgWhLAKhOQAJhPAohEIAegvQAQgcAGgWIAHgoQAEgYAIgNQATgdAsgGQAegFAxAHQEAAlEEgLQEEgMD8g8IADgBQCyAyEqgCID0gEQCOgBBmAKIBwAKQBAADAvgLIBDgQQAngFAZAPQAJAGAVAWQASAUAOAGQATAIAmgGQApgGARAEQAnALAMAzQAKAmgIA3IgpEpQgJBAgJAiQgPA1gaAkQg2BMh3AaQg0ALg/AAQg6AAhEgKg");
	this.shape.setTransform(131,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262,68);


(lib.level7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.level7_1();
	this.instance_1.setTransform(265.5,81.3,0.834,0.834,0,0,0,318.4,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,531.2,162.6);


(lib.level6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.level6_1();
	this.instance_1.setTransform(268.4,58.8,1.187,1.187,0,0,0,226.2,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,536.7,117.7);


(lib.level5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.level5_1();
	this.instance_1.setTransform(283.3,53.8,1.146,1.146,0,0,0,247.2,46.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566.5,107.5);


(lib.level4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.level4_1();
	this.instance_1.setTransform(302.7,86.7,0.822,0.822,0,0,0,368.4,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,605.5,173.4);


(lib.level3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.level3 = new lib.level3_1();
	this.level3.setTransform(249.7,57.6,0.828,0.828,0,0,0,301.4,69.5);

	this.timeline.addTween(cjs.Tween.get(this.level3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.6,115.2);


(lib.level2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.level2 = new lib.level2_1();
	this.level2.setTransform(263.7,62,1.146,1.146,0,0,0,230.1,54.1);

	this.timeline.addTween(cjs.Tween.get(this.level2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,527.2,124.3);


(lib.level1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.level1_1();
	this.instance_1.setTransform(77.9,59.5,1.122,1.122,0,0,0,69.4,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.7,119);


// stage content:
(lib.chalkboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{win:1,lose:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//MUSIC
		var audio = new Audio('sounds/wind.mp3');
		audio.play();
		audio.volume = 0.2;
		
		//BUTTON START
		
		this.backbtn.addEventListener("click", buttonClicked.bind(this));
		function buttonClicked()
		{
			window.open("FirstSceneSounds.html","_self");
		}
		
		//BUTTON END
		var found = false;
		var i = 0;
		var guess = true;
		var countIncor = 0;
		var countCor = 0;
		var min = 0;
		var max = 5;
		var curText;
		var sameLetter = 0;
		var word; //STRING OF WORD
		//SETTING WORDS AND ALPHABET
		var rightWord;
		var words = ['bite','infection','flesh','blood','zombie','apocalypse'];
		var letter;
		var lengthCor = 0; //IF YOUR WORD IS EVENTUALLY CORRECT
		var level1 = exportRoot.level1;
		var level2 = exportRoot.level2;
		var level3 = exportRoot.level3;
		var level4 = exportRoot.level4;
		var level5 = exportRoot.level5;
		var level6 = exportRoot.level6;
		var level7 = exportRoot.level7;
		start();
		
		//ENTERING IN THE LETTER
		var inputbox = exportRoot.inputText;
		//ACTUAL WORD
		var guess = exportRoot.guessText;
		
		
		window.onkeydown = keyPressed.bind(this); 
			function keyPressed(e)
			{ 	
				if(e.keyCode == 8)
				{	
					inputbox.text = "";
				}
				else
				{
					if((e.keyCode <= 90) && (e.keyCode >= 65))
					{	
						if (guess)
						{
						inputbox.text += String.fromCharCode(e.keyCode);
						guess = false;
						}
					}
				}
				
			}
		
		//SET ALL PARTS TO BEGINNING
		function start()
		{
			found = false;
			chooseWord(0,5);
			console.log("start!")
			level1.visible = false; //HIDE A SYMBOL (INSTANCE)
			level2.visible = false; //HIDE A SYMBOL (INSTANCE)
			level3.visible = false;
			level4.visible = false;
			level5.visible = false; 
			level6.visible = false;
			level7.visible = false;
			lengthCor = 0;
			countCor =  0;
			countIncor = 0;
			guess = true;
			i = 0;
			
		}
		chooseWord(0,5);
		
		
		//START OVER AGAIN BUTTON
		this.playAgainbtn.addEventListener("click", buttonClicked4.bind(this));
		function buttonClicked4()
		{
			console.log("STARTING OVER!WHOOPS");
			inputbox.text = "";
			guess.text = "";
			chooseWord(0,5);
			start();
		}
		
		//CHOOSING RANDOM WORD
		
		function chooseWord(min,max) {
			console.log("PROCESSING WORD");
			word = Math.round((Math.random()* max )+ min);
			console.log("done");
			rightWord = (words[word]);
			lengthCor = rightWord.length;
			console.log(lengthCor);
			console.log(rightWord);
			tabs(lengthCor);
		}
		
		function tabs(lengthCor)
		{
			//LENGTH OF WORD
			console.log("ITSSSS WORRRKKIIINGGG");
			guess.text = "";
			for (i = 0; i < lengthCor; i++) 
			{ 
				guess.text += "__" + " ";
			}
		}
		
		
		/*function check()
		{
			letter = letter.toUpperCase();
			rightWord = rightWord.toUpperCase();
			console.log(rightWord.charAt(0));
			for (i = 0; i < rightWord.length; i++)
			{
				console.log("working");
				if (letter == rightWord.charAt(i))
				{
					console.log("Found!");
				}
				else
				{
					console.log("not found!");
				}
			}
		}*/
		
		//GUESS BUTTON
		this.guessbtn.addEventListener("click", buttonClicked5.bind(this));
		function buttonClicked5()
		{
			sameLetter = 0;
			guess = true;
			found = false; //not found
			console.log("GUESS!");
			letter = inputbox.text;
			letter = letter.toLowerCase();
			//console.log(rightWord);
			//console.log(rightWord.charAt(0));
			//console.log(letter);
			//console.log(i);
			inputbox.text = "";
				console.log("working");
				/*if (letter == rightWord.charAt(0))
				{
					console.log("Found!");
					correct();
					i = i + 1;
				}
				else
				{
					console.log("not found!");
					incorrect(); //RIGHT;
					i = i + 1;
				}*/
				
				for (i = 0; i < rightWord.length; i++)
			{
				console.log("working");
				if (letter == rightWord.charAt(i))
				{
					console.log("Found!");
					found = true;
					//GET GUESTS LENGTH, THEN MOVE OVER EACH UNDERSCORE
					
					curText = this.guessText.text;
					console.log("the text found was: "+ curText);
					curText.replace(/__/g, letter);
					console.log("the text Should now be: "+ curText);			
					this.guessText.text = curText;
					console.log(curText);
					//console.log(curText);
					//guess.text = curText;
					//console.log(guess.text); THIS IS HOW IM TRYING TO DISPLAY IT 
					sameLetter = sameLetter + 1;
					console.log("SAME LETTER: " + sameLetter);
				}
				else
				{
					console.log("not found!");
				}
			}
			
				if (found)
				{
					console.log("YASSSS QUEEN");
					correct();
				}
				else
				{
					console.log("NOOOOO QUEEN");
					incorrect();
				}
		}
		
		// IF INCORRECT
		function incorrect()
		{
			console.log("INCORRECT!");
			countIncor = countIncor + 1;
			if (countIncor == 1)
			{
				level1.visible = true; //HIDE A SYMBOL (INSTANCE)	
			}
			if (countIncor == 2)
			{
				level2.visible = true;
			}
			if (countIncor == 3)
			{
				level3.visible = true; //HIDE A SYMBOL (INSTANCE)	
			}
			if (countIncor == 4)
			{
				level4.visible = true; //HIDE A SYMBOL (INSTANCE)	
			}
			if (countIncor == 5)
			{
				level5.visible = true;
			}
			if (countIncor == 6)
			{
				level6.visible = true; //HIDE A SYMBOL (INSTANCE)	
			}
			if (countIncor == 7)
			{
				level7.visible = true; //HIDE A SYMBOL (INSTANCE)	
			}
			if (countIncor == lengthCor)
				{
					console.log("Uncongrats. You lost!");
				}
		}
		
		//IF CORRECT
		function correct()
		{
			console.log("CORRECT!");
			console.log(lengthCor);
			countCor = countCor + 1;
				if (countCor == lengthCor)
				{
					console.log("Congrats! You got the word!");
				}
			//ADD LETTERS TO FINAL WORD
		}
		
		
		var canScale1 = false;
		var tries = 7;
		var max = 3; 											// This represens the amount of words that can be randomed
		var randomWord = Math.floor((Math.random() * max) + 1);
		var livesLeft = exportRoot.livesLeft;
		var lines = exportRoot.lines;
		console.log(randomWord);
		//Managing the internal timeline of the placeholder symbol
			if (randomWord == 1)// 1 represents Blood
			{
				lines.gotoAndStop("blood");
			}
			else if(randomWord == 2)// 2 represents Bite
			{
				lines.gotoAndStop("bite");
			}
			else if(randomWord == 3)// 3 represents Flesh
			{
				lines.gotoAndStop("flesh");	
			}	
				
		//Declare the symbols for each word
		//Blood
			var b	= exportRoot.b    ;
			var l	= exportRoot.l    ;
			var o1	= exportRoot.o1    ;
			var o2	= exportRoot.o2    ;
			var d	= exportRoot.d    ;
			b.scaleX = 0;
			l.scaleX = 0;
			o2.scaleX = 0;
			o1.scaleX = 0;
			d.scaleX = 0;
			
		//Bite 	
			//Note there is no "B" since we can reuse the first one
			var i = exportRoot.i    ;
			var t = exportRoot.t    ;
			var e2 = exportRoot.e2    ;
			i.scaleX = 0;
			t.scaleX = 0;
			e2.scaleX = 0;
		
		//Flesh
			var f	= exportRoot.f    ;
			var l1	= exportRoot.l1    ; //Note I add a number since that letter has been used before
			var e1	= exportRoot.e1    ;
			var s	= exportRoot.s    ;
			var h	= exportRoot.h    ;
			
			f.scaleX = 0;
			l1.scaleX = 0;
			e1.scaleX = 0;
			s.scaleX = 0;
			h.scaleX = 0;
		
		
		
		createjs.Ticker.addEventListener("tick", isCorrect.bind(this));
		function isCorrect()
		{
				livesLeft.text = tries;
				if(tries==0)
				{
					console.log("You used up your lives you Lose");
					//this.gotoAndStop("lose");
					createjs.Ticker.removeEventListener("tick", isCorrect.bind(this));
				}
				
				if (b.scaleX == 1 && l.scaleX == 1 && o1.scaleX == 1 && d.scaleX == 1)
				{
						console.log("You Got the word right you win");
					//	this.gotoAndStop("win");
						createjs.Ticker.removeEventListener("tick", isCorrect.bind(this));
				}
				if (b.scaleX == 1 && i.scaleX == 1 && t.scaleX == 1 && e2.scaleX == 1)
				{
						console.log("You Got the word right you win");
				//		this.gotoAndStop("win");
						createjs.Ticker.removeEventListener("tick", isCorrect.bind(this));
				}
				if (f.scaleX == 1 && l1.scaleX == 1 && e1.scaleX == 1 && s.scaleX == 1 && h.scaleX == 1)
				{
						console.log("You Got the word right you win");
					//	this.gotoAndStop("win");
						createjs.Ticker.removeEventListener("tick", isCorrect.bind(this));
				}
		
				/*
				Add more if's for each extra word
				*/		
		}
		
		
		// 	inputbox.text += String.fromCharCode(e.keyCode);
		
		window.onkeydown = keyPressed.bind(this); 
			function keyPressed(e)
			{ 	
				if (randomWord == 2)// 2 represents Blood
				{
					blood(e);
				}
				else if(randomWord == 1)// 1 represents Bite
				{
					bite(e);
				}
				else if(randomWord == 3)// 3 represents flesh
				{
					flesh(e);	
				}	
				//Add additional Else ifs per word 
			}
		
			
			
		function blood(e)
		{
			
				if(e.keyCode == 66)// B
				{	
					b.scaleX = 1;	
				}
				else if(e.keyCode == 76) // L
				{	
					l.scaleX = 1;	
				}
				else if(e.keyCode == 79) // O
				{	
					o1.scaleX = 1;	
					o2.scaleX = 1;	
				}
				else if(e.keyCode == 68) // D
				{	
					d.scaleX = 1;	
				}		
				else
				{
					if (tries>0){
					tries -=1;
					incorrect()
					}	
				}	
				
		}
		
		function bite(e)
		{
				if(e.keyCode == 66)// B
				{	
					b.scaleX = 1;	
				}
				else if(e.keyCode == 73) // I
				{	
					i.scaleX = 1;	
				}
				else if(e.keyCode == 84) // T
				{	
					t.scaleX = 1;	
				}
				else if(e.keyCode == 69) // E
				{	
					e2.scaleX = 1.0;
		
				}		
				else
				{
					if (tries>0)
					{
					tries -=1;
					incorrect()	
					}	
				}	
		}
		function flesh(e)
		{
				if(e.keyCode == 70)// F
				{	
					f.scaleX = 1;	
				}
				else if(e.keyCode == 76) // L
				{	
					l1.scaleX = 1;	
				}
				else if(e.keyCode == 69) // E
				{	
					console.log(e.keyCode);
					e1.scaleX = 1;	
				}
				else if(e.keyCode == 83) // S
				{	
					s.scaleX = 1.0;
				}
				else if(e.keyCode == 72) // H
				{	
					h.scaleX = 1.0;
				}		
				else
				{
					if (tries>0)
					{
					tries -=1;
					incorrect();	
					}	
				}	
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Game
	this.lines = new lib.placeholder();
	this.lines.setTransform(416.7,541,1,1,0,0,0,68.3,0);

	this.livesLeft = new cjs.Text("", "8px 'Times New Roman'");
	this.livesLeft.name = "livesLeft";
	this.livesLeft.lineHeight = 11;
	this.livesLeft.setTransform(-143.1,556.4,2.26,2.26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABoCNIi1jeIAACpQAAAaAFAGQAIAJAQAAIAKAAIAAAHIhhAAIAAgHIAKAAQASAAAHgLQAFgHAAgXIAAi/QgNgOgFgFQgHgFgMgDQgGgCgMAAIAAgIIBLAAICpDPIAAifQAAgZgHgHQgHgIgQAAIgKAAIAAgIIBhAAIAAAIIgKAAQgSAAgHAKQgEAHAAAXIAADpg");
	this.shape.setTransform(365.8,185.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6CKIAAgHIAKAAQARAAAIgKQAEgHABgYIAAiyQgBgWgCgGQgCgGgGgDQgJgFgKAAIgKAAIAAgIIB1AAIAAAIIgKAAQgRAAgIAKQgFAGAAAaIAACyQAAAUADAHQACAGAGADQAJAFAKAAIAKAAIAAAHg");
	this.shape_1.setTransform(344.3,185.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABACOIg/iwIg9CwIgIAAIhSjlIgMgfQgEgIgHgDQgHgEgMAAIAAgIIBnAAIAAAIIgFAAQgLAAgGAFQgGAFAAAHQAAAHAJAaIA3CaIAuiDIgIgXIgGgTIgKgSIgHgHIgKgFIgMgBIAAgIIBqAAIAAAIIgHAAQgMAAgFAFQgFAFAAAIQAAAKAJAbIA1CVIA1iYQAJgZAAgKQAAgFgDgEQgDgEgEgBQgIgDgNAAIAAgIIBTAAIAAAIQgKAAgHAEQgHAEgGAKQgEAHgJAbIhODfg");
	this.shape_2.setTransform(317.6,186);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhDB+QgXgQgKgaQgHgTAAgyIAAhrQAAgZgHgIQgHgIgQAAIgKAAIAAgIIB4AAIAAAIIgKAAQgSAAgHALQgFAHAAAXIAAB4QAAAQADAVQADAVAIALQAHAMAPAIQAPAHATAAQAbAAAWgMQAVgMAIgSQAIgTAAgsIAAhvQAAgagGgGQgIgJgPAAIgLAAIAAgIIBjAAIAAAIIgLAAQgQAAgJANQgEAHAAAXIAABvQAAAqgJAXQgIAXgYAQQgZARgpAAQgsAAgYgQg");
	this.shape_3.setTransform(271.9,186);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhgBoQgngpABg/QAAhCAtgpQAnglA0AAQA2AAAoApQAnAqAAA9QABA9goAqQgoAqg4AAQg5AAgngpgAg8hmQgcAjAABDQAABBAdAlQAWAcAlAAQAmAAAZgeQAZgfABhCQAAhFgcgjQgXgcgmAAQglAAgXAbg");
	this.shape_4.setTransform(241.7,185.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag6CKIAAgHIAKAAQARAAAIgLQAFgGAAgXIAAhCIhNhzIgSgZQgFgGgPgHQgEgCgIAAIAAgIIB3AAIAAAIIgHAAQgJAAgIAFQgIAEAAAJQAAAHANATIA3BYIA3hTQAMgTAAgKQAAgGgDgFQgDgEgFgDQgGgCgLAAIAAgIIBhAAIAAAIIgFAAQgFAAgLAFQgKAFgIAIQgJAJgMAUIhDBnIAABHQAAAZAGAGQAIAJAQAAIAJAAIAAAHg");
	this.shape_5.setTransform(211.3,185.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah2CKIAAgHIAKAAQAKAAAJgFQAGgDADgGQACgHAAgUIAAizQAAgbgFgGQgIgIgRAAIgKAAIAAgIIDVAAIADA9IgIAAQgFgWgFgIQgFgIgKgFQgIgDgVAAIhKAAIAABuIA7AAQAXABAIgIQALgJABgYIAIAAIAABfIgIAAQgDgUgCgGQgEgHgJgFQgIgDgRAAIg7AAIAABbQAAASABAFQACAEAEACQAEADALAAIAuAAQAXAAALgEQALgDAJgKQANgNANgZIAJAAIgYBFg");
	this.shape_6.setTransform(370.7,185.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRCPIgagHQgUgHgFAAQgFAAgDADQgDADgCAKIgHAAIAAhgIAHAAQAGAfAJAOQAJAPASAKQATAKAUAAQAaAAAPgNQAOgOAAgTQAAgKgFgKQgGgLgMgJIgqgaQgjgSgPgMQgPgMgIgOQgIgOAAgRQAAgeAXgWQAXgWAjAAQAVAAAYALQAMAFAFAAQAFAAADgDQAEgEACgJIAHAAIAABgIgHAAQgEgbgJgRQgKgQgSgKQgRgKgRAAQgWAAgNAOQgOAMAAARQAAANAIALQANAOAuAaQAnAVAOAKQAOALAIAPQAIAPAAAQQAAAggZAXQgYAXgnAAg");
	this.shape_7.setTransform(346.4,185.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhfBoQgngpgBg/QABhCAsgpQAnglA1AAQA2AAAoApQAnAqAAA9QAAA9goAqQgoAqg3AAQg5AAgmgpgAg7hmQgdAjAABDQAABBAeAlQAVAcAlAAQAlAAAageQAagfgBhCQAAhFgcgjQgWgcgmAAQglAAgWAbg");
	this.shape_8.setTransform(319.4,185.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah2CKIAAgHIALAAQARAAAHgMQAFgGAAgYIAAixQAAgbgGgGQgIgJgPAAIgLAAIAAgIIB8AAIAAAIQgVAAgIAEQgJAEgDAHQgEAGAAAZIAACtQAAARAEAGQACAFAFACQAFACAZAAIAUAAQAhAAAMgFQAOgEAKgMQALgMAKgaIAHABIgYBLg");
	this.shape_9.setTransform(291.4,185.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhfBoQgngpgBg/QABhCAsgpQAnglA1AAQA2AAAoApQAnAqAAA9QAAA9goAqQgoAqg3AAQg5AAgmgpgAg7hmQgdAjAABDQAABBAeAlQAVAcAlAAQAlAAAageQAagfgBhCQAAhFgcgjQgWgcgmAAQglAAgWAbg");
	this.shape_10.setTransform(222.6,185.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag6CKIAAgHIAKAAQARAAAIgLQAEgGABgXIAAhCIhNhzIgSgZQgFgGgPgHQgFgCgHAAIAAgIIB3AAIAAAIIgHAAQgJAAgIAFQgIAEAAAJQAAAHANATIA3BYIA3hTQANgTAAgKQAAgGgEgFQgDgEgFgDQgGgCgLAAIAAgIIBhAAIAAAIIgFAAQgGAAgKAFQgKAFgJAIQgIAJgMAUIhDBnIAABHQAAAZAGAGQAHAJARAAIAJAAIAAAHg");
	this.shape_11.setTransform(192.3,185.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.livesLeft},{t:this.lines}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:271.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:252.9}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// flesh
	this.f = new lib.f();
	this.f.setTransform(402.7,531.1,1.042,1.042,0,0,0,48.6,6.4);

	this.l1 = new lib.L();
	this.l1.setTransform(430.9,531.1,1.042,1.042,0,0,0,46.1,6.4);

	this.e1 = new lib.e();
	this.e1.setTransform(460.4,531.1,1.042,1.042,0,0,0,46.1,6.4);

	this.s = new lib.S();
	this.s.setTransform(490.3,531.1,1.042,1.042,0,0,0,46.1,6.4);

	this.h = new lib.H();
	this.h.setTransform(520.3,531.1,1.042,1.042,0,0,0,46.1,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.h},{t:this.s},{t:this.e1},{t:this.l1},{t:this.f}]}).to({state:[]},1).wait(2));

	// Bite
	this.i = new lib.i();
	this.i.setTransform(384.5,511,1.62,1.62,0,0,0,-5.7,-5.4);

	this.t = new lib.t();
	this.t.setTransform(405.7,511,1.62,1.62,0,0,0,-6.2,-5.4);

	this.e2 = new lib.e_1();
	this.e2.setTransform(436,512,1.62,1.62,0,0,0,-6,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.e2},{t:this.t},{t:this.i}]}).to({state:[]},1).wait(2));

	// Blood
	this.l = new lib.L_1();
	this.l.setTransform(431.9,530.1,1.668,1.668,0,0,0,46.1,6.4);

	this.d = new lib.D();
	this.d.setTransform(518.5,530.1,1.668,1.668,0,0,0,46.1,6.4);

	this.o2 = new lib.O();
	this.o2.setTransform(487.5,530.1,1.668,1.668,0,0,0,46.1,6.4);

	this.o1 = new lib.O();
	this.o1.setTransform(459.5,530.1,1.668,1.668,0,0,0,46.1,6.4);

	this.b = new lib.b();
	this.b.setTransform(403.7,530.1,1.668,1.668,0,0,0,46.1,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b},{t:this.o1},{t:this.o2},{t:this.d},{t:this.l}]}).to({state:[]},1).wait(2));

	// Actions
	this.guessText = new cjs.Text("", "50px 'Background noise'", "#F9EEB8");
	this.guessText.name = "guessText";
	this.guessText.textAlign = "center";
	this.guessText.lineHeight = 54;
	this.guessText.lineWidth = 625;
	this.guessText.setTransform(448.2,484.4);

	this.inputText = new cjs.Text("", "70px 'Background noise'", "#F9EEB8");
	this.inputText.name = "inputText";
	this.inputText.textAlign = "center";
	this.inputText.lineHeight = 75;
	this.inputText.lineWidth = 68;
	this.inputText.setTransform(429.3,615.7);

	this.instance = new lib.guessBox1();
	this.instance.setTransform(179,577);

	this.instance_1 = new lib.skeleton();
	this.instance_1.setTransform(959,129.3,0.827,0.827);

	this.level6 = new lib.level6_2();
	this.level6.setTransform(1290.7,338.8,1,1,0,0,0,268.4,58.9);

	this.level7 = new lib.level7_2();
	this.level7.setTransform(1300.1,203.3,1,1,0,0,0,265.6,81.3);

	this.backbtn = new lib.backbtn();
	this.backbtn.setTransform(1620,1200,1,1,0,0,0,131,34);
	new cjs.ButtonHelper(this.backbtn, 0, 1, 2, false, new lib.backbtn(), 3);

	this.playAgainbtn = new lib.playAgainbtn();
	this.playAgainbtn.setTransform(432,840,1,1,0,0,0,102.5,29.5);
	new cjs.ButtonHelper(this.playAgainbtn, 0, 1, 2, false, new lib.playAgainbtn(), 3);

	this.guessbtn = new lib.guessbtn();
	this.guessbtn.setTransform(425,770,1,1,0,0,0,58.5,29);
	new cjs.ButtonHelper(this.guessbtn, 0, 1, 2, false, new lib.guessbtn(), 3);

	this.instance_2 = new lib.instructions();
	this.instance_2.setTransform(253.3,227.9,0.623,0.623);

	this.instance_3 = new lib.INFECTIONSTAGEMAN();
	this.instance_3.setTransform(95.5,115,0.779,0.779);

	this.instance_4 = new lib.armBite();
	this.instance_4.setTransform(784,381.5,0.663,0.663);

	this.instance_5 = new lib.neckBite();
	this.instance_5.setTransform(778,133.9,0.663,0.663);

	this.instance_6 = new lib.legBite();
	this.instance_6.setTransform(784.9,724.8,0.663,0.663);

	this.level5 = new lib.level5_1();
	this.level5.setTransform(1272.2,441.2,1.146,1.146,0,0,0,247.2,46.9);

	this.level4 = new lib.level4_1();
	this.level4.setTransform(1260.6,476.1,0.822,0.822,0,0,0,368.4,105.5);

	this.level3 = new lib.level3_1();
	this.level3.setTransform(1316.8,605,0.828,0.828,0,0,0,301.4,69.5);

	this.level2 = new lib.level2_1();
	this.level2.setTransform(1337,712.2,1.146,1.146,0,0,0,230.1,54.1);

	this.instance_7 = new lib.SCALE();
	this.instance_7.setTransform(1388.3,120.3,0.808,0.808);

	this.level1 = new lib.level1_1();
	this.level1.setTransform(1138.5,818.8,1.122,1.122,0,0,0,69.4,53);

	this.instance_8 = new lib.slider();
	this.instance_8.setTransform(53.9,58.7,0.826,0.826);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(92,92,92,0.949)").s().p("AAyAEIhsAAIAAgHIBsAAIAJAAIAAAHIgJAAg");
	this.shape_12.setTransform(1354.9,1114.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(87,87,87,0.898)").s().p("AAZAEIg6AAIAAgHQAhAAAhADIABAEIgJAAg");
	this.shape_13.setTransform(1730.5,1114.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(64,64,64,0.671)").s().p("AAuAEIhjAAIAAgHIBjAAIAIAAIAAAHIgIAAg");
	this.shape_14.setTransform(1739.4,1115.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(6,6,6,0.071)").s().p("ABDAEIiNAAIAAgHIBjAAIAIAAIAiAAIAIAAIAAAHIgIAAg");
	this.shape_15.setTransform(1741.5,1116.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(39,39,39,0.408)").s().p("AAIAEIgIAAIghAAIAAgHIApAAIAJAAIAIAAIAJAAQAAABgBABQAAABAAAAQAAAAAAAAQgBAAAAAAQgKAEgLAAIgDAAg");
	this.shape_16.setTransform(1748.3,1115.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(12,12,12,0.137)").s().p("AgCB2IAAiGIAAgIIAAhlQAMB0gKCHIgCAAIAAgIg");
	this.shape_17.setTransform(1754.6,1100.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(66,66,66,0.694)").s().p("AgLBQIgJAAIAAgIQA2gigVhsIgBgJIAJAAIAACGIAAAIQAAAFgDACQgGAKgPAAIgIAAg");
	this.shape_18.setTransform(1752.1,1107.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(72,72,72,0.745)").s().p("AgDA2IAAgIIAAhjIAHAAIAABjIAAAIIgHAAg");
	this.shape_19.setTransform(1753.8,1093.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(7,7,7,0.09)").s().p("AgEAiIAAgJIAAgIIAAgyQANATgGAnIAAAJIgHAAg");
	this.shape_20.setTransform(1753.9,1084.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(52,51,51,0.918)").s().p("AgDAmIAAgIIAAhDIAHAAIAABDIAAAIIgHAAg");
	this.shape_21.setTransform(1723.3,1075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#423F3F").s().p("AgZAXIAAgIQAZgPASgYQABgCAFAAIAAAJQAJAsgjAAQgKAAgNgEg");
	this.shape_22.setTransform(1720.5,1083.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(57,55,55,0.804)").s().p("AAdAmIhCAAIAAgJIAJAAIAIAAQA8APgKg3IgBgJIAAgIIAAgJIAJAAIAABCIAAAJIgJAAg");
	this.shape_23.setTransform(1719.9,1082.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(52,52,52,0.91)").s().p("AAZAEIgJAAIgwAAIAAgHIA5AAIAIAAIAAAHIgIAAg");
	this.shape_24.setTransform(1712.7,1086);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(83,83,83,0.894)").s().p("AAhAEIhKAAIAAgHIARAAIAJAAIAwAAIAJAAIAAAHIgJAAg");
	this.shape_25.setTransform(1711,1086.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4D4D4D").s().p("AAQAEIgwAAIAAgHIAIAAIAxAAIAIAAQAAADgCABQgCADgEAAIgJAAg");
	this.shape_26.setTransform(1698.4,1065.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#535353").s().p("AgUAIIAAgIQAUgCAOgMQACgCAFAAQAAAFgCADQgOARgZAIIAAgJg");
	this.shape_27.setTransform(1708.1,1061.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#494949").s().p("AgDAZIAAg5IAHAAIAAAwIAAAJQAAAEgDACQgBACgDAAIAAgIg");
	this.shape_28.setTransform(1713.2,1052.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5D5D5D").s().p("Egg9AHyQE9AAE9AEIAAAEIgIAAQhiAChgAAQjdAAjTgKgEAg2ACGIAAgIIAAp5IAIAAIAAAJIAAJwIAAAIIgIAAgAdzBcIAApXIAIAAIAAAJQAHE2gPEgIAAgIg");
	this.shape_29.setTransform(1501.7,1034.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#575757").s().p("AAlAEIhSAAIAAgHIAIAAIA5AAIAJAAQAJAAAGADQACAAAAAEIgJAAg");
	this.shape_30.setTransform(1703,976.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#404040").s().p("ABUAhQAAgEgBgEQgJgXgPgSQAiAGAAAjIAAAIIgJAAgAhcgHIAAgJQARgIASgHIAIgCIAAAJQgEAAgDACQgRANgTAJIAAgHg");
	this.shape_31.setTransform(1703.4,979.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(40,40,40,0.427)").s().p("AARARIgJAAQgFAAgCgDQgMgOgNgPQAYAHASAOQADACAEAAIAAAJIgIAAg");
	this.shape_32.setTransform(31.1,1112.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(11,11,11,0.125)").s().p("AAABDQgDhDAAhCIAHAAIAAB9IAAAIIgEAAg");
	this.shape_33.setTransform(26.4,1101.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(68,68,68,0.71)").s().p("AAABOQgDgCAAgEIAAgJIAAh9IAAgIIAAgJIAHAAIAACXIAAAIQgEAAAAgCg");
	this.shape_34.setTransform(27.2,1101.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(82,82,82,0.851)").s().p("ABlAIIiwAAIgJAAQgQgBgJgHIAAgHQBgAMBygFIAJAAIAAAIIgJAAg");
	this.shape_35.setTransform(44.6,1114.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(90,90,90,0.937)").s().p("AEfAEIpGAAIAAgHIJGAAIAJAAIAAAHIgJAAg");
	this.shape_36.setTransform(1319.4,1114.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(78,77,77,0.988)").s().p("AgRAGQgCgCgFAAIAAgHQATgHAWgBIAIAAIAAAEQgbAEgOAPQAAgEgBgCg");
	this.shape_37.setTransform(1241.6,1085.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#474747").s().p("Ax9DKIAAgEQk9gEk+AAIAAgJIFCAAIAJAAICQAAIAIAAIAyAAIAJAAIBUAAIAJAAQALALAWACIABAEIgJAAIgMABIgNgBgEAhbgDBIhDAAIAAgJIBDAAIAJAAIAAAJIgJAAgAe7jBIhDAAIAAgJIAZAAIAIAAIAiAAIAIAAIAAAJIgIAAgAOajBIhEAAIAAgJIAZAAIAJAAIAiAAIAIAAIAAAJIgIAAgALGjBIhDAAIAAgJIAZAAIAJAAIAhAAIAIAAIAAAJIgIAAgABMjBIhEAAIAAgJIAZAAIAJAAIAiAAIAIAAIAAAJIgIAAgAi4jBIhEAAIAAgJIBEAAIAIAAIAAAJIgIAAgAmMjBIhDAAIAAgJIAQAAIAIAAIArAAIAIAAIAAAJIgIAAgA8ijBIhDAAIAAgJIAZAAIAJAAIAhAAIAJAAIAAAJIgJAAgA/1jBIhuAAIAAgJIBDAAIAJAAIAiAAIAJAAIAAAJIgJAAg");
	this.shape_38.setTransform(1469.1,1064.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3F3C3C").s().p("AgEAlIAAgIIAAhCIAHAAIAAAoIAAAJIAAAIQAFASgKAAIgCgBg");
	this.shape_39.setTransform(1142.3,708.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#413E3E").s().p("AHNOzIAAgIIAAh3IAIAAIAAB3IAAAIIgIAAgAnQtvQgEghAAgiIAIAAIAAA8IAAAIIgEgBg");
	this.shape_40.setTransform(1145.6,501.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3D3C3C").s().p("AgHAhIAAgRQANgPgGghIAAgJIAEABQAMA4gXAaIAAgJg");
	this.shape_41.setTransform(1147.6,292.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#383737").s().p("EAJcA3BQgMgYgJgZQAYAKABAgIABAJQgEAAgBgCgAAidJIgBgJQgGgbgCggQAUATgDAoIAAAJIgIAAgAjSSCIAAgIIAAg8IAJAAIAAA8IAAAIIgJAAgEgJfghwIAAgIIAAg8IAAgIIAIAAIAABEIAAAIIgIAAgEgCSg2HQgCgWgLgLIAAgJIAAgRQARARAAAiIAAAIIgEAAg");
	this.shape_42.setTransform(1160.3,629.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3F3D3D").s().p("AADAtQgKgqAAgwQAIAcAGAdIABAJIAAARIAAAIQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_43.setTransform(1143.4,274.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3B3939").s().p("EALmA/rQgVgjgHgwQAVAiAMArIABAIQgEAAgCgCgEACxAsiQgJg+gMg4QAbApgCBFIAAAIIgEAAgEAAIAkdQgIgjgDgoIAAgIIAAgaQAOAsABA6IAAAIQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAgAAws1QgUgOgIgaQAXALAKAXQABAEABAEQgEAAgDgCgAg8vOQgQgUgLgcQAZANAHAeIACAIQgFAAgCgDgAiyxmQgTgXgIgiQAXATAJAgIABAIQgEAAgCgCgEgLXggAQgRgagDgnIAJAAQALAbAEAgIABAIQgEAAgBgCgEgGUg+pQgFgkgIgfQAWAQgFArIgBAJIgDgBg");
	this.shape_44.setTransform(1174.3,624.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3A3838").s().p("EAKxBCJQAAgEgCgDQgNgRgCgbQAUAOAFAdIAAAIIgIAAgEABtAu9QgKgagCggQAQARAAAiIAAAJQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBgAnDSTIAAgJIAAhDIAIAAIAABDIAAAJIgIAAgAk6x7QgUgOgHgaQAXALAJAXQACAEAAAEQgFAAgCgCgAnJ1OQgRgRgDggQARARAHAaQACADAAAFQgFAAgBgCgAqd6yQgWgZgFgoQAVAaALAhIACAIQgFAAgCgCgEgIthBOIgNg6QAWANgEAlIgBAJQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_45.setTransform(1184.5,620.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3C3B3B").s().p("EAChAlRIAkgxQABgCAEAAIAAgIIAAgJQARgRANgXQAAgCAEAAQAAAEgBAEQgJAggYATIgBAIQgMAigcASIAAgJgEAEXAiOIAAgIQAQgSAMgWQABgCAFAAIgCAHQgIAhgYATIAAgJgAklAGQgRgOgCghQARARAIAYIABAIQgFAAgCgCgAi5uQIAAgJQAagUAagTQADgDAFAAQAAAEgDACQgbAcgeAZIAAgIgEgBygkfQgOgZgGggQAVASAEAgIABAJQgFAAgBgCg");
	this.shape_46.setTransform(1137.5,430);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3A3939").s().p("EANaBHgQglgEgNgeIA5AdQABABAAAEIgIAAgEAL/BGSQgRgQgCghQARASAIAZIABAIQgFAAgCgCgEACFA0DQgTgYgIgiQAXATAJAhIABAIQgEAAgCgCgEAAxAwvQgOgdgGgkQAVAWAEAkIABAJQgEAAgCgCgEgBmAoSQgSgRgBggQARARAHAZIABAIQgEAAgCgBgAs+81QgegfgGg8QAXAqASAsQACADgBAFQgEgBgCgCgEgLPhD0QgWgZgGgoQAVAZALAiIABAIQgEAAgBgCgEgLxhE3QgXgcgNgnQAbAYANAlQACADAAAFQgFAAgBgCgEgM+hGuQgRgQgCghQARASAHAZIABAIQgEAAgCgCg");
	this.shape_47.setTransform(1195.5,624.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3B3A3A").s().p("EALJBDbQgSgQgBggQAQARAHAaIABAIQgEAAgBgDgEAGiA5iQgPgegGglQAVAXAEAlIABAJQgFAAAAgCgEAADAkQQgLgXABgiQALAUADAeIABAIQgEAAgBgBgAiLdoQgXgZgFgoIAIAAQAJAiAOAaQACADAAAEQgEAAgBgCgAhtUbIAAgJQAWgaAJgpQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAAIQgCA1ggAYIAAgIgAFaGRIAAgRQAPgGgFgcIgBgIIAJAAIAAAIQAJAwgbALIAAgIgEgKphCCQgdgigHg5QAVAqATArQACAEAAAEQgEAAgCgCg");
	this.shape_48.setTransform(1156.1,561.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#363535").s().p("AgEAmIAAgRIAAgJIAAg5IAHAAIAAAIQAGA0gNAfIAAgIg");
	this.shape_49.setTransform(1075.4,82.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3E3C3C").s().p("EAGiA8mQAAhCgMg0QAYAWgHA2IAAAJIAAAZIAAAIgEABUAopIAAgIIAAgaQAPgXgCgtIAEAAIABAJQAGAsgPAYIAAARIAAAIIgJAAgAI5QKQgMgWABgkQANAVADAfIABAIQgEAAgCgCgAEgIXQgcgJgHggQAWASATASQACADAAAEQgFAAgDgCgAlNrBQgDglgBgnIAJAAIAABEIAAAIIgFAAgAB+4xIAAgIQAVgWABgtIAEAAIAAAIQAFA3gfAVIAAgJgEABQggbQgEgvAAguQAPAfgGA2IgBAIIgEAAgEgI5g6/QgEgngBgmQANgIAIgPQABgCAEAAQAAAEgCAEQgCAFgFAEIAAAIIAAAJIgIAAIAAA7IAAAJg");
	this.shape_50.setTransform(1131.6,462.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(81,79,79,0.988)").s().p("AAQAMQgZgCgPgNQAFAAABgCQADgCAAgEQAPALAXAIQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABIgJAAg");
	this.shape_51.setTransform(1064.8,65.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(59,57,57,0.808)").s().p("AAQAEIgwAAIAAgHIAwAAIAJAAIAIAAQAAADgCACQgCACgEAAIgJAAg");
	this.shape_52.setTransform(1059.7,65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5E5E5E").s().p("EAx5BODIzkAAI3qAAI3oAAInaAAI3qAAIgJAAIhuAAIgIAAIAAgJIXqAAIXqAAIXoAAQL1AAL2gFQC4gBCiAPIgIAAgEAsnBLFQr2gFr1AAI3oAAI3qAAI3qAAIAAgIIAIAAIA7AAIAJAAIXqAAIGOAAIBuAAIAIAAIB/AAIAIAAIBEAAIAJAAICYAAIAIAAIDLAAIAJAAIBdAAIAIAAIBmAAIAIAAIDLAAIAJAAIDJAAIAIAAIBdAAIAJAAIBlAAIAJAAIB/AAIAIAAIBEAAIAIAAIB/AAIAJAAIBDAAIAJAAICxAAIAJAAIBDAAIAJAAICYAAIAJAAIDLAAIAIAAICyAAIAIAAIBEAAIAIAAIB/AAIAJAAIBDAAIAJAAICYAAIAJAAIDLAAIAIAAIBdAAIAJAAIBlAAIAIAAIBeAAIAIAAIBmAAIAIAAICyAAIAIAAIBEAAIAIAAIBMAAIAJAAIBDAAIAJAAIBMAAIAJAAQiJANibAAIgVAAgEgoXhN5IgIAAIjlAAIgIAAIAAgJQB/AAB/AFIAAAEIgJAAg");
	this.shape_53.setTransform(1375.6,565.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3D3B3B").s().p("EAQhBPCIg7AAIAAgJQAiAAAhAFIAAAEIgIAAgEAHTBByQgRgRgCgfQAQAQAIAaIABAIQgEAAgCgCgEAAuAwwQgJgfgMgbQAbALgCAnIAAAJQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgA+As7QgLgdgCgmQAQAXABAkIAAAJQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAgEgB7AoaQgSgRgBggQAQASAIAZQABAEAAAEQgEAAgCgCgEgCsAmkQgNgpgIgqIAJAAQAKAkAGAoIAAAJQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgEgDYAjhQgSgRgBggQAQARAIAaQABADAAAFQgEAAgCgCgAlNfcQgKgbgCggQAOAQACAbIABAIIAAAJQgBgBgBAAQgBAAgBAAQAAAAAAAAQgBAAAAAAgAl3dMQgQgqgFgyQATAjAGAxIAAAJQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAg6ItIAAgIQAPgPANgQQACgCAEAAIgBAIQgLAZgWARIAAgJgABHgiQgJgjgDgoQAVAXgEAtIAAAJQgBAAgBgBQgBAAAAAAQgBAAAAAAQgBAAAAgBgAtE+hIAAgZQAPgDgCgWIAEAAIAAAIQAAAigRARIAAgJgEgLngiNIAAgJQAPgsAWgnQABgBAEAAIAAAIQgNA2gdAnIAAgIgEgKjgkVIAAgIQAQgRANgYQAAgBAFgBIgCAIQgIAhgYATIAAgJgEgGZgwQQgOgjACgwQANAhADArIABAJQgFAAAAgCgEgG8gz0QgMgXABgjQANAVADAeIABAJQgFAAgBgCgEgIPg5GQgEgpgJgiQAYATgGAwIgBAJIgEgBgEgQohOoIAAgIQAMgNAWgEIAIAAQAAAEgCABQgYALgQARIAAgIg");
	this.shape_54.setTransform(1183.2,577.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#484848").s().p("EAiwBJ4IAAgIIAIAAIA8AAIAIAAIAJAAIAAAIIgJAAIgmAAIgmAAgEgj7hI0QADgogMgbQAbAUgOA3IgFABIABgJg");
	this.shape_55.setTransform(1461.5,572.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#505050").s().p("AgYAZQAdgTAPglQAAAAABgBQAAAAABAAQAAAAABAAQABgBABAAIgBAJQgJAsgnAOIAAgJg");
	this.shape_56.setTransform(1228.9,110.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#585858").s().p("EAlqBLRIAAgJQAcgegKhHIgBgIIAJAAIAAAIIAAAJIAAA7IAAAIIgBAJQgCAbgXAGIAAgIgEglYhKwQgbgNgQgbQAbACAKAVQABACAEAAQAFAEACAFQACAEAAAEQgEAAgEgCg");
	this.shape_57.setTransform(1469.1,577.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3C3C3C").s().p("AAQAPQgKgTgZgDIAAgIQAggBAHAYIAAAJQgEAAAAgCg");
	this.shape_58.setTransform(1227.6,95.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#464646").s().p("EAu1BODIhdAAIgIAAIhmAAIgIAAIhdAAIgJAAIhlAAIgJAAIhdAAIgIAAIhmAAIgIAAIhdAAIgJAAIhlAAIgIAAIheAAIgIAAIhlAAIgJAAIhdAAIgIAAIhmAAIgIAAIhdAAIgJAAIhlAAIgJAAIhdAAIgIAAIhmAAIgIAAIhdAAIgJAAIhlAAIgJAAIhdAAIgIAAIhmAAIgIAAIhdAAIgJAAIk5AAIgIAAIhdAAIgJAAIhlAAIgJAAIhdAAIgIAAIhmAAIgIAAIhbAAIgJAAIhuAAIgIAAIhVAAIgIAAIhmAAIgIAAIhdAAIgJAAIhlAAIgJAAIhdAAIgIAAIhmAAIgIAAIhdAAIgJAAIhlAAIgJAAIhdAAIgIAAIiQAAIgIAAIAAgJIXoAAIXqAAITkAAIAAAJIgJAAgEAxwBLZIAAgIIAAgJIAAgIIAApyQAOEzgGFHIAAAJIAAAIIgIAAgEAqvBKvIAAgIIAzAAIAIAAIARAAIAJAAIAAAIIgJAAIgmAAIgmAAgEAW6BKvIAAgIIBmAAIAIAAIARAAIAJAAIAAAIIgJAAIg/AAIhAAAgEAFmBKvIAAgIIAJAAIBdAAIAIAAIARAAIAJAAIAAAIIgJAAIg/AAIhAAAgEACTBKvIgJAAIhlAAIgJAAIhbAAIgIAAIjLAAIgJAAIjLAAIgIAAIhmAAIgIAAIhdAAIgJAAIjLAAIgIAAIiYAAIAAgIIBlAAIAJAAIAqAAIAIAAIAJAAICQAAIAIAAIAqAAIAJAAIAIAAIBVAAIAIAAIAzAAIAJAAIAqAAIAIAAIAJAAICQAAIAIAAIAqAAIAJAAIAIAAICQAAIAIAAIArAAIAIAAIAzAAIAIAAIAgAAIAJAAIAyAAIAJAAIAqAAIAJAAIAyAAIAJAAIBEAAIAIAAIAAAIIgIAAIhAAAIg/AAgEgUBBKvIAAgIIAqAAIAJAAIBMAAIAIAAIAAAIIgIAAIhAAAIg/AAgEApbBKvIiyAAIgIAAIhmAAIgIAAIheAAIgIAAIhlAAIgJAAIhdAAIgIAAIjLAAIgJAAIiYAAIAAgIIBlAAIAJAAIAqAAIAJAAIAIAAIBVAAIAIAAIBmAAIAIAAIAzAAIAIAAIAiAAIAJAAIAyAAIAJAAIAqAAIAIAAIAJAAIBVAAIAIAAIAzAAIAIAAIArAAIAIAAIAIAAIBVAAIAIAAIBNAAIAIAAIAAAIIgIAAgEAVmBKvIiyAAIgIAAIjLAAIgJAAIiYAAIAAgIIBlAAIAJAAIAqAAIAJAAIAyAAIAJAAIBdAAIAIAAIArAAIAIAAIAJAAICPAAIAJAAIARAAIAIAAIAAAIIgIAAgEALrBKvIixAAIAAgIIAIAAICQAAIAIAAIARAAIAJAAIAAAIIgJAAgEAucBKnIAAgJIAAgIIAAgJIAApQQANgIAHgQQABgBAEAAQAAAEgBADQgDAFgEAFIAAAIIAAAJIgIAAIAAJYIAAAJIgJAAgEAwjBACIg7AAIAAgJQAiAAAhAFIABAEIgJAAgEgbjhGgIgJAAIhUAAIgJAAIhlAAIgJAAIhdAAIgIAAIk5AAIgJAAIhdAAIgIAAIhmAAIgIAAIhdAAIgIAAIhmAAIgIAAIheAAIgIAAIjkAAIAAgIQLKAALLgEIAAgEIAiAAIAJAAQAAAEgCABQgYANgjAAIgYgCgEgafhJzI3aAAIAAgIIA8AAIAIAAICHAAIAJAAIBuAAIAIAAIBdAAIAJAAIAzAAIAIAAICQAAIAIAAIBuAAIAJAAIBUAAIAJAAIAyAAIAJAAICQAAIAIAAIAzAAIAIAAICQAAIAJAAIAyAAIAJAAICHAAIAJAAQANAAALADQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABIgIAAgEgrahN5IgRAAIgJAAIhdAAIgIAAIhmAAIAAgJIDlAAIAIAAIAAAJIgIAAg");
	this.shape_59.setTransform(1394.3,566.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#343434").s().p("EgG/BPTIhVAAIAAgJQAvAAAuAFIAAAEIgIAAgEgJXBPTIiQAAIAAgJQBMAABMAFIAAAEIgIAAgEAszBMqIBdAAIAIAAIAzAAIAJAAIgBAEQgmAEgiAAQgwAAgogIgEApfBMqIBdAAIAJAAIgBAEQgZAEgWAAQgfAAgXgIgEAmMBMqIBdAAIAIAAIAAAEQgaAEgWAAQgeAAgXgIgEAi4BMqIBeAAIAIAAIgBAEQgZAEgWAAQgfAAgXgIgEAflBMqIBdAAIAIAAIAAAEQgaAEgWAAQgeAAgXgIgEAcRBMqIBeAAIAIAAQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAAAQgZAEgWAAQgfAAgXgIgEAY+BMqIBdAAIAJAAQAAABAAABQgBAAAAABQAAABAAAAQAAAAAAAAQgaAEgVAAQgfAAgXgIgEAVrBMqIBdAAIAIAAQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAAAQgZAEgWAAQgeAAgXgIgEASXBMqIBdAAIAJAAQAAABAAABQgBAAAAABQAAABAAAAQAAAAAAAAQgaAEgVAAQgfAAgXgIgEAPEBMqIBdAAIAIAAQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAAAQgZAEgWAAQgeAAgXgIgEALwBMqIBdAAIAJAAQAAABAAABQgBAAAAABQAAABAAAAQAAAAAAAAQgaAEgVAAQgfAAgXgIgEAFJBMqIBdAAIAJAAQAAABAAABQgBAAAAABQAAABAAAAQAAAAAAAAQgaAEgVAAQgfAAgXgIgEAB2BMqIBdAAIAIAAQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAAAQgZAEgWAAQgeAAgXgIgEgBcBMqIBcAAIAIAAQAAABAAABQgBAAAAABQAAABAAAAQAAAAAAAAQgYAEgVAAQgfAAgXgIgEgEvBMqIBUAAIAJAAQAAABAAABQgBAAAAABQAAABAAAAQAAAAAAAAQgYAEgUAAQgbAAgVgIgEgIDBMqIBdAAIAJAAQAAABAAABQgBAAAAABQAAABAAAAQAAAAAAAAQgaAEgVAAQgfAAgXgIgEgLWBMqIBdAAIAIAAQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAAAQgZAEgWAAQgeAAgXgIgEgOqBMqIBdAAIAJAAQAAABAAABQgBAAAAABQAAABAAAAQAAAAAAAAQgaAEgVAAQgfAAgXgIgEgR9BMqIBdAAIAIAAQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAAAQgZAEgWAAQgeAAgXgIgEAxTBKzIAAgyIAAgJQAPAYgLArQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIAAgJgEAtuBJOIg7AAIAAgJQAoAHAUgOQADgBAFAAIAAAIIAAAJIgJAAgEAq8BJOIgyAAIgJAAIgiAAIAAgJQAzAAAyAFIABAEIgJAAgEAnhBJOIhVAAIAAgJQAuAAAvAFIAAAEIgIAAgEAlIBJOIgyAAIgJAAIhVAAIAAgJQBNAABLAFIABAEIgJAAgEAh1BJOIgzAAIgIAAIgiAAIAAgJQAyAAAzAFIAAAEIgIAAgEAdmBJOIhVAAIAAgJQAvAAAuAFIABAEIgJAAgEAbOBJOIhmAAIgIAAIgiAAIAAgJQBMAABMAFIAAAEIgIAAgEAX6BJOIhlAAIgJAAIghAAIAAgJQBMAABLAFIABAEIgJAAgEAUnBJOIiQAAIAAgJQBMAABMAFIAAAEIgIAAgEARTBJOIhdAAIAAgJQAzAAAyAFIABAEIgJAAgEAOABJOIhmAAIgIAAIgiAAIAAgJQBMAABMAFIAAAEIgIAAgEAKsBJOIiPAAIAAgJQBMAABLAFIABAEIgJAAgEAGmBJOIhdAAIAAgJQAyAAAzAFIABAEIgJAAgEAEFBJOIgQAAIgJAAIhEAAIAAgJQAzAAAzAFIAAAEIgJAAgEAAyBJOIgyAAIgHAAIgiAAIAAgJQAwAAAzAFIAAAEIgIAAgEgCfBJOIiQAAIAAgJQBMAABMAFIAAAEIgIAAgEgFzBJOIiQAAIAAgJQBMAABMAFIAAAEIgIAAgEgJGBJOIgzAAIgJAAIhUAAIAAgJQBMAABMAFIAAAEIgIAAgEgMaBJOIiQAAIAAgJQBMAABMAFIABAEIgJAAgEgPtBJOIhmAAIgIAAIgiAAIAAgJQBMAABMAFIAAAEIgIAAgEgT8BJOIgqAAIgJAAIgiAAIAAgJQAvAAAuAFIAAAEIgIAAgEgdmhH5IBVAAIAIAAIAAAFQgYAEgTAAQgdAAgVgJgEgg5hH5IBdAAIAIAAIAAAFQgZAEgWAAQgfAAgXgJgEgnghH5IBdAAIAIAAIAAAFQgZAEgWAAQgfAAgXgJgEgq0hH5IBeAAIAIAAIgBAFQgZAEgVAAQgfAAgYgJgEguHhH5IBdAAIAIAAIAAAFQgZAEgWAAQgfAAgXgJgEgbehLUIiIAAIAAgIQBIAABIADIAAAFIgIAAgEgephLUIiQAAIAAgIQBMAABMADIAAAFIgIAAgEgh9hLUIiQAAIAAgIQBNAABLADIABAFIgJAAgEglQhLUIhVAAIAAgIQAvAAAuADIAAAFIgIAAgEgokhLUIiQAAIAAgIQBNAABLADIABAFIgJAAgEgr3hLUIhdAAIAAgIQAyAAAzADIAAAFIgIAAgEgvThLUIiHAAIAAgIQBHAABIADIAAAFIgIAAgEgt2hPSIBdAAIAIAAIAAAEQgaAFgWAAQgeAAgXgJg");
	this.shape_60.setTransform(1398.1,575.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(85,84,84,0.992)").s().p("AgHAMIgRAAIAAgIQAdACAOgPQACgCAEAAQAAAEgCAEQgHALgQAEIgHAAg");
	this.shape_61.setTransform(1248.3,65.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#535151").s().p("EBLiBKmQgrgDgIgnQAWAVAeALQADACAEAAIAAAJIgIgBgEhK3hJ8QgrgDgHgnQAWAUAdAMQAEACAEAAIAAAJIgJgBg");
	this.shape_62.setTransform(571.2,587.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5A5959").s().p("EBLQBK/QgEgPgIgKIAAgIIAAg7IAJAAQgEAzALAiIABAIQgEAAgBgBgEhLIhJkQgEgPgIgIIAAgJIAAg7IAIAAQgDAyAKAjQACAEAAAEQgFAAAAgCg");
	this.shape_63.setTransform(567.4,581);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(57,55,55,0.796)").s().p("EAqkBPxIgJAAIljAAIgJAAIpHAAIgJAAIkfAAIgJAAIpHAAIgJAAIkfAAIgJAAIhUAAIgJAAIh/AAIgIAAIkXAAIgJAAIhCAAIgJAAIjSAAIgJAAIg8AAIgIAAIihAAIgIAAIh3AAIgIAAIhdAAIgJAAIh/AAIgIAAIhMAAIgIAAIkPAAIgIAAIkgAAIgIAAIjdAAIgIAAIljAAIgJAAIipAAIgJAAIhtAAIgJAAIkxAAIgIAAIjLAAIgIAAIhVAAIgJAAIi5AAIgJAAIhVAAIgIAAIkPAAIgIAAIl9AAIgIAAIh3AAIgIAAIhdAAIgIAAIkHAAIgIAAIjUAAIgJAAIhdAAIgIAAIiyAAIgIAAIhmAAIgIAAIhuAAIgJAAIiPAAIgJAAIkfAAIgJAAIhUAAIgIAAIizAAIAAgJIAAjtIAAgIIAAjUIAAgIIAAhVIAAgIIAAjDIAAgIIAAjcIAAgJIAAhUIAAgJIAAjCIAAgJIAAiHIAAgIIAAjUIAAgIIAAjLIAAgJIAAipIAAgJIAAh2IAAgIIAAhVIAAgIIAAo3IAAgJIAAjTIAAgJIAAhdIAAgIIAAiyIAAgIIAAhdIAAgJIAAkOIAAgJIAAjcIAAgIIAAiZIAAgIIAAjDIAAgIIAAiQIAAgIIAAh/IAAgJIAAjcIAAgIIAAg7IAAgJIAAhdIAAgIIAAhsIAAgJIAAhdIAAgIIAAkPIAAgIIAAkgIAAgIIAAkgIAAgIIAAkgIAAgJIAAkfIAAgJIAAkfIAAgJIAAkXIAAgIIAAjcIAAgJIAAhdIAAgIIAAg7IAAgJIAAnJIAAgIIAAj1IAAgJIAAkgIAAgIIAAhVIAAgIIAAkPIAAgIIAAhdIAAgJIAAmNIAAgJIAAhdIAAgIIAAkPIAAgIIAAhdIAAgJIAAihIAJAAIAAXrIAAXqIAAXqIAAXoIAAXqIAAXrIAARcIXqAAIXrAAIXqAAIXoAAIXqAAIXrAAIXqAAIS5AAQAFAAACACQABACAAAFIgIAAIgJAAIkoAAIgIAAIkPAAIgIAAIkgAAIgIAAIjUAAIgIAAIhUAAIgJAAIkOAAIgJAAIkwAAIgJAAIjLAAIgJAAIhVAAIgIAAIh2AAIgJAAIiHAAIgIAAIl9AAIgIAAIhuAAIgJAAIhEAAIgIAAIhdAAIgIAAIhAAAIg/AAg");
	this.shape_64.setTransform(648.6,575.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(91,91,91,0.941)").s().p("EBgKBSJIlCAAIAAgIIFCAAIAIAAIAAAIIgIAAgEhe0hSAIhdAAIAAgIIBdAAIAJAAIAAAIIgJAAg");
	this.shape_65.setTransform(673.5,589.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(60,58,58,0.827)").s().p("AAuAEIhbAAIgJAAIAAgHIBcAAIAIAAIAIAAIAAAHIgIAAg");
	this.shape_66.setTransform(62.8,65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(36,36,36,0.384)").s().p("EiDwBTkICxAAIAJAAIB2AAIAIAAIChAAIAJAAIEfAAIAJAAICHAAIAIAAIDcAAIAJAAIB3AAIAIAAICgAAIAJAAIBuAAIAIAAIBeAAIAIAAIBEAAIAIAAIBuAAIAIAAICqAAIAIAAIB3AAIAIAAIBVAAIAJAAIDTAAIAIAAIDTAAIAJAAICYAAIAJAAID9AAIAJAAIBdAAIAJAAIBDAAIAJAAIBlAAIAIAAIBeAAIAIAAIB3AAIAIAAIBdAAIAJAAIB2AAIAIAAIChAAIAJAAIDDAAIAHAAIBWAAIAIAAICHAAIAJAAIDbAAIAJAAIA7AAIAJAAICQAAIAIAAICIAAIAIAAIIEAAIAIAAIDDAAIAIAAIBVAAIAJAAIB2AAIAIAAIChAAIAJAAIDTAAIAIAAIBEAAIAJAAIDTAAIAJAAICPAAIAJAAIGvAAIAJAAIBDAAIAIAAIB3AAIAIAAIChAAIAIAAIDDAAIAJAAIBUAAIAJAAIDTAAIAIAAIDDAAIAIAAICgAAIAIAAIJyAAIAIAAIIWAAIAHAAIB3AAIAJAAIBdAAIAIAAIFjAAIAJAAIB2AAIAJAAIBdAAIAJAAIEfAAIAIAAICHAAIAJAAICQAAIAIAAIHjAAIAIAAIBDAAIAJAAIBdAAIAJAAIDTAAIAIAAIBFAAIAIAAIBUAAIAJAAIFCAAIAIAAIJHAAIAJAAIBuAAIAIAAIB3AAIAIAAIFKAAIAIAAIBeAAIAIAAIBEAAIAIAAIEoAAIAJAAICxAAIAJAAIBdAAIAJAAIB2AAIAIAAIBdAAIAIAAIA8AAIAJAAIB2AAIAJAAIBUAAIAIAAICHAAIAJAAIB2AAIAJAAIBdAAIAIAAIB3AAIAIAAIBeAAIAIAAIFjAAIAIAAIDUAAIAJAAIEfAAIAIAAIDDAAIAIAAIBWAAIAIAAIB/AAIAIAAIA7AAIAJAAIAAAJIlCAAI3qAAI3qAAI3qAAI3rAAI3qAAI3oAAI3qAAI3qAAI3rAAQr0AAr1ADIkgAAQpoAApagMgEiFWBQIIAAgIIAAgJQAPgTgGgoIgBgIIAAgJIAAh2IAAgJIAAhDIAAgJIAAg7IAAgIIAAgRIAAwAIAA3qIAA3qIAA3pIAA3qIAA3qIAA3qIAJAAIAACyIAAAIIAACQIAAAIIAAFbIAAAJIAAA7IAAAIIAABVIAAAIIAAB3IAAAIIAABdIAAAJIAANnIAAAIIAADDIAAAIIAABVIAAAIIAAEgIAAAJIAABDIAAAJIAAEfIAAAJIAADCIAAAJIAABUIAAAJIAAEfIAAAJIAADTIAAAJIAACQIAAAIIAADUIAAAIIAAB2IAAAJIAABVIAAAIIAACQIAAAIIAACIIAAAIIAADUIAAAIIAAFbIAAAIIAABVIAAAIIAAC4IAAAJIAABdIAAAIIAADUIAAAIIAADUIAAAIIAACQIAAAJIAAFJIAAAJIAAFsIAAAIIAABdIAAAJIAADTIAAAJIAACPIAAAJIAAB2IAAAJIAABdIAAAIIAAEXIAAAJIAABEIAAAIIAAFjIAAAJIAAFbIAAAIIAAChIAAAIIAADUIAAAIIAAB3IAAAIIAABEIAAAIIAAChIAAAIIAAB3IAAAIIAABVIAAAIIAADDIAAAIIAABVIAAAIIAAA8IAAAIIAAA7IAAAJIAACYIAAAIIAAB/IAAAJIAABDIAAAJQAAAEgBAEQgDAFgFAEIAAAIIgIAAg");
	this.shape_67.setTransform(880.4,580.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(84,84,84,0.871)").s().p("AgDBpIAAgIIAAiwIAAgJIAAgQIAHAAIAADJIAAAIIgHAAg");
	this.shape_68.setTransform(28.9,52.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(29,29,29,0.314)").s().p("AgLAhIAAgIIAAgJIAAgQQALgMAHgTQABgBAEAAQAAAEgBADQgDAFgEAFIAAAPIAAAIIgHAAIAAARIAAAIIgIAAg");
	this.shape_69.setTransform(28.9,40.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(22,22,22,0.235)").s().p("AgYAIIAAgIQARgLAYgDIAIgBIAAAIQgEAAgEABQgWAIgTAPIAAgJg");
	this.shape_70.setTransform(32.8,35.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(71,71,71,0.741)").s().p("AhKgEICNAAIAJAAIAAAHIgJAAQgXACgWAAQg1AAgrgJg");
	this.shape_71.setTransform(59.8,35.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(70,70,70,0.729)").s().p("AAhAEIhKAAIAAgHIAIAAIAJAAIA5AAIAJAAIAAAHIgJAAg");
	this.shape_72.setTransform(39.5,34.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(66,66,66,0.69)").s().p("AAdAEIhCAAIAAgHIA6AAIAIAAIAJAAIAAAHIgJAAg");
	this.shape_73.setTransform(47.6,34.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(7,7,7,0.078)").s().p("ABQAEIgJAAIgIAAIiOAAIgIAAIAAgHICnAAIAIAAIAAAHIgIAAg");
	this.shape_74.setTransform(60.2,34.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#504F4F").s().p("EBdYBPbIlKAAIgIAAIhuAAIAAgIIBuAAIAIAAID+AAIAIAAIA8AAIAIAAIAIAAIAAAIIgIAAgEA45BMiIBuAAIAJAAIAAAIIgJAAQgTACgRAAQgqAAgggKgEA50BJWIg7AAIAAgIIA7AAIAJAAIAAAIIgJAAgEhdfhIBIBuAAIAIAAIAAAIIgIABQgTACgSAAQgqAAgfgLgEhbxhLMIhuAAIAAgIIBuAAIAIAAIAAAIIgIAAgEA6whPaIBuAAIAIAAIAAAIIgIABQgTABgRAAQgqAAgggKg");
	this.shape_75.setTransform(692.1,575.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#504E4E").s().p("EA7vBMdQANgQAegBIAIAAIAAAJIgIABQgWAHgVAJIAAgJgEhaqhIFQAOgQAdgBIAIAAIAAAJIgIABIgrAPIAAgIgEBaihMcI0OAAIgJAAIAAgIIAJAAIT1AAIAIAAIARAAIAIAAIAAAIIgIAAgEBCWhMcIgIAAIh2AAIAAgIIB2AAIAIAAIAJAAIAAAIIgJAAg");
	this.shape_76.setTransform(668,557.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4E4C4C").s().p("EBLABLIQgEghAAgiIAAgIQAOgPAOgRQABgDAFABIgBAIQgCAOgOADIAAAJIAAAIIgJAAIAAA7IAAAIgEhLZhJaQgEghAAgiIAAgJQAPgPANgQQACgCAEgBIAAAJQgDAPgOACIAAAIIAAAJIgIAAIAAA7IAAAJIgFgBg");
	this.shape_77.setTransform(567.4,577.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(5,5,5,0.063)").s().p("AByAEIjrAAIAAgHIDrAAIAIAAIAAAHIgIAAg");
	this.shape_78.setTransform(81.4,34.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#514F4F").s().p("EBTVBL/I3qAAIAAgIIXqAAIHaAAIAAAIInaAAgEBSiBIsI3qAAIAAgIIXqAAIGFAAIAJAAIAAAIImOAAgEAzNhIjI3qAAI3qAAI3oAAI3qAAI3rAAI3qAAIAAgIIXqAAIXrAAIXqAAIXoAAIXqAAIXqAAIKMAAIAAAIIqMAAgEAzNhL3I3qAAI3qAAI3oAAI3qAAI3rAAI3qAAIAAgIIXqAAIXrAAIXqAAIXoAAIXqAAIXqAAIJhAAIAAAIIphAAg");
	this.shape_79.setTransform(686.2,579.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#616161").s().p("EB9SBLzIgzAAQijgPi4ACQr1AEr1AAI3qAAI3rAAI3qAAQgEAAgDgBQgegMgWgVIgBgHQgLgjAEgzIAAgIIAAgJQAOgCACgPIABgIQAUgJAWgGIAIgBIXqAAIXrAAIXqAAQL1AAL1AEQCnABCSgOIAAgIQAPkjgHk2IAAgIIAAgJIAAgJQAEgEADgFQACgEAAgEQATgKAQgNQADgCAEAAIBVAAIAIAAQAFAEAFADQADABAEAAQAPAUAJAXQACAEAAAFIAAJ6IAAAIIAAAIQAKBHgbAfIAAAIIAAAJQgFAAgCACQgOALgWAEIAAAIIAAAJQgEAAgCACQgLAOgZABIgIAAgEAzAhI3IgiAAIq2AAI3qAAI3oAAI3qAAI3rAAI3qAAI3qAAI3qAAQgEAAgEgCQgdgNgWgUQAAgEgCgEQgKgiADgyIAAgJIAAgIQAOgDADgOIAAgJIArgQIAIgBIXqAAIXqAAIXqAAIXrAAIXqAAIXoAAIXqAAILYAAQAQAbAbAOQADABAEABQAMAbgDAoIAAAIQgBAAgBABQgBAAgBAAQAAAAgBAAQAAABAAAAQgPAngfATIAAAJIgIAAg");
	this.shape_80.setTransform(899.1,580.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5F5E5E").s().p("EA3cABlI3qAAI3qAAI3pAAI3qAAI3qAAI3qAAIgIAAIhuAAIgJAAIAAgIIXqAAIXqAAIXqAAIXpAAIXqAAIXqAAIXqAAIK2AAIAAAEQrLAErKAAIqMAAgEBNHgBcI3qAAI3qAAI3qAAI3pAAI3qAAI3qAAI3qAAIAAgIIAJAAIBuAAIAIAAIXqAAIXqAAIXqAAIXpAAIXqAAIXqAAIJhAAIXZAAIAJAAIAAAIIrYAAg");
	this.shape_81.setTransform(659.2,104.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#444141").s().p("EBF7BPsI3qAAI3rAAI3oAAI3qAAI3qAAI3rAAI3qAAIAAxcIAA3qIAA3qIAA3pIAA3qIAA3qIAA3qIBdAAIAIAAIXrAAIXqAAIXqAAIXoAAIXrAAIXqAAIMbAAIAzAAIAIAAQAPAOAbACIAJABIAIAAQAtAPBCgGIAIgBIB3AAIAIAAIAAAEQgfAFgcgBIgJAAQggACgTAPIAAAJIgIAAQgWAEgMANIAAAIIAAAIQgEABgBABQgIAQgMAIQAAAmAEAmIAEAAIAAARIAAAIIAAA0IAAAIIphAAI3qAAI3qAAI3pAAI3qAAI3qAAI3qAAIgIAAIhuAAIAAAIIgJAAIgIAAQgdABgOAQIAAAIQgEABgCACQgNAQgPAPIAAAJQAAAiAFAhIAEABQAIAIAEAPQAAACAFAAQAHAnAsADIAIAAIAJAAQAsAPBCgGIAIgBIXqAAIXqAAIXqAAIXpAAIXqAAIXqAAIKMAAQAHAoAQAdQACADAAAFQAFAhAPAYQABACAEAAIAAAIQAHA5AdAiQACACAFAAQBLBeBTBWQACADAAADQAKAiASAYQACACAEAAQANAMAIAUQAAABAEAAQACAhARARQACABAEAAIAhAsQACADAAAEQANAnAXAbQABACAFAAQAGApAWAZQABACAEAAQAGAgAOAZQACACAEAAQAAAEACACQADACADAAIANA7QAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAIAAAIQAKAiADApIAFABQADAZAMASQACAEAAAEQAHAfAFAkIAEAAQABARAFAKQACADAAAEQgDBAAYAjQABADAEAAIAAARIAAAIQgBAjANAXQAAACAFAAQAAAuAEAuIAEAAQAMAOgDAdIAAAIQgBAwANAjQAAACAFAAIAAAIIAAAIQAAAzAMApQAAABAAAAQABAAAAABQABAAABAAQAAAAACAAQALALABAWIAFAAQgCAgAQANQADACAAAFIAAAIQAGAjgPAPIAAARIAAAJIgEAAQgBAugUAWIAAAIIAAAJIgBAIQhFCnh9BwQgEAAgDADQgbATgZAUIAAAJIAAAIQgEABgBABQgMAYgRARIAAAIIAAAJQAAAEgBADQgJAQgQALQgDAAgCABQgVAngQAsIAAAJIAAAIIgBAIQgcBRguA/IAAARIAAAJIgFAAQACAWgPADIAAAZIAAAJIgIAAIAAAIIAAAIIgJAAQABAnAEAlIAEABIAAAIQgCAkANAWQABABAFAAIAAA8IAAAIIgJAAIAAAIIgIAAQAAAjAEAhIAEABQADAnARAaQABACAFAAQAJAlAbAUQACACAEAAQACAhARAQQACACAEAAQAGA7AeAgQACACAEAAQAJAJAEAPQAAAAAAABQABAAAAAAQABAAABAAQABABABAAQAFAoAWAZQACACAFAAQAGASARALQACAAAAAFQALAcARAVQABACAEAAQAXAYACArIABAJQAzBDAtBLQABACAEgBQADAhARARQABACAFAAQAYAWANAjQABABAEAAQAOAvAfAcQACACAEAAQAEAQAIAQQABACAEAAQAHAaAUANQACADAFAAQAJAhASAYQACACAEAAQAHAgAcAJQAEACAEAAQARAdAUAbQABACAEAAQALAdARAUQACACAEABQAmAyAhA6QABABAEAAQAIAaAUAPQACACAEAAQAIAIAFAPQAAABAAAAQAAAAABABQAAAAABAAQABAAABAAQAMAeAXASQADACAEAAQASAmgBA4IAAAIQgBAkAMAWQACACAEgBQADAoAJAjQABABAAAAQAAAAABAAQAAAAABAAQABABABAAIAAAIQAJAfAAArIAAAJIAAB2IAAAIIABAJQAFAbgPAHIAAARIAAAIIgBAIQgZCZhMBmQgEAAgBACQgOAQgOAPIAAAIIAAAJQAAAEgCADQgjA3gwAoQgEAAgBACQgNAWgQASIAAAIIAAAJQgEAAgBABQgQAhgVAZIAAAJIAAAIQgEAAgBACQgMAXgRARIAAAJIAAAIQgEAAgCACIgkAxIAAAJIgBAIQgEA2gdAeIgEAAQACAbgPAIIAAARIAAAIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgJAogVAaIAAAJIAAAIIABAIQAFATgOgBIAAAZIAAAJIgFAAQADAbgPAGIAAARIAAAJIgJAAIAABEIAAAIIgEAAQACAsgPAXIAAAaIAAAJIAAA7IAAAIIAAAIIgIAAIAABEIAAAJIAAA7IAAAIQAGApAWAZQABACAFAAQAAARAGAKQACADAAAEQAFAyAQAqQAAAAAAAAQABAAAAABQABAAABAAQAAAAACAAQAFAsAPAnQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAQACAgALAbQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABABQAEAYAPAQQACACAEAAQAPASAHAgQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQgBAjANAXQACABADAAQAIAgAQAVQACACAAAEQABAgASARQACACAFAAQAKALgBAXIgBAIQACAgAFAbIACAJQAHAqANApQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAQAHAlAOAcQABACAEAAQABAgASARQACACAEAAQAFAJADAJQABADAAAFQAMAzAABDIAFAAQADAoAJAiQAAABAAAAQABAAAAABQABAAABAAQABAAABAAQABAmALAdQAAAAAAAAQABAAAAAAQABAAABAAQABABABAAQAKArATAnQAAACAEAAQATALADAfIAEABQABAfASARQACACAEAAIAAAJQAMAbAJAfQAAAAAAAAQABAAAAABQABAAABAAQAAAAACAAQAPAfACAtIAAAJQALA3AJA/IAFAAQALAWAFAcIABAJQACAgAKAaQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAAAIIAAAIQAHAlAOAdQABACAEAAQAGAkAOAeQACABAEABIAtCXQABABAFAAQAIAhATAYQACACAEAAQgFASAMADQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAJAaAMAYQAAABAFAAQAAAFACABQACADAFAAQABAgARAQQACACAFAAQAJAaAOASQACADAAAEQAJAZAMAYQAAACAEAAIAlBCQACACAEgBQABAgASARQACACAEABQACAfARARQACACAFAAQACAOANAHQACAAAAAEQAGAgAVARQACACAEAAQBBBHAkBjQABADAAAFQAGAwAWAjQABABAEAAQAGAmASAYQACACAAAEQACAbANARQACACAAAFImFAAI3qAAIgJAAIg7AAIAAAIIgJAAIgIAAQgdABgNAQIAAAJQgEgBgCADQgOARgOAPIAAAIQAAAiAEAhIAFAAQAHAKAEAPQABABAFAAQAHAnArADIAIABIAJAAQAsAOBCgGIAIAAIXrAAIHZAAIAJAAQAEAVAOAKQADACAEAAQACAhARARQACABAFAAQALAXAUAOQADABAAAFQANAdAlAEIAIAAIAJAAIAAAJIgJAAIj9AAIgJAAIhtAAIAAAIIgJAAIgIABQgYABgTAHIAAAIIy5AAg");
	this.shape_82.setTransform(670.6,575.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(86,86,86,0.886)").s().p("EBLVBSJIh2AAIAAgIIB2AAIAIAAIAAAIIgIAAgEAAIBSJIifAAIAAgIICfAAIAIAAIAAAIIgIAAgEg68BSJIg6AAIAAgIIA6AAIAJAAIAAAIIgJAAgEhGcBSJIigAAIAAgIICgAAIAJAAIAAAIIgJAAgEhqPBSJIhFAAIAAgIIBFAAIAIAAIAAAIIgIAAgEh98BSJIihAAIAAgIIChAAIAJAAIAAAIIgJAAgEiCLBNqICyAAIAIAAIAAAIIgIAAQgdACgbAAQhCAAg4gKgEAfUBNyIkwAAIAAgIIEwAAIAJAAIAAAIIgJAAgEATsBNyIiIAAIgIAAIl9AAIAAgIIF9AAIAIAAICIAAIAIAAIAAAIIgIAAgEgqiBNyIihAAIAAgIIChAAIAIAAIAAAIIgIAAgEhAvBNyIlkAAIgJAAIioAAIAAgIICoAAIAJAAIFkAAIAIAAIAAAIIgIAAgEhLDBNyIkxAAIAAgIIExAAIAIAAIAAAIIgIAAgEhdjBNyIl9AAIAAgIIF9AAIAIAAIAAAIIgIAAgEiCTBBwIAAgJIAAjbIAIAAIAADbIAAAJIgIAAgECGjA+dIAAgJIAAiYIAIAAIAACYIAAAJIgIAAgEiGqA1EIAAgIIAAihIAIAAIAAChIAAAIIgIAAgEiCTAwlIAAgJIAAiqIAIAAIAACqIAAAJIgIAAgEiGqAnLIAAgIIAAhDIAIAAIAABDIAAAIIgIAAgEiCTACLIAAgJIAAg7IAIAAIAAA7IAAAJIgIAAgEiCTgpBIAAgIIAAg8IAIAAIAAA8IAAAIIgIAAgEhThhSAIjkAAIAAgIIDkAAIAIAAIAAAIIgIAAg");
	this.shape_83.setTransform(890.5,589.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(83,83,83,0.89)").s().p("AgCBhIAAgJIAAi4IAGAAIAAC4IAAAJIgGAAg");
	this.shape_84.setTransform(1724.2,762);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(84,84,84,0.886)").s().p("AgCA/IAAgIIAAgzIAAgHIAAg7IAGAAIAAB1IAAAIIgGAAg");
	this.shape_85.setTransform(1724.1,729.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(84,84,84,0.894)").s().p("ALTdRIh3AAIAAgIIB3AAIAIAAIAAAIIgIAAgA0RdRIhlAAIAAgIIBlAAIAJAAIAAAIIgJAAgAVw7rIAAgIIAAhdIAIAAIAABdIAAAIIgIAAg");
	this.shape_86.setTransform(1584.6,899.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#393838").s().p("EgQeA2KQgPgQgEgZIAAgIQARARAHAaIACAIQgFAAgCgCgEgSWAtuIAAg7IAIAAIABAJQAFAogOATIAAgJgEgR9AqsIAAgqIAAgJIAAgRQAPgHgCgbIAEAAIAAAJQgBA6gQArIAAgIgArURzQgYgSgMgeQAbAPAOAcQABADAAAEQgEAAgCgCgAxIJvQgfgcgNguQAcAfAVAmQABADAAAEQgEAAgCgCgA4pl0QgNgXABgjQANAVAEAeIAAAIQgEAAgBgBgAy1/FQgYgkAEg/QAQAsAIAxIABAJQgEAAgBgDgEgXegqkQgSgYgKgiQAZATAIAhQABADAAAFQgEAAgCgCgEAWng2GIgBgFICHAAIAJAAQgsAMgnAAQgfAAgdgHg");
	this.shape_87.setTransform(1257.6,435.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(83,83,83,0.886)").s().p("EgACA4gIAAgJIAAh2IAGAAIAAB2IAAAJIgGAAgAgCFnIAAgIIAAh3IAGAAIAAB3IAAAIIgGAAgEgACgucIAAgIIAAhuIAGAAIAABuIAAAIIgGAAgEgACg2gIAAgIIAAhuIAAgJIAGAAIAAB3IAAAIIgGAAg");
	this.shape_88.setTransform(1724.1,676.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(53,52,52,0.882)").s().p("EgADAvtIAAgIIAAiyIAHAAIAACyIAAAIIgHAAgAgDSxIAAgJIAAhuIAHAAIAAAzIAAAJIAAAyIAAAJIgHAAgAgDkWIAAgIIAAhuIAHAAIAABuIAAAIIgHAAgEgADgsyIAAgJIAAixIAHAAIAABuIAAAIIAAA7IAAAJIgHAAg");
	this.shape_89.setTransform(1723.3,621.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(85,85,85,0.882)").s().p("EBy2BSJIh2AAIAAgIIB2AAIAJAAIAAAIIgJAAgEBpmBSJIh2AAIAAgIIB2AAIAJAAIAAAIIgJAAgEBk+BSJIh2AAIAAgIIB2AAIAIAAIAAAIIgIAAgEAkFBSJIh2AAIAAgIIB2AAIAJAAIAAAIIgJAAgEAa0BSJIh2AAIAAgIIB2AAIAJAAIAAAIIgJAAgEghKBSJIh2AAIAAgIIB2AAIAIAAIAAAIIgIAAgEhGTBSJIh3AAIAAgIIB3AAIAIAAIAAAIIgIAAgEhJ3BSJIhlAAIAAgIIBlAAIAIAAIAAAIIgIAAgEhiDBSJIhuAAIAAgIIBuAAIAIAAIAAAIIgIAAgEhmsBSJIhtAAIAAgIIBtAAIAJAAIAAAIIgJAAgEhrLBSJIh2AAIAAgIIB2AAIAIAAIAAAIIgIAAgEh6PBSJIh2AAIAAgIIB2AAIAIAAIAAAIIgIAAgEiAUBNIIAAgJIAAh/IAIAAIAAB/IAAAJIgIAAgEiAUBIfIAAgIIAAg7IAIAAIAAA7IAAAIIgIAAgEiAUA6fIAAgJIAAh2IAIAAIAAB2IAAAJIgIAAgEiAUAf6IAAgIIAAh3IAIAAIAAB3IAAAIIgIAAgEh79gAcIAAgJIAAhuIAIAAIAABuIAAAJIgIAAgEiAUgS8IAAgJIAAh2IAIAAIAAB2IAAAJIgIAAgECANhSAIhuAAIAAgIIBuAAIAIAAIAAAIIgIAAgEBhAhSAIhuAAIAAgIIBuAAIAJAAIAAAIIgJAAgEAVzhSAIhuAAIAAgIIBuAAIAIAAIAAAIIgIAAgEgF7hSAIhuAAIAAgIIBuAAIAIAAIAAAIIgIAAgEgOHhSAIhmAAIAAgIIBmAAIAIAAIAAAIIgIAAgEhd0hSAIhuAAIAAgIIBuAAIAIAAIAAAIIgIAAgEhl4hSAIi7AAIAAgIIC7AAIAIAAIAAAIIgIAAg");
	this.shape_90.setTransform(849.9,589.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(86,86,86,0.89)").s().p("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");
	this.shape_91.setTransform(890.5,589.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(3,3,3,0.039)").s().p("EAAnBO8IAAgIIAGA2IgGgugEgAsA81IAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgEgAsA4NIAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgEgAsAzlIAAhuQAPAxgLBFIgEAAIAAgIgEgAsAu9IAAhuQAPAxgLBFIgEAAIAAgIgEgAsAqVIAAhuQAPAxgLBEQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgEgAsAltIAAhuQAPAxgLBEQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgEgAsAhFIAAhuQAPAwgLBFQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgAgscdIAAhuQAPAwgLBFQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgAgsX1IAAhuQAPAwgLBFQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgAgsTNIAAhuQAPAwgLBFIgEABIAAgIgAgsOkIAAhuQAPAxgLBFIgEABIAAgJgAgsJ8IAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgAgsAsIAAhsQAPAxgLBDQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgAgsj6IAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgAgsoiIAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgAgstKIAAhuQAPAxgLBFIgEAAIAAgIgAgsxyIAAhuQAPAxgLBFIgEAAIAAgIgAgs2aIAAhuQAPAxgLBEQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgAgs7CIAAhuQAPAwgLBFQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgAgs/qIAAhuQAPAwgLBFQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgEgAsgkSIAAhuQAPAwgLBFQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgEgAsgo6IAAhuQAPAwgLBFQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgIgEgAsgtiIAAhuQAPAwgLBFIgEABIAAgIgEgAsgyLIAAhuQAPAxgLBFIgEABIAAgJgEgAsg2zIAAgrIAAgGIAAg9QAJAdAAAlIAAANQgBATgEAUQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgEgAsg7bIAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgEgAshADIAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgEgAshErIAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgEgAshJTIAAhuQAPAxgLBFQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIAAgJgEgAshN7IAAhuQAPAxgLBFIgEAAIAAgIg");
	this.shape_92.setTransform(1757.9,592.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(2,2,2,0.035)").s().p("EB+yBT3I3rAAI3qAAI3qAAI3qAAI3qAAI3pAAI3qAAI3qAAI3qAAI3qAAI3rAAIAAgFQgfgCgLgSIAJAAIAIAAQAJAHAQABIAJAAQLmAPL8gDQL1gDL1AAIXqAAIXqAAIXqAAIXpAAIXqAAIXqAAIXqAAIXqAAIXrAAIFBAAIAAAIIlBAAgEiG9A6FQADr1AAr1IAA3qIAA3oIAA3rIAA3qIAA3qIAJAAIAAAJIAAXqIAAXqIAAXqIAAXpIAAXqIAAXqIAAQAQgPn6ADoPgECG2A8VIAAhuQAPAxgLBFIgEAAIAAgIgECG2A3tIAAhuQAPAxgLBEQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2AzFIAAhuQAPAxgLBEQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2AudIAAhuQAPAxgLBEQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2Ap1IAAhuQAPAxgLBEQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAIAAgJgECG2AlNIAAhuQAPAwgLBGIgEAAIAAgIgECG2AglIAAhuQAPAxgLBFIgEAAIAAgIgECG2Ab9IAAhuQAPAwgLBGIgEAAIAAgIgECG2AXVIAAhuQAPAwgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2ASsIAAhtQAPAwgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgJgECG2AOEIAAhuQAPAxgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgJgECG2AJcIAAhuQAPAxgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgJgECG2AE0IAAhuQAPAxgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgJgECG2AAMIAAhsQAPAxgLBDIgEAAIAAgIgECG2gEaIAAhuQAPAxgLBFIgEABIAAgJgECG2gJCIAAhuQAPAwgLBGQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAIAAgJgECG2gNqIAAhuQAPAxgLBFQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAIAAgJgECG2gSSIAAhuQAPAxgLBFQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAIAAgJgECG2gW6IAAhuQAPAxgLBFQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBgBIAAgIgECG2gbiIAAhuQAPAxgLBEQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2ggLIAAhtQAPAwgLBFIgEABIAAgJgECG2gkzIAAhuQAPAygLBEIgEABIAAgJgECG2gpbIAAhuQAPAygLBEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgJgECG2guCIAAhvQAPAxgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2gyqIAAhvQAPAxgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2g3SIAAhuQAPAwgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2g76IAAhuQAPAwgLBFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2hAjIAAhtQAPAwgLBFIgEABIAAgJgECG2hFLIAAhuQAPAxgLBFIgEAAIAAgIgECG2hJzIAAhuQAPAxgLBEQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAgIgECG2hObIAAhuQAPAwgLBFQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAgIg");
	this.shape_93.setTransform(890.3,580.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(4,4,4,0.047)").s().p("AgDA7IAAhCIAAgJIAAgyQANA5gKBMIgDAAIAAgIg");
	this.shape_94.setTransform(1753.8,57.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(36,36,36,0.38)").s().p("EgADBQfIAAgIIAAhmIAAgIIAAhEIAAgJIAAkOIAAgJIAAiPIAAgJIAAkgIAAgIIAAg7IAAgJIAAiYIAAgIIAAl9IAA3ZIAA3rIAAgIIAAhVIAAgIIAAlSIAAgJIAAjJIAAgIIAAiZIAAgIIAAiHIAAgJIAAjTIABkPIgB3qIAAgJIAApHIAAmgIAAkFIAA3qIAAgJIAAgIIAHAAIAABDIAAAJIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAJIAABtIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAJIAABuIAAAIIAAAZIAAAJIAABuIAAAIIAAARIAAAJIAABuIAAAIIAAAZIAAAJIAAA9IAAAGIAAArIAAAIIAAARIAAAJIAABuIAAAIIAAAaIAAAIIAABuIAAAIIAAARIAAAJIAABuIAAAIIAAAaIAAAIIAABuIAAAIIAAARIAAAJIAABuIAAAIIAAAaIAAAIIAABuIAAAJIAAAQIAAAJIAABuIAAAIIAAAaIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAIIAAAaIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAJIAAAZIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAJIAAAZIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAJIAAAZIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAJIAABrIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAJIAABuIAAAIIAACpIAAAJIAABuIAAAIIAAAZIAAAJIAABuIAAAIIAAARIAAAJIAABuIAAAIIAAAaIAAAIIAABuIAAAIIAAARIAAAJIAABuIAAAIIAAAaIAAAIIAABuIAAAIIAAARIAAAJIAABuIAAAIIAAAaIAAAIIAABuIAAAJIAAAQIAAAJIAABuIAAAIIAAAaIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAIIAAAaIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAIIAAAaIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAJIAAAZIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAJIAAAZIAAAIIAABuIAAAJIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAARIAAAIIAABuIAAAJIAAAZIAAAJIAABuIAAAIIAAPVIAAAJIAAAzIAAAIIgHAAg");
	this.shape_95.setTransform(1752.9,572.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(54,54,54,0.565)").s().p("AgDAhIAAgIIAAg5QADAAABACQADACAAAEIAAAxIAAAIIgHAAg");
	this.shape_96.setTransform(1752.9,53.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(85,85,85,0.89)").s().p("AgEBDIAAgIIAAh9QANA1gGBIIgBAIIgGAAg");
	this.shape_97.setTransform(1724.3,71.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(53,52,52,0.886)").s().p("EAaGBOpIgRAAIgJAAIhcAAIgJAAIiYAAIgIAAIjdAAIgIAAIh3AAIgIAAIhDAAIgJAAIiQAAIgJAAIiHAAIgIAAIjcAAIgIAAInhAAIgIAAIiIAAIgIAAInRAAIgJAAIixAAIgJAAIhlAAIgIAAIhFAAIgIAAIiQAAIgIAAIjTAAIgJAAIl9AAQgEAAgDgCQgGgDgDgEIXqAAIXnAAIHbAAIAAAJIgJAAgEAcWBMQIAAgIIAA2eIAJAAIAAORIAAAJIAAA7IAAAJIAAB2IAAAIIAAFCIAAAIIgJAAgEAcWAywIAAiZIAA3qIAJAAIAABmIAAAIIAAC6IAAAJIAAVJIAAAJIgJAAgAcWW3IAAgJIAA1JIAJAAIAAHAIAAAJIAACPIAAAJIAAEwIAAAJIAACHIAAAJIAAB2IAAAJIAABdIAAAIIAAA7IAAAJIgJAAgAcWgQIAAu7IAA3rIAJAAIAAFCIAAAIIAABuIAAAJIAAIEIAAAIIAAXRIAAAIIgJAAgEAcWgpwIAAtOIAAibIAA1PIAJAAIAAImIAAAIIAAGwIAAAIIAAFuIAAJoIAAAIIAAFjIAAAJIAAAIIgJAAg");
	this.shape_98.setTransform(1541.5,583.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(84,84,84,0.89)").s().p("EgcaBOsIF8AAIAJAAIDTAAIAJAAICPAAIAJAAIBEAAIAIAAIAAAJIgIAAIhEAAIgJAAIiPAAIgJAAIjTAAIgJAAQg6ABg5AAQiKAAh/gKgEAZfBO1IhdAAIgJAAIiYAAIgIAAIjcAAIAAgJIDcAAIAIAAICYAAIAJAAIBdAAIAIAAIAAAJIgIAAgEAP1BO1IhDAAIgJAAIiQAAIgIAAIiHAAIgJAAIjcAAIgIAAIngAAIgJAAIiHAAIgJAAInRAAIgIAAIiyAAIAAgJICyAAIAIAAIHRAAIAJAAICHAAIAJAAIHgAAIAIAAIDcAAIAJAAICHAAIAIAAICQAAIAJAAIBDAAIAJAAIAAAJIgJAAgEAcRBOkIAAhEIAAgIIAAhEIAAgJIAAlBIAIAAIAAAIQAGD4gODiIAAgIgEAcRBFLIAAgIIAAg8IAAgIIAAuSIAAgIIAAiyIAAgIIAA1KIAIAAIAAXqIAAO8IAAA8IAAAIIgIAAgAcRafIAAgJIAAhlIAAgJIAAgyIAIAAIAACgIAAAJIgIAAgAcRSSIAAgIIAAiIIAAgIIAAkxIAAgIIAAiQIAAgIIAAnBIAAgIIAAhsIAAgIIAA3RIAAgJIAAoEIAIAAIAAIEIAAAJIAAXoIAAIuIAACQIAAAIIAAExIAAAIIAACIIAAAIIgIAAgEAcRghoIAAgJIAAlBIAAgJIAAg7IAIAAIAAGFIAAAJIgIAAgEAcRgp1IAAgIIAAljIAAgJIAApnIAAluIAAgJIAAmvIAAgIIAAomIAAgJIAAgIIAIAAIAAI3IAAAIIAAGvIAAAJIAAFzIAAJiIAAAJIAAFjIAAAIIgIAAg");
	this.shape_99.setTransform(1542.8,582.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#323232").s().p("EAxsBPgIgIAAIgJAAIg7AAInaAAI3qAAI3oAAQgFAAgDgCQgFgDgEgEIgBgEQgWgCgLgLIgBgEQgugEguAAIAAAIIgJAAIgyAAIAAgEQhNgEhLAAIAAAIIgJAAIlCAAIgIAAIAAgEQgigEghAAIgJAAQAAgEgCgBIg5gdQAAgEgCgCQgVgOgLgWIgBgIQgIgagRgRQgEAAgCgCQgPgKgDgWICPAAIAJAAQAnAOA9gKQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIBlAAIAJAAQAoAOA8gKQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIBmAAIAJAAQAnAOA9gKQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIBlAAIAJAAQAoAOA8gKQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIBmAAIAIAAQAlAOA4gKQAAAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBIBtAAIAJAAQAoAOA8gKQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIBlAAIAJAAQAnAOA9gKQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIBlAAIAJAAQAoAOA8gKQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIE5AAIAJAAQAoAOA8gKQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIBmAAIAJAAQAnAOA9gKQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIBlAAIAJAAQAoAOA8gKQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIBmAAIAJAAQAnAOA9gKQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIBlAAIAJAAQAoAOA8gKQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIBmAAIAIAAQAoAOA9gKQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIBlAAIAIAAQApAOA8gKIABgEIBmAAIAIAAQAoAOA9gKIABgEIBlAAIAIAAQApAOA8gKIABgEIBmAAIAIAAQAoAOA9gKIABgEIBlAAIAIAAQBHAPBagLIABgEQADAAADgCQACgCAAgEQAYgBAMgOQACgCAEAAQAbgIANgTQACgDAAgEQAXgHACgbIABgIQAEAAACgDQACgCAAgEQABAAABAAQABAAABAAQAAAAABAAQAAAAAAgBQALgrgQgYIAAgIQAGlIgOkyIAAgJIAAgIQAAgmgigFQgFAAgDgBQgFgDgEgEQAAgEgCgBQgGgEgJAAIgBgEQghgEgiAAIAAAIIgIAAIgIACQgSAHgRAIIAAAJIAAAIQgDAAgBACQgIAPgNAJIAAJQIAAAIQgEAAgDACQgUANgpgGIAAAIIgIAAIgJAAIhDAAIgIAAIgRAAIgBgEQgzgEgyAAIAAAIIgIAAIgZAAIgJAAIhNAAIAAgEQgugEgvAAIAAAIIgIAAIgIAAIgrAAIAAgEQhMgEhMAAIAAAIIgIAAIgIAAIgrAAIAAgEQgzgEgyAAIAAAIIgJAAIgzAAIgIAAIhlAAIgBgEQgugEgvAAIAAAIIgIAAIgIAAIgrAAIAAgEQhMgEhMAAIAAAIIgJAAIgZAAIgJAAIgRAAIAAgEQhMgEhLAAIAAAIIgJAAIgZAAIgJAAIgRAAIAAgEQhMgEhMAAIAAAIIgJAAIgIAAIgrAAIAAgEQgzgEgyAAIAAAIIgJAAIgyAAIgIAAIgrAAIAAgEQhMgEhMAAIAAAIIgJAAIgZAAIgJAAIgRAAIAAgEQhMgEhMAAIAAAIIgIAAIgIAAIhEAAIgJAAIgRAAIAAgEQgzgEgyAAIAAAIIgJAAIgIAAIgrAAIAAgEQgzgEgyAAIAAAIIgJAAIgyAAIgIAAIgrAAIAAgEQgygEgxAAIAAAIIgJAAIgzAAIgIAAIgrAAIAAgEQhLgEhNAAIAAAIIgIAAIgIAAIgrAAIAAgEQhMgEhMAAIAAAIIgJAAIgIAAIgqAAIgBgEQhMgEhLAAIAAAIIgJAAIgIAAIgqAAIgBgEQhMgEhMAAIAAAIIgJAAIgIAAIgqAAIgBgEQhMgEhLAAIAAAIIgJAAIgZAAIgJAAIhMAAIgBgEQgtgEgvAAIAAAIIgJAAIhDAAIgBgIQgEgdgUgOQAAgEgCgCQgTgYgFglIgBgIQgMgrgVgiQAAgEgBgEQgjhjhBhHIgBgIQgLgZgWgRQAAgFgCAAQgNgGgCgPIgBgIQgIgZgRgRIgBgIQgHgagQgRQgFAAgBgCIglhCIAAgIQgCgggYgLQAAgEgBgCQgPgTgJgZQAAgFgBgDQgIgagQgRQgEAAgCgCQgCgCAAgFIgBgIQgBgggYgKQAAgBAAgBQAAgBAAgBQAA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");
	this.shape_100.setTransform(1398.9,576.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373636").s().p("Ego0ApCIAAh2IAAgJQAOA6gKBNIgEAAIAAgIgEAotgo5QgegDgVgOIARAAIAJAAQARAFAPAIQABAAAAAEIgIAAg");
	this.shape_101.setTransform(1453.9,332.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3C3A3A").s().p("EgZNBJTQgUgRgHgfQAWARALAZIABAIQgEAAgDgCgEgcPBD5QgRgRgCggQARARAHAaQACADAAAFQgFAAgCgCgEgcvBC+QgMgYgJgZQAYAKABAgIABAIQgFAAAAgBgEghxA0kQgSgngLgsQAaAdAHAvIABAIQgEAAgBgBgEgjnAt9QgPgdgGglQAVAWAEAlIABAIQgEAAgBgBgEgmyAk1QgPgmgGgtQAVAeAEAuIABAJQgBAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgEgmtAW/IAAgRQAPgHgDgbIAFAAIAAAIQAEAmgVANIAAgIgEgkuASwIAAgJQAUgZARggQABgCAEAAIgBAIQgNApgcAbIAAgIgA/+HQIAAgJQABgqgJgiQAXATgGAxIAAAIIAAAJIgJAAgEgqogMUQgSgVgKgcQAZANAIAeIAAAIQgEAAgBgCgEgtbgRWQgagUgJglQAYAWAQAeQACADAAAEQgEAAgDgCgEgw2g/uQgOgZgFghQAUASAEAhIABAIQgEAAgCgBgEgxShI0QATgQAggBIAIAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgfAKgbALIAAgIgEgrehJOIUPAAIAIAAIXoAAINPAAIASAAIKJAAQL1AAL2gGQA4AAAlAPIgJAAIgRAAI1jAAItLAAIgTAAIqMAAQrzAAr1ADIkgAAQpoAApagMg");
	this.shape_102.setTransform(1396.4,536.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(67,64,64,0.996)").s().p("EAk/AA9QgggmgngaQAAgEgBAAQgQgIgRgFQgkgPg4ABQr2AGr1AAIqJAAIgRAAItOAAI3rAAIAAgIQARgFAIgNQABgDAAgFIAJAAQLmAPL7gEIMjgCILFAAIXqAAICyAAIAABsIAAAIQgEAAgBgCg");
	this.shape_103.setTransform(1485.6,70.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(56,55,55,0.796)").s().p("ECBMABMIAAgJIAAgRIAAgIIAAhsIiyAAI3qAAIrHAAIsjADQr7ADrmgPIAIAAIJyAAIAIAAIBeAAIAIAAICQAAIAIAAIFkAAIAIAAICIAAIAIAAIEoAAIAJAAIEfAAIAIAAIBEAAIAIAAIBuAAIAJAAIBdAAIABAAIAHAAIEgAAIAIAAIC7AAIAIAAIBdAAIAIAAIDUAAIAJAAIDTAAIAIAAICQAAIAIAAIHsAAIAIAAIBVAAIAIAAIBuAAIAIAAIBdAAIAJAAICPAAIAJAAIEGAAIAJAAIAAB9IAAAJIAAAIIAAAJIgJAAgAMnhCI3oAAI3qAAI3qAAI3rAAI3qAAI3qAAIAAgJIDTAAIAJAAIDDAAIAIAAIBMAAIAIAAIDMAAIAIAAIBVAAIAIAAIEgAAIAIAAIC7AAIAIAAIBdAAIAJAAIC6AAIAIAAIBdAAIAJAAIBuAAIAIAAIBdAAIAIAAIDDAAIAJAAIBUAAIAIAAIEgAAIAIAAIB/AAIAJAAIDkAAIAIAAIH9AAIAIAAICQAAIAIAAIEHAAIAIAAIE4AAIAJAAIDUAAIAIAAIC6AAIAIAAIBeAAIAIAAIDTAAIAJAAICQAAIAIAAIDUAAIAJAAIMSAAIAJAAIBUAAIAIAAIDUAAIAJAAICQAAIAIAAICQAAIAIAAICIAAIAIAAIBmAAIAIAAIBlAAIAJAAIEgAAIAIAAIBuAAIAIAAIBdAAIAIAAICIAAIAIAAICQAAIAJAAIEfAAIAJAAIDBAAIAIAAIBUAAIAJAAIDLAAIAIAAIA8AAIAIAAIBUAAIAJAAIC7AAIAIAAIBdAAIAIAAIBuAAIAIAAIBeAAIAIAAIDTAAIAJAAIDLAAIAJAAIB2AAIAJAAIAAAJIscAAg");
	this.shape_104.setTransform(896,72.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(85,85,85,0.886)").s().p("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");
	this.shape_105.setTransform(890.5,586.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(7,7,7,0.086)").s().p("EB/iAAEIhLAAIxdAAI3rAAIk9AAIytAAI3pAAI3rAAI3oAAI3rAAI3pAAI3qAAI3rAAI3qAAIAAgHIXqAAIXrAAIXqAAIXpAAIXrAAIXoAAIXrAAIXpAAIScAAIFOAAIXrAAISxAAIAAAHIgJAAg");
	this.shape_106.setTransform(910.8,34.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(68,68,68,0.706)").s().p("EBrhAAEI3qAAIgmAAI3FAAI3qAAI3pAAI3pAAI3qAAI3qAAI3qAAI3qAAI3rAAIAAgHIAIAAIAJAAIDtAAIAJAAIXqAAIXqAAIXqAAIXqAAIXrAAIXoAAIXqAAIXqAAIStAAIE9AAIXqAAIRdAAIAAAHI1jAAg");
	this.shape_107.setTransform(893.5,35.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(65,65,65,0.678)").s().p("AAqAEIhbAAIAAgHIBKAAIAIAAIAJAAIAIAAIAAAHIgIAAg");
	this.shape_108.setTransform(1724.6,35.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(91,91,91,0.949)").s().p("AgDAuIAAgJIAAhSIAHAAIAAAJIAAA4IAAAJIAAAIIAAAJIgHAAg");
	this.shape_109.setTransform(1752.1,54);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(55,55,55,0.573)").s().p("AAEAZQAAgFgCgDQgJgRgEgYQAVAKACAfIAAAIIgIAAg");
	this.shape_110.setTransform(1751.2,46.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(47,47,47,0.49)").s().p("AADAcQgDgggIgYQAWAJgGAnIgBAJIgEgBg");
	this.shape_111.setTransform(1749.2,41.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(48,48,48,0.506)").s().p("ABDAEIh0AAIgJAAIgRAAIAAgHICGAAIAIAAQAFAAACACQABABAAAEIgIAAg");
	this.shape_112.setTransform(1737.3,35.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(4,4,4,0.055)").s().p("ABIAEIiGAAIgIAAIgJAAIAAgHICXAAIAIAAIAAAHIgIAAg");
	this.shape_113.setTransform(1736,34.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(11,11,11,0.122)").s().p("ECFlAATIgKgHQAAgEgCgBQgGgDgJAAQAAgEgCgBQgCgCgEAAIAAgIQAgACAJAWIABAIQgEAAgDgCgEiDsgALIg7AAIgIAAIg8AAIAAgJIB/AAIAIAAIAAAJIgIAAg");
	this.shape_114.setTransform(892.6,35.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(97,97,97,0.996)").s().p("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");
	this.shape_115.setTransform(890.8,575.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(87,87,87,0.906)").s().p("AhGgEIB0AAIAIAAQAJAAAHAEQABAAAAADIgIAAQgXACgUAAQgyAAgogJg");
	this.shape_116.setTransform(1739.4,36.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B5A992").s().p("AANAPQgVgKgMgUQAYAHAPASQACACAAAFQgFAAgDgCg");
	this.shape_117.setTransform(1778.2,256.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B5A991").s().p("AANAPQgVgKgMgUQAZAHAOASQACACAAAEQgEAAgEgBg");
	this.shape_118.setTransform(1784.1,261.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B3A78F").s().p("AANAPQgWgKgLgVQAZAJAOAQQACAEAAAEQgEgBgEgBg");
	this.shape_119.setTransform(1773.9,253.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B6AB93").s().p("ABQBIQgYgKgLgXQAaAIAOATQACADAAAEQgEAAgDgBgAgMgDQgYgKgLgXQAaAIAPATQACADAAAEQgFAAgDgBgAhAgtQgOgEgIgKIAAgNQAQAJAMAMQACADAAAEIgIgBg");
	this.shape_120.setTransform(1763,244.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B5AA91").s().p("AARAPQgYgLgRgTQAeAGARATQACADAAAEIgIgCg");
	this.shape_121.setTransform(1414.4,28.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B8AD95").s().p("AAQAMQgdgCgLgVQAYAIAYAKQABABAAAEIgJAAg");
	this.shape_122.setTransform(1404.1,22.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B6AA92").s().p("AANAPQgVgKgMgUQAYAHAPASQACACAAAEQgEAAgEgBg");
	this.shape_123.setTransform(1419,31.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B3A88F").s().p("ABSA2QgbgMgRgVQAgAGARAVQACADAAAEQgEAAgDgBgAAVATQgYgKgRgUQAeAGARATQACACAAAFQgEAAgEgCgAgsgVQgbgLgRgWQAgAHARAVQACACAAAFQgEAAgDgCg");
	this.shape_124.setTransform(1383.2,9.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B5AA92").s().p("ADQB+QgZgHgSgRQAhABARASQACACAAAFQgFgBgEgBgAitheQgegHgNgaQAcALAVASQACACAAADIgIgBg");
	this.shape_125.setTransform(1390.1,13.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#ACA087").s().p("EAg8AUsQgTgPgagJQAAgEgCgCQgNgUgbgHQgEAAgDgDQgGgCgEgEQAAgFgCgCQgOgUgagHQAAgEgCgEQgPgSgbgJQAAgEgBgDQgOgTgbgIQAAgEgCgBQgYgUgZgRQAAgFgCgCQgPgUgagHQAAgFgCgCQgCgCgEAAQgBgEgBgDQgNgMgQgJQAAgkgIgeIAAgIIAAgZQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAMhFgPgwIAAgJIAAgRQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAMhFgPgwIAAgJIAAgZQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAMhFgPgwIAAgJIAAgRQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAMhFgPgwIAAgJIAAgZIADgBQAMhFgPgwIAAgJIAAgRQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAMhFgPgwIAAgJIAAgaIADAAQAMhDgPgxIAAgIIAAgRQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAMhFgPgwIAAgJIAAgaQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQAMhEgPgxIAAgJIAAgRIADAAQAMhFgPgxIAAgIIAAgaQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQAMhFgPgwIAAgJIAAgRIADAAQALhOgOg5QAAgEgDgCQgCgCgEAAIAAgJIAAgIQgCgggXgKIAAgJQAHgpgYgKIAAgIIgBgIQgKgYgggCIgIAAIiZAAIyxAAI3oAAIlPAAIgRgJQgBgEgCgCQgOgUgagHQAAgEgCgDQgRgVgggGQAAgFgCgCQgRgSghgBQAAgEgBgCQgYgLgZgJQgBgEgBAAQg3gVgmgiQAAgEgCgDQgRgVgfgGIgJAAQAAgFgCgDQgRgUgggGQgFgBgDgBQgFgDgFgEQAAgFgBgCQgRgUghgIIgIAAQAAgDgCgCQgVgSgcgLIAAgIIX3AAIX0AAISaAAIAAX1IAARmQgEAAgDgCg");
	this.shape_126.setTransform(1579.9,132.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BEB39C").s().p("EB6fBj9I33AAI33AAI33AAI33AAI33AAI31AAI32AAI33AAI34AAI32AAI34AAIAApEIAA33IAA33IAA33IAA30IAA33IAA33IAA33IAA33IX4AAIX2AAIX4AAIX3AAIX2AAIX1AAIX3AAIX3AAIW7AAIAAAIQANAZAeAIIAJABIAIAAQARAWAbALQADACAEAAQAEAEAGACQADACAEAAQARAWAaALQAEABAEAAIAJAAQARAWAbALQADABAEAAQAmAjA2AUQACABAAAEQALAXAfACIAJABQASAQAZAIQAEABAFAAQARAWAZALIAIABQAMAXAXAKQAEABAEAAIASAJIycAAI3pAAI3rAAI3oAAI3rAAI3pAAI3qAAI3rAAI3qAAIgJAAIjsAAIgJAAIipAAIgJAAIAAgJIgIAAIh/AAIAAAJIgJAAIgIAAIgIABQgZAEgRAMIAAAIIAAAJQgFAAgBABQgJATgLAOIAAAQIAAAJIgIAAIAAXqIAAXqIAAXrIAAXoIAAXqQgBL1gDL1QgCIPAOH5IAAARIAAAIIAAA8IAAAIIAABEIAAAIIAAB3IAAAIIABAJQAFAogOATIAAAIIAAAJIAAAIIAAAJIgJAAQAABDAEBEIAFAAQgBAEADACQACACAEAAQAFAFACAFQACADAAAEQANARAOAPQACACAEAAQALATAfACIAAAFIXrAAIXqAAIXrAAIXpAAIXqAAIXpAAIXqAAIXqAAIXqAAIXrAAIXqAAIFCAAICPAAIAIAAIAAgJQANABALgFQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQARgBAGgJQADgDgBgEIAEgBQAKiJgOh0IAAgIQAGgpgOgTIAAgIIAAvVQABAAABAAQABAAAAgBQAAAAABAAQAAAAAAAAQALhFgPgxIAAgIIAAgaIAEAAQALhFgPgxIAAgJIAAgQQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgaQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhEgPgxIAAgJIAAgRIAEAAQALhFgPgxIAAgIIAAgaQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhEgPgxIAAgJIAAgRIAEAAQALhFgPgxIAAgIIAAgaQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhEgPgxIAAgJIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhEgPgxIAAgJIAAgZQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhEgPgxIAAgJIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhEgPgxIAAgJIAAgZIAEgBQALhFgPgwIAAgJIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhFgPgwIAAgJIAAgZIAEgBQALhFgPgxIAAgIIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhFgPgwIAAgJIAAgZIAEgBQALhFgPgxIAAgIIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhFgPgwIAAgJIAAgZQABAAABAAQABAAAAgBQAAAAABAAQAAAAAAAAQALhFgPgxIAAgIIAAgRIAEgBQALhFgPgwIAAgJIAAgZQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgRIAEgBQALhFgPgxIAAgIIAAgZQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgRQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgZQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhDgPgxIAAgIIAAipQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgRQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgaIAEAAQALhFgPgxIAAgIIAAgRQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgaIAEAAQALhFgPgxIAAgJIAAgQQABAAABAAQABAAAAgBQAAAAABAAQAAAAAAAAQALhFgPgxIAAgIIAAgaQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhFgPgwIAAgJIAAgRIAEAAQALhFgPgxIAAgIIAAgaQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhFgPgwIAAgJIAAgRIAEAAQALhFgPgxIAAgIIAAgaQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhFgPgwIAAgJIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhEgPgxIAAgJIAAgZQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhFgPgwIAAgJIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBQALhFgPgwIAAgJIAAgZQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhFgPgwIAAgJIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhFgPgwIAAgJIAAgZIAEgBQALhFgPgwIAAgJIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhFgPgwIAAgJIAAgZIAEgBQALhFgPgxIAAgIIAAgRQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQALhFgPgwIAAgJIAAgZQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgRIAEgBQALhFgPgwIAAgJIAAgZQABAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAQALhFgPgxIAAgIIAAgRIAEgBQALhFgPgxIAAgIIAAgZQABAAABAAQABAAAAgBQAAAAABAAQAAAAAAAAQALhFgPgxIAAgIIAAgRQABAAABAAQABAAAAgBQAAAAABAAQAAAAAAAAQADgUABgTQAJAKAOAEIAIABQAEAAACACQACACAAAEQAMAXAXAKQAEABAEAAQAaASAYATQACACAAAEQALAXAYAKQADABAEAAQALAXAYAKQAEABAEAAQALAXAXAKQAEABAEAAQAFAFAFACQAEACAEAAQALAXAYAKQADABAEAAQAZAJAUAPQACACAEAAIAAPVIAAX3IAAX1IAAX3IAAX2IAAX3IAAX3IxdAAgECHVBHgQALBggLhoIAAAIg");
	this.shape_127.setTransform(895.7,639.8);

	this.instance_9 = new lib.level1_2();
	this.instance_9.setTransform(1138.4,818.8,1,1,0,0,0,77.8,59.5);

	this.instance_10 = new lib.level2_2();
	this.instance_10.setTransform(1336.9,712.3,1,1,0,0,0,263.6,62.1);

	this.instance_11 = new lib.level3_2();
	this.instance_11.setTransform(1316.9,605,1,1,0,0,0,249.8,57.6);

	this.instance_12 = new lib.level4_2();
	this.instance_12.setTransform(1260.7,476.1,1,1,0,0,0,302.8,86.7);

	this.instance_13 = new lib.level5_2();
	this.instance_13.setTransform(1272.2,441.1,1,1,0,0,0,283.2,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_8},{t:this.level1},{t:this.instance_7},{t:this.level2},{t:this.level3},{t:this.level4},{t:this.level5},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.guessbtn},{t:this.playAgainbtn},{t:this.backbtn},{t:this.level7},{t:this.level6},{t:this.instance_1,p:{x:959,y:129.3}},{t:this.instance},{t:this.inputText},{t:this.guessText}]}).to({state:[{t:this.shape_126},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_120},{t:this.shape_127},{t:this.shape_119},{t:this.shape_117},{t:this.shape_89},{t:this.shape_88},{t:this.shape_118},{t:this.shape_123},{t:this.shape_122},{t:this.shape_124},{t:this.shape_125},{t:this.shape_121},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_31},{t:this.shape_80},{t:this.shape_30},{t:this.shape_59},{t:this.shape_29},{t:this.shape_83},{t:this.shape_57},{t:this.shape_28},{t:this.shape_60},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_38},{t:this.shape_53},{t:this.shape_55},{t:this.shape_67},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_36},{t:this.shape_12},{t:this.shape_61},{t:this.shape_76},{t:this.shape_58},{t:this.shape_81},{t:this.shape_56},{t:this.shape_75},{t:this.shape_82},{t:this.shape_54},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_79},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_42},{t:this.shape_43},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_78},{t:this.shape_77},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_37},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.guessbtn},{t:this.playAgainbtn},{t:this.backbtn},{t:this.level7},{t:this.level6},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_1,p:{x:957.1,y:128.8}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(752.5,639.5,1934.5,1279.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;