function buildData () {
	var data = {};

	data.nodes = [
		{"node":0,	"name":"Jean",		"year":2010, "colour":"hotpink"},
		{"node":1,	"name":"Martin",	"year":2010, "colour":"yellow"},
		{"node":2,	"name":"Steve",		"year":2010, "colour":"green"},
		{"node":3,	"name":"Jean",		"year":2015, "colour":"hotpink"},
		{"node":4,	"name":"Martin",	"year":2015, "colour":"yellow"},
		{"node":5,	"name":"Steve",		"year":2015, "colour":"green"}
	];

	data.links = [
		{"source":0,"target":3,"value":1},
		{"source":0,"target":4,"value":1},
		{"source":1,"target":3,"value":1},
		{"source":1,"target":4,"value":1},
		{"source":2,"target":3,"value":1},
		{"source":2,"target":5,"value":2}
	];

	return data;
}