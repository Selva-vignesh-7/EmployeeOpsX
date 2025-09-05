package com.selvasproject.ems_backend.service;

import com.selvasproject.ems_backend.dto.EmployeeDto;
import com.selvasproject.ems_backend.entity.Employee;
import com.selvasproject.ems_backend.exception.ResourceNotFoundException;
import com.selvasproject.ems_backend.mapper.EmployeeMapper;
import com.selvasproject.ems_backend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee createdEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(createdEmployee);
    }


    @Override
    public EmployeeDto getEmployeeById(long employeeid) {
        Employee employee = employeeRepository.findById(employeeid)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not exist with given id: " + employeeid));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees(){
        List<Employee> employees = employeeRepository.findAll();
            return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeid, EmployeeDto updateEmployee) {
        Employee employee = employeeRepository.findById(employeeid).orElseThrow(() -> new ResourceNotFoundException("Employee is not exist with given id: " + employeeid));

        employee.setFirstName(updateEmployee.getFirstName());
        employee.setLastName(updateEmployee.getLastName());
        employee.setEmail(updateEmployee.getEmail());

        Employee updatedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeid) {
        Employee employee = employeeRepository.findById(employeeid).orElseThrow(() -> new ResourceNotFoundException("Employee is not exist with given id: " + employeeid));

        employeeRepository.deleteById(employeeid);
    }


}
