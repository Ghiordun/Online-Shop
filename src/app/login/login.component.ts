import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseStatus } from '../core/enums.ts/ResponseStatus';
import { UserViewModel } from '../core/models/LoginViewModel';
import { DataService } from '../core/services/data-service.service';
import { LoginFacebookService } from '../core/services/login-facebook.service';
import { LoginGoogleService } from '../core/services/login-google.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  constructor(private dataService: DataService,
    private loginFacebookService: LoginFacebookService,
    private loginGoogleService: LoginGoogleService,
    private router: Router) { }
  serverErrors: string[] = [];
  ngOnInit(): void {

    this.formLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.loginFacebookService.setupFacebookLogin()
    this.loginGoogleService.googleInitialize(this.loginElement);
  }
  submit() {
    let username = this.formLogin.get("username").value;
    let pass = this.formLogin.get("password").value;

    if (username && pass) {
      this.dataService.login({ username: username, password: pass } as UserViewModel).subscribe(res => {
        if (res) {
          if (res.status == ResponseStatus.success) {
            // route to the dashboard
            this.router.navigate(["/dashboard"]);
          } else
            this.serverErrors = res.messages;

        }
      })
    }
  }

  loginWithFacebook() {
    this.loginFacebookService.loginWithFacebook();
  }

  loginWithGoogle() {
    this.loginGoogleService.prepareLogin(this.loginElement);
  }
}
