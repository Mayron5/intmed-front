import { Injectable } from '@angular/core';
import { LocalStorageService } from '../core/storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _localStorage: LocalStorageService
  ) { }

  public setUserName(username: string) {
    this._localStorage.setItem('username', username);
  }

  public getUserName() {
    return this._localStorage.getItem('username');
  }

}
