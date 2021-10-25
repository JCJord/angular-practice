import { Employee } from './employee.model'

export class EmployeeService {
  private employee: Employee[] = [
    new Employee('Rogerio', 'Churrasqueiro', 1500.53),
    new Employee('Amanda', 'Dev', 5000.54)
  ]

  addNewEmployee (employee: Employee) {
    this.employee.push(employee)
    console.log(this.employee)
  }

  getColaborators () {
    return this.employee
  }
}
