function loadRepos() {
	const list = document.querySelector('#repos');
	const userName = document.querySelector('#username').value;
	list.innerHTML = '';
	const baseUrl = 'https://api.github.com/users/';

	fetch(`${baseUrl}${userName}/repos`)
		.then(checkForStatus)
		.then(main)
		.catch((err) => {
			const li = document.createElement('li');
			li.textContent = `There was an error! ${err}`;
			list.appendChild(li);
		})


	function main(data) {
		data.forEach(repo => {
			const url = repo.html_url;
			const name = repo.full_name;
			list.appendChild(factory('li', 'a', url, name));
		})
	}

	function checkForStatus(response) {
		if (response.ok == false) {
			const error = response.status;
			return Promise.reject(error);
		}

		return response.json();
	}

	function factory(mainEl, innerEl, ref, content) {
		const mainElement = document.createElement(mainEl);
		const innerElement = document.createElement(innerEl);
		innerElement.href = ref;
		innerElement.textContent = content;
		mainElement.appendChild(innerElement);
		return mainElement;
	}
}