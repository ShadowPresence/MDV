/*
		Title: ProDucktive
		Author: Philip Ainsworth
		Class: Visual Frameworks
		Session: 1205
		Week: 3
*/

	// Element shortcut
	var gid = function (x) {
		var element = document.getElementById(x);
		return element;
	};
	
	//Create list
	var listDataByCategory = function () {
		var getHanger = gid('catHanger');
		for(i=0; i<localStorage.length; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var cat1Array = [];
			var cat2Array = [];
			for (var n in obj) {
				if (obj[n][1] === "Home") {
					cat1Array.push(obj['taskName'][1]);
				} else if (obj[n][1] === "Work") {
					cat2Array.push(obj['taskName'][1]);
				};
			};
			var cat1List = gid('cat1');
			var cat2List = gid('cat2');
			var listView = document.createElement('ul');
			listView.setAttribute("data-role", "listview");
			listView.setAttribute("data-inset", "true");
			listView.setAttribute("data-theme", "a");
			listView.setAttribute("class", "ui-listview ui-listview-inset ui-corner-all ui-shadow");
			for (var f = 0; f < cat1Array.length; f++) {
				var listing = document.createElement('li');
				cat1List.appendChild(listView);
				listView.appendChild(listing);
				listing.innerHTML = cat1Array[f];
				listing.setAttribute("class", "ui-li ui-li-static ui-body-a");
			};
			for (var f = 0; f < cat2Array.length; f++) {
				var listing = document.createElement('li');
				cat2List.appendChild(listView);
				listView.appendChild(listing);
				listing.innerHTML = cat2Array[f];
				listing.setAttribute("class", "ui-li ui-li-static ui-body-a");
			};
		};
		
	};