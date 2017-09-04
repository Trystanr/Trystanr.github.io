var redditList = $('#redditList');

function init() {
  buildReddit();
}

function buildReddit() {
  var redditTemp = "";

  $.getJSON('https://www.reddit.com/r/all/hot/.json?count=1', function(channel) {
    // console.log(channel.data.children[0].data.title);

    channel.data.children.forEach(function(post) {
      console.log(post.data);

      redditTemp += "<li>";

        redditTemp += "<h1>";
        redditTemp += post.data.title;
        redditTemp += "</h1>";

        redditTemp += "<a href='";
        redditTemp += post.data.url;
        redditTemp += "'>link</a>";

        redditTemp += "<h2>u/";
        redditTemp += post.data.author;
        redditTemp += "</h2>";
        
        redditTemp += "<h3>r/";
        redditTemp += post.data.subreddit;
        redditTemp += "</h3>";

      redditTemp += "</li>";

    });

    redditList.html(redditTemp);
  });
}

function addClass(elementID, className) {
    $(elementID).classList.add(className);
}

function removeClass(elementID, className) {
    $(elementID).classList.remove(className);
}
