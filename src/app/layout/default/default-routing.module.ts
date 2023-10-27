import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';

const moduleRoutes: Routes = [
 {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        // canActivate: [AuthGuard],
        loadChildren: () =>  import('../../views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
        {
            path: 'home',
            // canActivate: [AuthGuard],
            loadChildren: () =>  import('../../views/home/home.module').then(m => m.HomeModule)
          },
      {
        path: 'customers',
        // canActivate: [AuthGuard],
        loadChildren: () =>  import('../../views/customers/customers.module').then(m => m.CustomersModule)
      },
          {
            path: 'fleet',
            // canActivate: [AuthGuard],
            loadChildren: () =>  import('../../views/fleet/fleet.module').then(m => m.FleetModule)
          },
          {
            path: 'trips',
            // canActivate: [AuthGuard],
            loadChildren: () =>  import('../../views/trips/trips.module').then(m => m.TripsModule)
          },
          {
            path: 'employees',
            // canActivate: [AuthGuard],
            loadChildren: () =>  import('../../views/employees/employees.module').then(m => m.EmployeesModule)
          },
          {
            path: 'finance',
            // canActivate: [AuthGuard],
            loadChildren: () =>  import('../../views/accounting/accounting.module').then(m => m.AccountingModule)
          },
          {
            path: 'settings',
            // canActivate: [AuthGuard],
            loadChildren: () =>  import('../../views/settings/settings.module').then(m => m.SettingsModule)
          },
      {
        path: 'reports',
        // canActivate: [AuthGuard],
        loadChildren: () =>  import('../../views/reports/reports.module').then(m => m.ReportsModule)
      },
          {
            path: 'support',
            // canActivate: [AuthGuard],
            loadChildren: () =>  import('../../views/support/support.module').then(m => m.SupportModule)
          },
    ]
 }
];

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
//   {
//     path: '',
//     children: moduleRoutes
//   },

//   // {
//   //   path: '**',
//   //   redirectTo: '/home',
//   //   pathMatch: 'full'
//   // }
// ];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
