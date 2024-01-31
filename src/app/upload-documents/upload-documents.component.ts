import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { FileService } from '../file.service';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-documents',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, HttpClientModule ],
  providers: [ HttpClientModule, FileService ],
  templateUrl: './upload-documents.component.html',
  styleUrl: './upload-documents.component.css'
})
export class UploadDocumentsComponent {
  constructor( private router: Router, private _snackBar: MatSnackBar, private fileService: FileService) { }

  filename: string = "";
  selectedFile: File | null = null;

  ngOnInit(): void {
  }

  goNext() {

    this.router.navigate(['viewDocuments']);
  }
  uploadPDF() {
    const allowedExtensions = /(\.pdf)$/i;
    if (this.selectedFile) {
      // Check if the file extension is allowed
      if (allowedExtensions.test(this.selectedFile.name)) {
        this.fileService.UploadPDF(this.selectedFile).subscribe(
          (resp: any) => {
            if (resp.success === true) {
              this._snackBar.open(resp.message, 'Ok', { duration: 2500 });
              console.log('File uploaded successfully.');
              // Handle success, e.g., show a success message
              
            }
          },
          (err: any) => {
            this._snackBar.open("Error", 'Ok', { duration: 2500 });
            // Handle error, e.g., show an error message
          }
        );
      } else {
        this._snackBar.open("Invalid file format. Please upload a PDF file.", 'Ok', { duration: 2500 });
        // Handle the case where the selected file has an invalid extension
      }
    } else {
      this._snackBar.open("No file selected. Please choose a PDF file to upload.", 'Ok', { duration: 2500 });
      // Handle the case where no file is selected
    }
  }
  uploadImage() {
    const allowedImageExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (this.selectedFile) {
      // Check if the file extension is allowed for images
      if (allowedImageExtensions.test(this.selectedFile.name)) {
        this.fileService.UploadPDF(this.selectedFile).subscribe(
          (resp: any) => {
            if (resp.success === true) {
              this._snackBar.open(resp.message, 'Ok', { duration: 2500 });
              console.log('Image uploaded successfully.');
              // Handle success, e.g., show a success message
            }
          },
          (err: any) => {
            this._snackBar.open("Error", 'Ok', { duration: 2500 });
            // Handle error, e.g., show an error message
          }
        );
      } else {
        this._snackBar.open("Invalid file format. Please upload a JPG or PNG image.", 'Ok', { duration: 2500 });
        // Handle the case where the selected file has an invalid extension for images
      }
    } else {
      this._snackBar.open("No file selected. Please choose a JPG or PNG image to upload.", 'Ok', { duration: 2500 });
      // Handle the case where no file is selected
    }
  }
  uploadExcel() {
    const allowedExcelExtension = /(\.xlsx)$/i;
    if (this.selectedFile) {
      // Check if the file extension is allowed for Excel files
      if (allowedExcelExtension.test(this.selectedFile.name)) {
        this.fileService.UploadPDF(this.selectedFile).subscribe(
          (resp: any) => {
            if (resp.success === true) {
              this._snackBar.open(resp.message, 'Ok', { duration: 2500 });
              console.log('Excel file uploaded successfully.');
              // Handle success, e.g., show a success message
            }
          },
          (err: any) => {
            this._snackBar.open("Error", 'Ok', { duration: 2500 });
            // Handle error, e.g., show an error message
          }
        );
      } else {
        this._snackBar.open("Invalid file format. Please upload an Excel file with .xlsx extension.", 'Ok', { duration: 2500 });
        // Handle the case where the selected file has an invalid extension for Excel files
      }
    } else {
      this._snackBar.open("No file selected. Please choose an Excel file (.xlsx) to upload.", 'Ok', { duration: 2500 });
      // Handle the case where no file is selected
    }
  }
  onFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.selectedFile = files[0];
      this.filename = this.selectedFile.name;
    } else {
      this.selectedFile = null;
      this.filename = '';
    }
  }

}
