import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoadingUser = false;
  userFormGroup!: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
buildForm(): void{
    this.userFormGroup = this.formBuilder.group({
      // username: new FormControl({value: '', disabled: true}, [Validators.required]),\
      username: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      // last_name: new FormControl({value: ''}, [Validators.required]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      phone: new UntypedFormControl('', [Validators.required]),
    });
}
}
