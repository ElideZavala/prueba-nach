import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
	 <div className='notFound'>
		 <h2 className='notFound-text'>No Encontrada</h2>
		 <p className='notFound-found'>
			 Regresa a la página principal
			 <Link to="/" className='notFound-link'>Aqui</Link>
		 </p>
	 </div>
  )
}

export default NotFound