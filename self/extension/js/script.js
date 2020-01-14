
var channelNames = [];

var bMenu = false;

function buildThemes() {
	console.log(themes);

	var themeArr = '';

	for (var i = 0; i < themes.length; i++) {
		var themeItem = '<input type="radio" name="radTheme" id="radTheme' +(i+1)+ '" value="' +(i+1)+ '">';
    	themeItem += '<label for="radTheme' +(i+1)+ '" class="theme-label">';

		for (var n = 0; n < themes[i].colours.length; n++) {
			
			themeItem += '<div style="background-color: #'+themes[i].colours[n]+'"></div>';
		}

		themeItem += "</label>";

		themeArr += themeItem;
	}

	$("#accordian-theme").append(themeArr);
}

function loadChannelsToArray() {
	chrome.storage.sync.get('channelNames', function(object) {
		channelNames = object.channelNames;

		drawTwitchSettings();
		buildTwitch();
		$( "#accordian" ).accordion({
			heightStyle: "content",
    		collapsible: true
    	});
	});
}

function addChannelToArray(channelName) {
	var iTempChannels = [];
	var bExists = false;

	chrome.storage.sync.get('channelNames', function(object) {

		if (object.channelNames != undefined) {
			iTempChannels = object.channelNames;
		}

		if ($.inArray(channelName, iTempChannels) != -1) {
			showAlert("That channel has already been added.", false);
			bExists = true;
		} else {
			iTempChannels.push(channelName);
		}

		chrome.storage.sync.set({ 'channelNames': iTempChannels }, function() {
			if (!bExists) {
				$("#channelSettingsList").append("<li class='delList'>" + channelName + "<a href='#' class='deleteItem'>x</a>" + "</li>");
				showAlert("Channel Added! Refresh to see changes.", true);
			}
		});
	});
}

function deleteChannelFromArray(channelIndex) {
	var iTemp = [];

	chrome.storage.sync.get('channelNames', function(object) {

		for (var i = 0; i < object.channelNames.length; i++) {
			// console.log(object.channelNames[i]);

			if (i != channelIndex) {
				iTemp.push(object.channelNames[i]);
			}
		}

		console.log(iTemp);

		chrome.storage.sync.set({ 'channelNames': iTemp }, function() {
			console.log('Settings saved');
			showAlert("Channel Deleted! Refresh to see changes.", true);
		});
	});
}

function clearChannelArray() {
	chrome.storage.sync.remove('channelNames', function() {
		console.log('Channels Cleared');

		$("#channelSettingsList li").remove();

		showAlert("Channels Cleared! Refresh to see changes.", true);
	});
}

function drawTwitchSettings() {
	if (channelNames !== undefined) {
		channelNames.forEach(function(item) {
			$("#channelSettingsList").append("<li class='delList'>" + item + "<a href='#' class='deleteItem'>x</a>" + "</li>");
		});
	}
}

function toggleSettings() {

	if ($("#settingsDialog").hasClass("showSettings")) {
		$("#settingsDialog").removeClass("showSettings");
		bMenu = false;


		$("#settingsIcon").addClass("fa-cog");
		$("#settingsIcon").removeClass("fa-times-circle");

	} else {
		$("#settingsDialog").addClass("showSettings");
		bMenu = true;

		$("#settingsIcon").removeClass("fa-cog");
		$("#settingsIcon").addClass("fa-times-circle");
	}

}

function showAlert(text, bRefresh = false) {
	if (bRefresh) {
		$("#alertDialog").find("p")[0].innerHTML = "<span>" + text + "</span>" + '<a href=# id="refresh-clicker"><i class="fa fa-refresh" aria-hidden="false"></i></a>';

		$("#alertDialog").addClass("showAlert");
	} else {
		$("#alertDialog").find("p")[0].innerHTML = "<span>" + text + "</span>";

		$("#alertDialog").addClass("showAlert");

		setTimeout(function() {
			$("#alertDialog").removeClass("showAlert");
		}, 10000);
	}


}

function GetClock() {
	var d = new Date();
	var nhour = d.getHours(),
		nmin = d.getMinutes();
	if (nmin <= 9) nmin = "0" + nmin

	document.getElementById('timedude').innerHTML = "" + nhour + ":" + nmin + "";
	
	getDate();
}

