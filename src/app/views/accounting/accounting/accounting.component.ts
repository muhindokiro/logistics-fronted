import {Component, OnInit, ViewChild} from '@angular/core';
import {TaxesComponent} from '../taxes/taxes/taxes.component';
import {JournalsComponent} from '../journals/journals/journals.component';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTabChangeEvent, MatTabGroup} from '@angular/material/tabs';
import {JournalEntriesComponent} from '../journal-entries/journal-entries.component';
import {JournalItemsComponent} from '../journal-items/journal-items.component';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {
  @ViewChild(TaxesComponent) taxes!: TaxesComponent;
  @ViewChild(JournalsComponent) journals!: JournalsComponent;
  @ViewChild(JournalEntriesComponent) entries!: JournalEntriesComponent;
  @ViewChild(JournalItemsComponent) items!: JournalItemsComponent;

  @ViewChild('tabs', {static: false}) tabs: MatTabGroup | undefined;

  path!: 'journals' | 'taxes' | 'charts-of-accounts' | 'entries'  | 'items';

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

    if (this.path === 'charts-of-accounts') {
      // @ts-ignore
      tabGroup.selectedIndex = 2;
    }
    if (this.path === 'entries') {
      // @ts-ignore
      tabGroup.selectedIndex = 3;
    }
    if (this.path === 'items') {
      // @ts-ignore
      tabGroup.selectedIndex = 4;
    }
  }

  tabClick(tab: MatTabChangeEvent): void {
    if (tab.index === 0) {
      // this.journals.getUsers();
      this.router.navigateByUrl('finance?tab=journals');
    }
    if (tab.index === 1) {
      // this.roles.getRoles();
      this.router.navigateByUrl('finance?tab=taxes');
    }
    if (tab.index === 2) {
      // this.roles.getRoles();
      this.router.navigateByUrl('finance?tab=charts-of-accounts');
    }
    if (tab.index === 3) {
      // this.roles.getRoles();
      this.router.navigateByUrl('finance?tab=entries');
    }
    if (tab.index === 4) {
      // this.roles.getRoles();
      this.router.navigateByUrl('finance?tab=items');
    }
  }

}
