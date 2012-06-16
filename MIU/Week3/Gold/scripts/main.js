/*
		Title: Fruition (Gold)
		Author: Philip Ainsworth
		Class: Mobile Interfaces and Usability
		Session: 1206
		Week: 3
*/

$(document).bind('pageinit', function() {
	var form = $('#item');
	form.validate();
});

// Variables
var projectGroup = ["Shopping", "Homework", "Scheduled", "Appointment", "Household"],
	catValue;

// Element shortcut
var gid = function (x) {
	var element = document.getElementById(x);
	return element;
};

// Project selection
var project = function () {
	var tag = gid('projects');
	for (var i=0; i<projectGroup.length; i++) {
		var makeOption = document.createElement('option');
		var optText = projectGroup[i];
		tag.appendChild(makeOption);
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
	};
};

//Category
var getSelectedRadio = function () {
	var radios = document.forms[0].category;
	for(var i=0; i<radios.length; i++) {
		if(radios[i].checked){
			catValue = radios[i].value;
		};
	};
	return catValue;
};

// Store Data
var storeData = function (key) {
	if (!key) {
		var id = Math.floor(Math.random()*1000000);
	} else {
		var id = key;
	}
	getSelectedRadio();
	var item = {};
		item.taskName = ["Item:", gid('taskName').value];
		item.category = ["Category:", catValue];
		item.projects = ["Project:", gid('projects').value];
		item.notes = ["Notes:", gid('notes').value];
		item.startDate = ["Start Date:", gid('startDate').value];
		item.dueDate = ["Due Date:", gid('dueDate').value];
		item.priority = ["Priority:", gid('priority').value];
	localStorage.setItem(id, JSON.stringify(item));
	window.location.reload();
	alert("Item Saved");
};

//Edit Task
var editItem = function () {
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	//toggleControl("off");
	gid('taskName').value = item.taskName[1];
	var radios = document.forms[0].category;
	for (var i = 0; i < radios.length; i++) {
		if(radios[i].value == "Work" && item.category[1] == "Work") {
			radios[i].checked = "checked";
		} else if (radios[i].value == "Home" && item.category[1] == "Home") {
			radios[i].checked = "checked";
		};
	};
	gid('projects').value = item.projects[1];
	gid('notes').value = item.notes[1];
	gid('startDate').value = item.startDate[1];
	gid('dueDate').value = item.dueDate[1];
	gid('priority').value = item.priority[1];
	gid('rangeValue').innerHTML = item.priority[1];
	gid('submit').value = "Update Task";
	var editSubmit = gid('submit');
	editSubmit.addEventListener("click", storeData);
	editSubmit.key = this.key;
};


//Get Data
var getData = function () {
	var getDiv = gid('data');
	gid('data').style.display = "block";
	for(var i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var icon = document.createElement('div');
		getDiv.appendChild(icon);
		icon.id = "icon";
		icon.setAttribute("class", obj.category[1].toLowerCase());
		var task = document.createElement('div');
		getDiv.appendChild(task);
		task.id = "taskContainer";
		var links = document.createElement('div');
		getDiv.appendChild(links);
		links.id = "links";
		for (var n in obj) {
			var details = document.createElement('div');
			task.appendChild(details);
			details.id = "dataTag";
			var details2 = document.createElement('div');
			task.appendChild(details2);
			details2.id = "dataData";
			var detailTag = obj[n][0];
			var detailData = obj[n][1];
			details.innerHTML = detailTag;
			details2.innerHTML = detailData;
		};
	};
	window.location.reload();
};

//Local Storage check
//Checks to see if there is anything in local storage, if there is it runs getData()
//if not, displays a message
var lsc = function() {
	if (localStorage.length >= 1) {
		getData();
	} else {
		var sandbox = confirm('Everything is complete! You do not have any tasks to list. Would you like to fill with test data?');
		if (sandbox) {
			autofill();
			getData();
		} else {
			alert('Test data has not been loaded.')
		};
	};
	return false;
};


// project();

