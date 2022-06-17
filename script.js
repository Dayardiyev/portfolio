//SIDEBAR VARIABLES
const toggles = document.querySelectorAll('.side-btn')
const side = document.querySelector('.side')

//HEAD & CONTENT VARIABLES
const head = document.querySelectorAll('.head-item')
const contents = document.querySelectorAll('.content')


//SIDEBAR TOGGLE

toggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		side.classList.toggle('active')
	})
});

//HEAD & CONTENT TOGGLE

head.forEach((item, idx) => {
	item.addEventListener('click', () => {
		removeActive()
		contents[idx].classList.add('show')
		item.classList.add('active')
	})
})

function removeActive(){
	contents.forEach((content => content.classList.remove('show')))
	head.forEach((header => header.classList.remove('active')))
}


