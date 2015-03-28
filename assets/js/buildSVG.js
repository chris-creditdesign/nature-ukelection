BuildWidget.prototype.buildSVG = function() {
	
	this.svg = d3.select(this.params.target).append("svg")
		.attr("width", this.params.width + this.params.margin.left + this.params.margin.right)
		.attr("height", this.params.height + this.params.margin.top + this.params.margin.bottom);

	/* Iterate through each of the colours and create a gradient for each combination */
	var gradient;
	for (var start in this.params.colours ) {
		// console.log(start + " " + this.params.colours[start]);
		for (var end in this.params.colours) {
			// console.log(start + "-" + end);

			gradient = this.svg.append("svg:defs")
			  .append("svg:linearGradient")
				.attr("id", start + "-" + end)
				.attr("gradientUnits","userSpaceOnUse");

			gradient.append("svg:stop")
				.attr("offset", "0%")
				.attr("stop-color", this.params.colours[start])
				.attr("stop-opacity", 1);

			gradient.append("svg:stop")
				.attr("offset", "100%")
				.attr("stop-color", this.params.colours[end])
				.attr("stop-opacity", 1);
		}
	}
	
	this.graphic = this.svg.append("g")
		.attr("transform", "translate(" + this.params.margin.left + "," + this.params.margin.top + ")");
};
