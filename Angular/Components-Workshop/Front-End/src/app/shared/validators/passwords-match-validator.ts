import { FormGroup, ValidatorFn } from "@angular/forms";


export function matchPasswordsValidator(passwordName: string, rePasswordName: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup
        const passControll = group.get(passwordName);
        const rePassControll = group.get(rePasswordName);

        return passControll?.value === rePassControll?.value ? null : { matchPasswordsValidator: true }
    }
}