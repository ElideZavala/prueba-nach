import { useCallback, useEffect, useState } from "react";
import getEmployees from "../helpers/getEmployees"
import moment from "moment";
import MUIDataTable from "mui-datatables";

const options = {filterType: 'checkbox',};

const Employees = () => {
	const [ employees, setemployees] = useState([]);
	// const [ error, setError ] = useState(null);
	
	useEffect(() => {
		updateEmployees();
	}, [])
	
	/* ******* llamado a la API de Empleados ******* */
	const updateEmployees = useCallback(() => {
		getEmployees()
				.then((NewEmployees) => {
					const birthday = NewEmployees.map(employee => ( 
						employee.birthday = moment(employee.birthday).format("MM /DD /YY")
					))
					setemployees([...NewEmployees, NewEmployees.birthday = birthday] )
				})
				
				.catch((error) => {
					throw error
					// setError("Error al cargar los usuarios")
      		})

		},[employees])
	
	const columns = [
		{
			name: "id",
			label: "ID"
		},
		{
			name: "last_name",
			label: "lAST NAME"
		},
		{
			name: "name",
			label: "NAME"
		},
		{
			name:  "birthday",
			label: "BIRTHDAY",
		},
	];


  return (
	  <div className="contain__table">
		 <MUIDataTable
			 title={"Lista de empleados"}
			 data={employees}
			 columns={columns}
			 options={options}
		 />
		 <button>Crear nuevo Empleado</button>
	 </div>
  )
}

export default Employees