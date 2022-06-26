import { useEffect } from "react"
import { useSelector } from "react-redux";
import { ReactComponent as Left } from "../images/left.svg"
import { ReactComponent as Right } from "../images/right.svg"

const Sliders = ({ preview }) => {
	const { images } = useSelector(state => state);
	const siguiente = () => {
		console.log('siguiente')
		console.log(images)
	}

	const anterior = () => {
		console.log('anterior')
	}

	useEffect(() => {
		console.log(images.images.length)
	}, [images])

	return (
		<div className="upload__form--carrousel">
				{images.images.length > 0 && (
					<button className="upload__form--carrousel__left" onClick={anterior}>
						<Left/>
					</button>
				)}
				<div className="upload__form--carrousel__contain">
					{images.images.map((image) => (
						<div key={image.id} className="upload__form--carrousel__image">
							<img src={image.image} alt="" height='250rem' width='370rem'/>
						</div>
					))}
				</div>
				{images.images.length > 0 && (	
					<button className="upload__form--carrousel__right" onClick={siguiente}>
						<Right/>
					</button>
				)}
			</div>
			

	)
} 

export default Sliders