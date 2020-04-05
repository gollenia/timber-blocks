
/**
 * External dependencies
 */
import { Fragment } from '@wordpress/element';



export default function save( props ) {
       
		const {
            className,
            title,
            image,
            icon,
            roundImage,
            content,
            contentType
        } = props.attributes;


        var classes = [
            className || false,
			"ctx-description-" + contentType,
			"ctx-description-item"
        ].filter(Boolean).join(" ")
        
        var readableDate = "";
        if(contentType==="date") {
            readableDate = moment(content).format( 'D. MMMM YYYY' );
        }

		return (
            <div className={classes}>
                { image && 
                    <img className={roundImage ? "round" : ""} src={image.sizes.qsmall.url}/>
                }
                { !image && icon !== "" &&
                    <i className={`ctx-icon ${icon}-icon`}></i>
                }
                <div className="ctx-item-content">
                    <dt>{title}</dt>
                    <dd className="ctx-item-content">
                        { contentType === "date" && <time datetime={content}>{readableDate}</time>}
                        { contentType !== "date" && <div>{content}</div> }
                    </dd>
                </div>
            </div>
		);
}


