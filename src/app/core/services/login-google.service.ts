import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//47740463453-392nsau09dl6gnig3o3ifm206v9uhbhc.apps.googleusercontent.com
export class LoginGoogleService {
auth2:any;
  constructor() { }

  googleInitialize(loginElement: ElementRef) {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '47740463453-392nsau09dl6gnig3o3ifm206v9uhbhc.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin(loginElement);
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }
  
  prepareLogin(loginElement: ElementRef) {
    this.auth2.attachClickHandler(loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // this.show = true;
        // this.Name =  profile.getName();
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error) => {
    //    alert(JSON.stringify(error, undefined, 2));
      });
    }
}
