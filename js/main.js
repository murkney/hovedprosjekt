import Collapsible from './modules/collapsible.js';
import Header from './modules/header.js';
import Theme from './modules/theme.js';
import Tasks from './modules/task-list.js';
import Slideshow from './modules/slideshow.js';

for (const collapsibleNode of document.querySelectorAll('.collapsible')) {
	Collapsible(collapsibleNode);
}

Header();
Theme();
Tasks();
Slideshow();
