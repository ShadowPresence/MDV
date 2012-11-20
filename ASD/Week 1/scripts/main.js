/*
		Title: Fruition (Gold)
		Author: Philip Ainsworth
		Class: Mobile Interfaces and Usability
		Session: 1206
		Week: 4
*/


$('#form').on('pageinit', function() {
	var form = $('#item');
	form.validate({
		invalidHandler: function (form, validator){},
		submitHandler: storeData(),		
	});
});

var parseForm = function (data) {
	console.log(data);
};

// Variables
var cat1Array = [],
	cat2Array = [],
	pro1Array = [],
	pro2Array = [],
	pro3Array = [],
	pro4Array = [],
	pro5Array = [],
	projectGroup = ["Shopping", "Homework", "Scheduled", "Appointment", "Household"],
	catValue;

// Project selection
var project = function () {
	var tag = $('#projects');
	for (var i=0; i<projectGroup.length; i++) {
		var makeOption = $('<option>');
		var optText = projectGroup[i];
		tag.append(makeOption);
		makeOption.attr("value", optText);
		makeOption.html = optText;
	};
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

//Get Data
var getData = function () {
	var getDiv = $('#data');
	$('#data').style.display = "block";
	for(var i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var icon = $('<div>');
		getDiv.append(icon);
		icon.id = "icon";
		icon.attr("class", obj.category[1].toLowerCase());
		var task = $('<div>');
		getDiv.append(task);
		task.id = "taskContainer";
		var links = $('<div>');
		getDiv.append(links);
		links.id = "links";
		for (var n in obj) {
			var details = $('<div>');
			task.append(details);
			details.id = "dataTag";
			var details2 = $('<div>');
			task.append(details2);
			details2.id = "dataData";
			var detailTag = obj[n][0];
			var detailData = obj[n][1];
			details.html = detailTag;
			details2.html = detailData;
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
			alert('Test data has not been loaded.');
		};
	};
	return false;
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

// Store Data

var storeData = function (key) {
	if (!key) {
		var id = Math.floor(Math.random()*1000000);
	} else {
		var id = key;
	}
	var item = {};
		item.taskName = ["Item:", $("#taskName").val()];
		item.category = ["Category:", $("input:radio[name=category]:checked").val()];
		item.projects = ["Project:", $("select.projects").val()];
		item.notes = ["Notes:", $("#notes").val()];
		item.startDate = ["Start Date:", $("#startDate").val()];
		item.dueDate = ["Due Date:", $("#dueDate").val()];
		item.priority = ["Priority:", $("#priority").val()];
	localStorage.setItem(id, JSON.stringify(item));
	alert("Item Saved");
	window.location.reload();
};

//Edit Task
var editItem = function () {
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	console.log(item);
	//toggleControl("off");
	$('#taskName').value = item.taskName[1];
	var radios = $('input:radio[name=category]:checked').val();
	/*for (var i = 0; i < radios.length; i++) {
		if(radios[i].value == "Work" && item.category[1] == "Work") {
			radios[i].checked = "checked";
		} else if (radios[i].value == "Home" && item.category[1] == "Home") {
			radios[i].checked = "checked";
		};
	};*/
	$('#projects').value = item.projects[1];
	$('#notes').value = item.notes[1];
	$('#startDate').value = item.startDate[1];
	$('#dueDate').value = item.dueDate[1];
	$('#priority').value = item.priority[1];
	$('#submit').value = "Update Task";
	var editSubmit = $('#submit');
	editSubmit.on("click", storeData);
	editSubmit.key = this.key;
};

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

var getJSON = function (find, f, m, name) {
	for(var i=0; i<localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		for (var n in obj) {
			if (obj[n][1] === find) {
				var q = name + f + "" + m,
					b = $(q),
					detStart = obj.startDate[1],
					detDue = obj.dueDate[1],
					detPri = obj.priority[1],
					detNote = obj.notes[1],
					del = $('<input>'),
					edit = $('<input>');
				b.html = "Start on: " + detStart + "<br />Due: " + detDue + "<br />Priority: " + detPri + "<br />Notes:<br />" + detNote + "<br />";
				b.append(del);
				b.append(edit);
				del.key = key;
				edit.key = key;
				del.id = "delItem" + key;
				edit.id = "edit" + key;
				del.type = "button";
				edit.type = "button";
				del.value = "Complete";
				edit.value = "Edit";
				del.attr("data-inline", "true");
				edit.attr("data-inline", "true");
				$('#delItem'+key).on('click', deleteItem);
				$('#edit'+key).on('click', editItem);
			};
		};
	};
};

var proWork = function (f, n, name) {
	var proAr,
		tarList = $(name + n),
		setDiv = $('<div>'),
		listing = $('<h3>'),
		para = $('p');
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
	tarList.append(setDiv);
	setDiv.attr("data-role", "collapsible");
	setDiv.attr("data-theme", "a");
	setDiv.append(listing);
	listing.html = proAr[f];
	setDiv.append(para);
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

var watchDog = function () {
	$(":checkbox").on('click', deleteItem);
};

makeArray();
