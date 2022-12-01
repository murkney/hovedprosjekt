export default function Header() {
	const menu = document.querySelector('#mobile-menu');
	const menuLinks = document.querySelector('.navbar__menu');

	menu.addEventListener('click', toggleNavbar);

	function toggleNavbar() {
		menu.classList.toggle('is-active');
		menuLinks.classList.toggle('active');
	};
};

