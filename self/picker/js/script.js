var $dayCar = $('#dayCar.main-carousel').flickity({
	cellAlign: 'center',
	pageDots: false,
	wrapAround: true
});

var $monCar = $('#monCar.main-carousel').flickity({
	cellAlign: 'center',
	pageDots: false,
	wrapAround: true
});

var $yrCar = $('#yrCar.main-carousel').flickity({
	cellAlign: 'center',
	pageDots: false,
	wrapAround: true
});

$("#date-confirm").on("click", function() {
	$("#date-picker").addClass("picker-hidden");

	// var flkty = $dayCar.data('flickity').selectedIndex;

	// console.log( flkty.selectedIndex, flkty.selectedElement );
	// console.log($("#date-picker").data("target-elem"));

	var targetElem = $("#date-picker").data("target-elem");

	console.log(  $dayCar.data('flickity').selectedElement.innerHTML );
	console.log(  $monCar.data('flickity').selectedElement.innerHTML );
	console.log(  $yrCar.data('flickity').selectedElement.innerHTML );

	var sDate = ($dayCar.data('flickity').selectedElement.innerHTML);
	sDate += "-";
	sDate += $monCar.data('flickity').selectedElement.innerHTML;
	sDate += "-";
	sDate += $yrCar.data('flickity').selectedElement.innerHTML;

	console.log(document.getElementById(targetElem));
	document.getElementById(targetElem).innerHTML = sDate;

});

$("#show-picker").on("click", function(e) {
	$("#date-picker").removeClass("picker-hidden");
	$("#date-picker").data("target-elem",this.dataset.target);
});


