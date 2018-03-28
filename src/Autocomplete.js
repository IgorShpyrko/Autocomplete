

export class Autocomplete {
	constructor(options) {
		this.input = document.querySelector(options.targetSelector);
		this.list = options.list;

		this.wrapper = document.createElement('div');
		this.wrapper.className = 'autocomplete';

		this.input.parentNode.insertBefore(this.wrapper, this.input);
		this.wrapper.appendChild(this.input);

		this.hintsWrapper = document.createElement('div');
		this.hintsWrapper.className = 'hints-wrapper';
		this.wrapper.appendChild(this.hintsWrapper);

		this.hints = document.createElement('div');
		this.hints.className = 'hints';
		this.hintsWrapper.appendChild(this.hints);

		this.input.addEventListener("focus", (e) => this.showHints(e));
		window.addEventListener("click", (e) => this.hideHints(e));
		this.input.addEventListener("input", (e) => this.showHints(e));

		this.filteredList = [];
	}

	showHints(e) {
		let search = e.target.value;

		if (search) {
			this.filteredList = this.list.filter((item) => {
				return item.indexOf(search) !== -1
			});		
		} else {
			this.filteredList = this.list;
		}

		this.removeHints();

		for (let key in this.filteredList) {
			let div = document.createElement('div');
			div.className = 'hint'
			this.hints.appendChild(div);
			div.innerText = this.filteredList[key];
			div.addEventListener('click', (e) => this.choose(e));
		}
	};


	choose(e) {
		this.input.value = e.target.innerText;
		this.removeHints();
	};

	hideHints(e) {
		if (e.target.closest('.autocomplete')) {
			return;
		}
		this.removeHints()	
	};

	removeHints() {
		while(this.hints.children[0] != undefined) {
			this.hints.children[0].remove();
		}	
	}
}