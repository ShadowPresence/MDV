//

var it;

var render = function (it){
	var setDiv = $('<div>'),
		setHead = $('<h3>');
	setDiv.appendTo('#hanger');
	setDiv.attr("data-role", "collapsible");
	setDiv.attr("data-theme", "a");
	setDiv.append(setHead);
	setHead.html(it.item.toUpperCase());
	for (var n in it) {
		if (n !== "item") {
			setPara = $('<p>');
			setDiv.append(setPara);
			setPara.html(n.toUpperCase() + ": " + it[n]);
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
				$("#hanger").trigger('create');
				// $('#hanger').listview('refresh');
			};
		}
	});
});


// var proWork = function (f, n, name) {
// 	var proAr,
// 		tarList = gid(name + n),
// 		setDiv = document.createElement('div'),
// 		listing = document.createElement('h3'),
// 		para = document.createElement('p');
// 	tarList.appendChild(setDiv);
// 	setDiv.setAttribute("data-role", "collapsible");
// 	setDiv.setAttribute("data-theme", "a");
// 	setDiv.appendChild(listing);
// 	listing.innerHTML = proAr[f];
// 	setDiv.appendChild(para);
// 	para.id = name + f + "" + n;
// 	getJSON(proAr[f], f, n, name);
// };