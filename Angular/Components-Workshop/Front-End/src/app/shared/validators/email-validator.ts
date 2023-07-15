import { ValidatorFn } from "@angular/forms";
import { emailDomains } from "src/app/config/config";

const domainName = emailDomains.domainNames.join('|');
const topLevelDomain = emailDomains.topLevelDomains.join('|');

const regExp = new RegExp(`^[^@]\\w{6,}@(${domainName})\\.(${topLevelDomain})$`);

export function emailValidator(): ValidatorFn {
    return (control) => {
        const email = control.value;
        return email == '' || regExp.test(email) ? null : { emailValidator: true };
    }
}

