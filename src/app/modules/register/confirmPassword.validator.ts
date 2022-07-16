import { FormGroup } from "@angular/forms";

export function confirmPasswordValidator(controlPassword: string, controlConfirmPassword: string) {

  return (formGroup: FormGroup) => {
    let password = formGroup.controls[controlPassword];
    let confirmPassword = formGroup.controls[controlConfirmPassword];

    if (password.value !== confirmPassword.value)
      confirmPassword.setErrors({confirmPassword: true})
    else
      confirmPassword.setErrors(null)
  }

}

