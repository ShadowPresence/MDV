/*
		Title: Fruition (Gold)
		Author: Philip Ainsworth
		Class: Mobile Interfaces and Usability
		Session: 1206
		Week: 3
*/

// Element shortcut
	var gid = function (x) {
		var element = document.getElementById(x);
		return element;
	};

	// Variables
	var projectGroup = ["None"],
		catValue;

	/*var setProjects = function() {
		var Q = prompt("Please enter a Project name.");
		projectGroup.push(Q);
		var B = confirm("Do you want to add additional Projects?")
	};

	var buildProArray = function() {
		

	};*/

	// Project selection
	var project = function () {
		var tag = gid('projects');
		for (var i=0, i<projectGroup.length; i++) {
			var makeOption = document.createElement('option');
			var optText = projectGroup[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			tag.appendChild(makeOption);
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