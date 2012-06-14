/*
		Title: Fruition (Gold)
		Author: Philip Ainsworth
		Class: Mobile Interfaces and Usability
		Session: 1206
		Week: 2
*/

// Element shortcut
var gid = function (x) {
	var element = document.getElementById(x);
	return element;
};

// Future functionality

/*var createProList = function () {
	for(i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var proHArray = [];
		for (var n in obj) {
			proHArray.push(obj[n][1]);
		};
		var p1head = gid('p1h');
		var p2head = gid('p2h');
		var p3head = gid('p3h');
		var p4head = gid('p4h');
		var p5head = gid('p5h');
		for (var f = 0; f < proHArray.length; f++) {
			var title = "p" + (f+1) + "head"
			title.innerHTML = proHArray[f];
			listing.setAttribute("class", "ui-li ui-li-static ui-body-a");
		};
	};
	
};*/

var	cat1Array = [],
	cat2Array = [],
	pro1Array = [],
	pro2Array = [],
	pro3Array = [],
	pro4Array = [],
	pro5Array = [];

var makeCatArray = function() {
	for(var i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		for (var n in obj) {
			if (obj[n][1] === "Home") {
				cat1Array.push(obj['taskName'][1]);
			} else if (obj[n][1] === "Work") {
				cat2Array.push(obj['taskName'][1]);
			};
		};
	};
}

var makeProArray = function() {
	for(var i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		for (var n in obj) {
			if (obj[n][1] === "Shopping") {
				pro1Array.push(obj['taskName'][1]);
			} else if (obj[n][1] === "Homework") {
				pro2Array.push(obj['taskName'][1]);
			} else if (obj[n][1] === "Scheduled") {
				pro3Array.push(obj['taskName'][1]);
			} else if (obj[n][1] === "Appointment") {
				pro4Array.push(obj['taskName'][1]);
			} else if (obj[n][1] === "Household") {
				pro5Array.push(obj['taskName'][1]);
			};
		};
	};
};

//Create list
var listDataByCategory = function () {
	var getHanger = gid('catHanger'),
		cat1List = gid('cat1'),
		cat2List = gid('cat2'),
		stile = "ui-li ui-li-static ui-body-a";
	makeCatArray();
	for (var f=0; f<cat1Array.length; f++) {
		if (f===cat1Array.length-1) {
			stile = "ui-li ui-li-static ui-body-a ui-corner-bottom";
		};
		var listing = document.createElement('li');
		cat1List.appendChild(listing);
		listing.setAttribute("class", stile);
		listing.innerHTML = cat1Array[f];
		stile = "ui-li ui-li-static ui-body-a";
	};
	for (var f=0; f<cat2Array.length; f++) {
		if (f===cat2Array.length-1) {
			stile = "ui-li ui-li-static ui-body-a ui-corner-bottom";
		};
		var listing = document.createElement('li');
		cat2List.appendChild(listing);
		listing.setAttribute("class", stile);
		listing.innerHTML = cat2Array[f];
	};
	$("#catHanger").trigger('create');
};

var listDataByProject = function () {
	var getHanger = gid('proHanger'),
		pro1List = gid('pro1'),
		pro2List = gid('pro2'),
		pro3List = gid('pro3'),
		pro4List = gid('pro4'),
		pro5List = gid('pro5'),
		stile = "ui-li ui-li-static ui-body-a";
	makeProArray();
	for (var f=0; f<pro1Array.length; f++) {
		if (f===pro1Array.length-1) {
			stile = "ui-li ui-li-static ui-body-a ui-corner-bottom";
		};
		var listing = document.createElement('li');
		pro1List.appendChild(listing);
		listing.setAttribute("class", stile);
		listing.innerHTML = pro1Array[f];
		stile = "ui-li ui-li-static ui-body-a";
	};
	for (var f=0; f<pro2Array.length; f++) {
		if (f===pro2Array.length-1) {
			stile = "ui-li ui-li-static ui-body-a ui-corner-bottom";
		};
		var listing = document.createElement('li');
		pro2List.appendChild(listing);
		listing.setAttribute("class", stile);
		listing.innerHTML = pro2Array[f];
		stile = "ui-li ui-li-static ui-body-a";
	};
	for (var f=0; f<pro3Array.length; f++) {
		if (f===pro3Array.length-1) {
			stile = "ui-li ui-li-static ui-body-a ui-corner-bottom";
		};
		var listing = document.createElement('li');
		pro3List.appendChild(listing);
		listing.setAttribute("class", stile);
		listing.innerHTML = pro3Array[f];
		stile = "ui-li ui-li-static ui-body-a";
	};
	for (var f=0; f<pro4Array.length; f++) {
		if (f===pro4Array.length-1) {
			stile = "ui-li ui-li-static ui-body-a ui-corner-bottom";
		};
		var listing = document.createElement('li');
		pro4List.appendChild(listing);
		listing.setAttribute("class", stile);
		listing.innerHTML = pro4Array[f];
		stile = "ui-li ui-li-static ui-body-a";
	};
	for (var f=0; f<pro5Array.length; f++) {
		if (f===pro5Array.length-1) {
			stile = "ui-li ui-li-static ui-body-a ui-corner-bottom";
		};
		var listing = document.createElement('li');
		pro5List.appendChild(listing);
		listing.setAttribute("class", stile);
		listing.innerHTML = pro5Array[f];
	};
	$("#proHanger").trigger('create');
};
