BuildWidget.prototype.buildSVG = function() {
	
	this.svg = d3.select(this.params.target).append("svg")
		.attr("width", this.params.width + this.params.margin.left + this.params.margin.right)
		.attr("height", this.params.height + this.params.margin.top + this.params.margin.bottom);

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
