/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, ComboboxControl, SelectControl, PanelRow, Text, QueryControls } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';

function Inspector(props, allPages) {

	const {
		attributes, 
		setAttributes, 
	} = props;

	const {
		showIcons, showActive, parentPage, parentCategory, dataType, limit, orderBy, order,
	} = attributes;

	let pageListOptions = [{ value: 0, label: __('Select a parent page', "ctx-blocks") }];
	if (allPages.length > 0) {
		allPages.forEach((post) => {
			pageListOptions.push({ value: post.id, label: post.title.rendered });
		});
	}

	const categoryList = useSelect((select) => {
		const { getEntityRecords } = select(coreStore);
		const query = {};
		let result = getEntityRecords('taxonomy', 'category', query);
		const categoryListOptions = [{ value: 0, label: __('Select a category', "ctx-blocks") }];
		if (result == null) {
			result = [];
		}
		if (result.length > 0) {
			result.forEach((category) => {
				categoryListOptions.push({ value: category.id, label: category.name });
			});
		}
		return categoryListOptions;
	}, [dataType]);


	const pageList = useSelect((select) => {
		const { getEntityRecords } = select(coreStore);
		let pages = getEntityRecords('postType', 'page', { per_page: 100 });
		if (pages == null) {
			pages = [];
		}

		const pageListOptions = [{ value: 0, label: __('Select a parent page', "ctx-blocks") }];
		if (pages.length > 0) {
			pages.forEach((post) => {
				pageListOptions.push({ value: post.id, label: post.title.rendered });
			});
		}
		return pageListOptions;
	});


	return (
		<InspectorControls>
			<PanelBody
				title={__('Data', 'ctx-blocks')}
				initialOpen={true}
			>

				<SelectControl
					label={__('Parent page', "ctx-blocks")}
					value={dataType}
					onChange={(value) => setAttributes({ dataType: value })}
					options={[
						{ value: "pages", label: __("Pages", 'ctx-blocks') },
						{ value: "posts", label: __("Posts", 'ctx-blocks') },
						{ value: "categories", label: __("Categories", 'ctx-blocks') },
					]} />

				{dataType === "pages" &&
					<SelectControl
						label={__('Parent page', "ctx-blocks")}
						value={parentPage}
						onChange={(value) => setAttributes({ parentPage: parseInt(value) })}
						options={pageList} />}

				{dataType === "posts" &&
					<SelectControl
						label={__('Category (including it\'s children)', "ctx-blocks")}
						value={parentCategory}
						onChange={(value) => setAttributes({ parentCategory: parseInt(value) })}
						options={categoryList} />}

				<SelectControl
					label={__('Order by', "ctx-blocks")}
					value={orderBy}
					onChange={(value) => setAttributes({ orderBy: value })}
					options={[
						{ value: "date", label: __("Date", 'ctx-blocks') },
						{ value: "title", label: __("Title", 'ctx-blocks') },
						{ value: "id", label: __("ID", 'ctx-blocks') },
					]} />

				<SelectControl
					label={__('Order', "ctx-blocks")}
					value={order}
					onChange={(value) => setAttributes({ order: value })}
					options={[
						{ value: "desc", label: __("Descending", 'ctx-blocks') },
						{ value: "asc", label: __("Ascending", 'ctx-blocks') }
					]} />

				<RangeControl
					label={__("Limit", 'ctx-blocks')}
					max={50}
					min={1}
					help={__("How meny items should be displayed?", 'ctx-blocks')}
					onChange={(value) => { setAttributes({ limit: value }); } }
					value={limit} />
			</PanelBody>
			<PanelBody
				title={__('Appearance', 'ctx-blocks')}
				initialOpen={true}
			>


				<PanelRow>
					<ToggleControl
						label={__("Show Icons", 'ctx-blocks')}
						checked={showIcons}
						onChange={(value) => setAttributes({ showIcons: value })} />

				</PanelRow>

				<PanelRow>
					<ToggleControl
						label={__("Highlight currently loaded menu item", 'ctx-blocks')}
						checked={showActive}
						onChange={(value) => setAttributes({ showActive: value })} />
				</PanelRow>

			</PanelBody>


		</InspectorControls>
	);

}

export default Inspector;