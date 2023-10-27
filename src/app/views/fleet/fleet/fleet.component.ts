import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabChangeEvent, MatTabGroup} from '@angular/material/tabs';
import {ActivatedRoute, Router} from '@angular/router';
import {CarManufacturerComponent} from '../car-manufacturer/car-manufacturer.component';
import {CarModelComponent} from '../car-model/car-model.component';
import {CarServicesComponent} from '../car-services/car-services.component';
import {CarsComponent} from '../cars/cars.component';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {
  @ViewChild(CarManufacturerComponent) manufacturer!: CarManufacturerComponent;
  @ViewChild(CarModelComponent) model!: CarModelComponent;
  @ViewChild(CarServicesComponent) service!: CarServicesComponent;
  @ViewChild(CarsComponent) cars!: CarsComponent;

  @ViewChild('tabs', {static: false}) tabs: MatTabGroup | undefined;

  path!: 'cars' | 'manufacturer' | 'model' | 'service';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.path = params.tab;
    });

    const tabGroup = this.tabs;
    if (!tabGroup) {
      return;
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    const tabGroup = this.tabs;

    if (this.path === 'manufacturer') {
      // @ts-ignore
      tabGroup.selectedIndex = 2;
    }
    if (this.path === 'model') {
      // @ts-ignore
      tabGroup.selectedIndex = 3;
    }
    if (this.path === 'service') {
      // @ts-ignore
      tabGroup.selectedIndex = 4;
    }
  }

  tabClick(tab: MatTabChangeEvent): void {
    if (tab.index === 0) {
      // this.journals.getUsers();
      this.router.navigateByUrl('fleet?tab=cars');
    }
    if (tab.index === 1) {
      // this.roles.getRoles();
      this.router.navigateByUrl('fleet?tab=manufacturer');
    }
    if (tab.index === 2) {
      // this.roles.getRoles();
      this.router.navigateByUrl('fleet?tab=model');
    }
    if (tab.index === 3) {
      // this.roles.getRoles();
      this.router.navigateByUrl('fleet?tab=entries');
    }
    if (tab.index === 4) {
      // this.roles.getRoles();
      this.router.navigateByUrl('fleet?tab=service');
    }
  }

}
