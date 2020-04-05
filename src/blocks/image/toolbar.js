import { Component } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

class Toolbar extends Component {
	render() {
		const {
			attributes,
			setAttributes
		} = this.props;

		const {
            buttonAlignment
        } = attributes;

		return (
			<BlockControls>
				<AlignmentToolbar
					value={ imageAlignment }
					onChange={ (event) => setAttributes({ buttonAlignment: event }) }
				/>

			</BlockControls>
		);
	}
}

export default Toolbar;