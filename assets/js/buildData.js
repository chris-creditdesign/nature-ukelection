function buildData () {
	var data = {};

	data.nodes = [
		/* From */
		{"node":0, "name":"Conservative", "id":"conservative", "year":2010,},
		{"node":1, "name":"None or other",  "id":"none", "year":2010,},
		{"node":2, "name":"Green", "id":"green", "year":2010,},
		{"node":3, "name":"Labour", "id":"labour", "year":2010,},
		{"node":4, "name":"Liberal Democrats", "id":"libDem", "year":2010,},
		{"node":5, "name":"Plaid Cymru", "id":"plaid", "year":2010,},
		{"node":6, "name":"SNP", "id":"snp", "year":2010,},
		{"node":7, "name":"UKIP", "id":"ukip", "year":2010,},
		/* To */
		{"node":8, "name":"Conservative", "id":"conservative", "year":2015,},
		{"node":9, "name":"None, other or undecided", "id":"none", "year":2015,},
		{"node":10, "name":"Green", "id":"green", "year":2015,},
		{"node":11, "name":"Labour", "id":"labour", "year":2015,},
		{"node":12, "name":"Liberal Democrats", "id":"libDem", "year":2015,},
		{"node":13, "name":"Plaid Cymru", "id":"plaid", "year":2015,},
		{"node":14, "name":"SNP", "id":"snp", "year":2015,},
		{"node":15, "name":"UKIP", "id":"ukip", "year":2015,}
	];

	data.links = [
		/* Conservatieve 2010 */
		{"source":0, "target":8, "value": 28},
		{"source":0, "target":9, "value": 9},
		{"source":0, "target":11, "value": 2},
		{"source":0, "target":12, "value": 3},
		{"source":0, "target":14, "value": 1},
		{"source":0, "target":15, "value": 2},

		/* Don't know 2010 */
		{"source":1, "target":8, "value": 1},
		{"source":1, "target":9, "value": 38},
		{"source":1, "target":12, "value": 2},

		/* Green 2010 */
		{"source":2, "target":9, "value": 6},
		{"source":2, "target":10, "value": 10},
		{"source":2, "target":11, "value": 1},
		{"source":2, "target":14, "value": 1},

		/* Labour 2010 */
		{"source":3, "target":8, "value": 2},
		{"source":3, "target":9, "value": 22},
		{"source":3, "target":10, "value": 9},
		{"source":3, "target":11, "value": 53},
		{"source":3, "target":12, "value": 4},
		{"source":3, "target":13, "value": 1},
		{"source":3, "target":14, "value": 4},
		{"source":3, "target":15, "value": 1},

		/* Lib Dem 2010 */
		{"source":4, "target":8, "value": 5},
		{"source":4, "target":9, "value": 39},
		{"source":4, "target":10, "value": 11},
		{"source":4, "target":11, "value": 17},
		{"source":4, "target":12, "value": 25},
		{"source":4, "target":14, "value": 1},

		/* Plaid 2010 */
		{"source":5, "target":9, "value": 1},

		/* SNP 2010 */
		{"source":6, "target":14, "value": 11},
		{"source":6, "target":9, "value": 1},

		/* UKIP 2010 */
		{"source":7, "target":15, "value": 4}
	];

	return data;
}
