/**
 * Wordpress Dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	CheckboxControl,
	Icon,
	PanelBody,
	PanelRow,
	QueryControls,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from './icons.js';

const Inspector = ( props ) => {
	const { attributes, setAttributes, category, categoryList } = props;

	const {
		limit,
		showTag,
		showCategory,
		styleType,
		showDate,
		excerptLength,
		linkAsButton,
		order,
		orderBy,
	} = attributes;

	const getCategoriesList = () => {
		if ( ! categoryList?.length ) {
			return [];
		}

		return categoryList;
	};

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Data', 'ctx-blocks' ) }
				initialOpen={ true }
			>
				<QueryControls
					order={ order }
					orderBy={ orderBy }
					categoriesList={ getCategoriesList() }
					selectedCategoryId={ category }
					numberOfItems={ limit }
					onOrderChange={ ( value ) =>
						setAttributes( { order: value } )
					}
					onOrderByChange={ ( value ) =>
						setAttributes( { orderBy: value } )
					}
					onCategoryChange={ ( value ) =>
						setAttributes( { category: value } )
					}
					onNumberOfItemsChange={ ( value ) =>
						setAttributes( { limit: value } )
					}
				/>
			</PanelBody>

			<PanelBody
				title={ __( 'Style', 'ctx-blocks' ) }
				initialOpen={ true }
			>
				<PanelRow>
					<div className="styleSelector">
						<Button
							onClick={ () =>
								setAttributes( { styleType: 'mini' } )
							}
							className={ styleType == 'mini' ? 'active' : '' }
						>
							<Icon
								size="64"
								className="icon"
								icon={ icons.mini }
							/>
							<div>Minimal</div>
						</Button>
						<Button
							onClick={ () =>
								setAttributes( { styleType: 'list' } )
							}
							className={ styleType == 'list' ? 'active' : '' }
						>
							<Icon
								size="64"
								className="icon"
								icon={ icons.list }
							/>
							<div>Liste</div>
						</Button>
						<Button
							onClick={ () =>
								setAttributes( { styleType: 'cards' } )
							}
							className={ styleType == 'cards' ? 'active' : '' }
						>
							<Icon
								size="64"
								className="icon"
								icon={ icons.cards }
							/>
							<div>Karten</div>
						</Button>
					</div>
				</PanelRow>

				<CheckboxControl
					label={ __( 'Link as button', 'ctx-blocks' ) }
					checked={ linkAsButton }
					onChange={ ( value ) =>
						setAttributes( { linkAsButton: value } )
					}
				/>

				<CheckboxControl
					label={ __( 'Show date', 'ctx-blocks' ) }
					checked={ showDate }
					onChange={ ( value ) =>
						setAttributes( { showDate: value } )
					}
				/>
				<CheckboxControl
					label={ __( 'Show Tags', 'ctx-blocks' ) }
					checked={ showTag }
					onChange={ ( value ) =>
						setAttributes( { showTag: value } )
					}
				/>
				<CheckboxControl
					label={ __( 'Show Category', 'ctx-blocks' ) }
					checked={ showCategory }
					onChange={ ( value ) =>
						setAttributes( { showCategory: value } )
					}
				/>

				<RangeControl
					label={ __( 'Length of preview text', 'ctx-blocks' ) }
					max={ 200 }
					min={ 0 }
					help={ __( 'Number of words', 'ctx-blocks' ) }
					onChange={ ( value ) => {
						setAttributes( { excerptLength: value } );
					} }
					value={ excerptLength }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
