import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/settings',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
          {
            path: '',
            component: SettingsComponent,
                data: {returnUrl: window.location.pathname}
          },
        ]
    },
    { path: '**', redirectTo: '/settings', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SettingsRoutingModule { }
