import { Injectable } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private _localStorage: LocalStorageService
  ) { }

  public setToken(token: string) {
    this._localStorage.setItem('token', token);
  }

  public getToken() {
    return this._localStorage.getItem('token');
  }

  public haveToken() {
    return !!this.getToken();
  }

}
