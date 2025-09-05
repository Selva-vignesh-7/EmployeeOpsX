package com.selvasproject.ems_backend.service;

import com.selvasproject.ems_backend.dto.EmployeeDto;
import com.selvasproject.ems_backend.entity.Employee;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(long employeeid);


    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeid, EmployeeDto updateEmployee);

    void deleteEmployee(Long employeeid);
}
