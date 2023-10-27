import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup, MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerListingComponent } from '../../customers/customer-listing/customer-listing.component';
import { ContractsComponent } from '../contracts/contracts.component';
import { StructuresComponent } from '../structures/structures.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


  @ViewChild(CustomerListingComponent) customer!: CustomerListingComponent;
  @ViewChild(ContractsComponent) contracts!: ContractsComponent;
  @ViewChild(StructuresComponent) structures!: StructuresComponent;

  @ViewChild('tabs', {static: false}) tabs: MatTabGroup | undefined;

  path!: 'customer' | 'contracts' | 'structure';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.path = params.tab;
    });

    const tabGroup = this.tabs;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) {
      return;
    }
  }

  ngAfterViewInit(): void {
    const tabGroup = this.tabs;
    if (this.path === 'customer') {
      // @ts-ignore
      tabGroup.selectedIndex = 0;
    }
    if (this.path === 'contracts') {
      // @ts-ignore
      tabGroup.selectedIndex = 1;
    }
    if (this.path === 'structure') {
      // @ts-ignore
      tabGroup.selectedIndex = 2;
    }
  }

  tabClick(tab: MatTabChangeEvent): void {
    if (tab.index === 0) {
      // this.journals.getUsers();
      this.router.navigateByUrl('employees?tab=customer');
    }
    if (tab.index === 1) {
      // this.roles.getRoles();
      this.router.navigateByUrl('employees?tab=contracts');
    }
    if (tab.index === 2) {
      // this.roles.getRoles();
      this.router.navigateByUrl('employees?tab=structure');
    }
  }
}
