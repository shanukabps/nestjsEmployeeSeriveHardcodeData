import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Employee } from './Employe.model';
import { EmployeeStatus } from './employee.enum';
import { EmployeeCreateDto } from './EmployeeCreateDto';
import { EmployeeSearchDto } from './EmployeeSearch.dto';
import { EmployeeUpdateDto } from './EmployeeUpdateDto';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(employeeCreateDto: EmployeeCreateDto) {
    const { firstName, lastName, designation, nearestcity, tier } =
      employeeCreateDto;

    const employee = {
      id: uuidv4(),
      firstName,
      lastName,
      designation,
      nearestcity,
      tier,
      status: EmployeeStatus.ACTIVE,
    };

    this.employees.push(employee);
    return employee;
  }

  employeeSearch(employeeSearchDto: EmployeeSearchDto) {
    // console.log(`employeeSearchDto`, employeeSearchDto);
    const { status, name } = employeeSearchDto;
    let employees = this.getAllEmployees();
    if (status) {
      employees = employees.filter((employee) => employee.status === status);
    }
    if (name) {
      employees = employees.filter(
        (employee) =>
          employee.firstName
            .toLocaleLowerCase()
            .includes(name.toLocaleLowerCase()) ||
          employee.lastName.includes(name),
      );
      // console.log(`employees`, employees);
      //console.log(name);
    }
    return employees;
  }

  getEmployeeById(id: String): Employee {
    const employees = this.getAllEmployees();
    let employee = employees.find((employee) => employee.id === id);
    if (!employee) {
      throw new NotFoundException(`${id} is not exist`);
    }
    return employee;
  }

  updateEmployee(employeeUpdateDto: EmployeeUpdateDto): Employee {
    const { id, city } = employeeUpdateDto;

    let employee = this.getEmployeeById(id);
    employee.nearestcity = city;
    return employee;
  }

  deleteEmployee(id: string): boolean {
    let employees = this.getAllEmployees();
    this.employees = employees.filter((employee) => employee.id != id);
    return employees.length != this.employees.length;
  }
}
