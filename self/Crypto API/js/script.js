// Open the console when viewing this page to view logs

// API used: https://www.cryptocompare.com/api
// Unreal API collection of every coin api

// Using $("") is jQuery's way of calling code
// The selector is the text inside the brackets
// The selector works the same way css works, so a class is called with .className and an id is called with #idName
// You can also use elements such as calling a paragraph using $( "p" )

// This appends a function to the a element with the id getCoinList
$( "#getCoinList" ).click(function() {

	// $.ajax is used to make an api call with the parameters below
	// http://api.jquery.com/jquery.ajax/ for more info
	$.ajax({
		url : "https://min-api.cryptocompare.com/data/all/coinlist",
		dataType : "json",
		beforeSend : function() {
			console.log("Sending");
		}
	})	
		.done(function( res ) {
			console.log(res);
			console.log(res.Response);

			// Here we create an object that has been parsed as JSON so that we can work with it
			// We dont want to use the function data as it might have to be changed
			// http://www.tutorialspoint.com/json/ for a tutorial
			var coinData = res.Data;

			//Not needed, but we use this url to get images as well
			var baseImage = res.BaseImageUrl;

			// Use this way to get specific coins as some coins are garbage and start with numbers
			// coinData[42]
			// coinData["BTC"]

			// Lets fill the coinSingleDataList with a single coins data

			var singleCoinName = "BTC"; //Change this to a coins name
			console.log(coinData[singleCoinName]);
			// We create a list item with data and append it to the ul
			
			$('<li />', 
				{
					html: 
						$('<img />', 
						{
							src : baseImage + coinData[singleCoinName].ImageUrl
						})
				}
			).appendTo('ul#coinSingleDataList');

			$('<li />', 
				{
					html: coinData[singleCoinName].Symbol
				}
			).appendTo('ul#coinSingleDataList');

			$('<li />', 
				{
					html: coinData[singleCoinName].CoinName
				}
			).appendTo('ul#coinSingleDataList');



			// Fill the list with every single coin returned (just the name).
			$.each(coinData,function(index, value){
			    console.log(value.CoinName);
			    $('<li />', 
			    	{
			    		html: value.CoinName
			    	}
			    ).appendTo('ul#coinDataList');
			});

		});

	// Even though the .done function is not immediately connected to the brackets, it is still called even with whitespace. 
	// This is done for readability
	// A raw version of the simple form of this code looks like: $.ajax({url:"https://min-api.cryptocompare.com/data/all/coinlist"}).done(function(res){console.log(res);});

});