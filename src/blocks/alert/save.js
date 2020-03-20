import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';


export default function save( {attributes} ) {

		
		const {
			text,
			alertColor,
			className,
			dismissable,
		} = attributes;


		return (
			<Fragment>
                <div className={className + " uk-alert uk-alert-" + alertColor} role="alert">
                    {dismissable &&
						<a type="button" class="uk-alert-close"></a>
					}
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                </div>
			</Fragment>
		);
}


