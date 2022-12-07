export default function Theme() {
	
	// Variables
	let darkMode = localStorage.getItem("dark-mode");

	// Query-Selector
	const icon = document.querySelector(".icon");
	
	// Event-Listeners
	icon.addEventListener('click', toggleTheme);
	
	// Event-Handlers
	function toggleTheme() {
		document.body.classList.toggle("dark-mode");
		if (document.body.classList.contains("dark-mode")) {
			icon.src = "../assets/icons/sun.png";
			localStorage.setItem("dark-mode", "enabled");
		} else {
			icon.src = "../assets/icons/moon.png";
			localStorage.setItem("dark-mode", "disabled");
		}
	};

	// If dark mode is enabled in local storage, dark mode variables will be active.
	if (darkMode === "enabled") {
		toggleTheme();
	};
};

