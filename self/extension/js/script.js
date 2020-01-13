var channelNames = [];
loadChannelsToArray();

var bMenu = false;

function loadChannelsToArray() {
	chrome.storage.sync.get('channelNames', function(object) {
		channelNames = object.channelNames;

		loadSettings();

	});
}

function addChannelToArray(channelName) {
	var iTemp = [];

	chrome.storage.sync.get('channelNames', function(object) {

		if (object.channelNames != undefined) {
			iTemp = object.channelNames;
		}

		console.log($.inArray(channelName, iTemp));
		if ($.inArray(channelName, iTemp) != -1) {
			console.log("That channel is already in the array!")
		} else {
			iTemp.push(channelName);
		}

		console.log(iTemp);

		chrome.storage.sync.set({ 'channelNames': iTemp }, function() {
			console.log('Settings saved');
			showAlert("Channel Added! Refresh to see changes.", true);
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
	});
}

function loadSettings() {
	channelNames.forEach(function(item) {


		$("#channelSettingsList").append("<li class='delList'>" + item + "<a href='#' class='deleteItem'>x</a>" + "</li>");

	});
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

// chrome.storage.sync.set({'channelNames': channelNames}, function() {
//           // Notify that we saved.
//           console.log('Settings saved');
// });

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

function buildTwitch(url) {
	var twitchTemp = "";



	if (channelNames != undefined) {
	for (var i = channelNames.length - 1; i >= 0; i--) {

            
        console.log(channelNames[i]);

        var req = "https://api.twitch.tv/helix/streams/?user_login=" + channelNames[i];

        if (req === "https://api.twitch.tv/helix/streams/?user_login=aurateur") {
        	console.log("exact same");
        }
        console.log(typeof(req));

	var XML = new XMLHttpRequest();

        // XML.open("GET", "https://api.twitch.tv/helix/streams/?user_login=" + channelNames[i]);
        // XML.open("GET", "https://api.twitch.tv/helix/streams/?user_login=aurateur");
        XML.open("GET", req);
        XML.setRequestHeader('Client-ID', 'i13gboueps0q51i7hxcglvx7j4ewgf');
        XML.send();

        XML.onload = function (channel) {
          console.log(JSON.parse(XML.response));
          channel = JSON.parse(XML.response);
          console.log(channel);

          if (channel.data[0] !== undefined) {
          	if (channel.data[0].type == "live") {
          		console.log("Online");

          		twitchTemp += "<li>";

          		twitchTemp += "<a href='";
          		twitchTemp += "https://www.twitch.tv/"+channelNames[i];

          		twitchTemp += "' title='";
          		twitchTemp += channel.data[0].title;
          		twitchTemp += "'>";

          		twitchTemp += channel.data[0].user_name;

          		twitchTemp += "</a>";
          		twitchTemp += "</li>";
          	}
          	twitchList.html(twitchTemp);
          }
        }

		// $.getJSON('https://api.twitch.tv/kraken/streams/' + channelNames[i] + '?client_id=i13gboueps0q51i7hxcglvx7j4ewgf', function(channel) {
		// $.getJSON('https://api.twitch.tv/helix/streams?user_login=' + channelNames[i]+ '?client_id=i13gboueps0q51i7hxcglvx7j4ewgf', function(channel) {
		// $.getJSON('https://api.twitch.tv/helix/streams', function(channel) {

		// 	if (channel["stream"] == null) {
		// 		console.log("Offline");
		// 	} else {
		// 		console.log("Online");

		// 		twitchTemp += "<li>";

		// 		twitchTemp += "<a href='";
		// 		twitchTemp += channel["stream"]["channel"]["url"];

		// 		twitchTemp += "' title='";
		// 		twitchTemp += "Playing " + channel["stream"]["game"];
		// 		twitchTemp += "'>";

		// 		twitchTemp += channel["stream"]["channel"]["display_name"];

		// 		twitchTemp += "</a>";
		// 		twitchTemp += "</li>";

		// 	}
		// 	twitchList.html(twitchTemp);
		// });
	};
	// });

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
				console.log(post.data.title);

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
	buildTwitch("https://api.myjson.com/bins/at057");
	buildReddit();
	GetClock();

	setInterval(GetClock, 30000);

	// $.getJSON("https://quotes.rest/qod", function(e) {
	// 	console.log(e.contents.quotes[0].quote);
	// 	showAlert(e.contents.quotes[0].quote);
	// });

	chrome.topSites.get( function(mostVisitedURLs) {
		console.log(mostVisitedURLs);
	});


	// showAlert("Refresh to see changes", true);
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
	// event.stopPropagation();
	console.log($(this).parent().parent());

	console.log("Index: " + $("li").index($(this).parent()));

	deleteChannelFromArray($("li").index($(this).parent()));
});

$(document).on("click","#settingsDialog li .deleteItem", function(){
    console.log("Clicked.");
});


$("#settingsDialog").on("click","li", function(){
    console.log("Clicked.");
});