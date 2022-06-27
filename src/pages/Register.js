import { useState } from "react";

const Register = () => {

	const initialSesion = {
		last_name: '',
		name: '',
		birthday: ''
	}
	const [editData, setEditData] = useState(initialSesion);
	const {last_name, name, birthday} = editData

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setEditData({...editData, [name]:value})
	} 

	const handleSubmit = (e) => {
		e.preventDefault()
		const newEmployee = { id: Date.now(), ...editData}

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newEmployee)
	  };
	  fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:elide', requestOptions)
			.then(response => response.json())
		
		setEditData(initialSesion);
	}
	

	return (
		<form className='register__employee'>
			<div className='register__employee--head'>
				<h3 className='register__employee--head__title'>
					Crear Nuevo Usuario
				</h3>
			</div>
			<div className='register__employee--employeedata'>
				<label htmlFor='name'>Nombre</label>
				<div className='register__employee--employeedata__name'>
					<input 
						type='text'
						maxLength='30'
						value={last_name} 
						onChange={handleChangeInput}
						name="last_name"
						placceholder="Ingresa tu nombre"
					/>
					<small>{last_name.length}/30</small>
				</div>
				<label htmlFor='name'>Apellidos</label>
				<div className='register__employee--employeedata__lastname'>
					<input 
						type='text'
						maxLength='30'
						value={name} 
						onChange={handleChangeInput}
						name="name"
						placceholder="Ingresa tus apellidos"
					/>
					<small>{name.length}/30</small>
				</div>
				<div className='register__employee--employeedata__calendar'>
					<input 
						type='date'
						value={birthday} 
						onChange={handleChangeInput}
						name="birthday"
					/>
				</div>
				
				<button className='register__employee--employeedata__submit'onClick={handleSubmit}>Enviar</button>
			</div>

		</form>
	)
}

export default Register