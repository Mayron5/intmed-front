import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage = window.localStorage;

  constructor() { }

  public setItem(key: string, value: any) {
    this.localStorage.setItem(key, value.toString());
  }

  public getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  public clear() {
    this.localStorage.clear();
  }

}
