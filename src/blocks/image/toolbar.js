import { Component } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { IconButton, Toolbar, ToolbarItem, Button } from '@wordpress/components'

class CustomToolbar extends Component {
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

export default CustomToolbar;