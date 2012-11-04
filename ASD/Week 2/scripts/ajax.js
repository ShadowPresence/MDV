//
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/master
var it

var render = function (style, it){
	if (style=="heading") {
		var setDiv = $('<li>');
		setDiv.id = Math.floor(Math.random()*1000000);
		setDiv.html(it.item.toUpperCase());
		setDiv.appendTo('#hanger');
	} else {
		for (var n in it) {
			if (n !== "item") {
				var setDiv2 = $('<div>');
				setDiv2.attr("data-role", "collapsible-set");
				setDiv2.attr("data-theme", "a");
				setDiv2.html(n.toUpperCase() + ": " + it[n]);
				setDiv2.appendTo('setDiv');
			};
		};
	};
	
	$('#hanger').listview('refresh');
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> origin/master
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
<<<<<<< HEAD
				render("heading", it);
				render("desc", it);
=======
<<<<<<< HEAD
				render(it);
				// $('#hanger').listview('refresh');
=======
				render("heading", it);
				render("desc", it);
>>>>>>> origin/master
>>>>>>> origin/master
			};
		}
	});
});

<<<<<<< HEAD
=======
<<<<<<< HEAD

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

=======
>>>>>>> origin/master
>>>>>>> origin/master
 
