// console.log(view.bounds);

var path = new Path.Line({
	position: [view.bounds.x - view.bounds.width, view.bounds.y - view.bounds.height],
	strokeColor: 'white'
});

path.lineTo([(view.bounds.width * 2), (view.bounds.height * 2)]);

var rad = 1;


var bCurrPoint = -1;
var bPrevPoint = -1;

var bDir = true;

var arrP = [];

// arrP.push(
// 	Path.Circle({
// 		center: [view.center.x, view.center.y],
// 		radius: rad,
// 		strokeColor: 'white'
// 	})
// );

console.log(path);


function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}

path.onFrame = function(event) {
	// Each frame, rotate the path by 3 degrees:
	// console.log(event);

	for (var i = arrP.length - 1; i >= 0; i--) {

		if ((i !== bCurrPoint) && (i !== bPrevPoint)) {
			if (path.intersects(arrP[i])) {
				bPrevPoint = bCurrPoint;
				bCurrPoint = i;
				bDir = !bDir;
				
				console.log(arrP[i]);
				console.log(arrP[i].internalBounds.center.x);
				console.log(arrP[i].nearestPoint.x);

				path.position = new Point(arrP[i].internalBounds.center.x, arrP[i].internalBounds.center.y);
			}
		}

	}

	// console.log(path.handleBounds.center);
	if (bDir) {
		path.rotate(0.1);
	} else {
		path.rotate(-0.1);
	}
}

function onMouseDown(event) {
	arrP.push(
		Path.Circle({
			center: [event.downPoint.x, event.downPoint.y],
			radius: rad,
			strokeColor: 'white'
		})
	);
}



// var path = new Path.Line(vector);