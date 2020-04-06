import Inspector from './inspector';

import { Component, Fragment } from '@wordpress/element';


export default class ColumnEdit extends Component {

	render() {
		const {
			attributes,
		} = this.props;

		const {
			max,
			current
		} = attributes;

		var currentWidth = `${current / max * 100}%`;

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className="ctx-progress outer">
					<div style={{width: currentWidth}} className="inner"></div>
				</div>    
			</Fragment>
		);
	};

}