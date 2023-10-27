import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: EmployeesComponent,
        data: { returnUrl: window.location.pathname }
      },
      {
        path: 'employee-details/:id',
        component: EmployeeDetailsComponent,
      },
      {
        path: 'new-employee',
        component: AddEmployeeComponent,
      },
    ]
  },
  { path: '**', redirectTo: '/employees', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }