import { Injectable } from '@angular/core';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class LoginFacebookService {

  constructor() {
  }

  setupFacebookLogin() {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '3736035863132951',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }
  
  loginWithFacebook() {

    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        debugger;
        //this.toastr.successToastr('login successful', 'Success!');
      }
      else {
        console.log('User login failed');
      }
    });
  }
}
