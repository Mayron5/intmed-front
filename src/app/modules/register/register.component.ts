import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from './confirmPassword.validator';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  public userRegister !: FormGroup;
  public success: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _registerService: RegisterService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.userRegister = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: confirmPasswordValidator("password", "confirmPassword")
    });

  }

  public registerUser() {

    if (this.userRegister.valid) {
      const username = this.userRegister.get('username')?.value;
      const email = this.userRegister.get('email')?.value;
      const password = this.userRegister.get('password')?.value;

      this._registerService.register(username, email, password).subscribe({
        next: (response) => {
          this.success = true;
          this.userRegister.reset();
        },
        error: () => console.log('error ao registrar usuario'),
        complete: () => setTimeout(() => this._router.navigate(['/entrar']), 3000)
      });
    }
  }

}
