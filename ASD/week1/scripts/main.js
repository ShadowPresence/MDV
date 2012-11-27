/*
		Title: F.A.S.T.
		Author: Philip Ainsworth
		Class: ASD
		Session: 1212
		Week: 1
*/

$(document).bind('pageinit', function() {
	$('#hanger').empty();
	$.getJSON('xhr/data.json', function(x){
		//This loops through each object(item) in the json.data file.
		for (var i = 0; i < x.inspections.length; i++) {
			it = x.inspections[i];
			console.log(it);
			// render() loops through each individual item
			list(it);
			// trigger.('create') tells the browser to render the dynamic DIV element using JQM styling
			// listview('refresh') renders a listview where trigger does not
			$('#hanger').listview('refresh');
		};
	});
});