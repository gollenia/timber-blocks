import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';


export default function save( {attributes} ) {

		
		const {
			text,
			alertColor,
			footer,
			className,
			title,
			dismissable,
			showFooter
		} = attributes;

		return (
			<Fragment>
                <div className={className + " alert alert-" + alertColor} role="alert">
                    {dismissable &&
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
					  	</button>
					}
                    {title !== "" &&
						<h4 class="alert-heading">{title}</h4>
					}
                    <p>{text}</p>
                    {showFooter &&
						<Fragment>
							<hr/>
							<p class="mb-0">{footer}</p>
						</Fragment>
					}
                </div>
			</Fragment>
		);
}


