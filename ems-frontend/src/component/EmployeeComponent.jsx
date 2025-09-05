import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService.js'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const {id} = useParams();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });



  const navigate = useNavigate();

useEffect(() => {
    if(id){
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        }).catch(error => {
            console.error(error);
        })
    }
}, [id])
  
  function saveOrUpdateEmployee(e) {    
    e.preventDefault();

    if(validateForm()){
        const employee = { firstName, lastName, email };
        console.log(employee);
        if(id){
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigate('/employees');
            }).catch(error => {
                console.error(error);
            })
        }
        else{
            createEmployee(employee).then((response) => {
            console.log(response.data);
            navigate('/employees');
        }).catch(error => {
            console.error(error);       
        })
        }
    }
}
     

  function validateForm() {
    let Valid = true;

    const errorsCopy = { firstName: '', lastName: '', email: '' };

    if (firstName.trim()) {
        errorsCopy.firstName = '';
    } else {
        errorsCopy.firstName = 'First Name is required';
        Valid = false;
    }

    if (lastName.trim()) {
        errorsCopy.lastName = '';
    } else {
        errorsCopy.lastName = 'Last Name is required';
        Valid = false;
    }

    if (email.trim()) {
        errorsCopy.email = '';
    } else {
        errorsCopy.email = 'Email is required';
        Valid = false;
    }

    setErrors(errorsCopy);
    return Valid;
  }

  function pageTitle(){
    if(id){
        return <h2 className='text-center'> UPDATE EMPLOYEE </h2>
    }
    else{
        return <h2 className='text-center'> ADD EMPLOYEE </h2>
    }
  }

  
  return (

  <div className="bg-hero">
    {  
  <div className='bg-image' style={{ backgroundImage: "url('assets/header-bg.jpeg')", backgroundSize: 'cover', minHeight: '100vh'
  }}>
    {/* <div className="container-fluid mt-5 mb-5 " style={background:linear-gradient(90deg, rgba(83, 13, 116, 0.7) 0%, rgba(0,86,179,0.7) 100%)}> */}
    <div className="container mt-5 mb-5 ">

      <div className="row justify-content-center">
        <div className="col-md-6">
          {pageTitle()}
          <form className="p-5 rounded" style={{ background: "linear-gradient(90deg, rgba(71, 10, 100, 0.7) 0%, rgba(159, 43, 43, 0.7) 100%)" }}>
            <div className="form-group mb-3">
              <label className="form-label text-white">First Name:</label>
              <input
                type="text"
                placeholder="Enter Employee First Name"
                name="firstName"
                value={firstName}
                className={`form-control${errors.firstName ? ' is-invalid' : ''}`}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className="form-group mb-3">
              <label className="form-label text-white">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Employee Last Name"
                name="lastName"
                value={lastName}
                className={`form-control${errors.lastName ? ' is-invalid' : ''}`}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
            <div className="form-group mb-3">
              <label className="form-label text-white">Email:</label>
              <input
                type="text"
                placeholder="Enter Employee Email"
                name="email"
                value={email}
                className={`form-control${errors.email ? ' is-invalid' : ''}`}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              <br />
              
            </div>
            <button className="btn btn-success w-100" onClick={saveOrUpdateEmployee}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
}
  </div>
)

}

export default EmployeeComponent
















