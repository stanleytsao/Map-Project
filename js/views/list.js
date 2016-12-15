var list = $('.list');
var stateList = $('#dropDown')

function initList() {
	// Create list of all schools
	for (var i = 0; i < schools.length; i++) {
		list.append('<li>' + schools[i].title + '</li>');
	};

	// Create list of states for filter
	for (var i = 0; i < states.length; i++) {
		stateList.append('<li>' + states[i] + '</li>') 
	};
};
initList();

function dropDown() {
	document.getElementById("dropDown").classList.toggle("show");
};
