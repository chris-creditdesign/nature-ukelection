BuildWidget.prototype.resize = function() {
	var contentWidth = jQuery("#content").width();

	this.params.width = contentWidth - this.params.margin.left - this.params.margin.right;
	this.params.height = contentWidth - this.params.margin.top - this.params.margin.bottom;
	
	this.params.sankeyWidth = this.params.width * this.params.heightRatio;
	this.params.sankeyHeight = this.params.height * this.params.heightRatio;


	this.svg.attr("width", this.params.width + this.params.margin.left + this.params.margin.right)
			.attr("height", this.params.sankeyHeight + this.params.margin.top + this.params.margin.bottom);

};
