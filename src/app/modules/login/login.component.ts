import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/token/token.service';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public userLogin !: FormGroup;
  public errorLogin: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
    private _clientService: UserService,
    private _tokenService: TokenService
  ) { }

  ngOnInit() {
    this.userLogin = this._formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public login(): void {
    if (this.userLogin.valid) {
      this._loginService.login(this.userLogin.get('login')?.value, this.userLogin.get('password')?.value).subscribe({
        next: (response) => {
          this._tokenService.setToken('9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b')
          this._clientService.setUserName(response.nome);
          this._clientService.setUserId(response.id)
          this._router.navigate(['/home']);
        },
        error: () => this.errorLogin = true,
      })
    }
  }

}
