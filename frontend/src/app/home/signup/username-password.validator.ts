import { ValidatorFn, FormGroup } from "@angular/forms";

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
  const userName = formGroup.get("userName").value;
  const password = formGroup.get("password").value;

  if (password.trim() + password.trim()) {
    return userName !== password ? null : { userNamePassword: true };
  }
  return null;
};
