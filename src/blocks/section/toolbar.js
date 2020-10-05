import { Component } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

class Toolbar extends Component {
	render() {
		const {
			attributes,
			setAttributes
		} = this.props;

		const {
            textAlignment
        } = attributes;

		return (
			<BlockControls>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ (event) => setAttributes({ textAlignment: event }) }
				/>

			</BlockControls>
		);
	}
}

export default Toolbar;