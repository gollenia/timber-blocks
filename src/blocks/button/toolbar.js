import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
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
			<Fragment>
				<BlockControls>
                    <AlignmentToolbar
                        value={ buttonAlignment }
                        onChange={ (event) => setAttributes({ buttonAlignment: event }) }
                    />
				</BlockControls>
			</Fragment>
		);
	}
}

export default Toolbar;