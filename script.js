//Burger

let menuBtn = document.querySelector('.burger__icon');
let menu = document.querySelector('.burger__menu');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.burger__item');

menuLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		menu.classList.remove('active');
		menuBtn.classList.remove('active');
		body.classList.remove('active');
	});
});