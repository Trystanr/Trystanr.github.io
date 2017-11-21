$(document).ready(function() {  

    var wallColour = document.cookie;

    if (wallColour == "") {
        document.cookie = "color=008080";
        var wallColour = document.cookie;
    }

    $('body').css("background-color", wallColour);


    $(window).load(function(){
        $('#startup-sound')[0].addEventListener('ended', function(){
            $('#startup').fadeOut('slow',function(){$(this).remove();});


        });

        $('#startup-sound')[0].play();
        initWindows();

        setColours();

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

function setColours() {
    $("#wallColours li").each(function(e) {
        $(this).css("background-color", $(this).attr('data-color'));
    });

    $("#wallColours li").on('click', function(e) {
        console.log($(this).attr('data-color'));
        document.cookie = "color="+$(this).attr('data-color');
        $('body').css("background-color", $(this).attr('data-color'));
    });
}

function initWindows() {

    // $('#a' + iNotepadCounter).draggable({
    //     handle: $(noteHead),
    //     opacity: 0.9,
    //     scroll: false,
    //     containment: "none"
    // }).resizable({
        // handles: "n, e, s, w, se",
        // containment: "parent",
        // minHeight: 200,
        // minWidth: 240,
    //     alsoResize: woah
    // });

    $(".resp-border").each(function (index) {
        console.log();

        var noteHead = "#" + $(this).attr('id') + ">.resp-inner>.resp-head";
        var noteInner = "#" + $(this).attr('id') + ">.resp-inner";
        var noteBody = "#" + $(this).attr('id') + ">.resp-inner>.resp-body";
        var woah = noteInner + "," + noteBody;

        $(this).draggable({
            handle: $(noteHead),
            opacity: 0.9,
            scroll: false,
            containment: "none",
            stack: ".resp-border"
        }).resizable({
            handles: "n, e, s, w, se",
            containment: "parent",
            minHeight: 200,
            minWidth: 240,
            alsoResize: woah
        });

    });

    console.log($("#trystan-window"));
    $("#trystan-window").css('top',  100);
    $("#trystan-window").css('left',  $( window ).width()/2 + ( $( window ).width()/4) );
    $("#trystan-window").css('height', '400px'  );
    $("#trystan-window .resp-inner").css('height', '394px'  );
    $("#trystan-window .resp-body").css('height', '370px'  );


}

function openWindow(x) {
    $('#taskbar-menu').hide();
    $('#taskbar-windows').toggleClass('taskbar-windows-inset', false);
    $("#"+x).fadeIn(100);
}

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

function notepadClose(e) {
    //var $div = $('#divid').closest('div[class^="div-a"]');
    //var index = $(this).closest('div[class^="resp-border"]').index();

    // var index = $(item).parent().parent().parent().parent().index();
    // //alert(index);
    // $('#a' + (index - 3)).fadeOut(100);
    // // $( '#a' + (index-2) ).remove();
    // console.log(index);

    console.log(e);

    $(e).parent().parent().parent().parent().fadeOut(100);
}

function zoomAndOpen(e) {
    console.log($(e).attr('id'));

    var waitTime = 600;

    $(e).zoomTo({targetsize:1.4, duration:waitTime});

    setTimeout(function(){
        console.log("ended");
        // window.location = "";
        if ($(e).attr('id') == "moloMain") {
            window.location.href = "molocow/Molocow.html";
        } else if ($(e).attr('id') == "remoteMain") {
            window.location.href = "remote/Index.html";
        } else {
            window.location.href = "uzivert/base.html";
        }
    }, waitTime);
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

