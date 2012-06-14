/*
		Title: Fruition (Gold)
		Author: Philip Ainsworth
		Class: Mobile Interfaces and Usability
		Session: 1206
		Week: 3
*/

//Local Storage check
//Checks to see if there is anything in local storage, if there is it runs getData()
//if not, displays a message

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