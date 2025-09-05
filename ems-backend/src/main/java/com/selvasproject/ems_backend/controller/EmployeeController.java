package com.selvasproject.ems_backend.controller;


import com.selvasproject.ems_backend.dto.EmployeeDto;
import com.selvasproject.ems_backend.service.EmployeeService;
import com.selvasproject.ems_backend.service.EmployeeServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    // Build Add Employee Rest Api
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);

    }

    // Build Get Employee REST Api
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") long employeeid) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeid);
        return ResponseEntity.ok().body(employeeDto);
    }

    // Build Get All Employees
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok().body(employees);
    }

    // Build Update Employee REST Api
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto>  updateEmployee(@PathVariable("id") Long employeeid, @RequestBody EmployeeDto updateEmployee) {
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeid, updateEmployee);
        return ResponseEntity.ok().body(employeeDto);
    }

    // Build Delete Employee REST Api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeid) {
        employeeService.deleteEmployee(employeeid);
        return ResponseEntity.ok("Employee deleted successfully");
    }
}
