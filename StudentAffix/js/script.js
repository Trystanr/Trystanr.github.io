$("form :input").focus(function() {
  $("label[for='" + this.id + "']").addClass("labelfocus");
}).blur(function() {
  $("label").removeClass("labelfocus");
});

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