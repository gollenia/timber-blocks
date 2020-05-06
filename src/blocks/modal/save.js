import { InnerBlocks } from '@wordpress/block-editor';

export default function save( {attributes} ) {
		
		const {
			buttonTitle,
            buttonSize,
            buttonAlignment,
            buttonIsLink,
            modalFull,
            modalContainer,
            modalTitle,
            modalCloseButton,
            modalCenter,
            modalScroll,
            modalHasVideo,
            modalVideoUrl,
            uniqueId,
            className
        } = attributes;


        var buttonClasses = [
                className || false,
                "uk-button",
                buttonSize || false,
                buttonIsLink ? "uk-button-link" : false
        ].filter(Boolean).join(" ");
        
        var outerModalClasses = "uk-flex-top"
        
        if(!modalHasVideo) {
            outerModalClasses = [
                "uk-modal",
                modalFull ? "uk-modal-full" : false,
                modalContainer ? "uk-modal-container" : false,
            ].filter(Boolean).join(" ");    
        }

        var innerModalClasses = [
            "uk-modal-dialog",
            modalCenter ? "uk-margin-auto-vertical" : false,
            modalHasVideo ? "uk-width-auto uk-margin-auto-vertical" : "uk-modal-body"
        ].filter(Boolean).join(" ");

        var videoUrl = modalVideoUrl;

        const getYoutubeId = (url) => {
            url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
         }
       
        if(!modalVideoUrl.includes("embed")) {
            videoUrl = `http://www.youtube.com/embed/${getYoutubeId(modalVideoUrl)}`;
        }

		return (
			<div style={{textAlign: buttonAlignment}}>
				<a href={`#${uniqueId}`} className={buttonClasses} uk-toggle="">{ buttonTitle }</a>
                <div id={uniqueId} className={outerModalClasses} uk-modal="">
                    <div className={innerModalClasses} uk-overflow-auto={modalScroll}>
                        <button className={modalCloseButton} type="button" uk-close=""></button>
                        {!modalHasVideo && 
                            <h2 className="uk-modal-title">{modalTitle}</h2>
                        }
                        
                        {modalHasVideo && <iframe 
                                src={videoUrl} 
                                width="1920" 
                                height="1080" 
                                frameborder="0" 
                                uk-video="" uk-responsive="">
                            </iframe>
                        }
                        {!modalHasVideo && 
                            <InnerBlocks.Content />
                        }
                        
                    </div>
                </div>
			</div>
            
		);
}