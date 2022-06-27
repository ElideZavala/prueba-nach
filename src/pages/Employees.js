import { useCallback, useEffect } from "react";
import getEmployees from "../helpers/getEmployees"
import moment from "moment";
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getEmployeesDatas } from "../redux/actions/employeeActions";

const options = {filterType: 'checkbox',};

const Employees = () => {
	const dispatch = useDispatch();
	const { employees } = useSelector(state => state);

	useEffect(() => {
		updateEmployees();
	}, [])
	
	/* ******* llamado a la API de Empleados ******* */
	const updateEmployees = useCallback(() => {
		getEmployees()
				.then((NewEmployees) => {
					// Convertir birthday a fecha YYYY/MM/DD.
					NewEmployees.map(employee => ( 
						employee.birthday = moment(employee.birthday).format("YYYY/MM/DD")
					))

					// Los empleadosadd mas birthday en (YYYY/MM/DD) .
					const allEmployees = [...NewEmployees]

					// Guardar
					dispatch(getEmployeesDatas(allEmployees))
				})
				
				.catch((error) => {
					throw error
      		})

		},[employees, dispatch])
		
	
	const columns = [
		{
			name: "id",
			label: "ID"
		},
		{
			name: "last_name",
			label: "NAME"
		},
		{
			name: "name",
			label: "LAST NAME"
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
		 {/* <button>Crear nuevo Empleado</button> */}
		 <Link to="/register">Crear nuevo Empleado</Link>
	 </div>
  )
}

export default Employees