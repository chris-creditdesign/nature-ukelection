(function() {
	var init = function($) {
		// var d3URL = "js/d3.v3.min.js";
		var d3URL = "//www.nature.com/polopoly_static/js/d3.v3.min.js";

		$.getScript( d3URL )
			.done(function( script, textStatus ) {
				d3.sankey = sankey;
				var data = buildData();
				var params = buildParams("#chart");
				var width = $(window).width();

				/* If we are able to load the svg add 'Interactive:' to the headline */
				d3.select("#is-interactive").text("INTERACTIVE: ");

				var spaghettiChart = new BuildWidget(params, data);
				
				spaghettiChart.buildSVG();
				spaghettiChart.buildSankey();

				var resize = debounce(function() {
					if($(window).width() != width){
						width = $(window).width();
						spaghettiChart.resize();
						spaghettiChart.graphic.remove();
						spaghettiChart.buildSankey();
					}
					
				}, 100);

				window.addEventListener('resize', resize);

			});
	};

	setTimeout(function() {
		if (typeof jQuery !== 'undefined') {
			/*	jQuery ready test for svg */
			if ( document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image','1.1') ) {
				init(jQuery);
			} else {
				return;
			}
		} else {
			setTimeout(arguments.callee, 60);
		}
	}, 60);

})();