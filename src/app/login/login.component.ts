import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableService } from '../auth-module/table/table.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private tableService: TableService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [null],
      password: [null]
    })
  }
  submit() {
    let loginCred = this.tableService.getLoginItem();
    console.log("loginCred ", loginCred);

    if (this.loginForm.controls.userName.value === loginCred.userName && this.loginForm.controls.password.value === loginCred.password) {
      console.log("login Successful");

      this.router.navigate(['./register/reg']);
      return;
    }
    else {
      alert("Wrong User Name And Password")
    }
  }
}
