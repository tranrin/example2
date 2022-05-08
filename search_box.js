document.querySelector('.search-btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('max')
	this.previousElementSibling.focus()	
	
})
