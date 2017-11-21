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



(lib.arrow_up = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Clouds = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Clouds_2 = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CowBoy = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.farm = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hover1 = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hover2 = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.milkbad = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.milkgood = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.UFOpngcopy = function() {
	this.spriteSheet = ss["Farm_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow_up();
	this.instance.setTransform(-100,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-112.5,200,225);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hover2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,286);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hover1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,204);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Clouds_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,88);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Clouds();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,63);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UFOpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.milkgood_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.milkgood();
	this.instance.setTransform(-292,-194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292,-194,584,388);


(lib.milk_bad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.milkbad();
	this.instance.setTransform(-292,-194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292,-194,584,388);


(lib.cow_fail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CowBoy();
	this.instance.setTransform(-91.7,-63.9,0.639,0.639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.7,-63.9,183.5,127.9);


(lib.cow_abduct = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CowBoy();
	this.instance.setTransform(-111.2,-77.5,0.775,0.775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.2,-77.5,222.5,155.1);


(lib.hover2_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(60,143,1,1,0,0,0,60,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:143.8},0).wait(1).to({y:144.7},0).wait(1).to({y:145.5},0).wait(1).to({y:146.3},0).wait(1).to({y:147.2},0).wait(1).to({y:148},0).wait(1).to({y:148.8},0).wait(1).to({y:149.7},0).wait(1).to({y:150.5},0).wait(1).to({y:151.3},0).wait(1).to({y:152.2},0).wait(1).to({y:153},0).wait(1).to({y:152.1},0).wait(1).to({y:151.2},0).wait(1).to({y:150.3},0).wait(1).to({y:149.4},0).wait(1).to({y:148.5},0).wait(1).to({y:147.5},0).wait(1).to({y:146.6},0).wait(1).to({y:145.7},0).wait(1).to({y:144.8},0).wait(1).to({y:143.9},0).wait(1).to({y:143},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,286);


(lib.hover1_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(34,102,1,1,0,0,0,34,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:101.2},0).wait(1).to({y:100.4},0).wait(1).to({y:99.5},0).wait(1).to({y:98.7},0).wait(1).to({y:97.9},0).wait(1).to({y:97},0).wait(1).to({y:96.2},0).wait(1).to({y:95.4},0).wait(1).to({y:94.5},0).wait(1).to({y:93.7},0).wait(1).to({y:92.9},0).wait(1).to({y:92},0).wait(1).to({y:93},0).wait(1).to({y:93.9},0).wait(1).to({y:94.8},0).wait(1).to({y:95.7},0).wait(1).to({y:96.6},0).wait(1).to({y:97.5},0).wait(1).to({y:98.4},0).wait(1).to({y:99.3},0).wait(1).to({y:100.2},0).wait(1).to({y:101.1},0).wait(1).to({y:102},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,204);


(lib.Cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(195,44,1,1,0,0,0,195,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:186.6},0).wait(1).to({x:178.2},0).wait(1).to({x:169.8},0).wait(1).to({x:161.3},0).wait(1).to({x:152.9},0).wait(1).to({x:144.5},0).wait(1).to({x:136},0).wait(1).to({x:127.6},0).wait(1).to({x:119.2},0).wait(1).to({x:110.7},0).wait(1).to({x:102.3},0).wait(1).to({x:93.9},0).wait(1).to({x:85.5},0).wait(1).to({x:77},0).wait(1).to({x:68.6},0).wait(1).to({x:60.2},0).wait(1).to({x:51.7},0).wait(1).to({x:43.3},0).wait(1).to({x:34.9},0).wait(1).to({x:26.4},0).wait(1).to({x:18},0).wait(1).to({x:9.6},0).wait(1).to({x:1.1},0).wait(1).to({x:-7.3},0).wait(1).to({x:-15.7},0).wait(1).to({x:-24.1},0).wait(1).to({x:-32.6},0).wait(1).to({x:-41},0).wait(1).to({x:-49.4},0).wait(1).to({x:-57.9},0).wait(1).to({x:-66.3},0).wait(1).to({x:-74.7},0).wait(1).to({x:-83.2},0).wait(1).to({x:-91.6},0).wait(1).to({x:-100},0).wait(1).to({x:-108.4},0).wait(1).to({x:-116.9},0).wait(1).to({x:-125.3},0).wait(1).to({x:-133.7},0).wait(1).to({x:-142.2},0).wait(1).to({x:-150.6},0).wait(1).to({x:-159},0).wait(1).to({x:-167.5},0).wait(1).to({x:-175.9},0).wait(1).to({x:-184.3},0).wait(1).to({x:-192.8},0).wait(1).to({x:-201.2},0).wait(1).to({x:-209.6},0).wait(1).to({x:-218},0).wait(1).to({x:-226.5},0).wait(1).to({x:-234.9},0).wait(1).to({x:-243.3},0).wait(1).to({x:-251.8},0).wait(1).to({x:-260.2},0).wait(1).to({x:-268.6},0).wait(1).to({x:-277},0).wait(1).to({x:-285.5},0).wait(1).to({x:-293.9},0).wait(1).to({x:-302.3},0).wait(1).to({x:-310.8},0).wait(1).to({x:-319.2},0).wait(1).to({x:-327.6},0).wait(1).to({x:-336.1},0).wait(1).to({x:-344.5},0).wait(1).to({x:-352.9},0).wait(1).to({x:-361.4},0).wait(1).to({x:-369.8},0).wait(1).to({x:-378.2},0).wait(1).to({x:-386.7},0).wait(1).to({x:-395.1},0).wait(1).to({x:-403.5},0).wait(1).to({x:-411.9},0).wait(1).to({x:-420.4},0).wait(1).to({x:-428.8},0).wait(1).to({x:-437.2},0).wait(1).to({x:-445.7},0).wait(1).to({x:-454.1},0).wait(1).to({x:-462.5},0).wait(1).to({x:-471},0).wait(1).to({x:-479.4},0).wait(1).to({x:-487.8},0).wait(1).to({x:-496.3},0).wait(1).to({x:-504.7},0).wait(1).to({x:-513.1},0).wait(1).to({x:-521.5},0).wait(1).to({x:-530},0).wait(1).to({x:-538.4},0).wait(1).to({x:-546.8},0).wait(1).to({x:-555.3},0).wait(1).to({x:-563.7},0).wait(1).to({x:-572.1},0).wait(1).to({x:-580.6},0).wait(1).to({x:-589},0).wait(1).to({x:-597.4},0).wait(1).to({x:-605.8},0).wait(1).to({x:-614.3},0).wait(1).to({x:-622.7},0).wait(1).to({x:-631.1},0).wait(1).to({x:-639.6},0).wait(1).to({x:-648},0).wait(1).to({x:-656.4},0).wait(1).to({x:-664.9},0).wait(1).to({x:-673.3},0).wait(1).to({x:-681.7},0).wait(1).to({x:-690.2},0).wait(1).to({x:-698.6},0).wait(1).to({x:-707},0).wait(1).to({x:-715.4},0).wait(1).to({x:-723.9},0).wait(1).to({x:-732.3},0).wait(1).to({x:-740.7},0).wait(1).to({x:-749.2},0).wait(1).to({x:-757.6},0).wait(1).to({x:-766},0).wait(1).to({x:-774.5},0).wait(1).to({x:-782.9},0).wait(1).to({x:-791.3},0).wait(1).to({x:-799.7},0).wait(1).to({x:-808.2},0).wait(1).to({x:-816.6},0).wait(1).to({x:-825},0).wait(1).to({x:-833.5},0).wait(1).to({x:-841.9},0).wait(1).to({x:-850.3},0).wait(1).to({x:-858.8},0).wait(1).to({x:-867.2},0).wait(1).to({x:-875.6},0).wait(1).to({x:-884.1},0).wait(1).to({x:-892.5},0).wait(1).to({x:-900.9},0).wait(1).to({x:-909.3},0).wait(1).to({x:-917.8},0).wait(1).to({x:-926.2},0).wait(1).to({x:-934.6},0).wait(1).to({x:-943.1},0).wait(1).to({x:-951.5},0).wait(1).to({x:-959.9},0).wait(1).to({x:-968.4},0).wait(1).to({x:-976.8},0).wait(1).to({x:-985.2},0).wait(1).to({x:-993.6},0).wait(1).to({x:-1002.1},0).wait(1).to({x:-1010.5},0).wait(1).to({x:-1018.9},0).wait(1).to({x:-1027.4},0).wait(1).to({x:-1035.8},0).wait(1).to({x:-1044.2},0).wait(1).to({x:-1052.7},0).wait(1).to({x:-1061.1},0).wait(1).to({x:-1069.5},0).wait(1).to({x:-1078},0).wait(1).to({x:-1086.4},0).wait(1).to({x:-1094.8},0).wait(1).to({x:-1103.2},0).wait(1).to({x:-1111.7},0).wait(1).to({x:-1120.1},0).wait(1).to({x:-1128.5},0).wait(1).to({x:-1137},0).wait(1).to({x:-1145.4},0).wait(1).to({x:-1153.8},0).wait(1).to({x:-1162.3},0).wait(1).to({x:-1170.7},0).wait(1).to({x:-1179.1},0).wait(1).to({x:-1187.6},0).wait(1).to({x:-1196},0).wait(1).to({x:-1204.4},0).wait(1).to({x:-1212.8},0).wait(1).to({x:-1221.3},0).wait(1).to({x:-1229.7},0).wait(1).to({x:-1238.1},0).wait(1).to({x:-1246.6},0).wait(1).to({x:-1255},0).wait(1).to({x:-1263.4},0).wait(1).to({x:-1271.9},0).wait(1).to({x:-1280.3},0).wait(1).to({x:-1288.7},0).wait(1).to({x:-1297.1},0).wait(1).to({x:-1305.6},0).wait(1).to({x:-1314},0).wait(1).to({x:-1322.4},0).wait(1).to({x:-1330.9},0).wait(1).to({x:-1339.3},0).wait(1).to({x:-1347.7},0).wait(1).to({x:-1356.2},0).wait(1).to({x:-1364.6},0).wait(1).to({x:-1373},0).wait(1).to({x:-1381.5},0).wait(1).to({x:-1389.9},0).wait(1).to({x:-1398.3},0).wait(1).to({x:-1406.7},0).wait(1).to({x:-1415.2},0).wait(1).to({x:-1423.6},0).wait(1).to({x:-1432},0).wait(1).to({x:-1440.5},0).wait(1).to({x:-1448.9},0).wait(1).to({x:-1457.3},0).wait(1).to({x:-1465.7},0).wait(1).to({x:-1474.2},0).wait(1).to({x:-1482.6},0).wait(1).to({x:-1491},0).wait(1).to({x:-1499.5},0).wait(1).to({x:-1507.9},0).wait(1).to({x:-1516.3},0).wait(1).to({x:-1524.8},0).wait(1).to({x:-1533.2},0).wait(1).to({x:-1541.6},0).wait(1).to({x:-1550.1},0).wait(1).to({x:-1558.5},0).wait(1).to({x:-1566.9},0).wait(1).to({x:-1575.4},0).wait(1).to({x:-1583.8},0).wait(1).to({x:-1592.2},0).wait(1).to({x:-1600.6},0).wait(1).to({x:-1609.1},0).wait(1).to({x:-1617.5},0).wait(1).to({x:-1625.9},0).wait(1).to({x:-1634.4},0).wait(1).to({x:-1642.8},0).wait(1).to({x:-1651.2},0).wait(1).to({x:-1659.7},0).wait(1).to({x:-1668.1},0).wait(1).to({x:-1676.5},0).wait(1).to({x:-1685},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,88);


(lib.Cloud = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(104,31.5,1,1,0,0,0,104,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:99.5},0).wait(1).to({x:95},0).wait(1).to({x:90.4},0).wait(1).to({x:85.9},0).wait(1).to({x:81.3},0).wait(1).to({x:76.8},0).wait(1).to({x:72.2},0).wait(1).to({x:67.7},0).wait(1).to({x:63.1},0).wait(1).to({x:58.6},0).wait(1).to({x:54},0).wait(1).to({x:49.5},0).wait(1).to({x:44.9},0).wait(1).to({x:40.4},0).wait(1).to({x:35.8},0).wait(1).to({x:31.3},0).wait(1).to({x:26.7},0).wait(1).to({x:22.2},0).wait(1).to({x:17.6},0).wait(1).to({x:13.1},0).wait(1).to({x:8.5},0).wait(1).to({x:4},0).wait(1).to({x:-0.6},0).wait(1).to({x:-5.1},0).wait(1).to({x:-9.7},0).wait(1).to({x:-14.2},0).wait(1).to({x:-18.7},0).wait(1).to({x:-23.3},0).wait(1).to({x:-27.8},0).wait(1).to({x:-32.4},0).wait(1).to({x:-36.9},0).wait(1).to({x:-41.5},0).wait(1).to({x:-46},0).wait(1).to({x:-50.6},0).wait(1).to({x:-55.1},0).wait(1).to({x:-59.7},0).wait(1).to({x:-64.2},0).wait(1).to({x:-68.8},0).wait(1).to({x:-73.3},0).wait(1).to({x:-77.9},0).wait(1).to({x:-82.4},0).wait(1).to({x:-87},0).wait(1).to({x:-91.5},0).wait(1).to({x:-96.1},0).wait(1).to({x:-100.6},0).wait(1).to({x:-105.2},0).wait(1).to({x:-109.7},0).wait(1).to({x:-114.3},0).wait(1).to({x:-118.8},0).wait(1).to({x:-123.4},0).wait(1).to({x:-127.9},0).wait(1).to({x:-132.5},0).wait(1).to({x:-137},0).wait(1).to({x:-141.5},0).wait(1).to({x:-146.1},0).wait(1).to({x:-150.6},0).wait(1).to({x:-155.2},0).wait(1).to({x:-159.7},0).wait(1).to({x:-164.3},0).wait(1).to({x:-168.8},0).wait(1).to({x:-173.4},0).wait(1).to({x:-177.9},0).wait(1).to({x:-182.5},0).wait(1).to({x:-187},0).wait(1).to({x:-191.6},0).wait(1).to({x:-196.1},0).wait(1).to({x:-200.7},0).wait(1).to({x:-205.2},0).wait(1).to({x:-209.8},0).wait(1).to({x:-214.3},0).wait(1).to({x:-218.9},0).wait(1).to({x:-223.4},0).wait(1).to({x:-228},0).wait(1).to({x:-232.5},0).wait(1).to({x:-237.1},0).wait(1).to({x:-241.6},0).wait(1).to({x:-246.2},0).wait(1).to({x:-250.7},0).wait(1).to({x:-255.3},0).wait(1).to({x:-259.8},0).wait(1).to({x:-264.3},0).wait(1).to({x:-268.9},0).wait(1).to({x:-273.4},0).wait(1).to({x:-278},0).wait(1).to({x:-282.5},0).wait(1).to({x:-287.1},0).wait(1).to({x:-291.6},0).wait(1).to({x:-296.2},0).wait(1).to({x:-300.7},0).wait(1).to({x:-305.3},0).wait(1).to({x:-309.8},0).wait(1).to({x:-314.4},0).wait(1).to({x:-318.9},0).wait(1).to({x:-323.5},0).wait(1).to({x:-328},0).wait(1).to({x:-332.6},0).wait(1).to({x:-337.1},0).wait(1).to({x:-341.7},0).wait(1).to({x:-346.2},0).wait(1).to({x:-350.8},0).wait(1).to({x:-355.3},0).wait(1).to({x:-359.9},0).wait(1).to({x:-364.4},0).wait(1).to({x:-369},0).wait(1).to({x:-373.5},0).wait(1).to({x:-378},0).wait(1).to({x:-382.6},0).wait(1).to({x:-387.1},0).wait(1).to({x:-391.7},0).wait(1).to({x:-396.2},0).wait(1).to({x:-400.8},0).wait(1).to({x:-405.3},0).wait(1).to({x:-409.9},0).wait(1).to({x:-414.4},0).wait(1).to({x:-419},0).wait(1).to({x:-423.5},0).wait(1).to({x:-428.1},0).wait(1).to({x:-432.6},0).wait(1).to({x:-437.2},0).wait(1).to({x:-441.7},0).wait(1).to({x:-446.3},0).wait(1).to({x:-450.8},0).wait(1).to({x:-455.4},0).wait(1).to({x:-459.9},0).wait(1).to({x:-464.5},0).wait(1).to({x:-469},0).wait(1).to({x:-473.6},0).wait(1).to({x:-478.1},0).wait(1).to({x:-482.7},0).wait(1).to({x:-487.2},0).wait(1).to({x:-491.8},0).wait(1).to({x:-496.3},0).wait(1).to({x:-500.8},0).wait(1).to({x:-505.4},0).wait(1).to({x:-509.9},0).wait(1).to({x:-514.5},0).wait(1).to({x:-519},0).wait(1).to({x:-523.6},0).wait(1).to({x:-528.1},0).wait(1).to({x:-532.7},0).wait(1).to({x:-537.2},0).wait(1).to({x:-541.8},0).wait(1).to({x:-546.3},0).wait(1).to({x:-550.9},0).wait(1).to({x:-555.4},0).wait(1).to({x:-560},0).wait(1).to({x:-564.5},0).wait(1).to({x:-569.1},0).wait(1).to({x:-573.6},0).wait(1).to({x:-578.2},0).wait(1).to({x:-582.7},0).wait(1).to({x:-587.3},0).wait(1).to({x:-591.8},0).wait(1).to({x:-596.4},0).wait(1).to({x:-600.9},0).wait(1).to({x:-605.4},0).wait(1).to({x:-610},0).wait(1).to({x:-614.6},0).wait(1).to({x:-619.1},0).wait(1).to({x:-623.6},0).wait(1).to({x:-628.2},0).wait(1).to({x:-632.7},0).wait(1).to({x:-637.3},0).wait(1).to({x:-641.8},0).wait(1).to({x:-646.4},0).wait(1).to({x:-650.9},0).wait(1).to({x:-655.5},0).wait(1).to({x:-660},0).wait(1).to({x:-664.6},0).wait(1).to({x:-669.1},0).wait(1).to({x:-673.7},0).wait(1).to({x:-678.2},0).wait(1).to({x:-682.8},0).wait(1).to({x:-687.3},0).wait(1).to({x:-691.9},0).wait(1).to({x:-696.4},0).wait(1).to({x:-701},0).wait(1).to({x:-705.5},0).wait(1).to({x:-710.1},0).wait(1).to({x:-714.6},0).wait(1).to({x:-719.2},0).wait(1).to({x:-723.7},0).wait(1).to({x:-728.3},0).wait(1).to({x:-732.8},0).wait(1).to({x:-737.3},0).wait(1).to({x:-741.9},0).wait(1).to({x:-746.4},0).wait(1).to({x:-751},0).wait(1).to({x:-755.5},0).wait(1).to({x:-760.1},0).wait(1).to({x:-764.6},0).wait(1).to({x:-769.2},0).wait(1).to({x:-773.7},0).wait(1).to({x:-778.3},0).wait(1).to({x:-782.8},0).wait(1).to({x:-787.4},0).wait(1).to({x:-791.9},0).wait(1).to({x:-796.5},0).wait(1).to({x:-801},0).wait(1).to({x:-805.6},0).wait(1).to({x:-810.1},0).wait(1).to({x:-814.7},0).wait(1).to({x:-819.2},0).wait(1).to({x:-823.8},0).wait(1).to({x:-828.3},0).wait(1).to({x:-832.9},0).wait(1).to({x:-837.4},0).wait(1).to({x:-842},0).wait(1).to({x:-846.5},0).wait(1).to({x:-851.1},0).wait(1).to({x:-855.6},0).wait(1).to({x:-860.1},0).wait(1).to({x:-864.7},0).wait(1).to({x:-869.2},0).wait(1).to({x:-873.8},0).wait(1).to({x:-878.3},0).wait(1).to({x:-882.9},0).wait(1).to({x:-887.4},0).wait(1).to({x:-892},0).wait(1).to({x:-896.5},0).wait(1).to({x:-901.1},0).wait(1).to({x:-905.6},0).wait(1).to({x:-910.2},0).wait(1).to({x:-914.7},0).wait(1).to({x:-919.3},0).wait(1).to({x:-923.8},0).wait(1).to({x:-928.4},0).wait(1).to({x:-932.9},0).wait(1).to({x:-937.5},0).wait(1).to({x:-942},0).wait(1).to({x:-946.6},0).wait(1).to({x:-951.1},0).wait(1).to({x:-955.7},0).wait(1).to({x:-960.2},0).wait(1).to({x:-964.8},0).wait(1).to({x:-969.3},0).wait(1).to({x:-973.9},0).wait(1).to({x:-978.4},0).wait(1).to({x:-982.9},0).wait(1).to({x:-987.5},0).wait(1).to({x:-992},0).wait(1).to({x:-996.6},0).wait(1).to({x:-1001.1},0).wait(1).to({x:-1005.7},0).wait(1).to({x:-1010.2},0).wait(1).to({x:-1014.8},0).wait(1).to({x:-1019.3},0).wait(1).to({x:-1023.9},0).wait(1).to({x:-1028.4},0).wait(1).to({x:-1033},0).wait(1).to({x:-1037.5},0).wait(1).to({x:-1042.1},0).wait(1).to({x:-1046.6},0).wait(1).to({x:-1051.2},0).wait(1).to({x:-1055.7},0).wait(1).to({x:-1060.3},0).wait(1).to({x:-1064.8},0).wait(1).to({x:-1069.4},0).wait(1).to({x:-1073.9},0).wait(1).to({x:-1078.5},0).wait(1).to({x:-1083},0).wait(1).to({x:-1087.6},0).wait(1).to({x:-1092.1},0).wait(1).to({x:-1096.6},0).wait(1).to({x:-1101.2},0).wait(1).to({x:-1105.7},0).wait(1).to({x:-1110.3},0).wait(1).to({x:-1114.8},0).wait(1).to({x:-1119.4},0).wait(1).to({x:-1123.9},0).wait(1).to({x:-1128.5},0).wait(1).to({x:-1133},0).wait(1).to({x:-1137.6},0).wait(1).to({x:-1142.1},0).wait(1).to({x:-1146.7},0).wait(1).to({x:-1151.2},0).wait(1).to({x:-1155.8},0).wait(1).to({x:-1160.3},0).wait(1).to({x:-1164.9},0).wait(1).to({x:-1169.4},0).wait(1).to({x:-1174},0).wait(1).to({x:-1178.5},0).wait(1).to({x:-1183.1},0).wait(1).to({x:-1187.6},0).wait(1).to({x:-1192.2},0).wait(1).to({x:-1196.7},0).wait(1).to({x:-1201.3},0).wait(1).to({x:-1205.8},0).wait(1).to({x:-1210.4},0).wait(1).to({x:-1214.9},0).wait(1).to({x:-1219.4},0).wait(1).to({x:-1224},0).wait(1).to({x:-1228.5},0).wait(1).to({x:-1233.1},0).wait(1).to({x:-1237.6},0).wait(1).to({x:-1242.2},0).wait(1).to({x:-1246.7},0).wait(1).to({x:-1251.3},0).wait(1).to({x:-1255.8},0).wait(1).to({x:-1260.4},0).wait(1).to({x:-1264.9},0).wait(1).to({x:-1269.5},0).wait(1).to({x:-1274},0).wait(1).to({x:-1278.6},0).wait(1).to({x:-1283.1},0).wait(1).to({x:-1287.7},0).wait(1).to({x:-1292.2},0).wait(1).to({x:-1296.8},0).wait(1).to({x:-1301.3},0).wait(1).to({x:-1305.9},0).wait(1).to({x:-1310.4},0).wait(1).to({x:-1315},0).wait(1).to({x:-1319.5},0).wait(1).to({x:-1324.1},0).wait(1).to({x:-1328.6},0).wait(1).to({x:-1333.2},0).wait(1).to({x:-1337.7},0).wait(1).to({x:-1342.2},0).wait(1).to({x:-1346.8},0).wait(1).to({x:-1351.3},0).wait(1).to({x:-1355.9},0).wait(1).to({x:-1360.4},0).wait(1).to({x:-1365},0).wait(1).to({x:-1369.5},0).wait(1).to({x:-1374.1},0).wait(1).to({x:-1378.6},0).wait(1).to({x:-1383.2},0).wait(1).to({x:-1387.7},0).wait(1).to({x:-1392.3},0).wait(1).to({x:-1396.8},0).wait(1).to({x:-1401.4},0).wait(1).to({x:-1405.9},0).wait(1).to({x:-1410.5},0).wait(1).to({x:-1415},0).wait(1).to({x:-1419.6},0).wait(1).to({x:-1424.1},0).wait(1).to({x:-1428.7},0).wait(1).to({x:-1433.2},0).wait(1).to({x:-1437.8},0).wait(1).to({x:-1442.3},0).wait(1).to({x:-1446.9},0).wait(1).to({x:-1451.4},0).wait(1).to({x:-1456},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,63);


// stage content:



(lib.Prototype = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		console.log("hello world");
		this.stop();
		
		var jsObject = this;
		var frequency = 3;
		var bCow = true;
		var bCowClicked = false;
		stage.enableMouseOver(frequency);
		this.button_1.addEventListener("mouseover", fl_MouseOverHandler);
		this.button_1.addEventListener("click", fl_ClickHandler);
		this.button_2.addEventListener("mouseover", f2_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			console.log("Cow 1");
			if (bCow==true) {
				jsObject.gotoAndStop(5);
			}
		}
		
		function f2_MouseOverHandler()
		{
			console.log("Cow 2");
			if (bCow==true) {
			jsObject.gotoAndStop(10);
			}
		}
		
		function fl_ClickHandler()
		{
			console.log("Cow 1 Clicked");
			bCow = false;
			jsObject.gotoAndPlay(15);
		}
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
		var theScene = this;
		var abducted = false;
		var block = exportRoot.button_1; 
		
		function moveBlock() 
		{ 
			console.log(block.y);
			if (!abducted) {
				block.y += 1;
			}
			
			if(block.y + (block.nominalBounds.width/2) <= 580.0){ 
				abducted = true; 
				theScene.play();
			}
		} 
		
		createjs.Ticker.addEventListener("tick", moveBlock); 
		window.onkeydown = keyPressed.bind(this);
		
		function keyPressed(e) {
			console.log(e.keyCode);
			
			if (!abducted) {
				if (e.keyCode == 38) {
					block.y -= 10;
				}
			}
		}
	}
	this.frame_34 = function() {
		this.stop();
		
		window.open("Inside.html","_self");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(10).call(this.frame_24).wait(10).call(this.frame_34).wait(1));

	// Layer 3
	this.instance = new lib.Cloud2();
	this.instance.setTransform(1628.4,264.1,1,1,0,0,0,195,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// Layer 2
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(1042.2,279.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:357.9,alpha:1},10).to({_off:true},1).wait(10));

	// Layer 7
	this.instance_2 = new lib.milkgood_1("synched",0);
	this.instance_2.setTransform(691.2,573.1);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.milk_bad("synched",0);
	this.instance_3.setTransform(990.2,501.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},14).to({state:[]},10).wait(11));

	// Layer 6
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(821.1,-356.9,1,1,0,0,0,292,98.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(1).to({regX:256,regY:256,x:785.1,y:-136.7},0).wait(1).to({y:-74},0).wait(1).to({y:-11.3},0).wait(1).to({y:51.4},0).wait(1).to({y:114.1},0).wait(1).to({y:176.8},0).wait(1).to({y:239.5},0).wait(1).to({y:302.2},0).wait(1).to({y:364.9},0).wait(1).to({y:427.6},0).wait(2).to({y:360.4},0).wait(1).to({y:293.3},0).wait(1).to({y:226.1},0).wait(1).to({y:159},0).wait(1).to({y:91.8},0).wait(1).to({y:24.6},0).wait(1).to({y:-42.5},0).wait(1).to({y:-109.7},0).wait(1).to({y:-176.9},0).wait(1));

	// Layer 9
	this.instance_5 = new lib.hover2_1();
	this.instance_5.setTransform(790.2,629.2,1,1,0,0,0,60,143);

	this.instance_6 = new lib.hover1_1();
	this.instance_6.setTransform(786.2,648.2,1,1,0,0,0,34,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},24).to({state:[]},1).wait(10));

	// Layer 8
	this.instance_7 = new lib.Cloud();
	this.instance_7.setTransform(1544.4,104,1,1,0,0,0,104,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// Layer 1
	this.instance_8 = new lib.milkgood_1("synched",0);
	this.instance_8.setTransform(691.2,573.1);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.milk_bad("synched",0);
	this.instance_9.setTransform(990.2,501.5);
	this.instance_9.alpha = 0;

	this.button_2 = new lib.cow_fail();
	this.button_2.setTransform(1092,674.2);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.button_1 = new lib.cow_abduct();
	this.button_1.setTransform(776,750.9);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.instance_10 = new lib.farm();
	this.instance_10.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.button_1},{t:this.button_2},{t:this.instance_9,p:{alpha:0}},{t:this.instance_8,p:{alpha:0}}]}).to({state:[{t:this.instance_10},{t:this.button_1},{t:this.button_2},{t:this.instance_9,p:{alpha:0}},{t:this.instance_8,p:{alpha:1}}]},4).to({state:[{t:this.instance_10},{t:this.button_1},{t:this.button_2},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:0}}]},5).to({state:[{t:this.instance_10},{t:this.button_1},{t:this.button_2}]},5).to({state:[{t:this.instance_10},{t:this.button_1},{t:this.button_2},{t:this.instance_9,p:{alpha:0}},{t:this.instance_8,p:{alpha:0}}]},10).to({state:[{t:this.instance_10},{t:this.button_2},{t:this.instance_9,p:{alpha:0}},{t:this.instance_8,p:{alpha:0}}]},1).to({state:[{t:this.instance_10},{t:this.button_2},{t:this.instance_9,p:{alpha:0}},{t:this.instance_8,p:{alpha:0}}]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,512.1,1823.4,1024);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;