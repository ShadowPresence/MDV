/*
		Title: ProDucktive
		Author: Philip Ainsworth
		Class: Visual Frameworks
		Session: 1205
		Week: 3
*/

var rangeGo = function (newValue) {
	document.getElementById('rangeValue').innerHTML = newValue;
};

window.addEventListener("DOMContentLoaded", function () {
	
	// Element shortcut
	var gid = function (x) {
		var element = document.getElementById(x);
		return element;
	};

	// Variables
	var projectGroup = ["None", "Shopping", "Homework", "Scheduled", "Appointments"],
		catValue,
		errMsg = gid('errors');

	// Project selection
	var project = function () {
		var tag = gid('projects');
		for (var i=0, j=projectGroup.length; i<j; i++) {
			var makeOption = document.createElement('option');
			var optText = projectGroup[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			tag.appendChild(makeOption);
		};
	};
	
	// Toggle nav
	var toggleControl = function (t) {
		switch(t){
			case "on":
				gid('item').style.display = "none";
				gid('clear').style.paddingLeft = "0";
				gid('clear').style.display = "block";
				gid('newQuack').style.display = "block";
				gid('display').style.display = "none";
				break;
			case "off":
				gid('item').style.display = "block";
				gid('clear').style.display = "inline";
				gid('display').style.display = "inline";
				gid('newQuack').style.display = "none";
				gid('data').style.display = "none";
				break;
			default:
				return false;
		};
	};

	//Category
	var getSelectedRadio = function () {
		var radios = document.forms[0].category;
		for(i=0; i<radios.length; i++) {
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
	
	// Form Validation
	var validate = function (e) {
		var getTaskName = gid('taskName');
		errMsg.innerHTML = "";
		getTaskName.style.border = "";
		var errorArray = [];
		if (getTaskName.value === "") {
			var tnError = "Please enter a task name.";
			getTaskName.style.border = "1px solid #CC252A";
			errorArray.push(tnError);
		};
		if (errorArray.length >=1) {
			for (var i = 0; i < errorArray.length; i++) {
				var errorList = document.createElement('li');
				errorList.innerHTML = errorArray[i];
				errMsg.appendChild(errorList);
			};
			e.preventDefault();
			return false;
		} else {
			storeData(this.key);
		};
	};

	// Button Magic
	// Creates buttons using given attributes - saves on repeated code
	var buttonMagic = function (key, buttonName, type, id, value, parent) {
		buttonName = document.createElement('input');
		buttonName.key = key;
		buttonName.type = type;
		buttonName.id = id;
		buttonName.value = value;
		parent.appendChild(buttonName);
		return buttonName;
	};
	
	//Edit Task
	var editItem = function () {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		toggleControl("off");
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
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
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

	//Make links for edit and delete
	var makeLinks = function (key, divName) {
		var editBut = buttonMagic(key, "editLink", "button", "edit", "Edit Task", divName);
		editBut.addEventListener("click", editItem);

		var deleteBut = buttonMagic(key, "deleteLink", "button", "delete", "Complete Task", divName);
		deleteBut.addEventListener("click", deleteItem);
	};
	
	//Get Data
	var getData = function () {
		toggleControl("on");
		var getDiv = gid('data');
		gid('data').style.display = "block";
		for(i=0; i<localStorage.length; i++) {
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
			makeLinks(localStorage.key(i), links);
		};
	};

	// Autofill test data
	var autofill = function () {
		for (var n in instaBusy) {
			var id = Math.floor(Math.random()*1000000);
			localStorage.setItem(id, JSON.stringify(instaBusy[n]));
		};
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
				alert('Please use the "Add New Quacker Tracker" button to add a new task.')
			};
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
	
	project();
	
	//Click events
	var display = gid('display');
	display.addEventListener("click", lsc);
	var clearD = gid('clear');
	clearD.addEventListener("click", clearData);
	var saveD = gid('submit');
	saveD.addEventListener("click", validate);

})