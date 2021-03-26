const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Drawers",
				weight: 12.3
			}, {
				text: "TV Sets",
				weight: 8
			}, {
				text: "Desks",
				weight: 14
			}, {
				text: "Couches",
				weight: 3
			}, {
				text: "Camping Equipment",
				weight: 7
			}, {
				text: "Outdoor Furniture",
				weight: 10
			}, {
				text: "Computers",
				weight: 9
			}, {
				text: "Accessories",
				weight: 15
			}, {
				text: "Miscellenous",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"We buy new and used goods.", "We sell quality affordable new and second-hand goods.", "Buy back options available.","Lay-bye available. ", "Partnering with you!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
