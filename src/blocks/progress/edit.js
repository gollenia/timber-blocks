import Inspector from './inspector';

import { Component, Fragment } from '@wordpress/element';


export default class ColumnEdit extends Component {

	render() {
		const {
			attributes,
			colorBar,
			colorBackground
		} = this.props;

		const {
			percent,
			showValue,
			title
		} = attributes;

		

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div style={{backgroundColor: colorBackground.color}} className="ctx-progress outer">
					<div style={{width: `${percent}%`, backgroundColor: colorBar.color}} className="inner">
						{ showValue && <span className="value">{percent}%</span> }
					</div>
				</div>
				<span>{title}</span> 
			</Fragment>
		);
	};

}