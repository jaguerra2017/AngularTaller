import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from  '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  submitted = false
  errorMessge = null

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {

   }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['admin/panel'])
    }

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.submitted = true
    if (this.loginForm.invalid) {
      return;
    }

    try {
      return await this.authService.login(this.f.email.value, this.f.password.value)
    } catch (e) {
        this.errorMessge = 'Usuario o contraseña incorrectos'
    } finally {
        console.log('We do cleanup here');
    }
  }

}
