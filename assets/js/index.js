(function() {
	var init = function($) {
		// var d3URL = "http://www.nature.com/widget_assets_polopoly/v518n7538/d3.v3.min.js";

		var dataURL = "data/energy6.json";
		var d3URL = "js/d3.v3.min.js";
		var sankeyURL = "js/sankey.js";

		$.when( $.getScript(d3URL),
				$.getScript(sankeyURL)
		).then( function () {

			/*	Load the data in parallel */
			/*	https://groups.google.com/forum/#!msg/d3-js/3Y9VHkOOdCM/YnmOPopWUxQJ */
			var data;
			var remaining = 1;
			var width = $(window).width();

			d3.json(dataURL, function (error, d) {
				if (error) {
					$(".widget-error-message").css("display","block");
				} else {
					data = d;
					if (!--remaining) buildGraphic(d);
				}
			});

			window.onresize = resize;

		}, function (error) {
			$(".widget-error-message").css("display","block");
			console.log("It's not loaded!");

		});


	/* End of active code */
	};

	setTimeout(function() {
		if (typeof jQuery !== 'undefined') {
			/*	jQuery ready test for svg */
			if ( document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image','1.1') ) {
				init(jQuery);
			} else {
				jQuery(".widget-status-message").css("display","block");
			}
		} else {
			setTimeout(arguments.callee, 60);
		}
	}, 60);

})();