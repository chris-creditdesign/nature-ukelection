BuildWidget.prototype.buildSVG = function() {

	d3.select(this.params.target).select("img").remove();
	
	this.svg = d3.select(this.params.target).append("svg")
		.attr("width", this.params.width)
		.attr("height", this.params.sankeyHeight);

	/* Iterate through each of the colours and create a gradient for each combination */
	var gradient;
	for (var start in this.params.colours ) {
		for (var end in this.params.colours) {

			gradient = this.svg.append("svg:defs")
			  .append("svg:linearGradient")
				.attr("id", start + "-" + end)
				.attr("gradientUnits","userSpaceOnUse");

			gradient.append("svg:stop")
				.attr("offset", "30%")
				.attr("stop-color", this.params.colours[start])
				.attr("stop-opacity", 1);

			gradient.append("svg:stop")
				.attr("offset", "70%")
				.attr("stop-color", this.params.colours[end])
				.attr("stop-opacity", 1);
		}
	}
};
