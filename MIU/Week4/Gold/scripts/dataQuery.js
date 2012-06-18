/*
		Title: Fruition (Gold)
		Author: Philip Ainsworth
		Class: Mobile Interfaces and Usability
		Session: 1206
		Week: 4
*/

// Element shortcut
var gid = function (x) {
	var element = document.getElementById(x);
	return element;
};

var	cat1Array = [],
	cat2Array = [],
	pro1Array = [],
	pro2Array = [],
	pro3Array = [],
	pro4Array = [],
	pro5Array = [];

var makeArray = function() {
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
};
/*
{
	"taskName":["Item:","Dr. Aung"],
	"category":["Category:","Home"],
	"projects":["Project:","Appointment"],
	"notes":["Notes:","Standard check up"],
	"startDate":["Start Date:","2012-06-21T10:00"],
	"dueDate":["Due Date:","2012-06-22T12:30"],
	"priority":["Priority:","9"]
}*/

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
				del.key = this.key;
				edit.key = this.key;
				del.id = "delete";
				edit.id = "edit";
				del.type = "button";
				edit.type = "button";
				del.value = "Complete";
				edit.value = "Edit";
				del.setAttribute("data-inline", "true");
				edit.setAttribute("data-inline", "true");
				del.addEventListener('click', deleteItem);
				edit.addEventListener('click', editItem);
			};
		};
	};
};

var proWork = function (f, n, name) {
	var tarList = gid(name + n),
		setDiv = document.createElement('div'),
		listing = document.createElement('h3'),
		para = document.createElement('p');
		console.log(tarList);
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

//Clear Data
var clearData = function () {
	if(localStorage.length === 0) {
		alert("Local Storage is Empty.");
	} else {
		// -- Added delete confirmation
		var sure = confirm("Are you sure you want to delete ALL DATA?");
		if(sure) {
			localStorage.clear();
			alert("All Data Has Been Cleared.");
			window.location.reload();
			return false;
		} else {
			alert("Data Has NOT Been Cleared."); // -- Alert when user cancels clear
			return false;
		};
	};
};

// Autofill test data
var autofill = function () {
	for (var n in instaBusy) {
		var id = Math.floor(Math.random()*1000000);
		localStorage.setItem(id, JSON.stringify(instaBusy[n]));
	};
	window.location.reload();
	alert("Test data has been loaded.");
};

//Task Delete
var deleteItem = function () {
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	var ask = confirm("Are you sure " + item.taskName[1] + " is complete?");
	if (ask) {
		localStorage.removeItem(this.key);
		window.location.reload();
	} else {
		alert("The task: '" + item.taskName[1] + "' has not been removed.");
	};
	lsc();
};

makeArray();
/*var watchDog = function () {
	$(":checkbox").click(deleteItem);
};*/
