const getEmployees = async () => {
	const url = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:elide';
	const res = await fetch(url);
	
	if(!res.ok) {
		const { url, status, statusText } = res;
		throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
	}

	
	const employees = await res.json(); 
	return employees;
	
}

export default getEmployees