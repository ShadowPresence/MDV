/*
		Title: F.A.S.T.
		Author: Philip Ainsworth
		Class: Advanced Scalable Data Infrastructure
		Session: 1212
		Week: 1
*/

// This function adds empty string testing to jquery found at: http://laktek.com/2011/01/07/jquery-isblank/
// Could also use if(it[n] === "") but the isBlank method tests for more than just an empty string, it also tests for null, white space, "0", or undefined
(function($){
  $.isBlank = function(obj){
    return(!obj || $.trim(obj) === "");
  };
})(jQuery);

var it,
	list = function (it){
		var setAnchor = $('<a>'),
			setText = $('<p>'),
			setList = $('<li>'),
			setDate = $('<p>');
		setList.appendTo('#hanger'); // Adds <li></li>
		setList.append(setAnchor); // <li><a></a></li>
	// need to get href to be dynamic
		setAnchor.attr("href", "detail.html"); // <li><a href="detail.html"></a></li>
		setAnchor.append(setText); // <li><a href="detail.html"><p></p></a></li>
		setAnchor.append(setDate); // <li><a href="detail.html"><p></p><p></p></a></li>
		setText.append($('<strong>').html(it.company), " - " + it.account); // <li><a href="detail.html"><p><strong>Rivergreen</strong> - 7051234</p><p></p></a></li>
		setDate.append($('<strong>').html("Date: "), it.date); // <li><a href="detail.html"><p><strong>Rivergreen</strong> - 7051234</p><p><strong>Date:</strong>2012-06-07</p></a></li>
	},
	detail = function (it){
		$('#compHead').empty();
		var xyz = $('<hr />');
		$('#compHead').append($('<p>').append($('<strong>').html("Date: "), it.date));
		$('#compHead').append($('<h3>').html(it.company));
		$('#compHead').append($('<p>').append($('<strong>').html("Account #:"), it.account));
		xyz.appendTo($('#compHead'));
		$('#compHead').listview('refresh');
	};

	// <p class="ui-li-aside"><strong>Date: </strong>11/24/12</p>
	// 					<h1>Company 1</h1>
	// 					<p><strong>Account #: </strong>7051234</p>
	// 					<hr>

		// For use when in detail view to pull info from all the fields
		// for (var n in it) {
		// 	if (n !== "company") {
		// 		if ($.isBlank(it[n])) {
		// 			console.log("The " + n + " field in the " + it.company + " entry, does not contain any data, and will not be assimilated.")
		// 		} else {
					
		// 		};
		// 	};
		// };

// This function processes the json data file. 
// $(function(){
// 	$('#hanger').empty();
// 	$.getJSON('xhr/data.json', function(x){
// 		//This loops through each object(item) in the json.data file.
// 		for (var i = 0; i < x.inspections.length; i++) {
// 			it = x.inspections[i];
// 			console.log(it);
// 			// render() loops through each individual item
// 			list(it);
// 			// trigger.('create') tells the browser to render the dynamic DIV element using JQM styling
// 			// listview('refresh') renders a listview where trigger does not
// 			$('#hanger').listview('refresh');
// 		};
// 	});
// });
