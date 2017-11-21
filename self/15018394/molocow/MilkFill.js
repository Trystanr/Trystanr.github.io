(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1280,
	height: 1024,
	fps: 24,
	color: "#000000",
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



(lib.CowBoyMaskcopy = function() {
	this.spriteSheet = ss["MilkFill_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer7 = function() {
	this.spriteSheet = ss["MilkFill_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Milkback = function() {
	this.spriteSheet = ss["MilkFill_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.MilkMask = function() {
	this.spriteSheet = ss["MilkFill_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer7();
	this.instance.setTransform(-300.5,-177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.5,-177.5,601,355);


(lib.Swag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(300.5,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:301.8},0).wait(1).to({x:303.1},0).wait(1).to({x:304.4},0).wait(1).to({x:305.7},0).wait(1).to({x:307},0).wait(1).to({x:308.3},0).wait(1).to({x:309.6},0).wait(1).to({x:310.9},0).wait(1).to({x:312.2},0).wait(1).to({x:313.5},0).wait(1).to({x:314.8},0).wait(1).to({x:316.2},0).wait(1).to({x:317.5},0).wait(1).to({x:318.8},0).wait(1).to({x:320.1},0).wait(1).to({x:321.4},0).wait(1).to({x:322.7},0).wait(1).to({x:324},0).wait(1).to({x:325.3},0).wait(1).to({x:326.6},0).wait(1).to({x:327.9},0).wait(1).to({x:329.2},0).wait(1).to({x:330.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,355);


// stage content:



(lib.MILKFILL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var myDocument = this;
		var iCount = 0;
		var bFilled = false;
		if (!bFilled) {
			window.onkeydown = function(e) {
				if (e.keyCode == 38) {
					console.log("ay fuck");
					if (iCount != 39) {
						iCount++;
						myDocument.gotoAndStop(iCount);
					} else {
						bFilled = true;
					}
				} else {
					console.log(e.keyCode);
				}
			}
		}
	}
	this.frame_39 = function() {
		this.stop();
		
		window.open("Final.html","_self");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egi2AUVIgcAAIAAgGIRDADICVAAIhyADIgbAAIloADIjBAAQkBAAkFgDgAS5UPQg3gohBgeQgUhagdheQgdhagohQQhnjUiyiQIgpAAQgVgdgmATQl/BOlugwIgEAAQADAlAVAXIAAAKIAAA8IgTAGQgpAKgmgQIgCAAQAAgFgCgCQgYgRgNgaQgeAKgVAUIAHARQAVBDgwAkQgdAtgfgtQgFAAgDgDQgagRAEgyQgTgRgVgQIgJgHQgGAAAAABIgCAGQgMAbgVAQQgdAtgfgtQgFAAgCgDQgRgRgBgVQgBgNAGgQQheg+hzBSIgXANQhXAyhkAlQgYAVgkAJQgKAPgUAFQgIAbgPATQioDGipDEQgFAIgFAFQgNALgMgPIgGgJQgEAAgCgCQgTghgYgZIgBgKQgGhwAlhEQCZhrBMi3QAAgSACgQQANiLCRgvIAUgUQAlgJAXgVQAtAFAQgZQg0gGh2AaIgUAUIgpAAIgUAUIgnAAQhJAmhNAgQgzAshFAaQgwAngyAlQhdBGhkBAIgxAUIgUAUQguAgg3gKIgKgCQgEAAgBgCQgIgPgRgDIAAgKQgHg5gMg1IABgKQALg+AHhEIB4gUIAVgUIAxgUQA4goAxguQDdjNgamrQAUglAVAlQB2A5gcCXQBqgLA2hrIgBgKQgkikgOi6QgcgVgVAfQiiAOiVgiIgTgUQhZgRg+grQgcgBgLgTQg4gTgsgfQAAgFgDgDQiEiYhzh4IAAkEQATgfANgpIACgHIADgEQACgCAAgFIAVAHQATAIATAJIAEADQADADAEAAIAIAHQAeAcApATIAEADQADADAEAAQAFAKAEAKQACAFACACQACADAFAAQAIBNACBTQACA7gCA9IAAAKIAAAKQBBBLBNA+IAGAFQADADgBAFQALAFAKACQAKADAHAEQACABABAFQCvBhESgqIACAAQAdgFAdAAQAAgFACgBIAQgIQACgBAAgFQAUAAAUgFQABAAAAgFQAVgJAPgQQAEgFAHgEQACgBAAgFQAOgMAagDIADgDQADgCAEAAQALgTAcgGIAEgBQAHgEALAAQAJgFAIgIIADgDQATgEAUAAQAAgFADgBIAPgIQACgBABgFQLcA3LgAKIAAAAQAigFAkAAQAAgFACgBIAQgIQACgBAAgFIAxAAQAAgFADgBIAPgIQADgBAAgFQDMg4CuhYIAEgEQADgCAFAAQAKgFAHgIIAEgDQAJgEAJAAQAAgFADgBIAPgIQADgBAAgFQANgMAagDIADgDQACgCAFAAQA4gtA+gnIAzgeIAEgEQADgCAEAAIgbguQghg6gbg+IgCgEIgIgTIgBgCQgCgEAAgFIAAgKIANgJIARANQCyAHCZgKQAqgEAqgBQARAEASAAQAkAdA1APIAEADQACADAGAAQAOAZAaANIAHAEQACADAAAFIAzAAQAAAFACABIAQAIQACABAAAFIAxAAQAAAFADABIAPAIQADABAAAFIAxAAQAAAFACABIAQAIQACABAAAFIApAAQAAAFABABIARAIQABABAAAFIApAAQAiAdA2APIAEADQACADAGAAIABACQAKANARAJIAEADQACADAFAAIgBH9IAAgdIgIlyQgmBJg+AvIhaAoQgLATgeABQhEAlhHAhIgpAAIgIAIIgMAMIgxAAIgVAUQhNAIhIAOIgpAIQAAAFgCAEQiIE9i1EQQGpFTExHNIAAAKIAABQQgGAAgCACQgHAIgFAKQgNAHgNAGQg+AahIgWIgUgHQh4jXjJiHQg5ghhIgRIgVgUQhugUgxAKIABAKIBXGJIBSF5IgFAFIAUAAQg1AHg2ACgASk0DIgWAAIgNgBIgCAAIADgPIAQAAIAUAQIgCAAgEAgdgUXIC2AAIAAAFIi3AAg");
	mask.setTransform(938.3,540.1);

	// Layer 5
	this.instance = new lib.Swag();
	this.instance.setTransform(934.3,540.2,1,1,0,0,0,300.5,177.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:820.2},39).wait(1));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgK6BlsMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgK6Bk+MAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgK6BkQMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgK6BjiMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgK6Bi0MAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgK6BiGMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgK6BhYMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgK6BgqMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgK6Bf8MAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgK6BfOMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgK6BegMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgK6BdxMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgK6BdDMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgK6BcVMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgK6BbnMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgK6Ba5MAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgK6BaLMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgK6BZdMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgK6BYvMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgK6BYBMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgK6BXTMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgK6BWlMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgK6BV3MAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgK6BVJMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EgK6BUbMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EgK6BTsMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgK6BS+MAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgK6BSQMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgK6BRiMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgK6BQ0MAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgK6BQGMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgK6BPYMAAAg1OMAwcAAAMAAAA1Og");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgK6BOqMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgK6BN8MAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgK6BNOMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgK6BMgMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgK6BLyMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgK6BLEMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgK6BKWMAAAg1PMAwcAAAMAAAA1Pg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgK6BJnMAAAg1OMAwcAAAMAAAA1Og");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:240.3,y:650.9}).wait(1).to({graphics:mask_1_graphics_1,x:240.3,y:646.3}).wait(1).to({graphics:mask_1_graphics_2,x:240.3,y:641.7}).wait(1).to({graphics:mask_1_graphics_3,x:240.3,y:637.1}).wait(1).to({graphics:mask_1_graphics_4,x:240.3,y:632.4}).wait(1).to({graphics:mask_1_graphics_5,x:240.3,y:627.8}).wait(1).to({graphics:mask_1_graphics_6,x:240.3,y:623.2}).wait(1).to({graphics:mask_1_graphics_7,x:240.3,y:618.6}).wait(1).to({graphics:mask_1_graphics_8,x:240.3,y:614}).wait(1).to({graphics:mask_1_graphics_9,x:240.3,y:609.4}).wait(1).to({graphics:mask_1_graphics_10,x:240.3,y:604.8}).wait(1).to({graphics:mask_1_graphics_11,x:240.3,y:600.2}).wait(1).to({graphics:mask_1_graphics_12,x:240.3,y:595.6}).wait(1).to({graphics:mask_1_graphics_13,x:240.3,y:591}).wait(1).to({graphics:mask_1_graphics_14,x:240.3,y:586.4}).wait(1).to({graphics:mask_1_graphics_15,x:240.3,y:581.8}).wait(1).to({graphics:mask_1_graphics_16,x:240.3,y:577.2}).wait(1).to({graphics:mask_1_graphics_17,x:240.3,y:572.6}).wait(1).to({graphics:mask_1_graphics_18,x:240.3,y:567.9}).wait(1).to({graphics:mask_1_graphics_19,x:240.3,y:563.3}).wait(1).to({graphics:mask_1_graphics_20,x:240.3,y:558.7}).wait(1).to({graphics:mask_1_graphics_21,x:240.3,y:554.1}).wait(1).to({graphics:mask_1_graphics_22,x:240.3,y:549.5}).wait(1).to({graphics:mask_1_graphics_23,x:240.3,y:544.9}).wait(1).to({graphics:mask_1_graphics_24,x:240.3,y:540.3}).wait(1).to({graphics:mask_1_graphics_25,x:240.3,y:535.7}).wait(1).to({graphics:mask_1_graphics_26,x:240.3,y:531.1}).wait(1).to({graphics:mask_1_graphics_27,x:240.3,y:526.5}).wait(1).to({graphics:mask_1_graphics_28,x:240.3,y:521.9}).wait(1).to({graphics:mask_1_graphics_29,x:240.3,y:517.3}).wait(1).to({graphics:mask_1_graphics_30,x:240.3,y:512.7}).wait(1).to({graphics:mask_1_graphics_31,x:240.3,y:508.1}).wait(1).to({graphics:mask_1_graphics_32,x:240.3,y:503.4}).wait(1).to({graphics:mask_1_graphics_33,x:240.3,y:498.8}).wait(1).to({graphics:mask_1_graphics_34,x:240.3,y:494.2}).wait(1).to({graphics:mask_1_graphics_35,x:240.3,y:489.6}).wait(1).to({graphics:mask_1_graphics_36,x:240.3,y:485}).wait(1).to({graphics:mask_1_graphics_37,x:240.3,y:480.4}).wait(1).to({graphics:mask_1_graphics_38,x:240.3,y:475.8}).wait(1).to({graphics:mask_1_graphics_39,x:240.3,y:471.2}).wait(1));

	// Layer 2
	this.instance_1 = new lib.MilkMask();
	this.instance_1.setTransform(227.6,601.1);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Layer 1
	this.instance_2 = new lib.Milkback();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,512,1280,1024);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;