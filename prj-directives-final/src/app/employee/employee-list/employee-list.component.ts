import { Component, OnInit } from '@angular/core'
import { Employee } from '../employee.model'
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[]

  constructor (private employeeService: EmployeeService) {}

  ngOnInit () {
    this.employee = this.employeeService.getColaborators()
  }
}
