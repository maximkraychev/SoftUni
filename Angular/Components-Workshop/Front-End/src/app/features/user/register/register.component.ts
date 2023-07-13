import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/services/mock-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {

  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    tel: ['', [Validators.pattern('^[0-9]+$')]],
    password: ['', [Validators.required]],
    rePassword: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    console.log('asdjfioafhsofho');
    
  }

  ngOnInit(): void {
    this.registerForm.get('username')?.valueChanges.subscribe(console.log);
  }

  handleSubmit(): void {
    console.log(this.registerForm.get('username')?.errors);
  }
}




// export class RegisterComponent implements OnInit {
//   constructor(private auth: MockAuthService, private route: Router) {}

//   ngOnInit(): void {
//     this.login();
//     this.route.navigate(['home'])
//   }

//   login() {
//     this.auth.login();
//   }
// }
