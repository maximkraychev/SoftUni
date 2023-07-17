import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[appEmailValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: CustomEmailValidatorDirective, multi: true}]
})
export class CustomEmailValidatorDirective implements Validator {

    @Input('appEmailValidator') valueToCheck!: string;
    
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if(this.valueToCheck) {

        }
        return null;
    }

    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error("Method not implemented.");
    // }

}