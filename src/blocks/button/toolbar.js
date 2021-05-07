import { Component } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

class Toolbar extends Component {
	render() {
		const {
			attributes: { buttonAlignment },
			setAttributes
		} = this.props;

		return (

				<BlockControls>
                    <AlignmentToolbar
                        value={ buttonAlignment }
                        onChange={ (event) => setAttributes({ buttonAlignment: event }) }
                    />
				</BlockControls>

		);
	}
}

export default Toolbar;