import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class RegisterService {

  private API_URL = environment.API_URL;

  constructor(
    private _http: HttpClient
  ) { }

  public register(nome: string, email: string, password: string) {
    return this._http.post(`${this.API_URL}/usuarios/`, { 'nome': nome, 'email': email, 'senha': password })
  }
}
