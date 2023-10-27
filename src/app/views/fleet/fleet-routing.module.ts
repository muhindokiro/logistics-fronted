import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFleetComponent } from './add-fleet/add-fleet.component';
import { FleetComponent } from './fleet/fleet.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/fleet',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
          {
            path: '',
            component: FleetComponent,
                data: {returnUrl: window.location.pathname}
          },
          {
            path: 'new_fleet',
            component: AddFleetComponent,
          },
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FleetRoutingModule { }
