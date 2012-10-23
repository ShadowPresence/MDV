/*
		Title: Fruition (Gold)
		Author: Philip Ainsworth
		Class: Mobile Interfaces and Usability
		Session: 1206
		Week: 4
*/


var cat1Array = [],
	cat2Array = [],
	pro1Array = [],
	pro2Array = [],
	pro3Array = [],
	pro4Array = [],
	pro5Array = [];

var getJSON = function (find, f, m, name) {
	for(var i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		for (var n in obj) {
			if (obj[n][1] === find) {
				var q = name + f + "" + m,
					b = gid(q),
					detStart = obj.startDate[1],
					detDue = obj.dueDate[1],
					detPri = obj.priority[1],
					detNote = obj.notes[1],
					del = document.createElement('input'),
					edit = document.createElement('input');
				b.innerHTML = "Start on: " + detStart + "<br />Due: " + detDue + "<br />Priority: " + detPri + "<br />Notes:<br />" + detNote + "<br />";
				b.appendChild(del);
				b.appendChild(edit);
				del.key = key;
				edit.key = key;
				del.id = "delItem" + key;
				edit.id = "edit" + key;
				del.type = "button";
				edit.type = "button";
				del.value = "Complete";
				edit.value = "Edit";
				del.setAttribute("data-inline", "true");
				edit.setAttribute("data-inline", "true");
				$('#delItem'+key).on('click', deleteItem);
				$('#edit'+key).on('click', editItem);
			};
		};
	};
};

function proWork (f, n, name) {
	var proAr,
		tarList = gid(name + n),
		setDiv = document.createElement('div'),
		listing = document.createElement('h3'),
		para = document.createElement('p');
	if (n==1&&name=="cat") {
		proAr=cat1Array;
	} else if (n==2&&name=="cat") {
		proAr=cat2Array;
	} else if (n==1&&name=="pro") {
		proAr=pro1Array;
	} else if (n==2&&name=="pro") {
		proAr=pro2Array;
	} else if (n==3&&name=="pro") {
		proAr=pro3Array;
	} else if (n==4&&name=="pro") {
		proAr=pro4Array;
	} else if (n==5&&name=="pro") {
		proAr=pro5Array;
	};
	tarList.appendChild(setDiv);
	setDiv.setAttribute("data-role", "collapsible");
	setDiv.setAttribute("data-theme", "a");
	setDiv.appendChild(listing);
	listing.innerHTML = proAr[f];
	setDiv.appendChild(para);
	para.id = name + f + "" + n;
	getJSON(proAr[f], f, n, name);
};

var listData = function () {
// Make arrays for list population
	for(var i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		for (var n in obj) {
			if (obj[n][1] === "Home") {
				cat1Array.push(obj.taskName[1]);
			} else if (obj[n][1] === "Work") {
				cat2Array.push(obj.taskName[1]);
			} else if (obj[n][1] === "Shopping") {
				pro1Array.push(obj.taskName[1]);
			} else if (obj[n][1] === "Homework") {
				pro2Array.push(obj.taskName[1]);
			} else if (obj[n][1] === "Scheduled") {
				pro3Array.push(obj.taskName[1]);
			} else if (obj[n][1] === "Appointment") {
				pro4Array.push(obj.taskName[1]);
			} else if (obj[n][1] === "Household") {
				pro5Array.push(obj.taskName[1]);
			};
		};
	};
// Create header list elements
	for (var f=0; f<cat1Array.length; f++) {
		proWork(f, 1, "cat");
	};
	for (var f=0; f<cat2Array.length; f++) {
		proWork(f, 2, "cat");
	};
	for (var f=0; f<pro1Array.length; f++) {
		proWork(f, 1, "pro");
	};
	for (var f=0; f<pro2Array.length; f++) {
		proWork(f, 2, "pro");
	};
	for (var f=0; f<pro3Array.length; f++) {
		proWork(f, 3, "pro");
	};
	for (var f=0; f<pro4Array.length; f++) {
		proWork(f, 4, "pro");
	};
	for (var f=0; f<pro5Array.length; f++) {
		proWork(f, 5, "pro");
	};
	$("#catHanger").trigger('create');
	$("#proHanger").trigger('create');
};