var tday = new Array("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
var tmonth = new Array("jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec");

function getDate() {
	var a = new Date();
	var nday = a.getDay(),
		nmonth = a.getMonth(),
		ndate = a.getDate();

	document.getElementById('datedude').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + "";
}

//core element vars
var twitchList = $('#twitchList');
var hhhList = $('#hhhList');

function buildTwitch() {
	var twitchTemp = "";

	var channelBuilt = "";
	// console.log(channelNames);
	if (channelNames !== undefined) {

		for (var i = channelNames.length - 1; i >= 0; i--) {

		    if (i==(channelNames.length-1)) {
				channelBuilt += "?user_login=" + channelNames[i];
		    } else {
		    	channelBuilt += "&user_login=" + channelNames[i];
		    }
		
		};

		var req = "https://api.twitch.tv/helix/streams/" + channelBuilt;

		var XML = new XMLHttpRequest();

		XML.open("GET", req);
		XML.setRequestHeader('Client-ID', 'i13gboueps0q51i7hxcglvx7j4ewgf');
		XML.send();

		XML.onload = function (channel) {

		  	channel = JSON.parse(XML.response);

		  	if (channel.data[0] !== undefined) {
			  	
		  		for (var i = 0; i < channel.data.length; i++) {
		  			// console.log(channel.data[i].user_name);

		  			if (channel.data[0].type == "live") {
				  		// console.log("Online");

				  		twitchTemp += "<li>";

				  		twitchTemp += "<a href='";
				  		twitchTemp += "https://www.twitch.tv/"+channelNames[0];

				  		twitchTemp += "' title='";
				  		twitchTemp += channel.data[i].title;
				  		twitchTemp += "'>";

				  		twitchTemp += channel.data[i].user_name;

				  		twitchTemp += "</a>";
				  		twitchTemp += "</li>";
			  		}
		  		}

		  		twitchList.html(twitchTemp);
		  	}
		}


		var tempChan = "";

		twitchTemp += "<li><i class='fa fa-twitch'></i></li>";

	}	
}

function buildReddit() {
	var hhhTemp = "";

	hhhTemp += "<li><i class='fa fa-circle-o'></i></li>";

	$.getJSON('https://www.reddit.com/r/HipHopHeads/hot/.json?count=1', function(channel) {
		// console.log(channel.data.children[0].data.title);

		channel.data.children.forEach(function(post) {
			// console.log(post.data.title);

			if (post.data.title.substring(0, 7).toUpperCase() == "[FRESH]") {
				//Fresh song bro
				hhhTemp += "<li>";

				hhhTemp += "<a href='";
				hhhTemp += post.data.url;

				hhhTemp += "' title='";
				hhhTemp += post.data.title.substring(8);
				hhhTemp += "'>";

				if (post.data.title.length < 40) {
					hhhTemp += post.data.title.substring(0);
					//console.log(post.data.title.length);
				} else {
					hhhTemp += post.data.title.substring(0, 40);
					hhhTemp += "...";
				}



				hhhTemp += "</a>";
				hhhTemp += "</li>";

				//console.log(post.data.title);
			} else if (post.data.title.substring(0, 6).toUpperCase() == "[FRESH") {
				// console.log(post.data.title);

				//Fresh song bro
				hhhTemp += "<li>";

				hhhTemp += "<a href='";
				hhhTemp += post.data.url;

				hhhTemp += "' title='";
				hhhTemp += post.data.title.substring(0);
				hhhTemp += "'>";

				if (post.data.title.length < 40) {
					hhhTemp += post.data.title.substring(0);
					//console.log(post.data.title.length);
				} else {
					hhhTemp += post.data.title.substring(0, 40);
					hhhTemp += "...";
				}

				hhhTemp += "</a>";
				hhhTemp += "</li>";

				// TODO fuckin clean this up u scum
				// and make it remove fresh from one bracket to another
				// and a zoom in settings
				// and change from twitch to most visited, in fact, build a framework

				// Frameork details
				// Panel settings, drag and drop would be so fucking nice
				// A colour scheme selector, man... make a preview div fuck that would be bonkers
			}

		});

		hhhList.html(hhhTemp);
	});
}


function addClass(elementID, className) {
	$(elementID).classList.add(className);
}

function removeClass(elementID, className) {
	$(elementID).classList.remove(className);
}


window.onload = function() {
	GetClock();
	setInterval(GetClock, 30000);

	buildThemes();

	loadChannelsToArray();

	buildReddit();


	chrome.topSites.get( function(mostVisitedURLs) {
		// console.log(mostVisitedURLs);
	});

}

$(document).click( function(){
	if (bMenu == false) {
   		// toggleSettings();
	} else {
   		toggleSettings();
	}
});

$('#settingsDialog').click( function(event){
    event.stopPropagation();
    // $('#drop').toggle();
});


$('#channelInput').keyup(function(e){
    if(e.keyCode == 13)
    {
        addChannelToArray($("#channelInput").val());
		$("#channelInput").val("");
    }
});

$("#channelInputAdd").on("click", function() {
	addChannelToArray($("#channelInput").val());
	$("#channelInput").val("");
});

$("#settings").on("click", function() {
	event.stopPropagation();
	toggleSettings();
});

$("#channelInputClear").on("click", function() {
	event.stopPropagation();
	clearChannelArray();
});

$(document).on('click', '#refresh-clicker', function() {
	event.stopPropagation();
	location.reload();
});

$("#settingsDialog").on('click', '.deleteItem', function() {
	event.stopPropagation();
	console.log($(this).parent().parent());

	console.log("Index: " + $("li").index($(this).parent()));


	deleteChannelFromArray($("li").index($(this).parent()));

	$(this).parent().remove();

});

$(document).on("click","#settingsDialog li .deleteItem", function(){
    console.log("Clicked.");
});


$("#settingsDialog").on("click","li", function(){
    console.log("Clicked.");
});

$("#settingsDialog").on("mouseup",".theme-label", function(){

	console.log("clicked")		

    console.log(((($(this).index())+1)/2)-1);

    var themeIndex = (((($(this).index())+1)/2)-1);

    chrome.storage.sync.set(
    	{ 	'tabPrefs': {
    			'theme': themeIndex
    		}
    	}
    );

    setTheme(themeIndex);


});

$("#settingsDialog input[type=radio][name=radTheme]").on("change","input", function(){

	console.log("chnages")
});
