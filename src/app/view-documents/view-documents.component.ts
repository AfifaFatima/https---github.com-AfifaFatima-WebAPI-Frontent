import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileService } from '../file.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-view-documents',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, HeaderComponent],
  providers: [HttpClientModule, FileService],
  templateUrl: './view-documents.component.html',
  styleUrl: './view-documents.component.css'
})
export class ViewDocumentsComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,private fileService: FileService, private _snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
    this.GetAllPDF();
  }
  fileName: any;
  id: any
  PDFList: any = [];

  GetAllPDF() {
    this.fileService.GetAllPDF().subscribe(
      (resp: any) => {
        if (resp.success == true) {
          this.PDFList = resp.result;
          this._snackBar.open(resp.message, 'OK', { duration: 2500 });
        }
      },
      (err: any) => {
        this._snackBar.open("Error", "Ok", { duration: 2500 });
      }
    )
  }
  downloadFile(fileName: string, id: number) {
    this.fileService.downloadPdf(fileName, id).subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
    }, error => {
      console.error('Error downloading file:', error);
      // Handle error, show error message, etc.
    });
  }

}
