import { useEffect, useState } from "react";
import getEmployees from "../helpers/getEmployees"
import moment from "moment";
import MUIDataTable from "mui-datatables";

const options = {filterType: 'checkbox',};

const Employees = () => {
	const [ employees, setemployees] = useState([]);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		updateEmployees();
	}, [])
	
	/* ******* llamado a la API de Empleados ******* */
	const updateEmployees = () => {
		getEmployees()
		.then((NewEmployees) => {
			const employees = NewEmployees.data.employees
			setemployees(employees)
			})
		.catch((error) => {
			console.log(error)
			// setError("Error al cargar los usuarios")
      })
	}
	
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
			name:  "bithday",
			label: "BIRTHDAY"
		}
	];


  return (
	  <div className="contain__table">
		 <MUIDataTable
			 title={"Lista de empleados"}
			 data={employees}
			 columns={columns}
			 options={options}
		 />
	 </div>
  )
}

export default Employees