import { Component, OnInit } from '@angular/core';
import {ITableColumnInterface, ITableRowActions} from '../../../shared/interfaces/table-interface';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Sort} from '@angular/material/sort';
import {AddTaxesComponent} from '../_modals/add-taxes/add-taxes.component';

@Component({
  selector: 'app-journal-items',
  templateUrl: './journal-items.component.html',
  styleUrls: ['./journal-items.component.scss']
})
export class JournalItemsComponent implements OnInit {
  generalTableColumns: ITableColumnInterface[] = [];
  isLoadingTableData = false;
  page = 1;
  pageSize = 50;
  totalLength!: number;
  totalElements!: number;
  generalTableDataArray: any [] = [
    // tslint:disable-next-line:max-line-length
    {id: 1, date: '09/13/2023', partner: 'Hussein Kadweka', journal: 'Gulf bank', name: 'KG2983923', debit: 200, credit: 200, state: 'Post'},
    // tslint:disable-next-line:max-line-length
    {id: 2, date: '09/13/2023', partner: 'Hussein Kadweka', journal: 'Gulf bank', name: 'KG2983923', debit: 200, credit: 200, state: 'Post'},
    // tslint:disable-next-line:max-line-length
    {id: 3, date: '09/13/2023', partner: 'Hussein Kadweka', journal: 'Gulf bank', name: 'KG2983923', debit: 200, credit: 200, state: 'Post'},
    // tslint:disable-next-line:max-line-length
    {id: 4, date: '09/13/2023', partner: 'Hussein Kadweka', journal: 'Gulf bank', name: 'KG2983923', debit: 200, credit: 200, state: 'Post'},
    // tslint:disable-next-line:max-line-length
    {id: 5, date: '09/13/2023', partner: 'Hussein Kadweka', journal: 'Gulf bank', name: 'KG2983923', debit: 200, credit: 200, state: 'Post'},
    // tslint:disable-next-line:max-line-length
    {id: 6, date: '09/13/2023', partner: 'Hussein Kadweka', journal: 'Gulf bank', name: 'KG2983923', debit: 200, credit: 200, state: 'Post'},
    // tslint:disable-next-line:max-line-length
    {id: 7, date: '09/13/2023', partner: 'Hussein Kadweka', journal: 'Gulf bank', name: 'KG2983923', debit: 200, credit: 200, state: 'Post'},

  ];
  constructor(
    private router: Router,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.initializeColumns();
  }
  initializeColumns(): void {
    this.generalTableColumns = [
      {
        name: 'DATE',
        dataKey: 'date',
        position: 'left',
        isSortable: true,
        searchKey: 'DATE',
      },
      {
        name: 'JOURNAL ENTRY',
        dataKey: 'name',
        position: 'center',
        isSortable: true,
        searchKey: 'NUMBER'
      },
      {
        name: 'ACCOUNT',
        dataKey: 'journal',
        position: 'center',
        isSortable: true,
        searchKey: 'ACCOUNT'
      },
      {
        name: 'PARTNER',
        dataKey: 'partner',
        position: 'left',
        isSortable: true,
        searchKey: 'PARTNER',
      },
      {
        name: 'DEBIT',
        dataKey: 'debit',
        position: 'left',
        isSortable: true,
        units: 'currency',
        searchKey: 'TOTAL'
      },
      {
        name: 'CREDIT',
        dataKey: 'credit',
        position: 'left',
        isSortable: true,
        units: 'currency',
        searchKey: 'TOTAL'
      },
      {
        name: 'STATUS',
        dataKey: 'state',
        position: 'left',
        isSortable: true,
        searchKey: 'STATE'
      },
      {
        name: 'ACTIONS',
        dataKey: 'actions',
        position: 'left',
        isSortable: false,
      }
    ];
  }
  onPageChange(data: any): any {
    this.page = data?.pageIndex + 1;
    this.pageSize = data?.pageSize;
  }
  doTableActions(action: ITableRowActions): void {
    if (action.action === 'View') {
      this.router.navigate([`/member/member-details/${action.element.code}`]);
    }
  }
  goToDetails(event: any): any {
    this.router.navigate([`/home/file-details/${event.id}`]);
  }

  sortData(sortParameters: Sort): any {
    // this.generalTableDataArray = this.tableSortService.sortData(
    //   sortParameters,
    //   this.generalTableDataArray
    // );
  }
  addItem(event: any): any{
    const dialogRef = this.dialog.open(AddTaxesComponent, {
      panelClass: 'dialogClass',
      data: event,
    });
    dialogRef.afterClosed().subscribe(({reload, data}) => {
      if (reload) {
        // this.getUsers();
      }
    });
  }
}
