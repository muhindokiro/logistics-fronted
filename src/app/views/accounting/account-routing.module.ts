import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/finance',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
          {
            path: '',
            component: AccountingComponent,
                data: {returnUrl: window.location.pathname}
          },
        ]
    },
    { path: '**', redirectTo: '/finance', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountsRoutingModule { }
