

import {Autocomplete} from './Autocomplete.js'
import {TodoList} from './TodoList.js'


new Autocomplete({
	targetSelector: "#input1",
	list: [ "abcd", "aabd", "acdb", "abad",
			"bacd", "bcad", "bbca", "bcda",
			"cabd", "cbad", "ccba", "cada",
			"dabc", "ddab", "dcba", "ddda"
	]
});

new Autocomplete({
	targetSelector: "#input2",
	list: ['qwe', 'qeqwe', 'qweweqwe']
});

window.td1 = new TodoList({
	targetSelector: "#todo1",
	storageKey: "todo1",
});

window.td2 = new TodoList({
	targetSelector: "#todo2",
	storageKey: "todo2",
});
