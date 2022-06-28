import './polyfills';
import './utils/slideToggle';
import './utils/scroll';
import './utils/userAgent';

import libs from "./libs";
import Animation from './components/animation';

import { devices } from './utils/breakpoints';

// components
import { field } from './components/field';
import sliders from './components/sliders';

window.UPB = window.UPB || {};
window.breakpoints = devices;

__webpack_public_path__ = window.__webpack_public_path__ || '';


document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.add('content-loaded');

	libs.init();
	field.init();
	sliders.init();
	Animation.init();
});

window.addEventListener('reinit', () => {
	libs.init();
	field.init();
	sliders.init();
	Animation.init();
});
