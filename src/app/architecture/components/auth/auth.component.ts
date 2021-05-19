import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nd-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private __activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.__activatedRoute.queryParams
      .subscribe(qp => {
        if (qp['logout']) {
          this.initIfLogout()
        } else {
          this.initIfLogin();
        }
      });
  }

  initIfLogin() {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  initIfLogout() {
    this.authService.logout();
  }

  private getForm() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.authService.login(this.getForm().username.value, this.getForm().password.value);
  }
}
