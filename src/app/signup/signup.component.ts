import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  registerForm: any;

  constructor(private router: Router, private _snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void {

  }
  onSubmit() {
    if (this.registerForm.valid) {
      // Perform your authentication logic here
      // For now, let's navigate to 'uploadDocuments' if the form is valid

      this.router.navigate(['uploadDocuments']);

    } else {
      this._snackBar.open('Please Enter Email and Password', 'Close');
    }
  }
  onRegister() {

    this.router.navigate([''])

  }
}
