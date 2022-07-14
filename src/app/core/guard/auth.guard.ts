import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(
    private _tokenService: TokenService,
    private _router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this._tokenService.haveToken() && state.url === '/home') {
      alert('Sessão expirada, realize o login novamente!');
      this._router.navigate(['/entrar'])
      return false;
    }

    if (this._tokenService.haveToken() && state.url !== '/home') {
      alert('Faça o logout para acessar o login ou o registrar')
      this._router.navigate(['/home']);
      return false;
    }

    return true;
  }

}
