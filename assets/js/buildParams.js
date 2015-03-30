function buildParams (target) {
	var params = {};

	var contentWidth = jQuery("#content").width() - 20;

	params.heightRatio = 0.8;

	params.width = contentWidth;
	params.height = contentWidth;
	params.sankeyWidth = params.width * params.heightRatio;
	params.sankeyHeight = params.height * params.heightRatio;

	params.highOpacity = 1;
	params.lowOpacity = 0.3;

	params.target = target;

	params.colours = {
		conservative: "#006CB1",
		none: "#868987",
		green: "#46A72C",
		labour: "#A7141D",
		libDem: "#FED459",
		plaid: "#01632C",
		snp: "#F8B435",
		ukip: "#B570A7"
	};

	return params;
}
