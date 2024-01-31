import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  constructor(private router: Router) { }
  onRegister() {
    this.router.navigate(["signup"])
  }

}
