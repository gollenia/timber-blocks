import { Path, SVG } from '@wordpress/components';

let icons = {};

icons.row = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		height="24"
		viewBox="0 0 24 24"
		width="24"
	>
		<path d="M0 0h24v24H0z" fill="none" />
		<Path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z" />
	</SVG>
);
icons.parallax = (
	<SVG
		xmlns="http://www.w3.org/2000/SVG"
		height="24"
		viewBox="0 0 24 24"
		width="24"
	>
		<Path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
		<Path d="M0 0h24v24H0z" fill="none" />
	</SVG>
);
icons.masnory = (
	<SVG
		xmlns="http://www.w3.org/2000/SVG"
		height="24"
		viewBox="0 0 24 24"
		width="24"
	>
		<Path d="M0 0h24v24H0z" fill="none" />
		<Path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
	</SVG>
);
icons.equalizer = (
	<SVG
		xmlns="http://www.w3.org/2000/SVG"
		height="18"
		viewBox="0 0 24 24"
		width="18"
	>
		<Path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
		<Path d="M0 0h24v24H0z" fill="none" />
	</SVG>
);
icons.divider = (
	<SVG
		xmlns="http://www.w3.org/2000/SVG"
		height="24"
		viewBox="0 0 24 24"
		width="24"
	>
		<Path d="M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z" />
		<Path d="M0 0h24v24H0z" fill="none" />
	</SVG>
);

icons.threeEqual = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="48"
		viewBox="0 96 960 960"
		width="48"
	>
		<path d="M140 836h187V316H140v520Zm247 0h186V316H387v520Zm246 0h187V316H633v520Zm-493 60q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Z" />
	</svg>
);

icons.twoRight = (
	<svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path d="M7,40C6.2,40 5.5,39.7 4.9,39.1C4.3,38.5 4,37.8 4,37L4,11C4,10.2 4.3,9.5 4.9,8.9C5.5,8.3 6.2,8 7,8L41,8C41.8,8 42.5,8.3 43.1,8.9C43.7,9.5 44,10.2 44,11L44,37C44,37.8 43.7,38.5 43.1,39.1C42.5,39.7 41.8,40 41,40L7,40ZM28.65,11L7,11L7,37L28.65,37L28.65,11ZM31.65,37L41,37L41,11L31.65,11L31.65,37Z" />
	</svg>
);

icons.twoLeft = (
	<svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path d="M41,40C41.8,40 42.5,39.7 43.1,39.1C43.7,38.5 44,37.8 44,37L44,11C44,10.2 43.7,9.5 43.1,8.9C42.5,8.3 41.8,8 41,8L7,8C6.2,8 5.5,8.3 4.9,8.9C4.3,9.5 4,10.2 4,11L4,37C4,37.8 4.3,38.5 4.9,39.1C5.5,39.7 6.2,40 7,40L41,40ZM19.35,11L41,11L41,37L19.35,37L19.35,11ZM16.35,37L7,37L7,11L16.35,11L16.35,37Z" />
	</svg>
);

export default icons;
