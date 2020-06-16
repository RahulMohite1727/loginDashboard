import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableService } from '../auth-module/table/table.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  loginRegForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private tableService: TableService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.loginRegForm = this.fb.group({
      userName: [null],
      email: [null],
      password: [null],
      confirmedPassword: [null],

    });
  }
  submit() {
    this.tableService.saveLoginRecord(this.loginRegForm.getRawValue());
    this.router.navigate(['']);
  }


}
