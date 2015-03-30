BuildWidget.prototype.buildSankey = function() {
	var self = this;

	this.graphic = this.svg.append("g")
		.attr("transform", "translate(" + (this.params.margin.left + this.params.width) + "," + (this.params.margin.top - (this.params.height * (1 - this.params.heightRatio))) + ") rotate(-90 " + (this.params.width / 2) + " " + (this.params.height / 2) + ") scale(1,-1)");
	
	var sankey = d3.sankey()
		.nodeWidth(40)
		.nodePadding(10)
		.size([this.params.sankeyWidth, this.params.height]);

	var path = sankey.link();

	sankey
		.nodes(this.data.nodes)
		.links(this.data.links)
		.layout(32);
	
	var link = this.graphic.append("g").selectAll(".link")
					.data(this.data.links)
				  .enter().append("path")
					.attr("class", function (d) {
						return "link " + d.source.id + "2010 " + d.target.id + "2015";
					})
					.attr("d", path)
					.attr("stroke", function (d) {
						return "#aeaeae";
					})
					.style("stroke-width", function(d) { return Math.max(1, d.dy); })
					.style("stroke-opacity", this.params.lowOpacity)
					.sort(function(a, b) { return b.dy - a.dy; });

	var toplink = this.graphic.append("g").selectAll(".top-link")
					.data(this.data.links)
				  .enter().append("path")
					.attr("class", function (d) {
						return "top-link " + d.source.id + "2010 " + d.target.id + "2015";
					})
					.attr("d", path)
					.attr("stroke", function (d) {
						return "url(#" + d.source.id + "-" + d.target.id + ")";
					})
					.style("stroke-width", function(d) { return Math.max(1, d.dy); })
					.style("stroke-opacity", 0)
					.sort(function(a, b) { return b.dy - a.dy; })
					.on("mouseenter", function(d) {
						d3.select(this)
							.style("stroke-opacity", self.params.highOpacity);
					})
					.on("mouseleave", function (d) {
						d3.select(this)
							.style("stroke-opacity", 0);
					});

	var node = this.graphic.append("g").selectAll(".node")
					.data(this.data.nodes)
					.enter().append("g")
					.attr("class", "node")
					.attr("transform", function(d) {
		  				return "translate(" + d.x + "," + d.y + ")";
					});

	node.append("rect")
		.attr("height", function(d) { return d.dy; })
		.attr("width", sankey.nodeWidth())
		.style("fill", function(d) {
			return self.params.colours[d.id];
		})
		.style("stroke", "none")
		.on("mouseenter", function(d) {
			d3.select(self.params.target)
				.selectAll(".top-link." + d.id + d.year)
				.style("stroke-opacity", self.params.highOpacity);
		})
		.on("mouseleave", function (d) {
			d3.select(self.params.target)
				.selectAll(".top-link")
				.style("stroke-opacity", 0);
		});
};
