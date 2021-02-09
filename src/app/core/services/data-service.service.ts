import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserViewModel } from '../models/LoginViewModel';
import { ResponseBaseViewModel } from '../models/ResponseBaseViewModel';

export let ROUTES = {
  login: () => `${environment.api_url}/login`,
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }


  login(username: UserViewModel): Observable<ResponseBaseViewModel> {
    return this.http.post<ResponseBaseViewModel>(ROUTES.login(), JSON.stringify(username), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}

