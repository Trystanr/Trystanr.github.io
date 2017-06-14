(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1769,
	height: 1366,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/background111.png", id:"background111"},
		{src:"images/doorClosed.png", id:"doorClosed"},
		{src:"images/doorOpen.png", id:"doorOpen"},
		{src:"images/firstAid1.png", id:"firstAid1"},
		{src:"images/firstAid2.png", id:"firstAid2"},
		{src:"images/Hoveroverobjectstolearnaboutzombiesurvival.png", id:"Hoveroverobjectstolearnaboutzombiesurvival"},
		{src:"images/windowOpen.png", id:"windowOpen"},
		{src:"images/windowOpen2.png", id:"windowOpen2"},
		{src:"images/windows.png", id:"windows"},
		{src:"images/windowtext.png", id:"windowtext"},
		{src:"images/zombieinfection.png", id:"zombieinfection"},
		{src:"images/zombiesurvivalkit.png", id:"zombiesurvivalkit"},
		{src:"images/zombie.png", id:"zombie"},
		{src:"images/zombie2animate.png", id:"zombie2animate"},
		{src:"images/zombie3animate.png", id:"zombie3animate"},
		{src:"images/zombie4animate.png", id:"zombie4animate"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.background111 = function() {
	this.initialize(img.background111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1769,1366);


(lib.doorClosed = function() {
	this.initialize(img.doorClosed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,550);


(lib.doorOpen = function() {
	this.initialize(img.doorOpen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,550);


(lib.firstAid1 = function() {
	this.initialize(img.firstAid1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,279);


(lib.firstAid2 = function() {
	this.initialize(img.firstAid2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,241);


(lib.Hoveroverobjectstolearnaboutzombiesurvival = function() {
	this.initialize(img.Hoveroverobjectstolearnaboutzombiesurvival);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1048,107);


(lib.windowOpen = function() {
	this.initialize(img.windowOpen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,236);


(lib.windowOpen2 = function() {
	this.initialize(img.windowOpen2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,363);


(lib.windows = function() {
	this.initialize(img.windows);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,697,715);


(lib.windowtext = function() {
	this.initialize(img.windowtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,281);


(lib.zombieinfection = function() {
	this.initialize(img.zombieinfection);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1531,199);


(lib.zombiesurvivalkit = function() {
	this.initialize(img.zombiesurvivalkit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1801,199);


(lib.zombie = function() {
	this.initialize(img.zombie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,165);


(lib.zombie2animate = function() {
	this.initialize(img.zombie2animate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,166);


(lib.zombie3animate = function() {
	this.initialize(img.zombie3animate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,179);


(lib.zombie4animate = function() {
	this.initialize(img.zombie4animate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,213);


(lib.doorbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.doorClosed();

	this.instance_1 = new lib.doorOpen();
	this.instance_1.setTransform(-0.1,-5.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EEB8").s().p("AKYduIhVgmQiCg7iPgVQiOgViNATQglAGi0AnQiGAdhWAAQhUABhngWQg+gOh4gkQhsghgBg8QAAgdAdggQAkgkAOgUQAhgvgLhIQgHgzgghLQhXjFgbhaQgzikAOiHQAHhDAhhvQAmh/AJgyQAMhBAEhfQADhrADg2QAFhbASiGIAfjiQAjkSgYiyQgVh3gJg8QgOhpANhKIAeh0QAQhFgJgwQgIgkgbgtQgggzgOgbQgYgsgDgrQgDgxAcggQASgVAjgLQAUgHArgGIMLhvIAAABQCMgUCOAPQCOAOCFAwIBQAdQAvAOAlgBIAsgBQAaAAARAIQAnAUADA/QACAlgFBMQACAqAVAxQAMAcAgA3QAdA0ANAhQATAxgBAqQgDAxghAlQgjAogtgEQBAFkghFiQgGBDgPCGQgMB2AEBTIAKB+QAHBOgDAyQgDAigQBbQgOBPABAvQAAAzAQBKIAbB8QAPBaAAB3QgBAugIClQgNEMAsCRIAVBHQAKApgCAfQgDAngYAeQgbAggjgCQAGAsgnAjQgmAhgwABIgCAAQgnAAgxgSgAF36OIBGgEQgegKgQgBQgLAAgCAGIAAgBg");
	this.shape.setTransform(216.8,265.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,492,550);


(lib.zombie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombie();

	this.instance_1 = new lib.windowtext();
	this.instance_1.setTransform(87.8,-551.8,1.195,1.195);

	this.instance_2 = new lib.zombie3animate();
	this.instance_2.setTransform(265.3,-81.4);

	this.instance_3 = new lib.zombie4animate();
	this.instance_3.setTransform(-56.9,-35.7,0.939,0.939);

	this.instance_4 = new lib.zombie2animate();
	this.instance_4.setTransform(70.5,-38.8);

	this.instance_5 = new lib.zombie();

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.windows, null, new cjs.Matrix2D(1,0,0,1,-423.7,-437)).s().p("Ap+MDQgkgJgYgaQgXgZgGglQgGgkAPgfQALgZAfgeQAmgmAKgOQgvgFgggoQgggoAFguQADgdAUgkQAZgoALgVIAXgxQAOgeAMgRQAOgUAagZIAsgrQAWgWBAhWQAzhGAsgfQALgIAzgdQAngWAUgUIAvg+QAcgjAegFQg/AFgigHQgYgGgTgOQgWgQgJgVQgKgXAFgbQAFgZAQgXQAXggA4gfQArgZBngsIFqiZIABAEQAwgIAsAMQAwAOAbAjQATAcAHArQAEAbAAAzIgDJiQAAASABAIQADAPAIAIQAKAMAVACIAlADQAdAEAXASQAXASAKAaQAKAbgGAdQgGAdgTAVQAdgCAbAQQAaARALAaQALAbgHAeQgIAfgXASQgYAVg7AMIwEDcQg5AMgbANIgmAYQgXAPgQAGQgTAHgUAAQgPAAgOgDgAAdi+QgVAYgcASQgaAPgJAKQAagGAdgXQAegVAMgXQgJAAgEAGg");
	this.shape.setTransform(75.2,79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,165);


(lib.firstAid2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firstAid2();

	this.instance_1 = new lib.firstAid2();

	this.instance_2 = new lib.zombiesurvivalkit();
	this.instance_2.setTransform(-362.5,-468.3,0.779,0.779);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqIN0QgYgNglghIifiUQgYgXgPgLQgYgQgXgDQgOgCgZACQgbADgMgBQhKgFg6hoQgcg1gJgrQgIgnADgyQABgPAHhLQANiFgLlSQgLksAfiqQAHgiAIgVQALgeARgSQAjgjA2AJQA3AIAVAsQBpghA3gOQBagXBJgIQArgFA5gBIBkAAQAyAAAoAEIApAEQAYACARgEQAEgBAhgLQAXgIAPADQAQACAiAXQAeAUATgCQARgDAPgQIAZgfQANgRARgIQASgKAPAKIAFgGQAsgEAXAAQAlABAbAKQAhAMAUAcQAVAegFAfQAugYAogEQAygFAcAdQARARAHAeQAEATACAkIATFTQAFBfAAAwQABBPgKA/IgEAjQAAATAGANQAIAQATAOQALAIAZAMIFdCeQA4AZAdAQQAuAZAhAbQANAKAfAfQAbAZASAOIAzAkQAdAVAMAWQAWAkgNAsQgNAsgmASQgUAKghAEIg3AHQgQADgaAIIgpANQg3AQhQgDQhbgIgugCQijgIjLAvQhwAbjzBPQhXAcgzALQhNAQhBgCQg5gGgdgBQgygCgiAOQgIADgnAXQgdARgVADIgNABQgbAAgdgRg");
	this.shape.setTransform(131.2,111.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2,p:{x:-362.5,y:-468.3}}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.instance_2,p:{x:-362.5,y:-468.3}}]},1).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.instance_2,p:{x:-389.5,y:-819.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338,241);


(lib.firstAid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firstAid1();

	this.instance_1 = new lib.zombiesurvivalkit();
	this.instance_1.setTransform(-324.5,-472.3,0.779,0.779);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.windows, null, new cjs.Matrix2D(1,0,0,1,-523.1,-463.3)).s().p("AHOL1QgpgEgcgiQgdgjAKgmQgtgTgYguQgYgvALgwIgpAEQADAegPAbQgOAbgaANQgaAOgegDQgfgEgWgSIgXgWQgOgNgMgFQgYgHgnASQg+AdgVAIQgvATgmAIQgtAJhSACQhaABglAFIhaATQg2ALgkgCQgogCglgQQglgPgcgbQgzgvgbhRQgSg1gOhjQgTiCgFg7QgKhqAHhSIAFg/QABglgEgaQgDgQgMgrQgKglgBgWQgCgdALgzQANg3ABgYIgCgwQAAgdAJgSQAKgUAYgPQASgKAegLIAxgPIAHgLQAOgNAigQQAjgSAOgLIARgNQALgHAJABIAAgEQAXADAEABQAPAIACAMQACAKgHALIgCAFQA7gLA/gHQCNgQDagFIFogJQDPgJCYgcIAAACQA4ADAyAUQA1AVAmAlQAnAoASA0QASA2gKA1QgEAWgOAmQgPApgEASQgJAmACBCIAEB7QAABHgJAzIgHAkQgDAVAEAQQAEAQAOAXQASAdAEAIQALAaACAqQACA8ACAJQAEAeAVA4QAVA4AFAdQAHAvgYAqQgaAsgrgCQgTgBgXgNQgbgPgNgHQgXgLgWABQgZABgMAQQgIALgBAUIgCAhQgGArg0AqQhFA5g+AAIgPgBg");
	this.shape.setTransform(174.6,105.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,279);


(lib.boardOpen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.windowOpen2();

	this.instance_1 = new lib.zombieinfection();
	this.instance_1.setTransform(-584.3,150.5,0.839,0.839);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E8264").s().p("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");
	this.shape.setTransform(283.5,187.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.windowOpen2, null, new cjs.Matrix2D(1,0,0,1,-283,-181.5)).s().p("EgsNAcWMAAAg4sMBYbAAAMAAAA4sgAjVa8IACADQADACgBAFQALAJASAGIAEABQAHAFALAAQAlAuBvgfIAEgDQACgDAEABQAhglAPg2QABgEABgFIAAgKQgWgxgegnIgEgFQgDgCAAgGQghgGgYgRIgFgEQgCgCgFgBQgBgdgFgdIgCgEQgDgDAAgFQASgggNg5IgCgDQgDgDAAgFQAShrgNiEIgCgDQgDgCAAgGQARgHgLgfIgDgEQgDgDAAgEQAFgKAJgEQAQgHAUAFQABAAgBAGQAFgBADgCIAEgEQAJgDAJAAQB9AFCPAEQAPAAAOgEQACAAAAgFQAOgBAOAFQABAAABAGICMgJQATgCAUAFQABAAAAAGQBQgFBGgBIACABQAHAFALAAQgBgGACAAQAOgFANAFQACAAgBAGII7gKQATgBAUAFQABAAAAAGQCqgGC0AAIABABQAIAFAKAAQABgGABAAQAOgFANAFQABAAAAAGQALAAAHgFIAFgCQAHgDALAAIKAAJQATAAATgEQABAAAAgFQC4AOCSgNQAKgBAIgFQACgBAAgEIAAqoIAA/EQAAgFgCgDQgDgDgFABIAAgGUgrIgAEgrFAAEIAAAGQgSEGABEgQAHPjAAPhIAAAJIAAAKQAVAJAEAWIgDACQgCACgBAGQgZAdgEAzQgBAFADACQADADAFAAQU5AFUWAJIAAAGIAAAKIAAGuIAAAKIAAAKQgKAKgHALQgDADABAFIAAAKQgLAJgSAGIgEABQgHAFgLAAQgPATgNAWIgEAGQgDADgEgBIAAA9IAAAKIAAAJIABAAQAPAAgBAUgAhtafQABgFgCgBQgwgRAdgwIBHAKQAEAAABACQAOAigJAFQgGAXgcAAQgMAAgPgDgEAqqAOIIAEAAQgEArgCAAQgBAAADgrgAk+MHQgLgUgeAAIgKgKQgdgagBg2QABgGACgDQAMgRAPgPIABgTQAViyAJjAIgKgLQgogtAJhfIALgJQAYgQAQgYQAAgKABgKQAWhegXhfQAEgFAEgGQAVgrAKg4QABgJgEgJQgKgcgHgiQgZAKgjAAIgngdQg0AfgwgfQgBgFgCgDQgsgiAlAzIgBAUQgHDaA5DJQAKAAADADQASAkAAAzQgGAFgCAFQgHAUgQAJIgBAVQgMCFAhBXQAAAJgEAJQgIAPACAbQAAAJAEAJQAZA6gTA1QABALAEAHQANAegHA0QguAZgiAkQg3ANgZgNQgGgFgFgEQgRgJAIghQAEAAADgCQAugnAlgxIAAgUQgCjYgTjMIgEAAQABgUgRAAIABgTQADgxgOggQABgEABgBQAhgKAFgiQAAgLgEgHQgFgMgLgJIgBgTQgQiEggh3QAFgEAAgGQAEgiABgkIgJgLQgUgdgCgyIA8gdQAFgFAAgEQgIgiADgvQgLgKgSAAIAAgKIAAgfQAbgtA/AZIAnAeQAGgFAAgFQAMhcgShDQgYAyhCAJQABgKgDgJQgIgegTgVQAAgKgCgJQgUhUAChrQgGAFAAAGQgNCWgqB3QAAAKgBAKQgpCxhXCGQAAAKgDAJQgHAaAKAjQAAAEgCAFQgdBGgxAyQgBgKAFgGQAtg/AAg8QAAAFgBAEQglBIg0A6QAAgKAGgDQAagUgBgvQgGAGgCAGQgWAwgVAAQgEgEAAgCQAfgrgkAKQAAgKACgKQANgoAYgeQgbgEgMgHQAsgeA3gTQgEgFgCgGQgJgjAZgFQABgJACgKQAbhgAyh8QAAgGgBgEQgEgLgEgKIAEAAQgBgUAQAAIAAgTIAAgeQAFgGAGgBQAfgMgBgpQgGgFABgEQAciJgDh8QAqgcAHghQAngfBSAVQAsgUAPgyQAAgJgEgHQgTgZgQgcIAAgLIAAgeIgLgJQgTgMAAgcQAEgGAAgFQAAhLAagtQAFAAAEgBQAUgKAKgSQBJgHAwARQAFAFACAFQANAdATAVIAAAUQgBApALAdQAAAFgBAEQgcBCgpA2QgFAFABAEQAFAbAKAZQBEAfBlgCQAAAFACABQAhAIgYAaQAAAGACAAQAbAPAKAdQADBAAIA4QArEVBpDWIAAATIAAAzIAJABQAXAGgDAgQAfAUAoAKQAoAWg8AJQAEAEABAHQAFASAKAKIgKAAQAGArAXAlQgrANgbggIgEgGQAFAZAJAeQgJAAgDgDQgdhBgmg0IAAAUIAAAzQgGgGgBgFQgRg2gPg4QABgJAEgHQANgVgIgqIgJgLQhJhmgciTQgEgGgDgGQg7iFAQimIgEgEQgLBjAFBBQgFAFgDAGQgYAqgbAlQgpABgKgeQgsgWgaAMIgBAUQgGBSARA5QAiAJAkgnQA4AMAOgfQAFAFACAFQAGAcAHAVQgIAlgpAEQgBAKgFAFQgMAMAIAhQAdAyAygLQAGAFgBADQgaA5gcA3QAAAKADAJQAJAYAHAbQgFAFgCAGQhADQAWDSQAFAEgBAFQgDAlgWAYQAGAEAAAGQACCigcCJQAAALACAJQAOA3AEBCQAGAFAGADQAuAdAWA1QgZAdgiAAQgbAAghgTgAAbEAQgWgXAtgdQAcAHALAYQAkgLAYgUQAKAAAHAFQAXAQAVgKQAYAaAugaQAAAEACAFQAHAPALgjQA5AUA1ABIgeAUQgnAAgfgUQgjAMgaASQg3gMgjgSQgjAKgYAUQgVgFgKgPIgnAdQgBgFgCgDgAiKDhIBQAKQAAAEgBABQgvAMgWAAQghAAAXgbgAzFAlQghgjgFAhQgJgBgDgEQgXgqAjgLQALAAADAEQAKAMARgQQAFAFADAFQALAUAAgeQAZAXAkgXQAYAgBCgXQALAKASAAQAVgkAUAkIgfASQgaACgNgMQgRAOgYAGIgegUQgEABgEACQgQAOgPgZQgRAlgrAMQgBgFgCgDgAtRgEQABgEABgCQATgIATgFIAyAJQgfAPgbAAQgRAAgPgFgAMfo9QgFgBgEACQgVAIgTgoQgGABgBACQgLAagXAMIgnAJQgEgfglACQgXAwgagmQgagqAkALQAMA6ARg6QAygFALAkQAJAAAHgGQAYgTAUgaQAJABACADQAXA1AjglQAdgBApAgQABgGACgCQATgZAJANQA9AdBYgoIAUAVIApAAQAKgPATgGQAwgFAXAaQAUgFAJgQQArAOAvgOQAtATBBAHQgyAAg8APQhmgkieAkIgUgUQhXAlg0gbQgiAGgaANQghgygcAfgAC1pDQA/gPBCgKQAZABAXAEIAEADQACADAGAAQhqgBhVAVQAAgGACAAgEgjdgJmQgOAmgjgcQgPAQgaAFQgcgLg0gKQgQAEgrgEQAAgFABAAQAVgGAbgdQAXAcAmAMQADgaAagEQAQAaBAgGQAVglAUAlQAFAAAEACQAfAJATgVIAKAAQAUgCAfAMQAMAXAwghQAUAeAdgeQABAGACABQAiAWAigdQBKAXBWgDQAZgrAiAXQgrA/glggQhBANgtgNQABAFgDACQgSAQgTgXQgUAmgpgmQgLAIgSACQgMgTgdgCQgHAcggADQg1gYhigRgA2fqEIABgFIC+gYIAKAEQhHAehIAAQgcAAgegFgA35v/IABgGQCbgOCbgLQAEAGAGAAIBFAJIABAGQi1AKiWAAIg8AAgEghGgQTQgiAPgbgPQgbAYgMgjQgvAVgOgfQgEAAgFgBQgfgJgUAUQgegJgTgVQgUA+g9gqQAAAGgCABQgZAUgXgbQglAug/gZQgTgwAdARQATAaAzgGQABgJAEgIQAPgbAVAOQARALAqAJQALAAAFgEQAUgQAPgTQAKAAABADQATApAegjQAZgLAiApQAsgWARAgQAhgfAQAfQAogjAUAuQAFgBACgCQAZgzAJA2QAmgoBIAdQAEABABACQAOAbAKgTQA3AThUABIgUgUIg8AAIgUAUQgLgKgUAAQgLAKgJAAQgMAAgHgUgAIFz4QgJgLgSAAQgDApghgXQgLgHAGgVQAJgNAWAAIAdADIAkAVQAEADALgEQgJghAfAWQAlAbAVgkQAdAAAQAKQAWALACgVQAPAFAQACQATADALAKQADgXAXALQAPAHAdgPQAJAEAIAIIAFAFQADACAEABQBTgoBOAoQAFAAAEgCQAjgTAugJQAagDALAGQAdAOAEAgQgVgEgQgLQgJgEgFgKQhBAJg2AUQgFgKgFAAQhPAEhvgNQgLAdgNgRQgGgHgLgFQgDARgPgFQgMgCgJgKQhNgHgiAaQgTgFgTgIQgOgHgbAUQgFAIgGAAQgJAAgNgQgAhE0DIAAgGQBagCBDgWQAjAAAjAEIAAAGQAAAEgBAAQheARhQAAQgbAAgZgBg");
	this.shape_1.setTransform(283,181.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjLdcQhUgJgjibIhZmFQgZhygHg8QgLhiARhMQpGgspJBGQg9AHghgBQg1gCgjgWQgqgYgJg0QgKg1AmgZQlBBhlfBoQhBATglAFQg6AHgsgSQhCgagyheQg5hrgKh9QgKh+AnhzQgqAOgsgbQgpgagRgtQgPgnAAg0QABghAJg7IDg4TQg/gVgigPQg0gYgigfQgpglgQgxQgSg2ATguQASgsAygdQAlgWA9gSQDZg8EigBQCVgBFwAbUAi/ACkAivgECIAIAcQBHgOApgDQA9gFAxANQA5APAmAqQAqAtgCA2QgBAwgqA4Qg1A9gXAgQgyBGgHBaQgIBbAmBNQAsgQAjAsQAjArgJAxQgGAogfAwQglA2gRAbQg6BhgMCMQgIBaAMClIA3MCQALCRgNBWQgTB+hJBHQhGBFh7ASQhNAMiTgHQrpglqSBSQk8AngkADQjKARiXgUQgVDLgdB/QgpCyhKCDQhGB7hkBeQg+A4gyAAIgIAAgAAWR3QAAAggBAQQgDAcgMAoQALgGADgXQAIgjABgTQACgLgBgVQAAgWABgKQABgMAGgbQAGgaABgOIABglQABgXAEgOIgdgEgAjBOzQgDAEgOAKQgLAHgEAHQgFAJACAPIAABKQABAdgGAOIgIATQgEALAAAVQAAATADAJQACAOAMAHIAHgEIALg4QAFgYAAgOQAAgYACgMQABgIAFgOIAIgWIABgXQAAgOADgIIAKgYQAFgPgDgKIgHgBQgIAAgFAEgAD/IvQpVASosAuIIJgMID9gIQCOgFBsgGQBUgEA2gGQBMgJA9gOIiSgBgEgkFAGAIABABIhFByQANgDANgPIBGhGIgUgfQgGAAgCAEgAG9DvIhYADQBoACAugFIg+gBgEAiCAA5QgeAzgUAnQBIACAlgOIAAhSIgtAAQgLAAgDAEgAXnjvQgUAGgmAPQgnAPgUAGQB2gBCGgNQAOgBAJgDQAKgGAGgHIAQgQQAIgHgEgFQgBgEgKAAIg/AAQhTAKglALgAqdkIQBXgEBZgPQgNgDgOgBQhUAJhBAOgArbsxQgRAAgFAJQBjAABvgIQATgCAIgGIhuAAgAkjzGQACABACACIgBABQAKALAHAMQB/AACBgTQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQhYgEhjAAIhdABgEglZgZMQADAEACATIAGASIADAVQACAMAEAIIAcAAQADgEABgIIABgNIAFgUQADgOgBgXIg8gEg");
	this.shape_2.setTransform(281.9,194.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.shape_1},{t:this.instance_1}]},1).to({state:[{t:this.shape_2},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,363);


(lib.boardClosed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// board
	this.instance = new lib.windowOpen();

	this.instance_1 = new lib.zombieinfection();
	this.instance_1.setTransform(-571.4,65.5,0.839,0.839);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E8264").s().p("AinRsQgKAAgIgEIgEgCQgRgFgLgJIAAgKQAAgFgCgFQgOgiAGg4QAAgFACgDIAFgFQAkgnAugeQAGgDAFgFIAAgKIAAgKIAAgKIAAh1IAAgDIAAgeIAAgKIAAgUIAAhuIAAi0IAAiqIAAgKIAAhGIAAmRIAAgZIAAhiIAAgHIAAiIIAAgQIAAg3IAAlAIAAgKIAAhLIAAgFIAAgKQgFAAgDgDIgCgCIgCAAQilABiiAAIgPAAIg1AAIgwAAIgUAAQizgBiwgDIiugEQipgEimgHIgigBIgBAAIgGgBIgSADIAEAAIAiACQqKAFqKAAQgKAAgKgFIAAgeIAAgKIAAgKIgBgKQgFgVAIgIQAIgGAGgMQAEgIAKgFQAIgMAIgIIDkAAQCwAUC0AAIg5AHQLCgCLCADIkHAEIgOAAIBAAAQeAgBeBAEIAFAAIAAAFIgBAFIgCACIgDAEIAAADQgFAWABARQABAWAJAPIAAAKIAAAFQ06hf28BfIg+AEIgKABIAAAKIAAAAIAAAKIAACgIAAAKIAAasIAAAKQAAAFABAAIAJADIAqATIAOAGIAHAEIAFADIAAAGIAAAEQAAAFACACIAEACIADADQAPAPAIAWQAHASABAXIAAAKIAAAAQAAAFgCAEIgCAEIgZA0IgEAJIAAgBIgHARIgGABIgBABIgBAAIgDADQglAKgiAAQg3AAgpgZgAhjQqQACABAAAFQA0AMgCgqQACgbgVgIQgBAAAAgFIg8AAQgbAwA3AQgA4Pv7IgSgEIhOgEIAEABIh3gDIDTAKIAAAAgEghbgQcQACABAAAFIBQgEIg7gDIgZgCIgEAAIAGADgEgo3gRXIgCABICmgJQhagLhFASIAAAAIgFABg");
	this.shape.setTransform(282.9,115.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.windowOpen, null, new cjs.Matrix2D(1,0,0,1,-283,-118)).s().p("EgsNASbMAAAgk2IBDAAQgJAJgHALQgLAGgEAIQgFAMgIAGQgJAIAFAVIABAJIAAAKIAAAKIAAAfQALAEAJAAQKLAAKKgEIgigCIgFAAIATgDIAGAAIAAAAIAjACQCmAGCpAFICuAEQCvADC0ABIAUAAIAwAAIA0AAIAQAAQCiAAClgCIACAAIACADQADACAEABIAAAKIAAAEIAABMIAAAKIAAE/IAAA4IAAAQIAACIIAAAHIAABhIAAAaIAAGRIAABFIAAALIAACpIAAC0IAABvIAAAUIAAAKIAAAdIAAAEIAAB1IAAAKIAAAKIAAAKQgEAEgGAEQgvAegjAnIgFAFQgDADABAFQgHA3APAjQABAFAAAEIAAAKQALAKASAFIAEABQAHAEALAAQBDAqBlgaIACgDIABAAIABgBIAGgBIAHgRIgBABIAEgJIAZg0IADgEQABgEABgFIAAAAIAAgLQgCgWgGgSQgIgWgQgPIgDgDIgDgDQgCgBAAgGIAAgEIAAgGIgGgCIgGgEIgOgGIgrgTIgIgDQgBgBAAgEIAAgKIAA6sIAAgKIAAigIAAgKIAAAAIAAgKIAKgBIA+gFQW7heU7BeIAAgEIAAgLQgKgOAAgWQgBgRAEgWIABgDIADgEIACgCIABgGIAAgEIgGAAQ+BgE9/ABIhBAAIAPAAIEHgEQrCgDrCACIA4gIQizAAiwgUMBT0AAAMAAAAk2gAhjQaQAAgGgBAAQg3gQAagwIA9AAQAAAEABABQAVAIgCAaQABAhgfAAQgJAAgMgCgA7kwbIB4ACIgFAAIBPAEIASAEIjUgKgEghdgQyIgFgEIADABIAaABIA7AEIhQADQAAgEgDgBgEgo4gRtIAEgBIAAAAQBGgSBaALIinAJg");
	this.shape_1.setTransform(283,118);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3E30").s().p("AiiSlIgJgCQgUgFgMgGQgWgKgJgQQgDgGgGgQQgDgPgHgGQgHgJgSgHQgVgIgHgFQgOgKgEgUQgEgSAGgTQAEgQAMgRIAYgdQAUgXAQgLQAWgQAWAEIguhtQgNghANgMQAKgIAOAHQANAGAKANQAMARAGAFQAMALALgBIgWxPQgBgeAJgNQAIgIAMAAQANgBAEAKIgFgRQgLABgIgIQgKgKgBgaQgCgjAFgQIAAgBIgLgnQgKglACgTQABgPAJgMQAGgIAHgFIABgIQAIgpACgVIAEggQADgKAEgIIgPhUQgGglgCgQQgDgdADgYQADgbAOgXQAGgKAHgIQAAgLACgJQAFgOAKgHIgCgCIgDgCQqSAGpggWIhngBIAdACIqkADQiwAKiUAUQi3AYg6ACQg6ABgzgHQhEgJg3gaQA6grBBghIASgJQgCgQAKgFQAEgCAAgKQAAgKAFgFQAFgFAKAAQAIgMAIgIIClAAQBYgTBaAAIAAgFQAdgGAdAGQAfAGAYASIgVAQQBPAEBQAAIigATQgYADgXAAIgZAIIFVgKIABAAIAAgFIC5gBISqgiIHSgOQgGAIgGAGQgUAQgeAJQgQAFgWACQYZAAYaADIAAAFQAAAFgCACIgDAEIgDALIAcAFQBOATAQA3IheAAIgUAAIAAAEIgygEMgqlAACIg7AEQAFAQABASQAAAXgGAmQgLA+gPA3IgSA+IAAC/IAHAXQAOAzAEAlQAGAtgDA+IgBAbQALgCAMAIQALAIAEAPQADALAAARIAAAeQAAANAKBGQAHAygKAfQAIADAMgJQAOgKAHgBQALgBAIALQAGALgCAMQgGASgaAQQgQALgVAIQgTALgNgFQgFgCgDgEIAIA9QAQAHAIAUQAJAQABAXQACAtgVApQgTAmgiAXIAAEYQAaDPABAvQABAbABAIQADAUAHANQAGAMAPAQIARAQIABABIAAAAIAIAJQANAQAHAYQAKAWACAdIAAAKQAAAFgCAEIgCAEQgDBUgrAlQgMAJgMAHQgZALghABIgGAAQgiAAg2gKgAjpPkIAAAWQAAAOADAIQAEALAIABQACgDAAgIIgBgvIgFgCIgBAAgAgdgnIADgJQAEgPACgIQABgQgIgUIgGgRQABArADAqg");
	this.shape_2.setTransform(281.6,117.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.windowOpen, null, new cjs.Matrix2D(1,0,0,1,-283,-118)).s().p("AgYSbQAOgGAKgKQArglAChTIADgEQABgFABgEIAAgLQgCgdgKgVQgHgYgOgRIgHgIIAAgBIgBAAIgPgRQgRgPgHgMQgGgNgDgUQgCgIAAgbQgBgwgajOIAAkYQAhgXAUgmQAUgqgBgtQgBgWgHgQQgJgVgRgGIgJg8QAEADAFACQAMAFAUgKQAUgKARgKQAZgRAGgRQADgMgGgLQgIgMgLABQgHACgPAJQgMAJgIgDQALgegHgzQgKhFAAgNIAAgeQAAgRgCgMQgEgOgNgIQgLgJgLACIABgaQADg+gGguQgEgkgPgzIgGgXIAAi/IASg+QAOg3AMg+QAGgngBgWQgBgSgFgRIA7gDMAqlgACIAzADIAAgDIAUAAMAAAAiogEgsNASbMAAAgh0QAzAHA6gCQA6gBC4gZQCUgTCvgKIKkgDIgcgCIBmABQJhAWKSgHIACADIADACQgLAHgEAOQgDAJABAKQgIAJgGAKQgNAWgEAcQgCAYACAdQACAPAGAmIAQBUQgFAIgDAKIgDAfQgDAVgIApIgBAJQgHAEgFAJQgJAMgBAPQgCATAKAlIALAnIAAAAQgGARADAjQABAaAKAKQAHAIAMgBIAEARQgDgKgNABQgNgBgIAJQgJANABAdIAXRPQgMACgMgLQgGgGgMgQQgJgNgNgHQgOgHgLAJQgNAMANAhIAuBtQgVgEgXAQQgQALgUAXIgXAdQgMARgEAQQgHASAFATQAEAUAOAKQAHAFAVAIQASAHAHAIQAGAHAEAPQAFAQAEAFQAIARAWAKQAMAFAVAFgAj1QJQgCgIAAgOIAAgXIAKgDIAAAAIAGACIABAuQAAAJgDACQgIAAgEgLgAgwiDIAHAQQAIAVgCAQQgBAIgEAPIgDAJQgEgrgBgqgEgsNgSbIBDAAQgJAJgHALQgLAAgEAGQgFAFgBAJQAAALgDACQgKAFABAQIgSAIgEArygRcIACgLIADgEQADgCAAgGIAAgEQ4bgE4ZABQAXgDAQgEQAegJATgRMAvwAAAIAABEIgcgFgEglIgRwQAYgBAYgDICfgTQhPAAhPgDIAVgRIZbAAIyrAjIi4ABIAAAEIgCAAIlUALIAYgIg");
	this.shape_3.setTransform(283,118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,236);


// stage content:
(lib.FirstSceneSounds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.doorbtn.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			console.log("FUCKING WORK");
			window.open("closest.html", "_self");
		}
		
		exportRoot.firstAid.addEventListener("click", firstAid.bind(this));
		function firstAid()
		{
			audioFA.play();
			console.log("Music playing");
			this.gotoAndStop(2);
		}
		
		exportRoot.firstAid2.addEventListener("click", buttonClicked.bind(this));
		function buttonClicked()
		{
			window.open("SurvivalKitnew.html","_self");
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		exportRoot.doorbtn.addEventListener("mouseover", fl_MouseOverHandler);
		function fl_MouseOverHandler() {
			 audiolol.play();
		}
		
		exportRoot.zombie.addEventListener("click", zombieClick.bind(this));
		function zombieClick()
		{
			window.open("outside.html","_self");
		}
		
		exportRoot.boardClose.addEventListener("click", buttonClicked1.bind(this));
		function buttonClicked1()
		{
			audioCB.play();
			console.log("Board playing");
			this.gotoAndStop(1);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		exportRoot.doorbtn.addEventListener("mouseover", fl_MouseOverHandler);
		function fl_MouseOverHandler() {
			 door.play();
		}
		
		exportRoot.boardOpen.addEventListener("click", boardClick.bind(this));
		function boardClick()
		{
			window.open("chalkboard.html","_self");
		}
		
		exportRoot.boardClose.addEventListener("click", boardclosed.bind(this));
		function boardclosed()
		{
			this.gotoAndStop(1);
		}
		createjs.Sound.removeAllSounds();
		this.stop();
		
		//play when hovered over.
		var audioFA = new Audio('sounds/briefcase.mp3');
		var audiolol = new Audio('sounds/zombies.mp3');
		var audioCB = new Audio('sounds/board.mp3');
		createjs.Sound.removeAllSounds();
		this.stop();
		
		var door = new Audio('sounds/doorOpen.mp3');
		
		var doorbtn = exportRoot.doorbtn;
		//play background wind and repeat, but change volume to low
		var audio = new Audio('sounds/wind.mp3');
		audio.play();
		audio.volume = 0.2;
	}
	this.frame_2 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// FirstAid
	this.firstAid = new lib.firstAid();
	this.firstAid.setTransform(703.1,1012.9,1,1,0,0,0,193.5,139.5);
	new cjs.ButtonHelper(this.firstAid, 0, 1, 2, false, new lib.firstAid(), 3);

	this.firstAid2 = new lib.firstAid2_1();
	this.firstAid2.setTransform(715.9,991,1,1,0,0,0,169,120.5);
	new cjs.ButtonHelper(this.firstAid2, 0, 1, 2, false, new lib.firstAid2_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.firstAid,p:{regX:193.5,regY:139.5,x:703.1,y:1012.9}}]}).to({state:[{t:this.firstAid,p:{regX:0,regY:0,x:508.6,y:873.6}}]},1).to({state:[{t:this.firstAid2}]},1).wait(1));

	// Window
	this.zombie = new lib.zombie_1();
	this.zombie.setTransform(205.3,590);
	new cjs.ButtonHelper(this.zombie, 0, 1, 2, false, new lib.zombie_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.zombie).wait(3));

	// Board
	this.boardClose = new lib.boardClosed();
	this.boardClose.setTransform(816.5,330);
	new cjs.ButtonHelper(this.boardClose, 0, 1, 2, false, new lib.boardClosed(), 3);

	this.boardOpen = new lib.boardOpen();
	this.boardOpen.setTransform(812.5,330.2);
	new cjs.ButtonHelper(this.boardOpen, 0, 1, 2, false, new lib.boardOpen(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boardClose}]}).to({state:[{t:this.boardOpen}]},1).to({state:[{t:this.boardClose}]},1).wait(1));

	// door
	this.doorbtn = new lib.doorbtn();
	this.doorbtn.setTransform(1525.5,603.8,1,1,0,0,0,246,275);
	new cjs.ButtonHelper(this.doorbtn, 0, 1, 2, false, new lib.doorbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.doorbtn).wait(3));

	// Background
	this.instance = new lib.Hoveroverobjectstolearnaboutzombiesurvival();
	this.instance.setTransform(512.8,12.6);

	this.instance_1 = new lib.background111();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(884.5,683,1771.5,1366);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;