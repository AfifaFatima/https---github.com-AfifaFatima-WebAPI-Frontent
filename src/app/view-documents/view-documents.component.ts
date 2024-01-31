import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileService } from '../file.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-documents',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
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

}
