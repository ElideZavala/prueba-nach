import { useCallback, useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Left } from "../images/left.svg"
import { ReactComponent as Right } from "../images/right.svg"
import { deleteImage } from "../redux/actions/imageActions";


const Sliders = () => {
	const { images } = useSelector(state => state);
	const slideshow = useRef(null);
	const dispatch = useDispatch();

	const siguiente = useCallback (() => {
		if(slideshow.current.children.length > 0) {
			const primerElemento = slideshow.current.children[0];
			slideshow.current.style.transition = `300ms ease-out all`;
			const sizeSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
			
			const transicion = () => {
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(primerElemento);
				// Eliminamos la transicion anterior. 
				slideshow.current.removeEventListener('transitionend', transicion);
			}

			slideshow.current.addEventListener('transitionend', transicion);
		}
	},[]); 

	const anterior = useCallback (() => {
		if(slideshow.current.children.length > 0) {
			// Accedemos al ultimo elemento. 
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			//Insertamos el ultimo elemento al primero
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			slideshow.current.style.transition = 'none';
			const sizeSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `300ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			})
		}
	},[]);

	return (
		<div className="upload__form--carrousel">
				{images.images.length > 1 && (
					<button className="upload__form--carrousel__left" onClick={anterior}>
						<Left/>
					</button>
				)}
				<div className="upload__form--carrousel__contain">
					<div className="upload__form--carrousel__contain--slideshow" ref={slideshow}>
						{images.images.map((image) => (
							<div key={image.id}>
							<div className="upload__form--carrousel__contain--slideshow__image">
								<img className="upload__form--carrousel__contain--slideshow__image--img" src={image.image} alt=""/>
							</div>
							<button  className="upload__form--carrousel__contain--slideshow__image--buttom" onClick={() => dispatch(deleteImage(image.id))}>Eliminar Imagen</button>
							</div>
						))}
					</div>
				</div>
				{images.images.length > 1 && (	
					<button className="upload__form--carrousel__right" onClick={siguiente}>
						<Right/>
					</button>
				)}
			</div>
	)
} 

export default Sliders