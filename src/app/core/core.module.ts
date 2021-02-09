import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataService } from './services/data-service.service';
import { LoginFacebookService } from './services/login-facebook.service';
import { LoginGoogleService } from './services/login-google.service';

@NgModule({
  declarations: [
    DataService,
    LoginFacebookService,
    LoginGoogleService
  ],
  imports: [ 
    HttpClientModule, 
  ],
  providers: [],

})
export class CoreModule { }
