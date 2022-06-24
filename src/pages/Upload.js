import { useRef, useState, useEffect } from "react"

const Upload = () => {
	const [image, setImage] = useState('');
	const [preview, setPreview] = useState('')
	const fileInputRef = useRef('');

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result)
			}
			reader.readAsDataURL(image);
		} else {
			setPreview(null)
		}
	})
	
  return (
	 <div className="upload">
		<form className="upload__form">
			
			{ preview 
				? ( <img className="upload__form--img" src={preview} onClick={() => setImage(null)}/> )
				: (<button className="upload__form--button" onClick={(e) => {
						e.preventDefault();
						fileInputRef.current.click();
						}}>
					add Image
					</button> 
					)}
			<input 
				className="upload__form--input" 
				type="file" 
				ref={fileInputRef}
				accept="image/*"
				onChange={(e) => {
					const file = e.target.files[0];
					if (file && file.type.substr(0, 5) === "image") {
						setImage(file);
					} else {
						setImage(null);
					}
				}}/>
		</form>
	 </div>
  )
}

export default Upload