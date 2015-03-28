function buildParams (target) {
	var params = {};

	var contentWidth = jQuery("#content").width();

	params.margin = {top: 1, right: 10, bottom: 6, left: 10};
	params.width = contentWidth - params.margin.left - params.margin.right;
	params.height = 500 - params.margin.top - params.margin.bottom;

	params.highOpacity = 1;
	params.lowOpacity = 0.3;

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

	return params;
}
