import { ValidationErrors, AbstractControl } from '@angular/forms';

export class Match {
  static match(group: AbstractControl): ValidationErrors | null {
    let password = group.get('password');
    let confirmPassword = group.get('confirmPassword');

    if (!password || !confirmPassword) {
      return { controlNotFound: false };
    }

    const error =
      password.value === confirmPassword.value ? null : { noMatch: true };
    confirmPassword.setErrors(error);
    return error;
  }
}
