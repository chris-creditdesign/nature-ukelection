BuildWidget.prototype.buildSVG = function() {
	
	this.svg = d3.select(this.params.target).append("svg")
		.attr("width", this.params.width + this.params.margin.left + this.params.margin.right)
		.attr("height", this.params.height + this.params.margin.top + this.params.margin.bottom);
	
	var gradient = this.svg.append("svg:defs")
	  .append("svg:linearGradient")
		.attr("id", "gradient")
		.attr("gradientUnits","userSpaceOnUse");

	gradient.append("svg:stop")
		.attr("offset", "0%")
		.attr("stop-color", "#0c0")
		.attr("stop-opacity", 1);

	gradient.append("svg:stop")
		.attr("offset", "100%")
		.attr("stop-color", "#c00")
		.attr("stop-opacity", 1);

	this.graphic = this.svg.append("g")
		.attr("transform", "translate(" + this.params.margin.left + "," + this.params.margin.top + ")");
};
