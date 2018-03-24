document.addEventListener("DOMContentLoaded", ready());

function ready() {

var arr = [ "abcd", "aabd", "acdb", "abad",
			"bacd", "bcad", "bbca", "bcda",
			"cabd", "cbad", "ccba", "cada",
			"dabc", "ddab", "dcba", "ddda"
];

	var wrapper = document.createElement('div');
	wrapper.className = 'wrapper';
	wrapper.style.width = '300px';
	document.body.appendChild(wrapper);

	var input = document.createElement("input");
	input.style.width = "290px";
	wrapper.appendChild(input);
	input.addEventListener("focus", onActive);
	input.addEventListener("input", oninput);
	var inputValue = input.innerHTML;
	console.log(input);

	var autoField = document.createElement('div');
	autoField.className = 'autocomplete-field';
	wrapper.appendChild(autoField);

	

	function onActive() {
	var res = arr;

		for (var key in res) {
			var p = document.createElement("p");
			p.innerHTML = res[key];
			p.style.margin = 0;
			autoField.appendChild(p);
		}
	};

	function oninput() {

		for (let i = 0; i < input.value.length; i++){
			if (arr[key][i] == input.value[i]) {
				console.log(arr[key]);
			}
		}
	
	};

	function onOutput() {
		input.value = "";
		output.innerHTML = "";
		autoField = "";

	};

};