import classnames from 'classnames';

class VisibilitySave {

    blockEdit() {
        const {
			attributes,
			setAttributes,
			isSelected
		} = this.props;

		const {
            hideMobile,
            hideDesktop
        } = attributes;
        

        return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected &&
					<InspectorAdvancedControls>
						<ToggleControl
							label={ __( 'Auf Mobilgeräten verstecken' ) }
							checked={ !! hideMobile }
							onChange={ () => setAttributes( {  hideMobile: ! hideMobile } ) }
							help={ !! hideMobile ? __( 'Wird auf Smartphones versteckt' ) : __( 'Ist auf Smartphones sichtbar' ) }
						/>
                        <ToggleControl
							label={ __( 'Auf Desktops verstecken' ) }
							checked={ !! hideDesktop }
							onChange={ () => setAttributes( {  hideDesktop: ! hideDesktop } ) }
							help={ !! hideDesktop ? __( 'Wird auf Desktops versteckt' ) : __( 'Ist auf Desktops sichtbar' ) }
						/>
					</InspectorAdvancedControls>
				}

			</Fragment>
		);
    }
}

export default VisibilitySave;