import React, {useEffect, useState} from 'react'
import { listEmployees, deleteEmployee } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const ListEmployeeComponent = () => {

const [employees, setEmployees] = useState([])

const navigate = useNavigate();

useEffect(() => {
    getAllEmployees();
}, [])

function getAllEmployees() {
    listEmployees().then((response) => {
        setEmployees(response.data)
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })
}

function addNewEmployee() {
    navigate('/add-employee');
}

function updateEmployee(id) {
    navigate(`/update-employee/${id}`);
}

function removeEmployee(id) {   
    console.log(id);
    deleteEmployee(id).then((response) => {
        getAllEmployees();
    }).catch(error => {
        console.error(error);
    }
    )
}

  return (
    <div className='container' background="primary">
        <h2> CREW LIST </h2>
        <br />

        <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee </button>
        <br />
        <br />
        <table className='table table-bordered table-striped table-hover table-responsive'>
            <thead>
                <tr>
                    <th> EMPLOYEE ID </th>
                    <th> FIRST NAME </th>
                    <th> LAST NAME </th>
                    <th> EMAIL </th>
                    <th> ACTIONS </th>
                </tr>
            </thead>
            <tbody>
                {employees.length === 0 ? (
        <tr>
            <td colSpan="5" className="text-center text-muted">No employees found.</td>
        </tr>
    ) : (
        employees.map(employee => 
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                    <button className='btn btn-info me-2' onClick={() => updateEmployee(employee.id)}>Update</button>
                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}>Delete</button>
                </td>
            </tr>
        )
    )}
            </tbody> 
        </table>
    </div>
  )
}

export default ListEmployeeComponent