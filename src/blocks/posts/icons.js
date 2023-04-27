import { Path, SVG } from '@wordpress/components';

let icons = [];

icons.posts = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		enableBackground="new 0 0 24 24"
		height="24"
		viewBox="0 0 24 24"
		width="24"
	>
		<g>
			<rect fill="none" height="24" width="24" />
		</g>
		<g>
			<g />
			<g>
				<Path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z" />
				<g>
					<Path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z" />
					<Path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z" />
					<Path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z" />
				</g>
			</g>
		</g>
	</SVG>
);
icons.list = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit="2"
		clipRule="evenodd"
		viewBox="0 0 32 32"
	>
		<path d="M30 24v2H10v-2h20zm0-10v2H10v-2h20zm0-10v2H10V4h20z"></path>
		<circle cx="4.773" cy="7" r="3"></circle>
		<circle cx="4.773" cy="7" r="3" transform="translate(0 10)"></circle>
		<circle cx="4.773" cy="7" r="3" transform="translate(0 20)"></circle>
		<path fill="#919191" d="M10 7H26.472V10H10z"></path>
		<path
			fill="#919191"
			d="M10 7H26.472V10H10z"
			transform="translate(0 10)"
		></path>
		<path
			fill="#919191"
			d="M10 7H26.472V10H10z"
			transform="translate(0 20)"
		></path>
	</svg>
);
icons.cards = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit="2"
		clipRule="evenodd"
		viewBox="0 0 32 32"
	>
		{ ' ' }
		<path
			fill="#E5E5E5"
			d="M2.274 1.794H10.702000000000002V16.772H2.274z"
			transform="matrix(1.52569 0 0 1.59368 -1.304 1.206)"
		></path>{ ' ' }
		<path
			d="M10 24H30V26H10z"
			transform="matrix(.4577 0 0 .96245 -.566 -6.375)"
		></path>{ ' ' }
		<circle
			cx="4.773"
			cy="7"
			r="3"
			transform="translate(1.306 -.773) scale(1.52569)"
		></circle>{ ' ' }
		<path
			fill="#919191"
			d="M10 7H26.472V10H10z"
			transform="matrix(.55574 0 0 1.52569 -1.546 10.482)"
		></path>{ ' ' }
		<path
			fill="#E5E5E5"
			d="M2.274 1.794H10.702000000000002V16.772H2.274z"
			transform="matrix(1.52569 0 0 1.59368 13.507 1.206)"
		></path>{ ' ' }
		<path
			d="M10 24H30V26H10z"
			transform="matrix(.4577 0 0 .96245 14.245 -6.375)"
		></path>{ ' ' }
		<circle
			cx="4.773"
			cy="7"
			r="3"
			transform="translate(16.117 -.773) scale(1.52569)"
		></circle>{ ' ' }
		<path
			fill="#919191"
			d="M10 7H26.472V10H10z"
			transform="matrix(.55574 0 0 1.52569 13.265 10.482)"
		></path>{ ' ' }
	</svg>
);
icons.mini = (
	<svg
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={ 2 }
	>
		<path
			d="M30 24v2H2.429v-2h27.57zm0-10v2H2.429v-2h27.57zm0-10v2H2.429V4h27.57z"
			fillRule="nonzero"
		/>
		<path
			fill="#919191"
			fillRule="nonzero"
			d="M2.429 7h24.043v3H2.429zM2.429 17h24.043v3H2.429zM2.429 27h24.043v3H2.429z"
		/>
	</svg>
);

export default icons;
