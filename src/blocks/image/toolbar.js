import { Component } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

class Toolbar extends Component {
	render() {
		const {
			attributes: {
				alignment
			},
			setAttributes
		} = this.props;

		return (
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ (event) => setAttributes({ alignment: event }) }
				/>

			</BlockControls>
		);
	}
}

export default Toolbar;