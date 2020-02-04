

	document.addEventListener('DOMContentLoaded', function(event) {
		var $ = window.Bliss
		//the event occurred
		const test = '[data-marked]'
		const items = $.$(test)
		for (let i in items) {
			var markedUrl = (items[i].getAttribute('data-marked'))
			axios.get(markedUrl).then(res => {
				const htmlstuff = marked(res.data)
				items[i].insertAdjacentHTML('afterbegin', htmlstuff);

			})
		}
	})
