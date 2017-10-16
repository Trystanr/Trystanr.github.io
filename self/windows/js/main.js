$(document).ready(function() {  

    $(window).load(function(){
        $('#startup-sound')[0].addEventListener('ended', function(){
            $('#startup').fadeOut('slow',function(){$(this).remove();});
        });

        $('#startup-sound')[0].play();


    });

    setInterval('updateClock()', 1000);

    $(document).click(function(event) {
        if (!$(event.target).closest('#taskbar').length) {
            if ($('#taskbar-menu').is(":visible")) {
                $('#taskbar-menu').hide();
                $('#taskbar-windows').toggleClass('taskbar-windows-inset', false);
            }
        }
    })
});

var iNotepadCounter = 0;

function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;


    $("#taskbar-control").html(currentTimeString);

}

function notepadClose(item) {
    //var $div = $('#divid').closest('div[class^="div-a"]');
    //var index = $(this).closest('div[class^="resp-border"]').index();

    var index = $(item).parent().parent().parent().parent().index();
    //alert(index);
    $('#a' + (index - 3)).fadeOut(100);
    // $( '#a' + (index-2) ).remove();
    console.log(index);
}

function newNotepad() {
	$('#taskbar-menu').hide();
	$('#taskbar-windows').toggleClass('taskbar-windows-inset', false);
    iNotepadCounter++;

    var $template = $("#notepad").clone();
    $template.attr("id", "a" + iNotepadCounter);

    $template.appendTo("body");
    $('#a' + iNotepadCounter).fadeIn(100);

    var noteHead = "#a" + iNotepadCounter + ">.resp-inner>.resp-head";
    var noteInner = "#a" + iNotepadCounter + ">.resp-inner";
    var noteBody = "#a" + iNotepadCounter + ">.resp-inner>.resp-body";

    var woah = noteInner + "," + noteBody;

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

    $("#resp-loader").load("notepad.html");
}

var taskbarVisible = false;

function toggleTaskbar() {
    if ($('#taskbar-menu').is(":hidden")) {
                $('#taskbar-menu').show();
                $('#taskbar-windows').toggleClass('taskbar-windows-inset', true);
            }
}

$('#taskbar').click(function(event){
    event.stopPropagation();
});

function shutDown() {
    ///alert('yo');
    $('#shutdown').fadeIn('slow');
}