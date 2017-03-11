//core element vars
var twitchList = $('#twitchCheck');

function init() {
    buildTwitch();
}

function buildTwitch() {
    var twitchTemp = "";
    var channelNames = [
                        "gamesdonequick", 
                        "pokerstars", 
                        "northernlion", 
                        "dreamhackcs", 
                        "summit1g",
                        "Starladder5"
                        ];

    for (var i = channelNames.length - 1; i >= 0; i--) {
      $.getJSON('https://api.twitch.tv/kraken/streams/' + channelNames[i] + '?client_id=i13gboueps0q51i7hxcglvx7j4ewgf', function(channel) {
          
          if (channel["stream"] == null) {
              console.log("Offline");

              // twitchTemp += "<h2>offline</h2>";
          } else {
              console.log("Online");
              twitchTemp += "<li>";
              twitchTemp += "<span></span>";
              twitchTemp += "<div class='leftDiv'>";
              twitchTemp += "<h1 class='header'>" + channel["stream"]["channel"]["display_name"] + "</h1>";
              twitchTemp += "<h2 class='game'>"+channel["stream"]["game"]+"</h2>";
              twitchTemp += "</div>";
              twitchTemp += "<a href="+channel["stream"]["channel"]["url"]+">watch</a>";
              twitchTemp += "<h2 class='viewers'>"+channel["stream"]["viewers"]+"</h2>";
              twitchTemp += "</li>";

              // twitchTemp  += "<li><span></span><h1 class='header'>"
              //             +channel["stream"]["channel"]["display_name"]
              //             +"</h1><h2 class='game'>"
              //             +channel["stream"]["game"]
              //             +"</h2><h2 class='viewers'>"
              //             +channel["stream"]["viewers"]
              //             +" viewers </h2>"
              //             +"</li>"
          }
          twitchList.html(twitchTemp);
      });
    };
      
}

function addClass(elementID, className) {
    $(elementID).classList.add(className);
}

function removeClass(elementID, className) {
    $(elementID).classList.remove(className);
}
