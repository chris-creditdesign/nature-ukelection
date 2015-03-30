BuildWidget.prototype.resize = function() {
	var contentWidth = jQuery("#content").width() - 20;

	this.params.width = contentWidth;
	this.params.height = contentWidth;
	
	this.params.sankeyWidth = this.params.width * this.params.heightRatio;
	this.params.sankeyHeight = this.params.height * this.params.heightRatio;


	this.svg.attr("width", this.params.width)
			.attr("height", this.params.sankeyHeight);

};
