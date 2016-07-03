$(document).ready(function() {

	// this is for RYU
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1200px'},
			500,
			function() {
			$(this).hide();
			$(this).css('left', '540px');
			});
	})

	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	})

	$(document).keydown(function(e) {
		if (e.which == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
	}})

	.keyup(function(e) {
		if (e.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
	}});

	
	// this is for HULK RYU
	$('.hulk-ryu').mouseenter(function() {
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').show();
	})

	.mouseleave(function() {
		$('.hulk-ryu-still').show();
		$('.hulk-ryu-ready').hide();
	})

	.mousedown(function() {
		playHadouken();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-throwing').show();
		$('.hulk-hadouken').finish().show()
		.animate(
			{'right': '1200px'},
			500,
			function() {
			$(this).hide();
			$(this).css('right', '540px');
			});
	})

	.mouseup(function() {
		$('.hulk-ryu-ready').show();
		$('.hulk-ryu-throwing').hide();
	})

	$(document).keydown(function(e) {
		if (e.which == 65) {
			$('.hulk-ryu-ready').hide();
			$('.hulk-ryu-still').hide();
			$('.hulk-ryu-cool').show();
	}})

	.keyup(function(e) {
		if (e.which == 65) {
			$('.hulk-ryu-cool').hide();
			$('.hulk-ryu-ready').show();
	}});

});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();	
};
