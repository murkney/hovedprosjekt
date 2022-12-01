export default function Theme() {
	const icon = document.getElementById("icon");
	
	icon.addEventListener('click', toggleTheme);
	
	function toggleTheme() {
		document.body.classList.toggle("dark-mode");
		if (document.body.classList.contains("dark-mode")) {
			icon.src = "./assets/icons/sun.png";
		} else {
			icon.src = "./assets/icons/moon.png";
		}
	};
};

