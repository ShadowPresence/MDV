/*
		Title: Fruition (Gold)
		Author: Philip Ainsworth
		Class: Mobile Interfaces and Usability
		Session: 1206
		Week: 4
*/

/*var parseForm = function (data) {
	console.log(data);
};*/

/*//Category
var getSelectedRadio = function () {
	var radios = document.forms[0].category;
	for(var i=0; i<radios.length; i++) {
		if(radios[i].checked){
			catValue = radios[i].value;
		};
	};
	return catValue;
};*/

$(document).bind('pageinit', function() {
	var form = $('#item');
	form.validate({
		invalidhandler: function () {form, validator},
		submithandler: function () {
			var id = Math.floor(Math.random()*1000000);
			// getSelectedRadio();
			var item = {};
				item.taskName = ["Item:", $('taskName').val()];
				item.category = ["Category:", $('input:radio[name=category]:checked').val()];
				item.projects = ["Project:", $('select.projects').val()];
				item.notes = ["Notes:", $('notes').val()];
				item.startDate = ["Start Date:", $('startDate').val()];
				item.dueDate = ["Due Date:", $('dueDate').val()];
				item.priority = ["Priority:", $('priority').val()];
			localStorage.setItem(id, JSON.stringify(item));
			alert("Item Saved");
			window.location.reload();
		}
	});
});



