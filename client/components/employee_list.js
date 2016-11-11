import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
	//props.employees => an array of employee objects 
	//console.log(props.employees);

	return (
		<div>
			<div className="employee-list">
				{props.employees.map(employee =>
					<EmployeeDetail key={employee._id} employee={employee} />)}
			</div>
		</div>
	);	
};


export default createContainer(() => {
//Set up subscription 
Meteor.subscribe('employees');

//Return an object. Whatever we return will be sent to EmployeeList as props
//.fetch is what exectues the search in the employees collection
return { employees: Employees.find({}).fetch() };
}, EmployeeList);