import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/app/types/loginResponse';
import { environment } from 'src/environments/environment';

@Injectable()

export class LoginService {

  private API_URL = environment.API_URL;

  constructor(
    private _http: HttpClient
  ) { }

  public login(username: string, password: string) {
    return this._http.post<LoginResponse>(`${this.API_URL}/users/login`, { username, password })
  }

}
