import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from '../components/footer/footer.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { TopNavComponent } from '../components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    DefaultComponent,
    TopNavComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }
