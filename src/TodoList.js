import uuid from 'uuid/v4';

//TodoListOptions{
//	storageKey: string
//	targetSelector: string
//	}

export class TodoList {
	constructor(options) {
		this.storageKey = options.storageKey;

		let cont = document.querySelector(options.targetSelector);
		cont.className = 'todo-list';
		
		let form = document.createElement('form');

		let input = document.createElement('input');
		input.type = 'text';

		let addButton = document.createElement('button');
		addButton.innerText = 'Add';

		this.listCont = document.createElement('div');
		this.listCont.className = 'list-cont';

		form.appendChild(input);
		form.appendChild(addButton);
		cont.appendChild(form);
		cont.appendChild(this.listCont);

		form.addEventListener('submit', (e) => this.addItem(e));
		this.todos = this.getList();
		this.renderList();
	}

	addItem(e) {
		e.preventDefault();
		let input = e.target.querySelector('input');

		if (!input.value) {
			return;
		}

		this.todos.push({
			done: false,
			text: input.value,
			id: uuid(),
		});

		input.value = '';
		
		this.saveList();
		this.renderList();
	}

	renderList() {
		this.clearList();
		for (let i = 0; i < this.todos.length; i++) {
			let itemCont = document.createElement('div');
			let itemCheckBox = document.createElement('input');
			itemCheckBox.type = 'checkbox';
			itemCheckBox.checked = this.todos[i].done;
			let itemText = document.createElement('span');
			itemText.innerText = this.todos[i].text;
			itemText.className = this.todos[i].done ? 'done' : '';
			let itemRemoveButton = document.createElement('button');
			itemRemoveButton.innerHTML = '&times;';

			itemCont.appendChild(itemCheckBox);
			itemCont.appendChild(itemText);
			itemCont.appendChild(itemRemoveButton);
			this.listCont.appendChild(itemCont);

			itemCheckBox.addEventListener('change', () => this.toggleChecked(this.todos[i].id));
			itemText.addEventListener('click', () => this.toggleChecked(this.todos[i].id));
			itemRemoveButton.addEventListener('click', () => this.removeItem(this.todos[i].id));
		}
	}

	clearList() {
		while(this.listCont.children[0] != undefined) {
			this.listCont.children[0].remove();
		}
	}

	toggleChecked(id) {
		let item = this.findItem(id);
		item.done = !item.done;
		this.saveList();
		this.renderList();
	}

	removeItem(id) {
		let item = this.findItem(id);
		let index = this.todos.indexOf(item);
		this.todos.splice(index, 1);
		this.saveList();
		this.renderList();
	}

	findItem(id) {
		return this.todos.find((v) => v.id === id);
	}

	saveList() {
		localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
	}

	getList() {
		return JSON.parse(localStorage.getItem(this.storageKey)) || [];
	}
}
