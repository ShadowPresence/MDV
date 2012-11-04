//
var it;

var render = function (it){
	var setDiv = $('<div>'),
		setHead = $('<h3>');
	setDiv.attr("data-role", "collapsible");
	setDiv.attr("data-theme", "a");
	setHead.html(it.item.toUpperCase());
	setDiv.appendTo('#hanger');
	setDiv.append(setHead);
	for (var n in it) {
		if (n !== "item") {
			var setP = $('<p>');
			setP.html(n.toUpperCase() + ": " + it[n]);
			setDiv.append(setP);
		};
	};
};

$(function(){
	$('#hanger').empty();
	$.ajax({
		url: "xhr/data.json",
		type: "GET",
		dataType: "json",
		success: function(instaBusy){
			for (var i = 0; i < instaBusy.Items.length; i++) {
				it = instaBusy.Items[i];
				render(it);
				// $('#hanger').listview('refresh');
			};
		}
	});
});


// //
// var it,
// 	setDiv;

// var render = function (style, it){
// 	if (style=="heading") {
// 		var setDiv = $('<div>'),
// 			setHead = $('<h3>');
// 		setDiv.attr("data-role", "collapsible");
// 		setDiv.attr("data-theme", "a");
// 		setHead.html(it.item.toUpperCase());
// 		setDiv.appendTo('#set');
// 		setDiv.append(setHead);
// 	} else {
// 		for (var n in it) {
// 			if (n !== "item") {
// 				var setP = $('<p>');
// 				setP.html(n.toUpperCase() + ": " + it[n]);
// 				setDiv.append(setP);
// 			};
// 		};
// 		// $('#hanger').listview('refresh');
// 	};
// };

// $(function(){
// 	$('#hanger').empty();
// 	$.ajax({
// 		url: "xhr/data.json",
// 		type: "GET",
// 		dataType: "json",
// 		success: function(instaBusy){
// 			for (var i = 0; i < instaBusy.Items.length; i++) {
// 				it = instaBusy.Items[i];
// 				render("heading", it);
// 				render("desc", it);
// 			};
// 		}
// 	});
// });

 
