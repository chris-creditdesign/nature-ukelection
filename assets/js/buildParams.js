function buildParams (target) {
	var params = {};

	params.margin = {top: 1, right: 1, bottom: 6, left: 1};
	params.width = 630 - params.margin.left - params.margin.right;
	params.height = 500 - params.margin.top - params.margin.bottom;

	params.target = target;

	// params.formatNumber = d3.format(",.0f");
	// params.format = function(d) { return formatNumber(d) + " TWh"; };

	return params;
}
