//

var it;

// This function adds empty string testing to jquery found at: http://laktek.com/2011/01/07/jquery-isblank/
// Could also use if(it[n] === "") but the isBlank method tests for more than just an empty string, it also tests for null, white space, "0", or undefined
(function($){
  $.isBlank = function(obj){
    return(!obj || $.trim(obj) === "");
  };
})(jQuery);

var render = function (it){
	var setDiv = $('<div>'),
		setHead = $('<h3>'),
		setView = $('<ul>'),
		setList = $('<li>');
	setDiv.appendTo('#hanger');
	setDiv.attr("data-role", "collapsible");
	setDiv.attr("data-theme", "a");
	setDiv.append(setHead, setView);
	setHead.html(it.item.toUpperCase());
	setView.attr("data-role", "listview");
	setView.append(setList);
	for (var n in it) {
		if (n !== "item") {
			if ($.isBlank(it[n])) {
				console.log("The " + n + " field in the " + it.item + " entry, does not contain any data, and will not be assimilated.")
			} else {
			setSub = $('<h3>');
			setDesc = $('<p>');
			setList.append(setSub, setDesc);
			setSub.html(n.toUpperCase());
			setDesc.html(it[n]);
			};
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
				console.log(it);
				// render() loops through each individual item 
				render(it);
				// trigger.('create') tells the browser to render the dynamic code using JQM styling
				$("#hanger").trigger('create');
			};
		}
	});
});