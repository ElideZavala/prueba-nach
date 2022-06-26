import { useState } from "react"
import { useDispatch  } from "react-redux";
import Sliders from "../componets/Sliders";

import { addImage } from '../redux/actions/imageActions'

const Upload = () => {
	const dispatch = useDispatch();
	const [preview, setPreview] = useState(null);

	const changeImage = (e) => {
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0])
		reader.onload = (e) => {
			e.preventDefault();
			setPreview(e.target.result);
		}
	}
	
	const uploadImage = () => {
		const newImage = { id: Date.now(), image: preview}
		dispatch(addImage(newImage));
	}
	
  return (
	<> 
		<div className="upload">
			<form className="upload__form">
				<input 
					className="upload__form--input"
					type="file"
					accept="image/*"
					multiple
					onChange={e => {
						changeImage(e);
					}}
				/>
				<div className="upload__form--text">
					<h3> Drag and drop a file or select add multiple images</h3>
				</div>
				<div className="upload__form--showImage">
					<img src={preview} alt="" width='350rem' height='240rem'/>
				</div>

			</form>
			<Sliders/>
			{preview && <button className="upload__form--button" onClick={uploadImage}>Save Image</button>}
			
			
		</div>
	</>
  )
}

export default Upload