BuildWidget.prototype.buildSankey = function() {
	var self = this;
	
	var sankey = d3.sankey()
		.nodeWidth(15)
		.nodePadding(10)
		.size([this.params.width, this.params.height]);

	var path = sankey.link();

	sankey
		.nodes(this.data.nodes)
		.links(this.data.links)
		.layout(32);
	
	var link = this.graphic.append("g").selectAll(".link")
					.data(this.data.links)
				  .enter().append("path")
					.attr("class", "link")
					.attr("d", path)
					.attr("stroke", function (d) {
						return "url(#" + d.source.id + "-" + d.target.id + ")";
					})
					.style("stroke-width", function(d) { return Math.max(1, d.dy); })
					.sort(function(a, b) { return b.dy - a.dy; });

	/* What is this for? */
	// link.append("title")
	// 	.text(function(d) {
	// 		return d.source.name + " → " + d.target.name;
	// 	});

	var node = this.graphic.append("g").selectAll(".node")
					.data(this.data.nodes)
					.enter().append("g")
					.attr("class", "node")
					.attr("transform", function(d) {
		  				return "translate(" + d.x + "," + d.y + ")";
					})
					.call(
						d3.behavior.drag()
							.origin(function(d) { 
								return d;
							})
							.on("dragstart", function() {
								this.parentNode.appendChild(this);
							})
							.on("drag", dragmove)
					);

	node.append("rect")
		.attr("height", function(d) { return d.dy; })
		.attr("width", sankey.nodeWidth())
		.style("fill", function(d) {
			return self.params.colours[d.id];
		})
		.style("stroke", "none");

	  /* What is this for? */
	  //.append("title")
		//.text(function(d) { return d.name + "\n" + format(d.value); });

	node.append("text")
		.attr("x", -6)
		.attr("y", function(d) { return d.dy / 2; })
		.attr("dy", ".35em")
		.attr("text-anchor", "end")
		.attr("transform", null)
		.text(function(d) { return d.name; })
	  .filter(function(d) { return d.x < self.params.width / 2; })
		.attr("x", 6 + sankey.nodeWidth())
		.attr("text-anchor", "start");

	function dragmove(d) {
		d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(self.params.height - d.dy, d3.event.y))) + ")");
		sankey.relayout();
		link.attr("d", path);
	}
};
