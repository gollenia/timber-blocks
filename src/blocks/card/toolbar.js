import { Component } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

class Toolbar extends Component {
	render() {
		const {
			attributes,
			setAttributes
		} = this.props;

		const {
            textAlign
        } = attributes;

		return (
			<BlockControls>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ (event) => setAttributes({ textAlign: event }) }
				/>

			</BlockControls>
		);
	}
}

export default Toolbar;