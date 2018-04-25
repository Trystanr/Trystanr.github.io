$("form :input").focus(function() {
  $("label[for='" + this.id + "']").addClass("labelfocus");
}).blur(function() {
  $("label").removeClass("labelfocus");
});


//NAV MENU

var bMenuToggle = false;

$( "#nav-toggle" ).on( "click", function() {
	if (bMenuToggle) {
		//Close menu

		bMenuToggle = false;
		$( "#navbar" ).removeClass("nav-full");
		$('body').off('scroll mousewheel touchmove', stopScrolling);

		$("#nav-toggle").html(" <i class='ionicons ion-navicon-round'></i> ");

		$("#nav-body li").each( function(e) {
			$(this).removeClass("fadeInLeft");
		});
	} else {
		//Open menu

		bMenuToggle = true;
		$( "#navbar" ).addClass("nav-full");
		$('body').on('scroll mousewheel touchmove', stopScrolling);

		$("#nav-toggle").html(" <i class='ionicons ion-close'></i> ");

		$("#nav-body li").each( function(e) {
			$(this).addClass("fadeInLeft");
		});
	}
});

function stopScrolling (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}


// LOGIN/REGISTER TOGGLE

$("#action-cont a").on("click", function(i) {
	console.log($(this).index()); // 0 -log in, 1 - register

	$("#action-cont a").each( function(i) {
		$(this).removeClass('selected');
	});

	$(this).addClass('selected');

	if ($(this).index() == 0) {
		// Log in
		$("#register-cont").hide();
		$("#login-cont").show();
	} else {
		// Register
		$("#login-cont").hide();
		$("#register-cont").show();
	}

});



$('.job-slider').slick({
   	infinite: true,
   	dots: false,
  	slidesToShow: 1,
  	slidesToScroll: 3,
  	centerMode: true,
  	arrows: false
});;




