export default function Collapsible(collapsibleNode) {	
	
	/* Data */

	let isCollapsed = true;

	/* Query Selectors */

	const toggleCollapsible = collapsibleNode.querySelector('.collapsible__toggle');
	const contentCollapsible = collapsibleNode.querySelector('.collapsible__content');

	/* Event Listeners */

	toggleCollapsible.addEventListener('click', handleToggleCollapsibleClick);

	/* Event Handlers */

	function handleToggleCollapsibleClick(event) {
		toggleCollapsed();
		renderHTML();
	};


	/* Methods */

	function toggleCollapsed() {
		isCollapsed = !isCollapsed;
	};

	/* Render */

	function renderHTML() {
		if (isCollapsed === true) {
			contentCollapsible.classList.remove('collapsible__content--visible');
		} else {
			contentCollapsible.classList.add('collapsible__content--visible');
		}
	};


}
