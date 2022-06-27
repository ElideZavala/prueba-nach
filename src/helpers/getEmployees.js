import { moment } from "moment";

const getEmployees = async () => {
	const url = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:elide';
	const res = await fetch(url);
	
	if(!res.ok) {
		const { url, status, statusText } = res;
		throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
	}

	
	const datas = await res.json(); 
	const employees = datas.data.employees; 
	// const birthday = allemployees.map(employee => moment(employee.birthday).format("MM Do YY"));
	// const employees = {...allemployees, birthday}
	// console.log(birthday)
	return employees;
	
}

export default getEmployees