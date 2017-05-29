(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Scene2_atlas_", frames: [[0,0,653,371],[0,983,1136,153],[527,713,143,99],[331,817,230,95],[527,616,230,95],[331,373,194,442],[0,373,329,608],[655,0,337,614]]}
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



(lib.Couch = function() {
	this.spriteSheet = ss["Scene2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.floor = function() {
	this.spriteSheet = ss["Scene2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.laptop = function() {
	this.spriteSheet = ss["Scene2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.returnbuttonhover = function() {
	this.spriteSheet = ss["Scene2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.returnbutton = function() {
	this.spriteSheet = ss["Scene2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Table = function() {
	this.spriteSheet = ss["Scene2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.WomanSuit = function() {
	this.spriteSheet = ss["Scene2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Woman = function() {
	this.spriteSheet = ss["Scene2_atlas_"];
	this.gotoAndStop(7);
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


(lib.TextBoi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAQQgGgGgBgKQABgKAGgGQAHgHAJAAQAKAAAHAHQAGAGABAKQgBAKgGAGQgHAIgKAAQgJAAgHgIg");
	this.shape.setTransform(1093.7,154.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA1BWQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgJgMgSAAQgPAAgMAGQgMAGgHAGIgHAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAIgGQAHgFANgFQANgGARAAQAYAAAOAKQAPAJAGARQAGASAAAWIAABXQAAAEgDACQgCACgDAAg");
	this.shape_1.setTransform(1078.6,147.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFCPQgEAAgBgDQgDgCAAgDIAAiXQAAgDADgDQABgCAEAAIAMAAQADAAACACQACADABADIAACXQgBADgCACQgCADgDAAgAgOhsQgFgFAAgJQAAgIAFgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGg");
	this.shape_2.setTransform(1063.7,141.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_3.setTransform(1040.4,147.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGCTQgDAAgCgCQgDgCAAgEIAAkVQAAgEADgBQACgDADAAIAMAAQADAAADADQACABAAAEIAAEVQAAAEgCACQgDACgDAAg");
	this.shape_4.setTransform(1026.3,141.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaCPQgLgFgHgGIgGgFIgDALQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAIgIAAQgEAAgCgDQgCgCAAgDIAAkVQAAgEACgCQACgCAEAAIANAAQADAAACACQACACABAEIAAB8IAFgDIAPgFQAKgCAOgBQAZABASALQASAMAJATQAKATAAAZQAAAZgKAUQgKAUgSAMQgRAMgVAAQgPAAgMgGgAgbADIgPAFIgFADIAABUIADAEIAIAKQAGAFAJAEQAIAEAMABQAOgBALgIQALgJAHgOQAGgOAAgQQAAgRgGgOQgHgNgMgIQgMgIgRAAQgMAAgJACg");
	this.shape_5.setTransform(1012.3,141.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxBKQgPgPAAgaIAAAAQAAgZARgNQASgQAfgBQAJABAIABIAOADIAFABQABgYgGgKQgFgLgRAAQgRgBgOAEIgTAGQgDABgCgBQgBgBAAAAQgBAAAAgBQAAgBAAAAQgBgBAAgBIgDgKQgBgEABgCQABgCADgCIAKgCQAIgEAMgCQANgCAPAAQAVgBAMAJQALAGAFAQQAEAQAAAZIAABcQAAAEgCACQgDACgDAAIgIAAQgDAAgCgBIgCgFIgDgMIgMAKQgHAFgKADQgKAEgMAAQgXAAgOgOgAgaAJQgLAIAAAQIAAAAQAAANAIAJQAIAIANAAQAPgBANgGQAMgIAFgJIAAghQgDgCgJgCQgJgCgOAAQgRAAgLAJg");
	this.shape_6.setTransform(992.2,147.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBrQgJgFgCgLQgDgKAAgNIAAhkIgVAAQgEgBgCgCQgCgCAAgDIAAgJQAAgEACgCQACgDAEABIAVAAIAAgvQAAgDADgDQACgCADAAIANgBQAEAAACADQACACAAADIAAAwIAwAAQADgBACADQADACAAAEIAAAJQAAADgDACQgCACgDABIgwAAIAABhQAAANACADQAEAFAHAAQAIgBAJgDIANgGQAFgCACABIAEADIAGALQACADgBADQAAADgEABIgLAGQgHAEgKACQgKACgKABQgQAAgIgHg");
	this.shape_7.setTransform(976.7,145.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsBWQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQACABABADIADAMIAFgGQAGgFALgFQAKgGARAAIAPABQAHABAFADQAFADgCAGIgFAOQgCAEgDABQgCAAgDgBIgHgCQgFgCgFAAQgPABgKAGQgKAFgFAGIgEAGIAABvQgBAEgCACQgCACgDAAg");
	this.shape_8.setTransform(963.8,147.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpBMQgTgMgLgUQgLgUgBgYQABgYALgTQALgUATgMQASgMAXAAQAYAAASAMQATAMALAUQALATABAYQgBAYgLAUQgLAUgTAMQgSAMgYAAQgXAAgSgMgAgbgzQgMAHgHAOQgHANgBARQABARAHAOQAHAOAMAHQAMAJAPAAQAPAAANgJQAMgHAHgOQAHgOABgRQgBgRgHgNQgHgOgMgHQgNgJgPABQgPgBgMAJg");
	this.shape_9.setTransform(945.4,147.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfCVQgDAAgCgCQgCgCAAgEIAAiGIgaAAQgEgBgCgCQgCgCAAgCIAAgKQAAgDACgCQACgDAEAAIAaAAIAAg7QgBgYAJgQQAIgQAPgHQANgIATAAQARAAAMAGQALAFAGAGQACACAAADIgBAFIgHALQgCADgCAAQgDAAgEgDQgDgDgJgFQgJgEgJAAQgPAAgJALQgKAKAAAYIAAA7IAwAAQAEAAACADQACACAAADIAAAKQAAACgCACQgCACgEABIgwAAIAACGQAAAEgDACQgBACgEAAg");
	this.shape_10.setTransform(930.1,141.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABuBWQgEAAgCgCQgCgCAAgEIAAhXQAAgYgKgMQgKgMgSAAQgOAAgKAFQgLAFgGAFIgKAJIABALIABANIAABXQAAAEgDACQgCACgDAAIgNAAQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgKgMgUAAQgPAAgKAGQgLAGgGAGIgFAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAHgGQAGgFAMgFQAMgGASAAQASAAAOAHQANAHAHANIAKgIQAIgGAOgGQAOgHARAAQAYAAAPAKQAOAJAGARQAGASAAAWIAABXQAAAEgCACQgDACgDAAg");
	this.shape_11.setTransform(905.9,147.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpBMQgTgMgLgUQgLgUgBgYQABgYALgTQALgUATgMQASgMAXAAQAYAAASAMQATAMALAUQALATABAYQgBAYgLAUQgLAUgTAMQgSAMgYAAQgXAAgSgMgAgbgzQgMAHgHAOQgHANgBARQABARAHAOQAHAOAMAHQAMAJAPAAQAPAAANgJQAMgHAHgOQAHgOABgRQgBgRgHgNQgHgOgMgHQgNgJgPABQgPgBgMAJg");
	this.shape_12.setTransform(879.7,147.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfBNQgUgMgMgTQgLgUgBgZQABgZAMgTQAMgVATgMQAUgLAWAAQATAAAPAHQAPAHALAPQACADAAADQgBADgDADIgIAGQgEAEgDgBIgFgEQgGgHgKgFQgKgGgNAAQgOAAgNAIQgNAIgHANQgHAOAAAQQAAARAHAOQAHAOANAHQAMAIAPAAQASAAAKgHQAKgHAGgHQAEgEADAAQADAAADADIAFADQADADABADQABADgCADQgKAQgQAJQgRAKgWAAQgWAAgTgLg");
	this.shape_13.setTransform(860.3,147.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQBrQgJgFgCgLQgDgKAAgNIAAhkIgVAAQgEgBgCgCQgCgCAAgDIAAgJQAAgEACgCQACgDAEABIAVAAIAAgvQAAgDADgDQACgCADAAIANgBQAEAAACADQACACAAADIAAAwIAwAAQADgBACADQADACAAAEIAAAJQAAADgDACQgCACgDABIgwAAIAABhQAAANACADQAEAFAHAAQAIgBAJgDIANgGQAFgCACABIAEADIAGALQACADgBADQAAADgEABIgLAGQgHAEgKACQgKACgKABQgQAAgIgHg");
	this.shape_14.setTransform(834.6,145.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBSQgNgHgHgGIgCgDIAAgGIADgFIADgFQACgDADAAQADgBADADIAGADIAOAHQAJAFAKAAQANAAAHgGQAHgGAAgJQAAgKgJgIQgKgGgRgJIgWgMQgLgHgHgKQgIgKAAgOQAAgKAFgJQAGgKALgIQAMgHATAAQAQAAAMAEQAMAEAGAEQADADABAEQABADgCAEIgEAGQgCAEgDABQgEABgDgCIgFgCIgNgFQgIgDgHAAQgOAAgFAGQgFAGAAAFQABAKAIAGQAJAGANAHIAbAOQAMAHAIAJQAIALAAAOQAAANgIALQgHALgNAHQgNAGgRAAQgUgBgOgFg");
	this.shape_15.setTransform(820.1,147.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgpBMQgTgMgLgUQgLgUgBgYQABgYALgTQALgUATgMQASgMAXAAQAYAAASAMQATAMALAUQALATABAYQgBAYgLAUQgLAUgTAMQgSAMgYAAQgXAAgSgMgAgbgzQgMAHgHAOQgHANgBARQABARAHAOQAHAOAMAHQAMAJAPAAQAPAAANgJQAMgHAHgOQAHgOABgRQgBgRgHgNQgHgOgMgHQgNgJgPABQgPgBgMAJg");
	this.shape_16.setTransform(802.3,147.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABuBWQgEAAgCgCQgCgCAAgEIAAhXQAAgYgKgMQgKgMgSAAQgOAAgKAFQgLAFgGAFIgKAJIABALIABANIAABXQAAAEgDACQgCACgDAAIgNAAQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgKgMgUAAQgPAAgKAGQgLAGgGAGIgFAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAHgGQAGgFAMgFQAMgGASAAQASAAAOAHQANAHAHANIAKgIQAIgGAOgGQAOgHARAAQAYAAAPAKQAOAJAGARQAGASAAAWIAABXQAAAEgCACQgDACgDAAg");
	this.shape_17.setTransform(776.3,147.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFCTQgEAAgCgCQgDgCABgEIAAkVQgBgEADgBQACgDAEAAIALAAQADAAADADQACABAAAEIAAEVQAAAEgCACQgDACgDAAg");
	this.shape_18.setTransform(746.5,141.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_19.setTransform(732.4,147.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_20.setTransform(713.2,147.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeCVQgEAAgDgCQgCgCAAgEIAAiGIgaAAQgDgBgCgCQgCgCgBgCIAAgKQABgDACgCQACgDADAAIAaAAIAAg7QAAgYAJgQQAIgQAPgHQANgIASAAQASAAALAGQAMAFAFAGQADACABADIgCAFIgGALQgCADgDAAQgDAAgDgDQgFgDgIgFQgJgEgJAAQgPAAgJALQgJAKgBAYIAAA7IAwAAQADAAACADQADACAAADIAAAKQAAACgDACQgCACgDABIgwAAIAACGQAAAEgDACQgBACgEAAg");
	this.shape_21.setTransform(698.4,141.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AguBMQgOgJgGgRQgGgRAAgXIAAhXQAAgDACgDQADgCADAAIANAAQAEAAACACQACADAAADIAABXQAAAYAKAMQAKAMASAAQAPAAALgGQAMgGAFgGIAGgGIAAgIIAAgRIAAgfIAAg3QAAgDADgDQACgCADAAIANAAQADAAADACQACADAAADIAACXQAAADgCACQgDADgDAAIgIAAQgDAAgCgCIgCgFIgDgLIgHAGQgGAFgMAFQgMAGgRAAQgYAAgPgKg");
	this.shape_22.setTransform(670.5,147.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgpBMQgTgMgLgUQgLgUgBgYQABgYALgTQALgUATgMQASgMAXAAQAYAAASAMQATAMALAUQALATABAYQgBAYgLAUQgLAUgTAMQgSAMgYAAQgXAAgSgMgAgbgzQgMAHgHAOQgHANgBARQABARAHAOQAHAOAMAHQAMAJAPAAQAPAAANgJQAMgHAHgOQAHgOABgRQgBgRgHgNQgHgOgMgHQgNgJgPABQgPgBgMAJg");
	this.shape_23.setTransform(650.3,147.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag7CTQgFgBgCgCQgCgDACgEIA2h0IhOieQgCgEABgCQACgDAFAAIATAAIAEABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIA+CAIAAAAIA7iAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIAQAAQAFAAACADQABACgCAEIiAEXIgDAEQAAAAgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAg");
	this.shape_24.setTransform(630.4,154);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgtCPQgSgJgIgNQgJgNABgPQgBgMAGgIQAEgIAHgFIAIgGIAAgBQgGgBgHgFQgHgEgFgIQgGgJAAgNQAAgMAFgIQADgJAGgGIAKgJIAEgDIgEgFIgGgPQgDgJAAgNQAAgUAJgRQAIgQAQgLQAPgKAXAAIBGAAQADAAACACQACACABAEIAAAHIgCAFQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIgWAFIAEAFQAFAEAEALQAFAKAAARQAAATgIAQQgJAQgQAKQgQAKgUAAQgOAAgJgCQgIgDgFgCIgFgDIgEADQgEACgFAGQgEAFgBAIQAAAIAGAGQAGAGAMABIA7AAQARAAAPAFQAOAGAJAMQAIAMAAASQAAASgLAQQgLAPgUAKQgUAJgZAAQgbAAgSgIgAgaA7IgKAFQgFAEgEAGQgFAGAAAJQABAQAOAJQANAKAWAAQAOAAANgFQAMgFAIgIQAJgJAAgNIgCgJQgCgHgHgFQgGgGgPAAIguAAgAgghvQgMANAAAVQAAAVAMANQANANATAAQASAAALgNQAMgNAAgVQAAgVgMgNQgLgNgSAAQgTAAgNANg");
	this.shape_25.setTransform(602.1,154);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AA1BWQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgJgMgSAAQgPAAgMAGQgMAGgHAGIgHAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAIgGQAHgFANgFQANgGARAAQAYAAAOAKQAPAJAGARQAGASAAAWIAABXQAAAEgDACQgCACgDAAg");
	this.shape_26.setTransform(581.8,147.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFCPQgDAAgDgDQgCgCAAgDIAAiXQAAgDACgDQADgCADAAIAMAAQADAAADACQABADABADIAACXQgBADgBACQgDADgDAAgAgNhsQgGgFAAgJQAAgIAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAIQAAAJgGAFQgFAGgJAAQgHAAgGgGg");
	this.shape_27.setTransform(566.8,141.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AA2CTQgDAAgDgCQgCgCgBgEIAAhZQABgYgKgMQgKgLgSAAQgPAAgMAGQgNAGgGAGIgHAGIAABwQgBAEgBACQgDACgDAAIgNAAQgDAAgCgCQgDgCAAgEIAAkVQAAgEADgBQACgDADAAIANAAQADAAADADQABABABAEIAACIIAHgGQAGgFANgGQANgFAQAAQAgAAAQATQARASAAAlIAABZQAAAEgDACQgCACgDAAg");
	this.shape_28.setTransform(552.1,141.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQBrQgJgFgCgLQgDgKAAgNIAAhkIgVAAQgEgBgCgCQgCgCAAgDIAAgJQAAgEACgCQACgDAEABIAVAAIAAgvQAAgDADgDQACgCADAAIANgBQAEAAACADQACACAAADIAAAwIAwAAQADgBACADQADACAAAEIAAAJQAAADgDACQgCACgDABIgwAAIAABhQAAANACADQAEAFAHAAQAIgBAJgDIANgGQAFgCACABIAEADIAGALQACADgBADQAAADgEABIgLAGQgHAEgKACQgKACgKABQgQAAgIgHg");
	this.shape_29.setTransform(534.4,145.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgpBMQgTgMgLgUQgLgUgBgYQABgYALgTQALgUATgMQASgMAXAAQAYAAASAMQATAMALAUQALATABAYQgBAYgLAUQgLAUgTAMQgSAMgYAAQgXAAgSgMgAgbgzQgMAHgHAOQgHANgBARQABARAHAOQAHAOAMAHQAMAJAPAAQAPAAANgJQAMgHAHgOQAHgOABgRQgBgRgHgNQgHgOgMgHQgNgJgPABQgPgBgMAJg");
	this.shape_30.setTransform(517.1,147.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGCTQgDAAgCgCQgCgCgBgEIAAkVQABgEACgBQACgDADAAIANAAQACAAADADQACABAAAEIAAEVQAAAEgCACQgDACgCAAg");
	this.shape_31.setTransform(502.5,141.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgfBNQgUgMgMgTQgLgUgBgZQABgZAMgTQAMgVATgMQAUgLAWAAQATAAAPAHQAPAHALAPQACADAAADQgBADgDADIgIAGQgEAEgDgBIgFgEQgGgHgKgFQgKgGgNAAQgOAAgNAIQgNAIgHANQgHAOAAAQQAAARAHAOQAHAOANAHQAMAIAPAAQASAAAKgHQAKgHAGgHQAEgEADAAQADAAADADIAFADQADADABADQABADgCADQgKAQgQAJQgRAKgWAAQgWAAgTgLg");
	this.shape_32.setTransform(488.8,147.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgsBWQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQACABABADIADAMIAFgGQAGgFALgFQAKgGARAAIAPABQAHABAFADQAFADgCAGIgFAOQgCAEgDABQgCAAgDgBIgHgCQgFgCgFAAQgPABgKAGQgKAFgFAGIgEAGIAABvQgBAEgCACQgCACgDAAg");
	this.shape_33.setTransform(464.5,147.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_34.setTransform(446.6,147.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAABWQgDAAgCgBIgDgDIhGieQgCgEABgCQACgDAFAAIANAAQADAAACABIACAEIA0B2IAAAAIA3h2QAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIALAAQAFAAACADQACACgCAEIhICeIgDADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAg");
	this.shape_35.setTransform(428.3,147.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_36.setTransform(410.2,147.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQBrQgJgFgCgLQgDgKAAgNIAAhkIgVAAQgEgBgCgCQgCgCAAgDIAAgJQAAgEACgCQACgDAEABIAVAAIAAgvQAAgDADgDQACgCADAAIANgBQAEAAACADQACACAAADIAAAwIAwAAQADgBACADQADACAAAEIAAAJQAAADgDACQgCACgDABIgwAAIAABhQAAANACADQAEAFAHAAQAIgBAJgDIANgGQAFgCACABIAEADIAGALQACADgBADQAAADgEABIgLAGQgHAEgKACQgKACgKABQgQAAgIgHg");
	this.shape_37.setTransform(393.3,145.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgxBKQgPgPAAgaIAAAAQAAgZARgNQASgQAfgBQAJABAIABIAOADIAFABQABgYgGgKQgFgLgRAAQgRgBgOAEIgTAGQgDABgCgBQgBgBAAAAQgBAAAAgBQAAgBAAAAQgBgBAAgBIgDgKQgBgEABgCQABgCADgCIAKgCQAIgEAMgCQANgCAPAAQAVgBAMAJQALAGAFAQQAEAQAAAZIAABcQAAAEgCACQgDACgDAAIgIAAQgDAAgCgBIgCgFIgDgMIgMAKQgHAFgKADQgKAEgMAAQgXAAgOgOgAgaAJQgLAIAAAQIAAAAQAAANAIAJQAIAIANAAQAPgBANgGQAMgIAFgJIAAghQgDgCgJgCQgJgCgOAAQgRAAgLAJg");
	this.shape_38.setTransform(376.8,147.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AA1CTQgDAAgCgCQgCgCAAgEIAAhZQAAgYgLgMQgJgLgSAAQgPAAgNAGQgLAGgIAGIgGAGIAABwQgBAEgCACQgCACgDAAIgNAAQgDAAgDgCQgCgCAAgEIAAkVQAAgEACgBQADgDADAAIANAAQADAAACADQACABABAEIAACIIAGgGQAIgFAMgGQANgFAQAAQAfAAARATQARASAAAlIAABZQAAAEgCACQgDACgDAAg");
	this.shape_39.setTransform(358.2,141.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AA6BYQgDAAgCgBIgCgDIgzh9IgxB9IgCADQgCABgDAAIgCAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIgvieQgBgEABgCQACgDAEAAIANAAQADAAACABQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIAfBtIAAAAIAwhyIACgDIAEgBIACAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIADADIAvBzIAAAAIAfhuQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIANAAQAFAAABADQABACgBAEIguCeQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_40.setTransform(335,147.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AA1BWQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgJgMgSAAQgPAAgMAGQgMAGgHAGIgHAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAIgGQAHgFANgFQANgGARAAQAYAAAOAKQAPAJAGARQAGASAAAWIAABXQAAAEgDACQgCACgDAAg");
	this.shape_41.setTransform(302.7,147.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFCPQgDAAgDgDQgCgCAAgDIAAiXQAAgDACgDQADgCADAAIAMAAQADAAACACQACADABADIAACXQgBADgCACQgCADgDAAgAgOhsQgFgFAAgJQAAgIAFgGQAHgGAHAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgHAAgHgGg");
	this.shape_42.setTransform(287.8,141.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAvCTIgFgBIgEgCIhUhRIAABMQAAAEgCACQgDACgDAAIgNAAQgDAAgCgCQgDgCAAgEIAAkVQAAgEADgBQACgDADAAIANAAQADAAADADQACABAAAEIAAC1IBGg6IAGgEQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIAXAAQAFAAABAFQAAADgCACIhPBAIBcBTQACACAAAEQgBADgFABg");
	this.shape_43.setTransform(265.9,141.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgsBWQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQACABABADIADAMIAFgGQAGgFALgFQAKgGARAAIAPABQAHABAFADQAFADgCAGIgFAOQgCAEgDABQgCAAgDgBIgHgCQgFgCgFAAQgPABgKAGQgKAFgFAGIgEAGIAABvQgBAEgCACQgCACgDAAg");
	this.shape_44.setTransform(249.5,147.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgpBMQgTgMgLgUQgLgUgBgYQABgYALgTQALgUATgMQASgMAXAAQAYAAASAMQATAMALAUQALATABAYQgBAYgLAUQgLAUgTAMQgSAMgYAAQgXAAgSgMgAgbgzQgMAHgHAOQgHANgBARQABARAHAOQAHAOAMAHQAMAJAPAAQAPAAANgJQAMgHAHgOQAHgOABgRQgBgRgHgNQgHgOgMgHQgNgJgPABQgPgBgMAJg");
	this.shape_45.setTransform(231.1,147.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ABQCXIgEgBIgDgDIhIjiIgCAAIhHDiIgDADQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgBgBgCIhPkaQgBgEACgDQACgDAEAAIASAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIADAEIA6DYIACAAIBGjeQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAGAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIADADIBHDeIACAAIA5jYQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAIASAAQAFAAACADQACADgBAEIhQEaIgDADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_46.setTransform(202,141.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgtAvQgTgSgBgcQABgbATgUQASgSAbgBQAcABASASQAUAUAAAbQAAAcgUASQgSATgcAAQgbAAgSgTg");
	this.shape_47.setTransform(961.4,80.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhICeQgbgKgMgJQgEgEgCgEQgBgFACgEIAVgsQADgFAFgCQAFgBAGADIALAFQAKAFAQAEQARAFASAAQAMAAAHgEQAIgFAAgLQAAgLgLgIQgMgJgegMQgugRgWgaQgWgZAAglQAAgYAMgWQAMgVAbgOQAZgNApAAQAjAAAZAIQAZAIAMAJQAGADACAGQADAGgDAHIgUAoQgEAGgFAAQgGACgFgCIgKgFQgKgEgPgDQgPgFgPAAQgOAAgHAFQgGAGAAAHQAAALALAGQALAGAVAJQAfALAYAPQAYAOAPAUQAOAUAAAfQAAAbgPAXQgPAVgcANQgdAOgnAAQgogBgbgJg");
	this.shape_48.setTransform(937.6,70);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhRERQgYgLgPgNQgQgOgHgKQgDgEABgGQAAgFAEgFIAqgpQAGgHAGABQAGAAAGAHQAHAIANAIQANAJATgBQAQABAOgJQAOgJAKgRQAJgTAAgbIAAl5QAAgGAFgFQAEgEAHAAIBLAAQAGAAAFAEQAEAFAAAGIAAF5QgBA3gWAoQgWAngmAVQgmAUguAAQgjgBgZgKg");
	this.shape_49.setTransform(902.5,58.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AivEYQgGAAgFgEQgEgFAAgGIAAoRQAAgGAEgFQAFgEAGAAIC7AAQAyAAAoAYQApAYAYAoQAYAnAAAyQAAAygYApQgYAngoAZQgpAXgxABIhjAAIAAC8QgBAGgEAFQgEAEgGAAgAhWgUIBcAAQAiAAAYgYQAXgWABglQgBgigXgWQgYgVgiAAIhcAAg");
	this.shape_50.setTransform(868.4,58);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ABSCkQgHAAgEgEQgFgFABgGIAAieQAAgfgQgTQgPgRgegBQgTABgQAHQgPAIgKAMQgKAMgDALIAACvQAAAIgFAEQgEADgMAAIg6AAQgHAAgEgEQgFgFAAgGIAAkhQAAgGAFgEQAEgFAHAAIAeAAQAFAAADADQADADADAEIALAdQAFgHAPgLQAPgLAYgIQAWgKAfAAQAyAAAgAWQAfAXAPAkQAOAjAAArIAACZQAAAGgFAFQgEAEgGAAg");
	this.shape_51.setTransform(804,69.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AggEQQgGAAgFgEQgEgFAAgGIAAkhQAAgGAEgEQAFgFAGAAIBCAAQAGAAAEAFQAFAEAAAGIAAEhQAAAGgFAFQgEAEgGAAgAgmixQgQgQAAgXQAAgXAQgQQAPgQAXAAQAXAAAQAQQAQAQAAAXQAAAXgQAQQgQAQgXABQgXgBgPgQg");
	this.shape_52.setTransform(773.2,58.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhNCRQgkgXgVglQgVgnAAguQAAgtAVgmQAVgmAkgXQAlgWAvgBQAqAAAhAUQAiASAUAiQAUAhAAArIAAALIgBAKQgBAGgEAEQgEAEgGAAIjMAAQABAQAKARQAJAPARALQARAKAWABQATAAAQgHQAQgFALgIQAGgEAFgBQAGAAAEAFIAhAmQAEADABAHQAAAFgGAFQgUATgeANQgeAMgnAAQgvAAgmgXgAA/gnQgCgXgRgPQgQgQgXAAQgYgBgRARQgRAPgEAXIB4AAIAAAAg");
	this.shape_53.setTransform(728.3,70);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgBCkQgGAAgDgCIgFgGIiSksQgDgHADgGQADgGAJAAIBFAAQAGAAADADQAEACACAEIBACVIABAAIBFiVQADgGAFgBQAEgCAHAAIA+AAQAJAAADAGQAEAGgEAHIiTEsIgFAGQgDACgFAAg");
	this.shape_54.setTransform(693.5,70.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AggEQQgGAAgEgEQgEgFgBgGIAAkhQABgGAEgEQAEgFAGAAIBBAAQAHAAAEAFQAEAEABAGIAAEhQgBAGgEAFQgEAEgHAAgAgnixQgPgQAAgXQAAgXAPgQQAQgQAXAAQAXAAAQAQQAQAQAAAXQAAAXgQAQQgQAQgXABQgXgBgQgQg");
	this.shape_55.setTransform(667.1,58.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag2C9QgVgbAAgxIAAiMIgbAAQgHAAgEgEQgEgFAAgGIAAg1QAAgHAEgEQAEgFAHAAIAbAAIAAhYQAAgHAEgEQAFgEAGgBIBAAAQAHAAAEAEQAEAFAAAGIAABZIBGAAQAHAAAEAFQAEAEAAAHIAAA1QAAAGgEAFQgEAEgHAAIhGAAIAAB/QAAARAHAFQAIAFAKgBQAKAAALgDIASgGQAHgCAEADQAFACACAGIAQAzQACAFgDAGQgCAFgGADIgSAGQgPAFgVAFQgVAEgVAAQgsAAgWgbg");
	this.shape_56.setTransform(644,65.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag/CSQgmgWgXglQgXgngBgwQABgvAXglQAYgmAmgXQAngWAsAAQAlAAAeAOQAdAPAXAcQAEAFgBAGQgBAHgGAEIglAjQgGAFgFgBQgFgCgEgEQgKgLgOgIQgOgHgRAAQghABgWAYQgWAXgBAhQABAjAWAXQAWAXAgABQAZgBAPgKQAOgIAKgLQAEgFAGgBQAFgBAFAEIAiAeQAGAFACAFQACAGgEAGQgUAgggARQggASgrAAQgsAAgngWg");
	this.shape_57.setTransform(613,70);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhjCNQgegVgNglQgNgjAAgpIAAibQAAgGAFgEQAEgFAGAAIBCAAQAGAAAEAFQAFAEAAAGIAACdQAAAgAPASQAQATAbAAQAQAAAOgJQANgJAJgOQAJgOACgOIAAimQAAgIAEgEQAFgDAJAAIA9AAQAGAAAEAFQAFAEAAAGIAAEhQAAAGgFAFQgEAEgGAAIgeAAQgGAAgEgDQgDgEgCgEIgJgbIgVASQgNAKgVAJQgVAJgfAAQgxgBgegWg");
	this.shape_58.setTransform(575.4,70.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhYEFQgjgXgTglQgVgnAAguQAAgvAUgmQAUglAjgXQAkgWAvAAQAXAAATAFQARAFALAEIAAjnQABgGAEgFQAEgEAHAAIBDAAQAHAAAEAEQAFAFAAAGIAAIRQAAAGgFAFQgEAEgHAAIgeAAQgGAAgEgEQgEgFgCgGIgIgZQAAABgMAMQgMAMgXALQgXALghABQgtAAgigXgAgxA6QgUAXgBAjQAAAiAUAYQAUAXAgABQAUAAAPgKQANgIAIgMQAIgNACgJIAAheIgGgEQgIgEgOgFQgNgEgVgBQghABgWAXg");
	this.shape_59.setTransform(534.4,58.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhSCRQglgXgWgmQgVgmgBguQABguAVglQAWgmAlgXQAlgWAtgBQAuABAlAWQAlAXAWAmQAWAlAAAuQAAAugWAmQgWAmglAXQglAXguAAQgtAAglgXgAg1g5QgWAWgBAjQABAiAWAYQAVAXAgABQAhgBAVgXQAWgYABgiQgBgjgWgWQgVgXghgBQggABgVAXg");
	this.shape_60.setTransform(496.8,70);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhgCkQgHAAgEgEQgEgFgBgGIAAkhQABgGAEgEQAEgFAHAAIAeAAQAFAAAEADQAEADABAEIALAfQAGgIAMgLQAMgMARgIQASgKAZAAQATAAAQAEQAPAEAIAGQAIAIgEAKIgeA0QgDAGgFACQgGABgEgCIgKgDIgOgCQgQABgLAFQgMAGgGAHQgIAIgCAGIAADBQAAAIgFAEQgFADgJAAg");
	this.shape_61.setTransform(466.9,69.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AiUEcQgGgBgEgEQgFgEAAgHIAAoQQAAgGAFgEQAEgFAGAAIAfAAQAFAAADADQAFACABAFIAKAaQAHgJAOgKQAPgKAUgIQAWgGAZgBQAsAAAjAXQAiAWAUAnQAVAlAAAvQAAAwgWAmQgVAlgkAVQgkAXgsAAQgWAAgUgGQgSgHgKgFIAADqQABAIgFAEQgEAEgLAAgAgli8QgOAJgHALQgIAMgCAJIAABfIAHAFQAHAFAOAEQAOAFAUAAQAhgBAWgXQAUgYABgiQAAgigVgXQgTgYghgBQgUABgOAIg");
	this.shape_62.setTransform(432,81.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhNCRQgkgXgVglQgVgnAAguQAAgtAVgmQAVgmAkgXQAlgWAvgBQAqAAAhAUQAiASAUAiQAUAhAAArIAAALIgBAKQgBAGgEAEQgEAEgGAAIjMAAQABAQAKARQAJAPARALQARAKAWABQATAAAQgHQAQgFALgIQAGgEAFgBQAGAAAEAFIAhAmQAEADABAHQAAAFgGAFQgUATgeANQgeAMgnAAQgvAAgmgXgAA/gnQgCgXgRgPQgQgQgXAAQgYgBgRARQgRAPgEAXIB4AAIAAAAg");
	this.shape_63.setTransform(375.5,70);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AivEYQgHAAgFgEQgEgFAAgGIAAoRQAAgGAEgFQAFgEAHAAIC1AAQAxAAAmAUQAmATAWAhQAWAiABAqQgBAfgOAaQgOAZgUASQgUATgTAIQAVAGAYAQQAZARAQAbQARAbABAlQAAAsgYAkQgXAignAUQgoAUgxAAgAhYC6IBgAAQAfgCAVgTQATgVABgfQAAgVgLgPQgMgQgTgIQgSgKgUABIhYAAgAhYgsIBWAAQAegBATgTQASgVABgfQgBgfgSgRQgTgUgeAAIhWAAg");
	this.shape_64.setTransform(334.6,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextBoi, new cjs.Rectangle(0,0,1281.4,174.1), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WomanSuit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,329,608), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Woman();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,337,614), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.laptop();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,143,99), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2TJfIAAy9MAsnAAAIAAS9g");
	this.shape.setTransform(142.8,60.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,285.6,121.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Couch();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,653,371), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Table();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,194,442), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.floor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1136,153), null);


(lib.Return = function(mode,startPosition,loop) {
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
(lib.Untitled3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var aOfficeNoise = new Audio('sounds/roomNoise.mp3');
		var aClick = new Audio('sounds/click.mp3');
		aOfficeNoise.play();
		
		this.backToMain.addEventListener("click", buttonClicked.bind(this));
		
		function buttonClicked()
		{
			//this.play();
			aClick.play();
			if (this.currentFrame < 100) {
				//PJS
				localStorage.setItem("15018394-clothing","pj");
			} else {
				//SUIT
				localStorage.setItem("15018394-clothing","suit");
			}
			
			window.open("index.html","_self");
		}
	}
	this.frame_151 = function() {
		this.gotoAndPlay(43);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(151).call(this.frame_151).wait(1));

	// Layer 2
	this.instance = new lib.TextBoi();
	this.instance.parent = this;
	this.instance.setTransform(1939.2,214.9,1,1,0,0,0,640.7,161.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({regX:640.3,regY:99.5,x:1646.1,y:152.6},0).wait(1).to({x:1366.9},0).wait(1).to({x:1100.6},0).wait(1).to({x:846.7},0).wait(1).to({x:640.3},0).wait(138));

	// Layer 5
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(631.9,960.5,1,1,0,0,0,142.8,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(145));

	// Return
	this.backToMain = new lib.Return();
	this.backToMain.parent = this;
	this.backToMain.setTransform(639,958.5,1,1,0,0,0,115,47.5);
	new cjs.ButtonHelper(this.backToMain, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.backToMain).wait(152));

	// Laptop
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1373,516.5,1,1,0,0,0,71.5,49.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({x:1250.3},0).wait(1).to({x:1130.6},0).wait(1).to({x:1013.9},0).wait(1).to({x:900.1},0).wait(1).to({x:789.2},0).wait(1).to({x:710},0).wait(127));

	// Girl 1 pjs copy
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1552,591,1,1,0,0,0,168.5,307);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).wait(1).to({regX:164.5,regY:304,x:1418,y:588},0).wait(1).to({x:1303.8},0).wait(1).to({x:1203.6},0).wait(1).to({x:1115.7},0).wait(1).to({x:1038.5},0).wait(1).to({x:970.8},0).wait(1).to({x:911.1},0).wait(1).to({x:858.4},0).wait(1).to({x:811.5},0).wait(1).to({x:769.7},0).wait(1).to({x:732},0).wait(1).to({x:697.7},0).wait(1).to({x:670.5},0).wait(27).to({x:642.7},0).wait(1).to({x:607.7},0).wait(1).to({x:569.1},0).wait(1).to({x:526.4},0).wait(1).to({x:478.5},0).wait(1).to({x:424.6},0).wait(1).to({x:363.6},0).wait(1).to({x:294.3},0).wait(1).to({x:215.5},0).wait(1).to({x:125.6},0).wait(1).to({x:23.2},0).wait(1).to({x:-93.6},0).wait(1).to({x:-226.5},0).wait(1));

	// Girl 1 pjs
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1552,591,1,1,0,0,0,168.5,307);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).wait(1).to({x:1422},0).wait(1).to({x:1307.8},0).wait(1).to({x:1207.6},0).wait(1).to({x:1119.7},0).wait(1).to({x:1042.5},0).wait(1).to({x:974.8},0).wait(1).to({x:915.1},0).wait(1).to({x:862.4},0).wait(1).to({x:815.5},0).wait(1).to({x:773.7},0).wait(1).to({x:736},0).wait(1).to({x:701.7},0).wait(1).to({x:674.5},0).wait(27).to({x:646.7},0).wait(1).to({x:611.7},0).wait(1).to({x:573.1},0).wait(1).to({x:530.4},0).wait(1).to({x:482.5},0).wait(1).to({x:428.6},0).wait(1).to({x:367.6},0).wait(1).to({x:298.3},0).wait(1).to({x:219.5},0).wait(1).to({x:129.6},0).wait(1).to({x:27.2},0).wait(1).to({x:-89.6},0).wait(1).to({x:-222.5},0).to({_off:true},1).wait(53));

	// Couch
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1668.5,661,1,1,0,0,0,326.5,185.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).wait(1).to({x:1427},0).wait(1).to({x:1191.6},0).wait(1).to({x:962.4},0).wait(1).to({x:739},0).wait(1).to({x:689.6},0).wait(124));

	// Table
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1391,625.5,1,1,0,0,0,97,221);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(1).to({x:1121.5},0).wait(1).to({x:858.5},0).wait(1).to({x:601.9},0).wait(1).to({x:351.8},0).wait(1).to({x:299},0).wait(130));

	// Floor
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1903.5,884.5,1,1,0,0,0,568,76.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(1).to({x:1682.5},0).wait(1).to({x:1466.8},0).wait(1).to({x:1256.3},0).wait(1).to({x:1050.8},0).wait(1).to({x:850.3},0).wait(1).to({x:654.6},0).wait(1).to({x:636},0).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1129.1,1411.9,285.6,121.3);
// library properties:
lib.properties = {
	width: 1280,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Scene2_atlas_.png", id:"Scene2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;