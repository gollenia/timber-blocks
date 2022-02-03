/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, PanelRow, QueryControls } from '@wordpress/components';
import { Icon, Button} from '@wordpress/components'
import icons from './icons.js'

const Inspector = (props) => {

	const {
		attributes,
		setAttributes,
		categoriesList,
		categoriesLoading
	} = props;

	const {
		limit,
		columnsSmall,
		columnsMedium,
		columnsLarge,
		showImages,
		dropShadow,
		imageSize,
		style,
		showDate,
		roundImages,
		excerptLength,
		categories,
		order,
		orderBy
	} = attributes;

	
	return (
		<InspectorControls>
			<PanelBody
				title={__('Data', 'ctx-blocks')}
				initialOpen={true}
			>
				<QueryControls
					order={ order }
					orderBy={ orderBy }
					categoriesList={ getCategoriesList() }
					selectedCategoryId={ category }
					numberOfItems= {limit}
					onOrderChange={ ( value ) => setAttributes( { order: value } ) }
					onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
					onCategoryChange={ ( value ) => setAttributes( { category: value } ) }
					onNumberOfItemsChange={ ( value ) => setAttributes( { limit: value } ) }
				/>
				
			</PanelBody>
			<PanelBody
				title={__('Appearance', 'ctx-blocks')}
				initialOpen={true}
			>
				
				<RangeControl
					label={__("Columns on small screens", 'ctx-blocks')}
					max={ 6 }
					min={ 1 }
					help={__("ex. Smartphones", 'ctx-blocks')}
					onChange={(value) => {setAttributes( { columnsSmall: value })}}
					value={ columnsSmall }
				/>
			
		
				<RangeControl
					label={__("Columns on medium screens", 'ctx-blocks')}
					max={ 6 }
					min={ 1 }
					help={__("Tablets and smaller screens", 'ctx-blocks')}
					onChange={(value) => {setAttributes( { columnsMedium: value })}}
					value={ columnsMedium }
				/>
	
				<RangeControl
					label={__("Columns on large screens", 'ctx-blocks')}
					max={ 6 }
					min={ 1 }
					help={__("Desktop screens", 'ctx-blocks')}
					onChange={(value) => {setAttributes( { columnsLarge: value })}}
					value={ columnsLarge }
				/>
				
			</PanelBody>

			<PanelBody
				title={__('Posts', 'ctx-blocks')}
				initialOpen={true}
			>
				<PanelRow>
					<ToggleControl
						label={ __("Drop shadow", 'ctx-blocks')}
						checked={ dropShadow }
						onChange={ (value) => setAttributes({ dropShadow: value }) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __("Hover effect", 'ctx-blocks')}
						checked={ hover }
						onChange={ (value) => setAttributes({ hover: value }) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __("Show post images", 'ctx-blocks')}
						checked={ showImages }
						onChange={ (value) => setAttributes({ showImages: value }) }
					/>
				</PanelRow>
				<PanelRow>
					<label className="components-base-control__label" htmlFor="inspector-range-control-4">Stil</label>
					<div className="styleSelector">
							<Button onClick={ () => setAttributes({ style: "list" }) } className={style == "list" ? "active" : ""}>
								<Icon size="64" className="icon" icon={icons.list}/>
								<div>Liste</div>
							</Button>
							<Button onClick={ () => setAttributes({ style: "cards" }) } className={style == "cards" ? "active" : ""}>
								<Icon size="64" className="icon" icon={icons.cards}/>
								<div>Karten</div>
							</Button>
					</div>
					
				</PanelRow>
				{ showImages &&
				<Fragment>
					<PanelRow>
						<ToggleControl
							label={ __("Round images", 'ctx-blocks')}
							checked={ roundImages }
							onChange={ (value) => setAttributes({ roundImages: value }) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __("Show date", 'ctx-blocks')}
							checked={ showDate }
							onChange={ (value) => setAttributes({ showDate: value }) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __("Show Tag", 'ctx-blocks')}
							checked={ showTag }
							onChange={ (value) => setAttributes({ showTag: value }) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __("Show Category", 'ctx-blocks')}
							checked={ showCategory }
							onChange={ (value) => setAttributes({ showCategory: value }) }
						/>
					</PanelRow>
					<RangeControl
						label={__("Image size", 'ctx-blocks')}
						max={ 100 }
						min={ 0 }
						help={__("Percent of width", 'ctx-blocks')}
						onChange={(value) => {setAttributes( { imageSize: value })}}
						value={ imageSize }
					/>
					
				</Fragment>
				}
				<RangeControl
					label={__("Length of preview text", 'ctx-blocks')}
					max={ 200 }
					min={ 0 }
					help={__("Number of words", 'ctx-blocks')}
					onChange={(value) => {setAttributes( { excerptLength: value })}}
					value={ excerptLength }
				/>
			</PanelBody>
		</InspectorControls>
	);
	
}

export default Inspector;