import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ViewDocumentsComponent } from './view-documents/view-documents.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {
    path: 'uploadDocuments',
    component: UploadDocumentsComponent,
  },
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'viewDocuments',
    component: ViewDocumentsComponent,
  },

  // Add this as the last route in your configuration
  {
    path: '**',
    redirectTo: '', // or any default route
    pathMatch: 'full',
  }
];
