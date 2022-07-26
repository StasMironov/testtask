import './polyfills';
import './utils/slideToggle';
import './utils/scroll';
import './utils/userAgent';

import libs from "./libs";

import { devices } from './utils/breakpoints';

// components
import { field } from './components/field';
import Menu from './components/menu';
import ScrollAnimation from './components/scroll-animation/scroll-animation';
import Header from './components/header';
import select from './components/select';
import uploadFile from './components/upload-file/upload-file';
import uiSlider from './components/ui-slider';

window.UPB = window.UPB || {};
window.breakpoints = devices;
window.$ = $;
window.jQuery = $;

__webpack_public_path__ = window.__webpack_public_path__ || '';

window.addEventListener('load', () => {
	document.documentElement.classList.add('is-loaded');
	new ScrollAnimation();
});


window.addEventListener('init.uploadFile', () => {
	uploadFile.init();
});


document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.add('content-loaded');

	libs.init();
	field.init();
	Menu.init();
	Header.init();
	select.init();
	uiSlider.init();

	window.dispatchEvent(new CustomEvent('init.uploadFile'));
});

window.addEventListener('reinit', () => {
	libs.init();
	field.init();
	Menu.init();
	Header.init();
	select.init();
	uiSlider.init();

	window.dispatchEvent(new CustomEvent('init.uploadFile'));
});
