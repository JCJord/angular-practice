import { Component, OnInit } from '@angular/core'
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  constructor (private employeeService: EmployeeService) {}

  ngOnInit (): void {}

  addEmployee (name: string, role: string, wage: number) {
    this.employeeService.addNewEmployee({ name, role, wage })
  }
}
