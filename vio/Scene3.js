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



(lib.Car = function() {
	this.initialize(img.Car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2197,1172);


(lib.JerryCan = function() {
	this.initialize(img.JerryCan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,578);


(lib.returnbuttonhover = function() {
	this.initialize(img.returnbuttonhover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,95);


(lib.returnbutton = function() {
	this.initialize(img.returnbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,95);


(lib.thing = function() {
	this.initialize(img.thing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,635);


(lib.Waveback = function() {
	this.initialize(img.Waveback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,275);


(lib.Wavefront = function() {
	this.initialize(img.Wavefront);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,275);// helper functions:

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
	this.shape.graphics.f("#000000").s().p("AgPAQQgIgGAAgKQAAgKAIgGQAGgHAJAAQAKAAAHAHQAGAGABAKQgBAKgGAGQgHAIgKAAQgJAAgGgIg");
	this.shape.setTransform(895,154.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQBrQgJgFgCgLQgDgKAAgNIAAhkIgVAAQgEgBgCgCQgCgCAAgDIAAgJQAAgEACgCQACgDAEABIAVAAIAAgvQAAgDADgDQACgCADAAIANgBQAEAAACADQACACAAADIAAAwIAwAAQADgBACADQADACAAAEIAAAJQAAADgDACQgCACgDABIgwAAIAABhQAAANACADQAEAFAHAAQAIgBAJgDIANgGQAFgCACABIAEADIAGALQACADgBADQAAADgEABIgLAGQgHAEgKACQgKACgKABQgQAAgIgHg");
	this.shape_1.setTransform(883,145.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA1BWQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgJgMgSAAQgPAAgMAGQgMAGgHAGIgHAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAIgGQAHgFANgFQANgGARAAQAYAAAOAKQAPAJAGARQAGASAAAWIAABXQAAAEgDACQgCACgDAAg");
	this.shape_2.setTransform(865.6,147.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_3.setTransform(845.5,147.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhECVQgEAAgCgCQgCgDAAgDIAAkVQAAgDACgCQACgDAEAAIAIAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIACAEIADAIIAGgFQAGgEALgFQAKgEAQAAQAWAAASAMQASAMAKAUQAKAUAAAZQAAAZgLATQgKATgSAMQgSALgXABQgOgBgKgDQgKgDgFgEIgFgDIAAB/QgBADgCADQgCACgDAAgAgbh0QgKAFgFAFIgFAFIAABXIAFAEQAGADAJAEQAJADAMAAQAPAAAMgIQANgIAHgNQAGgOABgRQAAgQgGgOQgHgOgLgJQgMgIgQgBQgOABgJAFg");
	this.shape_4.setTransform(826.4,153.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiBSQgNgHgHgGIgCgDIAAgGIADgFIADgFQACgDADAAQADgBADADIAGADIAOAHQAJAFAKAAQANAAAHgGQAHgGAAgJQAAgKgJgIQgKgGgRgJIgWgMQgLgHgHgKQgIgKAAgOQAAgKAFgJQAGgKALgIQAMgHATAAQAQAAAMAEQAMAEAGAEQADADABAEQABADgCAEIgEAGQgCAEgDABQgEABgDgCIgFgCIgNgFQgIgDgHAAQgOAAgFAGQgFAGAAAFQABAKAIAGQAJAGANAHIAbAOQAMAHAIAJQAIALAAAOQAAANgIALQgHALgNAHQgNAGgRAAQgUgBgOgFg");
	this.shape_5.setTransform(808.3,147.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBSQgNgHgHgGIgCgDIAAgGIADgFIADgFQACgDADAAQADgBADADIAGADIAOAHQAJAFAKAAQANAAAHgGQAHgGAAgJQAAgKgJgIQgKgGgRgJIgWgMQgLgHgHgKQgIgKAAgOQAAgKAFgJQAGgKALgIQAMgHATAAQAQAAAMAEQAMAEAGAEQADADABAEQABADgCAEIgEAGQgCAEgDABQgEABgDgCIgFgCIgNgFQgIgDgHAAQgOAAgFAGQgFAGAAAFQABAKAIAGQAJAGANAHIAbAOQAMAHAIAJQAIALAAAOQAAANgIALQgHALgNAHQgNAGgRAAQgUgBgOgFg");
	this.shape_6.setTransform(784.1,147.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBSQgNgHgHgGIgCgDIAAgGIADgFIADgFQACgDADAAQADgBADADIAGADIAOAHQAJAFAKAAQANAAAHgGQAHgGAAgJQAAgKgJgIQgKgGgRgJIgWgMQgLgHgHgKQgIgKAAgOQAAgKAFgJQAGgKALgIQAMgHATAAQAQAAAMAEQAMAEAGAEQADADABAEQABADgCAEIgEAGQgCAEgDABQgEABgDgCIgFgCIgNgFQgIgDgHAAQgOAAgFAGQgFAGAAAFQABAKAIAGQAJAGANAHIAbAOQAMAHAIAJQAIALAAAOQAAANgIALQgHALgNAHQgNAGgRAAQgUgBgOgFg");
	this.shape_7.setTransform(769.1,147.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_8.setTransform(751.9,147.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFCTQgEAAgCgCQgCgCAAgEIAAkVQAAgEACgBQACgDAEAAIAMAAQACAAADADQACABABAEIAAEVQgBAEgCACQgDACgCAAg");
	this.shape_9.setTransform(737.8,141.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiBSQgNgHgHgGIgCgDIAAgGIADgFIADgFQACgDADAAQADgBADADIAGADIAOAHQAJAFAKAAQANAAAHgGQAHgGAAgJQAAgKgJgIQgKgGgRgJIgWgMQgLgHgHgKQgIgKAAgOQAAgKAFgJQAGgKALgIQAMgHATAAQAQAAAMAEQAMAEAGAEQADADABAEQABADgCAEIgEAGQgCAEgDABQgEABgDgCIgFgCIgNgFQgIgDgHAAQgOAAgFAGQgFAGAAAFQABAKAIAGQAJAGANAHIAbAOQAMAHAIAJQAIALAAAOQAAANgIALQgHALgNAHQgNAGgRAAQgUgBgOgFg");
	this.shape_10.setTransform(716.7,147.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA1BWQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgJgMgSAAQgPAAgMAGQgMAGgHAGIgHAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAIgGQAHgFANgFQANgGARAAQAYAAAOAKQAPAJAGARQAGASAAAWIAABXQAAAEgDACQgCACgDAAg");
	this.shape_11.setTransform(698.8,147.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgxBKQgPgPAAgaIAAAAQAAgZARgNQASgQAfgBQAJABAIABIAOADIAFABQABgYgGgKQgFgLgRAAQgRgBgOAEIgTAGQgDABgCgBQgBgBAAAAQgBAAAAgBQAAgBAAAAQgBgBAAgBIgDgKQgBgEABgCQABgCADgCIAKgCQAIgEAMgCQANgCAPAAQAVgBAMAJQALAGAFAQQAEAQAAAZIAABcQAAAEgCACQgDACgDAAIgIAAQgDAAgCgBIgCgFIgDgMIgMAKQgHAFgKADQgKAEgMAAQgXAAgOgOgAgaAJQgLAIAAAQIAAAAQAAANAIAJQAIAIANAAQAPgBANgGQAMgIAFgJIAAghQgDgCgJgCQgJgCgOAAQgRAAgLAJg");
	this.shape_12.setTransform(678.9,147.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_13.setTransform(661.1,147.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABuBWQgEAAgCgCQgCgCAAgEIAAhXQAAgYgKgMQgKgMgSAAQgOAAgKAFQgLAFgGAFIgKAJIABALIABANIAABXQAAAEgDACQgCACgDAAIgNAAQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgKgMgUAAQgPAAgKAGQgLAGgGAGIgFAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAHgGQAGgFAMgFQAMgGASAAQASAAAOAHQANAHAHANIAKgIQAIgGAOgGQAOgHARAAQAYAAAPAKQAOAJAGARQAGASAAAWIAABXQAAAEgCACQgDACgDAAg");
	this.shape_14.setTransform(635.5,147.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgtCPQgSgJgJgNQgIgNAAgPQAAgMAGgIQAEgIAHgFIAIgGIAAgBQgGgBgHgFQgHgEgGgIQgEgJgBgNQABgMAEgIQADgJAGgGIAKgJIAEgDIgEgFIgGgPQgDgJgBgNQABgUAJgRQAIgQAQgLQAPgKAXAAIBGAAQADAAACACQADACAAAEIAAAHIgBAFQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIgWAFIAEAFQAFAEAEALQAFAKAAARQAAATgIAQQgJAQgQAKQgQAKgUAAQgOAAgJgCQgIgDgFgCIgFgDIgEADQgEACgFAGQgEAFgBAIQAAAIAGAGQAFAGAMABIA8AAQARAAAPAFQAOAGAJAMQAIAMAAASQAAASgLAQQgMAPgTAKQgUAJgZAAQgbAAgSgIgAgaA7IgKAFQgGAEgDAGQgFAGAAAJQABAQANAJQAOAKAWAAQANAAAOgFQAMgFAIgIQAJgJAAgNIgCgJQgCgHgHgFQgHgGgOAAIguAAgAgghvQgLANgBAVQABAVALANQAMANAUAAQASAAALgNQAMgNAAgVQAAgVgMgNQgLgNgSAAQgUAAgMANg");
	this.shape_15.setTransform(600.8,154);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA1BWQgDAAgCgCQgCgCgBgEIAAhXQAAgYgKgMQgJgMgSAAQgPAAgMAGQgMAGgHAGIgHAGIAABvQgBAEgCACQgCACgDAAIgNAAQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAEANIAIgGQAHgFANgFQANgGARAAQAYAAAOAKQAPAJAGARQAGASAAAWIAABXQAAAEgDACQgCACgDAAg");
	this.shape_16.setTransform(580.5,147.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFCPQgEAAgCgDQgCgCAAgDIAAiXQAAgDACgDQACgCAEAAIAMAAQADAAADACQABADABADIAACXQgBADgBACQgDADgDAAgAgNhsQgGgFAAgJQAAgIAGgGQAFgGAIAAQAJAAAFAGQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgGg");
	this.shape_17.setTransform(565.6,141.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGCTQgDAAgCgCQgDgCAAgEIAAkVQAAgEADgBQACgDADAAIANAAQADAAACADQACABABAEIAAEVQgBAEgCACQgCACgDAAg");
	this.shape_18.setTransform(556.7,141.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFCTQgEAAgCgCQgCgCgBgEIAAkVQABgEACgBQACgDAEAAIALAAQAEAAACADQACABAAAEIAAEVQAAAEgCACQgCACgEAAg");
	this.shape_19.setTransform(547.8,141.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_20.setTransform(533.7,147.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAABWQgDAAgCgBIgDgDIhGieQgCgEABgCQACgDAFAAIANAAQADAAACABIACAEIA0B2IAAAAIA3h2QAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIALAAQAFAAACADQACACgCAEIhICeIgDADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAg");
	this.shape_21.setTransform(515.4,147.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgxBKQgPgPAAgaIAAAAQAAgZARgNQASgQAfgBQAJABAIABIAOADIAFABQABgYgGgKQgFgLgRAAQgRgBgOAEIgTAGQgDABgCgBQgBgBAAAAQgBAAAAgBQAAgBAAAAQgBgBAAgBIgDgKQgBgEABgCQABgCADgCIAKgCQAIgEAMgCQANgCAPAAQAVgBAMAJQALAGAFAQQAEAQAAAZIAABcQAAAEgCACQgDACgDAAIgIAAQgDAAgCgBIgCgFIgDgMIgMAKQgHAFgKADQgKAEgMAAQgXAAgOgOgAgaAJQgLAIAAAQIAAAAQAAANAIAJQAIAIANAAQAPgBANgGQAMgIAFgJIAAghQgDgCgJgCQgJgCgOAAQgRAAgLAJg");
	this.shape_22.setTransform(497.4,147.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgsBWQgEAAgCgCQgCgCAAgEIAAiXQAAgDACgCQACgDAEAAIAIAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQACABABADIADAMIAFgGQAGgFALgFQAKgGARAAIAPABQAHABAFADQAFADgCAGIgFAOQgCAEgDABQgCAAgDgBIgHgCQgFgCgFAAQgPABgKAGQgKAFgFAGIgEAGIAABvQgBAEgCACQgCACgDAAg");
	this.shape_23.setTransform(483.4,147.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQBrQgJgFgCgLQgDgKAAgNIAAhkIgVAAQgEgBgCgCQgCgCAAgDIAAgJQAAgEACgCQACgDAEABIAVAAIAAgvQAAgDADgDQACgCADAAIANgBQAEAAACADQACACAAADIAAAwIAwAAQADgBACADQADACAAAEIAAAJQAAADgDACQgCACgDABIgwAAIAABhQAAANACADQAEAFAHAAQAIgBAJgDIANgGQAFgCACABIAEADIAGALQACADgBADQAAADgEABIgLAGQgHAEgKACQgKACgKABQgQAAgIgHg");
	this.shape_24.setTransform(467.9,145.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBSQgNgHgHgGIgCgDIAAgGIADgFIADgFQACgDADAAQADgBADADIAGADIAOAHQAJAFAKAAQANAAAHgGQAHgGAAgJQAAgKgJgIQgKgGgRgJIgWgMQgLgHgHgKQgIgKAAgOQAAgKAFgJQAGgKALgIQAMgHATAAQAQAAAMAEQAMAEAGAEQADADABAEQABADgCAEIgEAGQgCAEgDABQgEABgDgCIgFgCIgNgFQgIgDgHAAQgOAAgFAGQgFAGAAAFQABAKAIAGQAJAGANAHIAbAOQAMAHAIAJQAIALAAAOQAAANgIALQgHALgNAHQgNAGgRAAQgUgBgOgFg");
	this.shape_25.setTransform(444.2,147.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBSQgNgHgHgGIgCgDIAAgGIADgFIADgFQACgDADAAQADgBADADIAGADIAOAHQAJAFAKAAQANAAAHgGQAHgGAAgJQAAgKgJgIQgKgGgRgJIgWgMQgLgHgHgKQgIgKAAgOQAAgKAFgJQAGgKALgIQAMgHATAAQAQAAAMAEQAMAEAGAEQADADABAEQABADgCAEIgEAGQgCAEgDABQgEABgDgCIgFgCIgNgFQgIgDgHAAQgOAAgFAGQgFAGAAAFQABAKAIAGQAJAGANAHIAbAOQAMAHAIAJQAIALAAAOQAAANgIALQgHALgNAHQgNAGgRAAQgUgBgOgFg");
	this.shape_26.setTransform(429.2,147.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgoBMQgSgMgKgTQgKgVAAgYQAAgXAKgUQAKgUASgMQATgMAYAAQAWAAARAKQASAKAJARQAKASAAAVIAAAGIgBAFQAAADgCACQgCACgDAAIh4AAQABAOAHANQAIANANAHQAMAIAOAAQAOAAAKgEQAKgEAIgFIAHgDQACgBADAEIADAEIAEAFIACAGQAAACgEADQgIAGgQAHQgQAGgWAAQgYAAgTgMgAAygPQgBgNgGgLQgGgKgKgGQgLgHgNABQgUAAgPAMQgOANgDAVIBjAAIAAAAg");
	this.shape_27.setTransform(412,147.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhICTQgDAAgDgCQgCgCAAgEIAAkVQAAgEACgBQADgDADAAIARAAQADAAACADQACABABAEIAAEBIB4AAQADAAACACQACACABAEIAAAMQgBAEgCACQgCACgDAAg");
	this.shape_28.setTransform(394.1,141.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AguAvQgSgSgBgcQABgbASgUQATgSAbgBQAbABAUASQASAUABAbQgBAcgSASQgUATgbAAQgbAAgTgTg");
	this.shape_29.setTransform(887.5,80.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AiUEYQgJAAgEgHQgEgGAEgJIBxjwIiCkUQgDgIAEgHQAEgFAJgBIBIAAQAFAAAEADQADACABAEIBQC1IABAAIBQi1QADgGAEgBQAFgCAHAAIBAAAQAKABAEAFQAEAHgEAIIj0IQQgCAEgDACQgEAEgFAAg");
	this.shape_30.setTransform(859.6,82);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhNCRQgkgXgVglQgVgnAAguQAAgtAVgmQAVgmAkgXQAlgWAvgBQAqAAAhAUQAiASAUAiQAUAhAAArIAAALIgBAKQgBAGgEAEQgEAEgGAAIjMAAQABAQAKARQAJAPARALQARAKAWABQATAAAQgHQAQgFALgIQAGgEAFgBQAGAAAEAFIAhAmQAEADABAHQAAAFgGAFQgUATgeANQgeAMgnAAQgvAAgmgXgAA/gnQgCgXgRgPQgQgQgXAAQgYgBgRARQgRAPgEAXIB4AAIAAAAg");
	this.shape_31.setTransform(823.5,70);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ABSCkQgHAAgEgEQgFgFABgGIAAieQAAgfgQgTQgPgRgdgBQgUABgQAHQgPAIgKAMQgKAMgDALIAACvQgBAIgEAEQgEADgMAAIg6AAQgHAAgEgEQgFgFAAgGIAAkhQAAgGAFgEQAEgFAHAAIAeAAQAFAAADADQADADADAEIAKAdQAGgHAPgLQAPgLAYgIQAWgKAfAAQAyAAAgAWQAfAXAPAkQAOAjAAArIAACZQAAAGgFAFQgEAEgGAAg");
	this.shape_32.setTransform(785.1,69.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhSCRQglgXgWgmQgVgmgBguQABguAVglQAWgmAlgXQAlgWAtgBQAuABAlAWQAlAXAWAmQAWAlAAAuQAAAugWAmQgWAmglAXQglAXguAAQgtAAglgXgAg1g5QgWAWgBAjQABAiAWAYQAVAXAgABQAhgBAVgXQAWgYABgiQgBgjgWgWQgVgXghgBQggABgVAXg");
	this.shape_33.setTransform(745.2,70);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AC7CkQgHAAgEgEQgFgFAAgGIAAieQAAgfgOgTQgQgRgegBQgXABgPAIQgPAIgHAIIgHAJIABAKIAAAUIAACiQAAAGgFAFQgEAEgGAAIg7AAQgHAAgEgEQgEgFAAgGIAAieQAAgfgPgTQgOgRgfgBQgUABgNAHQgOAIgIAMQgIAMgEALIAACvQAAAGgFAFQgEAEgGAAIhBAAQgGAAgFgEQgEgFAAgGIAAkhQAAgGAEgEQAFgFAGAAIAeAAQAFAAAEADQADACABADIALAfQAHgIAPgLQAOgLAWgIQAVgJAdAAQAiAAAZANQAZAMATAYQAHgHAPgLQAQgNAXgIQAXgKAdAAQAzAAAfAWQAeAXAOAkQAOAkAAArIAACYQAAAGgFAFQgEAEgGAAg");
	this.shape_34.setTransform(695.7,69.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhICeQgbgKgMgJQgEgEgCgEQgBgFACgEIAVgsQADgFAFgCQAFgBAGADIALAFQAKAFAQAEQARAFASAAQAMAAAHgEQAIgFAAgLQAAgLgLgIQgMgJgegMQgugRgWgaQgWgZAAglQAAgYAMgWQAMgVAbgOQAZgNApAAQAjAAAZAIQAZAIAMAJQAGADACAGQADAGgDAHIgUAoQgEAGgFAAQgGACgFgCIgKgFQgKgEgPgDQgPgFgPAAQgOAAgHAFQgGAGAAAHQAAALALAGQALAGAVAJQAfALAYAPQAYAOAPAUQAOAUAAAfQAAAbgPAXQgPAVgcANQgdAOgnAAQgogBgbgJg");
	this.shape_35.setTransform(632.2,70);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhpCLQgdgdgBgzQAAgsAhgbQAhgcA9gBQAYAAARAEIARAFQABgfgKgMQgKgNgXAAQgOAAgRACQgRABgPADQgQADgJAEQgIABgFgEQgEgEgCgIIgHgqQgBgJADgFQAEgEAFgCIAUgFQAQgEAYgDQAXgCAZgBQAyAAAbAQQAaARALAgQAKAfgBArIAACtQAAAGgEAFQgFAEgGAAIgdAAQgEAAgDgCQgDgCgDgHIgKgWQgNAOgYANQgXANgkABQgxAAgdgdgAghAbQgOAMAAAUQAAASALALQALAMATAAQAMAAAMgFQALgHAJgHQAIgHADgFIAAgsIgOgFQgNgFgSAAQgXAAgOAMg");
	this.shape_36.setTransform(599.4,70);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AheEPQgkgQgRgaQgQgZAAgaQABgXAKgRQAKgPALgKIARgKIAAgDQgIgCgOgIQgOgKgMgRQgMgSAAgdQAAgXAJgQQAJgRAMgLQAMgLAIgFIAJgGIgFgJQgGgIgGgRQgGgRAAgYQAAgmASgfQASgfAggTQAfgUAnAAICRAAQAHAAAEAEQAFAEAAAHIAAAaQAAAFgDAEQgCAEgEABIgtAOIAIAJQAIAIAIASQAHATABAcQAAAggRAcQgQAdgfASQgeASgrABQgWgBgPgDQgQgCgKgBQgJAAgKAJQgKAHAAAOQAAANAJAGQAJAIAOAAIBlAAQAlAAAeAOQAeANARAZQASAYAAAkQAAAlgTAfQgUAegnAUQgnARg6ABQg6gBgkgQgAgKB4QgOAAgMABQgFACgIAFQgIAEgHAIQgGAJAAALQAAAWATANQASANAhAAQAhgBAUgNQAUgNABgYQAAgHgFgJQgFgJgNgGQgNgHgXAAIgZABgAgli5QgPAPgBAaQABAaAPAPQAQAQAXABQAZgBAPgQQAPgPABgaQgBgagPgPQgPgQgZgBQgXABgQAQg");
	this.shape_37.setTransform(565.3,82);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhNCRQgkgXgVglQgVgnAAguQAAgtAVgmQAVgmAkgXQAlgWAvgBQAqAAAhAUQAiASAUAiQAUAhAAArIAAALIgBAKQgBAGgEAEQgEAEgGAAIjMAAQABAQAKARQAJAPARALQARAKAWABQATAAAQgHQAQgFALgIQAGgEAFgBQAGAAAEAFIAhAmQAEADABAHQAAAFgGAFQgUATgeANQgeAMgnAAQgvAAgmgXgAA/gnQgCgXgRgPQgQgQgXAAQgYgBgRARQgRAPgEAXIB4AAIAAAAg");
	this.shape_38.setTransform(511,70);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgBCkQgGAAgDgCIgFgGIiSksQgDgHADgGQADgGAJAAIBFAAQAGAAADADQAEACACAEIBACVIABAAIBFiVQADgGAFgBQAEgCAHAAIA+AAQAJAAADAGQAEAGgEAHIiTEsIgFAGQgDACgFAAg");
	this.shape_39.setTransform(476.3,70.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhpCLQgdgdgBgzQAAgsAhgbQAhgcA9gBQAYAAARAEIARAFQABgfgKgMQgKgNgXAAQgOAAgRACQgRABgPADQgQADgJAEQgIABgFgEQgEgEgCgIIgHgqQgBgJADgFQAEgEAFgCIAUgFQAQgEAYgDQAXgCAZgBQAyAAAbAQQAaARALAgQAKAfgBArIAACtQAAAGgEAFQgFAEgGAAIgdAAQgEAAgDgCQgDgCgDgHIgKgWQgNAOgYANQgXANgkABQgxAAgdgdgAghAbQgOAMAAAUQAAASALALQALAMATAAQAMAAAMgFQALgHAJgHQAIgHADgFIAAgsIgOgFQgNgFgSAAQgXAAgOAMg");
	this.shape_40.setTransform(441.5,70);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhWEUQglgNgWgOQgWgPgIgIQgGgFgCgFQgBgFAFgJIAdgyQAFgIAIgBQAIgBAFAFIAWAOQATALAbAMQAbALAbABQAeAAAVgSQATgRABgaQAAgfgagXQgZgXgxgUQgngOgigXQgigVgVgiQgWghgBgvQAAgkATgjQASgjAogXQAogXA/gBQAoABAiAKQAhALAWAMQAWANAIAGQAGAEACAJQABAHgEAHIgeAtQgFAIgIADQgIADgHgEIgWgNQgSgLgYgKQgZgJgWgBQgWAAgQAJQgQAIgIANQgIANAAANQAAAcAXAVQAXAVAvAUQAoAPAmAXQAmAVAZAjQAaAjABAzQgBAqgWAkQgWAkgqAWQgpAWg4AAQgyAAgkgMg");
	this.shape_41.setTransform(404.1,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextBoi, new cjs.Rectangle(0,0,1281.4,174.1), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApzXfMAAAgu9ITnAAMAAAAu9g");
	this.shape.setTransform(62.8,150.3,1,1.456);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,-68.5,125.6,437.8), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.thing();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.635,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,67.9,381), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Waveback();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,297,275), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Wavefront();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,297,275), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzXJPIAAydMAmvAAAIAASdg");
	this.shape.setTransform(124,59.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,248,118.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Car();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,2197,1172), null);


(lib.returnbutton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.returnbutton();
	this.instance.parent = this;

	this.instance_1 = new lib.returnbuttonhover();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,95);


(lib.GasCan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JerryCan();
	this.instance.parent = this;
	this.instance.setTransform(2.9,0,0.676,0.676,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GasCan, new cjs.Rectangle(0,0,286.9,393), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjdYQMAAAgwfIG7AAMAAAAwfg");
	mask.setTransform(-0.8,119.5);

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(76.4,137.5,1,1,0,0,0,148.5,137.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:70},0).wait(1).to({x:63.7},0).wait(1).to({x:57.3},0).wait(1).to({x:51},0).wait(1).to({x:44.6},0).wait(1).to({x:38.2},0).wait(1).to({x:31.9},0).wait(1).to({x:25.5},0).wait(1).to({x:19.2},0).wait(1).to({x:12.8},0).wait(1).to({x:6.5},0).wait(1).to({x:0.1},0).wait(1).to({x:-6.3},0).wait(1).to({x:-12.6},0).wait(1).to({x:-19},0).wait(1).to({x:-25.3},0).wait(1).to({x:-31.7},0).wait(1).to({x:-38.1},0).wait(1).to({x:-44.4},0).wait(1).to({x:-50.8},0).wait(1).to({x:-57.1},0).wait(1).to({x:-63.5},0).wait(1));

	// Layer 2 copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjdYQMAAAgwfIG7AAMAAAAwfg");
	mask_1.setTransform(-0.8,119.5);

	// Layer 3
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100,115,1,1,0,0,0,148.5,137.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-91.6},0).wait(1).to({x:-83.3},0).wait(1).to({x:-74.9},0).wait(1).to({x:-66.6},0).wait(1).to({x:-58.3},0).wait(1).to({x:-49.9},0).wait(1).to({x:-41.6},0).wait(1).to({x:-33.3},0).wait(1).to({x:-24.9},0).wait(1).to({x:-16.6},0).wait(1).to({x:-8.2},0).wait(1).to({x:0.1},0).wait(1).to({x:8.4},0).wait(1).to({x:16.8},0).wait(1).to({x:25.1},0).wait(1).to({x:33.4},0).wait(1).to({x:41.8},0).wait(1).to({x:50.1},0).wait(1).to({x:58.5},0).wait(1).to({x:66.8},0).wait(1).to({x:75.1},0).wait(1).to({x:83.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-22.5,44.4,297.2);


// stage content:
(lib.Untitled4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.dragMe.addEventListener("mousedown", mouseWasDown.bind(this));
		document.body.addEventListener('mouseup',mouseUp,false);
		
		stage.on("stagemousemove", function(e){ mouseMove(e); });
		stage.on("stagemousedown", function(e){ mouseDown(e); });
		
		var block = exportRoot.dragMe;
		
		var iXMouse;
		var iXCurr;
		var bCanMove = false;
		var bFilling = false;
		var iFuel = 0;
		
		var aWaterFill = new Audio('sounds/water.mp3');
		aWaterFill.loop = true;
		aWaterFill.play();
		aWaterFill.volume = 0;
		console.log(aWaterFill);
		
		exportRoot.dragMe.cursor = "pointer";
		
		function mouseDown(e)
		{
			iXMouse = e.stageX;
			
			createFillEffect(); 
		}
		
		function mouseWasDown() {
			if (this.currentFrame == 34) {
				bCanMove = true;
			}
		}
		
		function mouseUp()
		{
			bCanMove = false;
		
			//console.log("Block Coordinates:");
			//console.log(block.x);
			//console.log(block.y);
		}
		
		function mouseMove(e) 
		{
				var iCost = 0;
			
			if (bCanMove) {
				iXCurr = e.stageX;
				
		//		block.x = e.stageX;		
				
				
				if ((e.stageY>241)&&(e.stageY<580)) {
					block.y = e.stageY+200;
					//console.log(e.stageY);
				}
				
				//if ((e.stageY<440)&&(e.stageY>241)) {
				if ((e.stageY<320)&&(e.stageY>242)) {
					block.rotation = (e.stageY/2)+200;
				} else {
					console.log(block.rotation);
				}
				
				if (e.stageY>325) {
					block.rotation = 360;
				}
				
				if (e.stageY<245) {
					console.log("Filling up");
					bFilling = true;
					aWaterFill.volume = 1;
				} else {
					bFilling = false;
					aWaterFill.volume = 0;
				}
				
				
				//console.log(block.rotation);
				//console.log(e.stageY);
			}
		}
		
		var fillingObject = fill.bind(this);
		function createFillEffect(){
			createjs.Ticker.addEventListener("tick", fillingObject);
		}
		function fill() {
			if (bFilling==true) {
				console.log(bFilling);
				//exportRoot.waveMask.scaleY-= 0.01;
				//exportRoot.fillBar.y = 430-(iFuel);
				exportRoot.fillBar.y = 550-(iFuel);
				
				console.log(exportRoot.fillText.text);
				//exportRoot.fillBarBase.y =626-iFuel;
				console.log(iFuel);
				if (iFuel>200) {
					//iFuel = 0;
					//this.play();
					createjs.Ticker.removeEventListener("tick", fillingObject );	
					aWaterFill.loop = false;
				} else {
					iFuel++;
					//aWaterFill.volume = 1;
					exportRoot.fillText.text = "R"+((iFuel-1)*3)+"."+(Math.floor(Math.random() * 89));
					localStorage.setItem("15018394-fuel",iFuel);
				}
			}
		}
		var aOfficeNoise = new Audio('sounds/roomNoise.mp3');
		var aClick = new Audio('sounds/click.mp3');
		var aCar = new Audio('sounds/carSound.mp3');
		aOfficeNoise.play();
		aCar.play();
		
		this.backToMain.addEventListener("click", buttonClicked.bind(this));
		
		function buttonClicked()
		{
			aClick.play();
			this.play();
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		window.open("index.html","_self");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(10).call(this.frame_44).wait(1));

	// Layer 7
	this.instance = new lib.TextBoi();
	this.instance.parent = this;
	this.instance.setTransform(1830.2,234.5,1,1,0,0,0,640.7,161.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:641.5,regY:99.1,x:1796,y:171.8},0).wait(1).to({x:1761},0).wait(1).to({x:1726},0).wait(1).to({x:1691.1},0).wait(1).to({x:1656.1},0).wait(1).to({x:1621.1},0).wait(1).to({x:1586.1},0).wait(1).to({x:1551.1},0).wait(1).to({x:1516.2},0).wait(1).to({x:1481.1},0).wait(1).to({x:1446.2},0).wait(1).to({x:1411.2},0).wait(1).to({x:1376.2},0).wait(1).to({x:1341.2},0).wait(1).to({x:1306.3},0).wait(1).to({x:1271.2},0).wait(1).to({x:1236.3},0).wait(1).to({x:1201.3},0).wait(1).to({x:1166.3},0).wait(1).to({x:1131.3},0).wait(1).to({x:1096.3},0).wait(1).to({x:1061.4},0).wait(1).to({x:1026.3},0).wait(1).to({x:991.4},0).wait(1).to({x:956.4},0).wait(1).to({x:921.4},0).wait(1).to({x:886.4},0).wait(1).to({x:851.4},0).wait(1).to({x:816.4},0).wait(1).to({x:781.5},0).wait(1).to({x:746.5},0).wait(1).to({x:711.5},0).wait(1).to({x:676.5},0).wait(1).to({x:641.5},0).wait(1).to({x:508.9},0).wait(1).to({x:376.3},0).wait(1).to({x:243.7},0).wait(1).to({x:111.1},0).wait(1).to({x:-21.5},0).wait(1).to({x:-154.1},0).wait(1).to({x:-286.5},0).wait(1).to({x:-419.3},0).wait(1).to({x:-551.9},0).wait(1).to({x:-684.5},0).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1114.2,256.3,1,1,0,0,0,62.8,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 15
	this.fillText = new cjs.Text(" R0.00", "85px 'Brandon Grotesque Black'", "#EF765B");
	this.fillText.name = "fillText";
	this.fillText.lineHeight = 124;
	this.fillText.lineWidth = 297;
	this.fillText.parent = this;
	this.fillText.setTransform(1174.9,108,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.fillText).wait(45));

	// Layer 14
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1347,296.5,1,1,0,0,0,34,190.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({x:1332},0).wait(1).to({x:1316.9},0).wait(1).to({x:1301.9},0).wait(1).to({x:1286.8},0).wait(1).to({x:1271.8},0).wait(1).to({x:1256.7},0).wait(1).to({x:1241.7},0).wait(1).to({x:1226.6},0).wait(1).to({x:1211.6},0).wait(1).to({x:1196.5},0).wait(1).to({x:1181.5},0).wait(1).to({x:1166.4},0).wait(1).to({x:1151.4},0).wait(1).to({x:1136.3},0).wait(1).to({x:1121.3},0).wait(1).to({x:1106.2},0).wait(1).to({x:1091.2},0).wait(1).to({x:1076.1},0).wait(1).to({x:1061.1},0).wait(1).to({x:1046},0).wait(1).to({x:936.6},0).wait(1).to({x:827.1},0).wait(1).to({x:717.7},0).wait(1).to({x:608.3},0).wait(1).to({x:498.9},0).wait(1).to({x:389.4},0).wait(1).to({x:280.1},0).wait(1).to({x:170.6},0).wait(1).to({x:61.1},0).wait(1).to({x:-48.3},0).wait(1));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkBakMAAAg1HIIDAAMAAAA1Hg");
	mask.setTransform(1045.8,311.1);

	// Layer 8
	this.fillBar = new lib.Symbol4();
	this.fillBar.parent = this;
	this.fillBar.setTransform(1468,565.2,1,1,0,0,0,148.5,137.5);
	this.fillBar._off = true;

	var maskedShapeInstanceList = [this.fillBar];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fillBar).wait(14).to({_off:false},0).wait(1).to({regX:-0.8,regY:126.1,x:1305.1,y:553.8},0).wait(1).to({x:1291.4},0).wait(1).to({x:1277.8},0).wait(1).to({x:1264.1},0).wait(1).to({x:1250.5},0).wait(1).to({x:1236.8},0).wait(1).to({x:1223.2},0).wait(1).to({x:1209.5},0).wait(1).to({x:1195.9},0).wait(1).to({x:1182.2},0).wait(1).to({x:1168.6},0).wait(1).to({x:1154.9},0).wait(1).to({x:1141.3},0).wait(1).to({x:1127.6},0).wait(1).to({x:1114},0).wait(1).to({x:1100.3},0).wait(1).to({x:1086.7},0).wait(1).to({x:1073},0).wait(1).to({x:1059.4},0).wait(1).to({x:1045.7},0).wait(1).to({x:935.9},0).wait(1).to({x:826.1},0).wait(1).to({x:716.3},0).wait(1).to({x:606.5},0).wait(1).to({x:496.7},0).wait(1).to({x:386.9},0).wait(1).to({x:277.2},0).wait(1).to({x:167.3},0).wait(1).to({x:57.5},0).wait(1).to({x:-52.3},0).wait(1));

	// Layer 5
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(648,940.9,1,1,0,0,0,124,59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(38));

	// Layer 4
	this.backToMain = new lib.returnbutton_1();
	this.backToMain.parent = this;
	this.backToMain.setTransform(657,952.5,1,1,0,0,0,115,47.5);
	new cjs.ButtonHelper(this.backToMain, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.backToMain).to({_off:true},35).wait(10));

	// Layer 1
	this.dragMe = new lib.GasCan();
	this.dragMe.parent = this;
	this.dragMe.setTransform(1572.2,384,1,1,0,0,0,-145.6,-159.3);
	this.dragMe._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dragMe).wait(10).to({_off:false},0).wait(1).to({regX:143.4,regY:196.5,x:1832.8,y:739.8},0).wait(1).to({x:1807.1},0).wait(1).to({x:1783.9},0).wait(1).to({x:1762.8},0).wait(1).to({x:1743.8},0).wait(1).to({x:1726.6},0).wait(1).to({x:1711},0).wait(1).to({x:1696.9},0).wait(1).to({x:1684},0).wait(1).to({x:1672.4},0).wait(1).to({x:1661.8},0).wait(1).to({x:1652},0).wait(1).to({x:1643.1},0).wait(1).to({x:1634.8},0).wait(1).to({x:1627.2},0).wait(1).to({x:1560},0).wait(1).to({x:1414.8},0).wait(1).to({x:1277.4},0).wait(1).to({x:1146.7},0).wait(1).to({x:1021.3},0).wait(1).to({x:900.2},0).wait(1).to({x:783},0).wait(1).to({x:668.4},0).wait(1).to({x:556},0).wait(1).to({x:445.2},0).wait(1).to({x:335.6},0).wait(1).to({x:226.8},0).wait(1).to({x:118.4},0).wait(1).to({x:10.7},0).wait(1).to({x:-97.2},0).wait(1).to({x:-204.5},0).wait(1).to({x:-312.3},0).wait(1).to({x:-419.6},0).wait(1).to({x:-527.3},0).wait(1));

	// Layer 3
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2579,369,1,1,0,0,0,1098.5,586);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(1).to({x:2447.9},0).wait(1).to({x:2316.9},0).wait(1).to({x:2185.8},0).wait(1).to({x:2054.7},0).wait(1).to({x:1923.6},0).wait(1).to({x:1792.6},0).wait(1).to({x:1661.6},0).wait(1).to({x:1530.4},0).wait(1).to({x:1399.3},0).wait(1).to({x:1268.3},0).wait(1).to({x:1137.2},0).wait(1).to({x:1006.1},0).wait(1).to({x:875.1},0).wait(1).to({x:744.1},0).wait(1).to({x:612.9},0).wait(1).to({x:481.8},0).wait(1).to({x:350.8},0).wait(1).to({x:219.7},0).wait(1).to({x:88.8},0).wait(1).to({x:-42.5},0).wait(12).to({x:-158.4},0).wait(1).to({x:-274.3},0).wait(1).to({x:-390.2},0).wait(1).to({x:-506.1},0).wait(1).to({x:-622},0).wait(1).to({x:-737.9},0).wait(1).to({x:-853.6},0).wait(1).to({x:-969.7},0).wait(1).to({x:-1085.6},0).wait(1).to({x:-1201.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1164,549.5,1946.9,962.6);
// library properties:
lib.properties = {
	width: 1280,
	height: 1024,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Car.png", id:"Car"},
		{src:"images/JerryCan.png", id:"JerryCan"},
		{src:"images/returnbuttonhover.png", id:"returnbuttonhover"},
		{src:"images/returnbutton.png", id:"returnbutton"},
		{src:"images/thing.png", id:"thing"},
		{src:"images/Waveback.png", id:"Waveback"},
		{src:"images/Wavefront.png", id:"Wavefront"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;