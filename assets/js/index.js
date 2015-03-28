(function() {
	var init = function($) {
		// var d3URL = "http://www.nature.com/widget_assets_polopoly/v518n7538/d3.v3.min.js";

		var dataURL = "data/energy6.json";
		var d3URL = "js/d3.v3.min.js";
		var sankeyURL = "js/sankey.js";

		$.when( $.getScript(d3URL),
				$.getScript(sankeyURL)
		).then( function () {
		
			var data = buildData();
			var params = buildParams("#chart");

			var spaghettiChart = new BuildWidget(params, data);
			
			spaghettiChart.buildSVG();
			spaghettiChart.buildSankey();

			// var width = $(window).width();

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