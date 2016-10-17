$(document).ready(function() {
 //    $('.resp-border').draggable({
	// 	handle: ".resp-head",
	// 	opacity: 0.9,
	// 	scroll: false,
	// 	containment: "none"
	// }).resizable({
	//   handles: "n, e, s, w, se",
	//   containment: "parent",
	//     minHeight: 200,
	//     minWidth: 240,
	//     alsoResize: ".resp-inner, .resp-body, .resp-border"
	// });

	// $('body').mouseout(function() {
	//     alert('mouse has left the building!');
	// });

	setInterval('updateClock()', 1000);
});

var iNotepadCounter = 0;

function updateClock ( )
 	{
 	var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
  	
  	
   	$("#taskbar-control").html(currentTimeString);
   	  	
 }

 function notepadClose(item) {
 	//var $div = $('#divid').closest('div[class^="div-a"]');
 	//var index = $(this).closest('div[class^="resp-border"]').index();

 	var index = $(item).parent().parent().parent().parent().index();
    //alert(index);
    $('#a' + (index-2)).fadeOut(100);
    //$( '#a' + (index-2) ).remove();
 	console.log(index);
 }

 function newNotepad() {
 	iNotepadCounter++;

 	var $template = $("#notepad").clone();
	$template.attr("id", "a" + iNotepadCounter);

	$template.appendTo("body");
	$('#a' + iNotepadCounter).fadeIn(100);

	var noteHead = "#a"+iNotepadCounter+ ">.resp-inner>.resp-head";
	var noteInner = "#a"+iNotepadCounter+ ">.resp-inner";
	var noteBody = "#a"+iNotepadCounter+ ">.resp-inner>.resp-body";

	var woah = noteInner+","+noteBody;

	$('#a' + iNotepadCounter).draggable({
		handle: $(noteHead),
		opacity: 0.9,
		scroll: false,
		containment: "none"
	}).resizable({
	  handles: "n, e, s, w, se",
	  containment: "parent",
	    minHeight: 200,
	    minWidth: 240,
	    alsoResize: woah 
	});


	if ($("#a" + iNotepadCounter + ">.resp-inner").length) {
		console.log('#' + iNotepadCounter + ".resp-inner");
	}
 }