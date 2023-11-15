import { getColorClassName, useBlockProps } from '@wordpress/block-editor';

const save = (props) => {
	const { attributes, className } = props;

	const {
		maxValue,
		currentValue,
		unit,
		prefixedUnit,
		currentDescription,
		maxDescription,
		decimalPlaces,
		thousandSeparators,
		colorBar,
		colorBarBackground,
	} = attributes;

	const classes = [
		'ctx-progress',
		className,
		decimalPlaces ? 'ctx-progress--decimal' : false,
		thousandSeparators ? 'ctx-progress--thousand-separators' : false,
	];

	const blockProps = useBlockProps.save({ className: classes });

	const percent =
		currentValue < maxValue
			? 100
			: Math.floor((currentValue * 100) / maxValue);
	const fullPercent = Math.floor((currentValue * 100) / maxValue);

	const formattedCurrentValue = new Intl.NumberFormat('de-DE').format(
		currentValue
	);
	const formattedMaxValue = new Intl.NumberFormat('de-DE').format(maxValue);

	getColorClassName('background-color', colorBarBackground);
	getColorClassName('background-color', colorBar);

	return (
		<div
			id="progress"
			data-max={maxValue}
			data-current={currentValue}
			data-unit={unit}
			data-prefixed={prefixedUnit}
		>
			<div class="progress__legends">
				<div style="color: {{fg.color}}" class="legend--current">
					<div class="legend__label">{{ currentDescription }}</div>
					<div class="legend__value">
						{prefixedUnit ? unit : ''}{' '}
						<span class="progress__number-injection">
							{formattedCurrentValue}
						</span>{' '}
						{!prefixedUnit ? unit : ''}
					</div>
				</div>
				<div style="color: var(--black)" class="legend--max">
					<div class="legend__label">{maxDescription}</div>
					<div class="legend__value">
						{prefixedUnit ? unit : ''} {formattedMaxValue}{' '}
						{!prefixedUnit ? unit : ''}
					</div>
				</div>
			</div>
			<div style="background: {{bg.color}}" class="progress__track">
				<div
					style="background-color: {{fg.color}}; width: 0%;"
					class="progress__indicator"
				>
					<span class="progress__label">{fullPercent}%</span>
				</div>
			</div>
		</div>
	);
};

export default save;
