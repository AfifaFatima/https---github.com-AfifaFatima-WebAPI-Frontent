import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  providers: [],
})

export class SigninComponent implements OnInit {

  signinForm: any;
  registerForm: any;


  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signinForm.valid) {
      // Perform your authentication logic here
      // For now, let's navigate to 'uploadDocuments' if the form is valid

      this.router.navigate(['uploadDocuments']);

    } else {
      this._snackBar.open('Please Enter Email and Password', 'Close');
    }
  }
  onRegister() {
    this.router.navigate(['signup'])
  }
}
