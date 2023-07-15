import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/services/mock-auth.service';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/passwords-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator()]],
    tel: ['', [Validators.pattern('^[0-9]*$')]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required, matchPasswordsValidator('password', 'rePassword')]]
      },
      { validators: [matchPasswordsValidator('password', 'rePassword')] }
    )
  });

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.registerForm.get('username')?.valueChanges.subscribe(console.log);
    console.log(this.passGroup);
    
  }

  handleSubmit(): void {
    console.log(this.registerForm.get('username')?.errors);
  }

  get passGroup(): FormGroup {
    return this.registerForm.get('passGroup') as FormGroup;
  }
}
