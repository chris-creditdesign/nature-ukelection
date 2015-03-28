function buildParams (target) {
	var params = {};

	params.margin = {top: 1, right: 1, bottom: 6, left: 1};
	params.width = 630 - params.margin.left - params.margin.right;
	params.height = 500 - params.margin.top - params.margin.bottom;

	params.target = target;

	params.colours = {
		conservative: "#006CB1",
		dontKnow: "#868987",
		green: "#46A72C",
		labour: "#A7141D",
		libDem: "#FED459",
		other: "#",
		plaid: "#01632C",
		snp: "#F8B435",
		ukip: "#B570A7",
		undecided: "#868987",
		notVoting: "#868987"
	};


	// params.formatNumber = d3.format(",.0f");
	// params.format = function(d) { return formatNumber(d) + " TWh"; };

	return params;
}
