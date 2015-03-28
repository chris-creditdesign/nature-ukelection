function buildData () {
	var data = {};

	data.nodes = [
		/* From */
		{"node":0, "name":"Conservative",		"id":"conservative", "year":2010,},
		{"node":1, "name":"Don't know",			"id":"dontKnow",	 "year":2010,},
		{"node":2, "name":"Green",				"id":"green",		 "year":2010,},
		{"node":3, "name":"Labour",				"id":"labour",		 "year":2010,},
		{"node":4, "name":"Liberal Democrats",	"id":"libDem",		 "year":2010,},
		{"node":5, "name":"Other",				"id":"other",		 "year":2010,},
		{"node":6, "name":"Plaid Cymru",		"id":"plaid",		 "year":2010,},
		{"node":7, "name":"SNP",				"id":"snp",			 "year":2010,},
		{"node":8, "name":"UKIP",				"id":"ukip",		 "year":2010,},
		/* To */
		{"node":9, "name":"Conservative",		"id":"conservative", "year":2015,},
		{"node":10, "name":"Undecided",			"id":"undecided",	 "year":2015,},
		{"node":11, "name":"Green",				"id":"green",		 "year":2015,},
		{"node":12, "name":"Labour",			"id":"labour",		 "year":2015,},
		{"node":13, "name":"Liberal Democrats",	"id":"libDem",		 "year":2015,},
		{"node":14, "name":"Other",				"id":"other",		 "year":2015,},
		{"node":15, "name":"Plaid Cymru",		"id":"plaid",		 "year":2015,},
		{"node":16, "name":"SNP",				"id":"snp",			 "year":2015,},
		{"node":17, "name":"UKIP",				"id":"ukip",		 "year":2015,},
		{"node":18, "name":"Not voting",		"id":"notVoting",		 "year":2015,}
	];

	data.links = [
          /* Conservatieve 2010 */
          {"source":0, "target":9, "value": 28},
          {"source":0, "target":10, "value": 9},
          {"source":0, "target":12, "value": 2},
          {"source":0, "target":13, "value": 3},
          {"source":0, "target":16, "value": 1},
          {"source":0, "target":17, "value": 2},

          /* Don't know 2010 */
          {"source":1, "target":10, "value": 18},
          {"source":1, "target":13, "value": 2},
          {"source":1, "target":18, "value": 5},

          /* Green 2010 */
          {"source":2, "target":10, "value": 5},
          {"source":2, "target":11, "value": 10},
          {"source":2, "target":12, "value": 1},
          {"source":2, "target":18, "value": 1},
          {"source":2, "target":16, "value": 1},
          
          /* Labour 2010 */
          {"source":3, "target":9, "value": 2},
          {"source":3, "target":11, "value": 9},
          {"source":3, "target":12, "value": 53},
          {"source":3, "target":13, "value": 4},
          {"source":3, "target":15, "value": 1},
          {"source":3, "target":16, "value": 4},
          {"source":3, "target":17, "value": 1},
          {"source":3, "target":10, "value": 22},
        
          /* Lib Dem 2010 */
          {"source":4, "target":9, "value": 5},
          {"source":4, "target":10, "value": 39},
          {"source":4, "target":11, "value": 11},
          {"source":4, "target":12, "value": 17},
          {"source":4, "target":13, "value": 25},
          {"source":4, "target":16, "value": 1},
        
          /* Other 2010 */
          {"source":5, "target":9, "value": 1},
          {"source":5, "target":10, "value": 5},
          {"source":5, "target":18, "value": 4},
          {"source":5, "target":14, "value": 6},
        
          /* Plaid 2010 */
          {"source":6, "target":10, "value": 1},
        
          /* SNP 2010 */
          {"source":7, "target":16, "value": 11},
          {"source":7, "target":10, "value": 1},
        
          /* UKIP 2010 */
          {"source":8, "target":17, "value": 4}
	];

	return data;
}
