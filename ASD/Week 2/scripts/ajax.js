//
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
				render("heading", it);
				render("desc", it);
			};
		}
	});
});

 
