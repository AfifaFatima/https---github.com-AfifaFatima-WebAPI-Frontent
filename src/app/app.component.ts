import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ViewDocumentsComponent } from './view-documents/view-documents.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './signup/signup.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UploadDocumentsComponent,SignupComponent, ViewDocumentsComponent, SigninComponent, HeaderComponent, ToastrModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
