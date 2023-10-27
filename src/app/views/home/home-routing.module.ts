import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DetailCustomerComponent} from '../customers/detail-customer/detail-customer.component';
import {AddFileComponent} from './add-file/add-file.component';
import {DetailFileComponent} from './detail-file/detail-file.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
          {
            path: '',
            component: HomeComponent,
                data: {returnUrl: window.location.pathname}
          },
          {
            path: 'new-file',
            component: AddFileComponent,
          },
          {
            path: 'file-details/:id',
            component: DetailFileComponent,
          },
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }
