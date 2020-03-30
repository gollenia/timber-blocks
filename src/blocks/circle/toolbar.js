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
            circleAlignment
        } = attributes;

		return (
			<Fragment>
				<BlockControls>
                    <AlignmentToolbar
                        value={ circleAlignment }
                        onChange={ (event) => setAttributes({ circleAlignment: event }) }
                    />
				</BlockControls>
			</Fragment>
		);
	}
}

export default Toolbar;