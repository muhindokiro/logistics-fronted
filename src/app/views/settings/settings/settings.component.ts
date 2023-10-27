import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCardComponent } from 'src/app/shared/widgets/card-user/user-card.component';
import { ProfileComponent } from '../profile/profile.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild(ProfileComponent) profile!: ProfileComponent;
  @ViewChild(UsersComponent) users!: UsersComponent;

  @ViewChild('tabs', {static: false}) tabs: MatTabGroup | undefined;

  path!: 'profile' | 'users';

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

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    const tabGroup = this.tabs;

    if (this.path === 'profile') {
      // @ts-ignore
      tabGroup.selectedIndex = 2;
    }
  }

  tabClick(tab: MatTabChangeEvent): void {
    if (tab.index === 0) {
      // this.journals.getUsers();
      this.router.navigateByUrl('settings?tab=profile');
    }
    if (tab.index === 1) {
      // this.roles.getRoles();
      this.router.navigateByUrl('settings?tab=users');
    }
  }

}
