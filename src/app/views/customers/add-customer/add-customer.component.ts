import { Component, Inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { CustomersService } from 'src/app/core/services/customers.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})

export class AddCustomerComponent implements OnInit {
  isLoading =false
  loadingTypes=false;
  customerFormGroup!: UntypedFormGroup;
  customers!:any[]
  types=[
    {
      id:1,name:"Individual",code:"person"
    },
    {
      id:2,name:"Company",code:"company"
    },
  ]

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    // public dialogRef: MatDialogRef<AddCustomerComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService:CustomersService,
    private toastr: ToasterService,

  ) { }

  ngOnInit(): void {
    this.customerFormGroup = this.formBuilder.group({
      company_type: ['', Validators.required],
      name: ['', Validators.required],
      // tax_id: ['', Validators.required],
      country_id: [1, Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      property_account_receivable_id: [14, Validators.required],
      property_account_payable_id: [19, Validators.required],

    });
  }

  // onCloseDialog(dialogData?: any): any {
  //   const {reload = false, data = null} = dialogData || {};
  //   this.dialogRef.close({reload, data});
  // }

  addCustomer(){
    const payload = {
      company_type: this.customerFormGroup.get("company_type")?.value,
      name: this.customerFormGroup.get("name")?.value,
      // tax_id: this.customerFormGroup.get("tax_id")?.value,
      country_id: this.customerFormGroup.get("country_id")?.value,
      city: this.customerFormGroup.get("city")?.value,
      phone: this.customerFormGroup.get("phone")?.value,
      email: this.customerFormGroup.get("email")?.value,
      property_account_receivable_id: this.customerFormGroup.get("property_account_receivable_id")?.value,
      property_account_payable_id: this.customerFormGroup.get("property_account_payable_id")?.value,
      default_account_id: this.customerFormGroup.get("default_account_id")?.value,
      token:localStorage.getItem("access_token")
    }

    this.isLoading=true
    if(this.customerFormGroup.valid){
      this.customerService.createCustomer(payload).subscribe(res=>{
        if(res.result.code==200){
          this.isLoading=false
          this.toastr.showSuccess(res.result.message,"SUCCESS")
          this.router.navigate([`/customers`])
          // this.onCloseDialog({reload:true})
        }else{
          this.toastr.showWarning(res.result.message,"VALIDATION ERROR")
        }
      })
    }else{
      this.toastr.showWarning("Fill all information","VALIDATION ERROR")
    }
  }

}
