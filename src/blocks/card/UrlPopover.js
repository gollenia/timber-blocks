import { URLPopover } from '@wordpress/block-editor';
import { Button, ToggleControl } from '@wordpress/components';
import { keyboardReturn } from '@wordpress/icons';

class MyURLPopover extends Component {
	constructor() {
		super( ...arguments );

		this.onChangeURL = this.onChangeURL.bind( this );
		this.openURLPopover = this.openURLPopover.bind( this );
		this.closeURLPopover = this.closeURLPopover.bind( this );
		this.submitURL = this.submitURL.bind( this );
		this.setTarget = this.setTarget.bind( this );

		this.state = {
			isVisible: false,
		};
	}

	onChangeURL( url ) {
		this.setState( { url } );
	}

	openURLPopover() {
		this.setState( {
			isVisible: true,
		} );
	}

	closeURLPopover() {
		this.setState( {
			isVisible: false,
		} );
	}

	submitURL() {
		// Not shown: Store the updated url.

		this.closeURLPopover();
	}

	setTarget() {
		// Not shown: Store the updated 'opensInNewWindow' setting.
	}

	render() {
		const { opensInNewWindow } = this.props;
		const { url, isVisible, isEditing } = this.state;

		return (
			<>
				<Button onClick={ this.openURLPopover }>Edit URL</Button>
				{ isVisible && (
					<URLPopover
						onClose={ this.closeURLPopover }
						renderSettings={ () => (
							<ToggleControl
								label={ __( 'Open in new tab' ) }
								checked={ opensInNewWindow }
								onChange={ this.setTarget }
							/>
						) }
					>
						<form onSubmit={ this.submitURL }>
							<input
								type="url"
								value={ url }
								onChange={ this.onChangeURL }
							/>
							<Button
								icon={ keyboardReturn }
								label={ __( 'Apply' ) }
								type="submit"
							/>
						</form>
					</URLPopover>
				) }
			</>
		);
	}
}
