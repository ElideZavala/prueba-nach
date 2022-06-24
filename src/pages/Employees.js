import { useEffect, useState } from "react";
import getEmployees from "../helpers/getEmployees"
import moment from "moment";

const Employees = () => {

	const [ employees, setemployees] = useState([]);
	const [success, setSuccess] = useState(false)
	const [ error, setError ] = useState(null);

	useEffect(() => {
		updateEmployees();
	}, [])

	/* ******* llamado a la API de Empleados ******* */
	const updateEmployees = () => {
		getEmployees()
			.then((NewEmployees) => {
				setemployees(NewEmployees.data.employees)
				setSuccess(NewEmployees.success)
			})
			.catch((error) => {
				console.log(error)
				setError("Error al cargar los usuarios")
      })
	}

	

	
  return (

	 <div className="contain__table">
		<table className='contain__table--employees'>
			<thead className='contain__table--employees__column'>
				<tr>
					<th>No.</th>
					<th>Name</th>
					<th>Last Name</th>
					<th>Birthday</th>
				</tr>
			</thead>
			<tbody className='contain__table--row'>
				{employees.map((employee, i) => (
					<tr key={employee.id}>
						<td>{i + 1}</td>
						<td>{employee.last_name}</td>
						<td>{employee.name}</td>
						<td>{moment(employee.birthday).format("MMM DD YY") }</td>
					</tr>
				))}
			</tbody>
		</table>
	 </div>
  )
}

export default Employees