export default function save( {attributes} ) {

		const {
            max,
            current
        } = attributes;
        
        return (
            <progress className="uk-progress" value={current} max={max}></progress>
        );
}


