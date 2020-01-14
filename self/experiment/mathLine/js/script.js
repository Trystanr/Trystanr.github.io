var canvas = document.getElementById('tutorial');

var ctx = canvas.getContext('2d');

// var audio = [new Audio('click.mp3')];
var audio = [document.getElementById('aud1'),document.getElementById('aud2'),document.getElementById('aud3'),document.getElementById('aud4'),document.getElementById('aud5'),document.getElementById('aud6'),document.getElementById('aud7'),document.getElementById('aud8')];
var soundNb = 0;

var bRunning = false;
var timer = 0;

var bDir = true;

var w = 700, h = 500;

var xA = 0, yA = 0, xB = 500, yB = 500;
var degrees = 0;
var tolerence = 1.0;

// Array of Points
// var arrP = [{x:350,y:250,c:0}];
var arrP = [];

// Point of origin of rotation
var xP = 350, yP = 250;

var lastPointI = 0;
var currPointI = 0;

function draw(){
	ctx.clearRect(0, 0, w, h);

	ctx.beginPath();
	ctx.moveTo(xA + (xP), yA + (yP));
	ctx.lineTo(xB + (xP), yB + (yP));
	ctx.stroke();

	for (var i = arrP.length - 1; i >= 0; i--) {

		ctx.fillStyle = "rgba(" + arrP[i].c + ",0,200)";
		ctx.beginPath();
		ctx.arc(arrP[i].x, arrP[i].y, 5, 0, 2 * Math.PI);
		ctx.fill(); 
	}
}

function calcRot() {
	if (bDir) {
		degrees -= 0.2;
	} else {
		degrees += 0.2;
	}

	var rad = degrees * Math.PI / 180;

	var radius = 1000;

	var sin = Math.sin(rad);
	var cos = Math.cos(rad);
	var tan = Math.tan(rad);

	xB = Math.floor(sin * radius);
	yB = Math.floor(cos * radius);

	var m = (yA - yB) / (xA - xB);

	// console.log(xA + "," + yA);
	// console.log(xB + "," + yB);
	// console.log(m);

	for (var i = arrP.length - 1; i >= 0; i--) {

		if ((i !== currPointI)&&(i !== lastPointI)) {

			if (distToSegment(
					{x:arrP[i].x,y:arrP[i].y}, 
					{x:(xA+(xP)),y:(yA+(yP))}, 
					{x:(xB+(xP)),y:(yB+(yP))}
				) < tolerence
			) {
				console.log("We got em boys");

          		audio[ soundNb++ % audio.length ].play();
				
				lastPointI = currPointI;
				currPointI = i;

				degrees -= 181;
				// bDir = !bDir;

				ctx.beginPath();
				ctx.moveTo((xP),(yP));
				ctx.lineTo(arrP[i].x, arrP[i].y);
				ctx.stroke();

				// sleep(1000);

				xP = arrP[i].x;
				yP = arrP[i].y;
				
				arrP[i].c += 20;
			}
		}
	}

	draw();
}

function sqr(x) { return x * x }
function dist2(v, w) { return sqr(v.x - w.x) + sqr(v.y - w.y) }
function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w);
  if (l2 == 0) return dist2(p, v);
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, { x: v.x + t * (w.x - v.x),
                    y: v.y + t * (w.y - v.y) });
}
function distToSegment(p, v, w) { return Math.sqrt(distToSegmentSquared(p, v, w)); }


$("#btnStart").on("click", function() {

	audio[0].play();
	audio[1].play();
	audio[2].play();
	audio[3].play();
	audio[4].play();
	audio[5].play();
	audio[6].play();
	audio[7].play();

	console.log(bRunning);

	if (bRunning) {
		bRunning = false;

		window.clearInterval(timer);
		$("#btnStart").text("start");

	} else {
		bRunning = true;

		timer = window.setInterval(calcRot, 1);
		$("#btnStart").text("stop");
	}
});


$("#btnDir").on("click", function() {
	bDir = !bDir;
});

$("#btnTolInc").on("click", function() {
	tolerence = Math.ceil(tolerence + 0.2);
	$("#labTol").text(tolerence);
});

$("#btnTolDec").on("click", function() {
	tolerence -= 0.2;
	$("#labTol").text(tolerence);

});

$("#tutorial").on("click", function() {
	const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    arrP.push({x:x,y:y,c:0});

    console.log(arrP);
    
    console.log("x: " + x + " y: " + y);
});




function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
