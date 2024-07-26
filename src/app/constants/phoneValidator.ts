import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const phoneNumberValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const validPhoneNumberPattern = /^[0-9]*$/;
  const isValid = validPhoneNumberPattern.test(control.value);
  return isValid ? null : { invalidPhoneNumber: true };
};
