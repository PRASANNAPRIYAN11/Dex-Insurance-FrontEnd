// login.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loggedInUser: EventEmitter<string> = new EventEmitter<string>();
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { user, password } = this.loginForm.value;
    this.authService.login(user, password).subscribe(
      (response) => {
        if (response && response.message === 'Login successful') {
          this.loggedInUser.emit(user);
          this.authService.setLoggedInUser(user);
          this.router.navigate(['/policy']);
        } else {
          this.loginError = 'Login failed. Please check your credentials.';
        }
      },
      () => {
        this.loginError = 'An error occurred. Please try again later.';
      }
    );
  }
}
