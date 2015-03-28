BuildWidget.prototype.resize = function() {
	var contentWidth = jQuery("#content").width();

	this.params.width = contentWidth - this.params.margin.left - this.params.margin.right;

	this.svg.attr("width", this.params.width + this.params.margin.left + this.params.margin.right);
};
